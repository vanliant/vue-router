import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/project_schedule_kanban/page/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */'../views/Home.vue')
  },
  {
    path: '/project_schedule_kanban/page/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/project_schedule_kanban/page/other',
    name: 'Other',
    component: () => import(/* webpackChunkName: "other" */'../views/Other.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
