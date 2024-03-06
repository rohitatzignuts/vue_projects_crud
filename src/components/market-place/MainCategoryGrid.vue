<script setup lang="ts">
import { ref } from 'vue';
import CartDialog from './CartDialog.vue'
import MainCategoryCard from './MainCategoryCard.vue'
import { products } from '../../Product.ts';

const showCartDialog = ref(false)
const handleCart = () => {
    showCartDialog.value = true
}

const product = products
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
        <v-col v-for="mainCategory in product" :key="mainCategory.id">
            <v-sheet class="pa-2 ma-2">
                <MainCategoryCard :category="mainCategory"/>
            </v-sheet>
        </v-col>
        </v-row>
    </v-container>
    </v-main>
</v-layout>
<CartDialog :isVisible="showCartDialog" @handleCloseDialog="showCartDialog = false"/>
</template>
