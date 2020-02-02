<template>
  <Toggle v-slot="{ on, toggle }">
    <div>
      <p>{{ on }}</p>

      <button @click="toggle">toggle</button>

      <!-- Add in logging -->
      <Log :value="on" :format="val => `Count is: ${val}`" />
    </div>
  </Toggle>
</template>

<script lang="ts">
import Vue from 'vue';
import { Log, Toggle } from 'vue-patterns-ts';

export default Vue.extend({
  components: {
    Log,
    Toggle
  }
});
</script>
