import { createRouter, createWebHashHistory } from 'vue-router'
// import type { AppRouteRecordRaw } from '/@/router/types';
import Layout from '/@/layout/index.vue'
import { AppRouteRecordRaw } from './types'
const routes: AppRouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/view/Login/index.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    redirect: '/homePage',
    name: 'homePage',
    component: Layout, //() => import('/@/view/HomePage/index.vue')
    meta: { requiresAuth: true },
    children: [
      {
        path: 'homepage',
        name: 'designCom',
        component: () => import('/@/view/HomePage/index.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/lazyLoading',
    redirect: '/lazyLoading/waterfall',
    name: 'lazyLoading',
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'waterfall',
        name: 'waterfall',
        component: () => import('/@/view/lazyLoading/index.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router
// const routes = [
//   // { path: '/', component: './src/view/Login/index.vue' },
//   { path: '/', component: '/@/view/Login/index.vue' },
//   { path: '/about', component: './src/components/HelloWorld.vue' },
// ]
