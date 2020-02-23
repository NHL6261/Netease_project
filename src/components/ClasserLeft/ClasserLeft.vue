<template>
  <div id="ClasserContainerList">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="(listItem, index) in classerlist" :key="index" @click="getIsShow()">
          <router-link :to="`/classer/classerright/${listItem.id}`">
            {{ listItem.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import Bscroll from 'better-scroll'
  export default{
      data(){
          return{
              LeftListItem:[],
              isShow:false
          }
      },
     async mounted(){
          this.$store.dispatch('getNavLeftList')
          this.$store.dispatch('getClasserList')
          this.$nextTick(() => {
              this.scrpll = new Bscroll(this.$refs.wrapper,{
                //   允许点击
                  click:true
              })
          })
          this.$router.push(`/classer/classerright/${this.navleftlist.categoryL1List[0].id}`)
      },
      computed:{
          ...mapState({
              classerlist: state => state.classerlist,
              navleftlist: state => state.navleftlist
          })
      },
      methods:{
        getIsShow(){
          this.isShow = !this.isShow
        }
      },
      watch:{
        
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#ClasserContainerList
    display inline-block
    width 30%
    height 1148px
    background-color #fff
    .wrapper
        height 1100px
        width 162px
        overflow hidden
        border-right 2px solid #F3F3F3
        .content
            box-sizing border-box
            padding 20px 0 98px
            height 1150px
            li
                width 162px
                height 50px
                margin-top 40px
                color #333
                line-height 50px
                font-size 30px
                text-align center
                background-color #ffffff
                position relative
            .active
                color #ab2b2b
                &:before
                    content ""
                    display block
                    width 6px
                    height 50px
                    position absolute
                    background-color #ab2b2b
</style>
