## 第一章Vue邂逅篇

### 1. 声明式和命令式

声明式：template语法包裹使用JavaScript对象通过viewModel桥梁生成真实dom

```javascript
document.querySelector('#app').innerHtml='hhhhh'
```

命令式：直接操作真实dom

```html
<div>
  {{message}}
</div>
```

- 命令式新能大于声明式新能
- 命令式维护性小于声明式维护性

### 2. MVVM模型

有两种体系结构

- MVC是Model——view——controoller
- MVVM是Model——view——ModelView

### 3. data属性

data是传入一个函数并且该函数返回对象

- V2：也可以传入对象，但官方推荐函数
- V3：必须是个函数，否则浏览器报错

data中返回的对象会被vue响应式系统劫持，之后该对象的修改或者访问都会在劫持中处理

数据驱动视图

### 4. Menthods属性

为什么vue中不能使用箭头函数，this指向又是什么？

- 又由于箭头函数绑定的是父级的上下文，所以this不会按照期望的指向组件实例，如果使用箭头函数指向的就是window数据
- 在源码中提现是遍历了Menthods中所有函数并使用bind绑定this





