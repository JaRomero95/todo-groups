import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/registerServiceWorker';
import con from '@/services/database/connection';

console.log('con :', con);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
