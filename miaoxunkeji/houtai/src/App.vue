<template>
  <div id="app">


   <transition :name="this.$store.state.transitioner">
    <router-view></router-view>
  </transition>


  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
@import './assets/css/common.css';
@import './assets/css/bootstrap.min.css';
  #app{
    width:100%;
    min-width:1024px;
    margin:0 auto;
  }
  .fade-enter-active {
    position:relative;
    transition: all 1s ease;
    left:0;
  }
  .fade-enter{
  	left:100%;
  }
  .fade-leave{
    left:-100%;
  }
  .fade2-enter-active {
    position:relative;
    transition: all 1s ease;
    left:0;
  }
  .fade2-enter{
  	left:-100%;
  }
  .fade2-leave{
    left:100%;
  }

</style>
