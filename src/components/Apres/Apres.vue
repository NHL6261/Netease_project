<template>
  <div id="Apres">
    <div class="wrapperItem">
      <div class="ApresItem" v-for="(item, index) in autarkylist" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.desc}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  mounted(){
    this.$store.dispatch('getAutarkyList')
  },
  computed:{
    ...mapState({
      autarkylist: state => state.autarkylist
    })
  }
}
</script>

<style lang="stylus">
  #Apres
    width 100%
    height 72px
    background-color #fff
    .wrapperItem
      width 100% 
      height 72px
      display flex
      justify-content space-between
      text-align center
      line-height 40px
      padding 20px
      box-sizing border-box
      .ApresItem
        display flex
        img 
          width 35px
          height 35px
          vertical-align middle
        span
          vertical-align middle
          margin-left 5px
</style>
