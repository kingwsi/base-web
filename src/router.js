import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/config/routerConfig'
import { store } from '@/store'
import storage from 'store'
import NProgress from 'nprogress' // 进度条
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/register']
const loginRoutePath = '/login'
const defaultRoutePath = '/home'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (storage.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath || to.path === '/') {
      next({ path: defaultRoutePath })
    } else {
      // 检查用户信息
      if (!store.getters.userInfo.username) {
        store.dispatch('GetInfo')
      }
      next()
    }
    NProgress.done()
  } else {
    if (whiteList.includes(to.path)) {
      // 免登录白名单
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

export {
  router
}
