<script setup lang="ts">
import { ref } from 'vue'
import type { MainCategory } from '../../Product.ts'
defineProps<{
    category: MainCategory
}>()

const show = ref<boolean>(false)
</script>

<template>
    <VCard class="mxAuto" w100>
        <VImg height="250px" :src="category.imageUrl" cover></VImg>
        <VCardTitle>
            {{ category.title }}
        </VCardTitle>
        <VCardSubtitle>
            {{ category.category }}
        </VCardSubtitle>
        <VCardActions>
            <RouterLink :to="`/market-place/category/${category.id}`">
                <VBtn color="orange-lighten-2" variant="text"> Explore </VBtn>
            </RouterLink>
            <v-spacer></v-spacer>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </VCardActions>
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <VCardText>
                    {{ category.description }}
                </VCardText>
            </div>
        </v-expand-transition>
    </VCard>
</template>
