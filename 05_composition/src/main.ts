/*
 * @Author: Gauche楽
 * @Date: 2023-07-17 01:09:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 13:09:40
 * @FilePath: /05_composition/src/main.ts
 */
import { createApp } from "vue";
// import App from "./App.vue";
import App from "./components/slot/作用域插槽f.vue";
import { router } from "./router/index";
import { store } from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
