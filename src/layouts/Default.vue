<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
    <VContainer>
        <VLayout class="rounded rounded-md">
            <v-app-bar color="surface-variant" prominent>
                <Navbar />
            </v-app-bar>
            <VMain class="d-flex align-center justify-center" style="min-height: 300px;">
                <slot name="content" />
            </VMain>
        </VLayout>
    </VContainer>
</template>

<style scoped>
a{
    text-decoration : none;
    color : black
}
</style>