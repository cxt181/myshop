<template>
    <div>布局页</div>
    <router-view/>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">拼团</van-tabbar-item>
        <van-tabbar-item icon="friends-o">3</van-tabbar-item>
        <van-tabbar-item icon="setting-o">个人</van-tabbar-item>
    </van-tabbar>
   </template>

<script >
    import { Tabbar, TabbarItem } from 'vant';
    export default {
        name: "index",
        data(){
            return{
                active:""
            }
        }
    }
</script>

<style scoped>

</style>
