import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DashBoard from '../views/DashBoard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
    
      component: () => import('../views/Login.vue')
    },

    {
      path: '/DashBoard',
      name: 'DashBoard',
     
      component: () => import('../views/DashBoard.vue')
    }
  ]
})

export default router
