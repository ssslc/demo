import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '/@/utils/test.ts'
import router from './router'
import './router/guard'



const app = createApp(App)
app.use(Antd)
app.config.productionTip = false
//整个应用支持路由。
app.use(router)
app.mount('#app')
