<template>
  <div>
    <div id="boss1" class="relative" style="background:url('/static/tu-download/1-01.png') no-repeat;background-size:100% 140%;">
  		<headers  id="head" style="top:0;" ></headers>
      <div class="" style="padding-left:465px;padding-top:100px;">
        <div class="relative" style="margin-top:32px;color:white;">
          <img src="/static/tu-download/1-03.png"/>
          <p style="margin-top:25px;font-size:48px;font-family:hei45;letter-spacing:0.1em;">苗讯科技</p>
          <div style="line-height:70px;letter-spacing:0.01em;">
            <span style="font-size:70px;font-family:hei35;letter-spacing:0.05em">APP2.0</span>
            <span style="font-size:65px;font-family:hei55;">全新上线</span>
          </div>
          <div style="padding-top:95px;">
            <div style="background-color:white;width:160px;height:160px;padding:5px;float:left;">
              <img style="float:left;width:160px;height:160px;" src="/static/tu-download/1-04.png"/>
            </div>
            <div class="relative" style="margin-top:9.5px;left:39.82px;width:500px;">
              <img src="/static/tu-download/1-08.png" style="margin-bottom:24.5px;" class="cursor" @click="down('ad')"/><br>
              <img src="/static/tu-download/1-07.png" class="cursor" @click="down('ios')"/>
            </div>
          </div>
          <img src="/static/tu-download/1-02.png" style="position:absolute;top:-30px;left:655px;"/>
        </div>

      </div>
    </div>
    <div id="boss2" style="background:url(/static/tu-download/1-09.png) no-repeat;background-size:100%;background-attachment: fixed;">
      <div class="logot">
          <img class="logo" src="/static/tu-download/1-11.png"/>
      </div>
      <div style="color:white;" class="zt">
        <p  class="mxkj">苗讯科技</p>
        <p  class="ap2" >APP2.0全新上线</p>
      </div>
      <div style="" class="downloadimg">
        <img class="cursor an" src="/static/tu-download/1-10.png" @click="down('an')"/><br>
        <img class="cursor io" style=""src="/static/tu-download/1-12.png" @click="down('ios')"/>
      </div>
    </div>
  </div>
</template>

<script>
import headers from '../common/headers.vue'
export default {
  data(){
    return {
        ai:true,
        android:'',
        ios:''
    }
  },
  components:{
    'headers':headers
  },
  methods:{
    down(jx){
      if(jx=='ios'){
        location.href=this.ios
      }else{
        location.href=this.android

      }

    }
  },
  mounted(){
    var that = this;
    $.get("http://m1-ymboss.leanapp.cn/addon/iOS/version?from=client",function(data){
      console.log(data);
      that.ios = data.results[0].trackViewUrl;
    })
    $.get("http://m1-ymboss.leanapp.cn/addon/android/version?from=client",function(data){
      console.log(data);
      that.android = data.results.url;
    });

}
}
</script>

<style scoped>
  /*body{
    overflow-y: hidden;
  }*/
  .logot{
    padding-top:30%;
    padding-left:28%;
  }
  /*两个下载图片*/
  .downloadimg{
    padding-top:20%;
    padding-left:26.3%;
  }
  /*两个下载图片*/
  .an,.io{
    width:80%;
  }
  /*ios*/
  .io{
    padding-top:15%;
  }
  /*两行字 苗讯科技 app*/
  .zt{
    padding-left: 10%;
  }
  /**/
  .mxkj{
    font-size:40px;
    padding-left:28%;
    line-height:100px;
    font-family: hei50;
  }
  .ap2{
    font-size:65px;
    padding-left:13%;
    font-family: hei55;
  }
  #boss2{
    position:absolute;
    height:120%;
    top:-65px;
    min-width:100%;
  }
  #app{
    max-width:100%;
    max-height:100%;
  }
  #boss1{
    width:100%;
    min-width:1024px;
    margin:0 auto;
  }
  @media screen and (max-width: 1920px){
    #boss1 {
      min-height:913px;
    }
  }
  @media screen and (max-width: 1024px){
    #head{
      position:fixed !important;
    }
  }

  /*@media  screen and (min-width: 1921px) {
    #boss1 {
      min-height:1273px;
    }
  }*/

  @media screen and (max-width: 720px){
    #head {
      display: none;
    }
    #boss2 {
      display: block;
    }
    #boss1 {
      display: none;
    }
  }
  @media screen and (min-width: 721px){
    #head {
      display: block;
    }
    #boss2 {
      display: none;
    }
    #boss1 {
      display: block;
    }
  }
  @media screen and (max-width:359px){
    .downloadimg{
      padding-top: 15%;
    }
    .an,.io {
      width:55%;
    }
    .io {
        padding-top: 12%;
    }
    .zt{
      padding-left: 10%;
      padding-top: 5%;
    }
    .mxkj{
      padding-left:22%;
      font-size: 35px;
      line-height: 45px;
    }
    .logo{
      width: 50%;
      padding-left: 7%;
    }
    .ap2{
      padding-left: 0%;
      font-size: 35px;
    }
    .logot{
      padding-top: 40%;
      padding-left: 28%;
    }
  }
  /*360~399*/
  @media (min-width:360px) and (max-width:399px){
    .downloadimg{
      padding-top: 15%;
    }
    .an,.io {
      width:55%;
    }
    .io {
        padding-top: 12%;
    }
    .zt{
      padding-left: 10%;
      padding-top: 11%;
    }
    .mxkj{
      padding-left:22%;
      font-size: 35px;
      line-height: 75px;
    }
    .logo{
      width: 40%;
      padding-left: 7%;
    }
    .ap2{
      padding-left: 6%;
      font-size: 35px;
    }
    .logot{
      padding-top: 40%;
      padding-left: 28%;
    }
  }

  /*400~639*/
  @media (min-width:400px) and (max-width:639px){
    .logot{
      padding-top: 40%;
    }
    .downloadimg{
      padding-top: 15%;
    }
    .an,.io {
      width:55%;
      padding-left: 4%;
    }
    .io {
        padding-top: 12%;
    }
    .zt{
      padding-left: 10%;
    }
    .mxkj{
      padding-left:24%;
    }
    .logo{
      width: 43%;
      padding-left: 7%;
    }
    .ap2{
        font-size: 42px;
        padding-left:2%;
    }
  }

  /*640~720*/
  @media (min-width:640px) and (max-width:720px){
    .downloadimg{
      padding-top: 15%;
    }
    .an,.io {
      width:55%;
    }
    .io {
        padding-top: 12%;
    }
    .zt{
      padding-left: 10%;
    }
    .mxkj{
      padding-left:24%;
    }
    .logo{
      width: 25%;
      padding-left: 7%;
    }

  }

  @font-face {
  font-family: hei35; /*这里是说明调用来的字体名字*/
  src: url('/static/font_404956_f92h4v4evqn3tyb9/HYQiHei-35S.otf'); /*这里是字体文件路径*/
  }
  @font-face {
  font-family: hei40; /*这里是说明调用来的字体名字*/
  src: url('/static/font_404956_f92h4v4evqn3tyb9/HYQiHei-40S.otf'); /*这里是字体文件路径*/
  }
  @font-face {
  font-family: hei50; /*这里是说明调用来的字体名字*/
  src: url('/static/font_404956_f92h4v4evqn3tyb9/HYQiHei-50S.otf'); /*这里是字体文件路径*/
  }
  @font-face {
  font-family: hei55; /*这里是说明调用来的字体名字*/
  src: url('/static/font_404956_f92h4v4evqn3tyb9/HYQiHei-55S.otf'); /*这里是字体文件路径*/
  }

</style>
