import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.scss";
import { createPinia } from "pinia";
import { router } from "./router";
import Notifications from "@kyvg/vue3-notification";

import Input from "@/components/Form/Input.vue";

const app = createApp(App);

app.use(createPinia());
app.use(Notifications);

app.use(router);

//components

app.component("Input", Input);

app.mount("#app");
