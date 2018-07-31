import "./assets/style/reset.less";
import Vue from "vue";
import App from "./App.vue";
import { getRouterData } from "./router";
import "babel-polyfill";
import "./utils/registerServiceWorker";
import Sto from "store";
{{#if_eq state 'vuex'}}
import store from "@/store";
{{/if_eq}}
import { Config } from "@/utils/";
import Router from "@/utils/routerConfig.js";

Vue.prototype.$sto = Sto;
Vue.prototype.$conf = Config;
Vue.prototype.$routeConf = Router;

Vue.config.productionTip = false;

new Vue({
  {{#if_eq state 'vuex'}}
  store,
  {{/if_eq}}
  router: getRouterData(),
  render: h => h(App)
}).$mount("#app");
