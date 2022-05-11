import router from './index'
import { getToken } from '/@/utils/cookie-handle'

router.beforeEach(async (to, from) => {
  const haveToken = getToken()
  // return await console.log(to, 'beforeEach')
})