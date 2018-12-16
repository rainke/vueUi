import FormItem from '../Form/FormItem.vue';
import { VueConstructor } from 'vue';

const FormItemPlugin = {
  install(Vue: VueConstructor) {
    Vue.component('VFormItem', FormItem);
  }
};

export default FormItemPlugin;
export { FormItem };

