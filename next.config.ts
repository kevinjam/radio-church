import withPWA from "next-pwa";
import type { NextConfig } from "next";

// Define the base Next.js configuration
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://chat.radiojar.com https://www.google.com;",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3.castbox.fm",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "chat.radiojar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/image/proxy/**",
      },
      {
        protocol: "https",
        hostname: "radiojar.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// Wrap the config with PWA settings
export default withPWA({
  dest: "public", // Output directory for service worker files
  register: true, // Automatically register the service worker
  skipWaiting: true, // Skip waiting for the service worker to take control
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
})(nextConfig);