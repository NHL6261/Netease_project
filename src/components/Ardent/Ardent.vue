<template>
<div id="LimitContainer">
  <div class="ArdentContainer">
      <!-- 头部 类目热销榜 -->
      <div class="HeaderItem">
          类目热销榜
      </div>
      <!-- 商品列表 -->
      <div class="ShoppingList">
          <!-- 商品列表头部 -->
          <div class="ShoppingHeader">
              <div class="leftHeader">
                <div class="LeftText">
                  <p>热销榜</p>
                  <div class="Redfil"></div>
                </div>
                <div class="RightImg">
                  <img src="../../common/images/Ardent/检查.webp" alt="">
                </div>
              </div>
              <div class="rightHeader">
                <div class="LeftContainer">
                    <p>好评榜</p>
                    <div class="Leftfil"></div>
                </div>
                <div class="RightContainer">
                    <img src="../../common/images/Ardent/音响.webp" alt="">
                </div>
              </div>
          </div>
          <!-- 商品列表内容 -->
          <div class="ShoppingContainer">
              <!-- 图片 -->
              <div class="ImgItem" >
                <div class="CateItem">
                  <span>美食酒水榜</span>
                  <img src="../../common/images/Ardent/1.webp" alt="">
                </div>
                <div class="CateItem">
                  <span>服饰鞋包榜</span>
                  <img src="../../common/images/Ardent/2.webp" alt="">
                </div>
                <div class="CateItem">
                  <span>居家生活榜</span>
                  <img src="../../common/images/Ardent/3.webp" alt="">
                </div>
                <div class="CateItem">
                  <span>个护清洁榜</span>
                  <img src="../../common/images/Ardent/4.webp" alt="">
                </div>
                <div class="CateItem">
                  <span>数码家电榜</span>
                  <img src="../../common/images/Ardent/5.webp" alt="">
                </div>
                <div class="CateItem">
                  <span>全球特色榜</span>
                  <img src="../../common/images/Ardent/6.webp" alt="">
                </div>
                <div class="CateItem">
                  <span>母婴亲子榜</span>
                  <img src="../../common/images/Ardent/7.webp" alt="">
                </div>
                <div class="CateItem">
                  <span>运动旅行榜</span>
                  <img src="../../common/images/Ardent/8.webp" alt="">
                </div>
              </div>
          </div>
      </div>
  </div>
  <!-- 限时购 -->
  <Limit/>
</div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import Limit from '../Limit/Limit'
  export default {
    components:{
      Limit
    },
    computed:{
    ...mapState({
      listitem: state => state.listitem
    })
  }
  }
</script>

<style lang="stylus">
.ArdentContainer
  .HeaderItem
    width 100%
    height 100px
    background #ffffff
    padding 0 30px
    box-sizing border-box
    line-height 100px
    font-size 34px
    margin-top 20px
  .ShoppingList
    width 100%
    height 610px
    padding 0px 30px 0 30px
    box-sizing border-box 
    background-color #ffffff
    overflow hidden
    .ShoppingHeader
      width 680px
      height 200px
      background-color #ffffff 
      .leftHeader
        width 335px
        height 200px
        float left
        background-color #F9F3E4
        .LeftText
          width 135px
          height 200px
          float left
          background-color #F9F3E4
          >p
            font-size 30px
            padding 60px 0 0 20px
            box-sizing border-box
          .Redfil
            width 50px
            height 5px
            margin-left 20px
            margin-top 20px
            background-color red
        .RightImg
          width 200px
          height 200px
          float right
          background-color #F9F3E4 
          img 
            width 100%
            height 100%
      .rightHeader
        width 335px
        height 200px
        float right
        background-color #ffffff
        .LeftContainer
          width 135px
          height 200px
          float left
          background-color #EBEFF6
          >p
            font-size 30px
            padding 60px 0 0 20px
            box-sizing border-box
          .Leftfil
            width 50px
            height 5px
            margin-left 20px
            margin-top 20px
            background-color red
        .RightContainer
          width 200px
          height 200px
          float right
          img 
            width 100%
            height 100%
    .ShoppingContainer
      width 682px
      height 380px
      background-color #ffffff
      .ImgItem
        width 682px 
        height 380px
        display flex
        justify-content space-between
        flex-direction: row;
        flex-wrap: wrap;
        .CateItem
          width 165px
          height 180px
          background-color #F5F5F5
          text-align center
          margin-top 10px
          img  
            width 120px
            height 120px
 
</style>
