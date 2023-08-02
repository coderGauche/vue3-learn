<script setup>
import { ref, reactive } from "vue";
import TextPage from "@/components/slot/作用域插槽s.vue";
const slotName = reactive(["a", "b", "c", "d"]);
</script>

<template>
  <div>
    <TextPage :slotName="slotName">
      <template v-slot="slotProps">
        <div>
          <h2>{{ slotProps.item }}</h2>
          <h2>{{ slotProps.index }}</h2>
        </div>
      </template>
    </TextPage>
  </div>
</template>