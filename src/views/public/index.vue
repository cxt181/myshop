<!--设置的个人资料页-->
<template>

    <van-nav-bar
            :title=tip
            left-arrow
            @click-left="onClickLeft"
    />
    <!--我的资料-->
    <div class="personBox" v-show="iShow==1">
        <!--头像-->
        <div class="itemBox">
            <p>头像</p>
            <div class="itemRight">
                <!--                <img src="" class="imgCircle">-->
                <p class="imgCircle"></p>
                <van-icon name="arrow" color="#717171"/>
            </div>
        </div>
        <!--呢称-->
        <div class="itemBox">
            <p>呢称</p>
            <div class="itemRight">
                <p class="textColor">
                    请输入会员名称
                </p>
                <van-icon name="arrow" color="#717171"/>
            </div>
        </div>
        <!--性别-->
        <div class="itemBox">
            <p>性别</p>
            <div class="itemRight">
                <p class="textColor">
                    请选择性别
                </p>
                <van-icon name="arrow" color="#717171"/>
            </div>
        </div>
        <!--生日-->
        <div class="itemBox">
            <p>生日</p>
            <div class="itemRight">
                <p class="textColor">
                    请选择出生日期
                </p>
                <van-icon name="arrow" color="#717171"/>
            </div>
        </div>
        <!--签名-->
        <div class="itemBox">
            <p>签名</p>
            <div class="itemRight">
                <p class="textColor">
                    做自己喜欢的事情
                </p>
                <van-icon name="arrow" color="#717171"/>
            </div>
        </div>
    </div>

    <!--验证手机-->
    <div class="phoneBox" v-show="iShow==2">
        <div class="phoneItem">
            <p class="textCss01">
                为确认身份，我们需要验证你的安全手机
            </p>
            <p class="textCss02">
                点击获取验证码，将会发送一条有验证码的短信至手机
                <span class="textColor">
                    {{phone}}
                </span>
            </p>
            <!--验证码错误或已过期-->
            <div class="tipBOX" v-show="codeTip">
                <van-icon name="clear" color="red" size="12px"/>
                <span>验证码错误或已过期</span>
            </div>


            <div class="filedBox">
                <van-cell-group inset>
                    <van-field
                            v-model="value"
                            type="number"
                            placeholder="请输入验证码"
                            ref="code"
                            @focus=getFocus

                    />
                </van-cell-group>
                <p @click="Totime()" v-show="codeShow">
                    获取验证码
                </p>
                <p v-show="!codeShow">
                    {{count}}秒后重新获取
                </p>

            </div>
            <!--按钮-->
            <div class="btnBox" @click="getCode">
                <p>下一步</p>
            </div>

        </div>
    </div>

<!--消息推送 -->
    <div class="newsBox"   v-show="iShow==3">
        <div class="btnItem">
            <p>
                系统消息推送
            </p>
            <van-switch v-model="checked"
                        @change="getChang"
                        size="16px"
            />
        </div>
        <div class="btnItem">
            <p>
                订单消息推送
            </p>
            <van-switch v-model="checked2"
                        @change="getChang"
                        size="16px"
            />
        </div>
        <div class="btnItem">
            <p>
                签到提醒
            </p>
            <van-switch v-model="checked3"
                        @change="getChang"
                        size="16px"
            />
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

        data() {
            return {
                tip: "我的资料",
                iShow: 1,
                phone: "123*****789",//验证码手机号码
                value: '', // 验证码输入的值
                count: '',//验证码倒记时
                timer: null,
                codeShow: true,
                codeTip:false,//当验证错误显示
                checked:false, //系统消息推送
                checked2:false,//订单消息推送
                checked3:false,//签到提醒
                MB:"3MB",//缓存数据


            }
        },

        methods: {
            //跳转页面过来，带参的值的判断
            toPage(id) {
                console.log("取餐" + id);

                if (id == 1) {
                    this.tip = '我的资料';
                    this.iShow = 1;
                } else if (id == 2) {
                    this.tip = "验证手机";
                    this.iShow = 2;
                } else if(id==3){
                    this.tip = "消息推送设置";
                    this.iShow = 3;
                }



                else {
                    alert("当前页面错误")
                }

            },
            //倒记时
            Totime() {
                console.log('启动');
                let p = 60;
                this.count = p;
                this.codeShow = false;
                console.log("this.count" + this.count);
                this.timer = setInterval(() => {
                    console.log('1');
                    this.count--;
                    if (this.count < 0) {

                        clearInterval(this.timer);
                        this.codeShow = true;
                        this.timer = null;

                    }

                }, 1000)


            },


            //验证码的函数
            getCode(){

                if(this.value==""){
                    alert("这是空的")
                }else {
                   this.codeTip=true
                }
            },
        //焦点事件
            getFocus(){
                // const input = this.$refs['cardNo'].querySelector('input');
                // input.focus();
                console.log(123)
            },
        // 按钮切换触发函数

            getChang(){
                if(this.checked){
                    console.log('true'+this.checked)
                }else {
                    console.log('false'+this.checked)
                }

            }

        },

        mounted() {
            console.log("开始挂载",);
            const p = this.$route.query.id;
            console.log("传参", p);
            this.toPage(p);

        }
    }
</script>

<style scoped lang="scss">
    ::v-deep .van-icon {
        color: black;
        font-size: 20px;
    }

    /**个人资料**/
    .personBox {
        padding-top: 10px;
        background-color: #f8f8f8;
        height: 100%;


        .itemBox {
            height: 50px;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            margin-bottom: 1px;
            font-size: 16px;

            .itemRight {
                display: flex;
                text-align: center;
                align-items: center;
                /*background-color: #1890ff;*/

                .imgCircle {
                    width: 30px;
                    height: 30px;
                    background-color: #bdbdbd;
                    border-radius: 40px;
                    margin-right: 10px;
                }

                .textColor {
                    color: #d3d3d3;
                    font-size: 14px;
                    margin-right: 10px;
                }
            }
        }
    }

    /**验证手机***/
    .phoneBox {
        .phoneItem {

            padding: 0 15px;

            .textCss01 {
                font-size: 16px;
                margin-top: 30px;
            }

            .textCss02 {
                font-size: 14px;
                color: #bdbdbd;
                margin-bottom: 20px;
                margin-top: 20px;
                line-height: 20px;

                .textColor {
                    color: #ff4148;
                }
            }

            .filedBox {
                display: flex;
                align-items: center;
                justify-content: space-between;
                /*background-color: #1890ff;*/
                height: 50px;
                font-size: 14px;
                border-bottom: 1px solid #bdbdbd;

                ::v-deep .van-cell-group--inset {
                    margin: 0;

                }
            }
        }

    }

    /**按钮样式**/
    .btnBox {
        width: 90%;
        height: 40px;
        background-color: #ff4148;
        text-align: center;
        line-height: 40px;
        margin: 25px auto 0 auto;
        font-size: 16px;
        border-radius: 18px;
        color: #ffffff;
    }

    /*验证码错误或已过期样式 */
    .tipBOX{
        background-color: #fff6a8;
        height: 20px;
        /*text-align: center;*/
        line-height: 20px;
        font-size: 10px;
        padding-left: 5px;
        margin: 10px 0;
        span{
            margin-left: 10px;
        }
    }
/*消息推送设置*/
    .newsBox{
        background-color: #f8f8f8;
        height: 100%;
        .btnItem{
            background-color: #ffffff;
            padding:  0 10px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1px;
            p{
                font-size: 15px;
                font-weight: lighter;
            }
        }
    }

</style>
