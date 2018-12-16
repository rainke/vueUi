<template>
  <span>
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)">
  </span>
</template>
<script lang="ts">
import {Vue, Component, Prop, Emit, Mixins, Watch} from 'vue-property-decorator';
import Emitter from '@/ui/mixins/Emitter';

@Component({
  name: 'VInput'
})
export default class Input extends Mixins(Emitter) {
  @Prop({default: 'text'}) private type!: string;
  @Prop() private value!: string;
  @Watch('value') private changeValue(val: string) {
    this.dispatch('VFormItem', 'on-form-change', val);
  }
}
</script>

