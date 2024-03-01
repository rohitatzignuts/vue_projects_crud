import './assets/main.css'
import './axios.ts'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createI18n } from "vue-i18n";
import en from './language/en-US.json'
import sp from './language/sp-SP.json'

// i18n
const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") ?? "en-US",
    fallbackLocale: "en-US",
    messages: {
    "en-US": en,
    "sp-SP": sp
}
});

// Vuetify
const vuetify = createVuetify({
    components,
    directives,
    theme: {},
    icons : {
        defaultSet : 'mdi',
        aliases,
        sets : {
            mdi,
        },
    }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
app.use(i18n)
