import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CreateUser from "./views/CreateUser.vue";

const app = createApp(CreateUser);
app.use(router);
app.mount("#app");
