import { createRouter, createWebHistory } from 'vue-router'
import LeagueTable from '@/components/LeagueTable.vue'
import StatsPage from '@/components/StatsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Stats Page',
      component: StatsPage
    },
    {
      path: '/league-table',
      name: 'League Table',
      component: LeagueTable
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
