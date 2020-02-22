<template>
  <div id="Container">
    <div class="SearchContainer">
      <div class="SearchInput">
        <div class="Input">
          <i class="iconfont icon-sousuo1"></i>
          <input class="InputItem" placeholder="9.9元超值专区" type="text" />
        </div>
        <div class="Text" @click="$router.push('/mister')">
          取消
        </div>
      </div>
      <div class="Hot">
        热门搜索
      </div>
      <div class="SearchText">
          <a href="##">疫情上线快报</a>
      </div>
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
    height 1300px
    background-color #EEE
    .SearchContainer
        width 100%
        height 532px
        background-color #fff
        padding 1px 30px 30px 30px
        box-sizing border-box
        .SearchInput
            width 100%
            height 88px
            background-color #fff
            display flex
            .Input
                width 604px
                height 56px
                border:none
                outline: none
                line-height 88px
                position relative
                vertical-align middle
                input
                    width 100%
                    height 100%
                    border-radius 5px
                    background-color #F4F4F4
                    color #B7B7B7
                    padding-left 60px
                    box-sizing border-box
                    font-size 28px
                i
                    position absolute
                    left 2%
                    top -10%
                    font-size 38px
                    color #B7B7B7
            .Text
                vertical-align middle
                font-size 28px
                line-height 80px
                margin-left 30px
        .Hot
            width 100%
            height 90px
            line-height 90px
            font-size 28px
            color #B7B7B7
        .SearchText
            width 100%
            height 316px
            background red
</style>
