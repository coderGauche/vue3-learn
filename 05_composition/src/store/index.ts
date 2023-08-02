/*
 * @Author: Gauche楽
 * @Date: 2023-07-21 00:38:40
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-21 02:02:05
 * @FilePath: /05_composition/src/store/index.ts
 */
import { createStore } from "vuex";

export const store = createStore({
  state: () => ({
    counter: 110,
  }),
  mutations: {
    //不能执行异步操作
    increment(state: any) {
      state.counter++;
    },
  },
  getters: {
    getCounter: (state: any) => state.counter + 99999,
    getCounters: (state: any) => {
      return function (id: number) {
        return state.counter + id;
      };
    },
  },
});
