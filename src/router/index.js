import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/v-main.vue')
    },
    {
      path: '/reserva',
      name: 'reserva',
      component: () => import('../views/v-reserva.vue')
    }
  ]
})

export default router
