import axios from 'axios';
import { ref } from 'vue';

export default function usePost() {
    const posts = ref({});

    const getPosts = async (
        page = 1,
        category = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios
            .get(
                '/api/posts' +
                `?page=${page}` +
                `&category=${category}` +
                `&order_column=${order_column}` +
                `&order_direction=${order_direction}`
            )
            .then(response => {
                posts.value = response.data;
            });
    };
    return { posts, getPosts };
}
