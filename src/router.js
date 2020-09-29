import {createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/user',
    component: () => import('./views/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: '/login',
    component: () => import('./views/login'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export {
  router
}
