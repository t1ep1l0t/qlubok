<template>
<header class="header">
  <div class="container">
    <div class="header__inner">
      <ul class="header__list">
        <li class="header__item">
          <nuxt-link to="/">home</nuxt-link>
        </li>
        <li class="header__item">
          <nuxt-link to="/login">login</nuxt-link>
        </li>
        <li class="header__item">
          <nuxt-link to="/register">register</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "header-component"
}
</script>

<style scoped>

</style>