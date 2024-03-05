<script lang="ts" setup>
import ConnectionCard from './ConnectionCard.vue'
</script>
<template>
<VContainer>
    <VRow>
        <VCol cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <ConnectionCard />
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <ConnectionCard />
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <ConnectionCard />
        </VCol>
    </VRow>
</VContainer>
</template>
