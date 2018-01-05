<template>
    <div style="position:absolute;top:0;">
      <div  style="width:100%;overflow-y:hidden;" class="ztzt">
        <img v-if='weixin&&!ios' src="/static/tu-download/down1.png" style="width: 83%;position: absolute;top: 2%;left: 9%;">
        <img src="/static/tu-download/down2.png" style="width:100%;">
        <img :src="weixin?'/static/tu-download/down6.png':'/static/tu-download/down3.png'" style="position: absolute;width: 70%;top: 44%;left:16%;" class="logo"/>
        <img :src="ios?'/static/tu-download/1-12.png':'/static/tu-download/down5.png'" style="width: 42%;position: absolute;top: 46%;left: 30%;"@click="download()" v-if="!weixin||ios"/>
        <img src="/static/tu-download/down4.png" style="width:100%;position:absolute;bottom:0%;"/>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      link:'',
      weixin:false,
      ios:false,
      iheight:""
    }
  },
  computed:{

  },methods:{
    download(){
      var that = this;
      location.href = that.link;
    }
  },
  mounted(){
    var that = this;
    var u = navigator.userAgent;
    $("#app").css("min-width","0px");
    console.log(u)
    if(u.indexOf("MicroMessenger")!='-1'){
      that.weixin = true;
    }
    if(u.indexOf("iPhone")!='-1'||u.indexOf("iPad")!='-1'){
      that.ios = true;
      $.get("http://m1-ymboss.leanapp.cn/addon/iOS/version?from=client",function(data){
        // console.log(data);
        that.link = data.results[0].trackViewUrl;
        location.href = data.results[0].trackViewUrl;
        console.log(234)
      })
    }else{
      $.get("http://m1-ymboss.leanapp.cn/addon/android/version?from=client",function(data){
        // console.log(data);
        that.link = data.results.url;
      });
    }
    if(!that.weixin||that.ios){
      $(".logo").css("top","16%");
    }
    // setTimeout(function(){
    //   $(".ztzt").css("height",window.innerHeight +"px");
    // },1000);
  }
}
</script>

<style lang="css" scoped>

</style>
