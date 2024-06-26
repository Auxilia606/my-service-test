import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "http://localhost:5173": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy) => {
          // proxy will be an instance of 'http-proxy'
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("connection", "keep-alive");
          });
        },
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "antd-form": ["antd/es/form"],
          antd: ["antd"],
          react: [
            "react",
            "react-dom",
            "react-router-dom",
            "@tanstack/react-query",
          ],
          etc: ["axios", "imask", "tailwind-merge", "recoil"],
          "jodit-react": ["jodit-react"],
        },
      },
    },
  },
});
