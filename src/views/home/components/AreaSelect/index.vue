<template>
    <van-popup
            v-model:show="popShow"
            position="bottom"

    >
        <van-area
                :title="title"
                :area-list="areaList"
                :columns-num="2"
                @confirm="confirm"
                @cancel="cancel"
                @change="change"

        />
    </van-popup>
</template>

<script>
    import {areaList} from '@vant/area-data';

    export default {
        name: "index",
        data() {
            return {
                addr: "汕尾",
                areaList: '',
                title: '汕尾市',//默认选择地区
                //控制是否弹出
                popShow: false,
            }
        },
        methods: {
            setup() {
                this.areaList = areaList;
                return {areaList};
            },
            //触发数据
            confirm(event) {
                // console.log(1)
                let arr = [];
                event.map((item) => {
                    // arr= arr + item.name
                    arr.push(item.name)
                });
                // console.log('父亲元素','-',this.$parent.addr);
                this.$parent.addr= this.title = arr[1];
                this.popShow=false;
            },
            cancel() {
                // console.log(2)
                this.popShow=false;
            },
            change() {
                // console.log(3)
                this.popShow=true;
            },
            //点击打开Tba栏
            showTba(){
                this.popShow=true;
            }

        },
        mounted() {
            this.setup()
        }
    }
</script>

<style scoped>

</style>
