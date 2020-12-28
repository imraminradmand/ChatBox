import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { chatAuth } from './firebase/config'

let app 

chatAuth.onAuthStateChanged(() => {
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})