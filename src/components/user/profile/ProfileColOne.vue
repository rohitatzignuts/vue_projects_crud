<template>
    <VCard class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4">
        <div>
            <h4>About</h4>
            <ul>
                <li><VIcon class="me-2">mdi-account-outline</VIcon>Full Name:John Doe</li>
                <li><VIcon class="me-2">mdi-check</VIcon>Status:active</li>
                <li><VIcon class="me-2">mdi-star-outline</VIcon>Role:Developer</li>
                <li><VIcon class="me-2">mdi-flag-outline</VIcon>Country:USA</li>
                <li><VIcon class="me-2">mdi-translate</VIcon>Language:English</li>
            </ul>
        </div>
        <div>
            <h4>Contact</h4>
            <ul>
                <li><VIcon class="me-2">mdi-phone-outline</VIcon>Contact:(123) 456-7890</li>
                <li><VIcon class="me-2">mdi-message-outline</VIcon>Skype:john.doe</li>
                <li><VIcon class="me-2">mdi-email-outline</VIcon>Email:john.doe@example.com</li>
            </ul>
        </div>
        <div>
            <h4>Teams</h4>
            <ul>
                <li><VIcon class="me-2" color="info">mdi-github</VIcon>Backend Developer:(126 Members)</li>
                <li><VIcon class="me-2" color="success">mdi-vuejs</VIcon>VueJS Developer:(98 Members)</li>
            </ul>
        </div>
    </VCard>

    <VCard class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4 my-4">
        <div>
            <h4>Overview</h4>
            <ul>
                <li><VIcon class="me-2">mdi-check</VIcon>Task Compiled:13.5k</li>
                <li><VIcon class="me-2">mdi-account-outline</VIcon>Connections:897</li>
                <li><VIcon class="me-2">mdi-view-grid-outline</VIcon>Projects Compiled:146</li>
            </ul>
        </div>
    </VCard>
</template>
<style scoped>
h4{
    margin-bottom: 16px;
    text-transform: uppercase;
    color: #d0d4f1ad;
    font-size: smaller;
}
li{
    padding-bottom: 16px;
    margin-left: 0.25rem;
    color: #d0d4f1ad;
}
</style>