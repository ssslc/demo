<script setup lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref, computed } from 'vue'
import sliderItem from './components/sliderItem.vue'
import { useRouter } from 'vue-router'
import { routes } from '/@/router/index'
import { storeToRefs } from 'pinia'

const router = useRouter()
// console.log(router.getRoutes(), 'routerArr')
const routerArr = routes.filter(item => item.meta?.isHide !== true) // router.getRoutes()
console.log(routerArr, 'routerArr')
const key = computed(() => router.path)
const mdBlock = window.innerHeight - 134
const selectedKeys1 = ref<string[]>(['2'])
const selectedKeys2 = ref<string[]>(['/'])
const openKeys = ref<string[]>(['sub1'])
</script>
<template>
  <a-layout class="f-layout-box">
    <a-layout-header class="header">
      <div class="logo" id="testid" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
        <a-menu-item key="4">login out</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="f-layout-content">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout class="md-block">
        <a-layout-sider class="f-layout-sider" :style="{ height: mdBlock + 'px' }">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <slider-Item
              v-for="item in routerArr"
              :item="item"
              :key="item.path"
              :basePath="item.path"
            ></slider-Item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <section class="app-main" :style="{ height: mdBlock + 'px' }">
            <transition name="fade-transform" mode="out-in">
              <keep-alive :include="cachedViews">
                <router-view :key="key" />
              </keep-alive>
            </transition>
          </section>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<style lang="less" scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.f-layout-content {
  height: calc(100% - 64px);
  padding: 0 16px;
}
.f-layout-box {
  height: 100%;
}

.layout-sider {
  width: 200px !important;
  overflow: scroll;
}
.ant-layout-sider {
  background: #fff;
}
.app-main {
  background-color: #fff;
}
</style>
