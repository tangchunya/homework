import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Goods from '@/pages/Goods'
import GoodsIndex from '@/pages/GoodsIndex'
import GoodsType from '@/pages/GoodsType'
import GoodsSearch from '@/pages/GoodsSearch'
import Order from '@/pages/Order'
import Car from '@/pages/Car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component:Index
    },
    {
      path:'/goods',
      name:'GoodsIndex',
      redirect:'/goods/index',
      component:Goods,
      children:[
        {
          path:'/goods/index',
          name:'GoodsIndex',
          alias:'/goods',
          component:GoodsIndex
        },
        {
          path:'/goods/type',
          name:'GoodsType',
          component:GoodsType
        },
        {
          path:'/goods/search',
          name:'GoodsSearch',
          component:GoodsSearch
        }
      ]
    },
    {
      path:'/order',
      name:'Order',
      component:Order
    },
    {
      path:'/car',
      name:'Car',
      component:Car
    }
  ]
})
