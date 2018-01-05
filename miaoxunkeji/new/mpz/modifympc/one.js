

// 添加苗圃场的时候1

const one = {
  template: `
 <div >
  <div  class=" c4C4C4F" style="padding:25px 20px;margin:0 auto;width:984px;">
  <p class="f26 relative" style="padding-left:40px;background:url(../tu-mpz/1-60.png) no-repeat;">苗圃一场
     <img  @click="isdeleted=true" src="../tu-mpz/1-31.png"  style="right:0;display:none;" class="czjz cursor">
  </p>
<div style="display:none;">{{watch}}</div>
  <div class="lf" style="width:462px;">
  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">苗圃场名称（必填）</p>
  <div style="width:462px;" class="relative">
  <input @keyup="tests($event)" v-on:blur="updata()" :class="{hong:hong==true}" v-model="company" type="text" class="f15 rad border" placeHolder="请输入苗圃场名称" style="height:38px;width:462px;padding:10px;padding-right:35px;">
  <img  v-if="hong==true" src="../tu-mpz/1-62.png"  style="position:absolute;right:10px;" class="czjz">
  </div>
  <p v-if="hong==true" class="f12 cBF3F3F" style="margin-top:5px;">苗圃场名称不能包含公司以及企业字样</p>


  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">简介</p>
  <textarea maxlength="200" v-on:blur="updata()" class="f16 rad border" v-model="intro" placeHolder="请详细介绍您的苗圃场" style="height:248px;width:462px;padding:10px;resize:none;"></textarea>
  <p class="relative f16 c999899 right" style="top: -30px;
    right: 15px;">{{intro.length}}/200</p>

  </div>



  <div class="rf"  style="width:462px;">
  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">联系人（必填）</p>
  <input v-on:blur="updata()"  v-model="name" type="text" class="f15 rad border" placeHolder="请输入联系人名称" style="height:38px;width:462px;padding:10px;">

  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:25px;">联系电话（必填）</p>
  <input  v-on:blur="updata()" v-model="phone" type="text" @keyup="checkPhone()" maxlength=11 @afterpaste="checkPhone()"    class="f15 rad border" placeHolder="请输入电话号码" style="height:38px;width:462px;padding:10px;">


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
            <input v-model="city" readOnly type="text"  class="f15 border cursor rad" placeHolder="请选择" style="margin-top:10px;padding:10px;width:215px;height:38px;">
            <img  :src="openy==false?'../tu-mpz/1-58.png':'../tu-mpz/1-59.png'"  class="cursor" style="right:10px;position:absolute;top:50px;">
             <ul v-if="openy==true" style="z-index:2;width:193px;padding:10px;" class="absolute bai overflow border rad-br rad-bl bai">
            <li  @mouseleave="onc=-1"  @mouseenter="onc=index" :class="{c269C88s:index==cityCurrent,c269C88:onc==index}" @click.stop="cityCurrents($event,index,item)" v-for="(item,index) in wheres[province]" class="cursor bai f12 c999899 lf" style="width:86px;margin-bottom:20px;">{{item.length>5?item.substring(0,4):item}}<span v-if="item.length>6">...</span></li>
            </ul>
      </div>
  </div>




 



  <p class="f18 c696A6C" style="margin-top:35px;margin-bottom:10px;">街道详细地址<span class="f15">（必填）</span></p>
  <input @focus="focus()" v-on:blur="updata()" v-model="address" type="text" class="f15 rad border" placeHolder="请输入您苗圃场的地址" style="height:38px;width:440px;padding:10px;">

  </div>






  </div>

  <two class="cursor lf" style="width:985px;"></two>
  
  <!--苗圃场地图定位坐标将不会更新-->
  <div  class="wai_kuangs " v-show="trips==true">
  <div  style="width:600px;height:302px;" class="nei_kuang bai rad center">
       <p class="f30 c676868" style="margin:90px 0 83px 0;">苗圃场地图定位坐标将不会更新</p>
       <button @click="trips=false" class="f30 c676868 lf layui-btn-primary" style="border-bottom-left-radius: 5px;font-size:30px;border:1px solid #f2f2f2;height:90px;width:300px;">取消</button>
       <button @click="trips=false" class=" white rf layui-btn" style="border-bottom-right-radius: 5px;font-size:30px;font-size:30px;background:#60B346;height:90px;width:300px;">我知道了</button>
  </div>
  </div>       
 

  <!--确定删除的弹出框-->
 <div v-if="isdeleted==true" style="z-index:2000;position: fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);"  > 
  <div  class="f26 c676868 center bai rad nei_kuang" style="width:400px;height:302px;"> 
           <p style="margin-top:60px;">如果您想删除此苗圃</p>
           <p style="margin-bottom:25px;">请输入”<span class="cB6403E">删除</span>“</p>
           <input  v-model="words" type="text" class="f18 border rad none center" style="width:340px;height:60px;margin-bottom:11px;">
           
           <!--白色的确定-->
             <button  v-show="words!='删除'" class="noleaves c676868 layui-btn layui-btn-zuo layui-primary lf " style="color:#676868;background:white;border-top:1px solid #f2f2f2;">确定</button>
           <!--橙色的确定-->  
             <button @click="isdeleteds()" v-show="words=='删除'" class="noleaves layui-btn-zuo c676868 layui-btn layui-primary lf " style="color:white;background:#C06431;border-top:1px solid #C06431;">确定</button>
          
           <!--取消-->   
             <button @click="isdeleted=false" class=" c676868 layui-btn layui-primary layui-btn-you rf" style="background:#5FB246;">取消</button>
           
  </div>
</div>



 </div>
  `,
  data:function(){
    return {
       first:true,
      trips:false,//苗圃场地图定位坐标将不会更新
      words:'',//删除苗圃场的输入框
      isdeleted:false,//控制删除苗圃的弹出框
       intro:this.$store.state.modifyGg_intro,//简介
      company:this.$store.state.modifyGg_name,//请输入苗圃场名称
      name:this.$store.state.modifyGg_contacts,//请输入联系人名称
      phone:this.$store.state.modifyGg_contact_number,//请输入电话号码
      province:this.$store.state.modifyGg_province,//省份/直辖市/自治区
      city:this.$store.state.modifyGg_city,//城市
      address:this.$store.state.modifyGg_address,//街道详细地址
      objectId:this.$store.state.modifyObjectId,
      gg_coordinate_lat:this.$store.state.modifyGg_coordinate_lat,//苗圃埸坐标纬度
      gg_coordinate_lng:this.$store.state.modifyGg_coordinate_lng,//苗圃埸坐标经度

      hong:false,//控制苗圃场的红色错误线框的
      openy:false,//控制市的弹出框
      openz:false,//控制省的弹出框
    
    wheres:'',// 全国城市级联列表
    provinceCurrent:-1,//当前绿色的省份
    cityCurrent:-1,//当前绿色的城市
    onp:-1,//鼠标扫的时候变绿色
    onc:-1//鼠标扫的时候变绿色
  }
},
computed:{
  watch(){
      this.intro=this.$store.state.modifyGg_intro//简介
      this.company=this.$store.state.modifyGg_name//请输入苗圃场名称
      this.name=this.$store.state.modifyGg_contacts//请输入联系人名称
      this.phone=this.$store.state.modifyGg_contact_number//请输入电话号码
      this.province=this.$store.state.modifyGg_province//省份/直辖市/自治区
      this.city=this.$store.state.modifyGg_city//城市
      this.address=this.$store.state.modifyGg_address//街道详细地址
      this.objectId=this.$store.state.modifyObjectId
      this.gg_coordinate_lat=this.$store.state.modifyGg_coordinate_lat//苗圃埸坐标纬度
      this.gg_coordinate_lng=this.$store.state.modifyGg_coordinate_lng//苗圃埸坐标经度
  }
},
components:{
        "headers":headers,//菜单栏menu处抽取的顶栏
        "two":two
      },
      methods:{
         // 检测手机号码
        checkPhone(){
          this.phone=this.phone.replace(/\D/g,'')
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
        // 
        isdeleteds(){
          if(this.words=='删除'){
               // 删除苗圃场
               common_deletedmpc(this.$route.params.groundId)
              
          

          }
        },
        updata(){
      this.$store.state.modifyGg_intro=this.intro//简介
      this.$store.state.modifyGg_name=this.company//请输入苗圃场名称
      this.$store.state.modifyGg_contacts=this.name//请输入联系人名称
      this.$store.state.modifyGg_contact_number=this.phone//请输入电话号码
      this.$store.state.modifyGg_province=this.province//省份/直辖市/自治区
      this.$store.state.modifyGg_city=this.city//城市
      this.$store.state.modifyGg_address=this.address//街道详细地址
      this.$store.state.modifyObjectId=this.objectId
      this.$store.state.modifyGg_coordinate_lat=this.gg_coordinate_lat//苗圃埸坐标纬度
      this.$store.state.modifyGg_coordinate_lng=this.gg_coordinate_lng//苗圃埸坐标经度
      console.log( this.$store.state.modifyGg_name)
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
       this.updata()
    },
    //  点击当前城市的li
    cityCurrents:function(e,index,item){
      this.openz=false
      console.log(item)
      this.city=item
      this.cityCurrent=index
      this.openy=false
       this.updata()
    },
  // 点击下一步的获取坐标
  getPoint(adds){
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
  }, "北京市");
},
    //   苗圃场名称  联系人名称  电话号码 不为空的时候点击下一步
    nexts:function(e){
      if(this.company!=''&&this.name!=''&&this.phone.length==11&&this.province!=''&&this.city!=''&&this.address!=''){
      // 保存二维数组
      this.getPoint(this.province+this.city+this.address)
      
      this.$router.push({name:'twos'})
    }else{
      return
    }
  }
},
mounted:function(){
  var that=this
  //  alert(that.$store.state.modifyChanged)
    // 请求省和市的数据
    $.get(Boss1+'/cities.json',function(data){
      console.log(data)
      that.wheres=data
    })
    // 判断是否走过地图页面保存过位置
    if( that.$store.state.modifyChanged == true){
      console.log('tuichu')
      return
    }

    // 根据苗圃场id请求苗圃场的信息
    // alert(this.$route.params.groundId)
    $.get(Boss+"ground/"+this.$route.params.groundId,{"sessiontoken":sessiontoken},function(data){
      console.log('根据苗圃场id请求苗圃场的信息')
      //that.datas=data.results
      // that.$store.state.modifyChanged = true
      that.$store.state.modifyGg_intro=data.results.gg_intro,//简介
      that.$store.state.modifyGg_name=data.results.gg_name//请输入苗圃场名称
      that.$store.state.modifyGg_contacts=data.results.gg_contacts//请输入联系人名称
      that.$store.state.modifyGg_contact_number=data.results.gg_contact_number//请输入电话号码
      that.$store.state.modifyGg_province=data.results.gg_address.province//省份/直辖市/自治区
      that.$store.state.modifyGg_city=data.results.gg_address.city//城市
      that.$store.state.modifyGg_address=data.results.gg_address.detail_address//街道详细地址
      that.$store.state.modifyObjectId=data.results.objectId
      // if(that.$store.state.modifyGg_coordinate_lat==''){
         that.$store.state.modifyGg_coordinate_lat=data.results.gg_address.point.latitude
         that.$store.state.modifyGg_coordinate_lng=data.results.gg_address.point.longitude
      // }
     
     
    })

    
  }
}

