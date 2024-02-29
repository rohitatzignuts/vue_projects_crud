<script setup lang="ts">
import { ref ,onMounted} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProjectShowVue from '@/components/ProjectShow.vue';
import Default from '@/layouts/Default.vue';
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
    <Default >
        <template #content>
            <ProjectShowVue 
            :project="project"
            />
        </template>
    </Default>
</template>