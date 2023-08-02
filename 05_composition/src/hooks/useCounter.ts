/*
 * @Author: Gauche楽
 * @Date: 2023-08-02 18:50:46
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 18:52:30
 * @FilePath: /05_composition/src/hooks/useCounter.ts
 */
import { ref } from "vue";

export const useCounter = () => {
  const counter = ref(0);
  const add = () => counter.value++;
  const dec = () => counter.value--;
  return {
    counter,
    add,
    dec,
  };
};
