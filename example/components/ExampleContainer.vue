<template>
  <div>
    <div
      class="showcase"
      v-for="exampleName in Object.keys(this.examplesData)"
      :key="exampleName"
    >
      <Example
        :exampleComponent="examplesData[exampleName].component"
        :sourceCode="examplesData[exampleName].sourceCode"
        :exampleName="exampleName"
      />
    </div>
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
