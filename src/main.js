import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)

app.use(router);
app.use(bootstrap)

// Add global property
const storedUser = localStorage.getItem('auth_users');
const user = storedUser !='undefined'  && storedUser? JSON.parse(storedUser) : {};

app.config.globalProperties.$user = user;

app.mount('#app')
