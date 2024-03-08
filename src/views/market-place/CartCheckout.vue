<script setup lang="ts">
import CartDialog from '../../components/market-place/CartDialog.vue'
import useCart from '../../composables/useCart';

const { filteredItemsInCart,handleRemovedItems } = useCart()
</script>

<template>
    <CartDialog :cartItems="filteredItemsInCart" @handleRemovedItems="handleRemovedItems" />
</template>