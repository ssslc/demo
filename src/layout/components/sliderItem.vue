<template>
  <div class="sliderItem-com">
    <!-- 放在里面会继续循环routes -->
    <!-- <template v-for="item in routes" :key="item.path">
      <a-sub-menu :key="item.name" v-if="item.children">
        <slider-item v-for="ele in item.children" :key="ele.path"> </slider-item>
      </a-sub-menu>
      <a-sub-menu key="sub1" v-else> {{ item.name }}</a-sub-menu>
    </template> -->
    <template v-if="item.children === undefined || item.children.length === 0">
      <a-menu-item :key="item.path">{{ item.name }}</a-menu-item>
    </template>
    <a-sub-menu :key="item.path" v-else>
      <template #title>
        <span>
          <user-outlined />
          {{ item.name }}
        </span>
      </template>
      <slider-item v-for="ele in item.children" :key="ele.path" :item="ele"></slider-item>
    </a-sub-menu>

    <!-- 复杂项应当放在后面 -->
    <!-- <a-sub-menu :key="item.path" v-if="item.children > 0">
      <template #title>
        <span>
          <user-outlined />
          2{{ item.name }}
        </span>
      </template>
      <a-menu-item key="1" v-if="">option1</a-menu-item>
      <slider-item v-for="ele in item.children" :key="ele.path" :item="ele"></slider-item>
    </a-sub-menu>
    <a-menu-item :key="item.path" v-else> 1{{ item.name }}</a-menu-item> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from '/@/stores/index.js'
import { storeToRefs } from 'pinia'
export default defineComponent({
  name: 'sliderItem',
  props: {
    item: {
      type: Object
    }
  },
  setup(props, context) {
    const store = useStore()
    const { routes } = storeToRefs(store)
    // console.log(routes.value, 'routes')
    // store.getRoutes([2])
    // console.log(routes.value, 'routes.value')
    return {
      item: props.item
    }
  }
})
</script>

<style></style>
