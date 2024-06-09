import { createApp } from "vue";
import './styles/globals.css'
import './styles/theme.css'
import './styles/fonts.css'
import App from "./App.vue";
import router from './router';

import iconLoader from './utils/iconLoader';

const app = createApp(App);
app.use(router);
iconLoader(app);
app.mount('#app');