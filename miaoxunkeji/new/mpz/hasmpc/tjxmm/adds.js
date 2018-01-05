// 有 1.添加新苗木1
// 03 请下载手机应用，并拍1摄苗木照片
// <li v-if="biaoti!=1" @click="zhongji_open(index)" v-for="(item,index) in this.$store.state.mtjxmm.mu_photo" style="margin-bottom:15px;margin-right:15px;width: 182px;
//   height:273px;" class="lf relative houtaiimg">
//        <img class="uploadsimg cursor" :src="item.url==undefined?item:item.url"  :id="item.id" style="width:176px;height:264px;">
//        <img @click.stop="sanchu(item.id,item,index)" style="width:30px;height:30px;position:absolute;right:10px;top:10px;" class="cursor chazhis" src="../tu-mpz/load2.png">
// </li>
const adds = {
	template: `
<div class="relative"  style="background:#F2F2F2;" >
     <div class="wai_kuangs" v-if="waiting==true">

<div v-show="biaoti==1" class="nei_kuang bai rad f26 center"   style="width:300px;padding:60px 10px;">
    正在添加新苗木,<br>
   请稍后...
</div>
<div v-show="biaoti!=1" class="nei_kuang bai rad f26 center"   style="width:300px;padding:60px 10px;">
    正在修改该苗木,<br>
   请稍后...
</div>
</div>        
<!--添加本地图片.uploads .up-img  -->
  <ul class="uploads   overflow bai" style="padding:20px 20px 5px 0px;width:1004px;">
    <li class="first lf " style="" >
      <div class="img-box full" style="width: 100%;margin-top: 0">
      <section class="img-section">
        <div class="z_photo upimg-div clear" >
        <!--1.后台拿回来的图片，在未发布，已发布，全部苗木里面的编辑-->
                     <section v-show="biaoti!=1" @click="zhongji_open(index)" v-for="(item,index) in muPhoto" style="margin-bottom:15px;margin-left:18px;width: 182px;height:273px;" class="lf relative houtaiimg overflow">
                          <img @load="adjust($event)" class="uploadsimg cursor jz" :src="item.url==undefined?item:item.url"  :id="item.id" >
                          <img @click.stop="sanchu(item.id,item,index)" style="width:30px;height:30px;position:absolute;right:10px;top:10px;" class="cursor chazhis" src="../tu-mpz/load2.png">
                     </section>

         <!--2.当前点击上传的，在添加新苗木，未发布，已发布，全部苗木的编辑-->
                     <section class="z_file fl" >
                      <img src="../tu-mpz/adds-12.png" style="height:273px;width:182px;" class="add cursor">
                      <input type="file" name="file" id="file" class="file addsfile" value="" 
                       accept="image/jpg,image/jpeg,image/png,image/bmp,image/JPG,image/JPEG,image/PNG,image/BMP" multiple capture="camcorder"/>
                     </section>
        <!--3.当前点击后上传的图片生成在页面上-->
             </div>
       </section>
       <aside class="mask works-mask">
      <div class="mask-content">
        <p class="del-p f26 c4A494B">确认删除此图片吗？</p>
        <p class="check-p">
                <span class="wsdel-no cursor c676868 lf" style="width:200px;border-bottom-left-radius: 5px;height:80px;line-height:80px;">取消</span>
                <span class="del-com wsdel-ok cursor rf" style="border:none;border-bottom-right-radius: 5px;color:white;width:200px;line-height:80px;height:80px;background:#C96832;">确定</span>
        </p>
      </div>
    </aside>
    </div>              
    </li>
 



  </ul>

<!--苗木内容--> 
<div :class="{bgtypes:chosetype=='袋苗',bgtypec:chosetype=='草坪',bgtyped:chosetype!='袋苗'&&chosetype!='草坪'}" style="width:945px;height:553px;padding:20px;padding-top:17px;margin:0 auto;margin-top:20px;">
<ul style="margin-bottom:50px;height:90px;">
     <li class=" lf overflow relative" style="width:452px;">
            <span class="f18 c999899" style="margin-left:10px;">苗木名称
            </span>
            <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false" @keyup="keywords($event)"  v-model="name" type="text"  class="f26  rad  relative" placeHolder="请输入苗木名称" style="display:block;border:none;outline:none;margin-top:13px;height:40px;width:450px;padding:0 10px;">
             <ul v-if="namekuang==true&&keyword.length>0" style="width:298px;padding:0 0 20px 0;top:-3px;z-index:2;" class="relative f12 bai border rad-bl rad-br" >
             <li  v-for="(item,index) in keyword" @click="names($event,item)" :class="{cd1d5d5bg:namex==index}" class="cursor" @mouseenter="namex=index"  @mouseleave="namex=-1" style="padding:0 10px;line-height:30px;height:30px;">{{item}}</li>
             </ul>

     </li>
      <li class=" rf overflow relative" style="width:452px;">
            <span class="f18 c999899" style="margin-left:10px;">种植情况
            </span>
           <div class="f26 c999899" style="margin-top:13px;height:35px;">
              <span @click="types(index,item)" :class="{typex:index!=typex,typexa:index==typex,typehui:index==typex&&(status==1||status==2)}" v-for="(item,index) in type" class="f15  cursor  rad" style="margin-bottom:300px;display:inline-block;margin-right:5px;height:30px;line-height:30px;padding:0 18px;">
                  {{item}}
              </span>
            </div>
     </li>
</ul>

<!--草坪-->
<ul style="margin-bottom:20px;height:75px;" v-show="chosetype=='草坪'">
     <li class=" lf overflow relative " style="width:452px;height:75px;margin-bottom:20px;">
            <span class="f18 c999899" style="margin-left:10px;">草坪长
            </span>
            <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="lawn_length" type="number"  class="f18  rad  relative right" placeHolder="请填写" style="display:inline-block;border:none;outline:none;margin-top:13px;height:40px;width:405px;padding:0 10px;">
            <span :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" class="f26 relative" style="top:12px;">cm</span>
            

     </li>
      <li class=" lf  relative f18 " style="width:452px;height:75px;margin-left: 37px;margin-bottom:20px;">
            <span class="f18 c999899" style="margin-left:10px;">草坪密度
            </span>
             <div @click="caomds($event)" class="cursor right c999899 relative" style="padding-right:35px;margin-top:13px;height:35px;" :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}">
               <span v-show="lawn_density==''" class="c999899">请选择</span>
                <span v-show="lawn_density!=''" :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" >{{parseInt(lawn_density)}}</span>
               
               <i class="iconfont icon-precent" style="font-size:26px;margin-left:5px;"  ></i>
               <img v-show="status==1||status==2"  src="../tu-mpz/1-58.png" class="caomds czjz cursor" style="right:-10px;padding:15px;">
               <img v-show="status!=1&&status!=2"  src="../tu-mpz/1-58.png" class="caomds caomdsC czjz cursor" style="right:-10px;padding:15px;">
             

             <div v-if="caoMdkuang==true" class="c999899 bai absolute f12 border-t overflow rad-bl rad-br" style="top:42px;z-index:10;width:447px;padding:20px 0px;">
              <!--草坪的密度框-->  
                <span @click.stop="caoMdindex(index,item)" :class="{typex:index!=mdx,typexa:index==mdx,typehui:index==mdx&&(status==1||status==2)}" v-for="(item,index) in caoMditem" class="f15  cursor  rad center lf" style="width:82px;margin-bottom:10px;margin-right:5px;height:30px;line-height:30px;">
                  {{item}}
              </span>
             </div>

            </div>
           
     </li>
     <li class=" lf overflow relative " style="width:452px;height:75px;">
            <span class="f18 c999899" style="margin-left:10px;">草坪宽
            </span>
            <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="lawn_width" type="number"  class="f18  rad  relative right" placeHolder="请填写" style="display:inline-block;border:none;outline:none;margin-top:13px;height:40px;width:405px;padding:0 10px;">
            <span :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" class="f26 relative" style="top:12px;">cm</span>
            

     </li>
      <li class=" rf  relative f18 " style="width:452px;height:75px;">
            <span class="f18 c999899" style="margin-left:10px;">每捆数量
            </span>
             <div @click="caosls($event)" class="right c999899 relative cursor" style="padding-right:35px;margin-top:13px;height:35px;" :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}">
               <span v-show="lawn_amount==''" class="c999899">请选择</span>
                <span v-show="lawn_amount!=''" :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}"  >{{parseInt(lawn_amount)}}</span>
               
               <span  style="font-size:26px;margin-left:5px;"  >片</span>
               <img v-show="status==1||status==2"  src="../tu-mpz/1-58.png" class="caosls czjz cursor" style="right:-10px;padding:15px;">
               <img v-show="status!=1&&status!=2"  src="../tu-mpz/1-58.png" class="caosls caoslsC czjz cursor" style="right:-10px;padding:15px;">
             

             <div v-if="caoShukuang==true" class="c999899 bai absolute f12 border-t overflow rad-bl rad-br" style="top:42px;z-index:10;width:447px;padding:20px 0px;">
              <!--草坪的数量框-->  
                <span @click.stop="caoSlindex(index,item)" :class="{typex:index!=slx,typexa:index==slx,typehui:index==slx&&(status==1||status==2)}" v-for="(item,index) in caoSlitem" class="f15  cursor  rad center lf" style="width:82px;margin-bottom:10px;margin-right:5px;height:30px;line-height:30px;">
                  {{item}}
              </span>
             </div>

            </div>
           
     </li>


</ul>


<!--2树径规格 自然高-->  
<ul  style="margin-bottom:20px;height:75px;">
     <li v-show="chosetype!='袋苗'&&chosetype!='草坪'" class=" lf  relative" style="width:452px;">
             <span class="f18 c999899" style="margin-left:10px;">树径规格
            </span>
           <div class="relative f26 c999899" style="margin-top:13px;height:35px;">

 <div @mouseenter="sanIndex=1" @mouseleave="sanIndex=0" @click="sanItem=true" class="cursor f18 c676868 center relative" style="width:70px;height:35px;line-height:35px;background:#F2F2F2;">{{chosetype0}}
          <img :src="sanIndex==0?'../tu-mpz/4-12.png':'../tu-mpz/4-13.png'" class="absolute" style="right:0;bottom:0;"> 
          <ul v-if="sanItem==true" style="padding:10px;z-index:10;width:50px;" class="bai center absolute ">
             <li :class="{c269C88:sanIdx==0}" @mouseenter="sanIdx=0" @mouseleave="sanIdx=-1" @click.stop="chosetype0s('米径')"  class="cursor" style="border-bottom:2px dotted #f2f2f2;">米径</li>
             <li :class="{c269C88:sanIdx==1}" @mouseenter="sanIdx=1" @mouseleave="sanIdx=-1" @click.stop="chosetype0s('地径')" class="cursor" >地径</li>
          </ul>
 </div>

    <div v-show="chosetype0=='米径'" class=" czjz" style="right:55px;">
            <input  :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"  v-model="mjmin" placeHolder="可选可填" type="number" name="" class="f18" style="height:38px;display: inline-block;width: 100px;border:none;outline: none;text-align: right;padding-right: 20px;" >cm
            <span class="" style="display:inline-block;width:5px;border-top:1px solid #808080;margin-left:15px;position: relative;top:-5px;left:-5px;"></span>
            <input  :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"  v-model="mjmax" placeHolder="可选可填" type="number"  name="" class="f18" style="height:38px;border:none;display: inline-block;width: 100px;outline: none;text-align: right;padding-right: 20px;">cm
    
    </div>
      <div v-show="chosetype0=='地径'" class=" czjz" style="right:55px;">
            <input  :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"  v-model="djmin" placeHolder="可选可填" type="number" name="" class="f18" style="height:38px;display: inline-block;width: 100px;border:none;outline: none;text-align: right;padding-right: 20px;" >cm
            <span class="" style="display:inline-block;width:5px;border-top:1px solid #808080;margin-left:15px;position: relative;top:-5px;left:-5px;"></span>
            <input  :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"  v-model="djmax" placeHolder="可选可填" type="number"  name="" class="f18" style="height:38px;border:none;display: inline-block;width: 100px;outline: none;text-align: right;padding-right: 20px;">cm
    
    </div>
           <img v-show="status==1||status==2"  src="../tu-mpz/1-58.png" class="sjs czjz cursor" style="right:0px;padding:15px;">
            <img v-show="status!=1&&status!=2" @click="sjs($event)" src="../tu-mpz/1-58.png" class="sjs czjz cursor" style="right:0px;padding:15px;">
            </div>
          <ul v-if="sjkuang==true" class="c999899 bai absolute f12 border overflow rad-bl rad-br" style="z-index:10;width:440px;padding:10px 0 0 10px;">
              <!--米经-->  
              <li  v-if="chosetype0=='米径'" @mouseenter="mjindex=indexs" @mouseleave="mjindex=-1" :class="{c269C88s:indexs==mjindex,c269C88:mjindexa==indexs}"  @click="mjliclicks(item,indexs,item.min,item.max)" v-for="(item,indexs) in datas0.mu_mj" class="lf left cursor" style="width:97px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}cm</li>
              <!--地径-->  
              <li   v-if="chosetype0=='地径'" @mouseenter="djindex=indexs" @mouseleave="djindex=-1" :class="{c269C88s:indexs==djindex,c269C88:djindexa==indexs}"  @click="djliclicks(item,indexs,item.min,item.max)" v-for="(item,indexs) in datas0.mu_dj" class="lf left cursor" style="width:97px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}cm</li>
          </ul>



     </li>

     <li v-show="chosetype=='袋苗'" class=" lf  relative" style="width:452px;">
             <span class="f18 c999899" style="margin-left:10px;">几斤袋
            </span>
           <div class="relative f26 c999899" style="margin-top:13px;height:35px;">
               <span @click="types2(indexs,item)" :class="{typex:indexs!=typex2,typexa:indexs==typex2,typehui:indexs==typex2&&(status==1||status==2)}" v-for="(item,indexs) in type2" class="f15  cursor  rad" style="display:inline-block;margin-right:5px;height:30px;line-height:30px;padding:0 18px;">
               {{item}}
               </span>
           </div>

 

     </li>


      <li v-show="chosetype!='草坪'"  class=" rf  relative" style="width:452px;">
            <span class="f18 c999899" style="margin-left:10px;">自然高
            </span>
           <div class="relative f26 c999899" style="margin-top:13px;height:35px;">
                  
    <div class=" czjz" style="right:55px;">
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="zgmin" placeHolder="可选可填" type="number" name="" class="f18" style="height:38px;display: inline-block;width: 100px;border:none;outline: none;text-align: right;padding-right: 20px;" >cm
    <span class="" style="display:inline-block;width:5px;border-top:1px solid #808080;margin-left:15px;position: relative;top:-5px;left:-5px;"></span>
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="zgmax" placeHolder="可选可填" type="number"  name="" class="f18" style="height:38px;border:none;display: inline-block;width: 100px;outline: none;text-align: right;padding-right: 20px;">cm
    
    </div>
     <img v-show="status==1||status==2"   src="../tu-mpz/1-58.png" class="zgs czjz cursor" style="right:0px;padding:15px;">
    <img v-show="status!=1&&status!=2"  src="../tu-mpz/1-58.png" @click="zgs($event)"  class="zgs czjz cursor" style="right:0px;padding:15px;">
            </div>
      <ul v-if="zgkuang==true" class="c999899 bai absolute f12 border overflow rad-bl rad-br" style="z-index:10;width:440px;padding:10px 0 0 10px;">
         <li  @mouseenter="zgindex=indexs" @mouseleave="zgindex=-1" :class="{c269C88s:indexs==zgindex,c269C88:zgindexa==indexs}"  @click="zgliclicks(item,indexs,item.min,item.max)" v-for="(item,indexs) in datas0.mu_zg" class="lf left cursor" style="width:97px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}cm</li>
      </ul>
     </li>

</ul>

<!--3肉高   主分枝高--> 
<ul  v-show="chosetype!='袋苗'&&chosetype!='草坪'" style="margin-bottom:25px;height:75px;">

         <li class=" lf  relative" style="width:452px;">
            <span class="f18 c999899" style="margin-left:10px;">肉高
            </span>
           <div class="f26 c999899 relative" style="margin-top:13px;height:35px;">
                  
    <div class=" czjz" style="right:55px;">
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="rgmin" placeHolder="可选可填" type="number" name="" class="f18" style="height:38px;display: inline-block;width: 100px;border:none;outline: none;text-align: right;padding-right: 20px;" >cm
    <span class="" style="display:inline-block;width:5px;border-top:1px solid #808080;margin-left:15px;position: relative;top:-5px;left:-5px;"></span>
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="rgmax" placeHolder="可选可填" type="number"  name="" class="f18" style="height:38px;border:none;display: inline-block;width: 100px;outline: none;text-align: right;padding-right: 20px;">cm
    
    </div>
    <img v-show="status==1||status==2"  src="../tu-mpz/1-58.png" class="rgs czjz cursor" style="right:0px;padding:15px;">
    <img v-show="status!=1&&status!=2" @click="rgs($event)" src="../tu-mpz/1-58.png" class="rgs czjz cursor" style="right:0px;padding:15px;">
            </div>
      <ul v-if="rgkuang==true" class="c999899 bai absolute f12 border overflow rad-bl rad-br" style="z-index:10;width:440px;padding:10px 0 0 10px;">
         <li  @mouseenter="rgindex=indexs" @mouseleave="rgindex=-1" :class="{c269C88s:indexs==rgindex,c269C88:rgindexa==indexs}"  @click="rgliclicks(item,indexs,item.min,item.max)" v-for="(item,indexs) in datas0.mu_rg" class="lf left cursor" style="width:97px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}cm</li>
      </ul>
     </li>


           <li class=" rf  relative" style="width:452px;">
            <span class="f18 c999899" style="margin-left:10px;">主分枝高
            </span>
           <div class="relative f26 c999899" style="margin-top:13px;height:35px;">
                  
    <div class=" czjz" style="right:55px;">
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="zfzmin" placeHolder="可选可填" type="number" name="" class="f18" style="height:38px;display: inline-block;width: 100px;border:none;outline: none;text-align: right;padding-right: 20px;" >cm
    <span class="" style="display:inline-block;width:5px;border-top:1px solid #808080;margin-left:15px;position: relative;top:-5px;left:-5px;"></span>
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="zfzmax" placeHolder="可选可填" type="number"  name="" class="f18" style="height:38px;border:none;display: inline-block;width: 100px;outline: none;text-align: right;padding-right: 20px;">cm
    
    </div>
    <img v-show="status==1||status==2"  src="../tu-mpz/1-58.png" class="zfzs czjz cursor" style="right:0px;padding:15px;">
    <img v-show="status!=1&&status!=2" @click="zfzs($event)" src="../tu-mpz/1-58.png" class="zfzs czjz cursor" style="right:0px;padding:15px;">
            </div>
      <ul v-if="zfzkuang==true" class="c999899 bai absolute f12 border overflow rad-bl rad-br" style="z-index:10;width:440px;padding:10px 0 0 10px;">
         <li  @mouseenter="zfzindex=indexs" @mouseleave="zfzindex=-1" :class="{c269C88s:indexs==zfzindex,c269C88:zfzindexa==indexs}"  @click="zfzliclicks(item,indexs,item.min,item.max)" v-for="(item,indexs) in datas0.mu_zfjg" class="lf left cursor" style="width:97px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}cm</li>
      </ul>
     </li>
</ul>

<!--4冠幅   地址--> 
<ul style="margin-bottom:60px;height:75px;"  >

         <li class=" lf  relative" style="width:452px;" v-show="chosetype!='草坪'" >
            <span class="f18 c999899" style="margin-left:10px;">冠幅
            </span>
           <div class="relative f26 c999899" style="margin-top:13px;height:35px;">
                  
    <div class=" czjz" style="right:55px;">
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="gfmin" placeHolder="可选可填" type="number" name="" class="f18" style="height:38px;display: inline-block;width: 100px;border:none;outline: none;text-align: right;padding-right: 20px;" >cm
    <span class="" style="display:inline-block;width:5px;border-top:1px solid #808080;margin-left:15px;position: relative;top:-5px;left:-5px;"></span>
    <input :class="{c999899:status==1||status==2,c4A494B:status!=1&&status!=2}" :readOnly="status==1||status==2?true:false"   v-model="gfmax" placeHolder="可选可填" type="number"  name="" class="f18" style="height:38px;border:none;display: inline-block;width: 100px;outline: none;text-align: right;padding-right: 20px;">cm
    
    </div>
    <img v-show="status==1||status==2"  src="../tu-mpz/1-58.png" class="gfs czjz cursor" style="right:0px;padding:15px;">
    <img v-show="status!=1&&status!=2" @click="gfs($event)" src="../tu-mpz/1-58.png" class="gfs czjz cursor" style="right:0px;padding:15px;">
            </div>
      <ul v-if="gfkuang==true" class="c999899 bai absolute f12 border overflow rad-bl rad-br" style="z-index:10;width:440px;padding:10px 0 0 10px;">
         <li  @mouseenter="gfindex=indexs" @mouseleave="gfindex=-1" :class="{c269C88s:indexs==gfindex,c269C88:gfindexa==indexs}"  @click="gfliclicks(item,indexs,item.min,item.max)" v-for="(item,indexs) in datas0.mu_gf" class="lf left cursor" style="width:97px;margin-bottom:10px;margin-right:10px;">{{item.min}}-{{item.max}}cm</li>
      </ul>
     </li>


           <li class=" rf  relative" :style="{'width':chosetype=='草坪'?'100%':'452px','marginTop':chosetype=='草坪'?'5px':'0','marginBottom':chosetype=='草坪'?'57px':'0'}">
            <span class="f18 c999899" style="margin-left:10px;">地址
            </span>
           <div id="tjxmmMap"   data-type="auto" :lat="datas.gg_address.point.latitude" :log="datas.gg_address.point.longitude"  data-method="tjxmmMap"  v-if="datas!='no'" class="relative f18 c999899 right cursor" style="margin-top:20px;padding-right:30px;height:35px;">
           {{datas.gg_address.province}}{{datas.gg_address.city}}{{datas.gg_address.detail_address}}
    
    </div>

     </li>
</ul>


<!--5价格   库存--> 
<ul style="height:75px;">

         <li class=" lf  relative" style="width:452px;">
            <span class="f18 c999899" style="margin-left:10px;">价格
            </span>
           <div class=" relative f26 c676868" style="margin-top:13px;">
                
                 <div class="rf ">
                       <img @click="prices($event)" :src="price0!=0?'../tu-mpz/3-17.png':'../tu-mpz/3-16.png'" class="cursor relative" style="top:-4px;margin-right:5px;">面议
                 </div> 
                 <div class="rf" style="margin-right:50px;">
                        <input  @keyup="prices0" @afterpaste="prices0" v-model="price" type="number" class=" f26 c4A494B rad  relative right" placeHolder="￥0" style="border:none;outline:none;height:35px;width:150px;padding:0 10px;">/
                        <span v-show="chosetype!='草坪'" >株</span>
                         <i v-show="chosetype=='草坪'" class="iconfont icon-pfm" style="font-size:26px;"></i>
                 </div> 
            </div>      
    
     </li>


           <li class=" rf  relative" style="width:452px;">
            <span class="f18 c999899" style="margin-left:10px;">库存
            </span>
          <input   v-model="stock" type="number" class="f26 c4A494B rad  relative right" placeHolder="请填写苗木数量" style="display:block;border:none;outline:none;margin-top:13px;height:40px;width:450px;padding:0 30px 0 10px;">
          <span v-show="stock!=''" class="f26 c4A494B absolute" style="right:1px;bottom:3px;">{{chosetype=='草坪'?'㎡':'株'}}</span>
           
     </li>
</ul>

</div> 




<!-- 状态值 1=审核中，0=未发布，2=已发布, -1=审核不通过-->  
<div style="height:170px;line-height:170px;">
<div v-show="biaoti==1">
    <!--发布--> 
    <button @click="tjxmms('fb')"  class="layui-btn layui-btn-primary rf" style="font-size:20px;background:#60B346;color:white;margin-top:60px;margin-right:20px;border:none;width:129px;height:52px;line-height:52px;">发布</button>
    <!--添加苗木--> 
    <button @click="tjxmms('tjxmm')" class="layui-btn layui-btn-primary rf" style="font-size:20px;color:#60B346;margin-top:60px;margin-right:20px;border:none;width:129px;height:52px;line-height:52px;">添加苗木</button>
</div>


<div v-show="biaoti!=1">
    <!--返回-->
    <button id="callback" @click="comeout=true" class="layui-btn layui-btn-primary lf" style="font-size:20px;color:#60B346;margin-top:60px;margin-left:20px;border:none;width:129px;height:52px;line-height:52px;">返回</button>
    <!--发布--> 
    <button v-if="status==0" @click="tjxmms('fb')"  class="layui-btn layui-btn-primary rf" style="font-size:20px;background:#60B346;color:white;margin-top:60px;margin-right:20px;border:none;width:129px;height:52px;line-height:52px;">发布</button>
    <!--保存更改--> 
    <button  @click="tjxmms('tjxmm')" class="layui-btn layui-btn-primary rf" style="font-size:20px;color:#60B346;margin-top:60px;margin-right:20px;border:none;width:129px;height:52px;line-height:52px;">保存更改</button>
</div>


</div> 



<!--确定删除吗--> 
 <div class="wai_kuangs" v-show="shanchus==true" >
  <div class="nei_kuang bai rad center" style="width:400px;height:251px;">
             <p class="f26 c4A494B border-b" style="padding:69px 0;">确认删除此图片吗？</p>
             <button @click="shanchus=false" class=" c676868 layui-btn layui-primary lf" style="border-bottom-left-radius: 5px;font-size:18px;color:#676868;background:white;width:200px;height:80px;">取消</button>
             <button @click="shanchuOk" class=" c676868 layui-btn layui-primary rf" style="border-bottom-right-radius: 5px;font-size:18px;margin:0;background:#C96832;color:white;width:200px;height:80px;">确定</button>
   </div>  
</div>
<!--返回的提示框--> 
 <div class="wai_kuangs" v-show="comeout==true" >
  <div class="nei_kuang bai rad center" style="width:400px;height:252px;">
             <p class="f26 c4A494B " style="padding:50px 0 0 0;">离开将清空已修改内容</p>
             <p class="f26 c4A494B border-b" style="padding-bottom:52px;">确认离开？</p>
             <button @click="gofrom"  class=" c676868 layui-btn layui-primary lf" style="border-bottom-left-radius: 5px;font-size:18px;color:#676868;background:white;width:200px;height:80px;">离开</button>
             <button   @click="comeout=false" class=" c676868 layui-btn layui-primary rf" style="border-bottom-right-radius: 5px;font-size:18px;margin:0;background:#5EA947;color:white;width:200px;height:80px;">留在当前页面</button>
   </div>  
</div>
 <!--发布的时候提示是否全部必填信息已经填完-->
<div v-if="alerts==true" style="z-index:2000;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);">
<div  class="bai rad center f26 c4b494b" style="width:400px;height:200px;position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">
      <p style="margin-top:50px;">您需先带星号的必填项和照片</p>  
       <p style="">填写完整才能发布</p>   
</div>
</div>

      <!-- 终极放大图-->
<zhongji v-if="bigbig==true" ></zhongji>
  <div  style="display:none;" class="spjz">{{watch}</div>
          </div>
     `,
	//  <router-link :to="{name:'price4'}"> </router-link>
	data: function() {
		return {
			caoShukuang: false, //控制草坪数量框的显示和隐藏
			caoSlitem: ['4片', '5片', '6片', '7片', '8片', '9片', '10片', '11片', '12片'], //草坪数量框
			mdx: -1, //密度的下标
			lawn_density: '', //密度的名字
			slx: -1, //数量的下标
			lawn_amount: '', //数量的名字
			caoMdkuang: false, //控制草坪密度框的显示和隐藏
			caoMditem: ['50%', '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'], //草坪密度弹出框
			lawn_length: '', //草坪长
			lawn_width: '', //草坪宽
			muPhoto: this.$store.state.mtjxmm.mu_photo, //进来的时候才拿后台
			// ismove:false,//防止点击添加的时候又读取一次
			comeout: false, //控制返回按钮的提示框
			status: -1, //状态
			alerts: false, //发布的时候提示是否全部必填信息已经填完
			waiting: false,
			latitude: '',
			longitude: '',
			shanchuId: '',
			shanchuItem: '',
			shanchuIndex: '',
			shanchus: false,
			biaoti: -1, //当前的标题
			datas: 'no', //根据id去查找的苗木的信息
			// comeBack:false,
			bigbig: false,
			number: 0,
			sanIndex: 0, //米经地径鼠标放上
			sanItem: false, //
			sanIdx: 0,
			// price4
			stock: '', //库存
			price: '', //价格
			price0: 0,
			// infor1
			namex: -1, //名称的背景色
			keyword: [], //苗木名称建议数组
			namekuang: false, //控制名称的弹出框
			typex2: -1, //类型的边框线
			chosetype2: '', //选择的几斤袋
			type2: ['3斤袋', '5斤袋', '7斤袋', '10斤袋'],
			type2N: ['3', '5', '7', '10'],

			typex: 0, //类型的边框线-1
			type: ['假植苗', '地苗', '袋苗', '盆苗', '草坪'],
			name: '', //请输入您的苗木名称
			chosetype: '假植苗', //选择苗木类型
			// size2d
			chosetype0: '米径', //选择是地径还是米茎
			datas0: common_biaozhun,
			zgkuang: false, //株高的弹出框
			gfkuang: false, //冠幅的弹出框
			sjkuang: false, //树径的弹出框
			rgkuang: false, //肉高的弹出框
			zfzkuang: false, //主分枝高的弹出框
			mjmax: '',
			mjmin: '',
			djmax: '',
			djmin: '',
			zgmin: '', //株高的最小值
			zgmax: '', //株高的最大值
			zghong: false, //红色边框线

			gfmin: '', //冠幅的最小值
			gfmax: '', //冠幅的最大值
			gfhong: false, //红色边框线

			sjmin: '', //树径的最小值
			sjmax: '', //树径的最大值
			sjhong: false, //红色边框线

			rgmin: '', //肉高的最小值
			rgmax: '', //肉高的最大值

			zfzmin: '', //主分枝高的最小值
			zfzmax: '', //主分枝高的最大值

			zgindex: -1, //控制鼠标放上和离开的自然高li
			zgindexa: -1, //控制鼠标click的自然高li

			gfindex: -1, //控制鼠标放上和离开的自然高li
			gfindexa: -1, //控制鼠标click的自然高li

			mjindex: -1, //控制鼠标放上和离开的树径li
			mjindexa: -1, //控制鼠标click的树径li

			djindex: -1, //控制鼠标放上和离开的树径li
			djindexa: -1, //控制鼠标click的树径li

			rgindex: -1, //控制鼠标放上和离开的肉高li
			rgindexa: -1, //控制鼠标click的肉高li

			zfzindex: -1, //控制鼠标放上和离开的主分枝高li
			zfzindexa: -1 //控制鼠标click的主分枝高li

		}
	},

	// beforeRouteLeave(to,from,next){
	//   if(this.$route.name=='adds'||this.$route.name=='adds1'){

	//   }
	//    next()
	//  },
	components: {
		"goback": goback,
		'zhongji': zhongji
	},
	methods: {
		adjust(e) {
			//获取容器宽高
			var pwidth = $(e.currentTarget).parent().width()
			var pheight = $(e.currentTarget).parent().height()
			//获取图片实际宽高
			var width = $(e.currentTarget).width()
			var height = $(e.currentTarget).height()
			//获取实际宽高比例
			var kgb = width / height
			var gkb = height / width
			console.log(width, height, pwidth, pheight)
			//修正图片宽高 多加了==
			if(width < height || width == height) {
				$(e.currentTarget).css('width', pwidth + 'px')
				var xzg = pwidth / kgb
				$(e.currentTarget).css('height', xzg + 'px')
				console.log('取宽')
			} else {
				$(e.currentTarget).css('height', pheight + 'px')
				var xzk = pheight * kgb
				$(e.currentTarget).css('width', xzk + 'px')
				console.log('取高')
			}
		},
		// // 弹出地图
		// mapOpen:function(e){
		//   var othis = $(e.currentTarget), method = othis.data('method');
		//  active[method] ? active[method].call(this, othis) : '';
		// },
		chosetype0s: function(who) {
			if(who == '米径') {
				this.sanIdx = 0
				this.djmin = ''
				this.djmax = ''
			} else {
				this.sanIdx = 1
				this.mjmin = ''
				this.mjmax = ''
			}
			this.sanIndex = 0
			this.chosetype0 = who
			this.sanItem = false
		},
		tjxmms: function(where) {
			this.ismove = true
			var that = this
			// A.先输出所有的条件
			console.log('我是添加新苗木')
			console.log('名字:' + this.name)
			console.log('类型:' + this.chosetype)
			console.log('斤:' + this.chosetype2)
			console.log('自然高min:' + this.zgmin)
			console.log('自然高max:' + this.zgmax)
			console.log('米经min:' + this.mjmin)
			console.log('米经max:' + this.mjmax)
			console.log('地径min:' + this.djmin)
			console.log('地径max:' + this.djmax)
			console.log('冠幅min:' + this.gfmin)
			console.log('冠幅max:' + this.gfmax)
			console.log('肉高min:' + this.rgmin)
			console.log('肉高max:' + this.rgmax)
			console.log('主分枝min:' + this.zfzmin)
			console.log('主分枝max:' + this.zfzmax)
			console.log('价格:' + this.price)
			console.log('存储:' + this.stock)
			console.log('草坪长:' + this.lawn_length)
			console.log('草坪宽:' + this.lawn_width)
			console.log('草坪密度:' + this.lawn_density)
			console.log('草坪数量:' + this.lawn_amount)
			console.log('坐标:' + this.datas.gg_address.point.latitude, this.datas.gg_address.point.longitude)
			console.log(tdate)
			// return
			//如果是0，说明是基本价格
			var price1 = ''
			if(this.price == undefined) {
				this.price = ''
			}
			if(this.price == '' && this.price0 == 1) {
				price1 = -1
			} else if(this.price != '' && this.price0 == 0) {
				price1 = this.price
			} else {
				price1 = 'no'
			}
			// alert(price1)
			// B发布的时候判断是否已经把必填的信息填完了，如果没有填写完就弹出提示
			// 类型不为空的时候
			if(where == 'fb') {
				// alert(this.price)
				// alert(this.price0)
				// return
				var iss = false
				//类型和价格默认是存在的
				if(this.chosetype != '' && this.chosetype == "袋苗") { //照片，名字，类型，价格，库存 +  几斤，冠幅，自然高
					if(price1 != 'no' && (this.$store.state.mtjxmm.mu_photo.length > 0 || tdate.length > 0) && this.name != '' && this.chosetype2 != '' && this.zgmin != '' && this.zgmax != '' && this.gfmin != '' && this.gfmax != '' && this.stock != '') {
						console.log('必填的已经填完袋苗')
					} else {
						console.log('必填的还没有填完袋苗')
						// 返回
						this.alerts = true
						setTimeout(function() {
							that.alerts = false
						}, 1500)
						return
					}
				} else if(this.chosetype != '' && this.chosetype != "袋苗" && this.chosetype != "草坪") { //照片，名字，类型，价格，库存 +  米经或者地径，冠幅，自然高
					if(price1 != 'no' && (this.$store.state.mtjxmm.mu_photo.length > 0 || tdate.length > 0) && this.name != '' && this.zgmin != '' && this.zgmax != '' && this.gfmin != '' && this.gfmax != '' && this.stock != '' && ((this.mjmax != '' && this.mjmin != '') || (this.djmax != '' && this.djmin != ''))) {
						console.log('必填的已经填完b袋苗')
					} else {
						console.log('必填的还没有填完b袋苗')
						// 返回
						this.alerts = true
						setTimeout(function() {
							that.alerts = false
						}, 1500)
						return
					}
				} else if(this.chosetype == "草坪") { //照片，名字，类型，价格，库存 +  草坪密度
					if(price1 != 'no' && (this.$store.state.mtjxmm.mu_photo.length > 0 || tdate.length > 0) && this.name != '' && this.stock != '' && this.lawn_density != '') {
						console.log('必填的已经填完草坪')
					} else {
						console.log('必填的还没有填完草坪')
						// 返回
						this.alerts = true
						setTimeout(function() {
							that.alerts = false
						}, 1500)
						return
					}
				}

			}
			//保存添加新苗木的信息
			if(this.chosetype == '') { //必须要选择了类型才能提交
				return
			} else {
				this.waiting = true

				var objectIds = ''
				if(this.$route.params.tjId != undefined) {
					objectIds = this.$route.params.tjId
				}
				// C.类型不为空，并且如果是发布的时候已经满足了所以条件则保持到缓存
				// 清空对应的属性：那个地径和米经在切换的时候选择已经清空了对应的地径或者米经
				// 1.如果是草坪则清空其他两种类型的字段，这样不用传到后台，后台会自动清空那些字段
				if(this.chosetype == '草坪') {
					// 假地盆
					this.mjmin = ''
					this.mjmax = ''
					this.djmin = ''
					this.djmax = ''
					this.rgmin = ''
					this.rgmax = ''
					this.gfmin = ''
					this.gfmax = ''
					this.zgmin = ''
					this.zgmax = ''
					this.zfzmin = ''
					this.zfzmax = ''
					// 袋
					this.chosetype2 = ''

				} else if(this.chosetype == '袋苗') { //2.如果是袋苗则清空其他两种类型的字段，这样不用传到后台，后台会自动清空那些字段
					// 假地盆
					this.mjmin = ''
					this.mjmax = ''
					this.djmin = ''
					this.djmax = ''
					this.rgmin = ''
					this.rgmax = ''
					// 共用的
					// this.gfmin=''
					// this.gfmax=''
					// this.zgmin=''
					// this.zgmax=''
					this.zfzmin = ''
					this.zfzmax = ''
					// 草坪
					this.lawn_length = ''
					this.lawn_width = ''
					this.lawn_density = ''
					this.lawn_amount = ''

				} else if(this.chosetype != '草坪' && this.chosetype != '袋苗') { //3.如果是假地盆则清空其他两种类型的字段，这样不用传到后台，后台会自动清空那些字段
					// 袋
					this.chosetype2 = ''
					// 草坪
					this.lawn_length = ''
					this.lawn_width = ''
					this.lawn_density = ''
					this.lawn_amount = ''

				}
				var tjxmm = {
					"objectId": objectIds, //苗木id
					"mu_photo": tdate,
					"lawn_length": this.lawn_length, //草坪长
					'lawn_width': this.lawn_width, //草坪宽
					'lawn_density': this.lawn_density, //草坪密度
					'lawn_amount': this.lawn_amount, //草坪每捆数量
					"mu_name": this.name, //添加新苗木名称
					'mu_type': this.chosetype, //添加新苗木类型
					'mu_zg_min': this.zgmin, //添加新苗木株高最小值
					'mu_zg_max': this.zgmax, //添加新苗木株高最大值
					'mu_gf_min': this.gfmin, //添加新苗木冠幅最小值
					'mu_gf_max': this.gfmax, //添加新苗木冠幅最大值
					'mu_package_weight': this.chosetype2, //添加新苗木的几斤袋
					'mu_rg_min': this.rgmin, //添加新苗木的肉高最小值
					'mu_rg_max': this.rgmax, //添加新苗木的肉高最大值
					'mu_zfjg_min': this.zfzmin, //添加新苗木的主分支高
					'mu_zfjg_max': this.zfzmax, //添加新苗木的主分支高
					'mu_mj_min': this.mjmin, //添加新苗木的米茎最小值
					'mu_mj_max': this.mjmax, //添加新苗木的米茎最大值
					'mu_dj_min': this.djmin, //添加新苗木的地径最小值
					'mu_dj_max': this.djmax, //添加新苗木的地径最大值
					'mu_stock': this.stock //添加新苗木的库存

				}
				if(price1 != 'no') {
					tjxmm.mu_price = price1 //添加新苗木的价格
				}

				this.$store.commit('saveTjxmm', tjxmm)
				//D.保存好了之后执行发送到后台 
				// return
				// $(".uploads .houtaiimg").css("display",'none')
				// 发请求到后台
				setTimeout(function() {

					if(that.$route.params.tjId != undefined) {
						that.$store.commit('httpTjxmm', {
							'mu_coordinate_lat': that.datas.gg_address.point.latitude,
							'mu_coordinate_lng': that.datas.gg_address.point.longitude,
							'objectId': that.$route.params.tjId,
							'groundId': that.$route.params.objectId,
							'insert_photo': 'yes',
							'wheres': where
						})
					} else {
						that.$store.commit('httpTjxmm', {
							'mu_coordinate_lat': that.datas.gg_address.point.latitude,
							'mu_coordinate_lng': that.datas.gg_address.point.longitude,
							'objectId': that.$route.params.tjId,
							'groundId': that.$route.params.objectId,
							'wheres': where
						})
					}
					tdate = []
					// 添加新苗木的时候不管点哪个按钮都要回到全部苗木
					if(that.$route.params.biaoti == 1) {
						that.$router.push({
							'name': 'qbmm',
							params: {
								'name': that.$route.params.name,
								'objectId': that.$route.params.objectId,
								'biaoti': 2
							}
						})
						that.$store.state.biaoti = 2
						that.$store.commit("updataMu", {
							objectId: that.$route.params.objectId,
							where: 'qbmm'
						})
					} else {

						// 其他三个标签的按钮，点击发布都回到全部苗木，
						if(where == 'fb') {

							that.$router.push({
								'name': 'qbmm',
								params: {
									'name': that.$route.params.name,
									'objectId': that.$route.params.objectId,
									'biaoti': 2
								}
							})
							that.$store.state.biaoti = 2
							that.$store.commit("updataMu", {
								objectId: that.$route.params.objectId,
								where: 'qbmm'
							})
						} else {
							// 点击保存修改的时候都回到原来的标签
							that.gofrom()
						}
					}

				}, 1200)

			}

		},

		gofrom() {
			var src
			//              if(this.$route.params.biaoti==1){
			//               // 1.回到未发布
			// this.$router.push({'name':'wfb',params:{'name':this.$route.params.name,'objectId':this.$route.params.objectId,'biaoti':4}})
			//               src='wfb'
			//               this.$store.state.biaoti=4
			//             }else 
			if(this.$route.params.biaoti == 2) {
				// 2.回到全部苗木
				this.$router.push({
					'name': 'qbmm',
					params: {
						'name': this.$route.params.name,
						'objectId': this.$route.params.objectId,
						'biaoti': 2
					}
				})
				src = 'qbmm'
				this.$store.state.biaoti = 2
			} else if(this.$route.params.biaoti == 3) {
				//3. 回到已发布
				this.$router.push({
					'name': 'yfb',
					params: {
						'name': this.$route.params.name,
						'objectId': this.$route.params.objectId,
						'biaoti': 3
					}
				})
				src = 'yfb'
				this.$store.state.biaoti = 3
			} else if(this.$route.params.biaoti == 4) {
				//4. 回到未发布              
				this.$router.push({
					'name': 'wfb',
					params: {
						'name': this.$route.params.name,
						'objectId': this.$route.params.objectId,
						'biaoti': 4
					}
				})
				src = 'wfb'
				this.$store.state.biaoti = 4
			}
			// 调用更新所以数据的方法
			this.$store.commit("updataMu", {
				objectId: this.$route.params.objectId,
				where: src
			})
		},
		// infor1
		// 点击名称弹出框的li  叫什么名字
		names: function(e, item) {
			this.name = item
			//alert(this.name,item)
			this.namekuang = false
		},
		// 名称输入框的鼠标按下事件
		keywords: function(e) {
			var that = this
			//发请求苗木名称建议
			$.get(Boss + "t/suggestion", {
				"searchkey": that.name
			}, function(data) {
				console.log(data)
				that.keyword = data.results
			})
			this.namekuang = true

		},
		types: function(index, item) {
			if(this.status == 1 || this.status == 2) {
				return
			}
			this.typex = index
			this.chosetype = item
		},
		// 控制密度的下标
		caoMdindex: function(index, item) {
			if(this.status == 1 || this.status == 2) {
				return
			}
			if(this.mdx == index) {
				this.mdx = -1
				this.lawn_density = ''
				this.caoMdkuang = false
				$(".caomds").attr("src", '../tu-mpz/1-58.png')
			} else {
				this.mdx = index
				this.lawn_density = item
				this.caoMdkuang = false
				$(".caomds").attr("src", '../tu-mpz/1-58.png')
			}
			// this.caoMdkuang=false

		},
		// 控制每捆数量的下标
		caoSlindex: function(index, item) {
			if(this.status == 1 || this.status == 2) {
				return
			}
			if(this.slx == index) {
				this.slx = -1
				this.lawn_amount = ''
				this.caoShukuang = false
				$(".caosls").attr("src", '../tu-mpz/1-58.png')
			} else {
				this.slx = index
				this.lawn_amount = item
				this.caoShukuang = false
				$(".caosls").attr("src", '../tu-mpz/1-58.png')
			}

		},
		prices: function(e) {
			if(this.price != '') {
				this.price = ''
				this.price0 = 1
			} else {
				this.price = ''
				this.price0 = 1
			}
		},
		prices0: function(e) {
			var val = $(e.currentTarget).val()
			if(val.indexOf('.') != -1) {
				if(val.toString().split(".")[1].length > 2) {
					alert("最多只能输入两位小数")
					this.price = ''
				}
			}

			if(this.price.length > 0) {
				this.price0 = 0
			} else {
				this.price0 = 1
			}
		},
		// size2d
		// 点击自然高的li
		zgliclicks: function(obj, index, min, max) {
			this.zgindexa = index
			this.zgmax = max
			this.zgmin = min
			$(".zgs").attr("src", '../tu-mpz/1-58.png')
			this.zgkuang = false
		},
		// 点击冠幅的li
		gfliclicks: function(obj, index, min, max) {
			this.gfindexa = index
			this.gfmax = max
			this.gfmin = min
			$(".gfs").attr("src", '../tu-mpz/1-58.png')
			this.gfkuang = false
		},
		// 点击树径的li
		mjliclicks: function(obj, index, min, max) {
			this.mjindexa = index
			this.mjmax = max
			this.mjmin = min
			$(".sjs").attr("src", '../tu-mpz/1-58.png')
			this.sjkuang = false
		},
		// 点击树径的li
		djliclicks: function(obj, index, min, max) {
			this.djindexa = index
			this.djmax = max
			this.djmin = min
			$(".sjs").attr("src", '../tu-mpz/1-58.png')
			this.sjkuang = false
		},
		// 点击肉高的li
		rgliclicks: function(obj, index, min, max) {
			this.rgindexa = index
			this.rgmax = max
			this.rgmin = min
			$(".rgs").attr("src", '../tu-mpz/1-58.png')
			this.rgkuang = false
		},
		// 点击主分枝高的li
		zfzliclicks: function(obj, index, min, max) {
			this.zfzindexa = index
			this.zfzmax = max
			this.zfzmin = min
			$(".zfzs").attr("src", '../tu-mpz/1-58.png')
			this.zfzkuang = false
		},

		// gfs点击冠幅的
		gfs: function(e) {
			// 收起的时候
			if($(e.currentTarget).attr("src") == '../tu-mpz/1-58.png') {
				$(e.currentTarget).attr("src", '../tu-mpz/1-59.png')
				this.gfkuang = true
				// 其他收起来
				this.rgkuang = false
				this.zfzkuang = false
				this.sjkuang = false
				this.zgkuang = false
				$(".zfzs").attr("src", '../tu-mpz/1-58.png')
				$(".rgs").attr("src", '../tu-mpz/1-58.png')
				$(".sjs").attr("src", '../tu-mpz/1-58.png')

				$(".zgs").attr("src", '../tu-mpz/1-58.png')
			} else {
				$(e.currentTarget).attr("src", '../tu-mpz/1-58.png')
				this.gfkuang = false
			}
		},
		// zgs点击自然高的
		zgs: function(e) {
			// 收起的时候
			if($(e.currentTarget).attr("src") == '../tu-mpz/1-58.png') {
				$(e.currentTarget).attr("src", '../tu-mpz/1-59.png')
				this.zgkuang = true

				// 其他收起来
				this.rgkuang = false
				this.zfzkuang = false
				this.sjkuang = false
				this.gfkuang = false
				$(".zfzs").attr("src", '../tu-mpz/1-58.png')
				$(".rgs").attr("src", '../tu-mpz/1-58.png')
				$(".sjs").attr("src", '../tu-mpz/1-58.png')
				$(".gfs").attr("src", '../tu-mpz/1-58.png')

			} else {
				$(e.currentTarget).attr("src", '../tu-mpz/1-58.png')
				this.zgkuang = false
			}
		},
		// sjs点击树径的
		sjs: function(e) {
			// 收起的时候
			if($(e.currentTarget).attr("src") == '../tu-mpz/1-58.png') {
				$(e.currentTarget).attr("src", '../tu-mpz/1-59.png')
				this.sjkuang = true
				// 其他收起来
				this.rgkuang = false
				this.zfzkuang = false
				this.zgkuang = false
				this.gfkuang = false
				$(".zfzs").attr("src", '../tu-mpz/1-58.png')
				$(".rgs").attr("src", '../tu-mpz/1-58.png')

				$(".gfs").attr("src", '../tu-mpz/1-58.png')
				$(".zgs").attr("src", '../tu-mpz/1-58.png')
			} else {
				$(e.currentTarget).attr("src", '../tu-mpz/1-58.png')
				this.sjkuang = false
			}
		},
		// 草坪的密度
		caomds: function(e) {
			if(this.status == 1 || this.status == 2) {
				return
			}
			// 收起的时候
			if($(e.currentTarget).find(".caomdsC").attr("src") == '../tu-mpz/1-58.png') {
				$(e.currentTarget).find(".caomdsC").attr("src", '../tu-mpz/1-59.png')
				this.caoMdkuang = true
				// 其他收起来
				this.caoShukuang = false
				$(".caosls").attr("src", '../tu-mpz/1-58.png')
			} else {
				$(e.currentTarget).find(".caomdsC").attr("src", '../tu-mpz/1-58.png')
				this.caoMdkuang = false
			}
		},
		// 草坪的数量
		caosls: function(e) {
			if(this.status == 1 || this.status == 2) {
				return
			}
			// 收起的时候
			if($(e.currentTarget).find(".caoslsC").attr("src") == '../tu-mpz/1-58.png') {
				$(e.currentTarget).find(".caoslsC").attr("src", '../tu-mpz/1-59.png')
				this.caoShukuang = true
				// 其他收起来
				this.caoMdkuang = false
				$(".caomds").attr("src", '../tu-mpz/1-58.png')
			} else {
				$(e.currentTarget).find(".caoslsC").attr("src", '../tu-mpz/1-58.png')
				this.caoShukuang = false
			}
		},
		// rgs点击肉高的
		rgs: function(e) {
			// 收起的时候
			if($(e.currentTarget).attr("src") == '../tu-mpz/1-58.png') {
				$(e.currentTarget).attr("src", '../tu-mpz/1-59.png')
				this.rgkuang = true

				// 其他收起来
				this.gfkuang = false
				this.zfzkuang = false
				this.sjkuang = false
				this.zgkuang = false
				$(".zfzs").attr("src", '../tu-mpz/1-58.png')

				$(".sjs").attr("src", '../tu-mpz/1-58.png')
				$(".gfs").attr("src", '../tu-mpz/1-58.png')
				$(".zgs").attr("src", '../tu-mpz/1-58.png')
			} else {
				$(e.currentTarget).attr("src", '../tu-mpz/1-58.png')
				this.rgkuang = false
			}
		},
		// zfzs点击主分枝高的
		zfzs: function(e) {
			// 收起的时候
			if($(e.currentTarget).attr("src") == '../tu-mpz/1-58.png') {
				$(e.currentTarget).attr("src", '../tu-mpz/1-59.png')
				this.zfzkuang = true

				// 其他收起来
				this.gfkuang = false
				this.rgkuang = false
				this.sjkuang = false
				this.zgkuang = false

				$(".rgs").attr("src", '../tu-mpz/1-58.png')
				$(".sjs").attr("src", '../tu-mpz/1-58.png')
				$(".gfs").attr("src", '../tu-mpz/1-58.png')
				$(".zgs").attr("src", '../tu-mpz/1-58.png')
			} else {
				$(e.currentTarget).attr("src", '../tu-mpz/1-58.png')
				this.zfzkuang = false
			}
		},
		// types(indexs,item){
		//   console.log(indexs)
		//   this.typex=indexs
		//   this.chosetype = item
		// },
		types2: function(indexs, item) {
			if(this.status == 1 || this.status == 2) {
				return
			}
			this.typex2 = indexs
			this.chosetype2 = item
		},

		// load3
		saveimgs() {
			this.saveimg = true
			this.uploads = false
		},
		zhongji_open(number, origin) {
			var that = this
			if(origin != undefined) {
				this.number = origin
			} else {
				this.number = $(".uploads>li .up-img").length + number
			}
			// alert('this.number:'+this.number)
			var src1 = $(".uploads>li .up-img")
			var src2 = $(".uploads>li .uploadsimg")
			this.$store.state.finalArrs = []
			for(var i = 0; i < src1.length; i++) {
				this.$store.state.finalArrs.push($(src1[i]).attr('src'))
			}
			for(var i = 0; i < src2.length; i++) {
				this.$store.state.finalArrs.push($(src2[i]).attr('src'))
			}
			that.bigbig = true

		},
		jumps: function() {
			var src
			if(this.biaoti == 2) {
				// 回到全部苗木
				this.$router.push({
					'name': 'qbmm',
					params: {
						'name': this.$route.params.name

							,
						'objectId': this.$route.params.objectId,
						'biaoti': 2
					}
				})
				src = 'qbmm'
			} else if(this.biaoti == 3) {
				// 回到已发布
				this.$router.push({
					'name': 'yfb',
					params: {
						'name': this.$route.params.name

							,
						'objectId': this.$route.params.objectId,
						'biaoti': 3
					}
				})
				src = 'yfb'
			} else if(this.biaoti == 4) {
				// 回到未发布

				this.$router.push({
					'name': 'wfb',
					params: {
						'name': this.$route.params.name

							,
						'objectId': this.$route.params.objectId,
						'biaoti': 4
					}
				})
				src = 'wfb'
			}
			// 调用更新所以数据的方法
			this.$store.commit("updataMu", {
				objectId: this.$route.params.objectId,
				where: src
			})
		},
		shanchuOk() {
			var that = this
			console.log('这个是删除后台的')
			// console.log(item)
			$.post(Boss + 'tree/' + this.$store.state.mtjxmm.objectId + '/remove_photo', {
				"sessiontoken": sessiontoken,
				'pic_ids': this.shanchuId,
				'objectId': this.$store.state.mtjxmm.objectId
			}, function(data) {
				if(data.status == 1) {
					that.$store.state.mtjxmm.mu_photo.splice(that.shanchuIndex, 1)
					// 更新缓存，防止刷新的时候的不更新
					var mtjxmm = JSON.parse(window.sessionStorage.getItem('mtjxmm'))
					mtjxmm.mu_photo.splice(that.shanchuIndex, 1)
					window.sessionStorage.setItem('mtjxmm', JSON.stringify(mtjxmm))
					that.shanchus = false
					that.shanchuId = ''
					that.shanchuItem = ''
					that.shanchuIndex = ''
				}
			})

		},
		sanchu(id, item, index) {

			this.shanchuId = id
			this.shanchuItem = item
			this.shanchuIndex = index
			this.shanchus = true

		},
		nexts: function() {

			if($('.uploads>.houtaiimg').length > 0 || $(".uploads .up-img").length > 0) {
				if($('.uploads>.houtaiimg').length + $(".uploads .up-img").length > 9) {
					alert('上传不能超过9张图片')
					return
				}
				if(tdate.length > 0) {
					this.$store.commit('saveTjxmm', {
						'mu_photo': tdate
					})
					console.log(tdate, 'saveTjxmmzhihou')
				}

				if(this.$route.params.tjId == undefined) {
					this.$router.push({
						name: 'price4',
						params: {
							'log': this.longitude,
							'lat': this.latitude
						}
					})
				} else {
					this.$router.push({
						name: 'price44',
						params: {
							'tjId': this.$route.params.tjId,
							'log': this.longitude,
							'lat': this.latitude
						}
					})
					//alert('xin')
				}
			} else {
				alert('至少上传一张图片')
				return
			}

		}
	},
	// 
	mounted: function() {
		var that = this
		this.biaoti = this.$route.params.biaoti
		this.status = this.$route.params.status
		// 如果是已发布和审核中则只有价格和库存可以修改，照片没有叉子页面上传的东西
		if(this.status == 1 || this.status == 2) {
			$(".uploads .add").css({
				"display": 'none'
			})
			$(".uploads .chazhis").css({
				"display": 'none'
			})
		}
		// 如果是添加新苗木，则清空mtjxmm
		if(this.$route.params.biaoti == 1) {
			// if(tdate!=undefined){
			//     tdate=[]
			// }//这个从新进来的适合肯定是没有的

			window.sessionStorage.setItem("tiao", 1)
			// 每次点击1添加新苗木标签的时候都清空mtjxmm
			var mtjxmms = {
				"objectId": '', //苗圃埸ID
				"mu_photo": [],
				"lawn_length": '', //草坪长
				'lawn_width': '', //草坪宽
				'lawn_density': '', //草坪密度
				'lawn_amount': '', //草坪每捆数量
				"mu_name": '', //添加新苗木名称
				'mu_type': '', //添加新苗木类型
				'mu_zg_min': '', //添加新苗木株高最小值
				'mu_zg_max': '', //添加新苗木株高最大值
				'mu_gf_min': '', //添加新苗木冠幅最小值
				'mu_gf_max': '', //添加新苗木冠幅最大值
				'mu_package_weight': '', //添加新苗木的几斤袋
				'mu_rg_min': '', //添加新苗木的肉高最小值
				'mu_rg_max': '', //添加新苗木的肉高最大值
				'mu_zfjg_min': '', //添加新苗木的主分支高
				'mu_zfjg_max': '', //添加新苗木的主分支高
				'mu_mj_min': '', //添加新苗木的米茎最小值
				'mu_mj_max': '', //添加新苗木的米茎最大值
				'mu_dj_min': '', //添加新苗木的地径最小值
				'mu_dj_max': '', //添加新苗木的地径最大值
				'mu_stock': '', //添加新苗木的库存
				'mu_price': '' //添加新苗木的价格
			}
			window.sessionStorage.setItem("mtjxmm", JSON.stringify(mtjxmms))
			this.$store.state.mtjxmm = mtjxmms
		} else {
			// 只有其他3个标签才用缓存的
			// 这个是读取缓存的
			this.name = this.$store.state.mtjxmm.mu_name
			//恢复选择的类型
			for(var i = 0; i < this.type.length; i++) {
				if(this.type[i] == this.$store.state.mtjxmm.mu_type) {
					this.typex = i
					this.chosetype = this.type[i]
				}

			}
			//恢复几斤袋选择的类型
			for(var i = 0; i < this.type2N.length; i++) {
				if(this.type2N[i] == this.$store.state.mtjxmm.mu_package_weight) {
					this.typex2 = i
					this.chosetype2 = this.type2N[i]
				}

			}
			this.zgmin = this.$store.state.mtjxmm.mu_zg_min
			this.zgmax = this.$store.state.mtjxmm.mu_zg_max
			this.gfmin = this.$store.state.mtjxmm.mu_gf_min
			this.gfmax = this.$store.state.mtjxmm.mu_gf_max
			this.rgmin = this.$store.state.mtjxmm.mu_rg_min
			this.rgmax = this.$store.state.mtjxmm.mu_rg_max
			this.zfzmin = this.$store.state.mtjxmm.mu_zfjg_min
			this.zfzmax = this.$store.state.mtjxmm.mu_zfjg_max
			if(this.$store.state.mtjxmm.mu_dj_min != '' || this.$store.state.mtjxmm.mu_dj_max != '') {
				//如果地径不为空，则说明选择了地径
				this.djmin = this.$store.state.mtjxmm.mu_dj_min
				this.djmax = this.$store.state.mtjxmm.mu_dj_min
				this.chosetype0 = '地径'
				this.sanIdx = 1
				// this.typex = 1
			} else if(this.$store.state.mtjxmm.mu_mj_min != '' || this.$store.state.mtjxmm.mu_mj_max != '') {
				//如果地径不为空，则说明选择了地径
				this.mjmin = this.$store.state.mtjxmm.mu_mj_min
				this.mjmax = this.$store.state.mtjxmm.mu_mj_max
				this.chosetype0 = '米径'
				this.sanIdx = 0
				// this.typex = 0
			}

			if(this.$store.state.mtjxmm.mu_price == '面议' || this.$store.state.mtjxmm.mu_price == '-1') {
				this.price = ''
				this.price0 = 1
			} else if(this.$store.state.mtjxmm.mu_price == '') {
				this.price = ''
				this.price0 = 0
			} else {
				this.price0 = 0
				this.price = this.$store.state.mtjxmm.mu_price
			}

			this.stock = this.$store.state.mtjxmm.mu_stock
		}
		// 草坪
		this.lawn_length = this.$store.state.mtjxmm.lawn_length
		this.lawn_width = this.$store.state.mtjxmm.lawn_width
		// 恢复草坪密度
		for(var i = 0; i < this.caoMditem.length; i++) {
			if(parseFloat(this.caoMditem[i].replace('%', '')) == parseFloat(this.$store.state.mtjxmm.lawn_density)) {
				this.mdx = i
				this.lawn_density = this.$store.state.mtjxmm.lawn_density
			}

		}
		// 恢复草坪数量
		for(var i = 0; i < this.caoSlitem.length; i++) {
			console.log(this.caoSlitem[i])
			console.log(parseFloat(this.caoSlitem[i].replace('片', '')))
			if(parseFloat(this.caoSlitem[i].replace('片', '')) == parseFloat(this.$store.state.mtjxmm.lawn_amount)) {
				this.slx = i
				this.lawn_amount = this.$store.state.mtjxmm.lawn_amount
			}

		}

		// 请求当前苗圃场的信息
		$.get(Boss + "ground/" + this.$route.params.objectId, {
			"sessiontoken": sessiontoken
		}, function(data) {
			that.datas = data.results
			JSONS(data, '预览苗圃ddddgg_address')

		})

		// 给上传的图片添加点击终极放大事件
		// setTimeout(function(){
		$(document).on('click', '.up-section', function() {
			var index = $(this).index()
			console.log("下标" + index)
			console.log("长度" + $('.up-section').length)
			that.zhongji_open(index, index - 1)
		})
		// },100)

	}
}