<template>
  <div style="padding-right:30px;">
   <div  style="display:none;">{{jiance}}</div>
    <!-- 苗源 border8:indexb==index,border80:indexb!=index   @mouseenter="indexb=index" @mouseleave="indexb=-1"-->
    <!-- <img class="" src="/static/tu-detail/1-91.png" style="margin-left:20px;"> -->
    <!-- 所有分类 -->
    <div class="overflow" style="margin-bottom:10px;">
      <div class="lf" style="width:100px;">
        <img class="" src="/static/tu-detail/1-91.png" style="margin-left:20px;padding-top: 10px;">
      </div>
      
      <ul style="width:calc(100% - 140px);padding-left:20px;margin-bottom:0;padding-top: 10px;" class="lf bai relative overflow f12 c676868">
        <!-- 0 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-for="(item,index) in zzqkVal">种植情况：{{item}}<img @click="Deleted($event,item,index,0)" class=" cursor" src="/static/tu-detail/1-47.png" ></li>
        <!-- 1 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-for="(item,index) in allSearchInfo.baoVal" >几斤袋：{{item}}<img @click="Deleted($event,item,index,1)" class=" cursor" src="/static/tu-detail/1-47.png" ></li>
        <!-- 米径 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same"   v-if='this.allSearchInfo.mjMin!=""||this.allSearchInfo.mjMax!=""'>
          米径 : {{this.allSearchInfo.mjMin}} - {{this.allSearchInfo.mjMax}}
          <img @click="Deleted2('mjMin','mjMax')" class=" cursor" src="/static/tu-detail/1-47.png">
        </li>
        <!-- 地径 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-if='this.allSearchInfo.djMin!=""||this.allSearchInfo.djMax!=""'>
          地径 : {{this.allSearchInfo.djMin}} - {{this.allSearchInfo.djMax}}
          <img @click="Deleted2('djMin','djMax')" class=" cursor" src="/static/tu-detail/1-47.png" >
        </li>
        <!-- 自然高 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-if='this.allSearchInfo.zgMin!=""||this.allSearchInfo.zgMax!=""'>
          自然高 : {{this.allSearchInfo.zgMin}} - {{this.allSearchInfo.zgMax}}
          <img @click="Deleted2('zgMin','zgMax')" class=" cursor" src="/static/tu-detail/1-47.png" >
        </li>
        <!-- 肉高 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-if='this.allSearchInfo.rgMin!=""||this.allSearchInfo.rgMax!=""'>
          肉高 : {{this.allSearchInfo.rgMin}} - {{this.allSearchInfo.rgMax}}
          <img @click="Deleted2('rgMin','rgMax')" class=" cursor" src="/static/tu-detail/1-47.png" >
        </li>
        <!-- 主分枝高 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-if='this.allSearchInfo.zfzgMin!=""||this.allSearchInfo.zfzgMax!=""'>
          主分枝高 : {{this.allSearchInfo.zfzgMin}} - {{this.allSearchInfo.zfzgMax}}
          <img @click="Deleted2('zfzgMin','zfzgMax')" class=" cursor" src="/static/tu-detail/1-47.png" >
        </li>
        <!-- 冠幅 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-if='this.allSearchInfo.gfMin!=""||this.allSearchInfo.gfMax!=""'>
          冠幅 : {{this.allSearchInfo.gfMin}} - {{this.allSearchInfo.gfMax}}
          <img @click="Deleted2('gfMin','gfMax')" class=" cursor" src="/static/tu-detail/1-47.png" >
        </li>
        <!-- 省市 -->
        <li @mouseenter="enterchas($event)" @mouseleave="leavechas($event)" class="lf relative rad cursor same" v-for="(item,index) in cits">省·市 ：{{item.province}},{{item.city}}<img @click="Deleted($event,item,index,2)" class=" cursor" src="/static/tu-detail/1-47.png" ></li>
      </ul>
    </div>
    





    <div  class="border relative f13 c989698" style="z-index:15;margin-bottom:20px;">
      <!-- 第一个按钮 -->
      <div  style="height:40px;z-index:2;z-index:30;" class="relative ">
        <div  @click="Opens($event,0)" class="relative fu1 lf" style="width:105px;height:40px;">
          <span class="czjz" style="left:20px;">种植情况</span>
          <img  class="czjz img1 classimg cursor zzqkOpens" src="/static/tu-detail/1-28.png" style="left:80px;">
        </div>

        <!-- 第2个按钮 -->
        <div  @click="Opens($event,1)" class="relative  fu2 lf center" style="width:75px;height:40px;">
          <span class="czjz " style="left:15px;">标准</span>
          <img class="img2 czjz classimg cursor" src="/static/tu-detail/1-28.png" style="left:50px;">
        </div>

        <!-- 第3个按钮 -->
        <div  @click="Opens($event,2)" class="relative  fu3 lf center" style="width:80px;height:40px;">
          <span class="czjz" style="left:15px;">省·市</span>
          <img  class="czjz cursor classimg img3" src="/static/tu-detail/1-28.png" style="left:62px;">
        </div>
      </div>

      <!-- 1.种植情况展开的内容框 :class="{c60B346:zzqkIndex==index}"-->
      <ul  v-show="zzqkShow==true"  class="f13 border-t relative zzqkul" style="height:40px;margin-bottom:0;">
        <li @click="zzqkindexs($event,index,item)"  v-for="(item,index) in zzqk" class="lf center cursor" style="width:70px;height:40px;line-height:40px;">{{item}}</li>
      </ul>

      <!-- 2.标准的内容框  -->
      <div  v-show="biaozhunShow==true" class="f13 c999899 border-t relative  " style="height:188px;margin-bottom:0;padding:20px 0 20px 20px;width:calc(100% - 20px);z-index:20;top: 0px;">
        <ul   class="tiaojian f13 ">
          <!-- 1.mj -->
          <li   class=" tiaojian_mj  border rad lf  relative">
            <span class="c999899 czjz" style="left:10px;">米径</span>
            <div class=" czjz cm" style="right:0px;">
              <input v-model="mjMin" type="text" name=""  >cm
              <span  class=""></span>
              <input v-model="mjMax" type="text"  name="" >cm
              <img @click="kOpens($event,'mj')" src="/static/tu-detail/1-118.png" alt="" class="cursor class118">

            </div>  
            <ul v-if="mjOpen==true" class="c999899 bai  f12 border overflow rad-bl rad-br " style="top:27px;padding:10px 0 0 10px;z-index:10;width:219px;left:0;position:absolute;">
              <li  @mouseenter="enters($event)" @mouseleave="leaves($event)" :class="{c60B346:mjact==indexs}"  @click="clicks1($event,'mj',item.min,item.max,indexs)" v-for="(item,indexs) in opens.mu_mj" class="lf left cursor" style="width:62px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}</li>
            </ul>     
          </li>
          <!-- 2.dj -->       
          <li   class=" tiaojian_dj  border rad lf ">
            <span class="c999899 czjz" style="left:10px;">地径</span>
            <div class=" czjz cm" style="right:0px;">
              <input v-model="djMin" type="text" name=""  >cm
              <span class=""></span>
              <input v-model="djMax" type="text"  name="" >cm
               <img @click="kOpens($event,'dj')" src="/static/tu-detail/1-118.png" alt="" class="cursor class118">
            </div>  
            <ul v-if="djOpen==true" class="c999899 bai  f12 border overflow rad-bl rad-br " style="top:27px;padding:10px 0 0 10px;z-index:10;width:219px;left:0;position:absolute;">
              <li  @mouseenter="enters($event)" @mouseleave="leaves($event)"   @click="clicks1($event,'dj',item.min,item.max,indexs)" :class="{c60B346:djact==indexs}" v-for="(item,indexs) in opens.mu_dj" class="lf left cursor" style="width:62px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}</li>
            </ul>     
          </li>
          <!-- 3.zg -->         
          <li   class=" tiaojian_zg  border rad lf ">
            <span class="c999899 czjz" style="left:10px;">自然高</span>
            <div class=" czjz cm" style="right:0px;">
              <input v-model="zgMin" type="text" name=""  >cm
              <span  class=""></span>
              <input v-model="zgMax" type="text"  name="" >cm
               <img @click="kOpens($event,'zg')" src="/static/tu-detail/1-118.png" alt="" class="cursor class118">

            </div>  
            <ul v-if="zgOpen==true" class="c999899 bai  f12 border overflow rad-bl rad-br " style="top:27px;padding:10px 0 0 10px;z-index:10;width:219px;left:0;position:absolute;">
              <li  @mouseenter="enters($event)" @mouseleave="leaves($event)" :class="{c60B346:zgact==indexs}"  @click="clicks1($event,'zg',item.min,item.max,indexs)" v-for="(item,indexs) in opens.mu_zg" class="lf left cursor" style="width:62px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}</li>
            </ul>     
          </li>
          <!-- 4.rg -->         
          <li   class=" tiaojian_rg  border rad lf ">
            <span class="c999899 czjz" style="left:10px;">肉高</span>
            <div class=" czjz cm" style="right:0px;">
              <input v-model="rgMin" type="text" name=""  >cm
              <span   class=""></span>
              <input v-model="rgMax" type="text"  name="" >cm
              <img @click="kOpens($event,'rg')" src="/static/tu-detail/1-118.png" alt="" class="cursor class118">
            </div>    
            <ul v-if="rgOpen==true"  class="c999899 bai  f12 border overflow rad-bl rad-br " style="top:27px;padding:10px 0 0 10px;z-index:10;width:219px;left:0;position:absolute;">
              <li  @mouseenter="enters($event)" @mouseleave="leaves($event)" :class="{c60B346:rgact==indexs}"  @click="clicks1($event,'rg',item.min,item.max,indexs)" v-for="(item,indexs) in opens.mu_rg" class="lf left cursor" style="width:62px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}</li>
            </ul>     
          </li>
          <!-- 5.zfzg -->         
          <li   class=" tiaojian_zfzg  border rad lf ">
            <span class="c999899 czjz" style="left:10px;">主分枝高</span>
            <div class=" czjz cm" style="right:0px;">
              <input v-model="zfzgMin" type="text" name=""  >cm
              <span  class=""></span>
              <input v-model="zfzgMax" type="text"  name="" >cm
              <img @click="kOpens($event,'zfzg')" src="/static/tu-detail/1-118.png" alt="" class="cursor class118">
            </div>  
            <ul v-if="zfzgOpen==true"  class="c999899 bai  f12 border overflow rad-bl rad-br " style="top:27px;padding:10px 0 0 10px;z-index:10;width:219px;left:0;position:absolute;">
              <li  @mouseenter="enters($event)" @mouseleave="leaves($event)" :class="{c60B346:zfzgact==indexs}"  @click="clicks1($event,'zfzg',item.min,item.max,indexs)" v-for="(item,indexs) in opens.mu_zfjg" class="lf left cursor" style="width:62px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}</li>
            </ul>       
          </li>
          <!-- 6.gf -->         
          <li   class=" tiaojian_gf  border rad lf ">
            <span class="c999899 czjz" style="left:10px;">冠幅</span>
            <div class=" czjz cm" style="right:0px;">
              <input v-model="gfMin" type="text" name=""  >cm
              <span class=""></span>
              <input v-model="gfMax" type="text"  name="" >cm
               <img @click="kOpens($event,'gf')" src="/static/tu-detail/1-118.png" alt="" class="cursor class118">
            </div>  
            <ul v-if="gfOpen==true"  class="c999899 bai  f12 border overflow rad-bl rad-br " style="top:27px;padding:10px 0 0 10px;z-index:10;width:219px;left:0;position:absolute;">
              <li  @mouseenter="enters($event)" @mouseleave="leaves($event)" :class="{c60B346:gfact==indexs}"  @click="clicks1($event,'gf',item.min,item.max,indexs)" v-for="(item,indexs) in opens.mu_gf" class="lf left cursor" style="width:62px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}</li>
            </ul>       
          </li>

        </ul>







        <ul class="lf overflow relative gjul" style="width:100%;">
          <li class="lf center"  style="width:57px;height:27px;line-height:27px;margin-right:5px;">几斤袋</li>
          <li @click="baos($event,item,index)"  v-for="(item,index) in bao" class="lf center border rad cursor baos"  >{{item}}</li>
        </ul>
        <!-- 取消按钮 -->
        <img @click="cansels1($event)" class=" cursor" src="/static/tu-detail/1-42.png" style="position:absolute;left:395px;bottom:30px;">
        <!-- 确定按钮 -->
        <img  @click="oks1($event)" class=" cursor" src="/static/tu-detail/1-43.png" style="position:absolute;left:450px;bottom:31px;">
      </div>
      




      <!-- 城市和省份 -->
      <div  v-if="placeShow==true" class=" bai overflow border" style="border-top:none;left:-1px;position:absolute;top:41px;width:100%;">
        <div  style="width:65px;height:100%;" class="lf " >
          <div  class="f13 c999899 center" :class="{borderR:place=='cit',borderB:place=='cit',placea:place=='pro',place:place=='cit'}" style="height:160px;line-height:160px;">
            省份
          </div>
          <div  :class="{borderR:place=='pro',borderT:place=='pro',placea:place=='cit',place:place=='pro'}"   class="f13 c676868 center" style="height:160px;line-height:160px;">
            城市
          </div>
        </div>
        <!-- 省份 -->
        <ul v-if="place=='pro'" class="f13  relative bai lf  overflow province" style="margin-left:20px;width:420px;margin-bottom:0;">
          <li @mouseenter="enters($event)"  @mouseleave="leaves($event)" :class="{c60B346:proIndex==-1}" class="lf left cursor" style="width:80px;height:40px;line-height:40px;" @click='unlimited1()'>不限</li>
          <li @click="proindexs($event,index,item)"  @mouseenter="enters($event)"   @mouseleave="leaves($event)" :class="{c60B346:proIndex==index}" v-for="(item,index) in wheres" class="lf left cursor" style="width:80px;height:40px;line-height:40px;">{{index.length>6?index.substring(0,5):index}}<span v-if="index.length>6">...</span></li>

        </ul>
        <!-- 城市 -->
        <ul v-if="place=='cit'" class="f13  relative bai lf  overflow city" style="margin-left:20px;width:420px;margin-bottom:0;">
          <li   :class="{c60B346:citIndex==-1}" class="lf left cursor " style="padding-left:15px;width:80px;height:40px;line-height:40px;" @click='unlimited2()'>不限</li>
          <li @click="citindexs($event,index,item)"  :val="item"  v-for="(item,index) in citys" class="lf left cursor relative " style="width:80px;height:40px;line-height:40px;padding-left:15px;">{{item.length>6?item.substring(0,5):item}}<span v-if="item.length>6">...</span>
            <img  @click="danxuan($event,item,index)"  v-show="dian==true&&place=='cit'" class=" cursor czjz hei" src="/static/tu-detail/1-45.png" style="left:0;">
          </li>

        </ul>

        <!-- 点击可多选 -->
        <img @click="dian=true" class=" cursor" src="/static/tu-detail/1-44.png" style="position:absolute;right:20px;bottom:20px;" v-if="place=='cit'&&dian!=true">
        <!-- 取消 -->
        <img  @click="cansels($event)" class=" cursor" src="/static/tu-detail/1-42.png" style="position:absolute;right:77px;bottom:20px;" v-if="place=='cit'&&dian==true">
        <!-- 确定 -->
        <img @click="oks($event)" class=" cursor" src="/static/tu-detail/1-43.png" style="position:absolute;right:20px;bottom:20px;" v-if="place=='cit'&&dian==true">
      </div>
      






    </div>

    <div  class=" relative f13 c989698 border" style="z-index:10;height:50px;margin-bottom:20px;margin-top:10px;">

    <div @click="Opens($event,'paixu')" class="lf cursor " >
      <span class="lf c5EA946" style="width:52px;height:50px;line-height:50px;margin-left:20px;">{{paixu}}</span>
      <img  class="lf cursor sortImg classimg" src="/static/tu-detail/1-28.png" style="margin:0 10px;position:relative;top:23px;">
    </div>
      
      <!--排序的弹出框 -->
      <ul v-if="paixukuang==true" class="paixu red bai c676868 f13 border center" style="position:absolute;top:50px;width:102px;">
        <li v-for="(item,indexs) in paixuitem" @mouseenter="paixuindex=indexs" @mouseleave="paixuindex=-1" @click="paixus($event,item,indexs)" :class="{cF2F2F2:indexs==3,F1F1F1bg:indexs==paixuindex}" class="cursor">{{item}}</li>
      </ul>
<!-- 价格的帅选 -->
      <div @mouseenter="pricekuang=true" @mouseleave="pricekuang=false" class="lf F1F1F1bg relative c989698 center" style="width:188px;height:50px;line-height:50px;" >
        <input :value="priceMin" class="f12  relative border priceMin center" type="text"  style="z-index:10;line-height:20px;width:60px;height:20px;display:inline-block;"  placeholder="￥">
        <span class=" relative" style="z-index:10;">-</span>

        <input :value="priceMax" class="f12  border relative priceMax center" type="text"  style="z-index:10;line-height:20px;width:60px;height:20px;display:inline-block;"  placeholder="￥">
        <!-- 价格的弹出框-->
        <div v-if="pricekuang==true" class=" bai border" style="z-index:5;padding-top:50px;position:absolute;top:-1px;width:165px;left:10px;">
          <img @click="pricekong($event)" class="cursor relative" src="/static/tu-detail/1-96.png" style="left:-30px;">
          <img @click="priceset($event)" class="cursor relative" src="/static/tu-detail/1-43.png" style="right:-20px;">
        </div>
      </div>
<!-- 视图方式4  5 -->
      <img class="lf cursor" @click="biana($event,'0')" :src="view==4?'/static/tu-detail/1-93.png':'/static/tu-detail/1-92.png'" style="">
      <img class="lf cursor" @click="biana($event,'1')" :src="view==5?'/static/tu-detail/1-95.png':'/static/tu-detail/1-94.png'" style="">
<!-- 页码 -->
      <img class="lf cursor relative" :src="page<2?'/static/tu-detail/1-31.png':'/static/tu-detail/1-33.png'" style="top:20px;margin:0 15px;" @click='jianPage'>
      <span class="lf c676868 relative f13" style="top:15px;">
        <span class="c5EA946">{{this.$store.state.allPage>0?page:0}}</span>/{{this.$store.state.allPage}}
      </span>
      <img class="lf cursor relative" :src="page==this.$store.state.allPage?'/static/tu-detail/1-34.png':'/static/tu-detail/1-32.png'" style="top:20px;margin-left:15px;"
      @click='jiaPage'>
    </div>

<!-- 商品列表模板 -->
    <list></list>

    </div>
  </template> 


  <!--2. 默认导出 -->
  <script>
import list from '../detail/list.vue'
    export default {
      name: 'item',
      datas:'',
      data() {
        return {
          view:4,//视图  
          indexb:-1,//控制灰色背景的
          pricekuang:false,
          priceMax:'',
          priceMin:'',
          paixuitem:['综合排序','发布时间','库存','信用','距离','价格'],
          paixu:'发布时间',
          paixuindex:-1,
          paixukuang:false,
          //paixuindexa:-1,
          dian:false,//多选的黑点和白点
          place:'pro',
          pro:'',
          cit:'',
          cits:[],//多选的城市
          citys:'',
          wheres:this.$store.state.wheres,//城市和省份的数据
          mjMin:'',
          djMin:'',
          zgMin:'',
          rgMin:'',
          zfzgMin:'',
          gfMin:'',
          mjMax:'',
          djMax:'',
          zgMax:'',
          rgMax:'',
          zfzgMax:'',
          gfMax:'',
          mjOpen:false,
          djOpen:false,
          zgOpen:false,
          rgOpen:false,
          zfzgOpen:false,
          gfOpen:false,
          mjact:-1,
          djact:-1,
          zgact:-1,
          rgact:-1,
          zfzgact:-1,
          gfact:-1,
          zzqk:['不限','地苗','假植苗','袋苗','盆苗'],
          zzqkVal:[],//种植情况选择的内容
          baoVal:[],//几斤？
          page:1,
          allPage:5,
          allSearchInfo:{
            'zzqkVal':[],
            'mjMin':'',
            'mjMax':'',
            'djMin':'',
            'djMax':'',
            'zgMin':'',
            'zgMax':'',
            'rgMin':'',
            'rgMax':'',
            'zfzgMin':'',
            'zfzgMax':'',
            'gfMin':'',
            'gfMax':'',
            'baoVal':[],
            'province':'',
            'cits':[]
          },//保存所有搜索信息，可以处理点击取消后，已经生成的标签和回退到此次修改前的状态

          zzqkIndex:-1,//种植情况对应的当前下标
          zzqkShow:false,

          biaozhun:['米径','地径','自然高','肉高','主分枝高','冠幅'],
          bao:['3斤袋','5斤袋','7斤袋','10斤袋'],
          baoIndex:-1,
          biaozhunShow:false,
          placeShow:false,
          datas:'',
          opens:common_biaozhun,//地径米经弹出框的内容
          indexa:-1,//鼠标放上li图片出现绿色的边框线
          carousel:['/static/tu-detail/1-01.png','/static/tu-detail/1-01.png','/static/tu-detail/1-01.png','/static/tu-detail/1-01.png'],
          proIndex:-1,//保持省的激活状态
          citIndex:-1 //保持城市的激活状态

        };
      },
      watch: {
       '$route':'rewrite'
      // 对路由变化作出响应...
      },
      computed:{
        jiance(){
          this.wheres = this.$store.state.wheres
        }
      }, 
      components:{
      
        'list':list
      },
      methods:{
      // 所有分类的鼠标放上
      enterchas(e){
        $(e.currentTarget).css("border",'1px solid #C96832')
        $(e.currentTarget).find("img").attr("src",'/static/tu-detail/1-48.png')
      },
      // 所有分类的鼠标离开
      leavechas(e){
        $(e.currentTarget).css("border",'1px solid #999899')
        $(e.currentTarget).find("img").attr("src",'/static/tu-detail/1-47.png')
      },
      // 所有分类的右上角的叉子关闭按钮
      Deleted(e,item,index,num){
        if(num==0){
          // 种植情况的
          //输出时要删除上边的标签同时更新搜索条件
          this.zzqkVal.splice(index,1)
          var aaa = JSON.parse(JSON.stringify(this.zzqkVal));
          this.allSearchInfo.zzqkVal = aaa

          var Things=$(".zzqkul>li")
          for (var i = 0; i < Things.length; i++) {
            if(Things[i].innerHTML==item){
              $(Things[i]).removeClass("c60B346")
            }
          }
        }else if(num==1){
          // 几公斤的
          //删除时要删除上边的标签同时更新搜索条件
          this.baoVal.splice(index,1)
          var aaa = JSON.parse(JSON.stringify(this.baoVal));
          this.allSearchInfo.baoVal = aaa

          var Things=$(".gjul>li")
          for (var i = 0; i < Things.length; i++) {
            if(Things[i].innerHTML==item){
              $(Things[i]).removeClass("bg60B346")
            }
          }
        }else if(num == 2){
          //省市的删除
          //删除时要删除上边的标签同时更新搜索条件
          this.cits.splice(index,1)
          var aaa = JSON.parse(JSON.stringify(this.cits));
          this.allSearchInfo.cits = aaa
          if(this.cits.length<1){
            this.proIndex = -1
          }
        }
        //更新
        this.updataFn()

      },
      Deleted2(a,b){
        //米径，地径等标准条件的删除事件
        var str1 = ('this.'+a+'=""')
        var str2 = ('this.'+b+'=""')
        eval(str1)
        eval(str2)
        var str11 = ('this.allSearchInfo.'+a+'=""')
        var str22 = ('this.allSearchInfo.'+b+'=""')
        eval(str11)
        eval(str22)
        //更新
        this.updataFn()
      },
      // 价格的确定按钮
      priceset(e){
        this.priceMin=$(".priceMin").val()
        this.priceMax=$(".priceMax").val()
        this.pricekuang=false
        //更新
        this.updataFn()
      },
      // 价格的清空按钮
      pricekong(e){
        this.priceMin=''
        this.priceMax=''
        this.pricekuang=false
       //更新
        this.updataFn()
      },
      // 排序的点击事件
      paixus(e,item,indexs){
        if(indexs==3){
          return
        }
        this.paixu=item
        this.paixukuang=false
        $('.sortImg').attr("src",'/static/tu-detail/1-28.png')
         //更新
         this.updataFn()
      },
      //标准取消或者确定点击时，要收起标准区域
      biaozhunUp(){
        this.biaozhunShow=false
        $(".fu1").css("border-right",'none')
        $(".fu2").css("border-right",'none')
        $(".fu2").css("border-bottom",'none')
      },
      // 标准的确定按钮
      oks1(e){
             
                 //更新搜索条件
                 //米径
                 this.allSearchInfo.mjMin = this.mjMin
                 this.allSearchInfo.mjMax = this.mjMax
                 //地径
                 this.allSearchInfo.djMin = this.djMin
                 this.allSearchInfo.djMax = this.djMax
                 //自然高
                 this.allSearchInfo.zgMin = this.zgMin
                 this.allSearchInfo.zgMax = this.zgMax
                 //肉高
                 this.allSearchInfo.rgMin = this.rgMin
                 this.allSearchInfo.rgMax = this.rgMax
                 //主分枝高
                 this.allSearchInfo.zfzgMin = this.zfzgMin
                 this.allSearchInfo.zfzgMax = this.zfzgMax
                 //冠幅
                 this.allSearchInfo.gfMin = this.gfMin
                 this.allSearchInfo.gfMax = this.gfMax
                 //几斤袋     
                 var aaa = JSON.parse(JSON.stringify(this.baoVal));
                 this.allSearchInfo.baoVal = aaa                               
                 console.log(this.allSearchInfo)
                 // 收起
                 this.biaozhunUp()
                  $(".img2").attr("src",'/static/tu-detail/1-28.png')

                  //更新
          this.updataFn()
             },
      // 标准的取消按钮
      cansels1(e){
        
        $(".img2").attr("src",'/static/tu-detail/1-28.png')
        //恢复搜索条件
                 //米径
                 this.mjMin  =  this.allSearchInfo.mjMin
                 this.mjMax  =  this.allSearchInfo.mjMax
                 //地径
                 this.djMin  =  this.allSearchInfo.djMin
                 this.djMax  =  this.allSearchInfo.djMax
                 //自然高
                 this.zgMin  =  this.allSearchInfo.zgMin
                 this.zgMax  =  this.allSearchInfo.zgMax
                 //肉高
                 this.rgMin  =  this.allSearchInfo.rgMin
                 this.rgMax  =  this.allSearchInfo.rgMax
                 //主分枝高
                 this.zfzgMin  =  this.allSearchInfo.zfzgMin
                 this.zfzgMax  =  this.allSearchInfo.zfzgMax
                 //冠幅
                 this.gfMin  =  this.allSearchInfo.gfMin
                 this.gfMax  =  this.allSearchInfo.gfMax
                 //几斤袋  
                 var aaa = JSON.parse(JSON.stringify(this.allSearchInfo.baoVal));
                 console.log(aaa)
                 //取消时恢复原有的几斤袋
                 this.baoVal  =  aaa 
                 //取消时恢复几斤袋的颜色
                 $('.baos').removeClass('bg60B346')
                 for(var n = 0;n<aaa.length;n++){
                  for (var i = 0; i<$('.baos').length; i++) {
                    if($($('.baos')[i]).text() == aaa[n]){
                       $($('.baos')[i]).addClass('bg60B346')
                    }                   
                  }
                 }
                 // 收起
                 this.biaozhunUp()
             },
             // 几斤袋
             baos(e,item,index){
                 $(e.currentTarget).toggleClass("bg60B346")
                var Things=this.baoVal
                var isExists = false //默认不含此项
                var eindex = -1 //如果含有此项，保存其下标
                for (var i = 0; i < Things.length; i++) {
                  if(Things[i]==item){
                    isExists = true
                    eindex = i
                  }
                }
                if(isExists == false){//如果不含有此项
                  this.baoVal.push(item)
                }else{//如果含有此项，再次点击
                  this.baoVal.splice(eindex,1)
                }
                console.log(this.allSearchInfo.baoVal)
      },
      // 城市的确定按钮
      oks(e){
        //如果此次选中的省份与之前的省份不同，就清掉之前的，重新生成
        // if(this.allSearchInfo.cits[0]!=undefined&&this.allSearchInfo.cits[0].province!=this.pro){
        //   this.cits = []
        //   this.allSearchInfo.cits = []
        // }
        //如果此次选中的省份跟之前的相同，但是之前选的是不限
        // if(this.allSearchInfo.cits[0]!=undefined&&this.allSearchInfo.cits[0].province==this.pro
        //   &&this.allSearchInfo.cits[0].province==this.allSearchInfo.cits[0].city){
        //   this.cits = []
        //   this.allSearchInfo.cits = []
        // }
        //每次按确定按钮 都是清空所有，把当前挂上去
        this.cits = []
        this.allSearchInfo.cits = []
        var img= $(".city img[src='/static/tu-detail/1-46.png']")
        if(img.length<1){
          //点击确定时，如果当前没有选中城市，则显示为不限
           this.cits.push({'province':this.pro,'city':this.pro,'index':-1,'index2':this.proIndex})
        }else{
          //点击确定时，如果当前选中了城市，则显示对应城市
          for (var i = 0; i < img.length; i++) {
            this.cits.push({'province':this.pro,'city':$(img[i]).parent("li").attr("val"),'index':$(img[i]).parent("li").index()-1,'index2':this.proIndex})
           }
        }
        
        var aaa = JSON.parse(JSON.stringify(this.cits));
        this.allSearchInfo.cits= aaa
        this.proCitsUp()
        console.log(this.allSearchInfo)
        //更新
         this.updataFn()
             },
      // 城市的取消按钮
      cansels(e){
        this.dian=false
        var _this = this
        //取消时，要恢复城市列表的状态
        //先统一取消激活状态，再把数据中的显示激活状态
        $('.city li').removeClass('c60B346')
         $('.city li').find('img').attr('src','/static/tu-detail/1-45.png')
         if(this.cits.length==0){
            $($('.city li')[0]).addClass('c60B346')
         }else{
            for (var i = 0; i < _this.cits.length; i++) {
               if(_this.cits[i].index==-1){
                 //-1表示选中的是不限
                 _this.citIndex = -1
               }else{
                //取消无限的默认颜色
                 _this.citIndex = 0
                 $($('.city li')[_this.cits[i].index+1]).addClass('c60B346')
                 $($('.city li')[_this.cits[i].index+1]).find('img').attr('src','/static/tu-detail/1-46.png')
               }
          }
         }
        
      },
      // 单选按钮
      danxuan(e,item,index){
        this.citIndex = 0
        $(e.currentTarget).parent('li').toggleClass('c60B346')
        if($(e.currentTarget).attr("src")=='/static/tu-detail/1-45.png'){
          $(e.currentTarget).attr("src",'/static/tu-detail/1-46.png')
        }else{
          $(e.currentTarget).attr("src",'/static/tu-detail/1-45.png')
        }
      },
      proCitsUp(){
        //收起省市，下次展开从省开始选
        // 弹框消失
        this.placeShow=false
        //下次点击回到省的选择
        this.place = 'pro'
        $(".fu3").css("border-right",'none')
        $(".fu3").css("border-bottom",'none')
        $(".fu2").css("border-right",'none')
        $(".img3").attr("src",'/static/tu-detail/1-28.png')
      },
      unlimited1(){
        //点击了省的不限
        this.cits = []
        this.allSearchInfo.cits = []
        this.proIndex = -1
        this.proCitsUp()
         //更新
         this.updataFn()
      },
      unlimited2(){
        //点了城市的不限
        //先清空
        this.cits = []
        this.allSearchInfo.cits = []
        //
        this.citIndex = -1
        this.cits.push({'province':this.pro,'city':this.pro,'index':-1,'index2':this.proIndex})
        var aaa = JSON.parse(JSON.stringify(this.cits));
        this.allSearchInfo.cits = aaa
        this.proCitsUp()
         //更新
         this.updataFn()
      },
      proindexs(e,index,item){//点击选择省
        this.place='cit'
        // 保存省份
        this.pro=index
        //每次点击省，城市选择区都是先从单选开始
        this.dian = false
        // 保存所有的城市
        this.citys=item
        //颜色
        this.proIndex =index
        //选好省，在城市列表出来时，将之前选中的城市设为激活状态
        //如果此次选中的省份跟之前的相同
        if(this.allSearchInfo.cits[0]!=undefined&&this.allSearchInfo.cits[0].province==this.pro
          ){
          console.log('save')
          var _this = this
          setTimeout(function(){
            for (var i = 0; i < _this.cits.length; i++) {
               if(_this.cits[i].index==-1){
                 //-1表示选中的是不限
                 _this.citIndex = -1
               }else{
                //取消无限的默认颜色
                 _this.citIndex = 0
                 $($('.city li')[_this.cits[i].index+1]).addClass('c60B346')
                 $($('.city li')[_this.cits[i].index+1]).find('img').attr('src','/static/tu-detail/1-46.png')
               }
          }
          },100)
        }else{
          this.citIndex = -1
        }
        
        
      },
      citindexs(e,index,item){
        if(this.dian==true){
          //如果是点击多选中的城市列表
          return
        }

        //如果此次选中的省份与之前的省份不同，就清掉之前的，重新生成
        if(this.allSearchInfo.cits[0]!=undefined&&this.allSearchInfo.cits[0].province!=this.pro){
          this.cits = []
          this.allSearchInfo.cits = []
        }
        //如果此次选中的省份跟之前的相同，但是之前选的是不限
        if(this.allSearchInfo.cits[0]!=undefined&&this.allSearchInfo.cits[0].province==this.pro
          &&this.allSearchInfo.cits[0].province==this.allSearchInfo.cits[0].city){
          this.cits = []
          this.allSearchInfo.cits = []
        }

        //当前选中城市已经存在
        for (var i = 0; i < this.cits.length; i++) {
          if(this.cits[i].city == item){
            return
          }
        }
        // 保存城市
        //this.cit=item
        this.cits.push({'province':this.pro,'city':item,'index':index,'index2':this.proIndex})
        var aaa = JSON.parse(JSON.stringify(this.cits));
        this.allSearchInfo.cits = aaa
        this.proCitsUp()
 //更新
      this.updataFn() 
      },
      // 鼠标进入
      enters(e){
        $(e.currentTarget).addClass("Sc60B346")
      },
      // 鼠标移除
      leaves(e){
        $(e.currentTarget).removeClass("Sc60B346")
      },
      // 鼠标点击
      clicks1(e,who,min,max,index){
        
        // $(e.currentTarget).parent('ul').find('li').removeClass("c60B346s")
        // $(e.currentTarget).addClass("c60B346s")
        if(who=='mj'){
          this.mjMin=min
          this.mjMax=max
          this.mjOpen=false
          this.mjact=index
        }else if(who=='dj'){
          this.djMin=min
          this.djMax=max
          this.djOpen=false
          this.djact=index
        }else if(who=='zg'){
          this.zgMin=min
          this.zgMax=max
          this.zgOpen=false
          this.zgact=index
        }else if(who=='rg'){
          this.rgMin=min
          this.rgMax=max
          this.rgOpen=false
          this.rgact=index
        }else if(who=='zfzg'){
          this.zfzgMin=min
          this.zfzgMax=max
          this.zfzgOpen=false
          this.zfzgact=index
        }else if(who=='gf'){
          this.gfMin=min
          this.gfMax=max
          this.gfOpen=false
          this.gfact=index
        }
      },
      kOpens(e,item){
        this.mjOpen=false
        this.djOpen=false
        this.zgOpen=false
        this.rgOpen=false
        this.zfzgOpen=false
        this.gfOpen=false

          if($(e.currentTarget).attr("src")=='/static/tu-detail/1-118.png'){
           // alert('yes')
           $(".class118").attr("src",'/static/tu-detail/1-118.png')
               $(e.currentTarget).attr("src",'/static/tu-detail/1-119.png')
        if(item=='mj'){
          this.mjOpen=true
        }else if(item=='dj'){
          this.djOpen=true
        }else if(item=='zg'){
          this.zgOpen=true
        }else if(item=='rg'){
          this.rgOpen=true
        }else if(item=='zfzg'){
          this.zfzgOpen=true
        }else if(item=='gf'){
          this.gfOpen=true
        }
      }else if($(e.currentTarget).attr("src")=='/static/tu-detail/1-119.png'){ 
        $(e.currentTarget).attr("src",'/static/tu-detail/1-118.png')
        if(item=='mj'){
          this.mjOpen=false
        }else if(item=='dj'){
          this.djOpen=false
        }else if(item=='zg'){
          this.zgOpen=false
        }else if(item=='rg'){
          this.rgOpen=false
        }else if(item=='zfzg'){
          this.zfzgOpen=false
        }else if(item=='gf'){
          this.gfOpen=false
        }
      }
      },
      
      zzqkindexs(e,index,item){
        if(index==0){ //如果点的是不限
          $(e.currentTarget).addClass("c60B346")
          this.zzqkVal = [] //清空
          $(e.currentTarget).nextAll().removeClass("c60B346")
          //更新搜索条件
          this.allSearchInfo.zzqkVal = this.zzqkVal
          // 1更新帅选条件的时候要调用方法去重新查找
          var that=this
          //更新
          this.updataFn()
         // that.$store.commit("searchs",{"所有分类":that.allSearchInfo,"排序方式":that.paixu,"priceMax":that.priceMax,"priceMin":priceMin,"view":that.view}) 
          return
        }
        //如果选的不是不限，就把不限设置为灰色
        $(e.currentTarget).parent().find('li:first').removeClass("c60B346")
        $(e.currentTarget).toggleClass("c60B346")
        //点击时
          //如果不含有此项，则添加此项
          var Things=this.zzqkVal
        var isExists = false //默认不含此项
        var eindex = -1 //如果含有此项，保存其下标
        for (var i = 0; i < Things.length; i++) {
          if(Things[i]==item){
            isExists = true
            eindex = i
          }
        }

        if(isExists == false){//如果不含有此项
          this.zzqkVal.push(item)
        }else{//如果含有此项，再次点击
          this.zzqkVal.splice(eindex,1)
        }
        //更新搜索条件
        var aaa = JSON.parse(JSON.stringify(this.zzqkVal));
        this.allSearchInfo.zzqkVal = aaa
     // 3更新帅选条件的时候要调用方法去重新查找
       var that=this
       //更新
          this.updataFn()

      },
      // 种植情况
      Opens(e,n){
        this.zzqkShow=false
        this.biaozhunShow=false
        this.placeShow=false
        // 如果是灰色收起的箭头
        if($(e.currentTarget).find(".classimg").attr("src")=='/static/tu-detail/1-28.png'){
          $(e.currentTarget).find(".classimg").attr("src",'/static/tu-detail/1-30.png')
          if(n==0){
            this.zzqkShow=true
            $(".fu1").css("border-right",'1px solid #F1F1F1')
            $(".fu1").css("border-bottom",'1px solid white')
            $(".fu2").css("border-bottom",'none')
            $(".fu2").css("border-right",'none')
            $(".img2").attr("src",'/static/tu-detail/1-28.png')
            $(".img3").attr("src",'/static/tu-detail/1-28.png')
          }else if(n==1){
            this.biaozhunShow=true
            $(".fu1").css("border-right",'1px solid #F1F1F1')
            $(".fu1").css("border-bottom",'none')
            $(".fu2").css("border-right",'1px solid #F1F1F1')
            $(".fu2").css("border-bottom",'1px solid white')
            $(".fu3").css("border-bottom",'1px solid #F1F1F1')
            $(".fu3").css("border-right",'1px solid white')
            $(".img1").attr("src",'/static/tu-detail/1-28.png')
            $(".img3").attr("src",'/static/tu-detail/1-28.png')
          }else if(n==2){
            this.placeShow=true
            $(".fu1").css("border-right",'none')
            $(".fu1").css("border-bottom",'none')
            $(".fu2").css("border-right",'1px solid #F1F1F1')
            $(".fu2").css("border-bottom",'none')
            $(".fu3").css("border-right",'1px solid #F1F1F1')
            $(".fu3").css("border-bottom",'1px solid white')
            $(".img1").attr("src",'/static/tu-detail/1-28.png')
            $(".img2").attr("src",'/static/tu-detail/1-28.png')
          }else if(n=='paixu'){
            this.paixukuang=true
           
          }
          
        }else if($(e.currentTarget).find(".classimg").attr("src")=='/static/tu-detail/1-30.png'){
          $(e.currentTarget).find(".classimg").attr("src",'/static/tu-detail/1-28.png')
          if(n==0){
            this.zzqkShow=false
            $(".fu1").css("border-right",'none')
            $(".fu1").css("border-bottom",'none')
          }else if(n==1){
            this.biaozhunShow=false
            $(".fu1").css("border-right",'none')
            $(".fu2").css("border-right",'none')
            $(".fu2").css("border-bottom",'none')
          }else if(n==2){
            this.place='pro'
            this.placeShow=false
            $(".fu1").css("border-right",'none')
            $(".fu2").css("border-right",'none')
            $(".fu2").css("border-bottom",'none')
            $(".fu3").css("border-right",'none')
            $(".fu3").css("border-bottom",'none')
          }else if(n=='paixu'){
            this.paixukuang=false
            
          }
          
        }
      },
      // 视图
      biana(e,n){
        if(n==0){
          // 如果是四个点的绿色
          if($(e.currentTarget).attr("src")=='/static/tu-detail/1-93.png'){
            this.view=4
            return
          }else if($(e.currentTarget).attr("src")=='/static/tu-detail/1-92.png'){
                  // 如果是四个点的灰色色  当前变四个点的绿色，其他变9个点的灰色
                  $(e.currentTarget).attr("src",'/static/tu-detail/1-93.png')
                  $(e.currentTarget).next().attr("src",'/static/tu-detail/1-94.png')
                  // 1.请求
                   this.view=4
                   this.$store.state.view=4
                 }
             }else if(n==1){
          // 如果是9个点的绿色
          if($(e.currentTarget).attr("src")=='/static/tu-detail/1-95.png'){
             this.view=5
            return
          }else if($(e.currentTarget).attr("src")=='/static/tu-detail/1-94.png'){
                  // 如果是9个点的灰色色  当前变9个点的绿色，其他变4个点的灰色
                  $(e.currentTarget).attr("src",'/static/tu-detail/1-95.png')
                  $(e.currentTarget).prev().attr("src",'/static/tu-detail/1-92.png')
                   this.view=5
                    this.$store.state.view=5
                  // 1.请求
                 }
             }
 //更新
         this.updataFn()
         },
         clicks(e,n){
          if(n==1){
            $(e.currentTarget).addClass("c60B346")
            $(e.currentTarget).html("已加入购物车")
          }else if(n==2){
            if($(e.currentTarget).html()=='已收藏'){
              $(e.currentTarget).removeClass("c60B346")
              $(e.currentTarget).html("收藏")
            }else{
              $(e.currentTarget).addClass("c60B346")
              $(e.currentTarget).html("已收藏")
            }

          }

         },
         mouseenters(e){
          $(e.currentTarget).addClass("F1F1F1bg")
         }, 
         mouseleaves(e){
          $(e.currentTarget).removeClass("F1F1F1bg")
         },
         jianPage(){
          //如果当前页码小于2，就不能再减了
            if(this.page<2){
              return
            }
            this.page--
            this.updataFn()
         },
         jiaPage(){
          //如果当前页码等于总页码，就不能再加了
            if(this.page==this.$store.state.allPage){
              return
            }
            this.page++
            this.updataFn()
         },
          updataFn(){
            //更新
          var that = this
          var ix=this.$route.params.indexs
          that.$store.commit("updata",{"condition":that.allSearchInfo,"sort":that.paixu,"priceMax":that.priceMax,"priceMin":that.priceMin,"view":that.view,'page':that.page,"indexs":ix}) 
          },
          rewrite(){
            //根据缓存重写搜索条件等
           var aaa = JSON.parse(window.sessionStorage.getItem("title"))
           var ix=this.$route.params.indexs
           this.allSearchInfo=JSON.parse(JSON.stringify(aaa[ix].item.condition ));
           this.zzqkVal = aaa[ix].item.condition.zzqkVal
           this.mjMin = aaa[ix].item.condition.mjMin
           this.mjMax = aaa[ix].item.condition.mjMax
           this.djMin = aaa[ix].item.condition.djMin
           this.djMax = aaa[ix].item.condition.djMax
           this.zgMin = aaa[ix].item.condition.zgMin
           this.zgMax = aaa[ix].item.condition.zgMax
           this.rgMin = aaa[ix].item.condition.rgMin
           this.rgMax = aaa[ix].item.condition.rgMax
           this.zfzgMin = aaa[ix].item.condition.zfzgMin
           this.zfzgMax = aaa[ix].item.condition.zfzgMax
           this.gfMin = aaa[ix].item.condition.gfMin
           this.gfMax = aaa[ix].item.condition.gfMax
           this.baoVal = aaa[ix].item.condition.baoVal
           this.pro = aaa[ix].item.condition.province
           this.cits = aaa[ix].item.condition.cits
console.log("sort")
           console.log(aaa[ix].item)
           if(aaa[ix].item.sort==''){
            this.paixu="发布时间"
           }else{
            this.paixu=aaa[ix].item.sort
           }
           this.view=aaa[ix].item.view
           this.page=aaa[ix].item.page
           this.priceMax=aaa[ix].item.price.max
           this.priceMin=aaa[ix].item.price.min
           //省
           console.log(aaa[ix].item.condition.cits)
           if(this.cits.length>0){
            this.proIndex = aaa[ix].item.condition.cits[0].index2
          }else{
            this.proIndex = -1
          }
           
           //恢复种植情况的选中颜色
           var Things=$(".zzqkul>li")
           $(".zzqkul>li").removeClass('c60B346')
           var Things2=JSON.parse(JSON.stringify(this.zzqkVal));
            for (var i = 0; i < Things2.length; i++) {
              console.log(Things2[i])
              for (var n = 0; n < Things.length; n++) {
                  if(Things2[i] == Things[n].innerHTML){
                    $(Things[n]).addClass("c60B346")
                  }
              }
            }
           //恢复几斤袋的选中颜色
           var bvs=$(".gjul>li")
           $(".gjul>li").removeClass('bg60B346')
           var bvs2=JSON.parse(JSON.stringify(this.baoVal));
            for (var i = 0; i < bvs2.length; i++) {
              console.log(bvs2[i])
              for (var n = 0; n < bvs.length; n++) {
                  if(bvs2[i] == bvs[n].innerHTML){
                    $(bvs[n]).addClass("bg60B346")
                  }
              }
            }

        }
     },
     mounted(){
      this.rewrite()
      var that=this
      // 请求全部已发布的苗木
      $.get(this.$store.state.Boss+"/tree",function(data){
        console.log(data)

        if(data.status==1){
          if(data.results.data.length>0){
            that.datas=data.results.data
          }
        }
        
      })
// // 请求地径米经高度弹出框搜索条件内容
// $.get(this.$store.state.Boss1+"/dict.json",function(data){
//   console.log(data)
//   that.opens=data
// })
//     // 请求省和市的数据
//     $.get(this.$store.state.Boss1+'/cities.json',function(data){
//       console.log(data)
//       console.log("d2222ata")
//       that.wheres=data
//     })
// // 请求地径米经高度弹出框搜索条件内容
// $.get(Boss1+"/dict.json",function(data){
//  // console.log(data)
//  that.$store.state.opens=data
// })

    // 请求省和市的数据
    $.get(Boss1+'/cities.json',function(data){
     // console.log(data)
     // console .log("d2222ata")
      that.$store.state.wheres=data
   })
}


};

</script>

<!-- 
调用更新查询方法
1.种植情况的点击
2.标准的确定按钮
3.省的不限   省下的单市 省下的单市的不限  省下的多市的确定按钮   省下的多市的不限
4.所有分类的叉子按钮
5.排序的点击
6.价格的确定按钮  价格的清空按钮
7.视图方式



 -->



<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
  .miaoyuan{margin-top: 35px;}
  .miaoyuan>li{height:610px;width:246px;margin-bottom:20px;}
  .cm>input{display: inline-block;padding:0;width: 40px;border:none;outline: none;text-align: right;padding-right: 3px;}
  .cm>span{display:inline-block;width:15px;height:15px;border-top:1px solid #808080;position: relative;top:10px;left:10px;}
  .cm{height:24px;line-height:24px;}
  .baos{width:57px;height:27px;line-height:27px;margin-right:5px;}
  .tiaojian>li{width:221px;line-height:27px;margin-bottom:20px;height:27px;padding-left:10px;margin-right:15px;position: relative;}
  .paixu>li{height:35px;line-height:35px;}
  .same{
    border:1px solid #999899;height:21px;line-height:21px;padding:0 10px;margin-right:20px;margin-bottom:20px;
  }
  .same>img{
    right:-8px;position:absolute;top:-8px;
  }
  .Sc60B346{
    color: #60B346 ;
  }
  /*自己家的，到时候修改这个*/
  .tiaojian>li>div>input{width:32px !important;}
  .tiaojian>li>div>span{left:0 !important;}
  .tiaojian>li>div>input:last{margin-left: 10px !important;}
  /*input,.tiaojian>li>div{border:1px solid red !important;}*/
    @media screen and (max-width: 1070px) {
    .tiaojian>li{margin-right: 5px !important;}
     
} 
</style>
