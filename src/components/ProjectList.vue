<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProjectForm from './ProjectForm.vue';
import ProjectShow from './ProjectShow.vue';
import {useFetchProjects} from '@/composables/useFetchProjects'

const search = ref('');
const headers = [
{ text: 'Name', value: 'name', width: '20%' },
{ text: 'Description', value: 'description', width: '60%' },
{ text: 'Actions', value: 'actions', sortable: false, width: '20%' },
];

const {fetchProjects,projects} =useFetchProjects()

const handleDelete = (id:number) => {
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
                timer: 1000
            });
            fetchProjects();
            })
            .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occurred!',
                showConfirmButton: false,
                timer: 1000
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
    <VContainer>
        <ProjectForm value="Create" />
        <VCard
        title="Projects"
        flat
        class="mt-4"
        width="100%"
        color="primary"
        >
            <template v-slot:text>
            <vTextField
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
            ></vTextField>
            </template>
        
            <VDataTable
            :headers="headers"
            :items="projects"
            :search="search"
            >
            <template #item.actions="{ item }">
                <project-show :project="item" />
                <project-form :exprojectId="item.id" value="Edit" />
                <VBtn @click="handleDelete(item.id)" color="error" class="mx-2">
                <VIcon>mdi-delete</VIcon>
                </VBtn>
            </template>
            </VDataTable>
        </VCard>
    </VContainer>
    </template>
    