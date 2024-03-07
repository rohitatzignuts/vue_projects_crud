<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import CartDialog from './CartDialog.vue'
import SubCategoryCard from './SubCategoryCard.vue'
import { products, type SubCategory } from '../../Product.ts';
import { useRouter } from 'vue-router';

const showCartDialog = ref(false)
const router = useRouter()
const categoryId = ref(router.currentRoute.value.params.id)
const itemsInCart = ref<SubCategory[]>(JSON.parse(localStorage.getItem('cartItems') || '[]'));
const storedDate = ref<string>(JSON.parse(localStorage.getItem('selectedDate') || ''));
console.log(storedDate.value)

const handleCart = () => {
    showCartDialog.value = true 
}

//add items to the cart
const handleCartProduct = (cartProduct: SubCategory) => {
    const existingItemIndex = itemsInCart.value.findIndex(item => item.id === cartProduct.id);
    if (existingItemIndex === -1) {
        itemsInCart.value.push({ ...cartProduct, quantity: 1, date: storedDate.value });
    } else {
        itemsInCart.value[existingItemIndex].quantity++;
    }
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart.value));
}


const filteredItemsInCart = computed(() => {
    return itemsInCart.value.filter(item => {
        return item.date == storedDate.value;
    });
});


//filter removed items
const handleRemovedItems = (id : string) => {
    itemsInCart.value = itemsInCart.value.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart.value))
}

const filteredProducts = ref(products.value.filter(product => product.id === categoryId.value))

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
        <VRow>
            <VCol cols="12" class="ms-2">
                <RouterLink to="/market-place">
                    <VBtn variant="outlined" color="#fff">Go Back</VBtn>
                </RouterLink>
            </VCol>
            <VCol>
                    <v-row no-gutters>
                        <v-col v-for="product in filteredProducts" :key="product.id">
                            <v-sheet class="pa-2 ma-2">
                                <v-col v-for="subCategory in product.subCategory" :key="subCategory.id" cols="12">
                                    <SubCategoryCard :sub-product="subCategory" @handle-cart="handleCartProduct" />
                                </v-col>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </VCol>
            </VRow>
        </v-container>
    </v-main>
</v-layout>
<CartDialog :isVisible="showCartDialog" @handleCloseDialog="showCartDialog = false" :cart-items="filteredItemsInCart" @handleRemovedItems="handleRemovedItems" />
</template>
