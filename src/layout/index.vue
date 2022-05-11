<template>
  <div class="layout-content">
    <aside class="layout-left">
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
      </a-menu>
    </aside>

    <main>
      <section>
        <p>ssllllllllll</p>
      </section>
      <section>
        <p>页面内容</p>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(['1'])
    }
  }
})
</script>

<style lang="less" scoped>
.layout-content {
  height: 100%;
  width: 100%;
  display: flex;
  .layout-left {
    width: 200px;
    height: 100%;
    :deep(.ant-menu) {
      height: 100%;
    }
  }
}
</style>
