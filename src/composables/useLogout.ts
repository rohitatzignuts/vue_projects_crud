import axios from 'axios';
import Swal from 'sweetalert2';
import { ref } from 'vue';

export function useLogout(){
    const token = ref<string | null>()
    
    const handleLogout = () => {
        axios.post('api/logout')
            .then((response: any) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Logged out successfully!',
                        showConfirmButton: false,   
                        timer: 1500
                    });
                    return response
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
        handleLogout
    };
}
