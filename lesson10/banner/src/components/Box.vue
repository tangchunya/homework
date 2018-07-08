<template>
    <div class="box" v-drag></div>
</template>

<script>
    export default {
        name:"Box"
    }
</script>

<style scoped>
.box{
    width: 300px;
    height: 300px;
    background: red;
    position: absolute;
}
</style>