import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/login"),
    },
    {
        path: "/", //layout
        name: "layout",      //layout
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        redirect: './home',
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

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
