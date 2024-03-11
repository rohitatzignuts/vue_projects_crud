<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProjectForm from './ProjectForm.vue';
import ProjectShow from './ProjectShow.vue';
import type Project from '@/project';

const editingProjectId = ref<number>()
const projectData = ref<Project>()
const search = ref('');
const headers = [
    { title: 'Name', value: 'name', width: '20%' },
    { title: 'Description', value: 'description', width: '60%' },
    { title: 'Actions', value: 'actions', sortable: false, width: '20%' },
];
const showDialog = ref<Boolean>(false)
const editDialog = ref<Boolean>(false)
const createDialog = ref<Boolean>(false)
const projects = ref<Array<Project>>([]);
    
const fetchProjects = () => {
    axios.get<Project[]>('/api/projects')
        .then(res => {
            projects.value = res.data;
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });
};

const viewProjectDetails = (item : Project) => {
    showDialog.value = true
    projectData.value = item
}

const editProjectDetails = ( id : number ) => {
    editDialog.value = true
    editingProjectId.value = id
}

const handleCreate = () => {
    createDialog.value = true
}

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
        <div class="d-flex justify-space-between">
            <VBtn @click="handleCreate" color="info" variant="outlined" class=" my-2">Create</VBtn>
            <router-link to="market-place">
                <VBtn color="info" variant="outlined" class=" my-2">
                    <VIcon class="me-2">mdi-cart-outline</VIcon>Market Place
                </VBtn>
            </router-link>
        </div>
        <VCard title="Projects" flat class="mt-4" width="100%" color="primary">
            <template v-slot:text>
                <vTextField v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></vTextField>
            </template>
            <VDataTable :headers="headers" :items="projects" :search="search">
                <template #item.actions="{ item }">
                    <VBtn @click="viewProjectDetails(item)" color="primary" class="mx-2 my-2">
                        <VIcon>mdi-eye</VIcon>
                    </VBtn>
                    <VBtn @click="editProjectDetails(item.id)" variant="tonal" class="mx-2 my-2">
                        <VIcon>mdi-pencil</VIcon>
                    </VBtn>
                    <VBtn @click="handleDelete(item.id)" color="error" class="mx-2 my-2">
                        <VIcon>mdi-delete</VIcon>
                    </VBtn>
                </template>
            </VDataTable>
        </VCard>
    </VContainer>
    <ProjectShow :project="projectData" :isVisible="showDialog" @handleCloseDialog="showDialog = false" />
    <ProjectForm @handleList="fetchProjects" :viewDialog="editDialog" :editingProjectId="editingProjectId"
        @handleDialog="editDialog = false" />
    <ProjectForm :viewDialog="createDialog" @handleDialog="createDialog = false" @handleList="fetchProjects" />
</template>
