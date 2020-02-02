<template>
  <Toggle v-slot="{ on, setOn, setOff, toggle }">
    <div>
      <!-- state -->
      <code v-text="{ on }" />

      <!-- conditional render -->
      <div v-if="on">I'm true!</div>
      <div v-else>I'm false!</div>
      <!-- attach function -->
      <button @click="setOn">setOn</button>
      <button @click="setOff">setOff</button>
      <button @click="toggle">toggle</button>
    </div>
  </Toggle>
</template>

<script lang="ts">
import Vue from 'vue';
import { Toggle } from 'vue-patterns-ts';

export default Vue.extend({
  components: {
    Toggle
  }
});
</script>
