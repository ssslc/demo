import { defineStore } from "pinia";
import Layout from '/@/layout/index.vue'

export const useStore = defineStore('main', {
  // other option
  state: () => {
    return {
      routes: []
    }
  },
  actions: {
    getRoutes(params) {
      this.routes = params
    }
  }
})