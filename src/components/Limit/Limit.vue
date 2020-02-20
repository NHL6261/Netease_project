<template>
  <div id="LimitItem">
    <div class="LimitSwiper">
      <div class="LimitHeader">
        <div class="leftContainer">
          <div class="textContainer">
            限时购:
          </div>
          <div class="TimeContainer"></div>
        </div>
        <div class="rightContainer">
          <div>更多></div>
        </div>
      </div>
      <div class="LimitList">
        <div class="imgItem">
          <img src="../../common/images/Limit/1.webp" alt="" />
          <div class="TextContainer">
            <span>¥</span>
            <span>65.9</span>&nbsp;
            <del>70</del>
          </div>
        </div>
        <div class="imgItem">
          <img src="../../common/images/Limit/2.webp" alt="" />
         <div class="TextContainer">
            <span>¥</span>
            <span>63.3</span>&nbsp;
            <del>78</del>
          </div>
        </div>
        <div class="imgItem">
          <img src="../../common/images/Limit/3.webp" alt="" />
          <div class="TextContainer">
            <span>¥</span>
            <span>345</span>&nbsp;
            <del>420</del>
          </div>
        </div>
        <div class="imgItem">
          <img src="../../common/images/Limit/4.webp" alt="" />
          <div class="TextContainer">
            <span>¥</span>
            <span>28.8</span>&nbsp; 
            <del>32</del>
          </div>
        </div>
        <div class="imgItem">
          <img src="../../common/images/Limit/5.webp" alt="" />
          <div class="TextContainer">
            <span>¥</span>
            <span>359</span>&nbsp;
            <del>388</del>
          </div>
        </div>
        <div class="imgItem">
          <img src="../../common/images/Limit/6.webp" alt="" />
          <div class="TextContainer">
            <span>¥</span>
            <span>224</span>&nbsp;
            <del>299</del>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus">
#LimitItem
    .LimitSwiper
        width 100%
        height 700px
        background-color #ffffff
        margin-top 20px
        padding 10px 20px
        overflow hidden
        box-sizing border-box
        .LimitHeader
            width 100%
            height 100px
            background-color #ffffff
            .leftContainer
                display inline-block
                width 290px
                height 100px
                background-color #ffffff
                folat left
                font-size 30px
                line-height 100px
            .rightContainer
                width 85px
                height 100px
                float right
                font-size 30px
                line-height 100px
                background-color #fff
        .LimitList
            width 100%
            height 600px
            background-color #fff
            display flex
            justify-content space-between
            flex-direction: row;
            flex-wrap: wrap;
            .imgItem
                width 216px
                height 230px
                padding 0 10px 15px 0
                box-sizing border-box
                text-align center
                background-color #F5F5F5
                img
                    width 100%
                    height 100%
                .TextContainer
                    margin-top 20px
                    >span 
                        color red
</style>
