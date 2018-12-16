<template>
  <form>
    <slot></slot>
  </form>
</template>
<script lang="ts">
import {Vue, Component, Provide, Emit} from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  @Provide() private form = this;

  @Emit() private validate() {}
}
</script>

