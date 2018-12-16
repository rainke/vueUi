import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue';
import router from './router';
import store from './store';

import Form from './ui/components/Form';
import FormItem from './ui/components/FormItem';
import Input from './ui/components/Input';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
