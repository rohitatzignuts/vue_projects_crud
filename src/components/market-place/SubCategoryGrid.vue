<script setup lang="ts">
import { ref } from 'vue';
import CartDialog from './CartDialog.vue'
import SubCategoryCard from './SubCategoryCard.vue'
import { products } from '../../Product.ts';
import { useRouter } from 'vue-router';

const showCartDialog = ref(false)
const router = useRouter()
const categoryId = ref(router.currentRoute.value.params.id)

const handleCart = () => {
    showCartDialog.value = true
}

const filteredProducts = ref(products.value.filter(product => product.category === categoryId.value))
</script>

<template>
<v-layout class="rounded rounded-md my-10">
    <v-app-bar title="Market Place">
        <VBtn variant="outlined" class="me-6" @click="handleCart">
            <span>Cart</span>
            <VIcon class="ms-2">mdi-cart</VIcon>
        </VBtn>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col v-for="product in filteredProducts" :key="product.id">
                    <v-sheet class="pa-2 ma-2">
                        <v-col v-for="subCategory in product.subCategory" :key="subCategory.id" cols="12">
                            <SubCategoryCard :sub-product="subCategory" />
                        </v-col>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-layout>
<CartDialog :isVisible="showCartDialog" @handleCloseDialog="showCartDialog = false" />
</template>
