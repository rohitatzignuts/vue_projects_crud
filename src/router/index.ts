import { createRouter, createWebHistory } from 'vue-router'
import ProjectCreateVue from '@/components/ProjectCreate.vue'
import ProjectEditVue from '@/components/ProjectEdit.vue'
import ProjectShowVue from '@/components/ProjectShow.vue'
import NotFoundVue from '@/components/NotFound.vue'
import DefaultVue from '@/layouts/Default.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      meta : {layout : 'default'},
      component: DefaultVue
    },
    { 
      path: '/create', 
      meta : {layout : 'default'},
      component: ProjectCreateVue 
    },
    { 
      path: '/edit/:id', 
      meta : {layout : 'default'},
      component: ProjectEditVue 
    },
    { 
      path: '/show/:id', 
      meta : {layout : 'default'},
      component: ProjectShowVue 
    },
    { 
      path: '/:pathMatch(.*)*' ,
      meta : { layout : 'blank' },  
      name: '404', 
      component: NotFoundVue
    },
  ]
})

export default router
  