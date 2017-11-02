import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

// service worker
if (navigator.serviceWorker && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('/service-worker.js');
}
