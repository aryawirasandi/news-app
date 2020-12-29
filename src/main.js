import Vue from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify';
import "@/plugins/axios";
import global from "@/plugins/helper";
import router from "@/routes/index.js";
import store from "@/store.js";
Vue.config.productionTip = false


/** Global function that use to place function at all component*/
Vue.mixin(global);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
