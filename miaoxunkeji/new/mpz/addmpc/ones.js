

// 添加苗圃场的时候1

const ones = {
  template: `

  <div class=" c4C4C4F" style="padding:25px 20px;margin:0 auto;width:984px;">
  <p class="f26" style="padding-left:40px;background:url(../tu-mpz/1-60.png) no-repeat;">苗圃一场</p>

  <div class="lf" style="width:462px;">
  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">苗圃场名称（必填）</p>
  <div style="width:462px;" class="relative">
  <input @keyup="tests($event)" :class="{hong:hong==true}" v-model="company" type="text" class="f15 rad border" placeHolder="请输入苗圃场名称" style="height:38px;width:462px;padding:10px;padding-right:35px;">
  <img  v-if="hong==true" src="../tu-mpz/1-62.png"  style="position:absolute;right:10px;" class="czjz">
  </div>
  <p v-if="hong==true" class="f12 cBF3F3F" style="margin-top:5px;">苗圃场名称不能包含公司以及企业字样</p>


  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">简介</p>
  <textarea maxlength="200" class="f16 rad border" v-model="intro" placeHolder="请详细介绍您的苗圃场" style="height:248px;width:462px;padding:10px;resize:none;"></textarea>
  <p class="relative f16 c999899 right" style="top: -30px;
    right: 15px;">{{intro.length}}/200</p>
  </div>



  <div class="rf"  style="width:462px;">
  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">联系人（必填）</p>
  <input  v-model="name" type="text" class="f15 rad border" placeHolder="请输入联系人名称" style="height:38px;width:462px;padding:10px;">

  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">联系电话（必填）</p>
  <input  v-model="phone" type="text" @keyup="checkPhone()" maxlength=11 @afterpaste="checkPhone()"   class="f15 rad border" placeHolder="请输入电话号码" style="height:38px;width:462px;padding:10px;">
   

  <div class="f18 c696A6C" style="margin-top:35px;width:440px;height:70px;">
  <div class="lf relative" @click="openzs()">
  <p>省份/直辖市/自治区<span class="f15">（必填）</span></p>
  <input v-model="province" readOnly class="border cursor rad f15"  type="text"  placeHolder="请选择" style="margin-top:10px;padding:10px;width:215px;height:38px;">
  <img :src="openz==false?'../tu-mpz/1-58.png':'../tu-mpz/1-59.png'" class="cursor" style="right:15px;position:absolute;top:50px;">
        <ul v-if="openz==true" style="z-index:2;width:380px;padding:10px;" class="bai absolute overflow border rad-br rad-bl ">
        <li  @mouseleave="onp=-1"  @mouseenter="onp=index" :class="{c269C88s:indexs==provinceCurrent,c269C88:onp==index}" @click.stop="provinceCurrents($event,indexs,index)" v-for="(item,index,indexs) in wheres" class="cursor bai f12 c999899 lf left" style="width:100px;margin-bottom:20px;">{{index.length>6?index.substring(0,5):index}}<span v-if="index.length>6">...</span></li>
        </ul>
  </div>


  <div class="rf relative"   @click="openys()">
  <p>城市<span class="f15">（必填）</span></p>
  <input v-model="city" readOnly type="text"  class="border cursor rad f15" placeHolder="请选择" style="margin-top:10px;padding:10px;width:215px;height:38px;">
  <img  :src="openy==false?'../tu-mpz/1-58.png':'../tu-mpz/1-59.png'"  class="cursor" style="right:10px;position:absolute;top:50px;">
        <ul v-if="openy==true" style="z-index:2;width:193px;padding:10px;" class="bai absolute overflow border rad-br rad-bl bai">
            <li  @mouseleave="onc=-1"  @mouseenter="onc=index" :class="{c269C88s:index==cityCurrent,c269C88:onc==index}" @click.stop="cityCurrents($event,index,item)" v-for="(item,index) in wheres[province]" class="cursor bai f12 c999899 lf" style="width:86px;margin-bottom:20px;">{{item.length>5?item.substring(0,4):item}}<span v-if="item.length>6">...</span></li>
        </ul>      
  </div>
  

  </div>








  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:10px;">街道详细地址<span class="f15">（必填）</span></p>
  <input @focus="focus()" v-model="address" type="text" class="f15 rad border" placeHolder="请输入您苗圃场的地址" style="height:38px;width:462px;padding:10px;">
  <span @click="isquedings()" v-show="dituShow==false" class="f15 c269C88 relative rf cursor" style="top:-30px;left:-40px;">确定</span>
  </div>

<!--地图-->
<div v-show="isqueding==true" style="margin-top:550px;margin-bottom:100px;width:100%;height:468px;" class="relative">
           <div   id="dituShow"  style="width:100%;height:468px;"> 

           </div>
         
           <div v-show="dituShow==false" @click="next()" class="cursor absolute center f26 cFFFFFF" style="z=index:1000;width:100%;height:100%;background:rgba(0,0,0,0.6);left:0;top:0;" >
                 <img src="../tu-mpz/1-02 (2).png" style="margin:182px 0 10px 0;">
                 <p>请手动定位苗圃场位置</p>
           </div>

</div>
<!--完成添加-->
  <div style="position:fixed;left:0;bottom:0;width:100%;height:73px;" class="bai">
  <div  style="width:1024px;height:73px;" class="spjz">
  <img @click="nexts($event)" :src="this.company!=''&&this.name!=''&&this.phone.length==11&&this.province!=''&&this.city!=''&&this.address!=''?'../tu-mpz/1-29.png':'../tu-mpz/1-29 (2).png'" style="right:20px;" class="cursor czjz">
  </div>
  </div>

<!--苗圃场地图定位坐标将不会更新-->
  <div  class="wai_kuangs " v-show="trips==true">
  <div  style="width:600px;height:302px;" class="nei_kuang bai rad center">
       <p class="f30 c676868" style="margin:90px 0 83px 0;">苗圃场地图定位坐标将不会更新</p>
       <button @click="trips=false" class="f30 c676868 lf layui-btn layui-btn-primary" style="border-bottom-left-radius: 5px;font-size:30px;border:1px solid #f2f2f2;height:90px;width:300px;">取消</button>
       <button @click="trips=false" class=" white rf layui-btn" style="border-bottom-right-radius: 5px;margin:0;font-size:30px;background:#60B346;height:90px;width:300px;">我知道了</button>
  </div>
  </div>




  </div>

  `,
  data:function(){
    return {
      first:true,
      trips:false,//苗圃场地图定位坐标将不会更新
      isqueding:false,//地图和确定不同时存在
      dituShow:(this.$store.state.mpc.gg_coordinate_lat==''?false:true),//地图和确定不同时存在
      hong:false,//控制苗圃场的红色错误线框的
      intro:this.$store.state.mpc.gg_intro,//简介
      company:this.$store.state.mpc.gg_name,//请输入苗圃场名称
      name:this.$store.state.mpc.gg_contacts,//请输入联系人名称
      phone:this.$store.state.mpc.gg_contact_number,//请输入电话号码
      province:this.$store.state.mpc.gg_province,//省份/直辖市/自治区
    city:this.$store.state.mpc.gg_city,//城市
    coordinate_lat:this.$store.state.mpc.gg_coordinate_lat,//苗圃埸坐标纬度
    coordinate_lng:this.$store.state.mpc.gg_coordinate_lng,//苗圃埸坐标经度
    openy:false,//控制市的弹出框
    openz:false,//控制省的弹出框
    address:this.$store.state.mpc.gg_address,//街道详细地址
    wheres:'',// 全国城市级联列表
    provinceCurrent:-1,//当前绿色的省份
    cityCurrent:-1,//当前绿色的城市
    onp:-1,//鼠标扫的时候变绿色
    onc:-1//鼠标扫的时候变绿色
  }
},
components:{
        "headers":headers//菜单栏menu处抽取的顶栏
      },
      methods:{
        // 检测手机号码
        checkPhone(){
          this.phone=this.phone.replace(/\D/g,'')
        },
        isquedings(){
          var that=this
          // 省市和地址都要不能为空
          if(this.province!=''&&this.city!=''&&this.address!=''){
             // 保存二维数组
            this.getPoint(this.province+this.city+this.address,'isquedings')
            setTimeout(function(){
                  that.isqueding=true
                  window.sessionStorage.setItem('isqueding',1)
            },500)
            
            }
        },
      // 地址的获取焦点
      focus(){
            if(this.$store.state.mpc.gg_coordinate_lat!=''&&this.first==true){
                  this.trips=true
                  this.first=false
                }else{
                  this.trips=false
                  this.first=false
                }
  },
      // 点击地图前往地图页面
      next(){
         // 保存二维数组
      this.getPoint(this.province+this.city+this.address)
        this.dituShow=true
        this.$router.push({name:'twos'})
      },
      // 检测是否含有公司和企业的字样
      tests:function(e){
       if(this.company.indexOf("企业")!=-1||this.company.indexOf("公司")!=-1){
         this.hong=true
       }else{
         this.hong=false
       }
     },
  // 点击省份的input
  openzs:function(){
    if(this.$store.state.mpc.gg_coordinate_lat!=''){
      this.trips=true
    }else{
      this.trips=false
    }
    
    if(this.openz==true){
      this.openz=false
    }else{
      this.openz=true
      this.openy=false
    }
    
  },
  // 点击城市的input
  openys:function(){
    if(this.$store.state.mpc.gg_coordinate_lat!=''){
      this.trips=true
    }else{
      this.trips=false
    }


    if(this.openy==true){
      this.openy=false
    }else{
      this.openy=true
      this.openz=false
    }
    
  },
    //  点击当前省份的li
    provinceCurrents:function(e,index,item){
      this.openy=false
      console.log(item)
      this.province=item
      this.city=''
      this.provinceCurrent=index
      this.openz=false
    },
    //  点击当前城市的li
    cityCurrents:function(e,index,item){
      this.openz=false
      console.log(item)
      this.city=item
      this.cityCurrent=index
      this.openy=false
    },
  // 点击下一步的获取坐标
  getPoint(adds,isquedings){
    var that=this
    var myGeo = new BMap.Geocoder();
  // 将地址解析结果显示在地图上,并调整地图视野
  myGeo.getPoint(adds, function(point){
    if (point) {
      console.log(point)
      that.$store.commit('saveMPC',
        {"objectId":'',"gg_name":that.company,"gg_intro":that.intro,"gg_contact_number":that.phone,"gg_contacts":that.name,"gg_province":that.province,"gg_city":that.city,"gg_address":that.address,"gg_coordinate_lng":point.lng,"gg_coordinate_lat":point.lat}) 
    }else{
      console.log("您选择地址没有解析到结果!");
      console.log(point)
      that.$store.commit('saveMPC',
         {"objectId":'',"gg_name":that.company,"gg_intro":that.intro,"gg_contact_number":that.phone,"gg_contacts":that.name,"gg_province":that.province,"gg_city":that.city,"gg_address":that.address,"gg_coordinate_lng":point.lng,"gg_coordinate_lat":point.lat}) 
        // {"gg_province":that.province,"gg_city":that.city,"gg_address":that.address}) 
    }
    // 如果不是点击确定的时候
    if(isquedings==undefined){
        setTimeout(function(){
             that.$router.push({name:'twos'})
        },200)
    }else{
        var map = new BMap.Map("dituShow");          // 创建地图实例
        var  initLng= that.$store.state.mpc.gg_coordinate_lng;//113.5656
        var initLat = that.$store.state.mpc.gg_coordinate_lat;//22.56
         if(initLat==''){
          initLat=39.915
        }
        if(initLng==''){
          initLng=116.404
        }
        var point = new BMap.Point(initLng,initLat);  // 创建点坐标  
        map.centerAndZoom(point, common_centerAndZoom);                 // 初始化地图，设置中心点坐标和地图级别  
        map.enableScrollWheelZoom(); 
      
        var myIcon = new BMap.Icon("../tu-mpz/1-68.png", new BMap.Size(29,37));
        var mk = new BMap.Marker(point,{icon:myIcon});
        map.addOverlay(mk);//把点添加到地图上 
    }
    
  }, "北京市");
},
    //   苗圃场名称  联系人名称  电话号码 不为空的时候点击下一步
    nexts:function(e){
      if(this.company!=''&&this.name!=''&&this.phone.length==11&&this.province!=''&&this.city!=''&&this.address!=''){
      // 保存二维数组
      // this.getPoint(this.province+this.city+this.address)
        //  nexts:function(e){
     var that=this
     
       that.$store.commit('saveMPC',
        {"objectId":'',"gg_name":that.company,"gg_intro":that.intro,"gg_contact_number":that.phone,"gg_contacts":that.name,"gg_province":that.province,"gg_city":that.city,"gg_address":that.address,"gg_coordinate_lat":that.gg_coordinate_lat,"gg_coordinate_lng":that.gg_coordinate_lng}) 
     // 最终提交数据
      //0代表个人项目
     $.post(Boss+"group/"+groupId+"/ground",{
     "objectId":this.$store.state.mpc.objectId,//苗圃埸ID
          "gg_name":that.company,//苗圃埸名称
          "gg_intro":that.intro,//苗圃埸简介
          "gg_contact_number":that.phone,//苗圃埸联系人电话
          "gg_contacts":that.name,//苗圃埸联系人姓名
          "gg_address":that.address,//苗圃埸详细地址
          "gg_city":that.city,//苗圃埸所在城市
          "gg_province":that.province,//苗圃埸所在省份
          "gg_coordinate_lat":that.$store.state.mpc.gg_coordinate_lat,//苗圃埸坐标纬度
          "gg_coordinate_lng":that.$store.state.mpc.gg_coordinate_lng,//苗圃埸坐标经度
          "sessiontoken":sessiontoken
     },function(data){
        //that.$router.push({name:'tjxmm'})
        // window.sessionStorage.setItem('isqueding',0)

        //  history.go(-1)
        //  location.reload()
        // 返回全部苗木
        // return
              if(data.status==1){
                // 新添加的苗圃场默认就是第一个，接口成功添加会返回信息，只需要拿回返回的名字的id就可以跳转了
                that.$router.push({name:"qbmm",params:{name:data.results.gg_name,objectId:data.results.objectId,biaoti:2}})
              }
              // that.$router.push({name:"qbmm",params:{name:that.$route.params.name,objectId:that.$route.params.groundId,biaoti:2}})
       
     })
      
    
  // }
      
     
    }else{
      return
    }
  }
},
mounted:function(){
  if( window.sessionStorage.getItem('isqueding')==1||this.$store.state.mpc.gg_coordinate_lat!=''){
    this.isqueding=true
  }else{
    this.isqueding=false
  }
  var that=this
    // 请求省和市的数据
    $.get(Boss1+'/cities.json',function(data){
      console.log(data)
      that.wheres=data
    })
// alert(this.dituShow)
setTimeout(function(){
     if(that.dituShow==false){
      // 坐标为空的时候
        // var map = new BMap.Map("dituShow");          // 创建地图实例
        // var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        // map.centerAndZoom(point, 13);                 // 初始化地图，设置中心点坐标和地图级别  
        // map.enableScrollWheelZoom(); 
     }else{
      // alert(this.$store.state.mpc.gg_coordinate_lat)
         var map = new BMap.Map("dituShow");          // 创建地图实例
        var point = new BMap.Point(that.$store.state.mpc.gg_coordinate_lng,that.$store.state.mpc.gg_coordinate_lat);  // 创建点坐标  
        map.centerAndZoom(point, common_centerAndZoom);                 // 初始化地图，设置中心点坐标和地图级别  
        map.enableScrollWheelZoom(); 
           map.addEventListener("click",function(){
          // alert(3)
           that.next()
        })
        var myIcon = new BMap.Icon("../tu-mpz/1-68.png", new BMap.Size(29,37));
        var mk = new BMap.Marker(point,{icon:myIcon});
                map.addOverlay(mk);//把点添加到地图上 
     }
},500)
    
  }
}

