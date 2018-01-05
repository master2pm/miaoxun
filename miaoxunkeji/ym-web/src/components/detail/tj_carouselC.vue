
<template>
	<div>
		
		<!-- 2.清场推荐 -->
		<p class="overflow" style="margin-top:55px;margin-bottom:20px;">	
			<span class="lf f18 c4A494B">清场推荐</span>
			<span class="rf f13 c989698 cursor" style="display:none;">查看全部</span>
		</p>





		<!-- Swiper -->
		<div style="position: relative;">
		<div class="swiper-container ">
			<div class="swiper-wrapper ">
				<div v-if="carousel!='no'" class="swiper-slide" v-for="(item,index) in carousel" >
					<div style="width:309px;height:285px;" class="relative">

					<div style="width:309px;height:174px;margin-bottom:15px;" class="relative overflow cursor">
						<img @click.stop="liclick($event,item)"  :src="item.mu_ground.group.avatar.url+'?imageView2/3/w/309/h/174'" alt="slide" class="jz" style="cursor">
					</div>

						<div class="f18 c4A494B relative">{{item.mu_ground.gg_name.length>10?item.mu_ground.gg_name.substring(0,10):item.mu_ground.gg_name}}
						<span v-if="item.mu_ground.gg_name.length>10">...</span>
						<!-- 团 -->
							<img v-if="item.mu_ground.group.type=='group'" src="/static/tu-detail/1-11.png" class="czjz" style="right:0;">
						<!-- 企 -->
							<img v-if="item.mu_ground.group.type=='company'"  src="/static/tu-detail/1-12.png" class="czjz" style="right:0;">
						<!-- 个 -->
							<img  v-if="item.mu_ground.group.type=='private'" src="/static/tu-detail/1-13.png" class="czjz" style="right:0;">
						</div>
						<div class="f13 c4A494B diandiandian2">{{item.mu_ground.gg_intro}}
						</div>
						<div class="f12 c999899 diandiandian">{{item.mu_ground.gg_address.detail_address}}
						
						</div>
					</div>

				</div>
				

			</div>
			<!-- Add Pagination -->
			
		</div>
		<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev swiper-button-prev2"></div>
			<div class="swiper-button-next swiper-button-next2"></div>
</div>

<!-- 点击的放大图 -->
<fangdatu v-if="fangdatuShow==true"></fangdatu>
	</div>
</template> 


<!--2. 默认导出 -->
<script>
import fangdatu from '../common/fangdatu.vue'
	export default {
		name: 'carouselC',
		data() {
			return {
				fangdatuShow:false,//控制放大图的显示和隐藏
				carousel:'no'//清场推荐的数据

			};
		},
components:{"fangdatu":fangdatu},
		methods:{
	// 点击列表图片的时候放大图显示
	liclick(e,item){
         this.fangdatuShow=true
         
         this.$store.state.fangdatuItem=item
         

	}
		},
		mounted(){
			var that=this
			// 清场推荐
$.get(Boss+"bi/tree",{"from":'sale'},function(data){
 if(data.status==1){
 	console.log(JSON.parse(JSON.stringify(data.results.data)))
  that.carousel=data.results.data
  setTimeout(function(){
  	var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 20,
				freeMode: true,
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next2',
				prevButton: '.swiper-button-prev2',
			});
  },500)
  		
}
})
			// console.log(444)
			// console.log(this.$store.state.Sale)
	
		}
	};

</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
	.swiper-container {
		width: 100%;
		height: 285px;
		
	}
	.swiper-button-prev2{
		background-image: url('/static/tu-detail/1-07.png');
		width:9px;
		height: 19px;
		background-size: cover;
		left: -15px;
		top: 37%;
		opacity: 1;
	}
	.swiper-button-next2{
		background-image: url('/static/tu-detail/1-08.png');
		width:9px;
		height: 19px;
		background-size: cover;
		right: -15px;
		top: 37%;
		opacity: 1;
	}
	.swiper-slide {
		text-align: left;
		background: #fff;
		width:309px !important;height:285px  !important;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
</style>
