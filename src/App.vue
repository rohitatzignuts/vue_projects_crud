<script setup lang="ts">
import { RouterView } from 'vue-router'
import  DefaultVue from './layouts/Default.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <DefaultVue v-if="route.meta.layout === 'default'" />
    <ErrorVue v-if="route.meta.layout === 'blank'" />
    <RouterView />
</template>

