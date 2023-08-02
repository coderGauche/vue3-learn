<!--
 * @Author: Gauche楽
 * @Date: 2023-08-02 22:06:57
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 22:20:16
 * @FilePath: /05_composition/src/pages/props.vue
-->
<script setup lang="ts">
import { ref } from "vue";
import Emits from "@/pages/emits.vue";
const name = ref("xxx");
const submitChange = (e: any) => {
  name.value = e;
};
const emitsRef: any = ref(null);
const emitChange = () => {
  emitsRef.value.foo();
};
</script>

<template>
  <div>
    <Emits ref="emitsRef" :name="name" @submit="submitChange"></Emits
    ><button @click="emitChange">修修修改改</button>
  </div>
</template>

<style scoped>
</style>