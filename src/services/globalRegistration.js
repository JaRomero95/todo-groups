/**
 * https://vuejs.org/v2/guide/components-registration.html
 */
import Vue from 'vue';

const requireComponent = require.context('@/components/app', false, /App[A-Z]\w+\.(vue|js)$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');

  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});
