<template>
  <Toggle v-slot="{ on, setOn, setOff }">
    <div>
      <Interval :pause="on" :delay="100" v-slot="{ ticks }">
        <code v-text="{ ticks }" />
      </Interval>

      <button @click="setOff">Start</button>
      <button @click="setOn">Stop</button>
    </div>
  </Toggle>
</template>

<script lang="ts">
import Vue from 'vue';
import { Interval, Toggle } from 'vue-patterns-ts';

export default Vue.extend({
  components: {
    Interval,
    Toggle
  }
});
</script>
