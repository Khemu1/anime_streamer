import { createApp } from "vue";
import { router } from "./router";
import "@/assets/index.css";
import "@/index.css";
import App from "./App.vue";

const app = createApp(App);

// Apply custom preset with PrimeVue

app.use(router);

app.mount("#app");
