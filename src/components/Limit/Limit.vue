<template>
<div class="NewProduct">
  <div id="LimitItem">
    <div class="LimitSwiper" >
      <div class="LimitHeader" >
        <div class="leftContainer" >
          <div class="textContainer">
            限时购:
          </div>
          <div class="TimeContainer"></div>
        </div>
        <div class="rightContainer">
          <div>更多></div>
        </div>
      </div>
      <div class="LimitList">
        <div class="imgItem" v-for="(item, index) in timelimit" :key="index">
          <img :src="item.picUrl" alt=""/>
          <div class="TextContainer">
            <span>¥</span>
            <span>{{item.activityPrice}}</span>&nbsp;
            <del>{{item.originPrice}}</del>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 新品 -->
    <NewProduct/>
</div>
</template>

<script type="text/ecmascript-6">
import NewProduct from '../NewProduct/NewProduct'
import { mapState } from 'vuex'
export default {
    components:{
        NewProduct
    },
    mounted(){
      this.$store.dispatch('getTimeLimitAction')
    },
    computed:{
      ...mapState({
        timelimit: state => state.gettimelimit
      })
    }
}
</script>

<style lang="stylus">
#LimitItem
    .LimitSwiper
        width 100%
        height 700px
        background-color #ffffff
        margin-top 20px
        padding 10px 20px
        overflow hidden
        box-sizing border-box
        .LimitHeader
            width 100%
            height 100px
            background-color #ffffff
            .leftContainer
                display inline-block
                width 290px
                height 100px
                background-color #ffffff
                folat left
                font-size 30px
                line-height 100px
            .rightContainer
                width 85px
                height 100px
                float right
                font-size 30px
                line-height 100px
                background-color #fff
        .LimitList
            width 100%
            height 600px
            background-color #fff
            display flex
            justify-content space-between
            flex-direction: row;
            flex-wrap: wrap;
            .imgItem
                width 216px
                height 230px
                padding 0 10px 15px 0
                box-sizing border-box
                text-align center
                background-color #F5F5F5
                img
                    width 100%
                    height 100%
                .TextContainer
                    margin-top 20px
                    >span 
                        color red
</style>
