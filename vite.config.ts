import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg", "apple-touch-icon.png"],
      manifest: {
        name: "Pablo — mes a mes",
        short_name: "Pablo",
        description:
          "Qué esperar y cómo jugar con Pablo, mes a mes, con fuentes.",
        lang: "es",
        theme_color: "#FBF7F2",
        background_color: "#FBF7F2",
        display: "standalone",
        orientation: "portrait",
        start_url: "./",
        scope: "./",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        // Las fotos de juguetes no se precargan (rompería el lazy loading):
        // se guardan solo cuando el navegador las pide de verdad.
        runtimeCaching: [
          {
            urlPattern: /\/toys\/[^/]+\.(?:jpg|jpeg|png|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "fotos-juguetes",
              expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 180 },
            },
          },
        ],
        navigateFallback: "index.html",
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
  },
});
