import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createProxyMiddleware } from "http-proxy-middleware";

export default defineConfig({
  plugins: [react()],
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
