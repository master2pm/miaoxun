<template style="width:1266px;">
  <div class="">
    <!-- 左边选择 -->
    <div style="float:left;width:280px;height:940px;background-color:white;margin-top:5px;">
      <input type="text" v-model="ssf" style="border:none;background-color:#F1F1F1;font-size:14px;padding:6px 21px;border-radius:20px;margin-top:20px;width:228px;margin-left:6px;margin-bottom:10px;" placeholder="采购方/供苗方">
      <div class="" style="position:relative;z-index:2;">
        <span class="zx" style="margin-left:5px;" @click="bian('1')">采购方</span>
        <span class="zx" @click="bian('2')">供苗方</span>
        <span style="display:inline-block;font-size:12px;cursor:pointer;color:#279582;position:absolute;right:5px;border:1px solid #F1F1F1;padding:4px 8px;top:4px;" @click="ttype=true">{{gqt=='个'?"个人":gqt=='企'?"企业":"团队"}}</span>
        <ul style="position:absolute;font-size:12px;right:5px;top:29px;background-color:white;border:1px solid #F1F1F1;padding:2px 8px;z-index:5;" v-if="ttype">
          <li v-if="gqt!='个'" @click="changet('个')" style="margin-bottom:2px;cursor:pointer;">个人</li>
          <li v-if="gqt!='团'" @click="changet('团')" style="margin-bottom:2px;cursor:pointer;">团队</li>
          <li v-if="gqt!='企'" @click="changet('企')" style="margin-bottom:2px;cursor:pointer;">企业</li>
        </ul>
        <span style="display:inline-block;width:5px;border-bottom:1px solid #F1F1F1;position:absolute;z-index:1;bottom:0;left:0;" ></span>
        <span class="btx"></span>
      </div>
      <div class="" v-for="index in 10" style="z-index:1;padding:10px 0;border-bottom:5px solid #DCDCDC;width:280px;height:45px;cursor:pointer;" @click="uid=index" :class="{dqxz:uid==index}">
        <span :class="{num1:index==1,num2:index==2,num3:index==3,num4:index>3}" style="width:25px;display:inline-block;text-align:center;">{{index>1000?index.substring(0,2)+"..":index}}</span>
        <img src="" style="width:40px;height:40px;border:1px solid;border-radius:30px;overflow:hidden;">
        <span style="font-size:13px;width:160px;height:35px;display:inline-block;vertical-align:middle;overflow:hidden;">{{"阿斯达四大阿萨德阿斯达四大阿萨大神阿萨德阿"}}</span>
        <img :src="srcc+'/static/ddzz/1-0'+(gqt=='个'?'3':gqt=='企'?'5':'4')+'.png'" style="width:28px;">
      </div>
    </div>




    <div style="float:left;width:985.5px;height:960.7px;margin-top:16px;margin-left:16px;">
      <div style="position:relative;">
        <img :src="srcc+'/static/ddzz/1-07.png'" style="width:985.5px;height:97px;">
        <div style="position:absolute;top:0;left:0;padding:13px 15px;width:956px;">
          <span style="font-size:26px;color:white;width:325px;height:70px;display:inline-block;">{{"按时到肯定阿萨德你就看吧水电费"}}</span>
          <img :src="srcc+'/static/xiangxi/1-03.png'" style="width:58px;position:absolute;top:15px;left:340px;">
          <span style="font-size:18px;color:white;position:absolute;bottom:20px;right:13px;">
            {{"联系人：阿萨德"}}
            <img :src="srcc+'/static/ddzz/1-08.png'" style="margin-left:10px;">
            <span style="display:inline-block;height:17px;border-left:1px dashed #FFFFFF;margin:0 22px;position:relative;top:3px;"></span>
            {{"联系电话: 135-7854-7551"}}
          </span>
        </div>
        <div style="background-color:#FFFFFF;font-size:16px;">
          <span style="display:inline-block;color:#989698;padding:17.5px 30px;cursor:pointer;">{{"近三个月采购单"}}</span>
          <span style="display:inline-block;cursor:pointer;padding:17.5px 5px;" :class="{xz:ddtype==0,mo:ddtype!=0}" @click="ddzl(0)">预采购苗木</span>
          <span style="display:inline-block;margin:0 35px;cursor:pointer;padding:17.5px 5px;" :class="{xz:ddtype==1,mo:ddtype!=1}" @click="ddzl(1)">苗木运单</span>
          <span style="display:inline-block;cursor:pointer;padding:17.5px 5px;" :class="{xz:ddtype==2,mo:ddtype!=2}" @click="ddzl(2)">已关闭的交易</span>
        </div>


        <div style="height:670px;" :class="{oxh:chu1,oyh:!chu1}" @mouseenter="chu1=true" @mouseleave="chu1=false">
          <p style="font-size:14px;color:#989698;padding:10px 14px;margin-bottom:0;">{{ddtype==1?"预采购苗木进行中":"进行中的苗木运单"}}</p>
          <div v-for="item in 6" style="border:1px solid #989698;height:16px;width:955.5px;padding:20px 14px;background-color:white;position:relative;">
            <div style="display:inline-block;" v-if="ddtype==1">
              <span style="display:inline-block;color:#989698;">运单号 · </span>
              <span style="display:inline-block;">11234567</span>
              <span style="display:inline-block;border-left:2px solid #989698;height:15px;margin:0 15px;position:relative;top:2px;"></span>
            </div>

            <span style="display:inline-block;color:#989698;">采购方 · </span>
            <span style="display:inline-block;width:180px;margin-right:22px;">{{"阿斯达四大阿萨大神十大".length>12?("阿斯达四大阿萨大神十大".substring(0,12)+".."):("阿斯达四大阿萨大神十大")}}</span>
            <span class="xt" :class="{l407:ddtype==1}"></span>
            <span style="display:inline-block;color:#989698;">供苗方 · </span>
            <span class="gmfn" :class="{mr0:ddtype==1}">{{"阿斯蒂芬还是电饭煲电饭锅".length>12?("阿斯蒂芬还是电饭煲电饭锅".substring(0,12)+".."):("阿斯蒂芬还是电饭煲电饭锅")}}</span>

            <div style="display:inline-block;margin-right:32px;" v-if="ddtype==1">
              <span style="border-left:1px solid #989698;height:15px;display:inline-block;position:relative;top:2px;margin-right:5px;"></span>
              <span style="display:inline-block;color:#989698;">种类 · </span>
              <span style="display:inline-block;color:#4A484B;width:50px;">10种</span>
            </div>



            <span style="display:inline-block;color:#DCDCDC;margin-right:22px;">{{ddtype!=1?"响应超时":"超时"}}</span>
            <span style="display:inline-block;border-left:2px solid #DCDCDC;height:15px;position:relative;top:3px;"></span>
            <span class="xqan" :class="{l910:ddtype==1}" @click="goxq('123')">{{ddtype!=1?"查看详情":"详情"}}</span>
          </div>
          <p style="font-size:14px;color:#989698;padding:10px 14px;margin-bottom:0;">{{ddtype==1?"预采购苗木流程已完成的苗木":"已完成的苗木运单"}}</p>
          <div v-for="item in 6" style="border:1px solid #989698;height:16px;width:955.5px;padding:20px 14px;background-color:white;position:relative;">
            <div style="display:inline-block;" v-if="ddtype==1">
              <span style="display:inline-block;color:#989698;">运单号 · </span>
              <span style="display:inline-block;">11234567</span>
              <span style="display:inline-block;border-left:2px solid #989698;height:15px;margin:0 15px;position:relative;top:2px;"></span>
            </div>

            <span style="display:inline-block;color:#989698;">采购方 · </span>
            <span style="display:inline-block;width:180px;margin-right:22px;">{{"阿斯达四大阿萨大神十大".length>12?("阿斯达四大阿萨大神十大".substring(0,12)+".."):("阿斯达四大阿萨大神十大")}}</span>
            <span class="xt" :class="{l407:ddtype==1}"></span>
            <span style="display:inline-block;color:#989698;">供苗方 · </span>
            <span class="gmfn" :class="{mr0:ddtype==1}">{{"阿斯蒂芬还是电饭煲电饭锅".length>12?("阿斯蒂芬还是电饭煲电饭锅".substring(0,12)+".."):("阿斯蒂芬还是电饭煲电饭锅")}}</span>

            <div style="display:inline-block;margin-right:32px;" v-if="ddtype==1">
              <span style="border-left:1px solid #989698;height:15px;display:inline-block;position:relative;top:2px;margin-right:5px;"></span>
              <span style="display:inline-block;color:#989698;">种类 · </span>
              <span style="display:inline-block;color:#4A484B;width:50px;">10种</span>
            </div>



            <span style="display:inline-block;color:#DCDCDC;margin-right:22px;">{{ddtype!=1?"响应超时":"超时"}}</span>
            <span style="display:inline-block;border-left:2px solid #DCDCDC;height:15px;position:relative;top:3px;"></span>
            <span class="xqan" :class="{l910:ddtype==1}" @click="goxq('123')">{{ddtype!=1?"查看详情":"详情"}}</span>
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
      ssf:'',//搜索的东东
      srcc:'',
      gqt:'团',
      uid:1,
      chu1:false,
      ddtype:0,
      ttype:false
    }
  },
  mounted:function(){
    this.srcc = this.$store.state.srcc;
    $(".kb").css("width","1286px");
  },
  computed:{
    watch(){
      this.srcc = this.$store.state.srcc;
    }
  },
  methods:{
    bian(type){
      if(false){
        return;
      }
      switch(type){
        case "1":$(".btx").css({"width":"275px","left":"5px"});break;
        case "2":$(".btx").css({"width":"217px","left":"63px"});break;
      }
    },
    // 订单种类 0预采购苗木 1苗木运单 2已关闭的交易
    ddzl(type){
      if(this.ddtype==type){
        this.return;
      }
      this.ddtype = type;
    },
    changet(type){
      var that = this;
      that.gqt = type;
      that.ttype = false;
    },
    goxq(id){
      var tt = location.href;
      var link = tt.substring(0,tt.indexOf('xt')+3);
      switch(this.ddtype){
        case 0:window.open(link+"ycgxq/"+id);break;
        case 1:window.open(link+"ycgxq/"+id);break;
        case 2:window.open(link+"ycgxq/"+id);break;
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .zx{
    display:inline-block;
    font-size:13px;
    color:#989698;
    border:1px solid #F1F1F1;
    border-bottom:none;
    padding:9px;
    z-index:2;
    cursor:pointer;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
  .btx{
    display:inline-block;
    width:217px;
    border-bottom:1px solid #F1F1F1;
    position:absolute;
    z-index:1;
    bottom:0;
    left:63px;
    transition: 0.5s all;
  }
  .num1{
    color:#B5403E;
  }
  .num2{
    color:#C06532;
  }
  .num3{
    color:#279582;
  }
  .num4{
    color:#676868;
  }
  .mo{
    color:#676868;

  }
  .xz{
    color:#279582;
    border-bottom:2px solid #279582;
  }
  .dqxz{
    border-right: 3px solid #279582;
  }
  .oxh{
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .oyh{
    overflow: hidden;
  }
  .xqan{
    display:inline-block;
    color:#676868;
    border:1px solid #DCDCDC;
    padding:6px 13px;
    position:absolute;
    border-radius:5px;
    top:12px;
    left:880px;
    cursor:pointer;
  }
  .l910{
    left:910px;
  }
  .xt{
    display:inline-block;
    height:15px;
    border-left:1px solid #989698;
    position:absolute;
    top:22px;
    left:247px;
  }
  .l407{
    left:407px;
  }
  .gmfn{
    display:inline-block;
    width:180px;
    margin-right:255px;
  }
  .mr0{
    margin-right:0;
  }
</style>
