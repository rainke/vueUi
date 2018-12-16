import Form from './Form.vue';
import { VueConstructor } from 'vue';

const FormPlugin = {
  install(Vue: VueConstructor) {
    Vue.component('VForm', Form);
  }
};

export default FormPlugin;
export { Form };

