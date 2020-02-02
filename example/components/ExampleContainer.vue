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

    <h2 class="nes-text is-primary">Options</h2>

    <div class="nes-table-responsive">
      <table class="nes-table is-bordered is-dark">
        <tbody>
          <tr v-for="(value, name) in utilOptions" :key="name">
            <td class="nes-text is-primary">{{ name }}</td>
            <td class="nes-text is-success">
              {{ value ? value.toString() : value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import flat from 'flat';
import Example from './Example.vue';
import { exportAllUtilNameOptions } from '@/components/auto-generated/meta';

export default Vue.extend({
  data() {
    return {
      utilOptions: flat(
        // @ts-ignore
        exportAllUtilNameOptions[`${this.$route.params.utilName}Options`]
      )
    };
  },
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

h2.nes-text.is-primary {
  margin-top: 2rem;
}

.nes-table-responsive {
  position: relative;
}
</style>
