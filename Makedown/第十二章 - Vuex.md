## 第十二章 Vuex

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803000359612.png" alt="image-20230803000359612" style="zoom:40%;" />

### 01. 单一状态树

vuex使用单一状态树

- 用一个对象包含了全部应用层级的状态
- 采用SSOT，single, Source, Truth 单一数据源

一位置每个应用包含一个store实例

单一状态树的优势

- 维护简单化
- 能让我们直接找到某个状态片段
- 方便维护和管理

```javascript
export const store = createStore({
  state: () => ({
    counter: 110,
  }),
  //修改state值
  mutations: {
    //不能执行异步操作
    increment(state: any) {
      state.counter++;
    },
  },
  //类似于计算属性
  getters: {
    getCounter: (state: any) => state.counter + 99999,
    getCounters: (state: any) => {
      return function (id: number) {
        return state.counter + id;
      };
    },
    actions:{ //异步
      incrementAction(context,payLoad){
        console.log(context.commit) //触发mutations
        console.log(context.getters) //getters
        console.log(context.state) //state
      }
    }
  },
});
```



### 02. 状态映射到组件

在vue2中

第一种

```vue
 <h2>counter{{ this.$store.state.counter }}</h2>
```

第二种

```
 <h2>counter{{ counter }}</h2>
 computed: {
    ...mapState(['counter'])
  },
```

写法二

```
  ...mapState(['counter']),
    ...mapState({
      count: state => state.counter
    })
```

使用setup的mapState是不好用的

得封装useState （懒得写）

还得是使用

```javascript
const store = useStore()
const { name,age } = toRefs( store.state)
```

### 03. getter 计算属性

可以携带第二参数

可以返回函数

```javascript
 getCounters: (state: any) => {
      return function (id: number) {
        return state.counter + id;
      };
    },
```

在vue2中

第一种

```vue
 <h2>counter{{ this.$store.getters.counter }}</h2>
```

第二种

```
 <h2>counter{{ counter }}</h2>
 computed: {
    ...mapState(['getCounter'])
  },
```

写法二

```
  ...mapGetters(['getCounter']),
    ...mapGetters({
      count: state => state.counter
    })
```

使用setup的mapState是不好用的

得封装useState （懒得写）

还得是使用

```javascript
const store = useStore()
const { getCounter } = toRefs( store.getters)
```

### 04. Mutation 修改state

定义方法

```javascript
mutations:{
  addNumber(state,payLoad){
     state.counter += payload.count
  }
}
```

提交

```javascript
this.$store.commit({
  type:'addNumber',
  count:100
})
```

可以定义常量

```
mutations:{
  ['SDSKNFJSFN'](state,payLoad){
     state.counter += payload.count
  }
}

this.$store.commit({
  type:SDSKNFJSFN,
  count:100
})
```

处理多个的时候再vue2中

```
methods:{
   ...mapMutation(['changeName',SDSKNFJSFN])
}
```

还的是vue3

```
const store = useStore()
const { changeName } = toRefs( store.mutation)
```

### 05. actions

在vue2中使用

```
this.$store.dispatch('incrementAction')
```

多个情况

```
methods:{
   ...mapActions(['changeName',‘changeAge])
}
```

还的是vue3

```
const store = useStore()
store.dispatch('changeName')
```

### 06. module

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803010917046.png" alt="image-20230803010917046" style="zoom:40%;" />

第一个是自己的，rootxxx是根的

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803011308523.png" alt="image-20230803011308523" style="zoom:40%;" />

**派发不需要跟上模块名称**

### 07. 命名空间  nameSpaced：true

获取`$store.getters['user/info']`

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803011634885.png" alt="image-20230803011634885" style="zoom:40%;" />

### 08. 派发根组件

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803011926608.png" alt="image-20230803011926608" style="zoom:40%;" />