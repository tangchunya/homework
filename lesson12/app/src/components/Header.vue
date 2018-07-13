<template>
    <div class="header">
        <h1>{{title}}</h1>
        <Icon type="navicon" />
    </div>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {
                title:'奥迪A6重庆车友汇'
            }
        },
    }
</script>

<style scoped lang="less">
@import "../assets/var.less";
.header{
    height: 1.1805rem;
    background: @mainColor;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    h1{
        font-size: 0.444rem;
        font-weight: normal;
        flex: 1;
        text-align: center;
        margin-right: -30px;
    }
    i{
        font-size:0.8333rem;
    }
}
</style>