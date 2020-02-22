<template>
  <div>
    <router-view></router-view>
    <Footer v-show="$route.meta.FooterisShow"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './components/Footer/Footer'
  export default {
    components:{
      Footer
    }
  }
</script>

<style lang="stylus">

 
</style>
