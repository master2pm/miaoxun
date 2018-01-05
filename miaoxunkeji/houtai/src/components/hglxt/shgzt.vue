<template>
  <div id="boss">
    <headers></headers>
    <div style="margin-top:38px;width:100%;">
      <div style="width:1200px;margin:0 auto;">
        <div id="left">
          <div style="padding:25px;" v-if="name!='ddzz'">
            <div class="">
              <p style="color:rgb(153,152,153);font-size:13px;margin-bottom:18px;">快捷入口</p>
              <div style="font-size:13px;margin-left:14px;">
                <p @mouseleave="kjrk=0" @mouseenter="kjrk=1" @click="change('mm')" :class="{kjrkz:kjrk==1}">苗木待审核</p>
                <p @mouseleave="kjrk=0" @mouseenter="kjrk=2" @click="change('qy')" :class="{kjrkz:kjrk==2}">企业待认证</p>
                <p @mouseleave="kjrk=0" @mouseenter="kjrk=3" @click="change('user')" :class="{kjrkz:kjrk==3}">用户待认证</p>
              </div>
            </div>
            <div class="">
              <p style="color:rgb(153,152,153);font-size:13px;margin-bottom:18px;">其他</p>
              <div style="font-size:13px;margin-left:14px;">
                <p @mouseleave="kjrk=0" @mouseenter="kjrk=4" @click="change('ewm')" :class="{kjrkz:kjrk==4}">二维码批量生成</p>
              </div>
            </div>
          </div>
          <div v-if="name=='ddzz'">
            <div class="">
              <p style="color:rgb(153,152,153);font-size:13px;margin:29px 0px 10px 25px;">全部分类</p>
              <div style="font-size:13px;">
                <p @click="change1(0)" :class="{lx:type==0}" style="padding:10px 0 10px 40px;margin:0;cursor:pointer;">预采购苗木</p>
                <p @click="change1(1)" :class="{lx:type==1}" style="padding:10px 0 10px 40px;margin:0;cursor:pointer;">苗木运单</p>
                <p @click="change1(2)" :class="{lx:type==2}" style="padding:10px 0 10px 40px;margin:0;cursor:pointer;">已关闭的交易</p>
              </div>
            </div>
          </div>
        </div>
        <div id="right">
          <router-view style=""></router-view>
        </div>
      </div>
    </div>
    <xiangx></xiangx>
    <ddxiang></ddxiang>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
import headers from '../common/header.vue';
import xiangx from '../common/xiangxi.vue';
import ddxiang from '../common/ddxiangxi.vue';
export default {
    data(){
      return{
        kjrk:0,
        type:'',
        name:''
      }
    },
    components:{
      'headers':headers,
      'xiangx':xiangx,
      'ddxiang':ddxiang
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
</style>
