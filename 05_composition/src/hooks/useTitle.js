/*
 * @Author: Gauche楽
 * @Date: 2023-08-02 18:53:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 18:55:26
 * @FilePath: /05_composition/src/hooks/useTitle.js
 */
import { watch } from "fs";
import { ref } from "vue";

export const useTitle = (title) => {
  const counter = ref(title);
  watch(
    counter,
    (newValue, oldValue) => {
      document.title = newValue;
    },
    { immediate: true }
  );
};
