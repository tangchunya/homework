import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '@/screen/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen
    }
  ]
})
