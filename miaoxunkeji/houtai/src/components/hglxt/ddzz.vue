<template>
  <div class="oo">
    <div class="" style="padding-top:30px;padding-left:20px;position:relative;margin-bottom:18px;">
      <span style="display:inline-block;height:20px;border-left:2px solid;position:relative;top:4px;margin-right:7px;"></span>
      <span style="font-size:18px;color:rgb(75,73,75);">{{type=='0'?"预采购苗木":type=='1'?'苗木运单':'已关闭的交易'}}</span>
      <input type="text" style="border:none;background-color:rgb(242,242,242);width:220px;height:30px;float:right;border-radius:30px;padding-left:17px;" placeholder="采购商/供应商">
    </div>
    <div class="" style="width:1000 px;border:1px solid rgb(221,221,221);font-size:14px;padding:17.5px 14px;position:relative;" v-for="item in 10">
      <div style="display:inline-block;position:relative;margin-right:32px;" v-if="type=='1'">
        <span style="display:inline-block;color:#989698;">运单号 · </span>
        <span style="display:inline-block;color:#4A494B;">{{"12331234"}}</span>
        <span style="height:19px;display:inline-block;border-left:1px solid rgb(221,221,221);position:absolute;top:0;left:138px;"></span>
      </div>
      <span style="display:inline-block;color:rgb(221,221,221);">采购方 · </span>
      <span style="display:inline-block;width:200px;">{{"撒大声地所阿斯达四大"}}</span>
      <span class="xt" :class="{l424:type=='1',l290:type!='1'}"></span>
      <span style="display:inline-block;color:rgb(221,221,221);margin-left:37px;">供苗方 · </span>
      <span style="display:inline-block;width:200px;">{{"奥术大师大所大多阿萨斯大神"}}</span>

      <div style="display:inline-block;position:relative;" v-if="type=='1'">
        <span style="height:19px;display:inline-block;border-left:1px solid rgb(221,221,221);position:absolute;top:0;left:0px;"></span>
        <span style="display:inline-block;color:rgb(221,221,221);margin-left:13px;">种类 · </span>
        <span style="display:inline-block;">{{"10种"}}</span>
      </div>

      <span style="color:rgb(182,64,62);" :class="{ml50:type=='1',ml210:type!='1'}">{{type!='1'?"响应超时":"超时"}}</span>
      <span class="xt r137" :class="{r95:type=='1'}"></span>
      <span @click="ckxq()" style="cursor:pointer;display:inline-block;font-size:16px;color:rgb(103,105,105);border:1px solid rgb(221,221,221);padding:4px 15px;border-radius:5px;position:absolute;right:12px;top:13px;">{{type!='1'?"查看详情":"详情"}}</span>
    </div>
    <pages></pages>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
import pages from '../common/page.vue'
export default {
  data(){
    return{
      type:""
    }
  },
  components:{
    'pages':pages
  },
  computed:{
      watch(){
        this.type = this.$route.params.type;
      }
  },
  mounted:function(){

  },
  methods:{
    ckxq(){
      var tt = location.href;
      var link = tt.substring(0,tt.indexOf('xt')+3);
      window.open(link+"ycgxq/1231231212312")
    }
  }
}
</script>

<style lang="css" scoped>
  .mgr0{
    margin-right: 0;
  }
  .l424{
    left:424px;
  }
  .xt{
    height:19px;
    display:inline-block;
    border-left:1px solid rgb(221,221,221);
    position:absolute;
    top:18px;
  }
  .r137{
    right:137px;
  }
  .r95{
    right: 95px;
  }
  .l290{
    left:290px;
  }
  .ml210{
    margin-left:210px;
  }
  .ml50{
    margin-left:50px;
  }
</style>
