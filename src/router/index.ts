import { createRouter, createWebHistory } from 'vue-router'
import DefaultVue from '@/layouts/Default.vue'
import RegisterUserVue from '@/components/RegisterUser.vue'
import LoginUserVue from '@/components/LoginUser.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ProjectEditViewVue from '@/views/ProjectEditView.vue'
import ProjectCreateViewVue from '@/views/ProjectCreateView.vue'
import ErrorViewVue from '@/views/ErrorView.vue'
import ErrorVue from '@/layouts/Error.vue'
import ProjectViewVue from '@/views/ProjectView.vue'
const routes = [
  { 
    path: '/', 
    meta: { layout: DefaultVue, requiresAuth: true }, 
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
    path: '/create', 
    meta: { layout: DefaultVue, requiresAuth: true }, 
    component: ProjectCreateViewVue 
  },
  { 
    path: '/edit/:id', 
    meta: { layout: DefaultVue, requiresAuth: true }, 
    component: ProjectEditViewVue 
  },
  { 
    path: '/show/:id', 
    meta: { layout: DefaultVue, requiresAuth: true }, 
    component: ProjectViewVue 
  },
  { 
    path: '/:pathMatch(.*)*' ,
    meta: { layout: ErrorVue },  
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
