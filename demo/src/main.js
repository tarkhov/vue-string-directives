import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import { VueStringDirectives } from './../../dist/vue-string-directives'
import App from './App.vue'

const app = createApp(App)
app.use(VueStringDirectives)
app.mount('#app')