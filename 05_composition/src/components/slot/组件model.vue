<script setup>
import { ref } from "vue";
import PageA from "./组件models.vue";
const message = ref("message");
</script>

<template>
  <div>
    <PageA v-model="message"></PageA>
  </div>
</template>

<style scoped>
</style>