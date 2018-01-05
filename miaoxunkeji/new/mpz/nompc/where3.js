
 
// 没有 您的苗圃场位于什么地方？

const where3 = {
    template: `
         <div class="relative" style="height:593px;padding:20px;padding-top:55px;">
		    <p class="f26 c49494B">您的苗圃场位于什么地方？</p>
			<p class="f26 c49494B">是什么？</p>

			

			<div class="f18 c696A6C" style="margin-top:35px;width:440px;height:70px;">
			    <div class="lf relative" @click="openzs()">
				      <p>省份/直辖市/自治区<span class="f15">（必填）</span></p>
                      <input v-model="province" readOnly class="f15 border cursor rad"  type="text"  placeHolder="请选择" style="margin-top:10px;padding:10px;width:215px;height:38px;">
					  <img :src="openz==false?'../tu-mpz/1-58.png':'../tu-mpz/1-59.png'" class="cursor" style="right:15px;position:absolute;top:50px;">
				      <ul v-if="openz==true" style="z-index:2;width:380px;padding:10px;" class="absolute bai overflow border rad-br rad-bl ">
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
			<input  v-model="address" type="text" class="f15 rad border" placeHolder="请输入您苗圃场的地址" style="height:38px;width:440px;padding:10px;">
		    

  <!--苗圃场地图定位坐标将不会更新
  <div  class="wai_kuangs " v-show="trips==true">
  <div  style="width:600px;height:302px;" class="nei_kuang bai rad center">
       <p class="f30 c676868" style="margin:90px 0 83px 0;">苗圃场地图定位坐标将不会更新</p>
       <button @click="trips=false" class="f30 c676868 lf layui-btn-primary" style="height:90px;width:300px;border:1px solid #f2f2f2;">取消</button>
       <button @click="trips=false" class=" white rf layui-btn" style="font-size:30px;background:#60B346;height:90px;width:300px;">我知道了</button>
  </div>
  </div>			  
-->
			  <img src="../tu-mpz/1-14.png" style="display:none;position:absolute;right:20px;top: 94px;" class="cursor">
			  
			  <div style="position:fixed;left:0;bottom:0;width:100%;height:73px;" class=" bai">
			     <div  style="width:1024px;height:73px;" class="spjz">
				     <goback></goback>
			         <img @click="nexts($event)" :src="this.province!=''&&this.city!=''&&this.address!=''?'../tu-mpz/1-25.png':'../tu-mpz/1-24.png'" style="right:20px;" class="cursor czjz">
				 </div>
               </div>
          </div>


     `,
     data:function(){
      return { first:true,
      trips:false,//苗圃场地图定位坐标将不会更新
		province:this.$store.state.mpc.gg_province,//省份/直辖市/自治区
		city:this.$store.state.mpc.gg_city,//城市
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
     computed:{
     	watch:function(){
     		this.address=this.$store.state.mpc.gg_address
     		this.city=this.$store.state.mpc.gg_city
     		this.province=this.$store.state.mpc.gg_province
     	}
     },
     components:{"goback":goback},
    methods:{
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
	getPoint(adds){
		var that=this
   var myGeo = new BMap.Geocoder();
	// 将地址解析结果显示在地图上,并调整地图视野
	myGeo.getPoint(adds, function(point){
		if (point) {
			console.log(point)
			that.$store.commit('saveMPC',
				{"gg_province":that.province,"gg_city":that.city,"gg_address":that.address,"gg_coordinate_lng":point.lng,"gg_coordinate_lat":point.lat}) 
		}else{
			console.log("您选择地址没有解析到结果!");
			console.log(point)
			that.$store.commit('saveMPC',
				{"gg_province":that.province,"gg_city":that.city,"gg_address":that.address}) 
		}
		   setTimeout(function(){
				that.$router.push({name:'ditu4'})
			},1000)
	}, "北京市");
},
    //   苗圃场名称  联系人名称  电话号码 不为空的时候点击下一步
	nexts:function(e){
		var that=this
		if(this.province!=''&&this.city!=''&&this.address!=''){
			if(this.$store.state.mpc.gg_coordinate_lat==''){
				// 保存二维数组
			    this.getPoint(this.province+this.city+this.address)
			}else{
				this.$router.push({name:'ditu4'})
			}
			
			
			
		}else{
			return
		}
	}
    },
    // 
    mounted:function () {
		var that=this
    // 请求省和市的数据
	$.get(Boss1+'/cities.json',function(data){
		console.log(data)
		that.wheres=data
	})
    }
}

