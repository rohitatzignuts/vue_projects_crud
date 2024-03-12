<script setup lang="ts">
import MainCategoryCard from './MainCategoryCard.vue'
import { products } from '../../Product'
</script>

<template>
    <VContainer class="bg-surface-variant my-0">
        <VRow no-gutters>
            <VCol
                v-for="mainCategory in products"
                :key="mainCategory.id"
                sm="12"
                md="6"
                xs="12"
                lg="4"
            >
                <VSheet class="pa-2 ma-2">
                    <MainCategoryCard :category="mainCategory" />
                </VSheet>
            </VCol>
        </VRow>
    </VContainer>
</template>
