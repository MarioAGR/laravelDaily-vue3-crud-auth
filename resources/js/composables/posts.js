import axios from 'axios';
import { ref } from 'vue';

export default function usePost() {
    const posts = ref([]);

    const getPosts = async () => {
        axios.get('/api/posts').then(response => {
            posts.value = response.data.data;
        });
    };
    return { posts, getPosts };
}
