<script setup lang="ts">
import axios from 'axios';
import Default from '@/layouts/Default.vue';
import { ref, onMounted } from 'vue';
interface Project {
    id : numb
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
            <template #items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.description }}</td>
                <td>{{ 'fef' }} </td>
            </template>
        </v-data-table>
</template>