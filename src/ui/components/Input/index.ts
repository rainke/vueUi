import Input from './Input.vue';
import { VueConstructor } from 'vue';

const InputPlugin = {
  install(Vue: VueConstructor) {
    Vue.component('VInput', Input);
  }
};

export default InputPlugin;
export { Input };

