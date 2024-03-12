<script setup lang="ts">
import SubCategoryGrid from '../../components/market-place/SubCategoryGrid.vue'
import MarketPlaceLayout from '@/layouts/MarketPlace.vue'
</script>
<template>
    <MarketPlaceLayout>
        <template #content>
            <SubCategoryGrid />
        </template>
    </MarketPlaceLayout>
</template>
