<template>
  <div id="personContainer">
      <div class="header" @click.prevent="goMister">
        <div class="header-w">
          <a>
            <i class="iconfont icon-caidan06"></i>
          </a>
          <div class="TextContainer">
              网易严选
          </div>
          <a class="home">
            <!-- <img src="../../common/images/BuyBack/logo.png" alt=""> -->
          </a>
          <div class="header-r">
            <a class="search">
              <i class="iconfont icon-sousuo1"></i>
            </a>
            <a>
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
                  <input name="phone" v-validate="'required|phone'" class="TopInput" placeholder="请输入手机号" maxlength="11" v-model="phone" type="text">
                  <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
              </div>
              <div class="Chunk"></div>
              <div class="InputCenter">
                  <input name="code" v-validate="'required|code'" class="CenterInput" v-model="code" placeholder="请输入短信验证码" maxlength="6"  type="text">
                  <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
              </div>
              <div class="Btn-mation">
                  <button @click.prevent="getCode" :disabled="countDonwnTime > 0" >
                  {{countDonwnTime?`${countDonwnTime}s后可以从新获取验证码`:'获取验证码'}}</button>
              </div>
              <div class="Chunk"></div>
              <div class="InputBottom">
                  <div class="leftText">
                      遇到问题？
                  </div>
                  <div class="rightText" @click="$router.push('/seul')">
                      使用密码验证登录
                  </div>
              </div>
              <div class="BottomBtn">
                  <button href="##" @click.prevent="login">登录</button>
              </div>
          </div>
          <!-- 其他方式登录 -->
          <div class="ElseText">
              <div class="TextElse">
                  <a @click="$router.push('/seul')">其他方式登录&nbsp;></a>
              </div>
          </div>
      </div>
     
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
        return {
            phone:'',//手机号
            code:'', //验证码
            countDonwnTime: 0 //倒计时
        }
      },
      methods: {
          goMister(){
              this.$router.push('/mister')
          },
          getCode(){
              this.countDonwnTime = 5
              let timer = setInterval(() =>{
                  this.countDonwnTime-- 
                  if(this.countDonwnTime === 0){
                      clearInterval(timer)
                  }
              },1000)
          },
          async login(){
        //   前端验证
          let names = ['phone','code']
          const success = await this.$validator.validateAll(names)
          if(success){
              this.$router.push('/mister')
          }
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
      .TextContainer
        font-family KaiTi 
        font-size 45px
        color black
        width 100%
        height 100%
        line-height 60px
        text-align  center
        margin-left 150px
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
            height 52px
            background-color #fff
            text-align center
            line-height 52px
            border-radius 5px
            border 2px solid #CFCFCF
            margin 0
            padding 0 
            outline: none 
            >button
                height 52px
                color black
                background-color #FFFFFF
                outline: none 
                display: block;
                color: #333;
                font-size: 14px;
                background: #fff;
                border-radius 5px
                border 0
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
            text-align center
            line-height 92px
            >button 
                width 100%
                height 100%
                font-size 30px
                background-color #DD1A21
                color #fff
                border 0
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
