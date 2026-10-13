import type { NextConfig } from "next";

// Umbau zum Hub (G3, H23): bisherige Inhalte für Betriebe liegen unter /betriebe.
// permanent: true = 308, für Suchmaschinen gleichwertig zu 301.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/branchen", destination: "/betriebe/branchen", permanent: true },
      { source: "/branchen/:slug", destination: "/betriebe/branchen/:slug", permanent: true },
      { source: "/bereiche/:slug", destination: "/betriebe/bereiche/:slug", permanent: true },
      { source: "/ressourcen", destination: "/betriebe/ressourcen", permanent: true },
      { source: "/assistenten-vorschau", destination: "/betriebe", permanent: true },
      { source: "/design", destination: "/betriebe", permanent: true },
      { source: "/preview", destination: "/betriebe", permanent: true },
    ];
  },
};

export default nextConfig;
