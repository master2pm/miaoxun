<!-- 预采购详情 -->
<template>
  <div class="">
    <div style="margin:56px auto 0;width:1200px;position:relative;">
      <div style="position:relative;z-index:2;">
        <img :src="srcc+'/static/ddzz/1-07.png'" style="width:100%;">
        <div style="position:absolute;top:14px;left:14px;">
          <div style="float:left;font-size:18px;color:white;width:586px;">
            <p>采购方 · {{"暗杀教室地方就是的覅偶绝地反击哦"}}</p>
            <p>联系人 · {{"123-4564-1212（阿萨德）"}}</p>
          </div>
          <div style="float:left;font-size:18px;color:white;width:566px;border-left:1px solid white;padding-left:13px;">
            <p>供苗人 · {{"啊实打实大大是"}}</p>
            <p>联系人 · {{"153-4567-9874（水电费）"}}</p>
          </div>
        </div>
        <div style="position:absolute;right:13.5px;top:25px;">
          <ul class="saxu">
            <li @click="saixuanc()" style="border-bottom: 1px solid #DCDCDC;color:#666969;">{{sx}}</li>
            <li @click="saixuanc(1)" v-if="sx!='近三个月采购单'">近三个月采购单</li>
            <li @click="saixuanc(2)" v-if="sx!='近一个月采购单'">近一个月采购单</li>
            <li @click="saixuanc(3)" v-if="sx!='近一年内采购单'">近一年内采购单</li>
            <li @click="saixuanc(4)" v-if="sx!='近三年内采购单'">近三年内采购单</li>
            <li @click="saixuanc(5)" v-if="sx!='全部采购单'">全部采购单</li>
          </ul>
        </div>
      </div>
      <div class="" style="height:751px;overflow-x:hidden;">
        <p style="background-color:#DDDDDD;margin-bottom:0;font-size:18px;padding:13px 14px;">{{"2017年12月"}}</p>
        <div v-for="item in 5" style="position:relative;padding:14px;width:1170px;z-index:1;background-color:#FFFFFF;margin-bottom:6px;">
          <img :src="''" style="width:53px;height:94px;border:1px solid;position:absolute;">
          <div style="margin-left:67px;width:1117px;position:relative;">
            <p style="font-size:21px;color:black;">{{"无刺构骨球"}}<span style="display:inline-block;background-color:#3EA549;color:white;font-size:13.5px;padding:0 2px;vertical-align:middle;">地</span></p>
            <p style="color:#676868;font-size:13px;margin-bottom:0px;">{{"米径500-4000cm · 自然高1100-1200cm · 肉高1200-1300cm"}}</p>
            <p style="color:#676868;font-size:13px;">{{"主分枝高1000-1100cm · 冠幅1000-1100cm"}}</p>
            <p style="color:#989698;font-size:13px;">预采购数量 · <span style="color:#676868;">{{"4000株"}}</span><span style="border-left:1px solid;display:inline-block;height:17px;vertical-align:middle;margin:0 11px;"></span><span style="color:#989698;">苗木合计（不含运费） · </span><span style="color:#5EA946;">{{"￥3000"}}</span></p>
            <div style="position:absolute;left:620px;top:50px;">
              <span style="color:#5EA946;font-size:18px;margin-right:54px;">{{"￥1500.00/株"}}</span>
              <span style="color:#989698;font-size:13px;text-decoration:line-through;">{{"￥2000.00/株"}}</span>
            </div>
            <span style="display:inline-block;position:absolute;top:16px;right:14px;border:2px solid #DCDCDC;border-radius:5px;padding:5px 10px;color:#676868;cursor:pointer;">查看苗木运单</span>
            </div>
            <div style="font-size:12px;margin-top:47px;">
              <span class="guo" style="margin-right:115px;margin-left:10px;">采购方发起交易</span>
              <span class="jin" style="margin-right:120px;">供苗方承接交易</span>
              <span class="wei" style="margin-right:124px;">采购方确认交易</span>
              <span class="wei" style="margin-right:129px;">等待验苗报告</span>
              <span class="wei" style="margin-right:143px;">采购方发起购买</span>
              <span class="wei">供苗方确认交易</span>
            </div>
            <div style="position:relative;padding-left:39px;">
              <!-- 圈 -->
              <span class="qguo quan" style="margin-right:186px;"></span>
              <span class="qjin quan" style="margin-right:183px;"></span>
              <span class="qwei quan" style="margin-right:192px;"></span>
              <span class="qwei quan" style="margin-right:186px;"></span>
              <span class="qwei quan" style="margin-right:209px;"></span>
              <span class="qwei quan" style=""></span>

              <!-- 线 -->
              <span class="sx xian" style="width:190px;left:55px;"></span>
              <span class="xx xian" style="width:183px;left:262px;"></span>
              <span class="xx xian" style="width:192px;left:467px;"></span>
              <span class="xx xian" style="width:186px;left:682px;"></span>
              <span class="xx xian" style="width:212px;left:888px;"></span>
            </div>
            <div class="">
              <!-- 采购方发起交易 -->
              <div style="width:89px;margin-left:3px;display:inline-block;vertical-align:top;">
                <div v-for="item in 2" style="position:relative;top:-8px;">
                  <canvas class="xz" width="10" height="5" style="margin-left:38px;"></canvas>
                  <span style="background-color: #F1F1F1;height: 35.8px;display: inline-block;padding: 2px 9px;">
                    苗讯验苗2017.01.01
                  </span>
                </div>
              </div>
              <!-- 供苗方承接交易 -->
              <div style="width:135px;margin-left:3px;display:inline-block;margin-left:97px;vertical-align:top;">
                <div v-for="item in 3" style="position:relative;top:-8px;">
                  <canvas class="xz" width="10" height="5" style="margin-left:55px;"></canvas>
                  <span style="background-color: rgb(241, 241, 241);height: 35.8px;display: inline-block;padding: 2px 9px;">
                    修改价格为￥2000 2017.12.15
                  </span>
                </div>
              </div>
              <!-- 采购方确认交易 -->
              <div style="width:89px;margin-left:3px;display:inline-block;margin-left:81px;vertical-align:top;">
                <div style="position:relative;top:-8px;">
                  <canvas class="xz" width="10" height="5" style="margin-left:39px;"></canvas>
                  <span style="background-color: rgb(241, 241, 241);height: 35.8px;display: inline-block;padding: 2px 9px;">
                    确认交易 2017.12.15
                  </span>
                </div>
              </div>
              <!-- 等待验苗报告 -->
              <div style="width:110px;margin-left:3px;display:inline-block;margin-left:114px;vertical-align:top;">
                <div style="position:relative;top:-8px;">
                  <canvas class="xz" width="10" height="5" style="margin-left:46px;"></canvas>
                  <span style="background-color: rgb(241, 241, 241);display: inline-block;padding: 6px 9px;text-align:center;vertical-align:middle;">
                    查看验苗报告
                  </span>
                </div>
              </div>
              <!-- 采购方发起购买 -->
              <div style="width:110px;margin-left:3px;display:inline-block;margin-left:95px;vertical-align:top;">
                <div style="position:relative;top:-8px;">
                  <canvas class="xz" width="10" height="5" style="margin-left:46px;"></canvas>
                  <span style="background-color: rgb(241, 241, 241);height: 56px;display: inline-block;padding: 6px 9px;">
                    卖家包运苗木
                    货到付款
                    2017.12.15
                  </span>
                </div>
              </div>
              <!-- 供苗方确认交易 -->
              <div style="width:89px;margin-left:3px;display:inline-block;margin-left:125px;vertical-align:top;">
                <div style="position:relative;top:-8px;">
                  <canvas class="xz" width="10" height="5" style="margin-left:37px;"></canvas>
                  <span style="background-color: rgb(241, 241, 241);height: 35.8px;display: inline-block;padding: 6px 9px;">
                    交易暂缓
                    2017.12.15
                  </span>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
import headers from '../common/header.vue';
import xiangx from '../common/xiangxi.vue';
import ddxiang from '../common/ddxiangxi.vue';
export default {
  data(){
    return{
      srcc:'',
      sx:'近三个月采购单'
    }
  },
  computed:{
    watch(){
      this.srcc = this.$store.state.srcc;
    }
  },
  components:{
    'headers':headers,
    'xiangx':xiangx,
    'ddxiang':ddxiang
  },
  mounted:function(){
    this.srcc = this.$store.state.srcc;
    var temp = $(".xz");
    $.each(temp,function(index){
      var tt = this.getContext("2d");
      tt.moveTo(0,0);
      tt.lineTo(5,5);
      tt.moveTo(5,5);
      tt.lineTo(10,0);
      tt.strokeStyle="#DCDCDC"
      tt.stroke();
    })
  },
  methods:{
    saixuanc(type){
      var that = this;
      console.log($(".saxu").css("height"))
      if($(".saxu").css("height")=="140px"){
        $(".saxu").css("height","15px")
        setTimeout(function(){
          switch(type){
            case 1: that.sx = "近三个月采购单";break;
            case 2: that.sx = "近一个月采购单";break;
            case 3: that.sx = "近一年内采购单";break;
            case 4: that.sx = "近三年内采购单";break;
            case 5: that.sx = "全部采购单";break;
          }
        },400);
      }else if($(".saxu").css("height")=="15px"){
        $(".saxu").css("height","140px")
      }
    }
  }
}
</script>

<style lang="css" scoped>
  p{
    margin-bottom:3px;
  }
  .saxu{
    border-radius:20px;
    background-color:white;
    padding:8px 16px 9px;
    height:15px;
    overflow:hidden;
    transition: 0.5s all;
    cursor: pointer;
  }
  ul > li {

    padding-bottom:5px;
  }
  li + li {
    margin-top:5px;
    border-bottom: 1px dashed #DCDCDC;
    color:#989698;
  }
  .guo{
    color:#989698;
  }
  .jin{
    color:#676868;
  }
  .wei{
    color:#DCDCDC;
  }
  .qjin{
    background-color:#5EAA46;
  }
  .qguo{
    background-color:#989698;
  }
  .qwei{
    border:1px dashed;
  }
  .sx{
    border-top:1px solid #989698;
  }
  .xx{
    border-top:1px dashed #DCDCDC;
  }
  .quan{
    position:relative;
    height:16px;
    width:16px;
    display:inline-block;
    border-radius:30px;
    vertical-align:middle;
  }
  .xian{
    display:inline-block;
    vertical-align:middle;
    position:absolute;
    top:10px;
  }
</style>
