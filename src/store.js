import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);

/** modules */
import ReadLater from "@/modules/ReadLater.js";
import Navigation from "@/modules/Navigation.js";

const store = new Vuex.Store({
    modules:{
        ReadLater : ReadLater,
        Navigation : Navigation
    }
})

export default store;