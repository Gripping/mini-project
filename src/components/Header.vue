<template>
    <header class="nav-header">
      <router-link class="nav-header__logo" to="/"><img src="/static/img/logo.svg" alt="Classy logo"></router-link>

      <ul class="user-links">
        <li class="user-links__account"><router-link to=""><img src="/static/img/icons/login.svg" alt="">Login</router-link></li>
        <li class="user-links__cart"><router-link to=""><img src="/static/img/icons/cart.svg" alt="">Cart</router-link></li>
        <li class="user-links__search"><router-link to=""><img src="/static/img/icons/search.svg" alt=""></router-link></li>
        <li class="user-links__menu">
            <div @click.prevent='activateNav()' class="hamburger">
                <div class="hamburger__patty"></div>
                <div class="hamburger__patty"></div>
                <div class="hamburger__patty"></div>
            </div>
        </li>
      </ul>
      <nav class="main-nav">
        <router-link class="main-nav__logo" v-on:click.native="activateNav" to="/"><img src="/static/img/logo.svg" alt="Classy logo"></router-link>

        <ul class="main-nav__links">
          <li class="nav-link"><router-link v-on:click.native="activateNav" class="nav-link__collection" to="/CategoryPage">Collection</router-link></li>
          <li class="nav-link"><router-link v-on:click.native="activateNav" class="nav-link__contact" to="/ContactPage">Contact</router-link></li>
          <li class="nav-link"><router-link v-on:click.native="activateNav" class="nav-link__about" to="">About</router-link></li>
          <li class="nav-link"><router-link v-on:click.native="activateNav" class="nav-link__blog" to="">Blog</router-link></li>
        </ul>
      </nav>
    </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  mounted: function() {
    this.changeMenu();
  },
  watch: {
    '$route': function () {
      this.changeMenu();
    }
  },
  methods: {
    changeMenu: function() {
      var x = document.querySelector('.nav-header');
      if(this.$route.name == 'SinglePage'){
        x.className += ' single-page';
      }else{
        if(x.classList.contains('single-page')){
          x.classList.remove('single-page');
        }
      }
    },
    activateNav: function() {
      let nav = document.querySelector('.main-nav');
      let hamburger = document.querySelector('.hamburger');
      let body = document.body;
      if(!document.querySelector('.hamburger').classList.contains('nav--active')){
        nav.classList += ' nav--active';
        hamburger.classList += ' nav--active';
        body.classList += ' nav--active';
      }else{
        nav.classList.remove('nav--active');
        hamburger.classList.remove('nav--active');
        body.classList.remove('nav--active');
      }
    }
  }
}
</script>
<style lang="scss">

</style>
