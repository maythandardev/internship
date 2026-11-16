import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//import User from './component/userTest.vue/index.js'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App) //template base

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    // aliases,
    // sets: {
    //   mdi,
    // },
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)//declare

//app.component('user', User)

app.mount('#app') 