
<template>

	<div >


		<!--1.网页头条顶部的轮播图  -->
		<carouselTT></carouselTT>

		<ul	v-cloak class="">
			<li v-if="datas!='no'" :link="item.link" class="border-b" v-for="(item,index) in datas">	
				<span class="f16 cBF4040">技术创新</span>	
				<img src="/static/tu-detail/1.png" alt="" style="margin:0 10px;">
				<span class="f16 c4A494B">{{item.title}}</span>	
				<div style="margin-top:20px;" class="relative overflow">
				<div  style="width:167px;height:103px;" class="overflow relative lf">
					<img :src="item.cover!=''?(item.cover):'/static/tu-detail/1-90.png'" alt="" class="jz" style="max-width:167px;max-height:103px;">
				</div>
				<!-- +'?imageView2/1/w/167/h/103' -->
					
					
							<p class=" f13 c676868 pp diandiandians rf" style="margin-top:5px;width:calc(100% - 187px);">{{item.contentSnippet}}
							</p>
				           <span class="f12 c999899 date" >{{item.pubDate}}</span>	
				</div>		
			</li>	
			
		</ul>	



	</div>

</template> 


<!--2. 默认导出 -->
<script>
	import carouselTT from './tt_carouselT.vue'

	export default {
		data() {
			return {
				datas:'no'//头条的数组信息

			};
		},
		components:{"carouselTT":carouselTT

	},
	methods:{

	},
	mounted(){
       			var that=this
// CMS - 头条的数据
$.get(Boss+"posts",{"sessiontoken":sessiontoken},function(data){
 if(data.status==1){
  that.datas=data.results.recommend//头条的数组信息
}
})
	}
};
</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
	ul{margin:15px 0;padding-left:20px;padding-right:10px;}
	li{padding:20px 0px 20px 0px;}
	.date{position: absolute;left:200px;bottom: 0;}
</style>
