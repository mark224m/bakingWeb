import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import menuView from '../views/MenuView.vue'
import cartView from '../views/cartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/menu',
    name: 'menu',
    component: menuView
  },
  {
    path:'/cart',
    name: 'cart',
    component: cartView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
