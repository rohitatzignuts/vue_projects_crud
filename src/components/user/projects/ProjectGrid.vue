<script lang="ts" setup>
import ProjectCard from './ProjectCard.vue'
</script>
<template>
<VContainer >
    <VRow>
        <VCol cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <ProjectCard />
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <ProjectCard />
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <ProjectCard />
        </VCol>
    </VRow>
</VContainer>
</template>
