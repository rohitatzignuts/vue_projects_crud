<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {RouterLink} from 'vue-router'
import Navbar from '@/components/Navbar.vue'
// import  ProjectCreate from '../components/ProjectCreate.vue'
import  ProjectList from '../components/ProjectList.vue'
</script>

<template>
    <Navbar />
    <v-container class="bg-surface-variant" id="container">
        <v-row no-gutters id="row">
            <v-col>
                <v-sheet class="pa-2 ma-2">
                    <ProjectList />
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
#container{
    height : 100vh;
    padding : 1rem;
    margin : 0;
    max-width : 100%    
}
a{
    text-decoration : none;
    color : black
}
</style>