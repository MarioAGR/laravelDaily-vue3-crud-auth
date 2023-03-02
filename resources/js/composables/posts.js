import axios from 'axios';
import { ref, inject } from 'vue';
import { useRouter } from "vue-router";

export default function usePost() {
    const posts = ref({});
    const post = ref({});
    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject('$swal');

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

    const getPost = async (id) => {
        axios
            .get(`/api/posts/${id}`)
            .then(response => {
                post.value = response.data.data;
            });
    };

    const storePost = async (post) => {
        if (isLoading.value) {
            return;
        }

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();
        for (const item in post) {
            if (Object.hasOwnProperty.call(post, item)) {
                const element = post[item];
                serializedPost.append(item, element);
            }
        }

        axios
            .post('/api/posts', serializedPost)
            .then(response => {
                router.push({ name: 'posts.index' });
                swal({
                    icon: 'success',
                    title: 'Post saved successfully'
                });
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => isLoading.value = false);
    };

    const updatePost = async (post) => {
        if (isLoading.value) {
            return;
        }

        isLoading.value = true;
        validationErrors.value = {};

        axios
            .put(`/api/posts/${post.id}`, post)
            .then(response => {
                router.push({ name: 'posts.index' });
                swal({
                    icon: 'success',
                    title: 'Post saved successfully'
                });
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => isLoading.value = false);
    };
    return { posts, getPosts, post, getPost, storePost, updatePost, validationErrors, isLoading };
}
