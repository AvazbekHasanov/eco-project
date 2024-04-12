import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)

app.use(router)
const storedUser = localStorage.getItem('auth_users')
const user = storedUser ? JSON.parse(storedUser) : {}

app.config.globalProperties.$user = user;
app.config.globalProperties.$host = 'http://localhost:3000'

app.mount('#app')
