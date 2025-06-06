import "./assets/scss/main.css";
import "./assets/scss/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";

import { createBootstrap } from "bootstrap-vue-next";

// Add the necessary CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(createBootstrap()); // Important
app.mount("#app");
