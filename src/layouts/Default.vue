<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {RouterLink} from 'vue-router'
// import  ProjectCreate from '../components/ProjectCreate.vue'
import  ProjectList from '../components/ProjectList.vue'
</script>

<template>
    <nav>
        <h1>Project Master</h1>
    </nav>
    <v-container class="bg-surface-variant" id="container">
        <v-row no-gutters id="row">
            <v-col cols="2">
                <v-sheet class="pa-2 ma-2">
                    <v-list density="compact" nav>
                        <RouterLink to="/"><v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item></RouterLink>
                        <RouterLink to="/create">
                            <v-list-item prepend-icon="mdi-forum" title="Create" value="about"></v-list-item>
                        </RouterLink>
                    </v-list>
                </v-sheet>
            </v-col>

            <v-col cols="10">
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
nav{
    padding : 16px;
    margin : 12px;
    text-align : center
}
a{
    text-decoration : none;
    color : black
}
</style>