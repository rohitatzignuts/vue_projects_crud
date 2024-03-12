<script setup lang="ts">
import CartDialog from '../../components/market-place/CartDialog.vue'
import useCart from '../../composables/useCart';
import MarketPlaceLayout from '@/layouts/MarketPlace.vue'

const { itemsInCart,handleRemovedItems } = useCart()
</script>

<template>
    <MarketPlaceLayout>
        <template #content>
            <CartDialog :cartItems="itemsInCart" @handleRemovedItems="handleRemovedItems" />
        </template>
    </MarketPlaceLayout>
</template>