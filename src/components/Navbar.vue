<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Swal from 'sweetalert2';
import axios from 'axios';
import router from '@/router';

const token = localStorage.getItem('token')
const handleLogout = () => {
    Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then((result) => {
        if (result.isConfirmed) {
            axios.post('api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((response: any) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged out successfully!',
                    showConfirmButton: false,   
                    timer: 1500
                });
                router.push('/login');
                localStorage.removeItem('token')
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
})
}
</script>

<template>
    <v-row justify="space-between" align="center" class="pa-14 ma-2">
    <v-col >
    <div>
        <router-link to="/"><h1>Project Master</h1></router-link>
    </div>
    </v-col>
    <v-col >
    <div id="links">
        <router-link to="/"><v-btn variant="outlined">Home</v-btn></router-link>
        <router-link to="/create"><v-btn variant="outlined">Create</v-btn></router-link>
        <v-btn variant="outlined" @click="handleLogout">Logout</v-btn>
    </div>
    </v-col>
</v-row>
</template>

<style scoped>
a{
    text-decoration: none;
    color: white;
}
#links{
    display: flex;
    gap: 0.5rem;
}
</style>