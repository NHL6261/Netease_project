<template>
  <div id="Container">
    <div class="worthyContainer">
    <div class="worthyUpper">
      <span style="font-size:24px" class="iconfont iconTemp-3 icon-caidan06"></span>
      <div style="margin-left:40px" class="wortyTitle">值得买</div>
      <div class="worthyUpperRight">
          <span style="font-size:28px" class="worthySearch iconfont icon-sousuo1"></span>
          <span class="worthyShoppingCar iconfont icon-icon-gouwuche1"></span>
      </div>
    </div>
    <div class="m-swiperContainer">
      <div class="swiperTop">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <div class="text">严选好物&nbsp;用心生活</div>
      </div>
      <div class="swiperBottom" v-if="worthyNavData">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-item" v-for="(item, index) in navData" :key="index">
              <div class="firstItem" v-for="(list, index) in item" :key="index">
                <div class="imgBox">
                  <img :src="list.picUrl" alt="">
                </div>
                <div class="itemBottom">
                  <div class="sub-title">{{list.mainTitle}}</div>
                  <span>{{list.viceTitle}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="waterFallContainer">
    <!-- 瀑布流 -->
    <div class="waterFallList">
      <div id="waterFallContainer" v-if="originData">
        <waterfall :col="col" :data="originData" @loadmore="loadmore" :width="itemWidth" >
          <template>
            <div class="cell-item" v-for="(item,index) in originData" :key="index" :lazy-src="item">
              <img v-if="item.picUrl" :src="item.picUrl"  alt="加载错误">
              <div class="item-body" v-if="item.title">
                <div class="item-desc">{{item.title}}</div>
                <div class="item-footer">
                  <div class="user">
                    <div class="avatar">
                      <img :src="item.avatar" alt="头像">
                    </div>
                    <div class="text">{{item.nickname}}</div>
                  </div>
                  <div class="see">
                    <span class="eye iconfont iconyanjing"></span>
                    <span class="amount">{{item.readCount}}</span>
                  </div>
                  
                </div>
                <div class="item-bottom" v-if="item.buyNow">
                  <div class="shopName">
                    {{item.buyNow.itemName}}
                  </div>
                  <div class="goToBuy">
                      去购物 >
                  </div>
                </div>
              </div>
            </div>
          </template>
        </waterfall>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import {mapState} from 'vuex'
import _ from 'lodash'
  export default {
    data(){
      return{
        navData:[],
        pageData: [],
        col: 2,
        loading: false,
        originData:[],
        page:1,
        size:5
      }
    },
    mounted(){
      this.$store.dispatch('getWorthNavData')
      // 瀑布流
      this.$store.dispatch('getWaterFallData')
      this.$nextTick(()=>{
          this.mergingData()
        })
      window.addEventListener('scroll', ()=>{
      let scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
      let clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
      let scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
      // console.log(scr,clientHeight,scrHeight);
      if(scr + clientHeight  >= scrHeight){
          this.loadmore();
      }
      });
      this.$store.dispatch('getPagesData',this.page,this.size)
      // 页面加载的时候就发送请求去拿数据
      
    },
    computed:{
      ...mapState({
        worthyNavData:state=>state.worthyNav.navList,
        waterFallData:state =>state.waterFall,
        waterFallPageData:state=>state.waterFallPageData
      }),
      // 瀑布流
      itemWidth() {
        return 345 * 0.5 * (document.documentElement.clientWidth / 375);
      },
      gutterWidth() {
        return 20 * 0.5 * (document.documentElement.clientWidth / 375);
      }
    },
    methods:{
      splitArray(){
        // 轮播图中的数据
        if(this.worthyNavData){
          let splitArr = _.chunk(this.worthyNavData,this.worthyNavData.length/2)
          let splitResult = []
          //[[1,2,3],[4,5,6]]==>[[[1],[2],[3]],[[4],[5],[6]]]
          for (let i = 0; i < splitArr.length; i++) {
            splitResult.push(_.chunk(splitArr[i],1))
          }
          let result = []

          for (let i = 0; i < splitResult[0].length; i++) {
            // [1,4] [2,5] [3,6]依次push到result中
           result.push(splitResult[0][i].concat(splitResult[1][i]))
          }  
          this.navData = result
        }
      },
      reset() {
        this.data = [];
      },

      switchCol(col) {
        this.col = col;
      },
      loadmore(index){
        this.page+=1
        this.$store.dispatch('getPagesData',this.page,this.size)
        if(this.pageData){
          this.originData.push(...this.pageData)
        }
      },
      // 组织数据
      mergingData(){
        if(this.waterFallData){
          let firstScreenData = [];
          if(this.waterFallData.ad){
            firstScreenData.push(this.waterFallData.ad)
          }
          if(this.waterFallData.topics){
            for (let i = 0; i < this.waterFallData.topics.length; i++) {
              firstScreenData.push(this.waterFallData.topics[i])
            }
          }
          this.originData = firstScreenData
        }
      }
    },
    watch:{
      //监视经过拆分之后的数据
      navData(){
        this.$nextTick(()=>{
            new Swiper('.swiper-container', {
              slidesPerView: "auto",
              pagination:{
                el:'.swiper-pagination',
                bulletClass : 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }
            });
        })
      },
      //监视在有worthyNavData的时候调用方法来拆分数组
      worthyNavData(){
        this.$nextTick(()=>{
           this.splitArray()
        })
      },
      waterFallData(){
        this.$nextTick(()=>{
          this.mergingData()
        })
      },
      waterFallPageData(){
        this.$nextTick(()=>{
          let pageData = [];
          this.waterFallPageData.forEach(value => {
            if(value.look){
              pageData.push(value.look)
            }
            value.topics.forEach(item=>{
              pageData.push(item)
            })
          });
          this.pageData.push(...pageData)
        })
      },
      pageData(){
        this.$nextTick(()=>{
        // if(this.pageData){
          this.originData.push(...this.pageData)
        // }
      })
      }


    }
  }
</script>

<style scoped lang="stylus">
#Container
  width 100%
  .worthyContainer
    width 100%
    position relative
    .worthyUpper
      height 100px
      width 100%
      box-sizing border-box
      border-bottom 1px solid #333
      padding 0 26px 0 24px
      background #ffffff
      position fixed 
      top 0
      left 0
      display flex
      justify-content space-between
      align-items center
      font-size 36px
      z-index 10
      .home
        font-size 46px
      .worthyUpperRight
        height 100%
        display flex
        align-items center
        .worthySearch
          font-size 46px
          margin-right 30px
        .worthyShoppingCar
          font-size 46px
    .m-swiperContainer
      padding-top 100px
      width 100%
      height 685px
      .swiperTop
        width 100%
        height 524px
        background-image url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png')
        background-repeat no-repeat
        background-size cover
        position relative
        img
          position absolute
          left 12px
          top 60px 
          width 128px
          height 68px
        .text
          height 44px
          font-size 30px
          color #fff
          position absolute
          top 79px
          left 146px
      .swiperBottom
        width 710px
        margin 0 20px
        height 540px
        background #fff
        position absolute
        bottom 0
        left 0
        border-radius 20px
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-item
              width 177px
              height 540px
              padding 8px 6px 6px
              box-sizing border-box
              .firstItem
                width 168px
                height 201px
                display flex
                margin-top 28px
                flex-direction column
                align-items center
                .imgBox
                  width 120px
                  height 120px
                  img  
                    width 100%
                    height 100%
                .itemBottom
                  width 168px
                  height 201px
                  text-align center
                  margin-top 8px
                  .sub-title
                    font-size 28px
                    color #333
                    height 40px
                    font-weight bold
                    line-height 40px
                  span 
                    display block
                    height 30px
                    line-height 30px
                    margin-top 2px
                    color #999
      /deep/.swiper-pagination
              margin-bottom 15px
              .swiper-pagination-bullet
                width 40px
                height 4px
                margin 0
                &.swiper-pagination-bullet-active
                  background #DD1A21
  .waterFallContainer
    .waterFallList
      margin 30px 20px 0 20px
      #waterFallContainer
        width 100%
        height 100%
        margin-bottom 98px
        .cell-item
          width 100%
          overflow hidden
          margin-bottom 36px
          border-radius 24px
          background #fff
          img
            width 100%
        .item-body
          .item-desc
            width 343px
            height 98px
            box-sizing border-box
            padding 18px 16px 0
            -webkit-line-clamp 2
            display -webkit-box
            -webkit-box-orient vertical
            overflow hidden
            word-break break-all
            font-size 28px
            line-height 38px
          .item-footer
            margin-top 8px
            width 100%
            box-sizing border-box
            height 44.5px
            padding 8.5px 8px 12px
            display flex
            justify-content space-between
            .user
              height 24px
              display flex
              .avatar
                width 24px
                height 24px
                border-radius 50%
                img
                  width 100%
                  height 100%
                  border-radius 50%
              .text
                height 24px
                margin-left 4px
                color #7f7f7f
            .see
              display flex
              color #7f7f7f
              align-items center
              .eye
                vertical-align middle
                margin-right 4px
          .item-bottom
            // width 100%
            height 40px
            // box-sizing border-box  
            padding 10px 0
            margin 0 10px
            display flex
            justify-content space-between
            align-items center
            border-top 1px solid #ccc
            .shopName  
              width 103.5px
              // height 16px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .goToBuy
              color #DD1A21
 
</style>
