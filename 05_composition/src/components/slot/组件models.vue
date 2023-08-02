<!--
 * @Author: Gauche楽
 * @Date: 2023-08-02 16:08:35
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 16:13:24
 * @FilePath: /05_composition/src/components/slot/组件models.vue
-->
<template>
  <div>
    hellow
    <input type="text" :value="modelValue" @input="handelChange" />
  </div>
</template>
<script>
export default {
  name: "index",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    handelChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped  lang="scss">
</style>
