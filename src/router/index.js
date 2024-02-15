import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'app',
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/NotFound.vue'),
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
