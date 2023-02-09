import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    //登录页面
    {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/login"),
    },
    //底部栏
    {
        path: "/", //layout
        name: "layout",      //layout
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        redirect: './users',
        component: () =>
            import('../layout/index'),
        children: [
            //首页显示
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home/index')
            },
            //搜索页
            {
                path: 'search',
                name: 'search',
                component: () => import('@/views/search/index')

            },
            //拼团
            {
                path: 'dough',
                name: 'dough',
                component: () => import('@/views/dough/index')
            },
            //购物车
            {
                path: 'cart',
                name: 'cart',
                component: () => import('@/views/cart/index')
            },
            //个人用户
            {
                path: 'users',
                name: 'users',
                component: () => import('@/views/users/index')
            },


        ]
    },
    /**商品详情页**/
    {
        path: "/goodsDetail", //goodsDetail
        name: "goodsDetail", //goodsDetail
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/goodsDetail"),
    },
    /**空页面**/
    {
        path: "/empty",
        name: "empty",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/empty" ),
    },
    /**用户页面的设置页面**/
    {
        path: "/setup",
        name: "setup",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/setup" ),
    },

    /**用户页面的设置页面的公共页面**/
    {
        path: "/public",
        name: "public",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/public" ),
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
