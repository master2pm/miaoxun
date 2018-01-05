<!-- 采购方 -->
<template>
  <div class="" style="padding-top:28px;">
    <div class="" style="position:relative;margin-left:20px;">
      <span style="display: inline-block;height: 19px;border-left: 2px solid rgb(103, 104, 104);position: absolute;top: 4px;"></span>
      <span style="font-size:18px;margin-left: 8px;">采购商</span>
      <div style="float:right;margin-right:20px;position:relative;">
        <ddzzz></ddzzz>
      </div>
    </div>
    <div class="zxx" style="margin-top:46.5px;border-bottom:1px solid rgb(242,242,242);padding-left:20px;">
      <span :class="{xzhong:type1=='0'}" @click="change(0)">待确认交易</span>
      <span :class="{xzhong:type1=='1'}" @click="change(1)">等待验苗报告</span>
      <span :class="{xzhong:type1=='2'}" @click="change(2)">待确认运输</span>
      <span :class="{xzhong:type1=='3'}" @click="change(3)">待收货</span>
    </div>

    <div class="" style="padding:28px;border-bottom:1px solid rgb(242,242,242);cursor:pointer;" v-for="(item,index) in data" @click="show(item)">
      <img :src="type1==0||type1==1?item.purchase_group.avatar.url:item.receive_group.avatar.url" style="vertical-align: top;margin-bottom:10px;height:56.8px;width:56.8px;border-radius:30px;">
      <span style="display: inline-block;width: 173px;margin-top: 9px;">{{type1==0||type1==1?item.purchase_group.name:item.receive_group.name}}</span>
      <img :src="type1==0||type1==1?(item.purchase_group.type=='private'?srcc+'/static/ddzz/1-03.png':item.purchase_group.type=='group'?srcc+'/static/ddzz/1-04.png':srcc+'/static/ddzz/1-05.png'):(item.receive_group.type=='private'?srcc+'/static/ddzz/1-03.png':item.receive_group.type=='group'?srcc+'/static/ddzz/1-04.png':srcc+'/static/ddzz/1-05.png')"
      style="vertical-align: top;margin-top: 7px;margin-left: 6px;">
      <span class="date" style="float: right;color: rgb(153,152,153);margin-top: 9px;">{{type1==0||type1==1?item.purchase_group.createdAt:item.receive_group.createdAt}}</span>
      <br>
      <span style="color:rgb(153,152,153);">{{type1==0||type1==1?"采购名称 ·":"运单号 ·"}}</span>
      <span style="color:rgb(74,73,75);"> {{type1==0||type1==1?item.tree.mu_name:item.sn}}</span>
      <span style="border-left:1px solid rgb(242,242,242);margin-left:16px;margin-right:20px;"></span>
      <span style="color:rgb(153,152,153);">{{type1==0||type1==1?"预采购数量 ·":"采购苗木 ·"}}</span>
      <span style="color:rgb(74,73,75);"> {{type1==0||type1==1?item.amount+item.tree.unit:item.carriages.length+"种"}}</span>
      <span style="border-left:1px solid rgb(242,242,242);margin-left:16px;margin-right:20px;"></span>
      <div style="display: inline-block;position: relative;margin-right: 12px;padding-right: 21px;" v-if="type1==2||type1==3">
        <span style="color:rgb(153,152,153);">运输总数 ·</span>
        <span style="color:rgb(74,73,75);"> {{count[index]+"株"}}</span>
        <span style="border-left: 1px solid rgb(242, 242, 242);position: absolute;height: 19px;top: 0;right: 0;"></span>
      </div>
      <span style="color:rgb(153,152,153);">苗木合计（不含运费） ·</span>
      <span style="color:rgb(96,180,70);"> {{"￥"+(type1==0||type1==1?(item.amount*item.current_price):count1[index])}}</span>
      <span style="float:right;" class="rcolor">{{type1=='0'?"待确认交易":type1=='1'?'等待验苗报告':type1=='2'?"待确定运输":"待收货"}}</span>
    </div>

    <pages></pages>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
import ddzzz from '../common/ddzzs.vue';
import pages from '../common/page.vue';
export default {
  data(){
    return{
      type1:'',//分类
      srcc:'',
      t:true,
      data:'',
      count:'',
      count1:''
    }
  },
  components:{
    'ddzzz':ddzzz,
    'pages':pages
  },
  computed:{
    watch(){
      this.type1 = this.$route.params.type;
      console.log(this.type1);
      this.$route.params.page;
      this.getdata();
    }
  },
  methods:{
    change(type){
      if(type==this.$route.params.type){
        return;
      }
      this.$router.push({name:'cgf',params:{type:type,page:1}});
      this.getdata();
    },
    show(dd){
      var that = this;
      var token = sessionStorage.getItem("sessiontoken");
      if(this.type1=='2'||this.type1=='3'){
        that.$store.state.showdd = dd;
        return;
      }
      $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/transaction/"+dd.objectId,{"sessiontoken":token},function(data){
        that.$store.state.showdd = data.results;
      })
    },
    getdata(){
      var that = this;
      var url = "";
      var sat = "";
      var token = sessionStorage.getItem("sessiontoken");
      switch(parseInt(that.$route.params.type)){
        case 0:url="http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/transaction?status=purchase_wait_for_confirm";break;
        case 1:url="http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/transaction?status=purchase_wait_for_report";break;
        case 2:url="http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/shipment?status=purchase_wait_for_shipment_confirm";break;
        case 3:url="http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/shipment?status=purchase_wait_for_shipment_accept";break;
      }

      $.get(url,{limit:"4",page:that.$route.params.page,"sessiontoken":token},function(data){
        console.log(data);
        that.$store.state.htpageCount = data.results.page_count;
        that.data = data.results.data;
        if(that.type1=='2'||that.type1=='3'){
          that.count = new Array();
          that.count1 = new Array();
          for(var i = 0 ; i < that.data.length;i++){
              that.count[i] = 0;
              that.count1[i] = 0;
            for(var j = 0 ; j < that.data[i].carriages.length;j++){
              that.count[i] += that.data[i].carriages[j].amount;
              that.count1[i] += that.data[i].carriages[j].current_price * that.data[i].carriages[j].amount;
            }
          }
        }
      })
    }
  },
  mounted:function(){
    var that = this;
    this.srcc = this.$store.state.srcc;
  }
}
</script>

<style lang="css" scoped>
  .zxx > span{
    display: inline-block;
    height:40px;
    margin-right: 11px;
    font-size:13px;
    padding:0 10px;
    cursor:pointer;
  }

  .xzhong{
    color:rgb(38,156,136);
    border-bottom:1px solid rgb(38,156,136);
  }

  .rcolor{
    color:rgb(191,64,64);
  }

  .gcolor{
    color:rgb(96,180,70);
  }

  .hcolor{
    color:rgb(153,152,153);
  }

</style>
