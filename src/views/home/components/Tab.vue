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
                    :name="item.key"
                    v-for="(item,index) in tabList"
                    :key="index"

            >
                <v-TabContent
                        ref="header"
                        :data="item.show"

                />

            </van-tab>
        </van-tabs>
<!--        <div @click="on">-->
<!--            123456-->
<!--        </div>-->
    </div>
</template>

<script>
    import TabContent from "./TabContent";
    import {ref} from 'vue'
    export default {
        name: "Tba",
        data(){
            return{
                active:0,
                tabList:[
                    {
                        title:"推荐",
                        show:false,
                        key:1,
                    },
                    {
                        title:"女装",
                        show:true,
                        key:2,
                    },
                    {
                        title:"美妆",
                        show:true,
                        key:3,
                    },
                    {
                        title:"男装",
                        show:true,
                        key:4,
                    },
                    {
                        title:"居家",
                        show:true,
                        key:5,
                    },
                    {
                        title:"鞋包",
                        show:true,
                        key:6,
                    },
                    {
                        title:"特产",
                        show:true,
                        key:7,
                    },
                ],
                //tab栏切换
            }
        },
        methods:{
            onClickTab({title,name}){
                console.log('title'+':'+title)
                console.log('number'+name)
                // if(name==1){
                //     this.show=true;
                // }{
                //     this.show=false;
                // }
                this.on()

            },
            on(){
                let img=  this.$refs.header.p;
                console.log(img)
            }
        },
        //挂载组件
        components:{
            'v-TabContent':TabContent,
        }

    }
</script>

<style scoped>
    /*p{*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*}*/
    .TabBox{
        /*background-color: #ffffff;*/
        margin: 0;
    }

</style>
