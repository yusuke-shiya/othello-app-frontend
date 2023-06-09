import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfflineBattleView from '../views/OfflineBattleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offline-battle',
      name: 'offline-battle',
      component: OfflineBattleView
    }
  ]
})

export default router
