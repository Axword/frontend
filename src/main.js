// main.js
import { createApp } from 'vue';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from "axios";
import { VDataTable } from 'vuetify/labs/VDataTable'
import { pl } from 'vuetify/locale'

axios.defaults.baseURL = "http://localhost:8000/api";


const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#E0E0CE',
    surface: '#36373b',
    primary: '#6d615d',
    secondary: 'D6C9C9',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}


const vuetify = createVuetify({
  components: {
    VDataTable,
    ...components,
  },
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  locale: {
    locale: 'pl',
    messages: { pl }
  }
})

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#app');
