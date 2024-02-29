<script setup lang="ts">
import ProjectListVue from '@/components/ProjectList.vue';
import Default from '@/layouts/Default.vue';
</script>

<template>
    <Default>
        <template #content>
            <ProjectListVue />
        </template>
    </Default>
</template>