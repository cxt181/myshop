<template>
    <div class="back">
        <v-navbar/>
    </div>

</template>

<script>
    import NavBar from './components/NavBar'
    export default {
        name: "index",
        data(){
            return{

            }
        },
        components:{
            'v-navbar':NavBar,
        }
    }
</script>

<style scoped>
.back{
    background-color: rgba(184, 184, 184, 0.24);
    height: 600px;
    width: 100%;
}
</style>
