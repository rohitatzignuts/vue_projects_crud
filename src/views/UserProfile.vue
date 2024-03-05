<script setup lang="ts">
import UserInfo from '@/components/user/UserInfo.vue';
import Tabs from '@/components/user/Tabs.vue';
</script>

<template>
    <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant">
        <RouterLink to="/"><VBtn variant="outlined" color="info" class="ms-8">Home</VBtn></RouterLink>
    </v-app-bar>
    <v-main class="ma-6">
    <UserInfo />
    <Tabs />
    </v-main>
</v-layout>
</template>

<style scoped>
a{
    text-decoration: none;
    color: #fff;
}
</style>