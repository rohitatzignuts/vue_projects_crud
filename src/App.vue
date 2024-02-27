<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Error from './layouts/Error.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <!-- <DefaultLayout v-if="route.meta.layout === 'default'" /> -->
    <Error v-if="route.meta.layout === 'blank'" />
  <RouterView />
</template>

