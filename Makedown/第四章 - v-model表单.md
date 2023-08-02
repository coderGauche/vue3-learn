## 第四章 v-model表单

### 01. v-model修饰符 - lazy

lazy修饰符有什么作用呢？

在默认情况下，v-model在进行双向绑定时，绑定的肯定是input事件，那么会在每次内容输入后就将最新的值和绑定的属性进行同步；

如果v-mode后面跟上lazy，那么会将绑定的时间切换为change事件，只有提交的时候才触发。

```vue
<template>
   <input v-model.lazy="core"></input>
</template>
```



### 02. V-model修饰符 - number

就是即使type是string，也想转成number就可以使用number

```vue
<template>
   <input v-model.number="core" type="text"></input>
</template>
```

在逻辑判断的时候如果是string类型会进行影视转换

```javascript
cosnt core = '100'
if(scre>90){
console.log('xxxx')
}
```

### 03. v-model修饰符 - trim

去除空白字符

```vue
<template>
   <input v-model.trim="core"></input>
</template>
```