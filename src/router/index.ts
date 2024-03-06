import { createRouter, createWebHistory } from 'vue-router'
import RegisterUserVue from '@/components/RegisterUser.vue'
import LoginUserVue from '@/components/LoginUser.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ErrorViewVue from '@/views/ErrorView.vue'
import UserProfileVue from '@/views/UserProfile.vue'
import MainCategory from '@/views/market-place/MainCategory.vue'
import SubCategory from '@/views/market-place/SubCategory.vue'

const routes = [
  { 
    path: '/', 
    meta: { layout: 'Default', requiresAuth: true }, 
    component: HomeViewVue,
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
    component: MainCategory
  },
  { 
    path: '/market-place/category/:id', 
    component: SubCategory
  },
  { 
    path: '/:pathMatch(.*)*' ,
    meta: { layout: 'blank' },  
    name: '404', 
    component: ErrorViewVue
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
      next('/login'); 
  } else {
      next(); 
  }
});

export default router
