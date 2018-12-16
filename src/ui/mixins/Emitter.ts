import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Emitter extends Vue {
  public dispatch(componentName: string, eventName: string, params?: any ) {
    let parent = this.$parent || this.$root;
    let name = parent.$options.name;
    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent;
      if (parent) {
        name = parent.$options.name;
      }
    }
    if (parent) {
      parent.$emit(eventName, params);
    }
  }
}

