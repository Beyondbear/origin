import { createApp } from 'vue'
import App from './components/22.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
