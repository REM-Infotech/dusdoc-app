import { createPinia } from "pinia";
import { createApp } from "vue";
import "./assets/scss/main.css";
import "./assets/scss/main.scss";

import { createBootstrap } from "bootstrap-vue-next";

// Add the necessary CSS
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
export const piniaState = createPinia();
app.use(router);
app.use(piniaState);
app.use(createBootstrap()); // Important
app.mount("#app");
