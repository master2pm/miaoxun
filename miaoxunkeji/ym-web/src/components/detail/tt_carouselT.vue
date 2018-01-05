
<template>
	<div>
		

		<!--1.网页头条的轮播图  -->
		<div class="wk ">
		<div style="display:none;">
			 {{watch}}
		</div>
			<div class=" bgg" style="background:#dddddd;" :style="{height:h}">
				<div v-if="carousel!='no'" v-cloak id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000">
					<!-- 轮播（Carousel）指标 -->
					<ol class="carousel-indicators" style="margin-bottom:-10px;">
						<li data-target="#myCarousel" :data-slide-to="index" :class="{active:index==0}" v-for="(item,index) in carousel"></li>
					</ol> 
					<!-- 轮播（Carousel）项目 -->
					<div class="carousel-inner">
						<div class="item relative overflow " :class="{active:index==0}" id="getheight" v-for="(item,index) in carousel" :style="{height:h}" style="width:100%;">
							<img @click="news()" :link="item.link" :src="item.cover" alt="slide"  class="jz cursor" style="min-width:100%;" :style="{minHeight:h}">
							<!--min-width:100%;min-height:210px; <div class="carousel-caption">标题是 {{index}}</div> -->
						</div>
					</div>


</div>

</div>
</div>


</div>
</template> 


<!--2. 默认导出 -->
<script>

	export default {
		name: 'carouselTT',
		data() {
			return {
				 h:$(".bgg").width()/2.42+'px',
				carousel:'no'//头条的幻灯片

			};
		},
computed:{
	watch(){
         this.h=this.$store.state.h1
	}
},
		methods:{
news(){
	window.open('http://w-28969-29286-93537.479040224.sites.hk34.qifeiye.com/')
}
		},
		mounted(){
			var that=this
// CMS - 头条的数据
$.get(Boss+"posts",{"sessiontoken":sessiontoken},function(data){
 if(data.status==1){
  that.carousel=data.results.recommend//头条的数组信息
   setTimeout(function(){
  	that.$store.state.h1=$(".bgg").width()/2.42+'px'
  	// that.h=$(".bgg").width()/2+'px'
  },150)
}
})
		}
	};
</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
	.bgg{background: #dddddd;width:100%;}
	.wk{position: relative;top:-5px;}
	#myCarousel > ol > li{width:4.5px;height:4.5px;border:2px solid #FFFFFF;margin:2px;}
	#myCarousel > ol > li.active{width:4.5px;height:4.5px;border:2px solid #FFFFFF;background:#FFFFFF;position: relative;}
</style>
