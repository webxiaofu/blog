import Vue from "vue";
import App from "./App.vue";
import router from "../router/router";
import store from "../store/store";
import ElementUI from "element-ui";
import VueLazyload from 'vue-lazyload'
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/default/img/loadingfail.png',
  loading: '/default/img/loadingimg.png',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
