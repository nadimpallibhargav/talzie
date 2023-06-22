import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemapPlugin from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      baseURL: "https://talzie.com/", // Replace with your website's base URL
      sitemapPath: "/sitemap.xml",
      exclude: ["/404"], // Exclude any URLs you don't want in the sitemap
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://talzieform-default-rtdb.firebaseio.com/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "",
        },
        onProxyRes(proxyRes) {
          proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
      },
    },
  },
});
