<template>
    <router-view/>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o"  to="/search">搜索</van-tabbar-item>
        <van-tabbar-item icon="balance-o" to="/dough">拼团</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/users">个人中心</van-tabbar-item>

    </van-tabbar>
   </template>

<script >
    import { Tabbar, TabbarItem } from 'vant';
    // import NavBar from './componets/NavBar'
    export default {
        name: "index",
        data(){
            return{
                active:0,
                //控制底部栏的切换的颜色
                activeColor:"#ee0a24",
                inactiveColor:"#000"
            }
        },
        //挂载
        components:{
            // 'v-navbar':NavBar,
        }
    }
</script>

<style scoped>

</style>
