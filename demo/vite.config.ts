import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build:{   
      minify: 'esbuild',
      // 产物目标环境
      target: 'modules',
      terserOptions: {},
      cssTarget:''
  }
});