<template>
  <div class="wrapper">
      <section class="banner-slider">
        <slick class="slick-for" v-model="test" ref="slick" :options="slickOptions">
          <div class="banner-slider__slide">
            <img class="banner-img" src="/static/img/slider/banner-1.jpg" alt="">
            <a class="banner-button primary-button" href="#">Learn more about great deals</a>
          </div>
          <div class="banner-slider__slide">
            <img class="banner-img" src="/static/img/slider/banner-2.jpg" alt="">
            <a class="banner-button primary-button" href="#">Learn more about great deals</a>
          </div>
          <div class="banner-slider__slide">
            <img class="banner-img" src="/static/img/slider/banner-3.jpg" alt="">
            <a class="banner-button primary-button" href="#">Learn more about great deals</a>
          </div>
          <div class="banner-slider__slide">
            <img class="banner-img" src="/static/img/slider/banner-4.jpg" alt="">
            <a class="banner-button primary-button" href="#">Learn more about great deals</a>
          </div>
        </slick>
      </section>

      <section class="cta-section container">
              <div class="cta-section__lookbook">
                  <h3 class="lookbook-title"><span class="uppercase">Men's</span>lookbook</h3>
                  <img class="lookbook-img" src="/static/img/menLookbook.jpg" alt="">
              </div>
              <div class="cta-section__newsletter">
                  <form class="newsletter-form">
                      <span class="icon-circle">
                        <img src="/static/img/icons/mail.png" alt="">
                      </span>
                      <p class="title">Get our newsletter</p>
                      <p>Join our maillist to recieve special discounts</p>
                      <input type="email" name="" value="" placeholder="enter your email" />
                      <input type="submit" class="secondary-button" value="Subscribe" />
                  </form>
              </div>
              <div class="cta-section__lookbook">
                  <h3 class="lookbook-title"><span class="uppercase">Women's</span>lookbook</h3>
                  <img class="lookbook-img" src="/static/img/womenLookbook.jpg" alt="">
              </div>
      </section>

      <section class="top-brands container">
          <h1 class="top-brands__title">Top brands</h1>
          <div class="brands-slider">
            <slick class="slick-brands" ref="slick" :options="slickBrands">
              <img class="brands-slider__slide" src="/static/img/brands/pull-bear.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/michaelkors.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/mango.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/missguided.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/monki.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/pull-bear.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/michaelkors.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/mango.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/missguided.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/monki.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/pull-bear.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/michaelkors.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/mango.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/missguided.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/monki.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/pull-bear.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/michaelkors.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/mango.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/missguided.png" alt="">
              <img class="brands-slider__slide" src="/static/img/brands/monki.png" alt="">
            </slick>
          </div>
      </section>

      <section class="cta-sales container">
          <a class="cta-sales__big" href="#"><img src="/static/img/banners/mustHaveForHer.jpg" alt=""></a>
          <a class="cta-sales__small" href="#"><img src="/static/img/banners/75Off.jpg" alt=""></a>
          <a class="cta-sales__small" href="#"><img src="/static/img/banners/newSummerStyle.jpg" alt=""></a>
      </section>

      <section class="featured-products container">
          <div class="featured-products__controller">
              <a href='#' @click.prevent='FetchNewArrivals($event)' class="product__controller controller--active" to="">New arrivals</a>
              <a href='#' @click.prevent='FetchBestSellers($event)' class="product__controller" to="">Top sellers</a>
              <a href='#' @click.prevent='FetchFeatured($event)' class="product__controller" to="">Featured</a>
          </div>
          <div class="products-list">
              <article v-for="product in products" class="products-list__product">
                  <div class="product-img">
                    <div class="isOnSale" :class="{ active: product.isOnSale }" >
                      Sale
                    </div>
                    <router-link :to="'/SinglePage/' + product.id">
                    <img :src="product.src" alt="">
                    </router-link>
                    <div class="actions-secondary">
                      <router-link :to="'/SinglePage/' + product.id"><span><img src="/static/img/icons/quick-view.svg" alt=""></span>Quick view</router-link>
                      <router-link to=""><span><img src="/static/img/icons/save.svg" alt=""></span>Save</router-link>
                    </div>
                  </div>
                  <h1 class="product-title">{{ product.title }}</h1>
                  <div class="actions-main">
                      <p class="price">{{ product.price }}</p>
                      <a class="addToCart" href="#"><img src="/static/img/icons/black-cart.svg" alt=""><img class="white" src="/static/img/icons/fullWhite-cart.svg" alt="">Add to bag</a>
                  </div>
              </article>
          </div>
      </section>

      <section class="sale-collection">
          <img class="sale-collection__banner" src="/static/img/banners/25OffBG.jpg" alt="">
          <h1 class="sale-collection__title">All summer <span><img src="/static/img/banners/Get25off.png" alt=""></span>collection</h1>
      </section>

      <section class="customer-reviews">
        <slick class="slick-reviews" ref="slick" :options="slickReviews">
          <div class="customer-reviews__slide">
              <img class="customer-img" src="/static/img/customer.png" alt="">
              <p class="customer-name">Jane Smith</p>
              <p class="customer-description">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
          </div>
          <div class="customer-reviews__slide">
              <img class="customer-img" src="/static/img/customer.png" alt="">
              <p class="customer-name">Jane Smith</p>
              <p class="customer-description">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
          </div>
          <div class="customer-reviews__slide">
              <img class="customer-img" src="/static/img/customer.png" alt="">
              <p class="customer-name">Jane Smith</p>
              <p class="customer-description">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
          </div>
        </slick>
      </section>

  </div>
</template>

<script>
import Slick from 'vue-slick'
import axios from 'axios'

export default {
  name: 'FrontPage',
  components: { Slick },
  data () {
    return {
        products: '',
        collection: '',
        test: '',
        slickOptions: {
          slidesToShow: 1,
          infinite: true,
          arrows: true,
          draggable: true,
          swipe: true,
          dots: true,
          autoplay: true,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false
              }
            }
          ]
        },
        slickBrands: {
          slidesToShow: 5,
          slidesToScroll: 5,
          Infinite: true,
          arrows: false,
          draggable: true,
          swipe: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        },
        slickReviews: {
          slidesToShow: 1,
          slidesToScroll: 1,
          Infinite: true,
          arrows: false,
          draggable: true,
          swipe: true,
          dots: true
        }
    }
  },
  created: function() {
    this.FetchProducts();
  },
  watch: {
    'this.$refs.slick.onBeforeChange': function(event) {

    }
  },
  // All slick methods can be used too, example here
  methods: {
      FetchProducts: function() {
        axios
          .get("/static/products.json")
          .then(response => {
            this.products = response.data.filter(product => product.date).slice(0, 4);
            this.collection = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      FetchNewArrivals: function(event) {
        if(event) {
          this.changeStyle(event);
        }
        this.products = this.collection.filter(product => product.date).slice(0, 4);
      },
      FetchBestSellers: function(event) {
        if(event) {
          this.changeStyle(event);
        }
        this.products = this.collection.filter(product => product.topseller == true).slice(0, 4);
      },
      FetchFeatured: function(event) {
        if(event) {
          this.changeStyle(event);
        }
        this.products = this.collection.filter(product => product.featured == true).slice(0, 4);
      },
      changeStyle: function(el) {
        if(!el.target.classList.contains('controller--active')) {
          document.querySelector(".controller--active").classList.remove("controller--active");
          el.target.className += " controller--active";
        }
      },
      next() {
          this.$refs.slick.next();
      },
      prev() {
          this.$refs.slick.prev();
      },
      reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick.reSlick();
        });
      }
  }
}
</script>
<style lang="scss">

</style>
