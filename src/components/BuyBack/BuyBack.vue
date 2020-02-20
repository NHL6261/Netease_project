<template>
<div id="FooterContainer">
  <div class="BuyBackContainer">
    <div class="ImgLIst">
      <div class="ImgListContainer">
        <div class="TextContainer">
          <div class="TopContainer">
            断货补单王
          </div>
          <div class="BottomContainer">
            补仓疯抢中
          </div>
        </div>
        <div class="ImgContainer">
          <div class="LeftImg">
              <img src="../../common/images/BuyBack/1.webp" alt="">
          </div>
          <div class="RightImg">
              <img src="../../common/images/BuyBack/2.webp" alt="">
          </div>
        </div>
      </div>
      <div class="ImgListContainer">
        <div class="TextContainer">
          <div class="TopContainer">
            回购榜单
          </div>
          <div class="BottomContainer">
            口碑超值价
          </div>
        </div>
        <div class="ImgContainer">
          <div class="LeftImg">
              <img src="../../common/images/BuyBack/3.webp" alt="">
          </div>
          <div class="RightImg">
              <img src="../../common/images/BuyBack/4.webp" alt="">
          </div>
        </div>
      </div>
      <div class="ImgListContainer">
        <div class="TextContainer">
          <div class="TopContainer">
            网易员工精选
          </div>
          <div class="BottomContainer">
            30%免疫球蛋白 牛初乳7.5折
          </div>
        </div>
        <div class="ImgContainer">
          <div class="LeftImg">
              <img src="../../common/images/BuyBack/5.webp" alt="">
          </div>
          <div class="RightImg">
              <img src="../../common/images/BuyBack/6.webp" alt="">
          </div>
        </div>
      </div>
      <div class="ImgListContainer">
        <div class="TextContainer">
          <div class="TopContainer">
            应季尖货
          </div>
          <div class="BottomContainer">
            2月拔草清单
          </div>
        </div>
        <div class="ImgContainer">
          <div class="LeftImg">
              <img src="../../common/images/BuyBack/7.webp" alt="">
          </div>
          <div class="RightImg">
              <img src="../../common/images/BuyBack/8.webp" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 底部footer -->
  <FooterContainer/>
</div>
</template>

<script type="text/ecmascript-6">
import FooterContainer from '../FooterContainer/FooterContainer'
export default {
    components:{
        FooterContainer
    }
}
</script>

<style lang="stylus">
.BuyBackContainer
    width 750px
    height 576px
    margin-top 20px
    padding 15px 31px 25px 31px
    box-sizing border-box
    background-color #fff
    .ImgLIst
        width 100%
        height 100%
        display flex
        justify-content space-between
        flex-direction row
        flex-wrap wrap
        .ImgListContainer
            width 343px
            height 264px
            padding 20px 0 0 20px
            overflow hidden
            box-sizing border-box
            background-color #F6F6F6
            .TextContainer
                width 333px
                height 84px
                .TopContainer
                    width 333px
                    height 48px
                    font-size 30px
                    color #333333
                    background-color #F6F6F6
                .BottomContainer
                    width 333px
                    height 36px
                    font-size 25px
                    color #7f7f7f
            .ImgContainer
                width 100%
                height 160px
                background-color #fff
                display flex
                justify-content space-between
                .LeftImg
                    width 50% 
                    height 160px
                    background-color #F6F6F6
                    img 
                        width 100%
                        height 100%
                .RightImg
                    width 50% 
                    height 160px
                    background-color #F6F6F6
                    img 
                        width 100%
                        height 100%


</style>
