<script setup lang="ts">
import SubCategoryCard from './SubCategoryCard.vue'
import useCart from '@/composables/useCart'
const { handleCartProduct, filteredProducts } = useCart()
</script>

<template>
    <VContainer class="bg-surface-variant">
        <VRow>
            <VCol cols="12" class="ms-2 pb-0">
                <RouterLink to="/market-place">
                    <VBtn variant="outlined" color="#fff">
                        <VIcon>mdi-arrow-left-thin</VIcon>Back
                    </VBtn>
                </RouterLink>
            </VCol>
            <VCol>
                <VRow no-gutters>
                    <VCol v-for="product in filteredProducts" :key="product.id">
                        <v-sheet class="pa-2 ma-2">
                            <VCol v-for="subCategory in product.subCategory" :key="subCategory.id" cols="12">
                                <SubCategoryCard :sub-product="subCategory" @handleCart="handleCartProduct" />
                            </VCol>
                        </v-sheet>
                    </VCol>
                </VRow>
            </VCol>
        </VRow>
    </VContainer>
</template>
