<template>
    <div id="headerGuide">
        <div class="wrap">
            <div class="left">
                <i class="icon iconfont icon-caidan06"></i>
            </div>
            <span class="center">值得买</span>
            <div class="right">
                <i class="icon iconfont icon-sousuo1"></i>
                <i class="icon iconfont icon-icon-gouwuche1"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#headerGuide
    width 100%
    height 100px
    position relative
    position fixed
    left 0
    top 0
    z-index 10
    box-sizing border-box
    .wrap
        width 100%
        height 100px
        box-sizing border-box
        padding 0px 26px 0 24px
        background-color #fff
        display flex
        .left
            width 46px
            height 100px
            line-height 100px
            i 
                font-size 50px
        .center
            transform translateX(-50%)
            display block
            font-size 36px
            text-align center
            line-height 100px
            position absolute
            left 50%
        .right
            width 141px
            height 100px
            line-height 100px
            display flex
            position absolute
            right 0
            i 
                font-size 50px
            .icon-icon-gouwuche1
                margin-left 14px
                
            

</style>