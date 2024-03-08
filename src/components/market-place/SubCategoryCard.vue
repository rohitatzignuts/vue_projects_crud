<script lang="ts" setup>
import { type SubCategory } from '@/Product';
import { ref } from 'vue'

const show = ref<boolean>(false)
const emits = defineEmits(['handleCart'])

defineProps<{
    subProduct: SubCategory
}>()

const handleAddToCart = (product: SubCategory) => {
    const cartProduct = product
    emits('handleCart', cartProduct)
}
</script>

<template>
    <VCard class="mx-auto" w100>
        <VRow>
            <VCol lg="4" sm="12" cols="12" md="4">
                <VImg height="200px" :src="subProduct.imageUrl" cover></VImg>
            </VCol>
            <VCol lg="8" sm="12" xs="12" md="8">
                <v-card-title>
                    {{ subProduct.title }}
                </v-card-title>
                <v-card-subtitle>
                    $ {{ subProduct.price }}
                </v-card-subtitle>
                <v-card-actions>
                    <v-btn color="orange-lighten-2" variant="text" @click="handleAddToCart(subProduct)">
                        <VIcon class="me-2">mdi-cart</VIcon>Add to Cart
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <v-card-text>
                            {{ subProduct.description }}
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </VCol>
        </VRow>
    </VCard>
</template>
