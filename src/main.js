import Vue from 'vue';
import WebRTC from 'vue-webrtc';
import * as io from 'socket.io-client';
import App from './App.vue';
import router from './router';
import store from './store';

window.io = io;

Vue.use(WebRTC);

Vue.config.productionTip = false;

/* eslint arrow-parens: 0 */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
