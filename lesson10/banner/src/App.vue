<template>
  <div id="app">
    <Banner />
    <button v-color>自定义命令按钮</button>
    <input type="text" placeholder="再来一个" v-color>
    <Render />
    <Box />
  </div>
</template>

<script>
import Banner from "@/components/Banner"
import Render from "@/components/Render"
import Box from "@/components/Box"
export default {
  name: 'App',
  components:{
    Banner,
    Render,
    Box
  }
}
</script>

<style>
/* #app{
  width: 100%;
  height: 100%;
} */
</style>