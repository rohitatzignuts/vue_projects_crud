<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';

const route = useRoute()
const dialog = ref(false);
const loading = ref(false);

const project = ref({
    projectName: '',
    projectDescription: ''
});

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
        axios.post(`/api/projects?name=${project.value.projectName}&description=${project.value.projectDescription}`)  
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Project saved successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            project.value.projectName = '';
            project.value.projectDescription = '';
            // route.
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occurred!',
                showConfirmButton: false,
                timer: 1500
            });
            return error
        })
        .finally(() => {
            loading.value = false;
            dialog.value = false;
        });
};
</script>

<template>
    <v-container> 
        <v-form @submit.prevent="saveProject">
        <v-card prepend-icon="mdi-pencil" title="Create Project">
            <v-card-text>
            <v-row dense>
                <v-col cols="12">
                <v-text-field v-model="project.projectName" label="Project Name*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-textarea v-model="project.projectDescription" label="Project Description*" required></v-textarea>
                </v-col>
            </v-row>
            <small class="text-caption text-medium-emphasis">*indicates required field</small>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
            <v-btn color="primary" text="Save" type="submit" :disabled="loading"></v-btn>
            </v-card-actions>
        </v-card>
        </v-form>
    </v-container>
</template>

