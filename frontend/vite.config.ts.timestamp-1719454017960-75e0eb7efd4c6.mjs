// vite.config.ts
import react from "file:///C:/Users/auxil/Documents/my-service-test/frontend/.yarn/__virtual__/@vitejs-plugin-react-virtual-ecfd1e06d7/0/cache/@vitejs-plugin-react-npm-4.2.1-8b9705c544-de1eec44d7.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/auxil/Documents/my-service-test/frontend/.yarn/__virtual__/vite-virtual-51722385a6/0/cache/vite-npm-5.2.11-fa468e8533-664b8d68e4.zip/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/auxil/Documents/my-service-test/frontend/.yarn/__virtual__/vite-tsconfig-paths-virtual-0028605f13/0/cache/vite-tsconfig-paths-npm-4.3.2-96d4ddd73d-f390ac1d1c.zip/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "http://localhost:5173": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("connection", "keep-alive");
          });
        }
      }
    }
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
            "@tanstack/react-query"
          ],
          etc: ["axios", "imask", "tailwind-merge", "recoil"],
          "jodit-react": ["jodit-react"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhdXhpbFxcXFxEb2N1bWVudHNcXFxcbXktc2VydmljZS10ZXN0XFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhdXhpbFxcXFxEb2N1bWVudHNcXFxcbXktc2VydmljZS10ZXN0XFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hdXhpbC9Eb2N1bWVudHMvbXktc2VydmljZS10ZXN0L2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgdHNjb25maWdQYXRocygpXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHByb3h5OiB7XHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MTczXCI6IHtcclxuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCIsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgd3M6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJlOiAocHJveHkpID0+IHtcclxuICAgICAgICAgIC8vIHByb3h5IHdpbGwgYmUgYW4gaW5zdGFuY2Ugb2YgJ2h0dHAtcHJveHknXHJcbiAgICAgICAgICBwcm94eS5vbihcInByb3h5UmVxXCIsIChwcm94eVJlcSkgPT4ge1xyXG4gICAgICAgICAgICBwcm94eVJlcS5zZXRIZWFkZXIoXCJjb25uZWN0aW9uXCIsIFwia2VlcC1hbGl2ZVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICBcImFudGQtZm9ybVwiOiBbXCJhbnRkL2VzL2Zvcm1cIl0sXHJcbiAgICAgICAgICBhbnRkOiBbXCJhbnRkXCJdLFxyXG4gICAgICAgICAgcmVhY3Q6IFtcclxuICAgICAgICAgICAgXCJyZWFjdFwiLFxyXG4gICAgICAgICAgICBcInJlYWN0LWRvbVwiLFxyXG4gICAgICAgICAgICBcInJlYWN0LXJvdXRlci1kb21cIixcclxuICAgICAgICAgICAgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBldGM6IFtcImF4aW9zXCIsIFwiaW1hc2tcIiwgXCJ0YWlsd2luZC1tZXJnZVwiLCBcInJlY29pbFwiXSxcclxuICAgICAgICAgIFwiam9kaXQtcmVhY3RcIjogW1wiam9kaXQtcmVhY3RcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVYsT0FBTyxXQUFXO0FBQ25XLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBRzFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDbEMsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wseUJBQXlCO0FBQUEsUUFDdkIsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsSUFBSTtBQUFBLFFBQ0osV0FBVyxDQUFDLFVBQVU7QUFFcEIsZ0JBQU0sR0FBRyxZQUFZLENBQUMsYUFBYTtBQUNqQyxxQkFBUyxVQUFVLGNBQWMsWUFBWTtBQUFBLFVBQy9DLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixhQUFhLENBQUMsY0FBYztBQUFBLFVBQzVCLE1BQU0sQ0FBQyxNQUFNO0FBQUEsVUFDYixPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUssQ0FBQyxTQUFTLFNBQVMsa0JBQWtCLFFBQVE7QUFBQSxVQUNsRCxlQUFlLENBQUMsYUFBYTtBQUFBLFFBQy9CO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
