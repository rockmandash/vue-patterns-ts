<template>
  <WindowScroll v-slot="{ x, y }" :debounceWait="1000">
    <code v-text="{ x, y }" />
  </WindowScroll>
</template>

<script lang="ts">
import Vue from 'vue';
import { WindowScroll } from 'vue-patterns-ts';

export default Vue.extend({
  components: {
    WindowScroll
  }
});
</script>
