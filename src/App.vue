<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/Default.vue';
import MarketPlaceLayout from './layouts/MarketPlace.vue';
import { useRoute } from 'vue-router';
const route = useRoute()

</script>

<template>
    <DefaultLayout v-if="route.meta.layout === 'default'" />
    <MarketPlaceLayout v-if="route.meta.layout === 'market'" />
    <RouterView />
</template>
