<template>
    <div>布局页</div>
    <router-view/>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
