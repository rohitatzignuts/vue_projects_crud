<script setup lang="ts">
import ProjectListVue from '@/components/ProjectList.vue';

</script>
<template>
    <component :is="$route.meta.layout  || 'section' " >
        <template #content>
            <ProjectListVue />
        </template>
    </component>
</template>