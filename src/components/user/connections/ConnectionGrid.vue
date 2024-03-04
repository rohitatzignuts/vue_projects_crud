<script lang="ts" setup>
import ConnectionCard from './ConnectionCard.vue'
</script>
<template>
<VContainer fluid>
    <VRow>
        <VCol cols="12" sm="4" v-for="i in 3" :key="i">
            <ConnectionCard />
        </VCol>
    </VRow>
    <VRow>
        <VCol col="3" sm="4" v-for="i in 3" :key="i">
            <ConnectionCard />
        </VCol>
    </VRow>
    <VRow>
        <VCol col="3" sm="4" v-for="i in 3" :key="i">
            <ConnectionCard />
        </VCol>
    </VRow>
</VContainer>
</template>
