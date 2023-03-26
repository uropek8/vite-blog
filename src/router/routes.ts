import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/posts',
  },
  {
    path: '/posts',
    alias: '/posts',
    name: 'posts',
    component: () => import('@/components/pages/p-home'),
  },
  {
    path: '/posts/:id',
    name: 'post-details',
    component: () => import('@/components/pages/p-post-details'),
  },
  {
    path: '/posts/edit/:id',
    name: 'post-edit',
    component: () => import('@/components/pages/p-post-edit'),
  },
]

export default routes
