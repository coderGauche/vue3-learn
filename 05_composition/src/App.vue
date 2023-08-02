<!--
 * @Author: Gauche楽
 * @Date: 2023-07-17 01:09:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-03 00:12:14
 * @FilePath: /05_composition/src/App.vue
-->
<template>
  app 111
  <h2>{{ counter }}</h2>
  <h2>{{ getCounter }}</h2>
  <h2>{{ getCounters(987) }}</h2>
  <button @click="increment">更尬</button>
  <!-- <router-link to="/home" replace="">home</router-link> //不记录在页面栈 -->
  <router-link to="/home">home</router-link>
  <router-link to="/about">about</router-link>
  <router-view></router-view>
  <!-- <span>{{ count }}{{ obj.msg }}{{ obj.code }}</span>
  <div>{{ info.name }}</div>
  <div>{{ info.age }}</div>
  <button @click="add">加</button>
  <button @click="reduce">减</button>
  <div style="position: fixed; top: 0px; bottom: 0px">
    <h1>{{ location.x }}</h1>
    <h1>{{ location.y }}</h1>
  </div>
  <div class="acc"></div> -->
</template>

<script setup lang="ts">
import { toRefs, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const { counter } = toRefs(store.state); //转成响应式
// const { getCounter } = toRefs(store.getters);
const getCounter = computed(() => store.getters.getCounter);
const getCounters = computed(() => store.getters.getCounters);

function increment() {
  store.commit("increment");
}
// import { reactive, ref } from "vue";
// import { useScrollPosition } from "./hooks/useScrollPosition";

// const { location } = useScrollPosition();

// const count = ref(100); //对象或者数组 简单类型数据也是可以处理复杂数据类型
// const obj = reactive({
//   msg: "xxxx",
//   code: 111,
// }); //响应式，复杂数据处理，相似data()用法也是给reactive去做
// const info = ref({
//   name: "张 苹果",
//   age: 32,
// });
// const add = () => {
//   count.value++;
//   obj.msg = "xxx1";
//   info.value.name = "张 苹果1";
// };

// const reduce = () => {
//   count.value--;
//   obj.code = 9;
//   info.value.age = 19;
// };
</script>

<style scoped>
.acc {
  height: 1000px;
  width: 2000px;
  background-color: red;
}
</style>
