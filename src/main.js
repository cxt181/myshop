import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'amfe-flexible';
import '@/styles/index.scss' // 引用去除默认样式

//引入插件vant
 import  vant from 'vant';
 import 'vant/lib/index.css'

const  app =createApp(App);

app.use(vant);
app.use(store).use(router).mount("#app");
