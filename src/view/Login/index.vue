<template>
  <div class="login-content">
    <!-- <img class="bg-img" src="../../assets/img/mountains.jpg" alt="" /> -->
    <div class="login-box">
      <a-form>
        <h2 class="theme-txt">Forset</h2>
        <a-form-item class="form-item" name="name">
          <a-input v-model="formLogin.name" placeholder="Please input your account" />
        </a-form-item>
        <a-form-item class="form-item" name="password">
          <a-input-password v-model="formLogin.password" placeholder="Please input your password" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="loginHandle()">Login</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { setToken } from '/@/utils/cookie-handle'
export default defineComponent({
  setup() {
    const formLogin = reactive({
      name: 'forest',
      password: '123456'
    })
    const router = useRouter()
    const loginHandle = () => {
      // 步骤一 设置token
      setToken('userInfo', new Date())
      // 步骤二 登录成功后跳转页面
      router.push({
        path: '/homePage'
      })
    }
    return {
      formLogin,
      loginHandle
    }
  }
})
</script>

<style lang="less" scoped>
.login-content {
  height: 100%;
  width: 100%;
  position: relative;
  background: url('../../assets/img/mountains.jpg') no-repeat;
  background-size: cover;
  .login-box {
    width: 300px;
    height: 200px;
    position: absolute;
    right: 30%;
    top: 40%;
  }
  :deep(.ant-input) {
    background-color: rgb(255 255 255 / 50%);
    // border-top: none;
    // border-left: none;
    // border-right: none;
  }
  :deep(.ant-input-affix-wrapper) {
    background-color: rgb(255 255 255 / 50%);
  }
  :deep(.ant-input-affix-wrapper .ant-input) {
    background-color: rgb(255 255 255 / 0%) !important;
  }
}
</style>
