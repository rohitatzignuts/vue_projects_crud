<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import type Project from '@/project';

const loading = ref(false);
const dialog = ref(false);
const projectId = ref<Number>()
const project = ref<Project>({
    projectName: '',
    projectDescription: ''
});

defineProps<{
    value: string
}>()

const getProject = () => {
    if (projectId.value) {
        axios.get(`/api/projects/${projectId.value}`)
        .then(response => {
            let projectData = response.data;
            project.value.projectName = projectData.name;
            project.value.projectDescription = projectData.description;
            return response;
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occurred!',
                showConfirmButton: false,
                timer: 1500
            });
            return error;
        });
    }
}

const saveProject = () => {
    if (!project.value.projectName || !project.value.projectDescription) {
        Swal.fire({
            icon: 'error',
            title: 'Please fill in all required fields!',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }
    loading.value = true;
    const method = projectId.value ? 'patch' : 'post';
    const url = projectId.value ? `/api/projects/${projectId.value}` : '/api/projects';
    axios[method](url, {
        name: project.value.projectName,
        description: project.value.projectDescription
    })
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Project saved successfully!',
            showConfirmButton: false,
            timer: 1500
        });
        project.value.projectName = '';
        project.value.projectDescription = '';
        dialog.value = false;
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'An Error Occurred!',
            showConfirmButton: false,
            timer: 1500
        });
        return error;
    })
    .finally(() => {
        loading.value = false;
    });
};

onMounted(() => {
    getProject();
})
</script>

<template>
<div class="text-center d-inline">
    <v-dialog v-model="dialog" max-width="600">
        <template #activator="{ props: activatorProps }">
            <v-btn :text="value" variant="outlined" v-bind="activatorProps"></v-btn>
        </template>
        <v-card prepend-icon="mdi-pencil" :title="`${projectId ? 'Edit' : 'Create'} Project`">
            <v-card-text>
                <v-row dense>
                    <v-col cols="12">
                        <v-text-field v-model="project.projectName" label="Project Name*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="project.projectDescription" label="Project Description*" required></v-text-field>
                    </v-col>
                </v-row>
                <small class="text-caption text-medium-emphasis">*indicates required field</small>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
                <v-btn color="primary" text="Save" variant="tonal" @click="saveProject"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>
