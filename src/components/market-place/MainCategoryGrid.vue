<script setup lang="ts">
import MainCategoryCard from './MainCategoryCard.vue'
import CartDialog from './CartDialog.vue'
import { products } from '../../Product';
import useCart from '@/composables/useCart';

const { handleCart,filteredItemsInCart,handleRemovedItems,showCartDialog } = useCart()
</script>

<template>
<VLayout class="rounded rounded-md my-10">
    <v-app-bar title="Market Place" class="px-11">
        <RouterLink to="/">
            <VBtn variant="outlined" class="me-3" color="info">Home</VBtn>
        </RouterLink>
        <VBtn variant="outlined" class="me-6" @click="handleCart">
            <span>Cart</span>
            <VIcon class="ms-2">mdi-cart</VIcon>
        </VBtn>
    </v-app-bar>
    <VMain class="d-flex align-center justify-center" style="min-height: 300px;">
        <v-container class="bg-surface-variant">
        <VRow no-gutters>
        <VCol v-for="mainCategory in products" :key="mainCategory.id">
            <VSheet class="pa-2 ma-2">
                <MainCategoryCard :category="mainCategory"/>
            </VSheet>
        </VCol>
        </VRow>
    </v-container>
    </VMain>
</VLayout>
<CartDialog :isVisible="showCartDialog" @handleCloseDialog="showCartDialog = false" :cart-items="filteredItemsInCart" @handleRemovedItems="handleRemovedItems" />
</template>
