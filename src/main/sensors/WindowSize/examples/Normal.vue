<template>
  <WindowSize v-slot="{ width, height }">
    <code v-text="{ width, height }" />
  </WindowSize>
</template>

<script lang="ts">
import Vue from 'vue';
import { WindowSize } from 'vue-patterns-ts';

export default Vue.extend({
  components: {
    WindowSize
  }
});
</script>
