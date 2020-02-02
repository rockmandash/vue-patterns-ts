<template>
  <div>
    <WindowEvent event="mousemove" @fired="mousemove" :throttleWait="1000" />
    <code v-text="$data" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { WindowEvent } from 'vue-patterns-ts';

export default Vue.extend({
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  components: {
    WindowEvent
  },
  methods: {
    mousemove(event: MouseEvent) {
      this.x = event.pageX;
      this.y = event.pageY;
    }
  }
});
</script>
