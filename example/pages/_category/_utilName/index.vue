<template>
  <ExampleContainer :examplesData="examplesData" />
</template>

<script>
import Vue from 'vue';
import {
  meta,
  metaWithoutCategory,
  allUtilNames,
  allCategoryNames
} from '@/components/auto-generated/meta';
import ExampleContainer from '@/components/ExampleContainer.vue';

export default Vue.extend({
  validate({ params }) {
    const { category, utilName } = params;
    return (
      allUtilNames.includes(utilName) && allCategoryNames.includes(category)
    );
  },
  data() {
    return {
      examplesData:
        meta[this.$route.params.category][this.$route.params.utilName]
    };
  },
  components: {
    ExampleContainer
  }
});
</script>
