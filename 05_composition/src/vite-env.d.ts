/*
 * @Author: Gauche楽
 * @Date: 2023-07-17 01:09:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-21 00:45:46
 * @FilePath: /05_composition/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
