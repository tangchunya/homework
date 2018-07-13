<template>
    <div class="comment-box">
        <div class="user-info">
            <img :src="userImg" class="user-img" />
            <div class="middle">
                <div class="user-name">{{userName}}<img src="../assets/img/pay.png"/></div>
                <div class="time">
                    <i>今天</i><i>13:14</i><i class="user-car">{{userCar}}</i>
                </div>
            </div>
            <div class="icon"><Icon type="ios-arrow-down" /></div>
        </div>
        <div class="content">
            <div class="text">{{contentText}}</div>
            <div class="img">
                <ul>
                    <li v-for="(item,index) in contentImg" :key="index">
                        <img :src="item" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <i>3</i>赞
                <i>8</i>评论
            </div>
            <div class="right">
                <Button type="primary" shape="circle" icon="thumbsup" :class="['btns',{active:isActive}]" @click="isActive = true"/>
                <Button type="primary" shape="circle" icon="chatbox-working" class="btns"/>
                <Button type="primary" shape="circle" icon="forward" class="btns"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Comment',
        props:{
            userImg:{
                type:String,
                require:true
            },
            userName:{
                type:String,
                default:'用户名'
            },
            userCar:{
                type:String,
                default:'奥迪A6'
            },
            contentText:{
                type:String,
                default:'心情'
            },
            contentImg:{
                type:Array
            }
        },
        data() {
            return {
                isActive: false
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../assets/var.less";
.comment-box{
    background-color: #fff;
    padding: 22px 20px;
    margin-bottom: 24px;
    .user-info{
        display: flex;
        .user-img{
            width: 0.888rem;
            height: 0.888rem;
            overflow: hidden;
            border: 1px solid #e9eaec;
            border-radius: 50%;
            margin-right: 10px;
            img{
                width: 100%;
            }
        }
        .middle{
            flex:1;
            .user-name{
                font-size: 0.444rem;
                img{
                    margin-left: 12px;
                }
            }
            .time{
                i{
                    font-style: normal;
                    font-size: 0.277rem;
                    color: @disabled;
                    margin-right: 12px;
                }
                .user-car{
                    color:@mainColor;
                }
            }
        }
    }
    .content{
        .text{
            line-height: 0.8333rem;
        }
        .img{
            ul{
                display: flex;
                justify-content: space-between;
                li{
                    width: 3.0555rem;
                    height: 3.0555rem;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
    .footer{
        display: flex;
        line-height: 1rem;
        .left{
            flex: 1;
            color:@disabled;
            i{
                font-style: normal;
            }
        }
        .right{
            width: 4.027rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .btns{
                outline: none;
                width: 0.5556rem;
                height: 0.5556rem;
                font-size: 0.3222rem;
                background-color: @disabled;
                border-color:@disabled;
                &.active{
                    background-color: @mainColor;
                    border-color:@mainColor;
                }
            }
        }
    }
}
</style>