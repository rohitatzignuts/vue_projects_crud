import { createRouter, createWebHistory } from 'vue-router'
import RegisterUserVue from '@/components/RegisterUser.vue'
import LoginUserVue from '@/components/LoginUser.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ErrorViewVue from '@/views/ErrorView.vue'
import UserProfileVue from '@/views/UserProfile.vue'
import MainCategory from '@/views/market-place/MainCategory.vue'
import SubCategory from '@/views/market-place/SubCategory.vue'
import CartCheckout from '@/views/market-place/CartCheckout.vue'
const routes = [
  {
    path: '/',
    meta: { layout: 'Default', requiresAuth: true },
    component: HomeViewVue
  },
  {
    path: '/login',
    component: LoginUserVue
  },
  {
    path: '/register',
    component: RegisterUserVue
  },
  {
    path: '/user-profile',
    component: UserProfileVue
  },
  {
    path: '/market-place',
    component: MainCategory,
    meta: { layout: 'market', requiresAuth: true },
  },
  {
    path: '/market-place/category/:id',
    component: SubCategory,
    meta: { layout: 'market', requiresAuth: true },
  },
  {
    path: '/market-place/cart',
    component: CartCheckout
  },
  {
    path: '/:pathMatch(.*)*',
    meta: { layout: 'blank' },
    name: '404',
    component: ErrorViewVue
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const isAuthenticated = token !== null

  if (to.path === '/login' || to.path === '/register') {
    if (isAuthenticated) {
      next('/')
    } else {
      next()
    }
  } else {
    if (isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
