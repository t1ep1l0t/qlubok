<template>
  <form class="form">
    <div class="form__head">
      <h2 class="form__title">Регистрация</h2>
      <p class="form__desc">
        Создавай красивые визитки для себя и своего бизнеса за пару минут!
      </p>
    </div>
    <div class="form__data">
      <input type="email"
             class="form__input"
             v-model="mail"
             placeholder="Электронная почта"
             @input="check_form"
      >
      <input type="password"
             class="form__input"
             v-model="password"
             placeholder="Пароль"
             @input="check_form"
      >
      <input type="password"
             class="form__input"
             v-model="password_repeat"
             placeholder="Повторите пароль"
             @input="check_form"
      >
    </div>
    <div class="form__links">
      <button class="form__button" :disabled="!form">
        <span class="form__button__inner">
          Зарегистрироваться
        </span>
      </button>
      <span class="form__link">
      У вас уже есть аккаунт? <nuxt-link to="/login">Войти</nuxt-link>
    </span>
    </div>
  </form>
</template>

<script setup>
useHead({
  title: 'QLUBOK | SIGN UP'
})
definePageMeta({
  layout: "auth",
});
</script>

<script>
export default {
  name: "register",
  data () {
    return {
      mail: '',
      password: '',
      password_repeat: '',
      form: false
    }
  },
  methods: {
    check_form () {
      if (this.mail && this.password && this.password_repeat) {
        this.form = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variable.scss";

.form {
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  &__head {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }

  &__title {
    font-family: $mts-b;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  &__desc {
    font-family: $gilroy-sb;
    font-size: 14px;
    line-height: 135%;
    color: #CCCCCC;
    max-width: 355px;
  }

  &__data {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  &__input {
    width: 100%;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #A3A1AF;
    padding: 10px 5px;
    font-family: $gilroy-sb;
    font-size: 14px;
    line-height: 150%;
    transition: all .3s ease;
    color: #FFFFFF;

    &:hover {
      border-color: #30A3FE;
    }

    &:focus {
      border-color: #8A57E3;
    }
  }

  &__links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  &__button {
    width: 100%;
    border-radius: 7px;
    color: #FFFFFF;
    background: $gradient;
    padding: 2px;
    transition: all .3s ease;

    &__inner {
      background-color: #000;
      border-radius: 6px;
      display: block;
      width: 100%;
      height: 100%;
      padding: 16px 0;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      font-family: $gilroy-b;
      color: inherit;
      transition: background-color .3s ease;
    }

    &:hover {
      .form__button__inner {
        background-color: transparent;
      }
    }

    &:disabled {
      background: #FFFFFF;
      color: #000000;
      cursor: default;

      .form__button__inner {
        background-color: transparent;
      }
    }
  }

  &__link {
    font-size: 14px;
    line-height: 16px;
    color: #C8C8C8;
    font-family: $gilroy-sb;

    a {
      transition: all .3s ease;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: $gradient;
    }
  }
}
</style>