import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../state/stores/index'

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
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: () => import('../views/v-admin.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/v-login.vue')
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.name === 'administracion'){
    const autenticado = store.getters['users/logueado'];
    if (autenticado){
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router
