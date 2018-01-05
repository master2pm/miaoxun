
<template>
	<div>
		
		<!-- 3.苗源精选 -->
		<p class="overflow" style="margin-top:55px;margin-bottom:20px;">	
			<span class="lf f18 c4A494B">苗源精选</span>
			
			<span @click="goall" class="rf f13 c989698 cursor">查看全部</span>
           
		</p>





		<!-- Swiper -->
		<div style="position: relative;">
		<div class="swiper-container1">
			<div class="swiper-wrapper ">
				<div v-if="carousel!='no'" class="swiper-slide" v-for="(item,index) in carousel" >
					<div >
					
<!-- 231 411 -->
					<div style="width:230px;height:345px;margin-bottom:15px;" class="relative overflow">
						<img @click.stop="liclick($event,item,index)" :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/230/h/345':'/static/tu-detail/1-102.png'" alt="slide" class="jz cursor">
                    </div >


						<div class="f18 c4A494B relative">{{item.mu_name.length>8?item.mu_name.substring(0,8):item.mu_name}}
						<span v-if="item.mu_name.length>8">...</span>
						       <span class=" f12 type">{{item.mu_type!=undefined?item.mu_type.substring(0,1):''}}</span>
                               <!-- 团队标准 group-->
							<img v-if="item.mu_ground.group.type=='group'" src="/static/tu-detail/1-11.png" class="czjz" style="right:0;">
							<!-- 个人标准 private-->
							<img  v-if="item.mu_ground.group.type=='private'" src="/static/tu-detail/1-13.png" class="czjz" style="right:0;">
							<!-- 企业标准 company-->
							<img  v-if="item.mu_ground.group.type=='company'" src="/static/tu-detail/1-12.png" class="czjz" style="right:0;">
						</div>
		
<div v-if="item.mu_type!='草坪'" 	style='height:55px;' class="">
	

						<!-- 假 地  盆 -->
						<div v-if="item.mu_type!='袋苗'&&(item.mu_mj_min!=''||item.mu_mj_max!='')" class="f12 c4A494B">
							<span v-show="item.mu_mj_min!=''||item.mu_mj_max!=''">
								米径{{item.mu_mj_min}}
								<span v-show="item.mu_mj_min!=''&&item.mu_mj_max!=''&&item.mu_mj_min!=item.mu_mj_max">- {{item.mu_mj_max}}</span>
							</span>

                              · 
							<span v-show="item.mu_zg_min!=''||item.mu_zg_max!=''">
								自然高{{item.mu_zg_min}}
                                <span v-show="item.mu_zg_min!=''&&item.mu_zg_max!=''&&item.mu_zg_min!=item.mu_zg_max">- {{item.mu_zg_max}}</span>
								
							</span>
							

							</div>

							<div  v-if="item.mu_type!='袋苗'&&(item.mu_dj_min!=''||item.mu_dj_max!='')"  class="f12 c4A494B">
							<span v-show="item.mu_dj_min!=''||item.mu_dj_max!=''">
								地径{{item.mu_dj_min}}
								<span v-show="item.mu_dj_min!=''&&item.mu_dj_max!=''&&item.mu_dj_min!=item.mu_dj_max">- {{item.mu_dj_max}}</span>
							</span>
                               · 
							<span v-show="item.mu_zg_min!=''||item.mu_zg_max!=''">
								自然高{{item.mu_zg_min}}
                                <span v-show="item.mu_zg_min!=''&&item.mu_zg_max!=''&&item.mu_zg_min!=item.mu_zg_max">- {{item.mu_zg_max}}</span>
								
							</span>

							</div>

							<div v-if="item.mu_type!='袋苗'" class="f12 c4A494B">
							<!-- 肉高 -->
							<span v-show="item.mu_rg_min!=''||item.mu_rg_max!=''">
								肉高{{item.mu_rg_min}}
								<!-- 横 -->
								<span v-show="item.mu_rg_min!=''&&item.mu_rg_max!=''&&item.mu_rg_min!=item.mu_rg_max">- {{item.mu_rg_max}}</span>
							</span>
							<!-- 点 -->
							<span  v-show="(item.mu_rg_min!=''||item.mu_rg_max!='')&&(item.mu_zfjg_min!=''||item.mu_zfjg_max!='')"> · </span>
                            
                            <!-- 主分枝高 -->
							<span v-show="item.mu_zfjg_min!=''||item.mu_zfjg_max!=''">
								 主分枝高{{item.mu_zfjg_min}}
								 <!-- 横 -->
                                <span v-show="item.mu_zfjg_min!=''&&item.mu_zfjg_max!=''&&item.mu_zfjg_min!=item.mu_zfjg_max">- {{item.mu_zfjg_max}}</span>
								
							</span>
							</div>
							

							<!-- 袋 -->

							<div v-if="item.mu_type=='袋苗'&&(item.mu_zg_min!=''||item.mu_zg_max!='')" class="f12 c4A494B">
							{{item.mu_package_weight}}斤袋 · 
							自然高{{item.mu_zg_min}}
							<!-- 横 -->
							<span  v-show="(item.mu_zg_min!=''&&item.mu_zg_max!=''&&item.mu_zg_min!=item.mu_zg_max)&&item.mu_type=='袋苗'">- {{item.mu_zg_max}}</span>
							
							</div>

							<!-- 公用 冠幅 -->
							<div class="f12 c4A494B">
							<span v-show="(item.mu_gf_min!=''||item.mu_gf_max!='')">冠幅{{item.mu_gf_min}}
							<span  v-show="(item.mu_gf_min!=''&&item.mu_gf_max!=''&&item.mu_gf_min!=item.mu_gf_max)">- {{item.mu_gf_max}}</span>
							</span>
							（单位：cm）
							</div>
</div>


<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div v-if="item.mu_type=='草坪'" style='height:55px;' class="">
        <p class="f12 c4A494B" style="margin-bottom:0;">
              <span v-show="item.lawn_length!=''&&item.lawn_length!=undefined">长{{item.lawn_length}}</span>
              <span v-show="item.lawn_width!=''&&item.lawn_width!=undefined"><span v-show="item.lawn_length!=''&&item.lawn_length!=undefined"> · </span>宽{{item.lawn_width}}</span>
              <span v-show="item.lawn_density!=''&&item.lawn_density!=undefined"><span v-show="(item.lawn_length!=''&&item.lawn_length!=undefined)||(item.lawn_width!=''&&item.lawn_width!=undefined)"> · </span>密度{{item.lawn_density}}%</span>
              <span v-show="item.lawn_amount==''||item.lawn_amount==undefined">（单位：cm）</span>
      </p>
         <p class="f12 c4A494B">
              <span v-show="item.lawn_amount!=''&&item.lawn_amount!=undefined">每捆数量{{item.lawn_amount}}片<span>（单位：cm）</span></span>
      </p>

  </div>

						<div class="f16 c60B346 relative" style="margin:10px 0 3px 0;">{{item.mu_price=='-1'?'面议':(item.mu_type=='草坪'?('￥'+item.mu_price+'/㎡'):('￥'+item.mu_price+'/株'))}}<span class="czjz f12 c676868" style="right:0;">库存{{item.mu_stock}}{{item.mu_type=='草坪'?'㎡':'株'}}</span></div>
						<div class="f12 c989698 relative">{{item.mu_ground.gg_name.length>10?item.mu_ground.gg_name.substring(0,10):item.mu_ground.gg_name}}<span v-if="item.mu_ground.gg_name.length>10">...</span><span class="czjz " style="right:0;">{{item.mu_province}}·{{item.mu_city}}</span></div>
						<div style="margin-top:15px;">
								<span @click="clicks($event,1,item.objectId,'当前登录人所属的组的id',1,index)" @mouseenter="mouseenters($event)" @mouseleave="mouseleaves($event)" class="lf f12 c989698 center border cursor" style="height:35px;line-height:35px;width:144px;">加入购物车</span>
								<span  @click="clicks($event,2,item.objectId,'tree',0,index)" @mouseenter="mouseenters($event)" @mouseleave="mouseleaves($event)"  :class="{c60B346:item.isfavor==1}" class="border lf f12 c989698 center cursor" style="height:35px;line-height:35px;width:83px;border-left:none;">{{item.isfavor==0?'收藏':'已收藏'}}</span>
						</div>
					</div>

				</div>
				

			</div>
			<!-- Add Pagination -->
			<!-- <div class="swiper-pagination"></div> -->
		
		</div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev1 swiper-button-prev"></div>
			<div class="swiper-button-next1 swiper-button-next"></div>
</div>
<!-- 点击的放大图 -->
<fangdatu v-if="fangdatuShow==true"></fangdatu>

	</div>
</template> 


<!--2. 默认导出 -->
<script>
import fangdatu from '../common/fangdatu.vue'
	export default {
		name: 'carouselB',
		data() {
			return {
				fangdatuShow:false,//控制放大图的显示和隐藏
				carousel:'no'//清场推荐的数据

			};
		},
components:{"fangdatu":fangdatu},
		methods:{
	// 跳到苗源
	goall(){
        this.$router.push({name:'all',params:{"indexs":1}})

	},
	// 点击列表图片的时候放大图显示
	liclick(e,item,index){
         this.fangdatuShow=true
         this.$store.state.fangdatuIndex=index
         this.$store.state.fangdatuItem=item
         

	},
				// 加入购物车和收藏
			clicks(e,n,objectId,type,amount,index){
				if(n==1){
					common_adds(e,n,objectId,type,amount)
					//this.$store.commit("searchAdd")
				//this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId})
				}else if(n==2){
					common_adds(e,n,objectId,type,amount)
					 // 让对应的收藏变成已收藏或者未收藏
					 if(sessiontoken==null){
					 	return
					 }
                    if(this.carousel[index].isfavor==1){
                    	this.carousel[index].isfavor=0
                    }else if(this.carousel[index].isfavor==0){
                    	 this.carousel[index].isfavor=1
                    }
				//this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId,'type':type})
				}
          

			},
		mouseenters(e){
        	$(e.currentTarget).addClass("F1F1F1bg")
        },	
        mouseleaves(e){
        	$(e.currentTarget).removeClass("F1F1F1bg")
        }
		},
		mounted(){
			var that=this
			// 苗讯精选
$.get(Boss+"bi/tree",{"from":'selection'},function(data){
 if(data.status==1){
 	console.log(JSON.parse(JSON.stringify(data.results.data)))
  that.carousel=data.results.data
  JSONS(that.carousel,'CAROUSEL')
    setTimeout(function(){
  	var swiper = new Swiper('.swiper-container1', {
				pagination: '.swiper-pagination',
				//slidesPerView: 4,
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 15,
				freeMode: true,
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next1',
				prevButton: '.swiper-button-prev1'

			});
  	  },500)
}
})
		
		}
	};

</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
	.swiper-container1 {
		width: 100%;
		height: 545px;/*610*/
		position: relative;
		overflow: hidden;
	}
	.swiper-button-prev1{
		background-image: url('/static/tu-detail/1-07.png');
		width:9px;
		height: 19px;
		background-size: cover;
		left: -15px;
		top: 37%;
		opacity: 1;
	}
	.swiper-button-next1{
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
        width:231px !important;height:545px  !important;/*610*/
        /*margin-right: 20px !important;*/
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
