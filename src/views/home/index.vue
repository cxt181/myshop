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
        background-color: #c8c8c8;
        height: 600px;
    }

</style>
