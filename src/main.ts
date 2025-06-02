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
import socket from "./resources/socketio";

const app = createApp(App);

const io = socket;
io.connect();
io.on("connect", () => {
  console.log("Socket connected:", io.id);
});

io.emit("get_status_system", { id: 12345 }, (data: unknown) => {
  console.log("Status recebido do servidor:", data);
});

app.use(createPinia());
app.use(router);
app.use(createBootstrap()); // Important
app.mount("#app");
