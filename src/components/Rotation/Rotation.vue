<template>
  <div id="Rotation">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/1.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/2.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/3.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/4.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/5.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/6.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/7.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            class="swiperItem"
            src="../../common/images/rotation/8.webp"
            alt=""
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
      mounted(){
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
      }
  }
</script>

<style lang="stylus">
#Rotation
  .swiper-container
     width 100%
     height 100%
     .swiper-wrapper
        display flex
        width 100%
        height 100%
        .swiper-slide
            height 100%
            img
                width 750px
                height 370px
     .swiper-pagination
        >span.swiper-pagination-bullet 
            width 40px
            height 4px
            z-index -1
        >span.swiper-pagination-bullet-active
            background #fff
</style>
