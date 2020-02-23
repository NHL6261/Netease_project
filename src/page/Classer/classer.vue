<template>
  <div id="ClasserContainer">
      <div class="ClasserHeader">
          <div class="ClasserHeaderList" @click="$router.push('/mister')">
             <i class="iconfont icon-sousuo"></i>
             <input v-model="value" placeholder="搜索商品,共21972款好物" type="text">
          </div>
      </div>
      <div class="test"></div>
      <!-- ClasserLeft位置 -->
      <div class="navContainer">
        <div class="LeftList">
         <ClasserLeft />
        </div>
        <div class="RightList">
          <keep-alive>
          <router-view></router-view>
          </keep-alive>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ClasserLeft from '../../components/ClasserLeft/ClasserLeft'
  export default {
    components:{
      ClasserLeft,
    },
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
      .ClasserHeader
        width 100%
        height 88px
        position fixed
        top 0
        padding 0 40px 0 40px
        box-sizing border-box
        border-bottom 1px solid #F3F3F3
        background-color #fff
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
      .test
       width 100%
       height 88px
      .navContainer
        width 100%
        height calc(100vh - 88px)
        display flex
        justify-content space-between
        .RightList
          width 100%
          height calc(100vh - 88px)

</style>
