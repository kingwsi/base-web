export const routes = [
  {
    name: '主页',
    path: '/home',
    component: () => import('@/views/home'),
    meta: {
      showBar: true
    }
  },
  {
    name: '会员中心',
    path: '/user',
    component: () => import('@/views/user'),
    meta: {
      showBar: true
    }
  },
  {
    name: '活动',
    path: '/activity',
    component: () => import('@/views/activity'),
    meta: {
      showBar: true
    }
  },
  {
    name: '登录',
    path: '/login',
    component: () => import('@/views/login')
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404')
  }
]