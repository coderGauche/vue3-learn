<!--
 * @Author: Gauche楽
 * @Date: 2023-07-19 02:33:49
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-22 03:52:49
 * @FilePath: /05_composition/src/components/home.vue
-->
<!-- <script setup lang="ts">
import { h, ref } from "vue";
const counter = ref(0);
const add = () => {
  counter.value++;
};

const render = () =>
  h("div", { className: "app" }, [
    h("h2", null, `当前计数${counter.value}`),
    h("button", { onclick: add }, "+1"),
  ]);
</script> -->

<script setup lang="jsx">
  const jsx = () => {
    return <>
    <h2>JSX语法</h2>
    </>
  }
 </script>

<template>
  <div>home</div>
  <jsx></jsx>
  <!-- <render></render> -->
</template>

<style scoped>
</style>
