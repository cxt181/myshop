<template>
    <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />

    <van-empty image="error" description="暂无完成，敬请期待" />
</template>

<script>
    export default {
        setup() {
            const onClickLeft = () => history.back();
            return {
                onClickLeft,
            };
        },
    }
</script>

<style scoped>

</style>
