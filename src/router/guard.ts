import router from './index'
import { getToken } from '/@/utils/cookie-handle'

router.beforeEach(async (to, from, next) => {
  // console.log(routes)
  const meta = to.meta
  const haveToken = getToken('userInfo')
  if (haveToken || !meta.requiresAuth) {
    next()
  } else {
    router.push({
      path: '/login'
    })
  }
})