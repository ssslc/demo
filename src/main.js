import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '/@/utils/test.ts'
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const routes = [
  // { path: '/', component: './src/view/Login/index.vue' },
  { path: '/', component: '/@/view/Login/index.vue' },
  { path: '/about', component: About },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
const app = createApp(App)
app.use(Antd)
app.config.productionTip = false
//整个应用支持路由。
app.use(router)
app.mount('#app')
