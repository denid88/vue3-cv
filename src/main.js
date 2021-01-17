import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import axios from 'axios'
import vue3notification from 'notification_vue_3'

axios.defaults.baseURL = 'https://vue3-bbb1b-default-rtdb.europe-west1.firebasedatabase.app/'

createApp(App)
  .use(vue3notification)
  .mount('#app')
