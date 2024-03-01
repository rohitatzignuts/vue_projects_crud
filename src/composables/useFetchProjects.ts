import axios from "axios";
import { ref } from "vue";
export function useFetchProjects(){
    const projects = ref([]);
    const fetchProjects = () => {
        axios.get('/api/projects')
            .then(res => {
            projects.value = res.data;
            })
            .catch(error => {
            console.error(error);
            });
        };
        return{
            fetchProjects,
            projects
        }
}