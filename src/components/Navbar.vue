<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '@/router'
import { watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
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
  <VRow align="center" class="pa-14 ma-2 justify-space-between">
    <VCol cols="6"  sm="2">
      <div>
        <router-link to="/"><h3>{{t("Project Master")}}</h3></router-link>
      </div>
    </VCol>
    <VCol cols="6"  sm="10">
      <div id="links" class="d-flex ga-2 align-center justify-end">
        <router-link to="/"><v-btn variant="outlined" color="info">{{t("Home")}}</v-btn></router-link>
        <router-link to="/user-profile"><v-btn variant="outlined">{{t("Profile")}}</v-btn></router-link>
        <v-btn variant="outlined" @click="handleLogout">{{t("Logout")}}</v-btn>
        <VIcon class="mx-2">mdi-translate</VIcon>
        <div>
          <select v-model="locale">
            <option>en-US</option>
            <option>sp-SP</option>
          </select>
          </div>
      </div>
    </VCol>
  </VRow>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
select{
  color: white;
  border: 1px solid white;
  padding: 0.25rem .75rem;
  border-radius: 5px;
}
</style>
