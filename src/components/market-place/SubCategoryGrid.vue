<script setup lang="ts">
import CartDialog from './CartDialog.vue'
import SubCategoryCard from './SubCategoryCard.vue'
import useCart from '@/composables/useCart';

const { handleCart,handleCartProduct,filteredItemsInCart,handleRemovedItems,filteredProducts,showCartDialog } = useCart()
</script>

<template>
<VLayout class="rounded rounded-md my-10">
    <v-app-bar title="Market Place">
        <RouterLink to="/">
            <VBtn variant="outlined" class="me-3" color="info">Home</VBtn>
        </RouterLink>
        <VBtn variant="outlined" class="me-6" @click="handleCart">
            <span>Cart</span>
            <VIcon class="ms-2">mdi-cart</VIcon>
        </VBtn>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <VContainer class="bg-surface-variant">
        <VRow>
            <VCol cols="12" class="ms-2">
                <RouterLink to="/market-place">
                    <VBtn variant="outlined" color="#fff">Go Back</VBtn>
                </RouterLink>
            </VCol>
            <VCol>
                    <VRow no-gutters>
                        <VCol v-for="product in filteredProducts" :key="product.id">
                            <v-sheet class="pa-2 ma-2">
                                <VCol v-for="subCategory in product.subCategory" :key="subCategory.id" cols="12">
                                    <SubCategoryCard :sub-product="subCategory" @handle-cart="handleCartProduct" />
                                </VCol>
                            </v-sheet>
                        </VCol>
                    </VRow>
                </VCol>
            </VRow>
        </VContainer>
    </v-main>
</VLayout>
<CartDialog :isVisible="showCartDialog" @handleCloseDialog="showCartDialog = false" :cart-items="filteredItemsInCart" @handleRemovedItems="handleRemovedItems" />
</template>
