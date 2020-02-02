<template>
  <div>
    <PageTitle />
    <SideBar />
    <Content />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBar from '@/components/SideBar.vue';
import PageTitle from '@/components/PageTitle.vue';
import Content from '@/components/Content.vue';

export default Vue.extend({
  components: {
    SideBar,
    PageTitle,
    Content
  }
});
</script>
