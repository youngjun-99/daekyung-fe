import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.svg"], // 여러 이미지 형식 포함
});
