import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from '@/App.vue';
import router from '@/services/router';
import store from '@/services/store';
import '@/registerServiceWorker';
import '@/services/globalRegistration';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
