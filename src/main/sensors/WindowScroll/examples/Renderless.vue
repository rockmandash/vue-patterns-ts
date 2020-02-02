<template>
  <div>
    <WindowScroll @scroll="scroll" />
    <code v-text="$data" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { WindowScroll, WindowScrollEmittedDataType } from 'vue-patterns-ts';

export default Vue.extend({
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  methods: {
    scroll({ x, y }: WindowScrollEmittedDataType) {
      this.x = x;
      this.y = y;
    }
  },
  components: {
    WindowScroll
  }
});
</script>
