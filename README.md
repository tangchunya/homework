#### Vue介绍

官网地址：https://cn.vuejs.org/

Vue (读音 /vjuː/，类似于view)是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue也完全能够为复杂的单页应用提供驱动。
 
#### Vue基础用法
 
新建一个html文件
 
引入Vue

```
<!-- 开发环境版本，包含了用帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

可以使用上面官方提供的.也可以自己在[bootcdn](http://www.bootcdn.cn/)上用国内的

数据渲染是MVVM的基础

什么是MVVM?

View (界面,模板)

ViewModel (桥梁.把View和Model结合在一起的功能)

Model (数据)

ViewModel 不仅仅是解析模板,还会监听数据变化,当数据发生变化时界面也会同步发生变化

当数据model发生变化的时候,view界面也会发生变化

##### 拦截器、脏检查

原生js仿拦截器(拦截器是es6的语法,意味着老的浏览器不能使用(ie8以下的浏览器))

Angular为了兼容IE8以下的老浏览器,使用了脏检查,setInterval每隔一段时间就检查一次,数据发生变动界面就会随之变动

##### SPA 单页面应用

解决前后端分离的问题:

后台只提供数据接口

前台提供页面的展示(页面之间的跳转页由前端管理)

SPA 就是在单页面中替换内容从而实现页面跳转的效果

##### 虚拟dom

真实dom是一个dom对象

dom对象发生改变的时候,浏览器会重新渲染页面

虚拟dom就是虚拟的一套dom对象

虚拟dom是用来和真实dom做比较(diff)用的

如果频繁的去修改真实dom,浏览器会消耗很多的性能(虚拟dom就是解决渲染真实dom的性能消耗问题的)

#### Vue常用指令

就是v-开头的html属性

指令名称 | 作用 | 备注
---|---|---
v-model | 表单数据的双向绑定 |
v-for | 循环 | todo list
v-show | 显示与隐藏 | 不会从dom移除元素display:none;
v-if | 显示与隐藏 | 从dom元素中移除
v-bind | 单向绑定数据 | 
v-on: | 事件绑定 |
v-text | 类似类似el.innerText |
v-html | 类似el.innerHtml |
v-class | 类名 | 
v-style | 原生style |
v-once | 只绑定一次事件 |
v-cloak | 防闪烁 |
v-pre |  |
v-else-if | |
v-else | |

双向绑定:既可以获取表单数据,又可以更改表单数据,不仅仅是获取

双向绑定只能绑定在有输入属性的元素里,一般绑定在表单元素里

插值表达式{{}}:单向绑定,只能够得到数据以及数据的变化,不能更改数据,单方面的获取

表单数据添加内容循环遍历到界面中的小例子:

v-for语法 => v-for="(item,index) in arr"

有两个参数：item=>数组里的值，index=>数组下标，可以自定义名字，只传递一个参数时表示数组里的值；arr=>数组名字

**v-if与v-show的区别：**

v-if：当值为false时，tag会从dom中移除掉，不会占用浏览器以及dom的性能

v-show：当值为false时，tag直接display:none;虽然它隐藏掉了，但是它会占用dom、浏览器的性能

**何时使用v-if，何时使用v-show？**

频繁的切换显示隐藏的使用v-show

不频繁显示隐藏的使用v-if