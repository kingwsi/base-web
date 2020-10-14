export const routes = [
  {
    name: '主页',
    path: '/home',
    component: () => import('@/views/home')
  },
  {
    name: '会员中心',
    path: '/user',
    component: () => import('@/views/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: '活动',
    path: '/activity',
    component: () => import('@/views/activity'),
    meta: {
      title: '活动'
    }
  },
  {
    name: '登录',
    path: '/login',
    component: () => import('@/views/login'),
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404')
  }
]