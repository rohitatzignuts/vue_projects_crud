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
    <nav>
        <div>
            <h1>Project Master</h1>
        </div>
        <div id="links">
            <v-btn variant="outlined"><router-link to="/">Home</router-link></v-btn>
            <v-btn variant="outlined"><router-link to="/create">Create</router-link></v-btn>
            <v-btn variant="outlined" @click="handleLogout">Logout</v-btn>
        </div>
    </nav>
</template>

<style scoped>
nav{
    padding : 16px 18px;
    margin : 12px;
    text-align : center;
    display: flex;
    justify-content: space-between;
}
a{
    text-decoration: none;
    color: white;
}
#links{
    display: flex;
    gap: 0.5rem;
}
</style>