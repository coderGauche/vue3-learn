<!--
 * @Author: Gauche楽
 * @Date: 2023-08-02 12:29:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 12:59:21
 * @FilePath: /05_composition/src/components/text.vue
-->
<script setup>
import { ref } from "vue";
// import TextPage from "@/components/slot/slotA.vue";
import TextPage from "@/components/slot/slotB.vue";
const slotName = ref("left");
</script>

<template>
  <div>
    <TextPage>
      <template #[slotName]>
        <button>打印</button>
      </template>
      <template v-slot:content>
        <h2>xxxx</h2>
      </template>
      <template v-slot:right>
        <i>元素</i>
      </template>
    </TextPage>
  </div>
</template>

<style scoped></style>
