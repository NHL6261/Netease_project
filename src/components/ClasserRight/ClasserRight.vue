<template>
  <div id="RightContainer">
    <div class="wrapper" ref="wrapper">
        <div class="content">
          <div class="HeaderBanner">
            <!-- 头部照片 -->
            <div class="Banner">
              <img :src="cateObjList.picUrl" alt="">
            </div>
            <div class="ImgListItem">
                <ul class="ListImg">
                  <li class="cateItem" v-for="(ListItem, index) in cateObjList.categoryList? cateObjList.categoryList:cateObjList.subCateList" :key="index">
                    <!-- 每张照片 -->
                    <div class="CateImgWrapper">
                        <img :src="ListItem.wapBannerUrl" alt="">
                    </div>
                    <div class="CateText">
                      {{ListItem.name}}
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import  BScroll from 'better-scroll'
  export default {
    data(){
      return{
        cateObjList: {},
        cateList: [],
        ImgUrl:""
      }
    },
  async mounted(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper,{ click:true })
      })
      this.cateList = await this.$API.getCatListItem()
      // console.log(this.$route.params.id);
      // console.log('右侧数据为:',this.CatListItem)
      // 思路一,先获取id 传参 在params里有id
      this.cateObjList = this.cateList.find(item => item.id === this.$route.params.id*1)
      // 获取图片
      this.ImgUrl = this.cateObjList.picUrl
    },
    // computed: {
    //   getImg(imgId){
    //     let result = imgId.reduce((pre,e) => {
	  //       return  Pre + e
    //     },0)
    //     return result
    //   }
    // },
    // methods: {
    //     getImg(ImgUrl){
    //     let result = this.ImgUrl.reduce((pre,e) => {
	  //       return  Pre + e
    //     },0)
    //     return result
    //   }
    // },
    watch: {
      $route(){
        this.cateObjList = this.cateList.find(item => item.id === this.$route.params.id*1)
        // 获取图片
        this.ImgUrl = this.cateObjList.picUrl
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  #RightContainer
    width 578px
    height calc(100vh - 88px)
    padding 30px 30px 21px
    box-sizing border-box
    background-color #fff
    margin-left 5px
    display inline-block
    float right
    .wrapper
      width 528px
      height 1118px
      overflow hidden
      background-color #fff 
      .content
        width 528px
        box-sizing border-box
        .HeaderBanner
          width 528px
          .Banner
            width 528px
            height 192px
            img 
              width 528px
              height 192px
          .ImgListItem
            width 528px
            .ListImg
              width 528px
              clearFix()
              .cateItem
                width 144px
                height 216px
                margin-right 32px
                float left
                .CateImgWrapper
                  width 14px
                  height 144px
                  img   
                    width 144px
                    height 144px
                    background-color #fff
                .CateText
                  width 144px
                  font-size 24px
                  text-align center
                  color #333
                  line-height 36px




 
</style>
