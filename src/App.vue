<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'App',
  mounted() {
    console.log(this.$route, 'this.')
  },
  data() {
    return {
      app: 'test'
    }
  },
  setup() {
    const router = useRouter()
    console.log(router, 'router')
  }
})
</script>

<template>
  <!-- <HelloWorld msg="Hello World" /> -->
  <!-- <p>{{ app }}</p> -->
  <!-- <a-button type="primary"> Primaryww </a-button> -->
  <!-- <router-link to="/about">Go to About</router-link> -->
  <router-view></router-view>
</template>
