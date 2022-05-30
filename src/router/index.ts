import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '/@/layout/index.vue'
const routes: RouteRecordRaw[] = [
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
    children: [
      {
        path: 'waterfall',
        name: 'waterfall',
        component: () => import('/@/view/lazyLoading/index.vue')
      }
    ]
  },
  {
    path: '/myComponents',
    redirect: '/myComponents/index',
    name: 'myComponents',
    component: Layout,
    children: [
      {
        path: 'mySelect',
        name: 'mySelect',
        component: () => import('/@/view/myComponents/index.vue')
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