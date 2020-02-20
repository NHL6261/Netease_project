<template>
  <div id="FooterContainers">
      <div class="PhoneContainer">
          <div class="DownLoad">
              下载App
          </div>
          <div class="Computer">
            电脑版
          </div>
      </div>
      <div class="IntroDuction">
          <span>网易公司版权所有 © 1997-</span>
          <span>2020</span><br>
          <span>食品经营许可证：JY13301080111719</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
#FooterContainers
    width 100%
    height 250px
    background-color #414141
    margin-top 20px
    padding 60px 20px 20px 20px
    box-sizing border-box
    .PhoneContainer
        width 710px
        height 60px
        background-color #414141
        padding 0 150px
        box-sizing border-box
        .DownLoad
            width 172px 
            height 62px
            background-color #414141
            border 2px solid #6C6C6C
            border-radius 5px
            text-align center
            line-height 55px
            color #fff
            font-size 26px
            float left
        .Computer
            width 172px 
            height 62px
            background-color #414141
            border 2px solid #6C6C6C
            border-radius 5px
            text-align center
            line-height 55px
            color #fff
            font-size 26px
            float right
    .IntroDuction
        width 710px
        height 64px
        background-color #414141
        margin-top 30px
        text-align center
        line-height 30px
        color #999
</style>
