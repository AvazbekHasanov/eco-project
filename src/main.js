import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { VueMaskDirective } from 'v-mask';
const app = createApp(App)
const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};
app.directive('mask', vMaskV3);
app.use(router)
const storedUser = localStorage.getItem('auth_users')
const user = storedUser && storedUser != 'undefined' ? JSON.parse(storedUser) : {}

app.config.globalProperties.$user = user;
app.config.globalProperties.$host = 'https://eco-backend-84gl.onrender.com'

app.mount('#app')
