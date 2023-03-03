import './bootstrap';

import { createApp, onMounted } from 'vue/dist/vue.esm-bundler';
import { TailwindPagination } from 'laravel-vue-pagination';
import router from "./routes/index";
import VueSweetAlert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'; // Why... CSS...?
import useAuth from "./composables/auth";
import { abilitiesPlugin } from '@casl/vue';
import ability from './services/ability';

const app = createApp({
    setup() {
        const { getUser } = useAuth();
        onMounted(getUser);
    }
});
app.use(router);
app.use(VueSweetAlert2);
app.use(abilitiesPlugin, ability);
app.component('Pagination', TailwindPagination);
app.mount('#app');
