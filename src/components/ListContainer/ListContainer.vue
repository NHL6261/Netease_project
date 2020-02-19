<template>
  <div id="ListCotainerItem">
      <div class="ListClasser">
          <!-- 内容区域 -->
          <div class="conTainer">
              <!-- 图片区域 -->
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/1.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/2.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/3.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/4.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/5.png" alt="">
                  <span>新品首发</span>
              </div>
                 <div class="imgItem">
                  <img src="../../common/images/ListContainer/6.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/7.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/8.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/9.png" alt="">
                  <span>新品首发</span>
              </div>
              <div class="imgItem">
                  <img src="../../common/images/ListContainer/10.gif" alt="">
                  <span>新品首发</span>
              </div>
          </div>
      </div>
      <div class="ListCordon">

      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
  #ListCotainerItem
    width 100%
    height 4766px
    .ListClasser
      width 100%
      height 372px
      .conTainer
        display flex
        justify-content space-between
        flex-wrap: wrap
        padding 30px
        box-sizing border-box
        .imgItem
          width 110px
          height 156px
          display flex
          flex-direction column
          margin-right 10px
          margin-left 10px
          margin-top 10px
          img 
            width 110px
            height 110px
            text-align center
          span 
            width 110px
            height 36px
            margin-top 5px
            text-align center
            line-height 36px
            img:nth-child(5)
                margin-right 0px
</style>
