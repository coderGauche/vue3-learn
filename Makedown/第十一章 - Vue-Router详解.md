## 第十一章 Vue-Router详解

### 01.使用vue-router的步骤

1. 创建路由需要的映射数组
2. 通过createRouter创建路由对象，并且传入routes和history模式
   - 配置路由映射：组件和路径映射关系的rputes在、数组
   - 创建基于hash或者history的模式
3. 使用app注册路由对象（use）
4. 路由使用，通过<router-link>和<router-view>

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230802230114646.png" alt="image-20230802230114646" style="zoom:33%;" />

### 02. 路由的默认路径

重定向 `{path:'/',redirect:'/home'},`

```javascript
const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:Home},
]
```

### 03. history模式

`history:createWebHistory()`

```javascript
const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:Home},
]
const router = createRouter){
  routes,
  history:createWebHistory()
}
```

### 04. router-link配置

- to：

  字符串或对象

- replace

  调用的是router.replace(),而不是router.push()

- active-class

  激活啊元素后英勇的class 默认是router-link-active

- Exact-active-class

  链接精准激活时，用过用于渲染a标签的class 默认router-link-exact-active

### 05. 路由懒加载

为了减少体积和提高首屏渲染效率，webpack分包知识，而vue Router默认就支持动态来导入组件

component可以传入组件，也能接受函数，高函数需要返回promise

而import返回就是Promise

```javascript
const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:()=>import('../pages/home.vue')},
]
```

### 06. 路由其他属性

- name属性：路由记录独一无二的名称
- meta属性：自定义数据

```javascript
{
  path:'/about',
  name:'about'
  component:()=>import('../pages/about.vue'),
    meta:{
      name:'xxx',
      age:18
    }
}
```

### 07. 动态路由基本匹配

```javascript
{
  path:'/use/:id',
  component:()=>import('../pages/use.vue'),
}
```

```vue
<router-link to='/use/12'></router-link>
```

### 08. 获取动态路由值

在template 直接通过$route.params

在create，通过this.$route.params

在setup vue-router库提供hook useRoute，该hook会返回Router对象，对象中保存着当前路由相关的值

### 09. NotFound

没有匹配到路由情况会固定某个页面

比如NotFound错误页面中，编写个可以动态路由用于匹配所有页面

```javascript
{
  path:'/use:pathMatch(.*)',
  component:()=>import('../pages/NotFound.vue'),
}
```

我们可以通过$route.params.pathMatch

```vue
<h2>
  Not:found:{{$route.params.pathMatch}}
</h2>
```

### 10. 匹配规则加*

```javascript
{
  path:'/use:pathMatch(.*)*',
  component:()=>import('../pages/NotFound.vue'),
}
```

区别在于是否解析/:

```javascript
path:'/use:pathMatch(.*)*',
not found:['user','hahahha','134']

path:'/use:pathMatch(.*)',
not found:user/hahahha/134
```

### 11. 路由嵌套

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230802232316555.png" alt="image-20230802232316555" style="zoom:40%;" />

### 12. 代码的页面跳转

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230802232355503.png" alt="image-20230802232355503" style="zoom:40%;" />

### 13. query方式参数

```
this.router.push({
path:'//profile',
query:{name:xxx},age:18
})
```

```vue
<h2>
  {{$router.query.name}}
</h2>
```

### 14 动态添加路由

```javascript
const categoryRoute = {
  path:'/about',
  component:()=>import('../pages/about.vue'),
}
router.addRouter(categoryRoute)
```

为router天假children路由，传入对用的name

```javascript
const categoryRoute = {
  path:'/about',
  component:()=>import('../pages/about.vue'),
}
router.addRouter('home',categoryRoute)
```

### 15. 动态添加路由其他方法

删除路由三种方式

1. 添加一个name相同的路由
2. 通过removeRoute方法，传入路由名称
3. 通过addRouter方法返回值回调

其他补充：

router.hasRoute():检查路由是否存在

router.getRoute():获取一个包含所有路由记录的数组

### 16. 路由守卫

两个参数

- to：即将进入的route对象
- from：即将离开的路由route对象

返回值

False:取消当前导航

不返回或者undefined：进行默认导航

返回一个路由地址

- 可以使string
- 对象，包含path,query,params

第三个next在vue3中不推荐，vue2用来跳转

```javascript
route.beforEach((to,from)=>{
  return false
})
```

<img src="/Users/wuzaifa/Library/Application Support/typora-user-images/image-20230803000147099.png" alt="image-20230803000147099" style="zoom:40%;" />