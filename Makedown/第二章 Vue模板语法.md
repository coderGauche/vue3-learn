## 第二章 Vue模板语法

### 01. v-once指令

用于指定元素或者组件只渲染一次

```vue
<h2 v-noce>xxxxx</h2>
```

### 02. v-text指令

用于更新元素的textContent

```vue
<span v-text="msg">xxxx</span>
```

### 03. v-html

用于解析html结构展示

### 04. v-pre

用于跳过元素和其他的子元素编译过程，显示原始的标签

跳过不需要编译的节点没加快编译速度

```vue
<template>
<div v-pre>
  {{message}}
  </div>
</template>
输出：原样输出不编译
 {{message}}
```

### 05. v-cloak

这个指令保持在元素上知道关联组件实例结束编译

配合css规则如[v-cloak]{display:none}一起使用，该命令可以隐藏未编译的Mustache标签知道组件实例准备完毕

```vue
<style>
  [v-cloak]{
    display:none
  }
</style>
<template v-cloak>
{{message}}
</template>
```

### 06. Class使用

```vue
<template>
<div :class="className"></div>
<div class="className" :class="{nba:true:'james':true}"></div>
<div :class="{'nba':isActive}"></div>
<div :class="['nba',isActive]"></div>
<div :class="['nba',isActive?'active':'']"></div>
<div :class="['nba',isActive,{'active':isActive}]"></div>
</template>
```

### 07. Style使用

```vue
<template>
<div :style="{'color':'red'}"></div>
<div :style="[style1,style2]"></div>
</template>
```

### 08. 动态绑定

属性名可以不固定

使用:[属性名]= '值'

```vue
<template>
  <div :[name]='value'>
    {{message}}
  </div>
</template>
```

### 09. v-on修饰符

- .stop 调用event.stopPropagation()
- .prevent 调用 event.stopPropagation()
- .capture: 添加事件监听器使用capture模式
- .self:只当事件是从监听器绑定的元素本身出发才触发回调
- .{keyAlias} 仅当事件是从特定键触发时才触发回调
- .once 只触发一次回调
- .left 左键
- .right 右键
- .middle 鼠标滚轮中键
- .passive - {passive:true}模式添加监听器

### 10. v-if条件渲染

V-show 不会销毁

v-if会销毁   惰性

### 11. template元素

template元素可以当做不可见的包裹元素，并且在v-if上使用，template不会被渲染出来

### 12. v-if和v-show区别

- v-show不支持template
- v-show不能喝v-else使用
- v-show一直都真实存在 ，css控制
- v-if在false的时候不会渲染到Dom上
- 如何选择呢？不频繁切换v-if 

### 13. v-for的key作用

key的作用：

- key主要用到Vue的xunidom算法，在新旧nodes对比识别度VNode
- 如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
- 如果使用key，它会基于key的变化重新排列元素顺序，并且会销毁溢出key不存在的元素

三个问题：

1. 什么是新旧nodes，什么是vnode

   - vnode是虚拟节点
   - 在组件上还是元素上，他们在vue上表现出来都是一个个的vnode
   - vnode本质上是JavaScript的对象
   - template - VNode - 真实Dom
   - 如果有一大堆元素那么就会形成虚拟dom树
   - 

2. 没有key的时候，如何尝试修改和复用的？

   改动了一出，后续的元素都需要改动

3. 有key的时候如何基于key重新排列？

   - 遍历比较

   - 如果发现要改的元素和原元素一致的话就会继续进行比较，不一致会break跳出循环

   - 如果纠节点遍历完毕，但是依然有新的节点那么新增节点

   - 如果新的节点遍历完毕，但是依然有旧的节点，name移除旧的节点

     总结：新旧对比，找出旧结点还有移除，新节点还在新增