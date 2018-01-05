
<template>
	<div style=""  v-cloak >
	 <share v-if="mpcxq!=''" :mpcxq="mpcxq"></share>
	<!-- 	<div style="display:none;">
			{{watch}}
		</div> -->  
	<div	style="width:1024px;margin:0 auto;">
	  	
	 
		<div  v-if="mpcxq!=''">
			<p class="f26 c676868" style="padding:60px 0;margin:0 20px;">{{mpcxq.gg_name}}</p>
			<p class="f18 c4A494B" style="margin:0 20px;">苗圃场简介</p>
			<p class="f16 c676868" style="padding:25px 0 50px 20px;">{{mpcxq.gg_intro}}</p>

			<p class="f18 c4A494B relative" style="margin:0 20px;display:inline-block;">
				苗圃场联系信息
				<img class="cursor" src="/static/tu-detail/1-98.png" alt="" style="position:absolute;top:3px;right:-25px;">
			</p>
			<p style="margin:20px 0 60px 0;" class="f18 c676868">
				<span style="margin-right:105px;margin:0 20px;">联系人：{{mpcxq.gg_contacts}}</span>
				<span>联系电话：{{mpcxq.gg_contact_number}}</span>
			</p>
			<p class="f18 c4A494B" style="margin:0 20px;">苗圃场详细地址</p>

			<p class="f18 c676868" style="padding:23px 0;margin:0 20px;">{{mpcxq.gg_address.province}}{{mpcxq.gg_address.city}}{{mpcxq.gg_address.detail_address}}<img class="cursor relative" src="/static/tu-detail/1-83.png" style="margin-left:5px;top:-3px;" alt="" ></p>
		</div>

		<!-- 地图 -->
		<div id="allmap" style="height:468px;margin-bottom:25px;margin:0 20px 30px 20px;" class="">

		</div>
		  </div> 
	</div>
</template>
<script>
import share from '../mpc/share.vue'

	export default{
		data(){
			return{
				mpcxq:'' ,//苗圃场的信息
				groundId:''
			}
		},
components:{
"share":share
		},

		methods:{
			
		},
		mounted(){
			var that=this
		// 一进来的时候就要获取id去查看内容
	this.groundId=this.$route.params.groundId
	$.get(Boss+"ground/"+this.groundId,{"sessiontoken":sessiontoken}
  ,function(data){
     console.log(data)
    if(data.status==1){
      that.mpcxq=data.results
      console.log('1.先加载about，然后加载组件share')
      // 百度地图API功能
		var map = new BMap.Map("allmap");

		var point = new BMap.Point(that.mpcxq.gg_address.point.longitude,
			that.mpcxq.gg_address.point.latitude);
		console.log(that.mpcxq.gg_address.point,point)

		map.centerAndZoom(point, 7);

		map.enableScrollWheelZoom(true);

	//创建小狐狸
	var pt = new BMap.Point(that.mpcxq.gg_address.point.longitude,that.mpcxq.gg_address.point.latitude);
	var myIcon = new BMap.Icon("/static/tu-detail/1-82.png", new BMap.Size(29,37));
	var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);              // 将标注添加到地图中

        }
        
      })



		

	
}
}
</script>
<style	scoped>
	p{margin:0;}




</style>