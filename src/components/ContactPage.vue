<template>
  <div class="wrapper">
    <section class="contact-page">
      <div class="contact-page__banner">
        <img class="page-banner__img" src="/static/img/collections/headerImage.jpg" alt="">
        <h1 class="page-banner__title">Contact us</h1>
      </div>
      <form class="contact-form" @submit.prevent="validateBeforeSubmit">
        <div class="contact-form__border">
          <h3 class="contact-form__title">Write us a message</h3>
          <p class="contact-form__text">And we'll get back to you!</p>
          <div class="contact-form__name">
            <label class="contact-first_name" for="first_name">
              <input v-validate="'required|aplha'" :class="{'input': true, 'is-danger': errors.has('first_name') }" name="first_name" type="text" placeholder="First name">
              <span v-show="errors.has('first_name')" class="help is-danger">First name is a required field</span>
            </label>

            <label class="contact-last_name" for="first_name">
              <input v-validate="'required|aplha'" :class="{'input': true, 'is-danger': errors.has('first_name') }" name="first_name" type="text" placeholder="Last name">
              <span v-show="errors.has('first_name')" class="help is-danger">Last name is a required field</span>
            </label>
          </div>

          <div class="contact-form__contact">
            <label class="contact-email" for="first_name">
              <input v-validate="'required|aplha'" :class="{'input': true, 'is-danger': errors.has('first_name') }" name="first_name" type="text" placeholder="Email">
              <span v-show="errors.has('first_name')" class="help is-danger">Email is a required field</span>
            </label>

            <label class="contact-phone" for="first_name">
              <input v-validate="'required|aplha'" :class="{'input': true, 'is-danger': errors.has('first_name') }" name="first_name" type="text" placeholder="Phone">
              <span v-show="errors.has('first_name')" class="help is-danger">Phone is a required field</span>
            </label>
          </div>

          <label class="contact-form__message">
            <textarea name="textarea" placeholder="Write your message here"></textarea>
          </label>

          <button class="primary-button is-primary" type="submit">Send message</button>
        </div>
      </form>
    </section>
    <Newsletter class="container"></Newsletter>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Newsletter from '@/components/newsletter'
Vue.use(VeeValidate);

export default {
  name: "CategoryPage",
  components: {
    "Newsletter": Newsletter
  },
  data() {
    return {
      email: '',
      first_name: '',
      last_name: '',
      phone: ''
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('From Submitted!');
          return;
        }
      });
    }
  }
}
</script>

<style scoped>
  .container {
    margin-bottom: 0px;
  }
</style>
