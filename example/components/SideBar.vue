<template>
  <div class="nes-container is-rounded">
    <p>Navigation</p>
    <div class="lists">
      <ul class="nes-list is-circle">
        <li>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div v-for="category in Object.keys(meta)" :key="category">
      <p>{{ category }}</p>
      <div class="lists">
        <ul class="nes-list is-circle">
          <li v-for="utilName in Object.keys(meta[category])" :key="utilName">
            <nuxt-link :to="'/' + category + '/' + utilName">
              {{ utilName }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { meta } from '@/components/auto-generated/meta';

export default Vue.extend({
  data() {
    return {
      meta
    };
  }
});
</script>

<style lang="scss" scoped>
.nes-container {
  position: fixed;
  top: 90px;
  left: 10px;
  width: 390px;
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
