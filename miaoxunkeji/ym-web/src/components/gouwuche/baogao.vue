<!-- 验苗报告的样式 -->
<template>

	<div v-if="datas.length!=0" id="gouwuche" class=" overflow" style="">
		<headers style="top:0;"></headers>
		<div style="width:992px;margin:0 auto;padding:16px;" class="bai c49494B">
			<p class="f26 relative" style="margin:58px 0 37px 0;">{{where=='shouhuo'?'验收苗木':(where=='list4'?'验收报告':'验苗报告')}}
				<img v-if="where!='shouhuo'&&where=='list1'&&where=='list2'&&where=='list3'&&where=='list4'" src="/static/tu-gouwuche/1-05.png" alt="" class="rf">
			</p>
			<p class="f15" >
				<span>验苗人：{{datas.checker.nickname}}</span>
				<span style="margin-left:50px;">电话：{{datas.checker.mobilePhoneNumber}}</span>
			</p>
			<p class="f15 c999899 border-b" style="padding:14px 0 24px 0;">
				<span>验苗时间 {{datas.checkAt.replace('-','年').replace('-','月').substring(0,10)}}
				<span v-show="datas.checkAt!=''">日</span></span>
				<span style="margin-left:50px;">有效期至 {{datas.checkDeadlineAt.replace('-','年').replace('-','月').substring(0,10)}}
				<span v-show="datas.checkDeadlineAt!=''">日</span></span>
			</p>


			<p class="f26 " style="padding:24px 0 15px 0;">
				<span>{{datas.tree.mu_name}}</span>
				<span class="type f15" style="width:19px;height:19px;line-height:19px;">{{datas.tree.mu_type!=undefined?datas.tree.mu_type.substring(0,1):''}}</span>
			</p>

			<p class="f16 c676868" v-if="datas.tree.mu_type!='草坪'">
				<!-- 假 地  盆 -->
						<span v-if="datas.tree.mu_type!='袋苗'&&(datas.tree.mu_mj_min!=''||datas.tree.mu_mj_max!='')" class="f12 c4A494B">
							<span v-show="datas.tree.mu_mj_min!=''||datas.tree.mu_mj_max!=''">
								米径{{datas.tree.mu_mj_min}}
								<span v-show="datas.tree.mu_mj_min!=''&&datas.tree.mu_mj_max!=''&&datas.tree.mu_mj_min!=datas.tree.mu_mj_max">- {{datas.tree.mu_mj_max}}</span>
								cm
							</span>

                              · 
							<span v-show="datas.tree.mu_zg_min!=''||datas.tree.mu_zg_max!=''">
								自然高{{datas.tree.mu_zg_min}}
                                <span v-show="datas.tree.mu_zg_min!=''&&datas.tree.mu_zg_max!=''&&datas.tree.mu_zg_min!=datas.tree.mu_zg_max">- {{datas.tree.mu_zg_max}}</span>
								cm
							</span>
							

							</span>

							<span  v-if="datas.tree.mu_type!='袋苗'&&(datas.tree.mu_dj_min!=''||datas.tree.mu_dj_max!='')"  class="f12 c4A494B">
							<span v-show="datas.tree.mu_dj_min!=''||datas.tree.mu_dj_max!=''">
								地径{{datas.tree.mu_dj_min}}
								<span v-show="datas.tree.mu_dj_min!=''&&datas.tree.mu_dj_max!=''&&datas.tree.mu_dj_min!=datas.tree.mu_dj_max">- {{datas.tree.mu_dj_max}}</span>
								cm
							</span>
                               · 
							<span v-show="datas.tree.mu_zg_min!=''||datas.tree.mu_zg_max!=''">
								自然高{{datas.tree.mu_zg_min}}
                                <span v-show="datas.tree.mu_zg_min!=''&&datas.tree.mu_zg_max!=''&&datas.tree.mu_zg_min!=datas.tree.mu_zg_max">- {{datas.tree.mu_zg_max}}</span>
								cm
							</span>

							</span>

							<span v-if="datas.tree.mu_type!='袋苗'" class="f12 c4A494B">
							<!-- 肉高 -->
							<span v-show="datas.tree.mu_rg_min!=''||datas.tree.mu_rg_max!=''">
								 · 肉高{{datas.tree.mu_rg_min}}
								<!-- 横 -->
								<span v-show="datas.tree.mu_rg_min!=''&&datas.tree.mu_rg_max!=''&&datas.tree.mu_rg_min!=datas.tree.mu_rg_max">- {{datas.tree.mu_rg_max}}</span>
								cm
							</span>
							<!-- 点 -->
							<span  v-show="(datas.tree.mu_rg_min!=''||datas.tree.mu_rg_max!='')&&(datas.tree.mu_zfjg_min!=''||datas.tree.mu_zfjg_max!='')"> · </span>
                            
                            <!-- 主分枝高 -->
							<span v-show="datas.tree.mu_zfjg_min!=''||datas.tree.mu_zfjg_max!=''">
								 主分枝高{{datas.tree.mu_zfjg_min}}
								 <!-- 横 -->
                                <span v-show="datas.tree.mu_zfjg_min!=''&&datas.tree.mu_zfjg_max!=''&&datas.tree.mu_zfjg_min!=datas.tree.mu_zfjg_max">- {{datas.tree.mu_zfjg_max}}</span>
								cm
							</span>
							</span>
							

							<!-- 袋 -->

							<span v-if="datas.tree.mu_type=='袋苗'&&(datas.tree.mu_zg_min!=''||datas.tree.mu_zg_max!='')" class="f12 c4A494B">
							{{datas.tree.mu_package_weight}}斤袋 · 
							自然高{{datas.tree.mu_zg_min}}
							<!-- 横 -->
							<span  v-show="(datas.tree.mu_zg_min!=''&&datas.tree.mu_zg_max!=''&&datas.tree.mu_zg_min!=datas.tree.mu_zg_max)&&datas.tree.mu_type=='袋苗'">- {{datas.tree.mu_zg_max}}</span>
							cm
							</span>

							<!-- 公用 冠幅 -->
							<div class="f12 c4A494B">
							<span v-show="(datas.tree.mu_gf_min!=''||datas.tree.mu_gf_max!='')">冠幅{{datas.tree.mu_gf_min}}
							<span  v-show="(datas.tree.mu_gf_min!=''&&datas.tree.mu_gf_max!=''&&datas.tree.mu_gf_min!=datas.tree.mu_gf_max)">- {{datas.tree.mu_gf_max}}</span>
							</span>
							cm
							</div>

			</p>

<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div v-if="datas.tree.mu_type=='草坪'"  class="">
        <p class="f12 c4A494B" style="margin-bottom:0;">
              <span v-show="datas.tree.lawn_length!=''&&datas.tree.lawn_length!=undefined">长{{datas.tree.lawn_length}}</span>
              <span v-show="datas.tree.lawn_width!=''&&datas.tree.lawn_width!=undefined"><span v-show="datas.tree.lawn_length!=''&&datas.tree.lawn_length!=undefined"> · </span>宽{{datas.tree.lawn_width}}</span>
              <span v-show="datas.tree.lawn_density!=''&&datas.tree.lawn_density!=undefined"><span v-show="(datas.tree.lawn_length!=''&&datas.tree.lawn_length!=undefined)||(datas.tree.lawn_width!=''&&datas.tree.lawn_width!=undefined)"> · </span>密度{{datas.tree.lawn_density}}%</span>
              <span v-show="datas.tree.lawn_amount==''||datas.tree.lawn_amount==undefined">（单位：cm）</span>
      </p>
         <p class="f12 c4A494B">
              <span v-show="datas.tree.lawn_amount!=''&&datas.tree.lawn_amount!=undefined">每捆数量{{datas.tree.lawn_amount}}片<span>（单位：cm）</span></span>
      </p>

  </div>
			
			<!-- 公用 冠幅 -->
			<!-- <p class="f16 c676868" >冠幅{{datas.tree.mu_gf_min}}-{{datas.tree.mu_gf_max}}cm</p> -->

			<p class="f18 c60B346 relative" style="margin:14px 0 10px 0;">
				<span class="c60B346">{{datas.current_price=='-1'?'面议':(datas.tree.mu_type=='草坪'?'￥'+datas.current_price+'/㎡':'￥'+datas.current_price+'/株')}}</span>
				<span v-show="datas.original_price!=datas.current_price" class="f13 c999899" style="margin-left:50px;text-decoration:line-through;">{{datas.original_price=='-1'?'面议':(datas.tree.mu_type=='草坪'?'￥'+datas.original_price+'/㎡':'￥'+datas.original_price+'/株')}}</span>
				<span v-if="where!='shouhuo'&&where!='list1'&&where!='list2'&&where!='list3'&&where!='list4'&&where!='list5'" class="c676868 f16 czjz" style="right:0;">验苗数量：<span class=" c60B346">{{datas.amount}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span></span>
			</p>

			<p class="f15 c999899" style="">{{datas.tree.mu_province}}·{{datas.tree.mu_city}}·{{datas.tree.mu_ground.gg_name}}</p>




<!-- 这个是编号上面的那栏信息 -->

			<!--1.验苗模块验苗报告 where==begin look 进来的时候才有这个
                2.运输和收货模块验苗报告 where==looks 进来的时候没有这个
			 -->
			<p v-show="where=='begin'||where=='look'" class="f16 c676868 relative" style="margin-top:10px;">
				<span>已查验 </span>
				<span class="c60B346 border-r" style="padding-right:10px;margin-right:5px;">{{datas.checked_pass_count==''?0:datas.checked_pass_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span class="c999899">待查验  </span>
				<span class="c60B346 border-r" style="padding-right:10px;margin-right:5px;">{{datas.waitfor_process_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span class="c999899">待更换   </span>
				<span class="cBF4040 " style="padding-right:10px;margin-right:5px;">{{datas.waitfor_exchange_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
			</p>

			
            <!--3.验收报告 where==shouhuo 进来的时候才有这个
			 -->
			<p v-show="where=='shouhuo'||where=='list4'" class="f16 c676868 relative" style="margin-top:10px;">
				<span>苗木总数 </span>
				<span class="c676868 border-r" style="padding-right:10px;margin-right:5px;">{{datas.amount}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span class="c999899">已验收  </span>
				<span class="c60B346 border-r" style="padding-right:10px;margin-right:5px;">{{datas.accept_count }}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span class="c999899">待验收  </span>
				<span class="c676868 border-r" style="padding-right:10px;margin-right:5px;">{{datas.wait_for_accept_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span class="c999899">已收货  </span>
				<span class="c676868 border-r" style="padding-right:10px;margin-right:5px;">{{datas.confirm_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span class="c999899">验收暂缓   </span>
				<span class="cBF4040 " style="padding-right:10px;margin-right:5px;">{{datas.holdon_accept_count }}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
			</p>

			 <!--4.卖家订单的验苗报告 where==list1，2,3,5 进来的时候才有这个
			 -->
			<p v-show="where=='list1'||where=='list2'||where=='list3'||where=='list5'" class="f16 c676868 relative" style="margin-top:10px;">
				<span>验苗数量 ·</span>
				<span class="c60B346 border-r" style="padding-right:10px;margin-right:5px;">{{datas.amount}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span >已查验 ·  </span>
				<span class="c676868 border-r" style="padding-right:10px;margin-right:5px;">{{datas.checked_pass_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span>待查验 · </span>
				<span class="c60B346 border-r" style="padding-right:10px;margin-right:5px;">{{datas.waitfor_process_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
				<span>待更换 ·</span>
				<span class="c676868 border-r" style="padding-right:10px;margin-right:5px;">{{datas.waitfor_exchange_count}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span>
			</p>

<!-- wait_for_accept_count = 待验收 
accept_count 已验收
confirm_count 已收货
holdon_accept_count 暂缓 -->


			<!-- 标题 -->
			<ul	style="margin-top:26px;">
				<li style="height:60px;line-height:60px;" class="f18 border-t border-b">
					<span class="" style="width:160px;padding-left:30px;display:inline-block;">编号</span>
					<span class="" style="width:200px;padding-left:30px;display:inline-block;">验苗图片</span>
					<span class="" style="width:160px;padding-left:30px;display:inline-block;">{{where=='shouhuo'||where=='list4'?'运单号':'核对码'}}</span>
					<span class="" style="display:inline-block;padding-left:280px;">{{where=='shouhuo'||where=='list4'?'验收状态':''}}</span>
				</li>


				<li v-for="(item,index) in datas.items" style="height:221px;padding:15px 0;" class=" f18 border-b relative">
					<span class="czjz" style="width:160px;left:30px;display:inline-block;">{{item.index}}</span>



					<!-- 轮播 -->
					<div class=" czjz" style="padding-left:30px;width:200px;left:190px;height:222px;display:inline-block;height:222px;" >

						<div  class="thumbnail" style="width:125px;height:222px;padding:0;border:none;">
							<div :id="'myCarousels'+index"   class="carousel  slide " data-interval="false">

								<!-- 轮播（Carousel）项目 -->
								<div class="carousel-inner" style="width:125px;height:222px;"  >
									<div class="item" :class="{active:idxs==0}"  v-for="(srcs,idxs) in item.pics" style="width:125px;height:222px">
										<img @click="zhongji_open($event,idxs,item.pics,item.remark)"  :src="srcs!=''?srcs+'?imageView2/3/w/125/h/222':'/static/tu-gouwuche/1-36.png'" alt="slide" style="" class="jz cursor">		
										<!-- <img v-show="item.remark.length!=0"  src="/static/tu-gouwuche/2-08.png"  alt="" class="absolute" style="left:0;bottom:0;width:125px;">	 -->
										<img v-show="item.remark.length!=0" @click="zhongji_open($event,idxs,item.pics,item.remark)" src="/static/tu-gouwuche/2-09.png"  alt="" class="absolute cursor" style="left:0;bottom:0;width:125px;">		
									</div>
									

								</div>
								<!-- 轮播（Carousel）导航 -->
								<a class="carousel-control  center2   left carouselPrev" style="background-image:none;"  data-slide="prev"  
								href="javascript:void(0)" @click.prevent='toPrev(index)'>
								<img src="/static/tu-gouwuche/1-99.png"   class="czjz cursor" style="left:-20px;">
							</a>
							<a class="carousel-control  center2  right carouselNext" style="background-image:none;" data-slide="next"
							href="javascript:void(0)" @click.prevent='toNext(index)'>
							<img src="/static/tu-gouwuche/1-100.png"   class="czjz cursor" style="right:-20px;">
						</a>

					</div>
				</div>
			</div>					
			<!-- 轮播 -->



			<!-- 0是显示更换苗木和查验合格按钮      1是已查验      -1是更换中 -->

			<span class="czjz" style="left:461px;display:inline-block;">
			<span v-show="item.verify_order_sn!=undefined&&item.verify_order_sn!=''">{{item.verify_order_sn}}</span>
			
			<span v-show="item.verify_code!=undefined&&item.verify_code!=''"><span v-show="item.verify_order_sn!=undefined&&item.verify_order_sn!=''">核对码</span>{{item.verify_code}}</span>
			</span>

<!-- 1.验苗模块查看验苗报告的验状态  更换中分begin  和 look  -->
			<div	v-show="where=='look'||where=='begin'">
				<!-- 更换苗木按钮=====验苗环节的 -->
			<img  v-show="item.verify_status==0||item.verify_status==1" @click="isgengs($event,item.objectId)"  src="/static/tu-gouwuche/1-10.png" alt="" style="top:84px;right:20px;" class="absolute cursor">
			<!-- look更换中按钮  begin待更换按钮 -->
			<img v-show="item.verify_status==-1"  :src="where=='look'?'/static/tu-gouwuche/1-11.png':'/static/tu-gouwuche/1-14.png'" alt="" style="display:none;right:20px;" class="czjz">
			<!-- 查验合格按钮 点击变已查验按钮-->
			<img v-show="item.verify_status==0||item.verify_status==1"  @click="isheges($event,item.objectId)" :src="item.verify_status==0?'/static/tu-gouwuche/1-13.png':'/static/tu-gouwuche/1-12.png'" alt="" style="bottom:90px;right:20px;" class="absolute cursor">
			</div>

<!-- 2.运输和收货的查看验苗报告的验状态  一样是已查验 -->
			<div	v-show="where=='looks'">
				<!-- 已查验 =====运输和收货环节的-->
			<img   src="/static/tu-gouwuche/1-65.png" alt="" style="top:84px;right:20px;" class="absolute cursor">
			</div>
<!-- 3.运输和收货的验收报告   where=shouhuo  -->
			<div	v-show="where=='shouhuo'||where=='list4'">
				<!-- a待验收-->
			<img  v-if="item.acceptance_status==0"  src="/static/tu-gouwuche/1-66.png" alt="" style="top:84px;right:20px;" class="absolute cursor">
				<!-- b验收暂缓-->
			<img   v-if="item.acceptance_status==-1"   src="/static/tu-gouwuche/1-67.png" alt="" style="top:84px;right:20px;" class="absolute cursor">
			    <!-- c已查验-->
			<img  v-if="item.acceptance_status==1&&where=='shouhuo'"    src="/static/tu-gouwuche/1-68.png" alt="" style="top:84px;right:20px;" class="absolute cursor">
			    <!-- c2已验收-->
			<img  v-if="item.acceptance_status==1&&where=='list4'"    src="/static/tu-gouwuche/1-68(1).png" alt="" style="top:84px;right:20px;" class="absolute cursor">
			    <!-- d已收货-->
			<img  v-if="item.acceptance_status==2"    src="/static/tu-gouwuche/1-69.png" alt="" style="top:84px;right:20px;" class="absolute cursor">
			</div>			
<!-- 4.卖家订单list1,2,3,5的验收报告都是文字  4是图标-->
			<div	v-show="where=='list1'||where=='list2'||where=='list3'||where=='list5'">
				<!-- a更换中橙 top:84;right:20px;-->
				<span  v-if="item.verify_status==-1"  style="top:110px;right:90px;" class="cC96832 absolute cursor">更换中</span>
				<!-- b待查验灰-->
			    <span v-if="item.verify_status==0"  style="top:110px;right:90px;" class="c999899 absolute cursor">待查验</span>
			    <!-- c已查验绿-->
			    <span  v-if="item.verify_status==1" style="top:110px;right:90px;" class="c60B346 absolute cursor">已查验</span>
			 
			</div>	
		</li>
	</ul>
</div>

	    <!-- 终极放大图-->
<zhongji v-if="bigbig==true" ></zhongji>

<!-- 
1.look验苗的查看验苗报告  更换不同（更换中  更换苗木  查验合格）
2.begin验苗的开始验苗   更换不同
3.looks-运输和收货的查看验苗报告   已查验
4.shouhuo-收货的验收报告    -1=验收暂缓，0=待验收，1=已验收，2=已收货
5.list1-卖家订单的承接交易与拟定交易方式1  橙色更换中  灰色待查验  绿色已查验   
 -->

</div>
</template>
<script>
	import headers from '../common/headers.vue'
	import zhongji from '../common/zhongji.vue'

	export default{
		data(){
			return{
				height:innerHeight-60+'px',
				where:'begin',//是从哪里进来的，begin是开始验苗  look是查看验苗报告
				datas:[],
				bigbig:false
			
				
			}
		},
		components:{
			'headers':headers,
			'zhongji':zhongji
		},

		methods:{

zhongji_open(e,number,pics,remark){
  var that=this
  console.log(pics)
   console.log(remark)
  this.$store.state.finalArrs=pics
  this.$store.state.remark=remark
  that.bigbig=true
  setTimeout(function(){
  
   $('#myCarousels').carousel(number)
  },100)
  
 
  },
 


      	  // 更新总内容
      	  updata(){
      	  	var that=this
      	  	this.where=this.$route.params.where
      	  	if(this.where=='shouhuo'||this.where=='list4'){
      	  		// 验收报告
                 $.get(Boss+'tradeConfirmReport',{"sessiontoken":sessiontoken,
                 	'shipment_id':this.$route.params.shipment_id,'carriage_id':this.$route.params.carriage_id},function(data){
          	JSONS(data,'验收报告')
          	that.datas=data.results
          })
      	  	}else{
      	  		          // 取得验苗木报告 599f839b128fe1005b7ef724
          $.get(Boss+'report/'+this.$route.params.objectId,{"sessiontoken":sessiontoken},function(data){
          	JSONS(data,'验苗报告')
          	that.datas=data.results
          })
      	  	}

      },
      // 防止点击轮播的时候被识别成路由
      toNext(e){
      	$("#myCarousels"+e).carousel('next');
      },
      // 防止点击轮播的时候被识别成路由
      toPrev(e){
      	$("#myCarousels"+e).carousel('prev');
      },
		  // 更换苗木按钮 点击变更换中
		  isgengs(e,objectId){
		  	var that=this
		  	this.up(e,objectId,-1)
		  },
			// 查验合格按钮 点击变已查验按钮
			isheges(e,objectId){
				if($(e.currentTarget).attr('src')=='/static/tu-gouwuche/1-13.png'){
					this.up(e,objectId,1)
				}
			},
			// 验苗操作 给需要更换苗木的报告修改内容
			up(e,objectId,flag){
				var that=this
				$.post(Boss+'reportItem/dispose',{'reportId':objectId,'flag':flag,"sessiontoken":sessiontoken},function(data){
					console.log(data)
					that.updata()
				})

			}
		},
		mounted(){
			this.updata()
		}
	}
</script>
<style	scoped>
	p{margin:0;}

</style>