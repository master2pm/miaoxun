<template>
  <div>
    <div>
      <span style="font-size:31px;">公司名</span>
      <textarea v-model="gs" rows="2" cols="20" style="width: 200px; height: 40px;resize:none;border:none" placeholder="不要超过两行，一定要打换行"></textarea>
      <span>前4位数</span>
      <input type="text" v-model="qsix" style="border:none;" @change="test()">
      <span>第几开始</span>
      <input type="text" v-model="frist" style="border:none;">
      <span>几页</span>
      <input type="text" v-model="page" style="border:none;" placeholder="最多45页" @change="zbian()"><br>
      <span>公司字体大小</span>
      <input type="text" v-model="gsfsize" @change="zbian()">
      <span>number字体大小</span>
      <input type="text" v-model="numsize" @change="zbian()">
      <span>总宽</span>
      <input type="text" v-model="zwidth" style="border:none;" @change="zbian()">
      <span>总高</span>
      <input type="text" v-model="zheight" style="border:none;" @change="zbian()">
      <br>
      <span>公司字间距</span>
      <input type="text" v-model="gszjj" @change="zbian()">
      <span>number字间距</span>
      <input type="text" v-model="numzjj" @change="zbian()">
      <span>模板</span>
      <select v-model="ban" @change="changtest()">
        <option value ="1">1</option>
        <option value ="2">2</option>
        <option value ="3">3</option>
      </select>
      <span>二维码容错</span>
      <select v-model="ewmrc"  @change="test()">
        <option value ="1">L</option>
        <option value ="0">M</option>
        <option value ="3">Q</option>
        <option value ="2">H</option>
      </select>
      <br>
      <button @click="test()">生成预览一页</button>
      <button @click="ding()">下载</button>
      <button @click="back()">返回后台</button>
    </div>
    <div class="ewmbg" id="qr1">
      <img :src="srcc+'/static/erweima/1-0'+ban+'.png'" style="width:100%;height:100%;">
      <div class="gsname gnleft":class="{yihan:gs.indexOf('\n')=='-1',gntop:ban=='1',gntop2:ban=='2'}">
        <p>{{gs.substring(0,this.gs.indexOf("\n"))}}</p>
        <p>{{gs.substring(this.gs.indexOf("\n"))}}</p>
      </div>
      <div class="gsname gnright":class="{yihan:gs.indexOf('\n')=='-1',gntop:ban=='1',gntop2:ban=='2'}">
        <p>{{gs.substring(0,this.gs.indexOf("\n"))}}</p>
        <p>{{gs.substring(this.gs.indexOf("\n"))}}</p>
      </div>
      <div class="gsname gnleft" :class="{yihan:gs.indexOf('\n')=='-1',gntop1:ban=='1',gntop21:ban=='2'}">
        <p>{{gs.substring(0,this.gs.indexOf("\n"))}}</p>
        <p>{{gs.substring(this.gs.indexOf("\n"))}}</p>
      </div>
      <div class="gsname gnright" :class="{yihan:gs.indexOf('\n')=='-1',gntop1:ban=='1',gntop21:ban=='2'}">
        <p>{{gs.substring(0,this.gs.indexOf("\n"))}}</p>
        <p>{{gs.substring(this.gs.indexOf("\n"))}}</p>
      </div>
      <p class="number num1 numtop numleft">{{ma1}}</p>
      <p class="number num2 numtop numright">{{ma2}}</p>
      <p class="number num3 numtop1 numleft">{{ma3}}</p>
      <p class="number num4 numtop1 numright">{{ma4}}</p>
      <div id="qwe1" class="ewm ewmtop ewmleft"></div>
      <div id="qwe2" class="ewm ewmtop ewmright"></div>
      <div id="qwe3" class="ewm ewmtop1 ewmleft"></div>
      <div id="qwe4" class="ewm ewmtop1 ewmright"></div>
    </div>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      wh:"",//宽高
      srcc:"",//图片路径
      gs:"",//公司名
      frist:"1",//从哪开始
      page:"5",//第几页
      ma1:"",
      ma2:"",
      ma3:"",
      ma4:"",
      qsix:"",
      zwidth:"1448",
      // "595.28 841.89"
      zheight:"2048",
      gsfsize:"41",
      numsize:"72",
      gszjj:"0",//公司字间距
      numzjj:"0",//number字间距
      ban:"1",
      ewmrc:"1"
    }
  },
  computed:{
    watch(){

    }
  },
  methods:{
    changtest(){
      switch(this.ban){
        case "1":this.gsfsize="41";this.numsize="72";this.gszjj="0";this.numzjj="0";break;
        case "2":this.gsfsize="36";this.numsize="60";this.gszjj="2";this.numzjj="3";break;
        case "3":this.gsfsize="41";this.numsize="72";this.gszjj="0";this.numzjj="0";
          $(".ewmtop").css("top","22%");
          $(".ewmtop1").css("top","66%");
          $(".numtop").css("top","40.5%");
          $(".numtop1").css("top","84.5%");
          $(".numleft").css("left","18.1%");
          $(".numright").css("right","18.6%")
          break;
      }
    },
    zbian(){
      if(this.page > 45){
        this.page = 45;
      }
      $(".ewmbg").css("width",this.zwidth+"px");
      $(".ewmbg").css("height",this.zheight+"px");
      $(".gsname").css("font-size",this.gsfsize+"px");
      $(".number").css("font-size",this.numsize+"px");
      $(".number").css("letter-spacing",this.numzjj+"px");
      $(".gsname").css("letter-spacing",this.gszjj+"px");
    },
    test(){
      var that = this;
      $("canvas").remove();
      that.sc(parseInt(this.frist));
    },
    ding(){
      var that = this;
      var array = new Array();
      if(this.page!=""){
        var temp = parseInt(this.page);
        var tt = 0
        for(var i = 0 ; i < temp;i++){
          var temppage = parseInt(that.frist);
          temppage = Math.floor(temppage/4) + (temppage%4!=0?1:0) ;
          that.downloadimg(temppage);
          that.frist = parseInt(that.frist)+4;
          that.test();
          }
      }
    },
    downloadimg(index){
      var that = this;
      html2canvas($("#qr1")).then(function(canvas) {
      var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
      var filename = '1_' + (index<10?'00'+index:index<100?'0'+index:index) + ".png";
      that.saveFile(imgUri,filename);
      });
    },
    sc(num){
      this.ma1 = this.qsix + ((num + "").length==1?"00":((num + "").length==2?"0":"")) + num;
      this.ma2 = this.qsix + ((num + 1 + "").length==1?"00":((num + 1 + "").length==2?"0":"")) + (num + 1);
      this.ma3 = this.qsix + ((num + 2 + "").length==1?"00":((num + 2 + "").length==2?"0":"")) + (num + 2);
      this.ma4 = this.qsix + ((num + 3 + "").length==1?"00":((num + 3 + "").length==2?"0":"")) + (num + 3);
      var tempnum = 4.5;
      $(".num1").text(this.ma1);
      $(".num2").text(this.ma2);
      $(".num3").text(this.ma3);
      $(".num4").text(this.ma4);
      $("#qwe1").qrcode({text:this.ma1,width:parseInt(this.zwidth)/tempnum,height:parseInt(this.zwidth)/tempnum,correctLeve: this.ewmrc});
      $("#qwe2").qrcode({text:this.ma2,width:parseInt(this.zwidth)/tempnum,height:parseInt(this.zwidth)/tempnum,correctLeve: this.ewmrc});
      $("#qwe3").qrcode({text:this.ma3,width:parseInt(this.zwidth)/tempnum,height:parseInt(this.zwidth)/tempnum,correctLeve: this.ewmrc});
      $("#qwe4").qrcode({text:this.ma4,width:parseInt(this.zwidth)/tempnum,height:parseInt(this.zwidth)/tempnum,correctLeve: this.ewmrc});
    },
    saveFile(data,filename){
      var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = data;
      save_link.download = filename;
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);
    },
    back(){
      this.$router.push({name:"hglxt"});
    }
  },
  mounted:function(){
    this.srcc=this.$store.state.srcc;
    var k = 10;
    var klength = (k + "").length;
    this.zbian();
  }
}
</script>

<style lang="css" scoped>
  .ewmbg{
    position:relative;
    background-color: white;
  }
  .gsname{
    position:absolute;
    font-size: 15px;
    width: 29%;
  }
  .gsname > p {
    margin-bottom:0;
    text-align: center;
  }
  .number{
    font-size: 26px;
    position:absolute;
    font-size: 50px;
  }
  .yihan{
    margin-top: 2%;
  }
  .ewmtop{
    top:20%;
  }
  .ewmleft{
    left:17.5%;
  }
  .ewmright{
    right:17.5%;
  }
  .ewm{
    position:absolute;
  }
  .ewmtop1{
    top:64%;
  }

  /*模板1识别号*/
  .numtop{
    top:37.5%;
  }
  .numleft{
    left:18.5%;
  }
  .numright{
    right:17.5%;
  }
  .numtop1{
    top:81.5%;
  }

  /*模板2识别号*/
  .numtop2{
    top:37.2%;
  }
  .numleft2{
    left:18.5%;
  }
  .numright2{
    right:17.5%;
  }
  .numtop21{
    top:81.2%;
  }

  /*模板1 公司名*/
  .gnleft{
    left:14.5%;
  }
  .gnright{
    right:13.5%;
  }
  .gntop2{
    top:42.6%;
  }
  .gntop21{
    top:86.5%;
  }
  .gntop{
    top:12%;
  }
  .gntop1{
    top:56.5%;
  }
</style>
