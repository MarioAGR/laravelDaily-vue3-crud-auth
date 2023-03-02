import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import App from "./layouts/App.vue";
import { TailwindPagination } from 'laravel-vue-pagination';
import router from "./routes/index";
import VueSweetAlert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'; // Why... CSS...?

const app = createApp(App);
app.use(router);
app.use(VueSweetAlert2);
app.component('Pagination', TailwindPagination);
app.mount('#app');
