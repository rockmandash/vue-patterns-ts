<template>
  <div>
    <MousePositionAtPage @mousemove="mousemove" />
    <code v-text="$data" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  MousePositionAtPage,
  MousePositionAtPageEmittedDataType
} from 'vue-patterns-ts';

export default Vue.extend({
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  methods: {
    mousemove({ x, y }: MousePositionAtPageEmittedDataType) {
      this.x = x;
      this.y = y;
    }
  },
  components: {
    MousePositionAtPage
  }
});
</script>
