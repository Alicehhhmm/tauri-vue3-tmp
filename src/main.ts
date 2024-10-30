import { createApp } from 'vue'
import router from "@/routers/index.ts"

import '@/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')