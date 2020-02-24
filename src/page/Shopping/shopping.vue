<template>
  <div id="shoppingContainer">
    <div class="ShoppingHeader">
      <div class="TextContainer">
          购物车
      </div>
      <div class="LingJuan">
          领劵
      </div>
    </div>
    <div class="Contner">
      <div class="centerContenr">
          <ul class="Item">
            <li class="FlexConTainer">
              <div class="ImgItem">
                <img src="../../common/images/BuyBack/dian.webp" alt="">
              </div>
              <div class="TextItem">
                30天无忧退货
              </div>
            </li>
            <li class="FlexConTainer">
              <div class="ImgItem">
                <img src="../../common/images/BuyBack/dian.webp" alt="">
              </div>
              <div class="TextItem">
                48小时快速退款
              </div>
            </li>
            <li class="FlexConTainer">
              <div class="ImgItem">
                <img src="../../common/images/BuyBack/dian.webp" alt="">
              </div>
              <div class="TextItem">
                满88元免邮费
              </div>
            </li>
          </ul>
      </div>
    </div>
    <div class="GouwuChe">
      <div class="GwcContainer">
          <div class="ImagesItem">
            <img src="../../common/images/BuyBack/购物.webp" alt="">
          </div>
          <div class="TextGwcContainer">
            去添加点什么吧
          </div>
      </div>
    </div>
    <div class="ButtonContainer">
        <mt-button @click="$router.push('/seul')" size="large" style="width:100%;height:100%" type="danger">登录</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
  #shoppingContainer
    width 100%
    height calc(100vh - 88px)
    background-color #f4f4f4
    .ShoppingHeader
      width 100%
      height 88px
      background-color #fff
      padding 0 50px 0 30px
      box-sizing border-box
      text-align center
      line-height 88px
      .TextContainer
        font-size 40px
        float left
      .LingJuan
        font-size 30px
        color #DD1A21
        float right
    .Contner
      width 100%
      height 70px
      background-color #EEEEEE
      padding 0 30px
      box-sizing border-box
      position relative
      .centerContenr
        width 100%
        height 100%
        background-color #EEEEEE 
        position relative
        .Item
          display inline-block
          display flex
          justify-content space-between
          .FlexConTainer
            display flex
            line-height 70px
            height 100%
          .ImgItem
            font-size 20px
    .GouwuChe
      width 100%      
      height 300px
      position absolute 
      left 0
      top 600px
      .GwcContainer
        width 100%
        text-align center
        .ImagesItem
          width 100%
          height 100%
          img 
            width 248px
            height 248px
        .TextGwcContainer
          color #A1A1A1
    .ButtonContainer
      position absolute
      left 50%
      top 900px
      transform translateX(-50%)
      width 100%
      height 92px
      padding 0 160px
      box-sizing border-box
      .mint-button-text
        font-size 30px 
</style>
