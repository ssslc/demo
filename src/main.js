import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '/@/utils/test.ts'
import router from './router'
import './router/guard'
import '/@/style/index.less'
import { createPinia } from 'pinia';

const pinia = createPinia()

if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}
const app = createApp(App)
app.use(Antd)
app.use(pinia)
app.config.productionTip = false
//整个应用支持路由。
app.use(router)
app.mount('#app')
