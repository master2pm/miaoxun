
<template>
	<div>
		

		<!--1.网页首页的轮播图  -->
		<div class="wk">
		<div style="display:none;">
			 {{watch}}
		</div>
			<div class="bgg relative " :style="{height:h}">
				<div v-if="carousel!='no'" id="myCarousel" class=" czjz carousel slide" data-ride="carousel" data-interval="3000" >
					<!-- 轮播（Carousel）指标 -->
					<ol class="carousel-indicators">
						<li data-target="#myCarousel" :data-slide-to="index" :class="{active:index==0}" v-for="(item,index) in carousel"></li>
					</ol> 
					<!-- 轮播（Carousel）项目 -->
					<div class="carousel-inner  ">
						<div class="item overflow " :class="{active:index==0}" id="getheight" v-for="(item,index) in carousel" style="width:100%;background:#dddddd;" :style="{height:h}">
							<img :link="item.link" :src="item.cover" alt="slide" style="min-width:100%;" :style="{minHeight:h}" class="jz cursor">
							<!-- <div class="carousel-caption">标题 {{index}}</div> -->
						</div>
					</div>

					<!-- 轮播（Carousel）导航 -->
     <!--  <a class="carousel-control left tingzhi" href="#myCarousel"
      data-slide="prev" id="lbp">
      <img src="../assets/zuo.png" width="38" height="71" id="home_img1" class="czjz" style="left:30px;">
    </a>
    <a class="carousel-control right tingzhi" href="#myCarousel"
    data-slide="next" id="lbn">
    <img src="../assets/you.png" width="38" height="71" id="home_img2" class="czjz" style="right:30px;">
</a> -->

</div>

</div>
</div>


</div>
</template> 


<!--2. 默认导出 -->
<script>

	export default {
		name: 'carouselT',
		data() {
			return {
                h:$(".bgg").width()/2.016+'px',
				carousel:'no'//首页幻灯

			};
		},
computed:{
	watch(){
         this.h=this.$store.state.h
	}
},
		methods:{

		},
		mounted(){
// 推荐上面的幻灯片-首页幻灯
var that=this
$.get(Boss+"slider",function(data){
 if(data.status==1){
  that.carousel=data.results
  setTimeout(function(){
  	that.$store.state.h=$(".bgg").width()/2+'px'
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
		#myCarousel > ol > li{width:8.5px;height:8.5px;border:2px solid #FFFFFF;margin:2px;}
	#myCarousel > ol > li.active{width:8.5px;height:8.5px;border:2px solid #FFFFFF;background:#FFFFFF;position: relative;}
</style>
