<template>
    <div>
        <h1>这是商品列表页面</h1>
        <div>
            <router-link to="/goods/type">商品分类</router-link>
            <router-link to="/goods/search">商品搜索</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:"GoodsIndex"
    }
</script>

<style scoped>

</style>