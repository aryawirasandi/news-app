import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "./plugins/axios";
import global from "./plugins/helper";
import VueRouter from "vue-router";
import router from "@/routes/index.js";

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.mixin(global);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
