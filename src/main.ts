import './assets/main.css'
import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
// axios
axios.defaults.baseURL = "https://mock-api.binaryboxtuts.com/"
axios.interceptors.request.use(function (config) {
    config.headers['X-Binarybox-Api-Key'] = "binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt"
    return config;
});

// Vuetify
const vuetify = createVuetify({
    components,
    directives,
    theme: {},
    icons : {
        iconfont: 'mdi'
    }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
