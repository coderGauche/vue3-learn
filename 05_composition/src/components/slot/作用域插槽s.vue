<script setup>
const props = defineProps({
  slotName: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <template v-for="(item, index) in slotName" :key="index">
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<style scoped>
</style>