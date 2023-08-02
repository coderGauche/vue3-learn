<!--
 * @Author: Gauche楽
 * @Date: 2023-07-16 17:08:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-16 17:17:13
 * @FilePath: /vue3-learn/03_vue脚手架/01_product_vite/src/App.vue
-->
<script setup lang="ts">
import helloworld from "./components/text.vue";
</script>

<template>
  <div>
    <helloworld />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
