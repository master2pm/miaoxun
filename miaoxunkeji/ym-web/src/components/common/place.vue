

<template>
<div	class="wai_kuangs">


      <div class="relative  bai nei_kuang2" style="width:640px;height:675px;padding:30px;">
		    <p class="f26 c49494B">目的地点</p>
            <span class="f18 c60B346 absolute cursor" @click="falses()" style="right:30px;top:40px;">确定</span>
            <span class="f18 c60B346 absolute cursor" @click="falses1()" style="right:80px;top:40px;">关闭</span>


			<div class="f18 c696A6C" style="margin-top:35px;width:440px;height:70px;">
			    <div class="lf relative" @click="openzs()">
				      <p>省份/直辖市/自治区</p>
                      <input v-model="province"  readOnly class="border cursor rad f15"  type="text"  placeHolder="请选择" style="padding:10px;width:195px;height:18px;">
					  <img :src="openz==false?'/static/tu-gouwuche/1-22.png':'/static/tu-gouwuche/1-23.png'" class="cursor" style="right:10px;position:absolute;top:50px;">

				</div>
				<div class="rf relative"   @click="openys()">
				      <p>城市</p>
					   <input v-model="city" readOnly type="text"  class="border cursor rad f15" placeHolder="请选择" style="padding:10px;width:195px;height:18px;">
				       <img  :src="openy==false?'/static/tu-gouwuche/1-22.png':'/static/tu-gouwuche/1-23.png'"  class="cursor" style="right:10px;position:absolute;top:50px;">
				</div>
			</div>


			<ul v-if="openz==true" style="top:-1px;z-index:2;width:380px;padding:10px;top:173px;" class="bai absolute overflow border rad-br rad-bl ">
					       <li  @mouseleave="onp=-1"  @mouseenter="onp=index" :class="{c269C88s:indexs==provinceCurrent,c269C88:onp==index}" @click="provinceCurrents($event,indexs,index)" v-for="(item,index,indexs) in wheres" class="cursor bai f12 c999899 lf left" style="width:100px;margin-bottom:20px;">{{index.length>6?index.substring(0,5):index}}<span v-if="index.length>6">...</span></li>
			</ul>

			<ul v-if="openy==true" style="top:-2px;z-index:2;margin-left:225px;width:193px;padding:10px;top:173px;" class="absolute overflow border rad-br rad-bl bai">
					       <li  @mouseleave="onc=-1"  @mouseenter="onc=index" :class="{c269C88s:index==cityCurrent,c269C88:onc==index}" @click="cityCurrents($event,index,item)" v-for="(item,index) in wheres[province]" class="cursor bai f12 c999899 lf" style="width:86px;margin-bottom:20px;">{{item.length>5?item.substring(0,4):item}}<span v-if="item.length>6">...</span></li>
			</ul>



			<p class="f18 c696A6C relative" style="margin-top:35px;margin-bottom:10px;">街道详细地址<span class="cursor f15 absolute" style="right: 210px;
    top: 42px;" @click="wo()">确定</span></p>

			<input  v-model="address" type="text" class="f15 rad border" placeHolder="请输入您苗圃场的地址" style="height:18px;width:420px;padding:10px;">


<div	class="relative" style="margin-top:35px;margin-bottom:10px;height:382px;">
            <!-- 地图 -->
	        <div id="gouwuche3map" class="f18 c696A6C " style="height:382px;">

			</div>
			<!-- 遮罩层 -->
			<div @click="iscans()" v-show="iscan==false"  class="absolute  cursor center f26 " style="padding-top:210px;top:0;width:100%;height:172px;background:rgba(0,0,0,0.7);">
				<span style="color:white;">请先填写上方资料再点击此处定位您的位置</span>
			</div>

</div>





          </div>
          </div>
</template>


<script>

	export default {
		data() {
			return {
		iscan:false,//点击遮罩层后如果省市的长度大于0  则让他消失
		province:this.$store.state.currentTop.getProvince,//省份/直辖市/自治区this.$store.state.getProvince
		city:this.$store.state.currentTop.getCity,//城市this.$store.state.getCity
		openy:false,//控制市的弹出框
		openz:false,//控制省的弹出框
		address:this.$store.state.currentTop.getAddress,//街道详细地址this.$store.state.currentTop.getPlace
		wheres:'',// 全国城市级联列表
		provinceCurrent:-1,//当前绿色的省份
		cityCurrent:-1,//当前绿色的城市
		onp:-1,//鼠标扫的时候变绿色
		onc:-1//鼠标扫的时候变绿色

			};
		},

		methods:{
wo(){
	if(this.address!=''){
		this.iscans()
	}
},
//
iscans(){
	var that=this

	if((this.$store.state.currentTop.lng!='')){
		this.iscan=true
		var map = new BMap.Map("gouwuche3map");
		 map.enableScrollWheelZoom();
		map.clearOverlays();
	var point = new BMap.Point(this.$store.state.currentTop.lng,this.$store.state.currentTop.lat);
	map.centerAndZoom(point,12);
		var myGeo = new BMap.Geocoder();
	// 将地址解析结果显示在地图上,并调整地图视野
	// alert(123)
	myGeo.getPoint(this.province+this.city+this.address, function(point){
		if (point) {
			map.centerAndZoom(point, 16);
			//map.addOverlay(new BMap.Marker(point));
	var myIcon = new BMap.Icon("/static/tu-gouwuche/1-20.png", new BMap.Size(28,37));
	var p=new BMap.Point(point.lng,point.lat);
	var marker2 = new BMap.Marker(p,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);              // 将标注添加到地图中
	marker2.enableDragging()
	that.$store.state.currentTop.lng=point.lng
	that.$store.state.currentTop.lat=point.lat
	 marker2.addEventListener("dragend", showInfo);
	        //绑定Marker的拖拽事件
        function showInfo(e){
            var gc = new BMap.Geocoder();
            gc.getLocation(e.point, function(rs){
                var addComp = rs.addressComponents;
                var address = addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
                console.log("dong")
                console.log(rs.point.lng)
                that.$store.state.currentTop.lng=rs.point.lng
                that.$store.state.currentTop.lat=rs.point.lat
             });
        }

		}else{
			alert("您选择地址没有解析到结果!");
		}
	}, "北京市");

	}
},
// 点击确定按钮关闭框框
falses(){
	//this.$store.state.currentTop.getAddress=this.province+this.city+this.adress
	// if(this.address==''){
	// 	return
	// }
	// 确定后才把省市 地址付给vuex
	 if(this.province!=''&&this.city!=''&&this.address!=''){
		this.$store.state.currentTop.getPlace=this.province+this.city+this.address
		this.$store.state.currentTop.getCity=this.city
		this.$store.state.currentTop.getProvince=this.province
		this.$store.state.currentTop.getAddress=this.address
		this.$parent.wheres=false

	 }else{
	 	return
	 }

	//this.$set(this.$store.state.currentTop,'flag')//设置一个没用的属性
    //this.$delete(this.$store.state.currentTop,'flag')//删除这个没用的属性


},
// 点击关闭按钮关闭框框
falses1(){

	this.$parent.wheres=false
},
	// 点击省份的input
	openzs:function(){
		if(this.openz==true){
			this.openz=false
		}else{
			this.openz=true
			this.openy=false
		}

	},
	// 点击城市的input
	openys:function(){

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
          // this.$store.state.currentTop.getProvince=item
		 this.city=''
         this.provinceCurrent=index
		 this.openz=false
		 this.iscans()
	},
	  //  点击当前城市的li
	cityCurrents:function(e,index,item){
		this.openz=false
		console.log(item)
         this.city=item
           // this.$store.state.currentTop.getCity=item
         this.cityCurrent=index
		 this.openy=false
		 this.iscans()
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
	}, "北京市");
},
    //   苗圃场名称  联系人名称  电话号码 不为空的时候点击下一步
	nexts:function(e){
		if(this.province!=''&&this.city!=''&&this.address!=''){
			// 保存二维数组
			this.getPoint(this.province+this.city+this.address)

			this.$router.push({name:'ditu4'})
		}else{
			return
		}
	}
		},
		mounted(){
    var that=this
    // 请求省和市的数据
	$.get(this.$store.state.Boss1+'/cities.json',function(data){
		console.log(data)
		that.wheres=data
	})



	 var map = new BMap.Map("gouwuche3map");
	 map.clearOverlays();
	 if(this.$store.state.currentTop.lng!=''&&this.$store.state.currentTop.lat!=''){
	 	  this.iscan=true
	 	var point = new BMap.Point(this.$store.state.currentTop.lng, this.$store.state.currentTop.lat);
	 }else{
	 	 this.iscan=false
	 	var point = new BMap.Point(116.404, 39.915);
	 }

	map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom();

	var myIcon = new BMap.Icon("/static/tu-gouwuche/1-20.png", new BMap.Size(28,37));
	var marker2 = new BMap.Marker(point,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);              // 将标注添加到地图中
	marker2.enableDragging()
	 marker2.addEventListener("dragend", showInfo);
	        //绑定Marker的拖拽事件
        function showInfo(e){
            var gc = new BMap.Geocoder();
            gc.getLocation(e.point, function(rs){
                var addComp = rs.addressComponents;
                var address = addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
                console.log("dong")
                console.log(rs.point.lng)
                that.$store.state.currentTop.lng=rs.point.lng
                that.$store.state.currentTop.lat=rs.point.lat
             });
        }

	}

	};
</script>

<style scoped>
	.c269C88s{color:#269C88 !important;}
	.c269C88{color:#269C88;}


</style>
