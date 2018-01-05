<template>
  <div>
    <div class="fone">
      <div style="border: 1px solid rgb(205, 205, 205);display: inline-block;padding: 3px 2px;transition:0.5s all;font-size:12px;" class="riqisai">
        <input type="date" class="tou" :class="{date1:date1==true}" @mouseenter="date1=true" @mouseleave="date1=false" v-model="tou">
        <span style="display: inline-block;width: 27px;border-top: 1px solid rgb(205, 205, 205);position: relative;bottom: 4px;"></span>
        <input type="date" class="wei" :class="{date2:date2==true}" @mouseenter="date2=true" @mouseleave="date2=false" v-model="wei">
      </div>
      <img :src="srcc+'/static/ddzz/1-01.png'" style="margin:0 9.5px;cursor:pointer;" class="riqiimg" @click="riqisai()">
      <img :src="srcc+'/static/ddzz/1-02.png'" @click="sous()" class="sousimg">
    </div>
    <div class="ssl">
      <input type="text" v-model="sousnr" placeholder="企业/团队/个人名称/订单号" style="position: absolute;transition: 0.5s all;border: none;width: 235px;font-size: 12px;z-index: 0;height:16px;">
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      sousnr:'',//搜索内容
      date1:false,//从哪天起的日期 被碰到
      date2:false,//到哪天的日期 被碰到
      tou:'',//从哪天起的日期
      wei:'',//到哪天的日期
      srcc:'',
      t:true
    }
  },methods:{
    test(){
      if(this.tou==''||this.wei==''){
        console.log('null');
        return false;
      }
      if(parseInt(this.tou.substring(0,this.tou.indexOf('-')))-parseInt(this.wei.substring(0,this.wei.indexOf('-')))<0){
        console.log("year");
        return true;
      }else if(parseInt(this.tou.substring(0,this.tou.indexOf('-')))-parseInt(this.wei.substring(0,this.wei.indexOf('-')))>0){
        console.log("err year");
        return false;
      } else if(parseInt(this.tou.substring(this.tou.indexOf('-')+1,this.tou.lastIndexOf('-')))-parseInt(this.wei.substring(this.wei.indexOf('-')+1,this.wei.lastIndexOf('-')))<0){
        console.log("mo");
        return true;
      } else if(parseInt(this.tou.substring(this.tou.indexOf('-')+1,this.tou.lastIndexOf('-')))-parseInt(this.wei.substring(this.wei.indexOf('-')+1,this.wei.lastIndexOf('-')))>0){
        console.log("err mo");
        return false;
      } else if(parseInt(this.tou.substring(this.tou.lastIndexOf('-')+1))-parseInt(this.wei.substring(this.wei.lastIndexOf('-')+1))>0){
        console.log("err day");
        return false;
      }
      return true;

    },
    sous(){
      if(this.t){
        $(".fone").css("opacity","0");
        $(".ssl").css("display","block");
        setTimeout(function(){
          $(".ssl").css("opacity","1");
          $(".ssl").append($(".sousimg"));
          $(".sousimg").addClass("sousua");
        },500)
      }else{
        $(".ssl").css("opacity","0");
        $(".sousimg").css("border","none")
        $(".sousimg").css("border-left","1px dashed rgb(205,205,205)");
        setTimeout(function(){
          $(".sousimg").removeClass("sousua");
          $(".fone").append($(".sousimg"));
          $(".ssl").css("display","none");
          $(".fone").css("opacity","1");
        },500);
      }
      this.t=!this.t;

    },
    riqisai(){
      if(!this.test()){
        alert("范围有问题");
        return;
      }
      alert("从"+this.tou+"到"+this.wei);
    }
  },mounted:function(){
    this.srcc = this.$store.state.srcc;
  }
}
</script>

<style lang="css" scoped>

  ::-webkit-clear-button,::-webkit-inner-spin-button,::-webkit-calendar-picker-indicator{
   display: none;
  }

  .tou{
    border:none;
    width:85px;
    color:rgb(205,205,205);
    margin-left: 20px;
  }

  .wei{
    border:none;
    width:105px;
    color:rgb(205,205,205);
  }

  .date1{
    width:105px;
    margin-left:0;
  }
  .date1::-webkit-calendar-picker-indicator,.wei::-webkit-calendar-picker-indicator{
    display: block;
  }
  /*::-webkit-datetime-edit{
    text-align:left;
  }*/
  .ssl{
    position: absolute;
    transition: 0.5s all;
    border: 1px solid rgb(205,205,205);
    padding: 5.5px 17px;
    width: 235px;
    font-size: 12px;
    z-index: 0;
    opacity: 0;
    height:16px;
    top:0;
    display: none;
  }
  .sousimg{
    transition: 0.5s all;
    margin-right: 9.5px;
    border-left: 1px dashed rgb(205,205,205);
    padding: 5px 11px;
    cursor:pointer;
  }

  .fone{
    transition: 0.5s all;
  }
  .sousua{
    position:absolute;
    top:0;
    right:-10px;
  }
</style>
