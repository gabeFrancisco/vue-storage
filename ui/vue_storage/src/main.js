import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/main.css";
import router from "./router";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
