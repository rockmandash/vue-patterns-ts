<template>
  <Toggle v-slot="{ on, toggle }">
    <section class="nes-container with-title">
      <h3 class="title">{{ exampleName }}</h3>
      <RenderComponent :componentFunction="exampleComponent" />
      <button type="button" class="nes-btn is-primary showcode" @click="toggle">
        &lt;&gt;
      </button>
    </section>

    <section class="samplecode" v-show="on">
      <button type="button" class="nes-btn copycode" v-clipboard="sourceCode">
        copy
      </button>
      <pre v-highlightjs="sourceCode"><code class="xml"></code></pre>
    </section>
  </Toggle>
</template>

<script lang="ts">
import Vue from 'vue';
import { Log, Toggle } from 'vue-patterns-ts';
import RenderComponent from './RenderComponent';

export default Vue.extend({
  props: {
    exampleComponent: Function,
    exampleName: String,
    sourceCode: String
  },
  components: {
    Log,
    Toggle,
    RenderComponent
  }
});
</script>

<style lang="scss" scoped>
.showcode {
  position: absolute;
  font-size: 12px;
  bottom: 0px;
  right: -4px;
}

.samplecode {
  position: relative;
}

.copycode {
  position: absolute;
  font-size: 12px;
  top: 0;
  right: 0px;
}

.code {
  font-size: 13px;
  line-height: 1.5;
  padding: 1.5rem;
}
</style>
