import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

const db = firebase.firestore();

createApp(App)
  .mount('#app')
