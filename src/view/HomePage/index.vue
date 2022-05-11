<template>
  <p>ssss</p>
  <p>ssccccc</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    console.log(111)
    return {
      collapsed: ref<boolean>(false)
    }
  }
})
</script>

<style></style>
