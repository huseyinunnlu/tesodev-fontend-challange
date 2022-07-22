import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.scss";
import { createPinia } from "pinia";
import { router } from "./router";
import i18n from "./core/plugins/i18n/i18n";
import Notifications from "@kyvg/vue3-notification";
import * as VueGoogleMaps from "vue3-google-map";

import * as validate from "./core/plugins/vee-validate/vee-validate";

import { Form } from "vee-validate";
import Input from "@/components/Form/Input.vue";

const app = createApp(App);

app.use(createPinia());
app.use(Notifications);
app.use(VueGoogleMaps);

app.use(validate);
app.use(i18n);
app.use(router);

//components

app.component("Input", Input);
app.component("Form", Form);

app.mount("#app");
