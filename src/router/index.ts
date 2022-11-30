import { createRouter, createWebHistory } from 'vue-router'
import BlogLayout from "@/views/Layout.vue";
import BlogRoutes from "./blog"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blog',
      component: BlogLayout,
      children: BlogRoutes
    },
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
