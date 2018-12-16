<template>
  <div class="home">
    <VForm>
      <VFormItem label="custom label" ref="formitem" :rules="rules.test">
        <VInput type="text" v-model="txt" />
      </VFormItem>
    </VForm>
    <div>{{txt}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Mixins } from 'vue-property-decorator';
import Emitter from '@/ui/mixins/Emitter';

@Component({
  name: 'Home'
})
export default class Home extends Mixins(Emitter) {
  public static componentName: string = 'Home';
  public txt: string = '';
  public rules = {
    test: {
      pattern: /^\d+$/
    }
  };

  @Emit() private handleInput() {
    // this.$refs.formitem.$emit('on-form-change');
    this.dispatch('VFormItem', 'on-form-change');
  }
}
</script>
