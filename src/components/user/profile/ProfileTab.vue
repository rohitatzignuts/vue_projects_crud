<script lang="ts" setup>
import type {
    VContainer
} from 'vuetify/components';

const profileData = [{
    About: {
        "Full Name": "John Doe",
        "Status": "active",
        "Role": "Developer",
        "Country": "USA",
        "Language": "English"
    },
    Contact: {
        "Contact": "(123) 456-7890",
        "Skype  ": "john.doe",
        "Email  ": "john.doe@example.com"
    },
    Teams: {
        "Backend Developer": "(126 Members)",
        "VueJS Developer  ": "(98 Members)"
    },
    Overview: {
        "Task Compiled     ": "13.5k",
        "Connections       ": "897",
        "Projects Compiled ": "146"

    }
}];
</script>
<template>
<VContainer class="bg-surface-variant" fluid color="#2F3349">
    <VRow class="mb-6" gap="2">
        <VCol cols="12" md="4">
            <div class="colone">
                <ul>
                    <li v-for="(profile, index) in profileData" :key="index">
                        <h4>ABOUT</h4>
                        <ul>
                            <li v-for="(value, key) in profile.About" :key="key">
                                <strong>{{ key }}:</strong> {{ value }}
                            </li>
                        </ul>
                        <h4>CONTACT</h4>
                        <ul>
                            <li v-for="(value, key) in profile.Contact" :key="key">
                                <strong>{{ key }}:</strong> {{ value }}
                            </li>
                        </ul>
                        <h4>TEAMS</h4>
                        <ul>
                            <li v-for="(value, key) in profile.Teams" :key="key">
                                <strong>{{ key }}:</strong> {{ value }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </VCol>

        <v-col cols="12" md="8" class="timeline my-4">
            <div>
                <v-timeline align="start" side="end">
                    <v-timeline-item dot-color="pink" size="small">
                        <div class="d-flex">
                            <strong class="me-4">5pm</strong>
                            <div>
                                <strong>New Icon</strong>
                                <div class="text-caption">
                                    Mobile App
                                </div>
                            </div>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item dot-color="teal-lighten-3" size="small">
                        <div class="d-flex">
                            <strong class="me-4">3-4pm</strong>
                            <div>
                                <strong>Design Stand Up</strong>
                                <div class="text-caption mb-2">
                                    Hangouts
                                </div>
                            </div>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item dot-color="pink" size="small">
                        <div class="d-flex">
                            <strong class="me-4">12pm</strong>
                            <div>
                                <strong>Lunch break</strong>
                            </div>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item dot-color="teal-lighten-3" size="small">
                        <div class="d-flex">
                            <strong class="me-4">9-11am</strong>
                            <div>
                                <strong>Finish Home Screen</strong>
                                <div class="text-caption">
                                    Web App
                                </div>
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </div>
        </v-col>
    </VRow>

    <v-row class="mb-6" no-gutters>
        <v-col cols="12" md="4">
            <div class="colone" color="#FFFFFF">
                <li v-for="(profile, index) in profileData" :key="index">
                    <h4>OVERVIEW</h4>
                    <ul>
                        <li v-for="(value, key) in profile.Overview" :key="key">
                            <strong>{{ key }}:</strong> {{ value }}
                        </li>
                    </ul>
                </li>
            </div>
        </v-col>
    </v-row>
</VContainer>
</template>

<style>
ul,
li {
    list-style-type: none;
}

h4 {
    margin: 0.5rem 0;
}

.colone {
    padding: 1rem;
    background-color: #2F3349;
    border-radius: 0.5rem;
}

.colone:last-child {
    margin-top: 1rem;
}

.timeline {
    background-color: #2F3349;
    border-radius: 0.5rem;
}
</style>
