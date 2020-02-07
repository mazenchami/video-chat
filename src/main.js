import Vue from 'vue';
import WebRTC from 'vue-webrtc';
import * as io from 'socket.io-client';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

window.io = io;

Vue.use(VueMaterial);
Vue.use(WebRTC);

Vue.config.productionTip = false;

/* eslint arrow-parens: 0 */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
