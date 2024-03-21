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
    //TODO: Comprobar si el usuario está logueado desde el getter ya hecho en la store
    //next('/login');
    next();
  } else {
    next();
  }
});

export default router
