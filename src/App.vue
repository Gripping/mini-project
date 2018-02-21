<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <SoMe></SoMe>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SoMe from '@/components/SoMe'
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

export default {
  name: 'App',
  components: {
      'Header': Header,
      'Footer': Footer,
      'SoMe': SoMe
  }
}
</script>

<style lang="scss">
@import './assets/styles/base';

</style>
