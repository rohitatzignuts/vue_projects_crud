<script setup lang="ts">
import { useLogin } from '@/composables/useLogin.ts'

const { registerData, handleLogin } = useLogin();
</script>

<template>
    <VContainer class="d-flex justify-center align-center">
        <VSheet class="mx-auto pa-10" width="500">
            <h1>Login...</h1>
            <form @submit.prevent="handleLogin">
                <VTextField v-model="registerData.email" label="E-main" type="email"></VTextField>
                <VTextField v-model="registerData.password" label="Password" type="password"></VTextField>
                <VBtn class="me-4" type="submit">
                    Login !
                </VBtn>
                Not a user ?...
                <VBtn class="me-4" type="submit" variant="plain" color="white">
                    <router-link to="/register">Register</router-link>
                </VBtn>
            </form>
        </VSheet>
    </VContainer>
</template>

<style>
a {
    color: black;
}
</style>
