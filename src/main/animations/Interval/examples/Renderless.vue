<template>
  <Toggle v-slot="{ on, setOn, setOff }">
    <div>
      <Interval :pause="on" :delay="100" @tick="tick" />
      <code v-text="{ ticks }" />

      <button @click="setOff">Start</button>
      <button @click="setOn">Stop</button>
    </div>
  </Toggle>
</template>

<script lang="ts">
import Vue from 'vue';
import { Interval, IntervalEmittedDataType, Toggle } from 'vue-patterns-ts';

export default Vue.extend({
  data() {
    return {
      ticks: 0
    };
  },
  components: {
    Interval,
    Toggle
  },
  methods: {
    tick({ ticks }: IntervalEmittedDataType) {
      this.ticks = ticks;
    }
  }
});
</script>
