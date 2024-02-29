<script setup lang="ts">

interface Project{
    projectName : string,
    projectDescription : string
}
defineProps<{
    project : Project
}>()

</script>

<template>
    <v-card
    class="mx-auto"
    width="500  "
    :title="project.projectName"
    :text="project.projectDescription"
    >
    
    <template v-slot:actions>
    <RouterLink to="/">
    <v-btn height="48" color="primary">
        Go back
    </v-btn>
    </RouterLink>
    </template>
    </v-card>
</template>
