import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue'
import router from './router'
import '@arco-design/web-vue/dist/arco.css';
import './assets/main.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
// import * as echarts from 'echarts';
// import 'echarts-wordcloud';
const app = createApp(App)

app.use(createPinia())

app.use(ArcoVue);
app.use(router)
app.use(ArcoVueIcon);
app.mount('#app')
