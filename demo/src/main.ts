import { createApp } from 'vue'
import App from './App.vue'
import { setupNaive } from '@/plugins/native'


const app = createApp(App)

 // 注册全局常用的 naive-ui 组件
setupNaive(app)


app.mount('#app')
