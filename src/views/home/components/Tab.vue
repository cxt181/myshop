<template>
    <!--Tab选择栏-->
    <div class="TabBox">
        <van-tabs
                v-model:active="active"
                @click-tab="onClickTab"
                title-active-color="red"
                swipeable

        >
            <van-tab
                    :title="item.title"
                    v-for="(item,index) in tabList"
                    :key="index"

            >

            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "Tba",
        data(){
            return{
                active:0,
                tabList:[
                    {
                        title:"推荐",
                        show:false,
                    },
                    {
                        title:"女装",
                        show:true,
                    },
                    {
                        title:"美妆",
                        show:true,
                    },
                    {
                        title:"男装",
                        show:true,
                    },
                    {
                        title:"居家",
                        show:true,
                    },
                    {
                        title:"鞋包",
                        show:true,
                    },
                    {
                        title:"特产",
                        show:true,
                    },
                ],
            }
        },
        methods:{
            onClickTab({title}){
                console.log('title'+':'+title)

            }
        }

    }
</script>

<style scoped>
    /*p{*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*}*/
    .TabBox{
        background-color: #ffffff;
        margin: 0;
    }

</style>
