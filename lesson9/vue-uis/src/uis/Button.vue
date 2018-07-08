<template>
    <button class="btn" :class="['btn-'+type,{'btn-long':long}]">
        <slot>{{value}}</slot>
    </button>
</template>

<script>
    export default {
        name:"Button",
        props:{
            value:{
                type:String,
                default:'按钮'
            },
            type:{
                type:String,
                default:"default"
            },
            long:{
                type:Boolean
            }
        }
    }
</script>

<style lang="less" scoped>
    @import './var.less';
    .borderRender(@border){
        border:1px @border @Content;
        background: #fff;
        color:@Content;
        &:hover{
            color:@Primary;
            border-color:@Primary;
        }
    }
    .colorRender(@bg){
        border:1px solid @bg;
        color:#fff;
        background:@bg;
        &:hover{
            background: lighten(@bg,20%);
            border-color: lighten(@bg,20%);
        }
    }
    .btn{
        cursor: pointer;
        padding: 5px 15px;
        border-radius: 5px;
        &.btn-default{
            .borderRender(solid)
        }
        &.btn-dashed{
            .borderRender(dotted)
        }
        &.btn-text{
            .borderRender(none)
        }
        &.btn-info{
            .colorRender(@Info)
        }
        &.btn-success{
            .colorRender(@Success)
        }
        &.btn-warning{
            .colorRender(@Warning)
        }
        &.btn-error{
            .colorRender(@Error)
        }
        &.btn-long{
            display: block;
            width: 100%;
        }
    }
</style>