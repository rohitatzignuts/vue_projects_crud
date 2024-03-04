<script setup lang="ts">
import TeamCard from './TeamCard.vue'
</script>
<template>
    <v-container fluid>
        <v-row >
            <v-col 
            cols="12"
            sm="4"  
            v-for="i in 3"
            :key="i">
                <TeamCard />
            </v-col>
        </v-row>
        <v-row>
            <v-col 
            col="3"  
            sm="4"         
            v-for="i in 3"
            :key="i">
                <TeamCard />
            </v-col>
        </v-row>
        <v-row>
            <v-col 
            col="3"
            sm="4"           
            v-for="i in 3"
            :key="i">
                <TeamCard />
            </v-col>
        </v-row>
    </v-container>
</template>