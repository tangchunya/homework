<template>
  <div id="app">
    <div class="header">
      <router-link to="/">首页</router-link>
      <router-link to="/goods">商品</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/car">购物车</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
