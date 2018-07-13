<template>
    <div>
        <Header />
        <div class="banner">
            <ul>
                <li v-for="(item,index) in bannerList" :key="index">
                    <img :src="item" />
                </li>
            </ul>
        </div>
        <Comment userName="橘中带核" userCar="奥迪A6SUV 五座 黑色" contentText="这次出去耍得真开心" :userImg="user.img" :contentImg="contentImg"/>
        <Comment userName="橘中带核" userCar="奥迪A6SUV 五座 黑色" contentText="这次出去耍得真开心" :userImg="user.img" :contentImg="contentImg"/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Comment from '@/components/Comment'
    export default {
        name:'Home',
        data() {
            return {
                bannerList: [require("../assets/img/banner.png")],
                user:{
                    img: require("../assets/img/userimg.png")
                },
                contentImg:[require("../assets/img/img1.jpg"),require("../assets/img/img2.jpg"),require("../assets/img/img3.jpg")]
            }
        },
        components:{
            Header,
            Comment
        }
    }
</script>

<style lang="less" scoped>
.banner{
    li{
        width: 100%;
        font-size: 0;
        img{
            width: 100%;
        }
    }
}
</style>