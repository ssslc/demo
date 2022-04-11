import router from './index'

router.beforeEach(async (to, from) => {
  return await console.log(to)
})