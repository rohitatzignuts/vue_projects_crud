<script lang="ts" setup>

import type { SubCategory } from '@/Product';
import { computed, ref } from 'vue'
import CartAddress from './CartAddress.vue'

const orderDate = computed(() => {
    return JSON.parse(localStorage.getItem('selectedDate') || '')
})

const cartTotal = computed(() => {
    if (props.cartItems && props.cartItems.length) {
        return props.cartItems.reduce((total, item) => {
            if (item.quantity && item.price) {
                return total + (item.quantity * item.price);
            }
            return total;
        }, 0);
    }
    return 0;
});

const emits = defineEmits(['handleCloseDialog', 'handleRemovedItems'])
const tab = ref(null)
const props = defineProps<{
    isVisible?: boolean
    cartItems: Array<SubCategory>
}>()
const removeItem = (id: string) => {
    emits('handleRemovedItems', id)
}

</script>

<template>
<div class="text-center pa-4">
    <VDialog :model-value="props.isVisible" transition="dialog-bottom-transition" fullscreen>
        <VCard>
            <VToolbar>
                <VBtn icon="mdi-close" @click="emits('handleCloseDialog',false)"></VBtn>
                <VToolbar-title >
                    Cart
                </VToolbar-title>
                <v-spacer></v-spacer>
            </VToolbar>
            <VCard>
                <VTabs v-model="tab" align-tabs="center" color="info" bg-color="#FFFFFF00" stacked>
                    <VTab value="cart">
                        <VIcon class="my-2">mdi-cart</VIcon>
                        Cart
                    </VTab>

                    <VTab value="address">
                        <VIcon class="my-2">mdi-office-building-marker</VIcon>
                        Address
                    </VTab>

                    <VTab value="payment">
                        <VIcon class="my-2">mdi-account-credit-card</VIcon>
                        Payment
                    </VTab>
                </VTabs>

                <v-window v-model="tab">
                    <v-window-item value="cart">
                        <VRow>
                            <!-- cart  -->
                            <VCol cols="7">
                                <VCard class="ma-4">
                                    <VList>
                                        <v-list-subheader class="mb-4">
                                            My Shopping Bag ({{ props.cartItems ? props.cartItems.length : 0 }} Items)
                                        </v-list-subheader>
                                        <v-list-item v-for="(item, i) in props.cartItems" :key="i" :value="item" color="primary" rounded="shaped">
                                            <VRow>
                                                <VCol cols="2">
                                                    
                                                    <v-img :src="item.imageUrl" contain min-height="100%" />
                                                </VCol>
                                                <VCol cols="10">
                                                    <div class="d-flex justify-space-between">
                                                        <strong>{{ item.title }}</strong>
                                                        <VBtn variant="text" class="rounded-pill" @click="removeItem(item.id)">
                                                            <VIcon icon="mdi-close" />
                                                        </VBtn>
                                                    </div>
                                                    <div>
                                                        <p class="my-2">$ {{ item.price }}</p>
                                                        <input type="number" min="1" value="1" class="border rounded-lg pa-1" v-model="item.quantity">
                                                    </div>
                                                </VCol>
                                            </VRow>
                                        </v-list-item>
                                    </VList>
                                </VCard>
                            </VCol>
                            <!-- place order  -->
                            <VCol cols="5">
                                <VCard class="me-4 my-4" outlined>
                                    <VCardText>
                                        <h3 class="text-base font-weight-medium mb-3 ms-2">Offer</h3>
                                        <div class="d-flex align-center justify-space-between">
                                            <input type="text" placeholder="Enter Promo Code" class="pa-2" width="100%" />
                                            <VBtn color="info">Apply</VBtn>
                                        </div>
                                        <VDivider class="my-4"></VDivider>
                                    </VCardText>
                                    <VDivider></VDivider>
                                    <VCardText>
                                        <h3 class="text-base font-weight-medium mb-3">Price Details</h3>
                                        <div class="text-high-emphasis" v-if="props.cartItems && props.cartItems.length">
                                            <div class="d-flex justify-space-between mb-2">
                                                <span>Bag Total</span>
                                                <span>{{ cartTotal }}</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span>Order Date</span>
                                                <span>{{ orderDate }}</span>
                                            </div>
                                            <div class="d-flex justify-space-between">
                                                <span>Delivery Charges</span>
                                                <div>
                                                    <span class="text-decoration-line-through text-disabled me-2">$5.00</span>
                                                    <VChip class="text-success" small>Free</VChip>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else class="text-center my-6">
                                            <strong>Your Cart Is Empty !!</strong>
                                        </div>
                                    </VCardText>
                                    <VDivider></VDivider>
                                    <VCardText class="d-flex justify-space-between py-4">
                                        <h3 class="text-base font-weight-medium">Total</h3>
                                        <h3 class="text-base font-weight-medium">$ {{ cartTotal }}</h3>
                                    </VCardText>
                                </VCard>
                            </VCol>
                        </VRow>

                    </v-window-item>
                    <v-window-item value="address">
                        <VCard>
                            <VCardText>
                                <CartAddress />
                            </VCardText>
                        </VCard>
                    </v-window-item>
                    <v-window-item value="payment">
                        <VCard>
                            <VCardText>Payment</VCardText>
                        </VCard>
                    </v-window-item>
                </v-window>
            </VCard>
        </VCard>
    </VDialog>
</div>
</template>
