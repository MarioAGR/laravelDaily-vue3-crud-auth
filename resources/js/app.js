import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import PostsIndex from "./components/Posts/Index.vue";

import { TailwindPagination } from 'laravel-vue-pagination';

const app = createApp({});
app.component('posts-index', PostsIndex);
app.component('Pagination', TailwindPagination);
app.mount('#app');
