<template>
    <div class="back">
        <v-NavBar/>
        <v-Tab/>
    </div>

</template>

<script>
    import NavBar from "./components/NavBar";
    import Tab from './components/Tab'
    export default {
        name: "index",
        data(){
            return{

            }
        },
        components:{
            'v-NavBar' :NavBar,
            'v-Tab':Tab,
        }
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .back{
        /*background-color: #d93636;*/
        background-color: #e7e7e7;
        padding-bottom: 50px;
    }

</style>
