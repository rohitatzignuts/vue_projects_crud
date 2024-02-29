<script setup lang="ts">
import {useLogin} from '@/composables/useLogin.ts'
const { registerData, handleLogin } = useLogin();
</script>

<template>
    <v-container id="container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">

    <v-text-field
    v-model="registerData.email"
    :counter="7"
    label="E-main"
    type="email"
    ></v-text-field>

    <v-text-field
    v-model="registerData.password"
    label="Paasword"
    type="password"
    ></v-text-field>

    <v-btn
    class="me-4"
    type="submit"
    >
    submit
    </v-btn>
    Not a user ?...
    <v-btn
    class="me-4"
    type="submit"
    variant="plain"
    color="white"
    >
    <router-link to="/register">Register</router-link>
    </v-btn>
    </form>
    </v-container>
</template>

<style>
h1{
    margin: 1rem 0;
}
</style>