## 第三章 - Options API

### 01. Computed

- 计算属性将被混入到组件实例中

  所有getter和setter的this上细纹自动绑定为组件实例

- 计算属性vsmenthods

  计算属性有缓存

  计算属性会给予他的依赖关系进行缓存

  在数据不变化的时候，计算属性不需要重新计算的

  但是数据发生改变在使用的时候计算属性依然程序进行计算

- 计算属性的setter和getter

- 源码如何对setter和getter处理呢

  内部做了判断逻辑

  判断是否是个函数，函数去get否则取get

### 02. 监听器watch

- 配置：deep深度监听

  有个对象

  ```javascript
  const obj = {
    name:'xxx',
    age:14
  }
  ```

  这时候我们修改name，使用watch监听info能监听到嘛？，肯定是不行的

  在默认的情况下，watch只是在监听info的引用变化，对于内部属性的变化是不会做出响应的：

  我们要去使用deep进行深度监听

  在前面我们说过watch里面监听的属性对应的也可以是object。

- 配置：immediate立即触发

  无论后面数据是否有变化，监听的函数都会有限执行一次。

- 代码：

  ```javascript
  watch:{
    info:{
      handler(newValue,oldValue){
        console.log(newValue,oldvalue)
      },
      deep:true,//深度监听
      immediate:true //立即触发
    },
    'info.name':function(newValue,oldValue){
      console.log(newValue,oldValue)
    }
  }
  ```

  在create的生命周期中使用api来监听，this.$watchs

  三个参数

  - 要监听的源

  - 监听回调函数的callback

  - 额外的其他选项，比如deep，immediate

    ```javascript
    created(){
      this.$watchs('message',(newValue,oldValue)=>{
        console.log(newValue,oldValue)
      },{deep:true,immediate:true})
    }
    ```

### 03. 



