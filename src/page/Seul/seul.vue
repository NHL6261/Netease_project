<template>
  <div id="personContainer">
      <div class="header">
        <div class="header-w">
          <a href="/home">
            <i class="iconfont icon-caidan06"></i>
          </a>
          <div class="TextContainer">
              网易严选
          </div>
          <a class="home" href="/home">
            <!-- <img src="../../common/images/BuyBack/logo.png" alt=""> -->
          </a>
          <div class="header-r">
            <a class="search" href="/headernav">
              <i class="iconfont icon-sousuo1"></i>
            </a>
            <a href="/cart">
              <i class="iconfont icon-gouwuche"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="cont">
          <div class="logowrap">
            <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
          </div>
          <div class="btnwrap">
            <div class="btnt" @click="$router.push('/login')">
              <i class="iconfont icon-shouji"></i>
              <span>手机号快捷登录</span>
            </div>
            <div class="btnb">
              <i class="iconfont icon-icon-p_xinfeng"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
        </div>  
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
        return {
          countTime:0,
          phone:'',
          code:'',
        }
      },
      methods: {
          goHome(){
              this.$router.push('/home')
          }
      },
  }
</script>

<style lang="stylus">
#personContainer 
  width 100%
  height calc(100vh - 88px)
  .header
    height 88px
    background #fafafa
    position relative
    .header-w
      width 100%
      height 88px
      z-index 1
      margin auto
      position relative
      padding 16px 24px
      display flex
      -webkit-box-align center
      align-items center
      -webkit-box-pack justify
      justify-content space-between
      box-sizing border-box
      a
         padding-top 25px
        .iconfont
          line-height 1px
          font-size 50px
      .home
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        padding-left 250px
      .header-r
        margin-top 28px
        margin-left auto   
        margin-right: 5px;
        .search
          margin-right 40px
  .bottom
    position relative
    height 100%
    background: #F2F5F4  
    .cont
      .logowrap 
        height 100%  
        text-align center
        padding-top 250px
        padding-bottom 232px 
        img 
          width 268px
          height 90px  
      .btnwrap
        padding 40px
        // margin-bottom 205px
        background: #F2F5F4 
        .btnt
          margin-bottom 32px
          overflow visible  
          border-radius 2px  
          background #DD1A21
          text-align center;
          font-size 28px;
          color #fff;
          vertical-align middle;
          width 100%
          height 94px
          line-height: 94px
          .iconfont
            line-height 1px
            font-size 40px
            
        .btnb
          margin-bottom 350px
          overflow visible  
          border-radius 2px 
          text-align center;
          border-left 2px solid red
          border-bottom 2px solid red
          border-top 2px solid red
          border-right 2px solid red
          font-size 28px;
          color #DD1A21;
          vertical-align middle;
          width 100%
          height 94px
          line-height: 94px 
          .iconfont
            line-height 1px
            font-size 40px   
</style>
