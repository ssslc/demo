import router from './index'
import { getToken } from '/@/utils/cookie-handle'

router.beforeEach(async (to, from, next) => {
  const meta = to.meta
  const haveToken = getToken('userInfo')
  if (haveToken || !meta.auth) {
    next()
  } else {
    router.push({
      path: '/login'
    })
  }
})