<script setup lang="ts">
import ProjectListVue from '@/components/ProjectList.vue';
import DefaultLayout from '@/layouts/Default.vue';
</script>

<template>
    <DefaultLayout>
        <template #content>
            <ProjectListVue />
        </template>
    </DefaultLayout>
</template>