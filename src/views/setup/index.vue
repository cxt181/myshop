<!--用户界面的设置页面-->
<template>

    <van-nav-bar
            title="设置"
            left-arrow
            @click-left="onClickLeft"
    />
    <div class="backBg">
        <!-- 个人资料-->
        <div class="itemBox"
             @click="onToPage(1)"
        >
            <p>个人资料</p>
            <van-icon name="arrow" color="#717171"
            />
        </div>
        <!--换绑手机-->
        <div class="itemBox"
             @click="onToPage(2)"

        >
            <p>换绑手机</p>
            <div class="itemRight">
                134*****402
                <van-icon name="arrow" color="#717171"/>
            </div>
        </div>
        <!--修改登录密码-->
        <div class="itemBox">
            <p>修改登录密码</p>
            <van-icon name="arrow" color="#717171"/>
        </div>
        <!--消息推送-->
        <div class="itemBox"  @click="onToPage(3)">
            <p>消息推送</p>
            <van-icon name="arrow" color="#717171"/>
        </div>

        <!--清理缓存-->
        <div class="itemBox" @click="onToPage(5)">
            <p>清理缓存</p>
            <div class="itemRight">
                3MB
                <van-icon name="arrow" color="#717171"/>
            </div>
        </div>
        <!-- 给我们评分 -->
        <div class="itemBox itemMarginTop">
            <p>给我评分</p>
            <van-icon name="arrow" color="#717171"/>
        </div>
        <!-- APP版本 -->
        <div class="itemBox">
            <p>APP版本</p>
            <div class="itemRight">
                1.03
                <van-icon name="arrow" color="#717171"/>
            </div>

        </div>
        <!--退出登录-->
        <div class="itemBox itemMarginTop">
            <p>退出登录</p>
            <div class="itemRight">
<!--                <van-icon name="arrow" color="#717171"/>-->
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "index",
        setup() {
            const onClickLeft = () => history.back();
            return {
                onClickLeft,
            };
        },
        //跳转函数
        methods: {
            onToPage(data) {

                if (data ==1) {
                    //跳转到个人资料
                    console.log(2)
                    this.$router.push(
                        {
                            path:'/public',
                            query:{id:1}
                        }
                    );
                } else if (data == 2) {
                    //跳转到换绑手机
                    console.log("换绑手机")
                    this.$router.push(
                        {
                            path:'/public',
                            query:{id:2}
                        }
                    );
                } else if (data == 3) {
                    //跳转到消息推送
                    this.$router.push(
                        {
                            path:'/public',
                            query:{id:3}
                        }
                    );
                } else if (data == 4) {
                    //跳转到修改密码
                    this.$router.push('/empty')
                } else if (data == 5) {
                    //跳转到清理缓存

                    this.$toast({
                        message:'我是需要提示的文字',
                        position:'top'
                    });

                } else if (data == 6) {
                    //跳转到给我们评分
                    this.$router.push('/empty')
                } else {
                    //跳转到空页面
                    this.$router.push('/empty')
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    /*.van-nav-bar{*/
    /*    color: black;*/
    /*}*/
    /*:root:root {*/
    /*    --van-nav-bar-arrow-size: 16px;*/
    /*    --van-primary-color: var(--van-black);*/
    /*    --van-nav-bar-icon-color: var(--van-primary-color)*/
    /*}*/
    ::v-deep .van-icon {
        color: black;
        font-size: 20px;
    }

    .backBg {
        background-color: #f8f8f8;
        height: 100%;
    }

    /*个人资料*/
    .itemBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #ffffff;
        height: 50px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 1px;
    }
    .itemMarginTop{
        margin-top: 20px;
    }

    /*右侧的样式*/
    .itemRight{
        color: #717171;
        font-size: 15px;
    }

</style>
