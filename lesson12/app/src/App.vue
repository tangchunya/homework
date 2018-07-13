<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'App'
  }
</script>

<style lang="less">
@import "./assets/var.less";
html,body{
  margin: 0;
  padding: 0;
  font-size: 0.389rem;
  background-color: #e9e9e9;
  color: @content;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
