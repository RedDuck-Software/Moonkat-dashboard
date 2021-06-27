


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "@/assets/styles/style.css";
import "@/assets/styles/custom__style.css";
import "@/assets/styles/responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@popperjs/core";

import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";


// using default options
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

import VueSocialSharing from 'vue-social-sharing';
import PortalVue from 'portal-vue';
import VueLoading from 'vuejs-loading-plugin';


library.add(faUserSecret);
library.add(faFontAwesome);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSocialSharing);
Vue.use(PortalVue)
Vue.use(VueLoading, {dark: true});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  render: h => h(App),
  router,
  store,
});


