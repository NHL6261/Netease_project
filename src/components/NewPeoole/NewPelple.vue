<template>
<div id="Container">
    <div class="NewPeople">
      <div class="NewPeopleList">
        <div class="NewPeopleItem">
            <span>— 新人专享礼 —</span>
        </div>
        <div class="GiftPackage">
          <div class="leftItem">
              <div class="textItem">
                  新人专享礼包
              </div>
              <div class="NewPeopleImg">
                  <img src="../../common/images/NewPeople/1.png" alt="">
              </div>
          </div>
          <div class="rightItem">
            <div class="TopItem">
                <div class="Societes">
                    <p>福利社</p>
                    <p>今日特价</p>
                </div>
            </div>
            <div></div>
            <div class="bottomItem">
                <div class="Mission">新人拼团</div>
                <div class="Monisme">一元起包邮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Ardent/>
</div>
</template>

<script type="text/ecmascript-6">
import Ardent from '../Ardent/Ardent'
export default {
    components:{
        Ardent
    }
}
</script>

<style lang="stylus">
#Container
  .NewPeople
    width 100%
    height 550px
    background-color #ffffff
    .NewPeopleList
        width 100%
        height 90px
        text-align center
        line-height 90px
        .NewPeopleItem
            width 100%
            height 90px
            background-color #fff
            display flex
            justify-content center
            align-items center
            span 
                font-size 36px
        .GiftPackage
            width 100%
            height 438px
            background-color #fff
            .leftItem
                width 343px
                height 438px
                background-color #F9E9CF 
                float left
                margin-left 30px
                .textItem
                    width 343px
                    height 78px
                    background-color #F9E9CF
                    font-size 34px
                    font-family PingFangSC-Medium
                    padding 10px 90px 0 0px
                    box-sizing border-box
                .NewPeopleImg
                    width 258px
                    height 257px
                    img    
                        width 258px
                        height 257px
                        margin 40px
            .rightItem
                width 343px
                height 438px
                background-color #fff 
                float right
                margin-right  30px
                .TopItem
                   width 343px
                   height 215px
                   background-color #FBE2D3
                   position relative
                   .Societes
                      width 313px
                      height 84px
                      position absolute
                      left 20px
                      top 10px
                      >p
                        width 120px
                        height 30px
                        font-size 30px
                      >p:nth-child(2)
                         font-size 16px
                         color #7F7F7F
            .bottomItem
                width 343px
                height 215px
                background-color #FFECC2
                margin-top 4px
                padding 20px 0 0 20px
                box-sizing border-box
                .Mission
                    width 120px
                    height 30px
                    font-size 30px
                .Monisme
                    width 120px
                    height 16px
                    font-size 20px
                    color #fff
</style>
