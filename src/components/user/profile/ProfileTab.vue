<script lang="ts" setup>
import ProfileColOne from './ProfileColOne.vue'
import ProfileColTwo from './ProfileColTwo.vue'

</script>

<template>
<VContainer >
    <VRow>
        <VCol cols="12" sm="4" md="6" lg="4">
            <ProfileColOne />
        </VCol>
        <VCol ccols="12" sm="8" md="6" lg="8">
            <ProfileColTwo />
        </VCol>
    </VRow>
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
