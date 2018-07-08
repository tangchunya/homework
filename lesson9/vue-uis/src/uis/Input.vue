<template>
    <div :class="['input-group',size,{'input-long':long}]">
        <span class="input-addon addon-left" v-if="lValue">{{lValue}}</span>
        <input type="text" class="input" :placeholder="placeholder" >
        <span class="input-addon addon-right" v-if="rValue">{{rValue}}</span>
    </div>
</template>

<script>
    export default {
        name:"vInput",
        props:{
            lValue:{
                type:String
            },
            rValue:{
                type:String
            },
            placeholder:{
                type:String
            },
            size:{
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
.sizeRender(@width,@height){
    width: @width;
    line-height: @height;
}
.input-group{
    color: #495060;
    display: flex;
    &.large{
        .sizeRender(280px, 40px)
    }
    &.default{
        .sizeRender(240px, 30px)
    }
    &.small{
        .sizeRender(200px, 20px)
    }
    .input{
        flex:1;
        border:none;
        padding: 0 5px;
        border: 1px solid #dddee1;
        line-height: inherit;
        &:focus{
            outline: none;
            border:1px solid #5cadff;
        }
        &:hover{
            border:1px solid #5cadff;
        }
    }
    .input-addon{
        padding: 0 10px;
        border: 1px solid #dddee1;
        background: #e9eaec;
        &.addon-left{
            border-radius:5px 0px 0px 5px;
            border-right: none;
        }
        &.addon-right{
            border-radius:0px 5px 5px 0px;
            border-left: none;
        }
    }
    &.input-long{
        width: 100%;
    }
}
</style>