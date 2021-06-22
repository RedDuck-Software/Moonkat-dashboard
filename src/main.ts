import "@/assets/styles/style.css";
import "@/assets/styles/custom__style.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret);
library.add(faFontAwesome);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  render: h => h(App),
  router,
});
