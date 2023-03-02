import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import App from "./layouts/App.vue";
import { TailwindPagination } from 'laravel-vue-pagination';
import router from "./routes/index";

const app = createApp(App);
app.use(router);
app.component('Pagination', TailwindPagination);
app.mount('#app');
