<template>
  <div>
    <label>{{label}}:</label>
    <div>
      <slot></slot>
      <div class="error">{{error}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Inject, Prop, Emit} from 'vue-property-decorator';

@Component({
  name: 'VFormItem'
})
export default class FormItem extends Vue {
  private error: string = '';
  @Prop({default: 'label'}) private label!: string;
  @Prop({type: [Array, Object], default: []}) private rules!: any;
  @Inject() private form!: string;
  private validate(v: string) {
    if (this.rules.pattern) {
      if (!v.match(this.rules.pattern)) {
        this.error = 'error';
      } else {
        this.error = '';
      }
    }
  }
  private onFormChanged(v: string) {
    this.validate(v);
  }
  private mounted() {
    this.$on('on-form-change', this.onFormChanged);
  }
  private beforeDestroy() {
    this.$off('on-form-change', this.onFormChanged);
  }
}
</script>

