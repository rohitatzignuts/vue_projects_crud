import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import router from '@/router';

export function useLogin(){
    interface UserLogin {
        email: string;
        password: string;
    }
    
    const token = ref<string | null>(null);
    const registerData = ref<UserLogin>({
        email: '',
        password: '',
    });
    
    const handleLogin = () => {
        axios.post('api/login', registerData.value)
            .then((response: any) => {
                if (response.data && response.data.token) {
                    localStorage.setItem('token',response.data.token)
                    Swal.fire({
                        icon: 'success',
                        title: 'Logged in successfully!',
                        showConfirmButton: false,   
                        timer: 1500
                    });
                    router.push('/')
                    registerData.value.email = '';
                    registerData.value.password = '';
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid response from server',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
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

    return {
        token,
        registerData,
        handleLogin
    };
}
