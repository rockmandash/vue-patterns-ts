<template>
  <Toggle v-slot="{ on, toggle }">
    <section class="nes-container is-rounded with-title">
      <h3 class="title">{{ exampleName }}</h3>
      <component :is="exampleComponent" />

      <button type="button" class="nes-btn is-primary showcode" @click="toggle">
        &lt;&gt;
      </button>
    </section>

    <section class="samplecode" v-show="on">
      <button type="button" class="nes-btn copycode" v-clipboard="sourceCode">
        copy
      </button>
      <pre v-highlightjs><code class="xml">{{ sourceCode }}</code></pre>
    </section>
  </Toggle>
</template>

<script lang="ts">
import Vue from 'vue';
import { Log, Toggle } from 'vue-patterns-ts';

export default Vue.extend({
  props: {
    exampleComponent: Function,
    exampleName: String,
    sourceCode: String
  },
  components: {
    Log,
    Toggle
  }
});
</script>
