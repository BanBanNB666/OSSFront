import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./font/bootstrap-icons.css";

createApp(App).use(router).mount('#app')
