import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import axios from 'axios'
import vue3notification from 'notification_vue_3'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

createApp(App)
  .use(vue3notification)
  .mount('#app')
