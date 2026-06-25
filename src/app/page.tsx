"use client";

import { useEffect } from "react";

// Alta Vista Hub (/educador) is the front door. In static export there is no
// server, so we redirect client-side here. On Cloudflare Pages the edge
// `_redirects` rule (public/_redirects) handles `/` → `/educador/` first, with
// no flash and even without JS — this is the fallback for direct file access.
export default function HomePage() {
  useEffect(() => {
    window.location.replace("/educador/");
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#1E4EA8",
      }}
    >
      <p>
        Redirecionando para o{" "}
        <a href="/educador/" style={{ color: "#1E4EA8", fontWeight: 600 }}>
          Alta Vista Hub
        </a>
        …
      </p>
    </main>
  );
}
