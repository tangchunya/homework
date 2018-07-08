<template>
    <i class="iconfont" :class="['icon-'+type]" :style="{fontSize:size+'px',color}"></i>
</template>

<script>
    import './fonts/iconfont.css'
    export default {
        name:"Icon",
        props:{
            type:{
                type:String,
                require:true
            },
            size:{
                type:Number,
                default:18
            },
            color:{
                type:String,
                default:'inherit'
            }
        }
    }
</script>

<style scoped>

</style>