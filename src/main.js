import { createApp } from "vue";
import axios from "axios";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
