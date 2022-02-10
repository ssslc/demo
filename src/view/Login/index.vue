<template>
  <div class="login-content">
    <ModalLg/>
  </div>
</template>

<script lang="ts" setup>
import ModalLg from "./components/ModalLg.vue"
</script>

<style lang="less" scoped>
.login-content {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("../../assets/img/mountains.jpg");
}
</style>