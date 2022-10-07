<template>
    <!--Tab栏的内容-->
    <div class="TabContentBox">
        <!--轮播图-->
        <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="red"
                lazy-render

        >
            <van-swipe-item v-for="(item,index) in imgList" :key="index">
                <img :src="item.img" class="img_item">
            </van-swipe-item>
        </van-swipe>
        <!--广告板块-->
    </div>
    <div class="adverItem">
        <p class="adverItem_01"></p>
        <span class="adverItem_02">活动推荐</span>
        <span>邀请商家入驻</span>
    </div>
    <!--九宫格选项-->
    <van-grid
            class="gridBox"
            :gutter="10"
            :border="false"
            @click="onClick"
    >
        <van-grid-item
                :icon="item.icon" :text="item.title"
                v-for="(item,index) in gridList" :key="index"
                to="/login"


        />
    </van-grid>
    <!--限时抢购-->
    <div class="FlashSaleBox">
        <div class="FlashSaleBox_left">
            <van-icon name="clock-o" color="red"/>
            <span>限时抢购</span>
            <van-count-down :time="time">
                <template #default="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">时</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">分</span>
                    <span class="block">{{ timeData.seconds }}</span>
                    <span class="colon">秒</span>
                </template>
            </van-count-down>
        </div>
        <div class="FlashSaleBox_right">
            <span>查看更多</span>
            <van-icon name="arrow"/>
        </div>
    </div>
    <!--限时抢购商品列表-->
    <div class="goodList">
        <div class="goodList_Item" v-for="(item ,index) in goodList" :key="index">
            <img src="../../../assets/yifu.png" alt="">
            <span>换季衣服，黑色长袖</span>
            <p>￥68.9</p>
        </div>
    </div>
    <!--超值拼团-->
    <div class="ScrabbleBox">
        <van-icon name="star" color="#fff"  class="iconBorder" size="12px"/>
        <span>超值拼团</span>
    </div>
    <div class="ScrabbleBox_Goods">
        <img src="" alt="">
        
    </div>
</template>

<script setup>
    const imgList = [
        {
            img: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'
        },
        {
            img: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'
        },
        {
            img: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'
        },
        {
            img: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'
        },

    ];
    //商品图标
    const gridList = [
        {
            icon: 'bag',
            title: '一元抢购'
        },
        {
            icon: 'new-arrival-o',
            title: '新品上市'
        },
        {
            icon: 'logistics',
            title: '免配送费'
        },
        {
            icon: 'shop',
            title: '品牌馆'
        },
        {
            icon: 'underway-o',
            title: '限时抢购'
        },
        {
            icon: 'stop-circle',
            title: '拼团'
        },
        {
            icon: 'point-gift',
            title: '礼品'
        },
        {
            icon: 'goods-collect',
            title: '奢侈品'
        }
    ];
    const time = 30 * 60 * 60 * 1000;
    //限时抢购商品列表
    const goodList = [
        {},
        {},
        {}
    ];

    function onClick(event) {
        console.log(event)

    }
</script>

<style scoped lang="scss">
    .my-swipe .van-swipe-item {
        color: #fff;
        text-align: center;
    }

    .img_item {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    /* 广告模块样式*/
    .adverItem {
        margin-top: 8px;
        background-color: #ffffff;
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10px;

        .adverItem_01 {
            width: 5px;
            height: 5px;
            background-color: red;
            border-radius: 5px;
        }

        .adverItem_02 {
            font-size: 13px;
            border: solid 2px red;
            margin-left: 10px;
            margin-right: 10px;
            padding: 3px 8px;
            border-radius: 15px;
            color: red;
        }

        span {
            font-size: 15px;
        }
    }

    /* 九宫格样式*/
    .gridBox {
        padding: 15px 0;
        margin-top: 8px;
        background-color: #ffffff;
    }

    /*限时抢购*/
    .FlashSaleBox {
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 10px;
        margin: 8px 0 0 0;

        .FlashSaleBox_left {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span {
                font-size: 14px;
                font-weight: bolder;
                margin: 0 5px;
            }

            .colon {
                display: inline-block;
                margin: 0 2px;
                color: #000;
                font-size: 12px;
            }

            .block {
                display: inline-block;
                width: 22px;
                color: #fff;
                font-size: 10px;
                text-align: center;
                background-color: #000;
                border-radius: 5px;
            }
        }

        .FlashSaleBox_right {
            font-size: 12px;
        }
    }

    /*限时抢购-商品列表*/
    .goodList {
        background-color: #ffffff;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px 20px;

        .goodList_Item {
            /*flex: 1;*/
            margin: 0 5px;

            span {
                font-size: 12px;
                width: 100%;
                text-overflow: ellipsis;
                white-space: nowrap;
                /*background-color: #717171;*/
                margin: 0;
                padding: 0;
            }

            img {
                width: 100%;
                height: 120px;
                border: solid 1px #bdbdbd;
                overflow: hidden;
            }

            p {
                font-size: 14px;
                color: #ff4148;
            }
        }
    }

    /* 超值拼团*/
    .ScrabbleBox{
        background-color: #ffffff;
        height: 48px;
        text-align: center;
        line-height: 48px;
        .iconBorder{
            background-color: red;
            /*border: solid 1px #1f2d3d;*/
            border-radius: 20px;
            padding: 3px;
            text-align: center;
        }
        span{
            font-size: 15px;
            text-align: center;
            margin-left: 5px;
            padding-top: 4px;
        }
    }

</style>
