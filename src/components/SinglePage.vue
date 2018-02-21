<template>
    <div class="wrapper">
      <section class="product-banner">
          <img src="/static/img/banners/50OffBanner.jpg" alt="">
      </section>
      <section class="product-container container">
        <div class="product-image">
          <div class="product-image__thumbnails">
            <slick class="slider-nav" ref="slick" :options="slickNav">
              <img v-for="(item, index) in product.pictures" :src="item">
            </slick>
          </div>
          <div class="product-image__img">
            <slick class="slider-for" ref="slick" :options="slickFor">
              <img v-for="(item, index) in product.pictures" :src="item">
            </slick>
          </div>
        </div>
        <article class="product">
          <div class="product-info">
            <h1 class="product-info__title">{{ product.title }}</h1>
            <div class="product-info__price">
              <p class="price">{{ product.price }}</p>
              <p class="shipping"><img src="/static/img/icons/globe.svg" alt="">Free Shipping Worldwide</p>
            </div>

            <form class="product-options">
                <v-select v-model="selected" :placeholder="product.color[0]" :options="product.color"></v-select>
                <v-select v-model="selected" placeholder="Select Size" :options="product.size"></v-select>
                <button class="product-options__submit" type="submit" name="button"><img src="/static/img/icons/fullWhite-cart.svg" alt="">Add to bag</button>
                <router-link class="product-options__save" to="">Save for later</router-link>
            </form>

          </div>
          <div class="product-tabs">
            <ol class="product-tabs__list">
              <li class="tabs-list__item item--active"><a href="" @click.prevent="getTab('description', $event)">Description</a></li>
              <li class="tabs-list__item"><a href="" @click.prevent="getTab('brand', $event)">Brand</a></li>
              <li class="tabs-list__item"><a href="" @click.prevent="getTab('info', $event)">Info</a></li>
            </ol>
            <div class="product-tabs__content">
              <p>{{ tab }}</p>
            </div>
          </div>
        </article>
        <div class="product-flavour container">
          <h2 class="product-flavour__title">Sharpen your look</h2>
          <p class="product-flavour__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
      </section>
      <div class="product-extra">
        <div class="product-extra__item">
          <img class="extra-img" src="/static/img/products/AdeliaDressCut1.jpg" alt="">
          <div class="extra-content">
            <h3 class="extra-content__title">Extraordinary Design</h3>
            <p class="extra-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <ol class="extra-content__list">
              <li class="content-list__item"><span><img src="/static/img/icons/glasses.svg" alt=""></span>Elegant style</li>
              <li class="content-list__item"><span><img src="/static/img/icons/coat-hanger.svg" alt=""></span>Elegant style</li>
              <li class="content-list__item"><span><img src="/static/img/icons/bowtie.svg" alt=""></span>Elegant style</li>
            </ol>
            <router-link class="extra-content__button" to="">Read more</router-link>
          </div>
        </div>
        <div class="product-extra__item item--reversed item--lightblue">
          <img class="extra-img" src="/static/img/products/AdeliaDressCut2.jpg" alt="">
          <div class="extra-content">
            <h3 class="extra-content__title">Extraordinary Design</h3>
            <p class="extra-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <ol class="extra-content__list">
              <li class="content-list__item"><span><img src="/static/img/icons/glasses.svg" alt=""></span>Elegant style</li>
              <li class="content-list__item"><span><img src="/static/img/icons/coat-hanger.svg" alt=""></span>Elegant style</li>
              <li class="content-list__item"><span><img src="/static/img/icons/bowtie.svg" alt=""></span>Elegant style</li>
            </ol>
            <router-link class="extra-content__button" to="">Read more</router-link>
          </div>
        </div>
      </div>
      <div class="cta-banner">
        <img class="cta-banner__img" src="/static/img/banners/BigDiscountsImg.jpg" alt="">
        <router-link class="cta-banner__button" to="">Big discounts</router-link>
      </div>
    </div>
</template>
<script>
import vSelect from 'vue-select'
import Slick from 'vue-slick'
import axios from 'axios'

export default {
  name: 'SinglePage',
  components: { vSelect, Slick },
  data () {
    return {
      product: '',
      tab: '',
      slickNav: {
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        vertical: true,
        asNavFor: '.slider-for',
        arrows: true
      },
      slickFor: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
      }
    }
  },
  created: function() {
    let id = this.$route.params.id;
    this.FetchProductById(id);
  },
  watch: {
    '$route.params.id': function (id) {
      this.FetchProductById(id);
    }
  },
  // All slick methods can be used too, example here
  methods: {
      FetchProductById: function(id) {
        axios
          .get("/static/products.json")
          .then(response => {
            this.product = response.data.filter(product => product.id == id)[0];
            this.getTab('description');
          })
          .catch(error => {
            console.log(error);
          });
      },
      getTab: function(string, event) {
        if(string == 'description') {
          this.tab = this.product.description;
        }else if (string == 'brand') {
          this.tab = this.product.brand;
        }else if (string == 'info') {
          this.tab = this.product.info;
        }
        if(event) {
          if(!event.path[1].classList.contains('item--active')) {
            document.querySelector(".item--active").classList.remove("item--active");
            event.path[1].className += " item--active";
          }
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
<style lang="scss" scoped>
  @import '.././assets/styles/base';
  .product-image {
    justify-content: center;
    align-items: center;

    .product-image__img {

      .slider-nav {
        position: relative;
      }

      .slider-for {
        position: relative;
        width: 100%;
        max-height: 660px;
        overflow: hidden;
      }

      .slick-list {
        overflow: hidden;
        height: 100%;

        .slick-track {
          display: flex;
          flex-direction: row;
          .slick-slide {
            z-index: 1 !important;
          }
        }
      }

      .slick-list {
        overflow: hidden;
        width: 100%;
      }

      .slick-dots {
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
        list-style: none;
        padding: 0px;
        margin: 0px;

        li {
          float: left;
        }
      }

      .slick-arrow {
        position: absolute;
        z-index: 20;
        top: 50% !important;
        transform: translateY(-50%);

        &.slick-prev {
          left: 20px;
          top: 0px;
        }
        &.slick-next {
          right: 20px;
          top: 0px;
        }
      }
    }

    .product-image__thumbnails {
      .slider-nav {

        .slick-list {
          overflow: hidden;
          width: 100%;
          padding: 0px !important;

          .slick-slide {
            margin: 15px 0px;
            user-select: none;
            cursor: pointer;
            transition: all .3s ease-in-out;

            &.slick-current{
                -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.56);
                -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.56);
                box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.56);
            }

            &:nth-of-type(1) {
              margin: 0px;
            }
          }
        }
      }
    }
  }

</style>
