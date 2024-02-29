<script setup lang="ts">
import type Project from '@/project';
import {ref} from 'vue'

const dialog = ref(false)
defineProps<{
    project : Project
}>()
</script>

<template>
<div class="text-center d-inline pr-2">
    <v-btn @click="dialog = true" color="primary">
    View
    </v-btn>

    <v-dialog
    v-model="dialog"
    width="auto"
    >
    <v-card
        max-width="400"
        prepend-icon="mdi-eye"
        :text="project.description"
        :title="project.name"
    >
        <template v-slot:actions>
        <v-btn
            class="ms-auto"
            text="Close"
            @click="dialog = false"
        ></v-btn>
        </template>
    </v-card>
    </v-dialog>
</div>
</template>

