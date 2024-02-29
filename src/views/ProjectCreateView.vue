<script setup lang="ts">
import ProjectCreateVue from '@/components/ProjectCreate.vue';

</script>
<template>
    <component :is="$route.meta.layout  || 'section' " >
        <template #content>
            <ProjectCreateVue />
        </template>
    </component>
</template>