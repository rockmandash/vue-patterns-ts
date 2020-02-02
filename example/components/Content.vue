<template>
  <div class="nes-container with-title is-rounded">
    <p class="title">
      {{
        this.$route.params.category &&
          this.$route.params.category + ' -> ' + this.$route.params.utilName
      }}
    </p>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.nes-container {
  margin-top: 13px;
  margin-left: 420px;
  width: calc(100vw - 430px);
}
</style>
