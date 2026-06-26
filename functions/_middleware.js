// Cloudflare Pages Function — edge password gate for the Alta Vista Hub.
//
// Runs at the edge on EVERY request before any static asset is served, so the
// static export is never exposed without a valid session. No database, no
// internal server: the only secret is the `HUB_ACCESS_PASSWORD` environment
// variable configured in the Cloudflare Pages dashboard.
//
// Session model: a successful login sets an HttpOnly + Secure cookie whose
// value is SHA-256(salt + password) — the password itself never lands in the
// cookie or in this source. Each request recomputes the expected token from the
// env var and compares. Rotating `HUB_ACCESS_PASSWORD` changes the hash, which
// instantly invalidates every existing cookie. Cookie lives ~30 days.

const COOKIE_NAME = "hub_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days, in seconds
const AUTH_PATH = "/__auth"; // where the login form POSTs
const SALT = "alta-vista-hub::v1"; // bumping this also invalidates old cookies

/** Hex SHA-256 of `${SALT}:${password}` — the session token. */
async function tokenFor(password) {
  const bytes = new TextEncoder().encode(`${SALT}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Constant-time string comparison. */
function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/** Read a single cookie value from the Cookie header. */
function readCookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return null;
}

/**
 * Resolve the password from whatever object the runtime actually populated.
 *
 * Canonical Pages Functions inject bindings/secrets on `context.env`. But the
 * Workers autoconfig for this repo enabled `nodejs_compat`, and OpenNext-style
 * build pipelines can surface vars on `process.env` instead. We read the
 * canonical source first, then fall back, and report which one won so we can
 * see the truth in production instead of guessing.
 */
function resolvePassword(env) {
  if (env && typeof env.HUB_ACCESS_PASSWORD === "string" && env.HUB_ACCESS_PASSWORD) {
    return { value: env.HUB_ACCESS_PASSWORD, source: "context.env" };
  }
  if (
    typeof process !== "undefined" &&
    process.env &&
    typeof process.env.HUB_ACCESS_PASSWORD === "string" &&
    process.env.HUB_ACCESS_PASSWORD
  ) {
    return { value: process.env.HUB_ACCESS_PASSWORD, source: "process.env" };
  }
  return { value: null, source: null };
}

/** TEMPORARY: build an env-introspection report (KEY NAMES only — never values). */
function envDiagnostics(context, env) {
  const lines = [];
  try {
    lines.push(`context keys: ${JSON.stringify(Object.keys(context || {}))}`);
  } catch {}
  try {
    lines.push(`context.env keys: ${JSON.stringify(Object.keys(env || {}))}`);
  } catch {
    lines.push("context.env: <not enumerable / undefined>");
  }
  try {
    if (typeof process !== "undefined" && process.env) {
      lines.push(`process.env keys: ${JSON.stringify(Object.keys(process.env))}`);
    } else {
      lines.push("process.env: <undefined> (no nodejs_compat at runtime)");
    }
  } catch {
    lines.push("process.env: <not accessible>");
  }
  lines.push(
    `HUB_ACCESS_PASSWORD in context.env: ${!!(env && "HUB_ACCESS_PASSWORD" in env)}`,
  );
  lines.push(
    `HUB_ACCESS_PASSWORD in process.env: ${
      typeof process !== "undefined" && process.env
        ? "HUB_ACCESS_PASSWORD" in process.env
        : "n/a"
    }`,
  );
  try {
    lines.push(`CF_PAGES_BRANCH: ${(env && env.CF_PAGES_BRANCH) || "<none>"}`);
  } catch {}
  return lines.join("\n");
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const resolved = resolvePassword(env);
  const password = resolved.value;

  // ── TEMPORARY DEBUG — remove once the env binding is confirmed. ──
  const diag = envDiagnostics(context, env);
  console.log("[hub-gate]\n" + diag + `\nresolved source: ${resolved.source}`);
  // ── END TEMPORARY DEBUG ──

  // If the gate is misconfigured (no env var on ANY source), fail closed and
  // render the live introspection so the real binding state is visible.
  if (!password) {
    return htmlResponse(loginPage({ configError: true, diag }), 503);
  }

  const expected = await tokenFor(password);

  // Already authenticated → let the request fall through to the static asset
  // pipeline (which also applies _redirects, so `/` → `/educador/`).
  const cookie = readCookie(request, COOKIE_NAME);
  if (cookie && safeEqual(cookie, expected)) {
    return next();
  }

  // Login submission.
  if (request.method === "POST" && url.pathname === AUTH_PATH) {
    const form = await request.formData();
    const submitted = String(form.get("password") || "");
    if (safeEqual(submitted, password)) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/educador/",
          "Set-Cookie": `${COOKIE_NAME}=${expected}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE}`,
          "Cache-Control": "no-store",
        },
      });
    }
    return htmlResponse(loginPage({ error: true }), 401);
  }

  // Any other unauthenticated request → show the login screen.
  return htmlResponse(loginPage({}), 401);
}

function htmlResponse(body, status) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

/** Escape text for safe insertion into HTML. */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Self-contained login page in the Alta Vista Hub visual identity. */
function loginPage({ error = false, configError = false, diag = "" } = {}) {
  const errorBanner = error
    ? `<p class="msg error" role="alert">Senha incorreta. Tente novamente.</p>`
    : "";
  const diagBlock =
    configError && diag
      ? `<pre style="text-align:left;font-size:11px;line-height:1.45;background:#0b0f17;color:#9fe6a0;padding:12px;border-radius:8px;overflow:auto;margin:0 0 14px;">${escapeHtml(diag)}</pre>`
      : "";
  const configBanner = configError
    ? `<p class="msg error" role="alert">O acesso ainda não foi configurado. Defina a variável <code>HUB_ACCESS_PASSWORD</code> no Cloudflare Pages.</p>${diagBlock}`
    : "";
  const disabled = configError ? "disabled" : "";

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Alta Vista Hub — Acesso</title>
<style>
  :root {
    --brand-blue: #1e4ea8;
    --brand-blue-dark: #18407f;
    --brand-yellow: #f4b63f;
    --brand-red: #d83a3a;
    --brand-green: #5fa43a;
    --ink: #1a1a2e;
    --muted: #5b6472;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--ink);
    background:
      radial-gradient(1200px 600px at 50% -10%, #2a5fb8 0%, transparent 60%),
      linear-gradient(160deg, #1e4ea8 0%, #18407f 60%, #122f5e 100%);
  }
  .card {
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
    overflow: hidden;
  }
  /* Festa junina bunting strip in the four brand colors. */
  .bunting {
    height: 8px;
    background: linear-gradient(
      90deg,
      var(--brand-blue) 0 25%,
      var(--brand-yellow) 25% 50%,
      var(--brand-red) 50% 75%,
      var(--brand-green) 75% 100%
    );
  }
  .body { padding: 34px 30px 30px; text-align: center; }
  .logo { margin: 0 auto 14px; display: block; }
  .wordmark { font-weight: 800; letter-spacing: 0.3px; line-height: 1; }
  .wordmark .hub { display: block; font-size: 27px; color: var(--brand-blue); }
  h1 { font-size: 16px; margin: 16px 0 4px; color: var(--ink); }
  .sub { margin: 0 0 22px; font-size: 13.5px; color: var(--muted); }
  form { text-align: left; }
  label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; color: var(--ink); }
  input[type="password"] {
    width: 100%;
    padding: 12px 14px;
    font-size: 15px;
    border: 1.5px solid #d8dee8;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  input[type="password"]:focus {
    border-color: var(--brand-blue);
    box-shadow: 0 0 0 3px rgba(30, 78, 168, 0.15);
  }
  button {
    width: 100%;
    margin-top: 16px;
    padding: 12px 16px;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    background: var(--brand-blue);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s;
  }
  button:hover { background: var(--brand-blue-dark); }
  button:disabled { background: #9aa6b8; cursor: not-allowed; }
  .msg { font-size: 13px; border-radius: 8px; padding: 9px 12px; margin: 0 0 14px; }
  .msg.error { background: #fcebeb; color: #b3261e; border: 1px solid #f3c6c4; }
  .help {
    margin: 20px 0 0;
    font-size: 12.5px;
    line-height: 1.5;
    color: var(--muted);
    border-top: 1px solid #eef1f5;
    padding-top: 16px;
  }
  code { background: #f1f4f9; padding: 1px 5px; border-radius: 4px; font-size: 12px; }
</style>
</head>
<body>
  <main class="card">
    <div class="bunting"></div>
    <div class="body">
      <svg class="logo" width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="58" height="58" rx="14" fill="#1e4ea8"/>
        <path d="M32 16 L45 46 H37 L34.6 40 H29.4 L27 46 H19 Z M30.9 34 H33.1 L32 30.6 Z" fill="#ffffff"/>
        <circle cx="32" cy="52" r="2.4" fill="#f4b63f"/>
      </svg>
      <div class="wordmark">
        <span class="hub">Alta Vista Hub</span>
      </div>
      <h1>Área do Educador</h1>
      <p class="sub">Informe a senha para continuar.</p>
      ${configBanner}
      ${errorBanner}
      <form method="POST" action="${AUTH_PATH}" autocomplete="off">
        <label for="password">Senha</label>
        <input id="password" name="password" type="password" required autofocus ${disabled} />
        <button type="submit" ${disabled}>Entrar</button>
      </form>
      <p class="help">
        Se você tiver problemas para acessar, entre em contato com a pessoa que enviou este link para você.
      </p>
    </div>
  </main>
</body>
</html>`;
}
