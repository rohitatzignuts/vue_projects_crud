<script setup lang="ts">
import UserInfo from '@/components/user/UserInfo.vue';
import Tabs from '@/components/user/Tabs.vue';
</script>

<template>
    <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="Application bar"></v-app-bar>
    <v-main class="ma-6">
    <UserInfo />
    <Tabs />
    </v-main>
</v-layout>
</template>
