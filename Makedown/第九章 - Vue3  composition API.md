## 第九章 Vue3  composition API

### 01. setup函数参数

1. 两个参数
   - props
   - context
2. props的理解相当于props的传参
   - 规则和选项定义是一样的
   - 不能使用this
   - 直接通过参数来使用
3. context的理解，三个属性
   - attrs：非prop的attribute
   - slots：父组件传递过来的插槽
   - emit触发事件emit（无法访问this，不能使用this.$emit）

### 02. setup函数返回值

返回字段或者函数，替代data和menthods中定义的方法，但是无法产生响应式。

### 03. Reactive API

```javascript
const state = reactive({
name:'xxx',
counter:10
})
```

reactive函数处理我们数据，数据再次使用会进行收集依赖

数据发生改变，收集依赖都是对应的响应式操作

编写data选项的时候交给reactive函数将其变成响应式对象

只处理复杂类型数据，因为Proxy

### 04. Ref API

- 支持复杂类型和简单类型数据

- 复杂类型数据他通过proxy去做响应式数据依赖收集，

- 简单数据他是通过get value和set value 触发依赖收集 产生类似proxy的操作，做到响应式的实现。

- 使用的时候：

  - 模板中ref 更改 会自动解包
  - 数据中ref.value 更改

- 通过结构的话就没有响应式

  ```javascript
  const refObj = ref({name:'xxxx'})
  const { name } = refObj
  name就不是响应式
  解决：
  toRefs(name)
  ```

### 05. readonly介绍

readonly会返回原始对象的只代理模式（他依然是proxy，这是一个proxy的set方法劫持，并且不能对其进行修改）

传入三个类型

- 普通对象
- reactive返回的对象
- ref对象

### 06. readonly使用

redonly返回的对象是不允许修改的

但是经过readonly处理的原来的对象是允许被修改

- cosnt info = readonly(obj),info对象是不允许修改的
- obj修改时，readonly返回的info对象也会被修改
- 但是我们不能修改readonly返回的info

本质上readonly返回的对象stter方法被劫持而已

### 07. readonly的应用

传递给他组件数据的时候，往往希望其他组件使用我传递内容，但不允许修改，就可以使用readonly

组件传参套一层

### 08. reactive判断的Api

- isProxy

  检查对象是否由ractive或者readonly创建的proxy

- isReactive

  检查对象是否由reactive创建的响应式代理

  如果该代理是readonly建的，担保过了由raective创建的另一个代理，返回true

- isReadonly

  检查对象是否由readonly创建的只读代理。

- toRaw

  返回ractive或者readonly代理的原始对象（不建议保留对原始对象的持久引用，谨慎使用）

- shallowReactive

  创建一个响应式代理，他跟踪其自身property的响应式，但不执行嵌套对象的深层响应式转换（深层还是原生对象）

- shallowReadonly

  创建一个proxy，使其自身的property只读，但不执行嵌套对象的深度只读转换（深层还是可读，可写的）

### 09. toRefs

就是reactive结构出来的不是响应式，怎么办使用toReds转成ref

```javascript
const state = reactive({
  name:'why',
  age:18
})
const { name,age } = state
const { name,age } = toRefs(state)
```

### 10. toRef

如果只希望转换一个reactive对象中的属性为ref，name使用toRef

```javascript
const name = toRef(state,'name');
```

### 11. ref其他api

- unref

- 如果我们想获取一个ref医用中的value，name可以通过unref方法：

  - 如果参数是ref，则返回内部只，否则返回参数本身
  - 这是`value = isRef(value)?value.v:value`的语法糖

- ifRef

  判断值是否是一个ref对象

- shallowRef

  创建浅层ref对象

- triggerRef

  手动触发和shallowRef相关联的副作用

  ```javascript
  const info = shallowRef({name:'xxxx'})
  //下面不是响应式
  cosnt changeInfo = () => {
    info.value.name = 'xxx'
    //手动触发
    triggerRef(info)
  }
  ```

  

### 12. setup不可以使用this

1. 表达含义this没有执行当前组件实例
2. 在setup被调用之前data，computed，methods没有被解析
3. 无法在setup中获取this

### 13. computed

```javascript
const fulName = computed (()=>{
  return 'xxxxx'
})
```

```javascript
const fulName = computed (()=>{
  get:()=>{
    return 'xxx'
  },
    set:value=>{
      fulName.value = 'xxxx'
    }
})
```

### 14. ref

如何获取ref

```vue
<script setup lang="ts">
import { ref } from 'vue'

const titleRef = ref<HTMLElement>()

// 获取元素
const title = titleRef.value
</script>

<template>
  <div ref="titleRef">about</div>
</template>
```

### 15. 生命周期

```javascript
onMounted(()=>{
  
})
onUpdate(()=>{
  
})
onUnmounted(()=>{
  
})
```

### 16. provide函数

```javascript
let counter = 100
let info = {
name:'xx',
age:18
}
provide('counter',counter)
provide('info',info)
```

### 17. inject函数

```javascript
const counter = inject(counter)
const info = inject("info")
```

### 18. 数据的响应式

```javascript
let counter = ref(100)
let info = reactive({
name:'xx',
age:18
})
provide('counter',counter)
provide('info',info)
```

### 19. 监听数据的变化

- watchEffect:用于自动收集响应式数据的依赖
- watch：需要手动监听数据源

### 20. watch

watch的api完全等同于组件watch选项的property

- watch需要监听特定的数据源，执行回调
- 默认情况下是惰性的，只有被监听到源发生变化才会回调

```javascript
const name = ref('xxxx')
watch(name,(newValue,oldValue)=>{
  
})
```

### 21. watch监听多个源

```javascript
const name = ref('xxxx')
const age = ref(18)
watch([name,age],(newValue,oldValue)=>{
  
})
```

### 22. watch选项

```javascript
const info =reactive({
  name:'xxx'
  age:18,
  friend:{
  name:'sdsd'
}
})
watch(info,(newValue,oldValue)=>{
  
},{immediate:true,deep:true})
```

### 23. watchEffect

监听某些响应式变化时，希望执行操作使用watchEffect

- watchEfffect传入的函数会被执行一次，并且执行过程中会收集依赖
- 只有收集依赖发生变化时，watchEffect传入的函数才会再次执行

```javascript
cosnt name = ref('why')
cosnt age = ref(10)

watchEffect(()=>{
console.log(name.value)
})
```

### 24. watchEffect停止监听

```javascript
cosnt name = ref('why')
cosnt age = ref(10)

watchEffect(()=>{
console.log(name.value)
})
cosnt changeAge = () => {
  age.value++
  if(age.value>20){
    stopWatch()
  }
}
```

### 25. 自定义useCounter

```javascript
import { ref } from "vue"

export const useCounter = () => {
    const counter = ref(0)
    const add = () => counter.value++;
    const dec = () => counter.value--;
    return {
        counter,
        add,
        dec
    }
}
```

### 26. useTitle

```javascript
import { watch } from "fs";
import { ref } from "vue";

export const useTitle = (title) => {
  const counter = ref(title);
  watch(
    counter,
    (newValue, oldValue) => {
      document.title = newValue;
    },
    { immediate: true }
  );
};

```

### 27. defineProps()和defineEmits()

```vue
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
</script>

<template>
  <div>{{ props.name }}</div>
  <button @click="handleSubmit('修改值')">修改</button>
</template>
```

```vue
<script setup lang="ts">
import { ref } from "vue";
import Emits from "@/pages/emits.vue";
const name = ref("xxx");
const submitChange = (e: any) => {
  name.value = e;
};
</script>

<template>
  <div><Emits :name="name" @submit="submitChange"></Emits></div>
</template>
```

### 28. defineExpose()

通过ref或者$parent 获取组件实例，不会暴露在任何<script setup>中声明绑定

通过defineExpose编译器宏来显示指定在<script setup>组件中暴露出去的proerty

意思就是在父组件中使用子组件方法

```javascript
const emitsRef: any = ref(null);
const emitChange = () => {
  emitsRef.value.foo();
};
```

```javascript
const foo = () => {
  console.log("foo");
};
defineExpose({ foo });
```

