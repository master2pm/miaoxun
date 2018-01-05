<template>
  <div style="margin:0 auto;max-width: 1920px;position:fixed;width:100%;top:0;z-index:5;" :class="{zd1:ddxl==true}">
    <div style="background-color:rgb(54,54,54);height:40px;">
      <div style="margin: 0 auto;" class="hewidth">
        <img :src="srcc+'/static/header/1-01.png'" style="margin-top:4px;">
        <span class="user_name" style="cursor: pointer;color: rgb(242, 105, 35);display: inline-block;text-align: right;float: right;font-size: 13px;padding: 11px 20px 1px 12.5px;height: 27.5px;" :class="{bsbj:is_tuo}" @mouseenter="is_tuo=true" @mouseleave="is_tuo=false">
          {{user_name}}
        </span>
        <img :src="srcc+'/static/header/1-02.png'" style="margin-top: 17px;cursor:pointer;position:relative;float:right;right:-52px;" :class="{dus:is_tuo}">

        <span style="border-left: 2px solid rgb(103, 104, 104);display: inline-block;float: right;height: 27px;margin-top: 7px;" v-if="!is_tuo" ></span>
        <div class="user_fd" style="background-color: white;position: absolute;right: 360px;z-index: 1;width: 216px;top: 39.5px;padding-top:15px;height:80px;" v-if="is_tuo" @mouseenter="is_tuo=true" @mouseleave="is_tuo=false">
          <span style="cursor: pointer;color: rgb(38, 156, 136);float: right;margin-top: 5px;margin-right: 15px;"@click="back()">退出</span>
          <img :src="user_img" style="width:50px;height:50px;float:left;margin-left:15px;">
          <div class="" style="float:left;margin-left:15px;">
            <p style="display:inline-block;border-left:2px solid rgb(191,64,64);height:20px;font-size:12px;margin-bottom:14px;margin-left:4px;padding-left:5px;">管理员</p>
            <p style="font-size:18px;margin-bottom:0;">{{user_name}}</p>
          </div>
          <p style="border-bottom: 1px dashed rgb(242, 242, 242);position: absolute;bottom: 0;width: 100%;"></p>
        </div>
      </div>
    </div>
    <div style="background-color: white;height: 60px;">
      <div class="hewidth" style="margin: 0 auto;">
        <span style="display: inline-block;text-align: center;font-size: 18px;color: rgb(38, 156, 136);padding: 18px 55px;">审核工作台</span>
        <ul class="biaoq">
          <li style="margin-left: 50px;z-index:1;">首页</li>
          <li :class="{bqzhong:type=='user'||type=='qy'||type=='mm'}" @mouseenter="xs(true)" @mouseleave="xs(false)" style="position:relative;z-index:2;">
            审核/认证
            <div class="xll">
              <ul>
                <li :class="{bqzhong1:type=='user',bla:type!='user'}" @click="change('user')" >用户</li>
                <li :class="{bqzhong1:type=='qy',bla:type!='qy'}" @click="change('qy')" style="margin:5px 0;" >企业</li>
                <li :class="{bqzhong1:type=='mm',bla:type!='mm'}" @click="change('mm')">苗木审核</li>
              </ul>
            </div>
          </li>
          <li :class="{bqzhong:type=='ddzz'}" style="position:relative;z-index:1;" @click="change('ddzz')">订单跟踪</li>
          <li :class="{bqzhong:type=='jypm'}" style="position:relative;z-index:1;" @click="change('jypm')">交易排名</li>
        </ul>
        <div class="shsou">
          <input v-model="tiaj" @change="sous()" type="text" style="display: inline-block;height: 35px;width: 215px;border: 1px solid rgb(224, 224, 224);margin-top: 10px;padding-left: 13px;padding-right: 42px;" placeholder="苗木名称/发布者">
          <div style="background-color: rgb(38, 156, 136);width: 35px;height: 39px;position: absolute;right: 0;top: 10px;"@click="sous()">
            <img :src="srcc+'/static/header/1-03.png'" style="padding: 12px;cursor:pointer;">
          </div>
        </div>
      </div>
    </div>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      type:'user',
      tiaj:'',//苗木搜索
      srcc:'',//图片路径
      user_name:'',//用户名
      user_img:'',//用户头像
      is_tuo:false,//名字下拉
      ddxl:false,
      xlbs1:false,
      xlbs2:false,
      xlbs3:false,
      timer:'',
      blbl:'',
      bl1:true
    }
  },
  computed:{
    watch(){
      this.type = this.$router.app._route.name;
    }
  },
  methods:{
    back(){
      sessionStorage.setItem("sessiontoken","");
      this.$router.push({name:"login"});
    },
    change(type){
      var that = this;
      if(this.type == type ){
        return;
      }
      this.$router.push({name:type,params:{type:'0',page:'1'}});
      $(".xll").css("opacity","0");
      that.bl1=false;
      setTimeout(function(){
        $(".xll").css("display","none");
        that.bl1=true;
      },500);
      clearInterval(that.timer);
    },
    sous(){
      this.$router.push({name:"mhss",params:{neir:this.tiaj}});
      location.reload();
    },
    xs(booll){
      var that = this;
      if(booll&&that.bl1){
        that.blbl = false;
        console.log("gogogogogo")
        clearInterval(that.timer);
        $(".xll").css("display","inline-block");
        setTimeout(function(){
          $(".xll").css("opacity","1");
        },100)
      }else{
        console.log("倒计时开始")
        that.blbl = true;
        var temp = 1;
        that.timer = setInterval(function(){
          temp--;
          console.log(temp);
          if(temp<=0){
            $(".xll").css("opacity","0");
            setTimeout(function(){
              if(that.blbl)
              $(".xll").css("display","none");
            },500);
            clearInterval(that.timer);
          }
        },1000)
      }
    }
  },
  mounted:function(){
    console.log(this.$router.app._route.name);
    console.log(this.$route.params.type);
    this.srcc = this.$store.state.srcc;
    this.user_name = sessionStorage.getItem("user_name");
    this.user_img = sessionStorage.getItem("user_img");
    setTimeout(function(){
      var temp = $(".user_name").css("width").replace("px","");
      console.log(temp)
      $(".user_fd").css("width",parseInt(temp)+197+"px");
    },200);
  }
}
</script>

<style lang="css" scoped>
  .biaoq > li {
    display: inline-block;
    padding: 16.5px 5px;
    font-size: 13px;
    cursor:pointer;
  }
  .bqzhong {
    color:rgb(38, 156, 136);
    border-bottom: 2px solid;
  }
  .biaoq{
    display: inline-block;
    margin-bottom: 0;
  }
  .hewidth{
    width:1200px;
  }
  .bsbj{
    background-color: white;
  }
  .dus{
    transform: rotate(180deg);
    top: 10px;
  }
  .shsou{
    display: inline-block;
    position:absolute;
  }
  @media screen and (max-width:1199px){
    .hewidth{
      width:100%;
    }
  }
  @media screen and (max-width:685px){
    .hewidth{
      width:685px;
    }
  }
  @media (min-width:765px){
    .shsou{
      position:relative;
      float:right;

    }
  }
  .ddgz {
    transition: 0.5s all;
    position: absolute;
    top: 40px;
    background-color: white;
    left: -4px;
    width: 82.74px;
    border: 1px solid rgb(242,242,242);
    height: 72.7px;
    opacity: 0;
  }
  .bqzhong1 {
    color:rgb(38, 156, 136);
  }
  .bqzhong2 {
    color:rgb(103,104,104);
  }
  .ddgz > p {
    margin-bottom:0px;
    margin-left:9px;
    margin-right:5px;
    padding-top:4px;
  }

  .zd1{
    z-index:1;
  }

  .bla{
    color:black;
  }
  .xll{
    position:absolute;
    background-color:white;
    border:1px solid #F2F2F2;
    padding:10px;
    width:60px;
    left:-1px;
    top:40px;
    transition: 0.5s all;
    display:none;
    opacity: 0;
  }
</style>
