## 第十三章 Pinia

### 01. pinia和vuex的区别

- mutations不存在了，原因非常沉长
- 支持TypeScript
- 不再有modules嵌套结构
- 没有命名空间概念

### 02. 使用Pinia

```javascript
import { createPainia } from 'painia'
const = pinia = createPinia()
export default pinia
```

```javascript
import pinia from './store'
createApp(app).use(pinia)
```

### 03.store

三个概念

- State,getters,actions
- 等同于data,computed,methods
- 直接store访问State,getters,actions任何属性

### 04. 定义个store

唯一要传的参数是唯一名称

```javascript
export const useCounter = defineStore('counter',{
state(){
   return{
   counter:0
   }
  }
})
```

### 05. 使用store

```javascript
const counterStore = useCounter()
const { counter } = counterStore //不是响应式
const {counter:counter2 } = toRefs(counterStore) //是响应式
const {counter:counter3 } = storeToRefs(counterStore) //是响应式
```

### 06. 操作state

直接读写

```javascript
const counterStore = useCounter()
counterStore++
counterStore.name = 'xxx'
```

重置

```javascript
const {counter } = counterStore
counterStore.$reset()
```

改变state

```javascript
const {counter } = counterStore
counterStore.$patch({
  name:'xxxx'
})
```

替换state

```
const {counter } = counterStore
counterStore.$state({
  name:'xxxx'
})
```

### 07. getters

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803013511112.png" alt="image-20230803013511112" style="zoom:40%;" />

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803013655141.png" alt="image-20230803013655141" style="zoom:40%;" />

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803014256294.png" alt="image-20230803014256294" style="zoom:40%;" />

### 08. actions

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803014159574.png" alt="image-20230803014159574" style="zoom:40%;" />