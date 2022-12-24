import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Autocounter from "vue3-autocounter";
import BootstrapVue3 from "bootstrap-vue-3";
import axios from "axios";

// import VueAxios from "vue-axios";
// import axios from "axios";

// createApp.use(VueAxios, axios);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

const app = createApp(App).component("vue3-autocounter", Vue3Autocounter);
app.use(BootstrapVue3).use(router).mount("#app");
