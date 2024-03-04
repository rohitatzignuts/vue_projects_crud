<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts" setup>
import {ref} from 'vue';
import ProfileTabVue from './profile/ProfileTab.vue';
import TeamGrid from './team/TeamGrid.vue'
import ProjectGrid from './projects/ProjectGrid.vue'
import ConnectionGrid from './connections/ConnectionGrid.vue'
const tab = ref(null)
</script>

<template>
<v-card class="my-6" color="#424242">
    <v-tabs v-model="tab" align-tabs="start" color="deep-white-accent">
        <v-tab value="Profile">Profile</v-tab>
        <v-tab value="Team">Team</v-tab>
        <v-tab value="Project">Project</v-tab>
        <v-tab value="Connections">Connections</v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="Profile">
            <ProfileTabVue />
        </v-window-item>

        <v-window-item value="Team">
            <TeamGrid />
        </v-window-item>

        <v-window-item value="Project">
            <ProjectGrid />
        </v-window-item>

        <v-window-item value="Connections">
            <ConnectionGrid />
        </v-window-item>
    </v-window>
</v-card>
</template>
