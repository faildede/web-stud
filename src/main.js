import { createApp } from 'vue'
import { createPinia } from 'pinia'
import urql from "@urql/vue";

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/tailwind.css'
import 'tw-elements';
import 'flowbite';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(urql, {
    url: "http://localhost:3000/graphql",
  });

app.mount('#app')
