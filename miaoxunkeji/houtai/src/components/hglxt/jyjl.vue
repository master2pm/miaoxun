<!-- 交易记录 -->
<template>
  <div class="" style="padding-top:28px;">
    <div class="" style="position:relative;margin-left:20px;">
      <span style="display: inline-block;height: 19px;border-left: 2px solid rgb(103, 104, 104);position: absolute;top: 4px;"></span>
      <span style="font-size:18px;margin-left: 8px;">交易记录</span>
      <div style="float:right;margin-right:20px;position:relative;">
        <ddzzz></ddzzz>
      </div>
    </div>
    <div class="zxx" style="margin-top:46.5px;border-bottom:1px solid rgb(242,242,242);padding-left:20px;">
      <span :class="{xzhong:type1=='0'}" @click="change(0)">全部</span>
      <span :class="{xzhong:type1=='1'}" @click="change(1)">已成交的订单</span>
      <span :class="{xzhong:type1=='2'}" @click="change(2)">已关闭的订单</span>
    </div>
    <div class="" style="padding:28px;border-bottom:1px solid rgb(242,242,242);cursor:pointer;" v-for="(item,index) in 4" @click="show('1')">
      <img :src="srcc+'/static/ddzz/test.png'" style="vertical-align: top;margin-bottom:10px;">
      <span style="display: inline-block;width: 173px;margin-top: 9px;">都是废话分还是佛法规划一返回给答复误改好多副误改</span>
      <img :src="srcc+'/static/ddzz/1-03.png'" style="vertical-align: top;margin-top: 7px;margin-left: 6px;">
      <span class="date" style="float: right;color: rgb(153,152,153);margin-top: 9px;">2017-10-28 15:43</span>
      <br>
      <span style="color:rgb(153,152,153);">订单号 ·</span>
      <span style="color:rgb(74,73,75);"> 1234567345</span>
      <span style="border-left:1px solid rgb(242,242,242);margin-left:16px;margin-right:20px;"></span>
      <span style="color:rgb(153,152,153);">采购苗木 ·</span>
      <span style="color:rgb(74,73,75);"> 2种</span>
      <span style="border-left:1px solid rgb(242,242,242);margin-left:16px;margin-right:20px;"></span>
      <span style="color:rgb(153,152,153);">运输总数 ·</span>
      <span style="color:rgb(74,73,75);">4000株</span>
      <span style="border-left:1px solid rgb(242,242,242);margin-left:16px;margin-right:20px;"></span>
      <span style="color:rgb(153,152,153);">苗木合计（不含运费） ·</span>
      <span style="color:rgb(96,180,70);"> ￥3000</span>
      <span style="float:right;" :class="{rcolor:type1=='2',gcolor:type1!='2'}">{{type1=='0'?"订单已成交":type1=='1'?"订单已成交":"订单已关闭"}}</span>
    </div>
    <pages :message="15"></pages>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
import ddzzz from '../common/ddzzs.vue';
import pages from '../common/page.vue';
export default {
  data(){
    return{
      type1:'',
      srcc:''
    }
  },
  components:{
    "ddzzz":ddzzz,
    "pages":pages
  },
  computed:{
    watch(){
      this.type1 = this.$route.params.type;
      console.log(this.type1);
    }
  },
  methods:{
    change(type){
      this.$router.push({name:'jyjl',params:{type:type,page:1}})
    },
    show(dd){
      this.$store.state.showdd = dd;
    }
  },
  mounted:function(){
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
