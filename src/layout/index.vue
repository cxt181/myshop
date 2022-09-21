<template>
    <div>布局页</div>
    <router-view/>
    <div>123</div>
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
