import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
//Sửa hàm defineConfig thành như sau
export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  publicDir: "public",
  plugins: [react()],
  base: "/weather-app",
});
