<script lang="ts" setup>
import SelectDateDialog from '@/components/market-place/SelectDateDialog.vue'
import MainCategoryGrid from '@/components/market-place/MainCategoryGrid.vue'
import MarketPlaceLayout from '@/layouts/MarketPlace.vue'
</script>

<template>
    <SelectDateDialog />
    <MarketPlaceLayout>
        <template #content>
            <MainCategoryGrid />
        </template>
    </MarketPlaceLayout>
</template>
