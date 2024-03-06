<script setup lang="ts">

import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/Default.vue';
import { useRoute } from 'vue-router';
const route = useRoute()

</script>

<template>
    <DefaultLayout v-if="route.meta.layout === 'default'" />
    <RouterView />
</template>
