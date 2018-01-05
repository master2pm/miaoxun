<template>
  <div id="boss">
    <headers></headers>
    <div style="margin-top:38px;width:100%;">
      <div style="margin:0 auto;" class="kb">
        <router-view style=""></router-view>
      </div>
    </div>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
import headers from '../common/header.vue';
export default {
    data(){
      return{
        kjrk:0,
        type:'',
        name:''
      }
    },
    components:{
      'headers':headers
    },
    computed:{
      watch(){
        this.type = this.$route.params.type;
        this.name = this.$store.state.mtype;
      }
    },
    methods:{
      change(type){
        var type1 = '1';
        switch (type) {
          case "qy":
          case "user": type1 = '1';break;
          case "mm": type1 = '2';break;
        }
        if(type!="ewm"){
          this.$router.push({name:type,params:{type:type1,page:'1'}});
        }else{
          this.$router.push({name:type});
        }
      },
      change1(type){
        if(type == this.type){
          return;
        }
        this.$router.push({name:"ddzz",params:{type:type,page:'1'}})
      }
    },
    mounted:function(){
      var that = this;
      setTimeout(function(){
        console.log(that.$store.state.user)
        var token = sessionStorage.getItem("sessiontoken");
        if(token==''||token==null){
          that.$router.push({name:"login"});
        }
      },100)

      $("html").css("background-color","rgb(242,242,242)!important");
      $("body").css("width","100%");
      console.log(this.$route.params.type=='ddzz');
      $("body").css("overflow","hidden");
    }
}
</script>

<style lang="css" scoped>
  #boss{width:100%;max-width:1920px;min-width:1024px;margin:0 auto;}
  #left{
    background-color: white;
    float:left;
    width: 184px;
    height: 805px;
    margin: 4px auto 2px;
  }
  #right{
    float:left;
    width: 1000px;
    height: 796px;
    background-color:white;
    margin-left: 16px;
    margin-top: 16px;
    position:relative;

  }

  #left > div > div > p{
    margin-bottom: 22px;
    cursor:pointer;
  }
  .kjrkz{
    color: rgb(38, 156, 136);
  }
  .lx{
    background-color:rgb(41,150,131);
    color:white;
  }
  .kb{
    width:1200px;
  }
</style>
