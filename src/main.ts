import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useStore } from './store'

import 'modern-css-reset'

createApp(App).use(useStore()).use(router).mount('#app')
