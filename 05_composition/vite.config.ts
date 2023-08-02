/*
 * @Author: Gauche楽
 * @Date: 2023-07-17 01:09:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-22 03:49:58
 * @FilePath: /05_composition/vite.config.ts
 */
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
