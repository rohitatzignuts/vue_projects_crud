<script setup lang="ts">
import Swal from 'sweetalert2'
import { ref ,onMounted} from 'vue';
import axios from 'axios';
import router from '@/router';
import { useRoute } from 'vue-router';
const route = useRoute()
const dialog = ref(false);
const loading = ref(false);

const project = ref({
    projectName: '',
    projectDescription: ''
});

const getProject = () => {
    const id = route.params.id;
    axios.get(`/api/projects/${id}`)
    .then(response => {
        let projectData = response.data
        project.value.projectName = projectData.name
        project.value.projectDescription = projectData.description
        return response
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'An Error Occured!',
            showConfirmButton: false,
            timer: 1500
        })
        return error
    })
}
const handleSave = () => {
        const id = route.params.id;
        loading.value = true;
        axios.patch(`/api/projects/${id}?name=${project.value.projectName}&description=${project.value.projectDescription}`)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Project saved successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            project.value.projectName = '';
            project.value.projectDescription = '';
            router.push('/')
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
}
onMounted(() => {
    getProject()
})
</script>
<template>
    <Navbar />
    <v-container class="bg-surface-variant" id="container">
        <router-link to="/"><v-btn id="btn">Go back Home...</v-btn></router-link>
        <v-form @submit.prevent="handleSave">
        <v-card prepend-icon="mdi-pencil" title="Create A New Project">
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