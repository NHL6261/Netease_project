<template>
  <div id="footer">
      <div :class="{active:$route.path === '/mister'}" @click="goFooter('/mister')" class="footerItem">
          <i class="iconfont icon-caidan06"></i>
          <span>首页</span>
      </div>
      <div :class="{active:$route.path === '/classer'}" @click="goFooter('/classer')" class="footerItem">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
      </div>
      <div :class="{active:$route.path === '/meriter'}" @click="goFooter('/meriter')" class="footerItem">
          <i class="iconfont icon-chuanghu"></i>
          <span>值得买</span>
      </div>
      <div :class="{active:$route.path === '/shopping'}" @click="goFooter('/shopping')" class="footerItem">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
      </div>
      <div :class="{active:$route.path === '/seul'}" @click="goFooter('/seul')" class="footerItem">
          <i class="iconfont icon-geren"></i>
          <span>个人</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

      methods:{
        goFooter(path){
            path !== this.$route.path &&  this.$router.push(path)
        }
      }
  }
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl'
  #footer
    display flex
    position fixed
    left 0 
    bottom 0
    width 100%
    height 98px
    background #fff
    .footerItem
       width 25%
       height 98px
       text-align center
       display flex
       flex-direction column
       &.active
           color $fuchsia
        .iconfont
            font-size 40px
            line-height 50px
</style>
