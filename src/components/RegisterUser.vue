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
            router.push('/login')
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
    <v-container id="container">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
    <v-text-field
    v-model="registerData.name"
    :counter="10"
    required
    label="Name"
    ></v-text-field>

    <v-text-field
    v-model="registerData.email"
    required
    :counter="7"
    label="E-main"
    type="email"
    ></v-text-field>

    <v-text-field
    v-model="registerData.password"
    required
    label="Paasword"
    type="password"
    ></v-text-field>

    <v-text-field
    v-model="registerData.password_confirmation"
    required
    label="Confirm Paasword"
    type="password"
    ></v-text-field>

    <v-btn
    class="me-4"
    type="submit"
    >
    submit
    </v-btn>
    Already a user?<v-btn variant="plain"><RouterLink to="/login">Login</RouterLink></v-btn>
    </form>
    </v-container>
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