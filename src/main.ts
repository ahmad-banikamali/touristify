import 'primevue/resources/themes/aura-light-green/theme.css'
import {createApp} from "vue";
import PrimeVue from "primevue/config";
import App from './App.vue'
import router from "./router";
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App);
app.use(PrimeVue);
app.use(pinia)
app.use(router)
app.mount('#app')
