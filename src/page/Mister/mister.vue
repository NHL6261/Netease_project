<template>
  <div id="Container">
      <div class="header">
        <div class="login">
          <img class="imgItem" src="../../common/images/nav/logo.png" alt="">
          <div class="searchItem">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共20423款好物</span>
          </div>
          <button class="btn">登录</button>
        </div>
        <div ></div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
  #Container
    width 100%
    height 100%
    .login
      display flex
      justify-content space-between
      padding 20px
      box-sizing border-box
      width 100%
      height 148px
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
    
 
</style>
