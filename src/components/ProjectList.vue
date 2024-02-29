<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProjectForm from './ProjectForm.vue';
import ProjectShow from './ProjectShow.vue';

const search = ref('');
const projects = ref([]);
const headers = [
{ text: 'Name', value: 'name' },
{ text: 'Description', value: 'description' },
{ text: 'Actions', value: 'actions', sortable: false },
];

const fetchProjects = () => {
axios.get('/api/projects')
    .then(res => {
    projects.value = res.data;
    })
    .catch(error => {
    console.error(error);
    });
};

const handleDelete = (id) => {
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    if (result.isConfirmed) {
    axios.delete(`/api/projects/${id}`)
        .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Project deleted successfully!',
            showConfirmButton: false,
            timer: 1500
        });
        fetchProjects();
        })
        .catch(() => {
        Swal.fire({
            icon: 'error',
            title: 'An Error Occurred!',
            showConfirmButton: false,
            timer: 1500
        });
        });
    }
});
};

onMounted(() => {
fetchProjects();
});
</script>

<template>
    <div>
        <v-text-field v-model="search" label="Search" />
        <v-data-table :items="projects" :headers="headers" :search="search">
            <template #item.project="{ item }">
                <project-show :project="item" />
            </template>
            <template #item.actions="{ item }">
                <project-show :project="item" />
                <project-form :exprojectId="item.id" value="Edit" />
                <v-btn @click="handleDelete(item.id)" color="error">
                <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </div>
    </template>