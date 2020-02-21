<template>
  <div id="ClasserContainer">
      <div class="ClasserHeader">
          <div class="ClasserHeaderList">
             <i class="iconfont icon-sousuo"></i>
             <input v-model="value" placeholder="搜索商品,共21972款好物" type="text">
          </div>
      </div>
      <div class="ClasserContainerList">
        <div class="LeftContainer">
          
        </div>
        <div class="RightContainer">

        </div>
      </div>      
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        value:''
      }
    }
  }
</script>

<style lang="stylus">
  #ClasserContainer
      width 100%
      height 2000px
      .ClasserHeader
        width 100%
        height 88px
        background-color red
        position fixed
        top 0
        padding 0 40px 0 40px
        box-sizing border-box
        border-bottom 1px solid #F3F3F3
        .ClasserHeaderList
          width 100%
          height 88px
          line-height 90px
          position relative 
          i   
            position absolute
            left 20%
            top 3%
            width 20px
            height 30px
            font-size 40px
          input  
            width 100%
            height 56px
            border-radius 5px
            border 0 
            outline: none
            text-align center
            background-color #EDEDED
            font-size 28px
      .ClasserContainerList
        width 162px
        height 1044px
        background-color pink 
        
          
  
</style>
