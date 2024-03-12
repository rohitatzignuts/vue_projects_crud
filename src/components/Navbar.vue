<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { useLogin } from '@/composables/useLogin';

const { t, locale } = useI18n();
const {handleLogout} = useLogin()

watch(locale, (newlocale) => {
  localStorage.setItem("locale", newlocale);
});
</script>

<template>
  <VRow align="center" class="pa-14 ma-2 justify-space-between">
    <VCol cols="6" sm="2">
      <div>
        <router-link to="/">
          <h3>{{ t("Project Master") }}</h3>
        </router-link>
      </div>
    </VCol>
    <VCol cols="6" sm="10">
      <div id="links" class="d-flex ga-2 align-center justify-end">
        <router-link to="/">
          <VBtn variant="outlined" color="#fff">{{ t("Home") }}</VBtn>
        </router-link>
        <router-link to="/user-profile">
          <VBtn variant="outlined">{{ t("Profile") }}</VBtn>
        </router-link>
        <div>
          <select v-model="locale">
            <option>en-US</option>
            <option>sp-SP</option>
          </select>
        </div>
        <VTooltip location="bottom">
          <template v-slot:activator="{ props }">
            <VBtn variant="outlined" @click="handleLogout" color="#fff" icon="mdi-logout" size="small" v-bind="props" />
          </template>
          <span>Logout</span>
        </VTooltip>
      </div>
    </VCol>
  </VRow>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
select {
    color: white;
    border: 1px solid white;
    padding: 0.25rem .75rem;
    border-radius: 5px;
}
</style>
