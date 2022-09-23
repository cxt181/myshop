<template>

    <div class="navBox">
        <div class="navBox_left" @click="addrItem">
            <span>{{addr}}</span>
            <van-icon name="arrow-down"/>
        </div>
        <div class="navBox_content">
            <p>
                <van-icon name="search"/>
                实时热搜
            </p>
            <van-icon name="enlarge"/>
        </div>
        <div class="navBox_right" @click="toPage">
            <van-icon name="chat-o" badge="9" size="20"/>
        </div>
    </div>
    <!--挂载省市地区选择器-->
    <v-areaSelect ref="child" />
</template>

<script>
    import AreaSelect from './AreaSelect/index'
    import {ref} from 'vue'

    export default {
        name: "NavBar",
        data() {
            return {
                addr: "汕尾",
            }
        },
        methods: {
            //地址选择
            addrItem() {
                // this.setup()
                this.$refs.child.showTba();
                console.log(this.$refs.child.title,':',this.addr)

                this.$refs.child.title=this.addr

            },
            //页面吗
            toPage() {
                console.log("页面跳转")
                // this.$router.push()
            },

        },
        //挂载组件
        components: {
            'v-areaSelect': AreaSelect,
        }

    }
</script>

<style scoped lang="scss">
    .navBox {
        width: 100%;
        height: 60px;
        /*background-color: #fff;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;

        .navBox_left {
            color: #000;
            font-size: 18px;
            margin-left: 15px;
            /*height: 40px;*/

        }

        .navBox_content {
            background-color: rgba(201, 201, 201, 0.22);
            width: calc(100% - 150px);
            height: 40px;
            border-radius: 20px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                color: #717171;
                font-size: 16px;
            }


        }

        .navBox_right {
            margin-right: 15px;
            /*height: 50px;*/
            text-align: center;
            /*background-color: blueviolet;w*/
            /*display: flex;*/
            /*align-items: center;*/
        }

    }

</style>
