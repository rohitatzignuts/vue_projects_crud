<script setup lang="ts">
import CartDialog from '../../components/market-place/CartDialog.vue'
import useCart from '../../composables/useCart';

const { itemsInCart,handleRemovedItems } = useCart()
</script>

<template>
    <CartDialog :cartItems="itemsInCart" @handleRemovedItems="handleRemovedItems" />
</template>