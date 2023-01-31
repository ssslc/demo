<script setup>
import {
  UserOutlined,
  LaptopOutlined,
  MailOutlined,
  AppstoreOutlined,
  ClusterOutlined,
  FireOutlined
} from '@ant-design/icons-vue'
import { useStore } from '/@/stores/index.js'
import { storeToRefs } from 'pinia'
import path from 'path'

const props = defineProps({
  item: {
    type: Object
  },
  basePath: {
    type: String
  }
})

const store = useStore()
const { routes } = storeToRefs(store)
// 拼接全router地址
const resolvuePath = paramPath => {
  // console.log('拼接router', props.basePath, paramPath, path.resolve(props.basePath, paramPath))
  return path.resolve(props.basePath, paramPath)
}
</script>
<template>
  <div class="sliderItem-com">
    <!-- 放在里面会继续循环routes -->
    <!-- <template v-for="item in routes" :key="item.path">
      <a-sub-menu :key="item.name" v-if="item.children">
        <slider-item v-for="ele in item.children" :key="ele.path"> </slider-item>
      </a-sub-menu>
      <a-sub-menu key="sub1" v-else> {{ item.name }}</a-sub-menu>
    </template> -->

    <!-- <template v-if="item.children && item.children.length === 1">
      <a-menu-item :key="item.path" v-if="item.meta && !item.meta.isHide">
        <router-link :to="item.path">{{ item.name + '1' }}</router-link>
      </a-menu-item>
    </template>
    <a-sub-menu :key="item.path" v-else>
      <template #title>
        <span>
          <template v-if="item.meta && item.meta.icon">
            <component :is="item.meta.icon" class="pd-r-5"></component>
          </template>
          {{ item.name + '2' }}
        </span>
      </template>
      <slider-item v-for="ele in item.children" :key="ele.path" :item="ele"></slider-item>
    </a-sub-menu> -->

    <a-sub-menu :key="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <span>
          <user-outlined />
          {{ item.name }}
        </span>
      </template>
      <slider-item
        v-for="ele in item.children"
        :key="ele.path"
        :item="ele"
        :basePath="resolvuePath(ele.path)"
      ></slider-item>
    </a-sub-menu>
    <template v-else>
      <a-menu-item :key="item.path">
        <router-link :to="basePath ? basePath : item.path" :title="item.path">{{
          item.name
        }}</router-link>
      </a-menu-item>
    </template>
  </div>
</template>

<style></style>
