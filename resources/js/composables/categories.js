import axios from 'axios';
import { ref } from 'vue';

export default function usePost() {
    const categories = ref({});

    const getCategories = async () => {
        axios.get('/api/categories').then(response => {
            categories.value = response.data.data;
        });
    };
    return { categories, getCategories };
}
