<!--
 * @Author: Gauche楽
 * @Date: 2023-08-02 22:03:34
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 22:18:31
 * @FilePath: /05_composition/src/pages/emits.vue
-->
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "Gauche楽",
  },
});

const emitChange = defineEmits(["submit"]);
const handleSubmit = (val: string) => {
  emitChange("submit", val);
};
const foo = () => {
  console.log("foo");
};
defineExpose({ foo });
</script>

<template>
  <div>{{ props.name }}</div>
  <button @click="handleSubmit('修改值')">修改</button>
</template>

<style scoped>
</style>
