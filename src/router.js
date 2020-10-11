import {createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home')
  },
  {
    path: '/user',
    component: () => import('@/views/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    path: '/activity',
    component: () => import('@/views/activity'),
    meta: {
      title: '会员中心'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
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
