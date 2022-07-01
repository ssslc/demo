import { defineStore } from "pinia";
import Layout from '/@/layout/index.vue'

export const useStore = defineStore('main', {
  // other option
  state: () => {
    return {
      routes: [
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
    }
  },
  actions: {
    getRoutes(params) {
      this.routes = params
    }
  }
})