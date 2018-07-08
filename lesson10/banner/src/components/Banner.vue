<template>
    <div class="banner">
        <transition-group
            :enter-active-class="enter"
            :leave-active-class="leave"
            @after-enter="play">
            <div class="img" v-show="index == bannerIndex" v-for="(item,index) in banners" :key="index" >
                <img :src="item" />
            </div>
        </transition-group>
        <div class="btns">
            <button @click="prev">←</button>
            <button @click="next">→</button>
        </div>
        <div class="icons">
            <div class="item" :class="{active:index == bannerIndex}" @click="change(index)" v-for="(item,index) in banners" :key="index"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Banner",
        data(){
            return{
                banners:[require("../assets/img/1.jpg"),require("../assets/img/2.jpg"),require("../assets/img/3.jpg"),require("../assets/img/4.jpg")],
                bannerIndex:0,
                enter:"animated slideInLeft",
                leave:"animated slideOutRight",
                isPlay:false
            }
        },
        mounted(){
            let autoPlay = setInterval(()=>{
                if(this.isPlay) return
                this.bannerIndex ++
                if(this.bannerIndex > this.banners.length-1){
                    this.bannerIndex = 0
                }
            },3000)
        },
        methods:{
            prev(){
                if(this.isPlay) return
                this.isPlay = true
                this.bannerIndex --
                this.enter="animated slideInRight"
                this.leave="animated slideOutLeft"
                if(this.bannerIndex < 0){
                    this.bannerIndex = this.banners.length-1
                }
            },
            next(){
                if(this.isPlay) return
                this.isPlay = true
                this.bannerIndex ++
                this.enter="animated slideInLeft"
                this.leave="animated slideOutRight"
                if(this.bannerIndex > this.banners.length-1){
                    this.bannerIndex = 0
                }
            },
            change(index){
                if(this.isPlay) return
                this.isPlay = true
                if(index>this.bannerIndex){
                    this.enter="animated slideInLeft"
                    this.leave="animated slideOutRight"
                }else if(index<this.bannerIndex){
                    this.enter="animated slideInRight"
                    this.leave="animated slideOutLeft"
                }
                this.bannerIndex = index
            },
            play(){
                this.isPlay=false
            }
        }
    }
</script>

<style lang="less" scoped>
.banner{
    width: 100%;
    min-width: 1280px;
    height: 400px;
    overflow: hidden;
    position: relative;
    .img{
        position: absolute;
        width: 100%;
        img{
            width: 100%;
        }
    }
    .btns{
        position:absolute;
        top: 50%;
        margin-top: -30px;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        button{
            outline: none;
            background: transparent;
            border: 1px solid #80848f;
            border-radius: 50%;
            font-size: 40px;
            width: 60px;
            line-height: 60px;
            color: #80848f;
            cursor: pointer;
            &:hover{
                color: orangered;
                border-color: orangered;
            }
        }
    }
    .icons{
        position: absolute;
        bottom: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        .item{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #80848f;
            margin: 0 5px;
            cursor: pointer;
            &.active{
                background: orangered;
            }
        }
    }
}
</style>