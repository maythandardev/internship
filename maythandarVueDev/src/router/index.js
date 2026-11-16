import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/component/Home.vue'
import About from '@/component/About.vue'
import User from '@/component/setting/User.vue'
import Role from '@/component/setting/Role.vue'

//define
const routes=[
  {
    path:'/',
    component:Home
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/User',
    component:User
  },
  {
    path:'/role',
    component:Role
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
