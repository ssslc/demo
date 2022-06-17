<template>
  <a-sub-menu key="sub1">
    <template #title>
      <span>
        <user-outlined />
        subnav 1
      </span>
    </template>
    <a-menu-item key="1">option1</a-menu-item>
    <a-menu-item key="2">option2</a-menu-item>
    <a-menu-item key="3">option3</a-menu-item>
    <a-menu-item key="4">option4</a-menu-item>
  </a-sub-menu>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'sliderItem',
  props: {
    routes: {
      type: Array
    }
  },
  setup(props, context) {
    console.log(props.routes, context, 'ttest')
    return {}
  }
})
</script>

<style></style>
