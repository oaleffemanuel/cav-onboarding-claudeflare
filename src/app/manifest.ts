import type { MetadataRoute } from "next";

// Required so the manifest route is emitted as a static file under output: export.
export const dynamic = "force-static";

// Web app manifest — drives the mobile "add to home screen" icon and name.
// Statically emitted as /manifest.webmanifest during `next build` (output: export).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alta Vista Hub",
    short_name: "Alta Vista",
    description: "Portal interno do Colégio Alta Vista.",
    start_url: "/educador/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e4ea8",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
