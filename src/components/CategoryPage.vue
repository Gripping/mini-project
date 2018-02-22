<template>
    <div class="wrapper">
      <section class="collection-banner">
        <img class="collection-banner__img" src="/static/img/collections/headerImage.jpg" alt="">
        <div class="collection-banner__text">
            <p class="cta-text">Most wanted</p>
            <h1 class="collection">New collection</h1>
            <router-link class="primary-button" to="">Browse collection</router-link>
        </div>
      </section>
      <span class="products-controller container">
        <ul class="products-controller__list">
          <span>New collection (1-32 of 58)</span>
          <li class="product-controller"><a href="#">Sort by</a></li>
          <li class="product-controller"><a href="#">Features</a></li>
          <li class="product-controller"><a href="#">Size</a></li>
          <li class="product-controller"><a href="#">Colour</a></li>
          <li class="product-controller"><a href="#">Price</a></li>
        </ul>
      </span>
      <section class="products-list container">
        <article v-for="product in products" class="products-list__product">
            <div class="product-img">
              <div class="isOnSale" :class="{ active: product.isOnSale }" >
                Sale
              </div>
              <router-link :to="'/SinglePage/' + product.id">
              <img :src="product.src" alt="">
              </router-link>
              <div class="actions-secondary">
                <a href="#"><span><img src="/static/img/icons/quick-view.svg" alt=""></span>Quick view</a>
                <a href="#"><span><img src="/static/img/icons/save.svg" alt=""></span>Save</a>
              </div>
            </div>
            <h1 class="product-title">{{ product.title }}</h1>
            <div class="actions-main">
                <p class="price">{{ product.price }}</p>
                <a class="addToCart" href="#"><img src="/static/img/icons/black-cart.svg" alt=""><img class="white" src="/static/img/icons/fullWhite-cart.svg" alt="">Add to bag</a>
            </div>
        </article>
      </section>
      <Newsletter></Newsletter>
    </div>
</template>
<script>
import Newsletter from '@/components/newsletter'
import axios from 'axios'

export default {
  name: 'CategoryPage',
  components: {
    "Newsletter": Newsletter
  },
  data () {
    return {
      products: ''
    }
  },
  created: function() {
    this.FetchProducts();
  },
  methods: {
    FetchProducts: function() {
      axios
        .get("/static/products.json")
        .then(response => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>
<style lang="scss">

</style>
