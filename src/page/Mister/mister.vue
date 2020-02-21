<template>
  <div id="Container">
    <div class="header">
      <div class="login">
        <img class="imgItem" src="../../common/images/nav/logo.png" alt="" />
        <div class="searchItem">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共20423款好物</span>
        </div>
        <button class="btn">登录</button>
      </div>
      <!-- 橡皮筋效果 -->
      <div class="wrapper">
        <ul class="content">
          <li>推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
        <div class="Select"></div>
      </div>
    </div>
    <div class="block"></div>
    <!-- 轮播 -->
    <Rotation />
    <!-- 售后 -->
    <Apres />
    <!-- 商品列表 -->
    <ListContainer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
import Rotation from '../../components/Rotation/Rotation'
import Apres from '../../components/Apres/Apres'
import ListContainer from '../../components/ListContainer/ListContainer'
  export default {
    components:{
      Rotation,Apres,ListContainer,
    },
    async mounted(){
        new Bscroll('.wrapper',{
            scrollX:true  //横向滑屏
        }),
        this.$store.dispatch('getRecommendList')
    },
    computed:{
      ...mapState({
        recommendlist: state => state.recommendlist
      })
    }
  }
</script>

<style lang="stylus">
#Container
  width 100%
  height 3895px
  background-color #EEEEEE
 .header
    z-index 20
    width 750px
    height 148px
    position fixed
    top 0
    background #fff
    .login
      display flex
      justify-content space-between
      padding 20px
      box-sizing border-box
      width 100%
      .imgItem
        width 138px
        height 40px
        margin-top 10px
        vertical-align middle
      .searchItem
        width 442px
        height 56px
        border-radius 10px
        text-align center
        line-height 52px
        background #eee
        .iconfont
          vertical-align middle
          width 28px
          height 28px
          font-size 40px
        span
          width 317px
          height 42px
          font-size 26px
      .btn
        width 74px
        height 40px
        font-size 20px
        border 1px solid #DD1A21
        border-radius 10px
        line-height 40px
        margin-top 10px
        text-align center
        vertical-align middle
        background #fff
        color #DD1A21
        outline: none
    .wrapper
        width 660px
        height 60px
        line-height 60px
        display flex
        overflow hidden
        .content
          width 1500px
          display flex
          text-align center
          position relative
          li
            width 160px
            height 60px
            font-size 28px
        .Select
          position absolute
          left 5%
          top 94%
          width 80px
          height 4px
          background #DD1A21
  .block
      width 750px
      height 148px
</style>
