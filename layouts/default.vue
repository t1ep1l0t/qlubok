<template>
  <header-component />
  <div id="page">
    <nuxt-page />
  </div>
</template>

<script>
import HeaderComponent from "~/components/header-component.vue";

export default {
  name: "default",
  components: {HeaderComponent}
}
</script>

<style scoped lang="scss">
@import "../assets/variable.scss";
</style>