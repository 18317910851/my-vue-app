import {createApp} from 'vue'
import App from './App.vue'
import './style.css'
import './styles/var.scss'
import "./styles/comm.scss"
// 引入自动更新提醒
import "@/utils/auto-update.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import setupPlugins from "@/plugins";


const app = createApp(App)
app.use(setupPlugins)
app.use(ElementPlus, {
    locale: zhCn, // 引入中文 locale
})

app.mount('#app')
