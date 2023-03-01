import axios from 'axios';
import { ref } from 'vue';

export default function usePost() {
    const posts = ref({});

    const getPosts = async (page = 1) => {
        axios.get(`/api/posts?page=${page}`).then(response => {
            posts.value = response.data;
        });
    };
    return { posts, getPosts };
}
