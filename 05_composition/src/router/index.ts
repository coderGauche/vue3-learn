/*
 * @Author: Gauche楽
 * @Date: 2023-07-19 02:35:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-21 00:38:26
 * @FilePath: /05_composition/src/router/index.ts
 */
import {
  createRouter,
  //   createWebHashHistory,
  createWebHistory,
} from "vue-router";
// import Home from "../components/home.vue";
// import About from "../components/about.vue";
export const router: any = createRouter({
  //   history: createWebHashHistory(), //http://localhost:5173/#/about
  history: createWebHistory(), //http://localhost:5173/home
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      //   component: () => import(webpackChunkName:'home-chunk', "../components/home.vue"), //分包处理
      component: () => import("../components/home.vue"),
    },
    {
      name: "about",
      //   path: "/about/:id",
      path: "/about",
      component: () => import("../components/about.vue"), //懒加载
      meta: {
        name: "xxx",
        age: 18,
      },
    },
  ],
});

let isAdmin = true;
if (isAdmin) {
  router.addRoute({
    path: "/admin",
    component: () => import("../components/admin.vue"),
  });
  router.addRoute("about", {
    path: "/vip",
    component: () => import("../components/vip.vue"),
  });
}

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
// });
