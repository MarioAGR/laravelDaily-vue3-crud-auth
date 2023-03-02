import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from "vue-router";
import App from "./layouts/App.vue";
import PostsIndex from "./components/Posts/Index.vue";
import PostsCreate from "./components/Posts/Create.vue";

import { TailwindPagination } from 'laravel-vue-pagination';

const routes = [
    { path: '/', component: PostsIndex },
    { path: '/posts/create', component: PostsCreate }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.component('Pagination', TailwindPagination);
app.mount('#app');
