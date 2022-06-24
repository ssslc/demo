import { defineStore } from "pinia";

export const useStore = defineStore('main', {
  // other option
  state: () => {
    return {
      routes: ['1']
    }
  },
  actions: {
    getRoutes(params) {
      this.routes = params
    }
  }
})
