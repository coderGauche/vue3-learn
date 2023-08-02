## 第十章 Composition API 扩展

### 01. 自定义指令

分为两种

- 局部指令
- 全局指令

实现方法

- 实现方式一：默认实现

  ```vue
  <script setup lang="ts">
    import { ref, onMounted } from 'vue'
  const inputRef = ref(null)
  onMounted(()=>{
    inputRef.value.focus()
  })
  </script>
  
  <template>
  <input ref="inputRef"></input>
  </template>
  ```

  

- 实现方式二：自定义v-focus的局部指令

  ```vue
  <script setup lang="ts">
    import { directives } from 'vue'
     directives({
      focus:{
        mounted(el){
          el.focus()
        }
      }
    })
  </script>
  
  <template>
  <input focus></input>
  </template>
  ```

  

- 实现方式三：自定义v-focus的全局指令

  ```javascript
  app.directive('focus',{
      mounted(el){
          el.focus()
      }
  })
  ```

  

### 02. 指令生命周期

1. created  绑定元素的attribute或事件监听应用之前被调用
2. beforeMount 当指令第一次绑定到元素并且在挂在父组件之前调用
3. mounted 在绑定元素的父组件呗挂载后调用
4. beforeUpdate 更新包含组件的VNode之前调用
5. updated 在包含组件VNode机器子组件Vnode更新调用后
6. beforeUnmount 在骑在绑定元素的父组件之前调用
7. unmounted  党致敬与元素解除绑定且父组件已卸载时，只调用一次。

### 03. 指令的参数和修饰符

### 04. telepport

意思是想把组件移动到vue app之外的其他位

用teleport

两个属性

- to，制定将其中内容送到目标元素，可以使用选择器

- disabled，禁掉teleport

  ```vue
  <div>{{ props.name }}</div>
  <hw>
  <lelepport to="body">
  hhhh
  <lelepport>
  </hw>
  ```

### 05. y\异步组件和suspense

1. suspense是内置全局组件，显示default插槽内容
2. fallback 如果default无法显示，name会显示fallback插槽fallback插槽内容。

### 06. vue插件

两种编写方式

- 对象类型：哟呵对象，但必须包含一个install函数，该函数会在安装插件运行

  ```javascript
  export defalt {
    name:'xxxx',
      nstall(app,options){
      console.log('安装')
    }
  }
  ```

  

- 函数型，function 函数会在安装插件自动执行

  ```javascript
  export defalt function(app,option){
     console.log('安装')
  }
  ```

  

插件没有限制

- 添加全局或者proerty 通过他们添加到config.globalProperties实现
- 添加全局资源，指令/过滤器/过度
- 通过全局mixin 添加组件选项
- 库