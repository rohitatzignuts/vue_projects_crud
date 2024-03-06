<script lang="ts" setup>
import type { SubCategory } from '@/Product';
import { ref } from 'vue';

const show = ref(false)
defineProps<{
    subProduct : SubCategory
}>()
</script>

<template>
<VCard class="mx-auto" w100>
    <VRow>
        <VCol cols="4">
            <VImg height="200px" :src="subProduct.imageUrl" cover></VImg>
        </VCol>

        <VCol cols="8">
            <v-card-title>
                {{subProduct.title}}
            </v-card-title>

            <v-card-subtitle>
                {{subProduct.price}}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                    Add to Cart
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        {{subProduct.description}}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </VCol>
    </VRow>
</VCard>
</template>
