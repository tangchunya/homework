// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App'
import router from './router'

Vue.use(iview)

Vue.config.productionTip = false

let width = window.innerWidth / 10
document.documentElement.style.fontSize = width + 'px'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})