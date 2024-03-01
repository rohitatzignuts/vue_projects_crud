<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '@/router'
import ProjectForm from './ProjectForm.vue'
import { watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const creatText = t("Create")
const token = localStorage.getItem('token')
const handleLogout = () => {
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes !'
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post('api/logout', null, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Logged out successfully!',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/login')
          localStorage.removeItem('token')
          return response
        })
        .catch((error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'An Error Occurred!',
            showConfirmButton: false,
            timer: 1500
          })
          return error
        })
    }
  })
}
watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
});
</script>

<template>
  <v-row justify="space-between" align="center" class="pa-14 ma-2">
    <v-col>
      <div>
        <router-link to="/"><h1>{{t("Project Master")}}</h1></router-link>
      </div>
    </v-col>
    <v-col>
      <div id="links">
        <router-link to="/"><v-btn variant="outlined">{{t("Home")}}</v-btn></router-link>
        <ProjectForm :value=creatText />
        <v-btn variant="outlined" @click="handleLogout">{{t("Logout")}}</v-btn>
        <div>
          <select v-model="locale">
            <option>en-US</option>
            <option>sp-SP</option>
          </select>
          </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
#links {
  display: flex;
  gap: 0.5rem;
}
select{
  color: white;
  border: 1px solid white;
  padding: 0.25rem .75rem;
  border-radius: 5px;
}
</style>
