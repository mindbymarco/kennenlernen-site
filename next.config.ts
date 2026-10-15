import type { NextConfig } from "next";

// Statischer Export für Cloudflare Workers Static Assets (Umzug von Vercel, Oktober 2026).
// Die Weiterleitungen (früher redirects()) stehen jetzt in public/_redirects.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
};

export default nextConfig;
