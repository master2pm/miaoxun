<template>
  <div>
    <div class="waik" @click="testjump()">
      <div class="shang">
        <p>dfilsdfjsfklgj</p>
      </div>
      <div class="xia">
        <p>sdiogni</p>
      </div>
    </div>

    <div class="waikk" style="float:right;" @click="testjump1()">

    </div>
    <div>{{watch}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      booll:false,
      boolll:false
    }
  },
  computed:{
    watch(){

    }
  },
  methods:{
    testjump(){
      this.booll = !this.booll;
      if(this.booll){
        // $(".waik").css("height","300px");
        $(".xia").css("height","30%");
        $(".shang").css("height","70%");
      }else{
        $(".xia").css("height","70%");
        $(".shang").css("height","30%");
        // $(".waik").css("height","200px");
      }
    },
    testjump1(){
      this.boolll = !this.boolll;
      if(this.boolll){
        $(".waikk").css("height","300px");
      }else{
        $(".waikk").css("height","200px");
      }
    }
  },
  mounted:function(){

  }
}
</script>

<style lang="css" scoped>
  .waik,.waikk{
    border:1px solid;
    width:500px;
    height:200px;
    transition:1s all;
  }
  .shang,.shang1{
    height:50%;
    background-color:red;
    transition: 1s all;
  }
  .xia,.xia1{
    height:50%;
    background-color:black;
    transition: 1s all;
  }
</style>
