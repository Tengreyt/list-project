import './assets/main.css'
// вот этот импорт является старым версией primevue поэтому он не будет работать
// import 'primevue/themes/saga-blue/theme.css' // Тема

// Aura является стандартной темой PrimeVue, то есть новый метод импорта стилей
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css' // Иконки
import 'primeflex/primeflex.css' // Дополнительные утилиты CSS

import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import Message from 'primevue/message'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import DatePicker from 'primevue/datepicker'
import Radio from 'primevue/radiobutton'
import Badge from 'primevue/badge'
import Chart from 'primevue/chart'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyAu7x_rmjY4FYFSLD4FDElR7XNsdUCviKc',
  authDomain: 'interview-twitt.firebaseapp.com',
  projectId: 'interview-twitt',
  storageBucket: 'interview-twitt.firebasestorage.app',
  messagingSenderId: '931203618667',
  appId: '1:931203618667:web:f568c5b0ed1afc31831e2e',
}

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)
// подключаем PrimeVue с стилями
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.directive('tooltip', Tooltip)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', Message)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', DatePicker)
app.component('app-radio', Radio)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')
