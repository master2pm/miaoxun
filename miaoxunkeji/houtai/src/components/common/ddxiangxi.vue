<!-- 订单详细 -->
<template>
  <div>
    <div v-if="dd!=''" style="position:fixed;width:100%;height:100%;top:0;z-index:8;">
      <div style="background-color:black;opacity:0.5;height:100%;width:100%;position:absolute;top:0;left:0;z-index:-2;" @click="clear()"></div>
      <div style="width: 856px;z-index: 9;margin: 1% auto 0;height:100%;">
        <div style="position:relative;height:100%">
          <img :src="srcc+'/static/xiangxi/1-01.png'">
          <div style="position:absolute;top:44px;">
            <span style="font-size: 26px;display: inline-block;padding-left: 40px;letter-spacing:2px;color:white;width:291px;height:73px;overflow:hidden;">{{type2=='0'||type2=='1'?dd.purchase_group.name:dd.receive_group.name}}</span>
            <img style="margin-left: 10px;position: relative;vertical-align: top;"   :src="type2=='1'||type2=='0'?(dd.purchase_group.type=='private'?srcc+'/static/xiangxi/1-03.png':dd.purchase_group.type!='group'?srcc+'/static/xiangxi/1-04.png':srcc+'/static/xiangxi/1-05.png'):(dd.receive_group.type=='private'?srcc+'/static/xiangxi/1-03.png':dd.receive_group.type!='group'?srcc+'/static/xiangxi/1-04.png':srcc+'/static/xiangxi/1-05.png')">
            <p style="font-size: 26px;padding-left: 40px;color:white;" v-if="type2=='1'||type2=='0'?dd.purchase_group.type!='private':dd.receive_group.type!='private'">苗圃场</p>
          </div>

          <div style="background-color:rgb(242,242,242);padding-top:15px;height:77%;" @mouseenter="yk=true" @mouseleave="yk=false" :class="{yk:yk,yh:!yk}">

            <div style="background-color: white;margin-bottom: 15px;padding: 36.5px 40px;">
              <span style="color:rgb(153,152,153);font-size:18px;">{{type1!='xsf'?"供苗方 · ":'采购方 · '}}</span>
              <span style="color:rgb(103,104,104);font-size:18px;">{{type2=='1'||type2=='0'?dd.tree.mu_ground.gg_name:dd.send_group.contacts}}</span>
            </div>

            <div style="background-color:white;margin-bottom: 15px;padding: 36.5px 40px;" v-if="type2=='2'||type2=='3'">
              <span style="color:rgb(153,152,153);font-size:18px;">验苗方式 · </span>
              <span style="color:rgb(103,104,104);font-size:18px;">{{dd.check_type=='0'?'不需要验苗':dd.check_type=='1'?'由买家亲自验苗':'苗讯提供验苗服务'}}</span>
              <div v-if="dd.pay_type!=''">
                <span style="color:rgb(153,152,153);font-size:18px;">付款方式 · </span>
                <span style="color:rgb(103,104,104);font-size:18px;" >{{yuns}}</span>
              </div>
              <div v-if="dd.carriages[0].ship_type=='1'">
                <span style="color:rgb(153,152,153);font-size:18px;">运输方式 · </span>
                <span style="color:rgb(103,104,104);font-size:18px;">买家自提苗木</span>
              </div>
            </div>

            <div v-if="(type2=='2'||type2=='3')&&dd.carriages[0].ship_type!='1'" style="background-color:white;margin-bottom: 15px;padding:36.5px 40px;">
              <div style="line-height:28px;">
                <span style="color:rgb(153,152,153);font-size:18px;">运输方式 · </span>
                <span style="color:rgb(103,104,104);font-size:18px;">{{dd.transport_type=="1"?"第三方物流运输":"卖家提供运输"}}</span>
              </div>
              <div style="line-height:28px;">
                <span style="color:rgb(153,152,153);font-size:18px;">运单号 · </span>
                <span style="color:rgb(103,104,104);font-size:18px;">{{dd.sn}}</span>
              </div>
              <div style="line-height:28px;">
                <span style="color:rgb(153,152,153);font-size:18px;">预定发货时间 · </span>
                <span style="color:rgb(103,104,104);font-size:18px;">{{dd.delivery_disposeAt}}</span>
              </div>
              <div style="line-height:28px;">
                <span style="color:rgb(153,152,153);font-size:18px;">目的地点 · </span>
                <span style="color:rgb(103,104,104);font-size:18px;">{{dd.delivery_address}}</span>
              </div>
              <div style="line-height:28px;">
                <span style="color:rgb(153,152,153);font-size:18px;">运费报价 · </span>
                <span style="font-size:18px;":class="{hc:dd.current_freight=='',gc:dd.current_freight!=''}">{{dd.current_freight==''?"等待报价":"￥"+dd.current_freight}}</span>
              </div>
            </div>



            <div style="background-color:white;padding:35px 40px;margin-bottom:15px;width:777px;">
              <p style="font-size:18px;position:relative;color:rgb(103,104,104);" v-if="type2=='0'||type2=='1'">
                {{dd.check_type=='0'?"不需要验苗":dd.check_type=='1'?"由买家亲自验苗":"苗讯提供验苗服务"}}
                <span style="border-bottom: 2px solid rgb(242, 242, 242);display: inline-block;width: 87%;position: absolute;top: 12px;margin-left: 10px;"></span>
              </p>
              <span style="color:rgb(153,152,153);font-size:18px;">供苗方联系人 · </span>
              <span style="color:rgb(103,104,104);font-size:18px;">
                {{type2=='0'||type2=='1'?dd.tree.mu_ground.gg_contacts:dd.send_group.contacts}}
              </span>
              <img :src="srcc+'/static/ddzz/1-06.png'" style="float:right;">
              <br>
              <span style="color:rgb(153,152,153);font-size:18px;">联系电话 · </span>
              <span style="color:rgb(103,104,104);font-size:18px;">
                {{type2=='0'||type2=='1'?(dd.tree.mu_ground.gg_contact_number.substring(0,3)+"-"+dd.tree.mu_ground.gg_contact_number.substring(3,7)+"-"+dd.tree.mu_ground.gg_contact_number.substring(7)):
                (dd.receive_group.contact_number.substring(0,3)+"-"+dd.receive_group.contact_number.substring(3,7)+"-"+dd.receive_group.contact_number.substring(7))}}
              </span>
            </div>

            <div style="background-color:white;padding:35px 40px;margin-bottom:15px;font-size:18px;width:777px;">

              <div style="display:inline-block;" v-if="type2!='3'">
                <div v-if="type2=='2'||type2=='3'" style="display:inline-block;">
                  <span style="color:rgb(103,104,104);">采购苗木</span>
                  <span style="color:rgb(96,179,70);">{{dd.carriages.length}}</span>
                  <span style="color:rgb(103,104,104);margin-right:67px;">种</span>
                </div>
                <span style="color:rgb(103,104,104);">合计（不含运费）：</span>
                <span style="color:rgb(96,179,70);">{{"￥"+(type2=='0'||type2=='1'?(dd.amount*dd.current_price):count)}}</span>
              </div>

              <div style="display:inline-block;" v-if="type2=='3'">
                <span>未收货合计（不含运费）:</span>
                <span style="color:rgb(201,104,50);margin-right:26px;">{{"￥"+wsh}}</span>
                <span>已收货合计（不含运费）:</span>
                <span style="color:rgb(96,179,70);">{{"￥"+ysh}}</span>
              </div>

              <span style="display:inline-block;float:right;":class="{rc:!(type1=='cgf'&&(type2=='1'||type2=='3')),hc:type1=='cgf'&&(type2=='1'||type2=='3')}">
                {{type1=='cgf'?(type2=='0'?"等待确认交易":type2=='1'?"等待验苗报告":type2=='2'?'等待确认运输':'待收货'):(type2=='0'?'等待承接订单':type2=='1'?'等待确认交易':type2=='2'?'等待运费报价':'等待发货')}}
              </span>
            </div>


            <div style="background-color:white;padding:35px 40px;margin-bottom:15px;width:777px;" v-if="type2=='1'||type2=='0'">
              <img :src="dd.tree.mu_photo[0].url" style="width:90px;height:160px;float:left;margin-right:20px;">
              <div>
                <p style="margin:0;font-size:26px;color:rgb(74,73,75);margin-bottom:16px;">{{dd.tree.mu_name}}<span style="font-size: 16px;color: white;background-color: rgb(53, 173, 74);display: inline-block;padding: 1px 3px;vertical-align: middle;position: relative;bottom: 2px;margin-left: 3px;">{{dd.tree.mu_type.substring(0,1)}}</span></p>
                <p v-if="dd.tree.mu_type!='草坪'&&dd.tree.mu_type!='袋苗'" style="margin:0;font-size:16px;color:rgb(103,104,104);">
                  {{dd.tree.mu_mj_min!=''?"米径"+dd.tree.mu_mj_min+"-"+dd.tree.mu_mj_max+"cm":"地径"+dd.tree.mu_dj_min+"-"+dd.tree.mu_dj_max+"cm"}}
                  {{(dd.tree.mu_mj_min!=''||dd.tree.mu_dj_min)&&dd.tree.mu_zg_min!=''?" · ":""}}
                  {{dd.tree.mu_zg_min!=''?"自然高" + dd.tree.mu_zg_min+'-'+dd.tree.mu_zg_max+'cm':''}}
                  {{(dd.tree.mu_mj_min!=''||dd.tree.mu_dj_min||dd.tree.mu_zg_min!='')&&dd.tree.mu_rg_min!=''?" · ":""}}
                  {{dd.tree.mu_rg_min!=''?"肉高" + dd.tree.mu_rg_min+'-'+dd.tree.mu_rg_max+'cm':''}}
                </p>
                <p v-if="dd.tree.mu_type!='草坪'&&dd.tree.mu_type!='袋苗'" style="margin:0;font-size:16px;color:rgb(103,104,104);margin-bottom:14px;">
                  {{dd.tree.mu_zfjg_min!=''?'主分枝高'+dd.tree.mu_zfjg_min+"-"+dd.tree.mu_zfjg_max+"cm":''}}
                  {{dd.tree.mu_zfjg_min!=''?" · ":""}}
                  {{dd.tree.mu_gf_min!=''?'冠幅'+dd.tree.mu_gf_min+"-"+dd.tree.mu_gf_max+"cm":''}}
                </p>

                <p style="margin:0;font-size:16px;color:rgb(103,104,104);" v-if="dd.tree.mu_type=='草坪'||dd.tree.mu_type=='袋苗'">
                  {{dd.tree.mu_type=='草坪'?"草坪长"+dd.tree.lawn_width+"cm":"几斤袋"+dd.tree.mu_package_weight}}
                  {{dd.tree.mu_type=='草坪'?" · 草坪宽"+dd.tree.lawn_length+"cm":"自然高"+dd.tree.mu_zg_min+'-'+dd.tree.mu_zg_max+'cm'}}
                </p>
                <p style="margin:0;font-size:16px;color:rgb(103,104,104);margin-bottom:14px;" v-if="dd.tree.mu_type=='草坪'||dd.tree.mu_type=='袋苗'">
                  {{dd.tree.mu_type=='草坪'?"密度"+dd.tree.lawn_density+"%":"冠幅"+dd.tree.mu_gf_min+'-'+dd.tree.mu_gf_max+'cm'}}
                  {{dd.tree.mu_type=='草坪'?" · 每捆数量"+dd.tree.lawn_amount+"片":''}}
                </p>

                <span style="display:inline-block;font-size:18px;color:rgb(96,179,70);margin-bottom:7px;">{{"￥"+dd.current_price+"/"+dd.tree.unit}}</span>
                <span v-if="type2=='2'||type1=='3'" style="text-decoration: line-through;font-size:12px;color:rgb(153,152,153);display:inline-block;margin-left:38px;">{{dd.current_price!=dd.tree.mu_price?(dd.tree.mu_price=='-1'?'面议':"￥"+dd.tree.mu_price+"/"+dd.tree.unit):""}}</span>
                <span style="font-size:12px;color:rgb(103,104,104);float:right;">{{"预采购数量"+dd.amount+dd.tree.unit}}</span>
                <p style="font-size:12px;color:rgb(153,152,153);">{{dd.tree.mu_ground.gg_address.province+"·"+dd.tree.mu_ground.gg_address.city+"·"+dd.tree.mu_ground.gg_address.detail_address}}</p>
              </div>
            </div>

            <div style="background-color:white;padding:35px 40px;margin-bottom:15px;width:777px;" v-if="type2=='2'||type2=='3'" v-for="(item,index) in dd.carriages">
              <img :src="item.tree.mu_photo[0].url" style="width:90px;height:160px;float:left;margin-right:20px;">
              <div>
                <p style="margin:0;font-size:26px;color:rgb(74,73,75);margin-bottom:16px;">{{item.tree.mu_name}}<span style="font-size: 16px;color: white;background-color: rgb(53, 173, 74);display: inline-block;padding: 1px 3px;vertical-align: middle;position: relative;bottom: 2px;margin-left: 3px;">{{item.tree.mu_type.substring(0,1)}}</span></p>



                <p v-if="item.tree.mu_type!='草坪'&&item.tree.mu_type!='袋苗'" style="margin:0;font-size:16px;color:rgb(103,104,104);">
                  {{item.tree.mu_mj_min!=''?"米径"+item.tree.mu_mj_min+"-"+item.tree.mu_mj_max+"cm":"地径"+item.tree.mu_dj_min+"-"+item.tree.mu_dj_max+"cm"}}
                  {{(item.tree.mu_mj_min!=''||item.tree.mu_dj_min)&&item.tree.mu_zg_min!=''?" · ":""}}
                  {{item.tree.mu_zg_min!=''?"自然高" + item.tree.mu_zg_min+'-'+item.tree.mu_zg_max+'cm':''}}
                  {{(item.tree.mu_mj_min!=''||item.tree.mu_dj_min||item.tree.mu_zg_min!='')&&item.tree.mu_rg_min!=''?" · ":""}}
                  {{item.tree.mu_rg_min!=''?"肉高" + item.tree.mu_rg_min+'-'+item.tree.mu_rg_max+'cm':''}}
                </p>
                <p v-if="item.tree.mu_type!='草坪'&&item.tree.mu_type!='袋苗'" style="margin:0;font-size:16px;color:rgb(103,104,104);margin-bottom:14px">
                  {{item.tree.mu_zfjg_min!=''?'主分枝高'+item.tree.mu_zfjg_min+"-"+item.tree.mu_zfjg_max+"cm":''}}
                  {{item.tree.mu_zfjg_min!=''?" · ":""}}
                  {{item.tree.mu_gf_min!=''?'冠幅'+item.tree.mu_gf_min+"-"+item.tree.mu_gf_max+"cm":''}}
                </p>

                <p style="margin:0;font-size:16px;color:rgb(103,104,104);" v-if="item.tree.mu_type=='草坪'||item.tree.mu_type=='袋苗'">
                  {{item.tree.mu_type=='草坪'?"草坪长"+item.tree.lawn_width+"cm":"几斤袋"+item.tree.mu_package_weight}}
                  {{item.tree.mu_type=='草坪'?" · 草坪宽"+item.tree.lawn_length+"cm":"自然高"+item.tree.mu_zg_min+'-'+item.tree.mu_zg_max+'cm'}}
                </p>
                <p style="margin:0;font-size:16px;color:rgb(103,104,104);margin-bottom:14px;" v-if="item.tree.mu_type=='草坪'||item.tree.mu_type=='袋苗'">
                  {{item.tree.mu_type=='草坪'?"密度"+item.tree.lawn_density+"%":"冠幅"+item.tree.mu_gf_min+'-'+item.tree.mu_gf_max+'cm'}}
                  {{item.tree.mu_type=='草坪'?" · 每捆数量"+item.tree.lawn_amount+"片":''}}
                </p>


                <span style="display:inline-block;font-size:18px;color:rgb(96,179,70);margin-bottom:7px;">{{"￥"+item.current_price+"/"+item.tree.unit}}</span>
                <span v-if="type2=='2'||type1=='3'" style="text-decoration: line-through;font-size:12px;color:rgb(153,152,153);display:inline-block;margin-left:38px;">{{item.current_price!=item.tree.mu_price?(item.tree.mu_price=='-1'?'面议':"￥"+item.tree.mu_price+"/"+item.tree.unit):""}}</span>
                <p style="font-size:12px;color:rgb(103,104,104);float:right;margin-bottom:0;">
                  {{(type2=='1'||type2=='0')?("预采购数量"+item.amount+item.tree.unit):type2=='2'||type1=='xsf'?('运输数量'+item.amount+item.tree.unit):'采购数量'+item.amount+" | 已收货"+item.accept_count+item.tree.unit}}
                </p>
                <br>
                <p style="font-size:12px;color:rgb(153,152,153);float:right;">{{item.pay_type=="1"?"货到付款":item.pay_type=="2"?"上车付款":"分期付款"}}</p>
                <p style="font-size:12px;color:rgb(153,152,153);">{{item.tree.mu_ground.gg_address.province+"·"+item.tree.mu_ground.gg_address.city+"·"+item.tree.mu_ground.gg_address.detail_address}}</p>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <div style="display:none">{{watch}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      srcc:'',
      yk:false,
      dd:'',//订单
      xxdd:'',
      type1:'',//销售方，采购方
      type2:'',//待确定
      count:'',//合计
      yuns:'',//运输方式
      wsh:'',//未收货合计
      ysh:''//已收货合计
    }
  },
  computed:{
    watch(){
      this.dd = this.$store.state.showdd;
      this.type1 = this.$store.state.mtype;
      this.type2 = this.$route.params.type;
      this.mcount();
      console.log(this.dd);
    }
  },
  methods:{
    clear(){
      this.$store.state.showdd = '';
    },
    mcount(){
      if(this.dd == ''||this.type2=='1'||this.type2=='0'){
        return;
      }
      var that = this;
      that.count = 0;
      that.yuns = '';
      that.wsh = 0;
      that.ysh = 0;
      $.each(that.dd.carriages,function(index){
        that.count += this.amount * this.current_price;
        switch(this.pay_type){
          case '1':that.yuns += that.yuns.indexOf("货到付款")==-1?((that.yuns.length>1?" · ":"")+"货到付款"):"";break;
          case '2':that.yuns += that.yuns.indexOf("上车付款")==-1?((that.yuns.length>1?" · ":"")+"上车付款"):"";break;
          case '3':that.yuns += that.yuns.indexOf("分期付款")==-1?((that.yuns.length>1?" · ":"")+"分期付款"):"";break;
        }
        that.wsh += (this.amount - this.accept_count) * this.current_price;
        that.ysh += this.accept_count * this.current_price;
      })
    }
  },
  mounted:function(){
    this.srcc = this.$store.state.srcc;
    this.dd = this.$store.state.showdd;
    this.type1 = this.$store.state.mtype;
    this.type2 = this.$route.params.type;
  }
}
</script>

<style lang="css" scoped>
  .yk{
    overflow-y:scroll;
    overflow-x: hidden;
  }
  .yh{
    overflow:hidden;
  }
  .rc{
    color:rgb(191,64,64);
  }
  .hc{
    color:rgb(153,152,153);
  }
  .gc{
    color:rgb(96,179,70);
  }
</style>
