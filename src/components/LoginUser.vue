<script setup lang="ts">
import {useLogin} from '@/composables/useLogin.ts'

const { registerData, handleLogin } = useLogin();
</script>

<template>
    <vContainer class="d-flex justify-center align-center">
    <vSheet class="mx-auto pa-10" width="500">
        <h1>Login...</h1>
        <form @submit.prevent="handleLogin">
        <vTextField
        v-model="registerData.email"
        :counter="7"
        label="E-main"
        type="email"
        ></vTextField>
        <vTextField
        v-model="registerData.password"
        label="Password"
        type="password"
        ></vTextField>
        <vBtn
        class="me-4"
        type="submit"
        >
        Login !
        </vBtn>
        Not a user ?...
        <vBtn
        class="me-4"
        type="submit"
        variant="plain"
        color="white"
        >
        <router-link to="/register">Register</router-link>
        </vBtn>
        </form>
    </vSheet>
    </vContainer>
</template>

<style>
a{
    color: black;
}
</style>