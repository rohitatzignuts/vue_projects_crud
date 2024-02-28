import { createRouter, createWebHistory } from 'vue-router'
import ProjectCreateVue from '@/components/ProjectCreate.vue'
import ProjectEditVue from '@/components/ProjectEdit.vue'
import ProjectShowVue from '@/components/ProjectShow.vue'
import NotFoundVue from '@/components/NotFound.vue'
import DefaultVue from '@/layouts/Default.vue'
import RegisterUserVue from '@/components/RegisterUser.vue'
import LoginUserVue from '@/components/LoginUser.vue'
import { useLogin } from '../composables/useLogin.ts'

const routes = [
  { 
    path: '/', 
    meta: { layout: 'default', requiresAuth: true }, // Add requiresAuth: true for authenticated routes
    component: DefaultVue,
  },
  { 
    path: '/register', 
    component: RegisterUserVue
  },
  { 
    path: '/login', 
    component: LoginUserVue
  },
  { 
    path: '/create', 
    meta: { layout: 'default', requiresAuth: true }, // Add requiresAuth: true for authenticated routes
    component: ProjectCreateVue 
  },
  { 
    path: '/edit/:id', 
    meta: { layout: 'default', requiresAuth: true }, // Add requiresAuth: true for authenticated routes
    component: ProjectEditVue 
  },
  { 
    path: '/show/:id', 
    meta: { layout: 'default', requiresAuth: true }, // Add requiresAuth: true for authenticated routes
    component: ProjectShowVue 
  },
  { 
    path: '/:pathMatch(.*)*' ,
    meta: { layout: 'blank' },  
    name: '404', 
    component: NotFoundVue
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    const { token } = useLogin();
    if (to.meta.requiresAuth && !token.value) {
        next('/register');
    } else {
        next();
    }
});

export default router
