<script setup lang="ts">
import MainCategoryCard from './MainCategoryCard.vue'
import { products } from '../../Product.ts';

const mainProducts = products
</script>

<template>
<v-layout class="rounded rounded-md my-10">
    <v-app-bar title="Market Place" class="px-11">
        <RouterLink to="/">
            <VBtn variant="outlined" class="me-3" color="info">Home</VBtn>
        </RouterLink>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <v-container class="bg-surface-variant">
        <v-row no-gutters>
        <v-col v-for="mainCategory in mainProducts" :key="mainCategory.id">
            <v-sheet class="pa-2 ma-2">
                <MainCategoryCard :category="mainCategory"/>
            </v-sheet>
        </v-col>
        </v-row>
    </v-container>
    </v-main>
</v-layout>
</template>
