import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      components: resolve(__dirname, "src/components"),
      assets: resolve(__dirname, "src/assets"),
      utils: resolve(__dirname, "src/utils"),
    },
  },
  plugins: [react()],
});
