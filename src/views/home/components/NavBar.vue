<template>

    <div class="navBox">
       <div class="navBox_left">
           <span>杭州</span>
           <van-icon name="arrow-down" />
       </div>
        <div class="navBox_content">
            <p>
                <van-icon name="search" />
                实时热搜
            </p>
            <van-icon name="enlarge"  color="#717171"/>
        </div>
        <div class="navBox_right">
            <van-icon name="chat-o" badge="9" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">
    .navBox{
        width: 100%;
        height: 60px;
        /*background-color: #fff;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        .navBox_left{
            color: #000;
            font-size: 18px;
            margin-left: 15px;
            /*height: 40px;*/

        }
        .navBox_content{
            background-color: rgba(201, 201, 201, 0.22);
            width: calc(100% - 150px );
            height: 40px;
            border-radius: 20px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                color: #717171;
                font-size: 16px;
            }


        }
        .navBox_right{
            margin-right: 15px;
            /*height: 50px;*/
            text-align: center;
            /*background-color: blueviolet;*/
            /*display: flex;*/
            /*align-items: center;*/
        }

    }

</style>
