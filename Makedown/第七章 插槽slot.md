## 第八章 插槽slot

### 01. 插槽的默认内容

slotA子页面

```vue
<template>
  <div>
    <slot>HELLOW</slot>
  </div>
</template>
```

app主页面

```vue
<script setup>
import TextPage from "@/components/slot/slotA.vue";
</script>

<template>
  <div>
    <TextPage></TextPage>
  </div>
</template>
```

### 02. 多个插槽

他会有问题就是无论写多少个都会重复把子组件标签内容搞多个

slotA子页面

```vue
<template>
  <div>
    <slot</slot>
    <slot></slot>
    <slot></slot>
  </div>
</template>
```

app主页面

```vue
<script setup>
import TextPage from "@/components/slot/slotA.vue";
</script>

<template>
  <div>
     <TextPage>
      <button>打印</button>
      <h2>哈哈哈哈哈</h2>
      <i>元素</i>
    </TextPage>
  </div>
</template>
```

效果

![image-20230802124020268](/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230802124020268.png)

### 03. 插槽基本使用

插入的内容，元素组件都是可以的。

### 04. 具名插槽

顾名思义就是给插槽取个名字 `<slot name="xxx"></slot>`有个name变量

他有默认名字`default`

```vue
<template>
  <div>
    <slot name="left"></slot>
    <slot name="content"></slot>
    <slot name="right"></slot>
  </div>
</template>
```

```vue
<template>
  <div>
    <TextPage>
      <template v-slot:left>
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
```

### 05. 动态插槽名

```vue
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
      <template #content>
        <h2>xxxx</h2>
      </template>
      <template #right>
        <i>元素</i>
      </template>
    </TextPage>
  </div>
</template>
```

### 06. 具名插槽缩写

```vue
<template>
  <div>
    <TextPage>
      <template #left>
        <button>打印</button>
      </template>
      <template #content>
        <h2>xxxx</h2>
      </template>
      <template #right>
        <i>元素</i>
      </template>
    </TextPage>
  </div>
</template>
```

### 07. 渲染作用域

- 父级模版里的所有内容都是在父级作用域中编译的
- 子模版所有内容都是在子作用域中编译的

因为有夸作用域的访问。

![image-20230802130447600](/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230802130447600.png)

### 08. 作用域插槽

父组件

```vue
<script setup>
import { ref, reactive } from "vue";
import TextPage from "@/components/slot/作用域插槽s.vue";
const slotName = reactive(["a", "b", "c", "d"]);
</script>

<template>
  <div>
    <TextPage :slotName="slotName">
      <template #default="slotProps">
        <div>
          <h2>{{ slotProps.item }}</h2>
          <h2>{{ slotProps.index }}</h2>
        </div>
      </template>
    </TextPage>
  </div>
</template>
```

子组件

```vue
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
```

1. 在父组件中定义数组数据
2. 传递到子组件中
3. 遍历数组
4. 自定义插槽props
5. 通过v-solt:default（#default）获取slot的props
6. 使用其中item和index属性

### 09. 独占默认插槽的缩写

`v-solt:default = 'slotProps'`转化`v-solt = 'slotProps'`

### 10. 默认插槽和具名插槽混合

都存在话都需要template去包裹

```vue
<TextPage :slotName="slotName">
      <template #default="slotProps">
        <div>
          <h2>{{ slotProps.item }}</h2>
          <h2>{{ slotProps.index }}</h2>
        </div>
      </template>
      <template v-solt:'hhhhh'>
         <h2>哈哈哈哈</h2>
      </template>
    </TextPage>
```

