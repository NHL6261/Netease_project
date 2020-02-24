<template>
  <div id="personContainer">
      <div class="header">
        <div class="header-w">
          <a href="/home">
            <i class="iconfont icon-caidan06"></i>
          </a>
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
      <!-- 验证部分 -->
      <div class="CenterContainer">
          <div class="ImgContainer">
             <img src="../../../common/images/BuyBack/logo.png" alt="">
          </div>
          <!-- input框 -->
          <div class="InputContainer">
              <div class="InputTop">
                  <input class="TopInput" placeholder="请输入手机号" v-model="phone" type="text">
              </div>
              <div class="Chunk"></div>
              <div class="InputCenter">
                  <input class="CenterInput" v-model="pwd" placeholder="请输入短信验证码" type="text">
              </div>
              <div class="Btn-mation">
                  <a href="##">获取验证码</a>
              </div>
              <div class="Chunk"></div>
              <div class="InputBottom">
                  <div class="leftText">
                      遇到问题？
                  </div>
                  <div class="rightText">
                      使用密码验证登录
                  </div>
              </div>
              <div class="BottomBtn">
                  <a href="##">登录</a>
              </div>
          </div>
          <!-- 其他方式登录 -->
          <div class="ElseText">
              <div class="TextElse">
                  <a href="##">其他方式登录&nbsp;></a>
              </div>
          </div>
      </div>
     <div class="TextContainer">网易严选</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
        return {
            phone:'',//手机号
            pwd:'' //密码
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
  .TextContainer
    width 750px 
    height 50px 
    position absolute
    left 89%
    top 1.5%
    font-family KaiTi 
    transform translateX(-50%)
    z-index 20
    font-size 45px
    color black
    box-sizing border-box
  .CenterContainer
      width 100%
      height 786px
      background-color #fff
      margin-top 60px
      .ImgContainer
        width 100%
        height 90px
        text-align center
        margin-bottom 40px
        img 
            width 268px
            height 90px
      .InputContainer
        width 100%
        height 516px
        background-color #fff
        padding  0 40px
        box-sizing border-box
        .InputTop
            width 100%
            height 92px
            border-bottom 2px solid #eee
            .TopInput
                width 100%
                height 92px
                outline:none
                border-radius 3px
                font-size 30px
        .Chunk
            width 100%
            height 25px
        .InputCenter
            width 100%
            height 92px
            border-bottom 2px solid #eee
            position relative
            .CenterInput
                width 100%
                height 92px
                outline:none
                border-radius 3px
                font-size 30px
        .Btn-mation
            position absolute 
            right 60px
            top 410px
            width 160px
            height 52px
            background-color #fff
            text-align center
            line-height 52px
            border-radius 5px
            border 2px solid #CFCFCF
            >a
                width 100%
                height 52px
                color black
        .InputBottom
            width 100%
            height 92px
            line-height 92px
            display flex
            justify-content space-between
            .leftText
                font-size 30px 
            .rightText
                font-size 30px
        .BottomBtn
            width 100%
            height 92px
            background-color #DD1A21
            text-align center
            line-height 92px
            >a
                font-size 30px
                color #fff
      .ElseText
          width 100%
          height 140px
          padding  0 40px
          box-sizing border-box
          text-align center
          font-size 30px
          .TextElse
              width 100%
              height 100%
              padding 52px 0 0 0 
              box-sizing border-box

              
</style>
