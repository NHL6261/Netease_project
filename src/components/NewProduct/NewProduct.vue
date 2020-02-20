<template>
  <div id="NewProductContiner">
      <div class="NewProductHeader">
          <div class="LeftContainer">
              新品首发
          </div>
          <div class="RightContainer">
              <div>
                  更多>
              </div>
          </div>
      </div>
      <div class="NewProductList">
          <div class="ImgItem">
              <img src="../../common/images/NewProduct/1.webp" alt="">
              <div class="TextContainer">
                  <span>赏味正当时，春见耙耙柑 5斤</span><br>
                  <p>¥ 59</p>
                  <div class="RedFil">
                      好货内部价
                  </div>
              </div>
          </div>
          <div class="ImgItem">
              <img src="../../common/images/NewProduct/2.webp" alt="">
              <div class="TextContainer">
                  <span>富含蛋白，纯牛初乳粉1克*30袋*2罐</span><br>
                  <p>¥ 298</p>
                  <div class="RedFil">
                      满88顺丰包邮
                  </div>
              </div>
          </div>
          <div class="ImgItem">
              <img src="../../common/images/NewProduct/3.webp" alt="">
              <div class="TextContainer">
                  <span>【UV杀菌】水质净化加湿器 5L大容量</span><br>
                  <p>¥ 800</p>
              </div>
          </div>
          <div class="ImgItem">
              <img src="../../common/images/NewProduct/4.webp" alt="">
              <div class="TextContainer">
                  <span>安心出行高效防护- 防飞沫多功能护目镜</span><br>
                  <p>¥ 79</p>
              </div>
          </div>
          <div class="ImgItem">
              <img src="../../common/images/NewProduct/5.webp" alt="">
              <div class="TextContainer">
                  <span>一锤轻松，高颜值轻羽筋膜按摩仪</span><br>
                  <p>¥ 120</p>
              </div>
          </div>
          <div class="ImgItem">
              <img src="../../common/images/NewProduct/6.webp" alt="">
              <div class="TextContainer">
                  <span>冰封住的香甜，泰国金枕榴莲冻肉300克</span><br>
                  <p>¥ 80</p>
                  <div class="RedLast">
                      特价
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
    #NewProductContiner
        width 100%
        height 922px
        background-color #fff
        padding 0 30px
        box-sizing border-box
        .NewProductHeader
            width 100%
            height 100px
            background-color #fff 
            .LeftContainer
                font-size 30px
                width 128px
                height 100px
                float left 
                line-height 100px
            .RightContainer
                width 77px
                height 100px
                float right
                line-height 100px
                font-size 28px
        .NewProductList
            width 100%
            height 822px
            background-color #fff
            display flex
            justify-content space-between
            flex-direction: row;
            flex-wrap: wrap;
            .ImgItem
                width 216px
                height 216px
                background-color #F5F5F5                
                img     
                    width 100%
                    height 100%
                .TextContainer
                    width 216px
                    height 105px
                    line-height 40px
                    white-space: normal
                    text-overflow: ellipsis
                    font-size 20px
                    p
                        font-size 34px
                        color red
                    .RedFil
                        width 70%
                        border-radius 20px
                        border 1px solid red
                        text-align center
                        margin-top 8px
                        color #DD1A21
                    .RedLast
                        width 30%
                        border-radius 20px
                        border 1px solid red
                        text-align center
                        margin-top 8px
                        color #DD1A21
            >img:nth-child(3)
                background-color #ffffff




 
</style>
