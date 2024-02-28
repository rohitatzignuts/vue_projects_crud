<script setup lang="ts">
import { ref ,onMounted} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import Swal from 'sweetalert2';
import Navbar from './Navbar.vue';
const route = useRoute()
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
onMounted(() => {
    getProject()
})
</script>

<template>
    <Navbar />
    <v-container class="bg-surface-variant" id="container">
    <v-card
    class="mx-auto"
    max-width="450"
    :title="project.projectName"
    :text="project.projectDescription"
>
    <template v-slot:actions>
    <RouterLink to="/">
    <v-btn height="48">
        Go back
    </v-btn>
    </RouterLink>
    </template>
    </v-card>
    </v-container>
</template>

<style scoped>
#container{
    height : 100vh;
    padding : 1rem;
    margin : 0;
    max-width : 100%    
}
</style>