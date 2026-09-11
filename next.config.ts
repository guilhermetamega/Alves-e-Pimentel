import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
  "frame-ancestors 'none'",
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const cachedPublicAssets = [
  "/bg-hero-mobile.avif",
  "/bg-hero-mobile.webp",
  "/bg-hero-desktop.avif",
  "/bg-hero-desktop.webp",
  "/opengraph-image.png",
  "/apple-touch-icon.png",
  "/Logo_Alves_E_Pimentel.svg",
  "/pattern_1.svg",
];

const publicAssetCacheHeader = {
  key: "Cache-Control",
  value: "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      ...cachedPublicAssets.map((source) => ({
        source,
        headers: [publicAssetCacheHeader],
      })),
      {
        source: "/partners/:path*",
        headers: [publicAssetCacheHeader],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/Test",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "alvesepimentel.com" }],
        destination: "https://www.alvesepimentel.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
