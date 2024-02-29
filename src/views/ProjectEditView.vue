<script setup lang="ts">
import ProjectEditVue from '@/components/ProjectEdit.vue';

</script>
<template>
    <component :is="$route.meta.layout  || 'section' " >
        <template #content>
            <ProjectEditVue />
        </template>
    </component>
</template>