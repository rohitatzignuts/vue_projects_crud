<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { RouterLink } from 'vue-router';
import router from '@/router';

interface User {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const registerData = ref<User>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const handleRegister = () => {
    axios.post('api/register', registerData.value)
        .then((response: any) => {
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            Swal.fire({
                icon: 'success',
                title: 'User created successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/')
            registerData.value.name = '';
            registerData.value.email = '';
            registerData.value.password = '';
            registerData.value.password_confirmation = '';
            return response;
        })
        .catch((error: any) => {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occurred!',
                showConfirmButton: false,
                timer: 1500
            });
            return error;
        });
}
</script>

<template>
    <VContainer id="container" class="d-flex justify-center align-center">
    <VSheet class="mx-auto pa-10" width="500">    
    <VRow>
    <VCol cols="12">
        <h1>Register...</h1>
        <form @submit.prevent="handleRegister">
        <VTextField
            v-model="registerData.name"
            :counter="10"
            required
            label="Name"
        ></VTextField>

        <VTextField
            v-model="registerData.email"
            required
            :counter="7"
            label="E-mail"
            type="email"
        ></VTextField>

        <VTextField
            v-model="registerData.password"
            required
            label="Password"
            type="password"
        ></VTextField>

        <VTextField
            v-model="registerData.password_confirmation"
            required
            label="Confirm Password"
            type="password"
        ></VTextField>

        <VBtn
            class="me-4"
            type="submit"
        >
            Register !
        </VBtn>
        Already a user?<VBtn variant="plain"><RouterLink to="/login">Login</RouterLink></VBtn>
        </form>
    </VCol>
    </VRow>
    </VSheet>
</VContainer>
</template>

<style>
h1{
    margin: 1rem 0;
}
a{
    text-decoration: underline;
    color: white;
}
</style>