import { apiKey, baseUrl } from "../config/variable";
import Vue from "vue";
import axios from "axios";

const config =   {
    baseURL: baseUrl,
    method: "get",
    headers:{
      "X-Api-Key" : apiKey
    },
    params: {
      country : "us"
    }
}

const _axios = axios.create(config);

_axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
_axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


Plugin.install = function(Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
      axios: {
        get() {
          return _axios;
        }
      },
      $axios: {
        get() {
          return _axios;
        }
      },
    });
};
  
  
Vue.use(Plugin);

export default _axios;