<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
    <v-container>
    <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" 
        prominent>
        <Navbar />
    </v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <slot name="content" />
    </v-main>
    </v-layout>
    </v-container>
</template>

<style scoped>
a{
    text-decoration : none;
    color : black
}
</style>