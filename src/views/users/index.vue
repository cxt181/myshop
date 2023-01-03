<template>
    <div class="back">

        <div class="topBack">
            <div class="icoBox">
                <van-icon name="setting-o" color="#fff" size="30px" class="icoPadding"/>
                <van-icon name="comment-o" color="#fff" size="30px" class="icoPadding"/>
            </div>
            <div class="userBox">
                <div class="userItem">
                    <van-icon name="user-circle-o" color="#fff" size="50px" class="icoPadding"/>


                    <p class="pSize">
                        登录/注册
                    </p>
                </div>
                <van-icon name="arrow" color="#fff" class="icoArrow"/>
            </div>

        </div>
        <!--签到有奖，我的收藏夹，浏览记录-->
        <div class="funBox">
            <van-row justify="space-between">
                <van-col span="8" class=" colItem">
                    <van-icon name="completed" size="30"/>
                    <span>
                        签到有奖
                    </span>
                </van-col>

                <van-col span="8" class=" colItem">
                    <van-icon name="star-o" size="30"/>
                    <span>
                        我的收藏夹
                    </span>
                </van-col>

                <van-col span="8" class=" colItem">

                    <van-icon name="clock-o" size="30"/>
                    <span>浏览记录</span>

                </van-col>
            </van-row>

        </div>
        <!--我的订单-->
        <div class="orderBox">
            <p>我的订单</p>
            <div class="rightItem">
                <span>查看全部订单</span>
                <van-icon name="arrow" color="#bdbdbd" size="16"/>
            </div>
        </div>
        <!--待付款，待消费，待发货，待收货，待评价 -->
        <div class="orderIcoBox">
            <div>
                <van-icon name="paid" color="#686868" size="40"/>
                <p>待付款</p>
            </div>
            <div>
                <van-icon name="peer-pay" color="#686868" size="40"/>
                <p>待消费</p>
            </div>
            <div>
                <van-icon name="send-gift-o" color="#686868" size="40"/>
                <p>待发货</p>
            </div>
            <div>
                <van-icon name="logistics" color="#686868" size="40"/>
                <p>待收货</p>
            </div>
            <div>
                <van-icon name="records" color="#686868" size="40"/>
                <p>待评价</p>
            </div>
        </div>
        <!--优惠卷，我的积分，我的拼团，退款/售后 -->
        <div class="icoBox">
            <div >
                <van-icon name="coupon-o" color="#F8861E" size="40" class="icoItem01" />
                <p>优惠卷</p>
            </div>
            <div >
                <van-icon name="points" color="#20aeff" size="40" class="icoItem01" />
                <p>我的积分</p>
            </div>
            <div >
                <van-icon name="gift-o" color="#10ff73" size="40" class="icoItem01" />
                <p>我的拼团</p>
            </div>
            <div >
                <van-icon name="description" color="#ff5353" size="40" class="icoItem01" />
                <p>退款/售后</p>
            </div>

        </div>

        <P>个人用户</P>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    /*背景颜色*/
    .back {
        background-color: #e7e7e7;
        height: 600px;

    }

    /*顶部样式*/
    .topBack {
        background-color: #f54f5d;
        height: 200px;
        color: #ffffff;

        .icoBox {
            /*background-color: black;*/
            width: 100%;
            height: 50px;
            text-align: right;
            line-height: 50px;

            .icoPadding {
                margin-right: 15px;
            }
        }

        .userBox {
            height: 60px;
            /*background-color: #1890ff;*/
            margin-top: 80px;
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .userItem {
                display: flex;
                align-items: center;
                margin-left: 15px;

                .pSize {
                    font-size: 15px;
                    margin-left: 10px;
                }

            }

            .icoArrow {
                margin-right: 15px;
            }
        }
    }

    /*签到有奖，我的收藏夹，浏览记录样式*/
    .funBox {
        background-color: #ffffff;
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;

        .colItem {
            text-align: center;

            span {
                font-size: 16px;
                text-align: center;
                margin-left: 5px;
                color: #686868;

            }
        }

    }

    /* 我的订单的样式 */
    .orderBox {
        background-color: #ffffff;
        height: 50px;
        font-size: 17px;
        margin-top: 10px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .rightItem {
            color: #bdbdbd;
            text-align: center;

            span {
                font-size: 15px;
            }
        }
    }

    .orderIcoBox {
        background-color: #ffffff;
        margin-top: 1px;
        height: 100px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        p {
            font-size: 15px;
            font-weight: bold;
        }
    }

    /*优惠卷，我的积分，我的拼团，退款/售后*/
    .icoBox{
        height: 100px;
        margin-top: 10px;
        background-color: #ffffff;
        font-size: 16px;
        font-family: 微软雅黑;
        color: black;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icoItem01{
            /*background-color: #ffc690;*/
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 50px;
        }
    }
</style>
