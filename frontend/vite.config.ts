import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "localhost:5173": {
        target: "http://localhost:3000",
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
        manualChunks: { "antd-form": ["antd/es/form"], antd: ["antd"] },
      },
    },
  },
});
