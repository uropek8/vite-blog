import { createApp } from 'vue'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import PrimeVue from 'primevue/config'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'
import InputText from 'primevue/inputtext'
import Paginator from 'primevue/paginator'
import ToastService from 'primevue/toastservice'

import App from './App.vue'

import router from './router'

import './style.css'
import '@fontsource/roboto'
import '@fontsource/roboto/500.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('Toast', Toast)
app.component('Button', Button)
app.component('Checkbox', Checkbox)
app.component('Textarea', Textarea)
app.component('InputText', InputText)
app.component('Paginator', Paginator)

app.mount('#app')
