// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/animate.css'

Vue.config.productionTip = false

Vue.directive('color',{
  inserted:function(el){
    el.style.backgroundColor='red'
  }
})

Vue.directive('drag',{
  inserted:function(el){
    el.onmousedown=function(event){
      let seatX = event.clientX,//鼠标按下时的水平位置
          seatY = event.clientY,//鼠标按下时的垂直位置
          boxX = el.offsetLeft,//box的左边距
          boxY = el.offsetTop//box的上边距
      el.style.cursor="move"
      document.onmousemove=function(event){
        let moveX = event.clientX,//鼠标移动后的水平位置
            moveY = event.clientY//鼠标移动后的垂直位置
        el.style.left=boxX + (moveX - seatX) +  "px"
        el.style.top=boxY + (moveY - seatY) +  "px"
      }
    }
    el.onmouseup=function(){
      el.style.cursor="default"
      document.onmousemove=null
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
