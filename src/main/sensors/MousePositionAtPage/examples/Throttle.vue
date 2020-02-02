<template>
  <MousePositionAtPage v-slot="{ x, y }" :throttleWait="1000">
    <code v-text="{ x, y }" />
  </MousePositionAtPage>
</template>

<script lang="ts">
import Vue from 'vue';
import { MousePositionAtPage } from 'vue-patterns-ts';

export default Vue.extend({
  components: {
    MousePositionAtPage
  }
});
</script>
