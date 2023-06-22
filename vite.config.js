import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [react(), copy({
    targets: [
      { src: 'sitemap.xml', dest: 'dist' }, // adjust the destination folder as needed
    ],
  })],
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
