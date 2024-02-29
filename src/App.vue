<script setup lang="ts">
import { RouterView } from 'vue-router'
import  DefaultVue from './layouts/Default.vue';
import ErrorView from './views/ErrorView.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <DefaultVue v-if="route.meta.layout === 'default'" />
    <ErrorView v-if="route.meta.layout === 'blank'" />
    <RouterView />
</template>

