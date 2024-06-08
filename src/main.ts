import { createApp } from "vue";
import './styles/globals.css'
import './styles/theme.css'
import './styles/fonts.css'
import App from "./App.vue";
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');