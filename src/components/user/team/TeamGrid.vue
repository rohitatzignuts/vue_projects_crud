<script lang="ts" setup>
import TeamCard from './TeamCard.vue'
</script>
<template>
<VContainer>
    <v-row>
        <v-col cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <TeamCard />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <TeamCard />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="4" v-for="i in 3" :key="i">
            <TeamCard />
        </v-col>
    </v-row>
</VContainer>
</template>
