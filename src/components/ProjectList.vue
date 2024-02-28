<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import Default from '@/layouts/Default.vue';
interface Project {
    id : number,
    name: string,
    description: string,
}
const projects = ref<Array<Project>>([]);
const fetchProjects = () => {
    axios.get('/api/projects')
        .then(res => {
            projects.value = res.data;
            return res;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};
const emit = defineEmits(['handleEditValues','showtheproject']);
const handleEdit = (id:number) => {
    emit('handleEditValues',id)
}
const showProject = (id:number) =>{
    emit('showtheproject',id)
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
            .then( response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Project deleted successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                fetchProjects();
                return response
            })
            .catch(error => {
                Swal.fire({
                        icon: 'error',
                    title: 'An Error Occured!',
                    showConfirmButton: false,
                    timer: 1500
                })
                return error
            });
        }
        })
}

onMounted(() => {
    fetchProjects();
});
const headers = [
    { text: 'Name', value: 'name' },
    { text: 'Description', value: 'description' }
];
</script>

<template>
            <v-data-table :items="projects" :headers="headers">
                <thead>
                <tr>
                    <th class="text-left">
                    Name
                    </th>
                    <th class="text-left">
                    Description
                    </th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
            <tr
                v-for="item in projects"
                :key="item.id"
            >
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td >
                    <v-btn id="actions" color="info" @clic="showProject(item.id)"><router-link :to="`/show/${item.id}`">View</router-link></v-btn>
                    <v-btn id="actions" color="success" @clic="handleEdit(item.id)"><router-link :to="`/edit/${item.id}`"><v-icon>mdi-pencil</v-icon></router-link></v-btn>
                    <v-btn id="actions" color="error" @click="handleDelete(item.id)"><v-icon>mdi-delete</v-icon></v-btn>
                </td>
            </tr>
            </tbody>
            </v-data-table>
</template>

<style scoped>
a{
    text-decoration: none;
    color: black;
}
th,td{
    max-width: 200px;
}
#actions{
    margin: 0 .5rem;
}
</style>