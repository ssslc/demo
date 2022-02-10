<template>
  <div class="modal-login">
    <p class="title-lg">Sign in SL</p>
    <a-form :model="data.userInfo" :label-col="data.labelCol" :wrapper-col="data.wrapperCol">
      <a-form-item label="Name：">
        <a-input v-model:value="data.userInfo.name" />
      </a-form-item>
      <a-form-item label="Password：">
        <a-input v-model:value="data.userInfo.name" />
      </a-form-item>
      <div>
        <a-button type="primary" html-type="submit" size="large" :loading="data.loading" block style="width: 100%;">
          登录
        </a-button>
      </div> 
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const data = reactive({
  loading: false,
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
  userInfo: {
    name: '',
    password: ''
  }
})
</script>

<style lang="less">
.modal-login {
  position: absolute;
  right: 18%;
  top: 30%;
  .title-lg {
    font-size: 28px;
    color: #1d9146;
    text-align: center;
  }
}

</style>