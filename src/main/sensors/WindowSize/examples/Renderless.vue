<template>
  <div>
    <WindowSize @resize="resize" />
    <code v-text="$data" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { WindowSize, WindowSizeEmittedDataType } from 'vue-patterns-ts';

export default Vue.extend({
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  methods: {
    resize({ width, height }: WindowSizeEmittedDataType) {
      this.width = width;
      this.height = height;
    }
  },
  components: {
    WindowSize
  }
});
</script>
