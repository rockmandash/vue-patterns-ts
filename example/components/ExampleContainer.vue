<template>
  <div>
    <section
      class="showcase"
      v-for="exampleName in Object.keys(this.examplesData)"
      :key="exampleName"
    >
      <Example
        :exampleComponent="examplesData[exampleName].component"
        :sourceCode="examplesData[exampleName].sourceCode"
        :exampleName="exampleName"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Example from './Example.vue';

export default Vue.extend({
  props: {
    examplesData: Object
  },
  components: {
    Example
  }
});
</script>

<style lang="scss" scoped>
.showcase {
  margin-top: 2.5rem;

  &:first-child {
    margin-top: 0;
  }
}
</style>
