<template>
  <div id="ListCotainerItem">
    <div class="ListClasser">
      <!-- 内容区域 -->
      <div class="conTainer">
        <!-- 图片区域 -->
        <div class="imgItem" v-for="(item, index) in newlist" :key="index">
          <img :src="item.picUrl" alt="" />
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="ListCordon">
      <div class="ListImgItme">
        <img src="../../common/images/Cordon/1.webp" alt="" />
      </div>
      <div class="Bck">
        <div class="ListPrenDre">
          <img src="../../common/images/Cordon/2.gif" alt="" />
        </div>
        <!-- 就是这个布局 一共四张图片 用的felx布局 -->
        <!-- 图片总宽:750 x 372 单个图片:351 x 186 -->
        <div class="Securite">
          <div class="SecuriteItem">
            <img src="../../common/images/Securite/1.webp" alt="" />
          </div>
          <div class="SecuriteItem">
            <img src="../../common/images/Securite/2.webp" alt="" />
          </div>
          <div class="SecuriteItem">
            <img src="../../common/images/Securite/3.webp" alt="" />
          </div>
          <div class="SecuriteItem">
            <img src="../../common/images/Securite/4.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 新人礼包 -->
    <NewPeople/>
  </div>
</template>

<script type="text/ecmascript-6">
import NewPeople from '../NewPeoole/NewPelple'
import { mapState } from 'vuex'
// import ImgItem from '../../data/index.json'
export default {
    components:{
        NewPeople
    },
    data(){
    return{
        ImgItem:[]
      }
    },
    mounted(){
        this.$store.dispatch('getNewListItemAction')
    },
    computed:{
      ...mapState({
        newlist: state => state.newlist
      })
    }  
}
</script>

<style lang="stylus">
#ListCotainerItem
  width 100%
  height 4766px
  .ListClasser
    width 100%
    height 372px
    background-color #ffffff 
    .conTainer
      display flex
      justify-content space-between
      flex-wrap: wrap
      padding 30px
      box-sizing border-box
      .imgItem
        width 110px
        height 156px
        display flex
        flex-direction column
        margin-right 10px
        margin-left 10px
        margin-top 10px
        img
          width 110px
          height 110px
          text-align center
        span
          width 110px
          height 36px
          margin-top 5px
          text-align center
          line-height 36px
          img:nth-child(5)
              margin-right 0px
  .ListCordon
      width 100%
      height 825px
      .ListImgItme
          width 100%
          height 240px
          img
              width 100%
              height 100%
              padding 5px 1px 0 1px
              box-sizing border-box
      .Bck
        width 100%
        height 565px
        background-color #1674e3
        .ListPrenDre
            width 710px
            height 160px
            img
                width 710px
                height 160px
                margin-left 20px
        .Securite
          width 100%
          height 372px
          padding 7px 20px 20px 20px
          box-sizing border-box
          .SecuriteItem
            width 50%
            height 55%
            float left
            img
                width 351px
                height 186px
                margin-top 2px
</style>
