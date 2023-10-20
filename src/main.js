import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'



import './axios_service'

import App from './App.vue'
import router from './router'

const pinia = createPinia();

pinia.use(({store}) => {
    store.router = markRaw(router)
})

const app = createApp(App)

app.use(router)
app.use(pinia)

app.component('VueDatePicker', VueDatePicker);

app.mount('#app')