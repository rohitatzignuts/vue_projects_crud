<script setup lang="ts">
import {useLogin} from '@/composables/useLogin.ts'

const { registerData, handleLogin } = useLogin();
</script>

<template>
    <v-container class="d-flex justify-center align-center">
    <v-sheet class="mx-auto pa-10" width="500">
        <h1>Login...</h1>
        <form @submit.prevent="handleLogin">
        <v-text-field
        v-model="registerData.email"
        :counter="7"
        label="E-main"
        type="email"
        ></v-text-field>
        <v-text-field
        v-model="registerData.password"
        label="Password"
        type="password"
        ></v-text-field>
        <v-btn
        class="me-4"
        type="submit"
        >
        Login !
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
    </v-sheet>
    </v-container>
</template>

<style>
a{
    color: black;
}
</style>