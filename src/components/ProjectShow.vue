<script setup lang="ts">
import type Project from '@/project';

const emit = defineEmits<{
    (event : 'handleCloseDialog' , payload : boolean) : void
}>()

defineProps<{
    project: Project
    isVisible: boolean
}>()
</script>

<template>
    <div class="text-center d-inline pr-2 ">
        <VDialog :model-value="isVisible" width="25%" persistent>
            <VCard max-width="400" prepend-icon="mdi-eye" :text="project.description" :title="project.name">
                <template v-slot:actions>
                    <VBtn class="ms-auto" text="Close" @click="emit('handleCloseDialog', false)"></VBtn>
                </template>
            </VCard>
        </VDialog>
    </div>
</template>
