<script setup lang="ts">
import { ref, defineProps, watchEffect, watch } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import type Project from '@/project'

const loading = ref(false)
const projectId = ref<number>()
const project = ref<Project>({
  projectName: '',
  projectDescription: ''
})

const emits = defineEmits(['handleList','handleDialog'])
const props = defineProps<{ editingProjectId?: number, viewDialog: boolean  }>()

const handleCloseDialog = () => {
    emits('handleDialog',false)
}

const getProject = () => {
  project.value = {
    projectName: '',
    projectDescription: ''
  };
  if (props.editingProjectId) {
    projectId.value = props.editingProjectId
    axios
      .get(`/api/projects/${projectId.value}`)
      .then((response) => {
        let projectData = response.data
        project.value.projectName = projectData.name
        project.value.projectDescription = projectData.description
        return response
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'An Error Occurred!',
          showConfirmButton: false,
          timer: 1500
        })
        return error
      })
  }
}

const saveProject = () => {
  if (!project.value.projectName || !project.value.projectDescription) {
    Swal.fire({
      icon: 'error',
      title: 'Please fill in all required fields!',
      showConfirmButton: false,
      timer: 1500
    })
    return
  }
  loading.value = true
  const method = projectId.value ? 'patch' : 'post'
  const url = projectId.value ? `/api/projects/${projectId.value}` : '/api/projects'
  axios[method](url, {
    name: project.value.projectName,
    description: project.value.projectDescription
  })
    .then(() => {
      emits('handleList', true)
      emits('handleDialog',false)
      Swal.fire({
        icon: 'success',
        title: 'Project saved successfully!',
        showConfirmButton: false,
        timer: 1500
      })
      project.value.projectName = ''
      project.value.projectDescription = ''
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'An Error Occurred!',
        showConfirmButton: false,
        timer: 1500
      })
      return error
    })
    .finally(() => {
      loading.value = false
    })
}

watchEffect(() => {
  if(props.editingProjectId){
    getProject()
  }
})

watch(() => props.viewDialog, (value) => {
  if (!value) {
    project.value = {
      projectName: '',
      projectDescription: ''
    }
    projectId.value = undefined
  }
})

</script>

<template>
  <div class="text-center d-inline " >
    <VDialog :model-value="viewDialog" max-width="600">
      <VCard prepend-icon="mdi-pencil" :title="`${projectId ? 'Edit' : 'Create'} Project`">
        <VCardText>
          <VRow dense>
            <VCol cols="12">
              <VTextField
                v-model="project.projectName"
                label="Project Name*"
                required
              ></VTextField>
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="project.projectDescription"
                label="Project Description*"
                required
              ></VTextField>
            </VCol>
          </VRow>
          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </VCardText>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="handleCloseDialog"></v-btn>
          <v-btn color="primary" text="Save" variant="tonal" @click="saveProject"></v-btn>
        </v-card-actions>
      </VCard>
    </VDialog>
  </div>
</template>
