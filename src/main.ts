import 'primevue/resources/themes/md-dark-deeppurple/theme.css'
import 'primeicons/primeicons.css'
import '/src/core/assets/styles/style.css'
import '/src/core/assets/styles/defaults.css'
import en from '/src/core/assets/i18n/en.json';
import lara from './core/assets/lara/index.js'
import {createApp} from "vue";
import PrimeVue from "primevue/config";
import App from './core/App.vue'
import router from "./core/router";
import {createPinia} from "pinia";



const pinia = createPinia()
const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    locale: en,
    pt: lara
});
app.use(pinia)
app.use(router)
app.mount('#app')
