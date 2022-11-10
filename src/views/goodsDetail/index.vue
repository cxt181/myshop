<template>
    <div >
        <div class="back">
            <div class="NarBar">
                <van-icon
                        name="arrow-left"
                        color="#fff"
                        class="NarBar_left"
                        @click="onClickLeft"
                />
                <div class="NarBar_right">
                    <van-icon
                            name="like-o"
                            color="#fff"
                            class="NarBar_left"
                    />
                    <van-icon
                            name="more"
                            size="50px"
                            class="ico_more"
                    />
                </div>
            </div>
            <!--图片的轮播图-->
            <van-swipe class="goods_swipe"
                       :autoplay="3000"
                       lazy-render
            >
                <van-swipe-item v-for="(item,index) in imgList" :key="index">
                    <img :src="item.img">
                </van-swipe-item>
                <template #indicator="{ active, total }">
                    <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
            </van-swipe>
        </div>

        <!--价格-->
        <div class="priceBack">
            <div class="price_box">
                <p>
                <span class="color1">
                    ￥
                </span>
                    {{22.9}}

                    <span class="color2">
                    ￥68
                </span>
                </p>
                <p class="price_box_right">
                    已售200件
                </p>

            </div>
            <div class="price_detail">
                <p>春秋橡胶底男女情侣鞋052W吸汗透气防滑帆布鞋52051</p>
            </div>
            <!--满减-->
            <div class="price_box02">
                <p class="price_box02_border">满减</p>
                <p>
                    满2件减3元，满3件减5元
                </p>
            </div>
            <!--领卷-->
            <div class="price_box_coupon">
                <div class="price_box_coupon02">
                    <p class="price_box02_border">满减</p>
                    <p>
                        ￥5元优惠卷，满98元可用
                    </p>

                </div>
                <van-icon
                        name="arrow"
                        size="16px"
                        @click="onClick"
                />

            </div>

        </div>
        <!--同城配送 商家认证 随时退 过期自动退-->
        <div class="sub_box">
            <p>
                <van-icon
                        name="passed"
                        color="red"
                />
                同城配送
            </p>
            <p>
                <van-icon
                        name="passed"
                        color="red"
                />
                商家认证
            </p>
            <p>
                <van-icon
                        name="passed"
                        color="red"
                />
                随时退
            </p>
            <p>
                <van-icon
                        name="passed"
                        color="red"
                />
                过期自动退
            </p>
        </div>
        <div class="back2">
            <!--评论-->
            <div class="commentBox">

                <p class="commentBox_Item">
                    共0条评价
                </p>
                <p>
                    查看更多
                    <van-icon name="arrow"/>
                </p>
            </div>
            <div class="back3">
                <!--店铺详情-->
                <div class="shopBox">
                    <img src="../../assets/shop.png" alt="" class="imgSize">
                    <div class="shopItem">
                        <p class="shopItem_bold">

                            好旺角咖啡店
                            <span class="shopItem_bold_btn">
                            进入店铺
                        </span>
                        </p>
                        <p>
                            <van-icon name="location-o"/>
                            高州市站前路33号顺义大楼旁
                        </p>
                    </div>
                </div>
                <!--店铺商品推荐-->
                <div class="shopGoodsBox">
                    <div class="shopGoodsBox_list">
                        <img src="../../assets/tanke.png" class="shopGoodsBox_img">
                        <p class="priceText">
                            59-II式主战坦克也被称为ZTZ59-II或WZ-120B，它是59式中型坦克的改进型，
                            使用ZPL-81 105毫米线膛炮，备弹44发，包括高爆弹、高爆破片弹和尾翼稳定脱壳穿甲弹。
                        </p>
                        <p class="priceRed">
                        <span class="priceRedColor">
                            ￥ 89
                        </span>
                            <span>
                            已售236件
                        </span>

                        </p>
                    </div>
                    <div class="shopGoodsBox_list">
                        <img src="../../assets/tanke.png" class="shopGoodsBox_img">
                        <p class="priceText">
                            59-II式主战坦克也被称为ZTZ59-II或WZ-120B，它是59式中型坦克的改进型，
                            使用ZPL-81 105毫米线膛炮，备弹44发，包括高爆弹、高爆破片弹和尾翼稳定脱壳穿甲弹。
                        </p>
                        <p class="priceRed">
                        <span class="priceRedColor">
                            ￥ 89
                        </span>
                            <span>
                            已售236件
                        </span>

                        </p>
                    </div>
                    <div class="shopGoodsBox_list">
                        <img src="../../assets/tanke.png" class="shopGoodsBox_img">
                        <p class="priceText">
                            59-II式主战坦克也被称为ZTZ59-II或WZ-120B，它是59式中型坦克的改进型，
                            使用ZPL-81 105毫米线膛炮，备弹44发，包括高爆弹、高爆破片弹和尾翼稳定脱壳穿甲弹。
                        </p>
                        <p class="priceRed">
                        <span class="priceRedColor">
                            ￥ 89
                        </span>
                            <span>
                            已售236件
                        </span>

                        </p>
                    </div>
                </div>
            </div>

        </div>

        <!-- 商品图文描述-->
        <div class="shopBox_img">
            <p>商品图文介绍</p>
        </div>

<!--        商品描述-->
        <div class="shopBox_text">
            <p class=" shopBox_text_color">商品描述</p>
            <p>
                商品是为了出售而生产的劳动成果，是人类社会生产力发展到一定历史阶段的产物，是用于交换的劳动产品。需要标明的物质的某种特征值，包括长度，宽度，
                高度，密度，质量，物理特性，规格，使用的行业标准，原料，生产工艺，各种化工原料的添加值，性能，产地，储存环境，使用寿命，结构。
            </p>
        </div>
<!--        底部栏-->
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
        </van-action-bar>
    </div>
</template>

<script setup>
    function onClick(event) {
        console.log(event)

    }
    //底部购物栏的提升
    const onClickIcon = () =>{
        console.log('点击图标')
    };
    const onClickButton = () => {
        console.log('点击按钮')
    };
    //页面跳转
    const onClickLeft = () => history.back();



    //轮播图
    let imgList = [
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
</script>

<style scoped lang="scss">
    .back {
        width: 100%;
        height: 300px;
        position: relative;
    }

    .back3 {
        background-color: #ffffff;
    }

    /*自定义NarBar栏*/
    .NarBar {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;
        /*opacity: 0.6;*/


        .NarBar_left {
            background-color: #000000;
            opacity: 0.5;
            padding: 5px;
            border-radius: 20px;
            height: 30px;
            width: 30px;
            text-align: center;
            line-height: 30px;
        }

        .NarBar_right {
            display: flex;
            align-items: center;

            .ico_more {
                opacity: 0.5;
                margin-left: 10px;
            }
        }
    }

    /*轮播图样式*/
    .goods_swipe {
        height: 300px;
        width: 100%;
        /*background-color: aqua;*/
        position: absolute;
        z-index: -1;
        top: 0;
    }

    .custom-indicator {
        position: absolute;
        bottom: 5px;
        right: 50%;
        padding: 3px 6px;
        font-size: 12px;
        background-color: #000;
        color: #ffffff;
        border-radius: 8px;
    }

    .priceBack {
        padding: 0 10px;
    }

    /*价格样式*/
    .price_box {
        height: 50px;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            color: red;
            font-size: 20px;
            font-weight: bolder;
        }

        .color1 {
            font-size: 16px;
        }

        .color2 {
            color: #bdbdbd;
            font-size: 17px;
            text-decoration: line-through;
        }

        .price_box_right {
            color: #000;
            font-size: 14px;
            font-weight: normal;
        }

    }

    .price_detail {
        font-size: 15px;
        font-weight: bold;
    }

    /*满减的样式*/
    .price_box02 {
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-top: 8px;

        .price_box02_border {
            width: 40px;
            color: #16ebff;
            padding: 1px;
            border: 1px solid #16ebff;
            text-align: center;
            margin-right: 10px;
            border-radius: 5px;
        }
    }

    /*领卷*/
    .price_box_coupon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;

        .price_box_coupon02 {
            font-size: 14px;
            display: flex;
            align-items: center;
            margin-top: 8px;

            .price_box02_border {
                width: 40px;
                color: #16ebff;
                padding: 1px;
                border: 1px solid #16ebff;
                text-align: center;
                margin-right: 10px;
                border-radius: 5px;
            }

        }
    }

    /*同城配送 商家认证 随时退 过期自动退*/
    .sub_box {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 14px;
        height: 50px;
        text-align: center;
        border-top: 0.5px solid #b8b8b8;
        line-height: 50px;
    }

    .back2 {
        background-color: #e7e7e7;
        padding-top: 8px;
        padding-bottom: 8px;
    }

    /*评论*/
    .commentBox {
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 16px;
        font-weight: bold;

    }

    /*店铺详情*/
    .shopBox {
        background-color: #ffffff;
        margin-top: 10px;
        padding: 10px;
        display: flex;
        /*align-items: center;*/
        justify-content: flex-start;

        .imgSize {
            width: 60px;
            height: 60px;
            overflow: hidden;
        }

        .shopItem {
            margin-left: 15px;
            height: 60px;
            width: calc(100% - 80px);

            p {
                font-size: 13px;
                color: #b4b4b4;
            }

            .shopItem_bold {
                padding-bottom: 15px;
                font-weight: bold;
                font-size: 16px;
                color: black;
                /*background-color: #16ebff;*/
                display: flex;
                justify-content: space-between;

                .shopItem_bold_btn {
                    background-color: #d64047;
                    color: #fff;
                    font-size: 13px;
                    padding: 5px 8px;
                    border-radius: 15px;

                }
            }
        }

    }

    /*店铺商品介绍*/
    .shopGoodsBox {
        /*background-color: #ffffff;*/
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;

        .shopGoodsBox_list {

            width: 29%;
            /*background-color:#1890ff;*/
            height: 170px;

            .shopGoodsBox_img {
                width: 100%;
                height: 80px;
            }

            .priceText {
                font-size: 12px;
                /*1. 超出的部分隐藏 */
                overflow: hidden;
                /*2. 文字用省略号替代超出的部分 */
                text-overflow: ellipsis;

                /* 3. 弹性伸缩盒子模型显示 */
                display: -webkit-box;

                /* 4. 限制在一个块元素显示的文本的行数 */
                -webkit-line-clamp: 2;

                /* 5. 设置或检索伸缩盒对象的子元素的排列方式 */
                -webkit-box-orient: vertical;
            }

            .priceRed {
                width: 100%;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                /*background-color: black;*/
                margin-top: 10px;
                padding-right: 5px;
                color: #bdbdbd;

                .priceRedColor {
                    color: #000000;
                    font-size: 12px;
                    font-weight: bolder;

                }
            }
        }

    }

    /*图文介绍*/
    .shopBox_img {
        height: 50px;
        background-color: #fff;
        line-height: 50px;
        padding: 0 10px;


        P {
            font-size: 16px;
        }
    }

    /* 商品描述*/
    .shopBox_text{
        padding-top: 10px;
        padding-left: 10px;
        background-color: #e2e2e2;
        font-size: 14px;
        padding-bottom: 60px;
        .shopBox_text_color{
            color: #16ebff;
            font-size: 14px;
            margin: 20px 0;
        }
    }
</style>
