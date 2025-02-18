import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
// import VueAxios from "vue-axios";
import vuetify from './plugins/vuetify';
import CKEditor from 'ckeditor4-vue';


const base = axios.create({
  baseURL: "http://localhost:4000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false


// Bootstrap-vue
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use( CKEditor );

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')