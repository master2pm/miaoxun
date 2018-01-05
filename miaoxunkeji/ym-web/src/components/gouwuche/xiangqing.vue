<!-- 验苗报告的样式 -->
<template>

	<div  class=" overflow" style="">
		<headers style="top:0;" v-show="this.$route.name=='xiangqing'"></headers>
		<div v-if="datas!='no'"	:style="{width:w}" style="margin:0 auto;padding:40px 40px 20px 40px;" class="bai c49494B">
			<p class="f26 relative" style="margin:15px 0 37px 0;width:320px;">
			<router-link :to="{name:'qymessage',params:{who:datas.group.type,objectId:datas.group.objectId,has:'no'}}"  target="_blank" style="color:#49494B;">
			<span >{{datas.group.name}}
			</span>
			</router-link>

				<!-- <img src="/static/tu-gouwuche/1-30.png" alt="" class="absolute" style="top:3px;right:-80px;"> -->
				<!-- 个人 -->
				<img :style="{right:right}" v-show="datas.group.type=='private'" src="/static/tu-gouwuche/2-07.png" alt="" class="absolute" style="top:3px;">
				<!-- 企业 -->
				<img :style="{right:right}" v-show="datas.group.type=='company'" src="/static/tu-gouwuche/2-05.png" alt="" class="absolute" style="top:3px;">
				<!-- 团队 -->
				<img :style="{right:right}" v-show="datas.group.type=='group'" src="/static/tu-gouwuche/2-06.png" alt="" class="absolute" style="top:3px;">


			</p>
			<p class="f18 border-t c676868" style="padding-top:28px;">
				<span  v-show="!(list==1&&datas.supply_status!=210)" class="c999899">验苗方式 · </span>
				<span :class="{flyTop:list==1&&datas.supply_status!=210}" >{{datas.check_type_collect==undefined?(datas.check_type==0?'不需要验苗':(datas.check_type==1?'由买家亲自验苗':'由苗讯提供验苗服务')):datas.check_type_collect.join(',')}}</span>
<!-- 验苗方式 0=不需要验苗，1=由买家亲自验苗，2=由苗讯提供验苗服务 -->
			</p>
			<p v-show="!(list==1&&datas.supply_status!=210)" class="f18 c676868 " :class="{borderB:list!=5&&list!=2&&list!=1&&datas.ship_type_collect[0]!='买家自提苗木',ownb:(name=='xiangqing'&&datas.ship_type_collect[0]=='买家自提苗木')}" style="padding:14px 0 28px 0;">
				<span class="c999899">付款方式  · </span>
				<span > {{datas.pay_type_collect==undefined?(datas.pay_type==1?'货到付款':(datas.pay_type==2?'上车付款':(datas.pay_type==3?'分期付款':'等待买家选择'))):datas.pay_type_collect.join('·')}}</span>
<!-- 支付方式 1=货到付款；2=上车付款；3=分期付款； -->
			</p>
			 <p v-show="list==5||list==2||(list==1&&datas.supply_status==210)" class="f18 c676868 border-b relative" style="top:-16px;padding-bottom:24px;">
					<span class="c999899">运输方式 ·  </span>
					<span > {{datas.ship_type_collect==undefined?(datas.ship_type==1?'买家自提苗木':(datas.ship_type==2?'卖家包运苗木':(datas.ship_type==3?'第三方物流':'等待买家选择'))):datas.ship_type_collect.join('·')}}</span>
<!-- 运输方式 1=买家自提苗木；2=卖家包运苗木；3=第三方物流； -->
			</p>
<!-- 自提苗木 -->
            <!-- 自提苗木xiangqing -->
			<p v-show="name=='xiangqing'&&datas.ship_type_collect[0]=='买家自提苗木'"  class="f18 c676868 relative border-b" style="padding-bottom:30px;top:-19px;">
					<span class="c999899">运输方式 ·  </span>
					<span > {{datas.ship_type_collect==undefined?'':datas.ship_type_collect.join('·')}}</span>
			</p>
			<!-- 自提苗木3,4 -->
			<p v-show="(list==3||list==4)&&datas.ship_type_collect[0]=='买家自提苗木'"  class="f18 c676868 relative border-b" style="padding-bottom:30px;top:-19px;">
					<span class="c999899">运输方式 ·  </span>
					<span > {{datas.ship_type_collect==undefined?'':datas.ship_type_collect.join('·')}}</span>
			</p>

<!-- 非自提苗木 -->
			<div v-if="(name=='xiangqing'||list==3||list==4)&&datas.ship_type_collect[0]!='买家自提苗木'" style="padding:28px 0;" class='border-b' >
			    <p class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">运输方式 ·  </span>
					<span > {{datas.ship_type_collect==undefined?'':datas.ship_type_collect.join('·')}}</span>
				</p>
				<p class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">运单号  ·  </span>
					<span >{{datas.sn}}</span>
				</p>
				<p class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">预定到货时间  ·  </span>
					<span >{{formatDate(datas.delivery_time)}}</span>
				</p>
				<p class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">目的地点   ·  </span>
					<span >{{datas.delivery_address}}</span>
				</p>
<!-- 只有1.确定运费与发货2.验收与收货 才能进来这个详情，只有1才是运费报价，2和购物车进来的都是合计和运费 -->
				<p  v-show="name!='xiangqing'&&list==3" class="f18 c999899" style="padding-bottom:14px;">
					<span class="c999899">运费报价   ·  </span>
					<span class="c60B346">{{datas.original_freight==0?'等待报价':('￥'+datas.current_freight)}}</span>
					<!-- <span v-show="state!='baojia'" class="c999899 " style="text-decoration:line-through;">{{'￥'+datas.original_freight}}</span> -->
				</p>
				<p v-show="name=='xiangqing'||(name!='xiangqing'&&list==4)" class="f18 c676868" style="">
					<span class="c999899">苗木合计：</span>
					<span class="c60B346 f26" >￥{{datas.total_price}}</span>
					<span class="c999899" style='margin-left:110px;'>运费：</span>
					<span class="c60B346 f26">￥{{datas.current_freight}}</span>
				</p>
			</div>

			<div style="padding:28px 0;" class='border-b relative' :class="{ownti:(name=='xiangqing'&&datas.ship_type_collect[0]=='买家自提苗木')}">
			<!-- 1.买方的要分情况 -->
			    <p v-show="name=='xiangqing'" class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">{{datas.group.type=='private'?'个人联系人':(datas.group.type=='company'?'企业联系人':'团队联系人')}}  ·  </span>
					<span >{{datas.group.contacts}} </span>
				</p>
			<!-- 2.卖方的都是采购联系人  -->
			   <p v-show="name!='xiangqing'" class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">采购联系人  ·  </span>
					<span >{{datas.group.contacts}} </span>
				</p>


				<p class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">联系电话   ·  </span>
					<span >{{datas.group.contact_number}}</span>
				</p>

				<img src="/static/tu-gouwuche/1-32.png" alt="" class="czjz" style="right:0px;">
				
			</div>
<!--确定运费与发货是没有地图的  xiangqing 4 -->
           <p  v-if="(name=='xiangqing'||list==4)&&datas.ship_type_collect[0]!='买家自提苗木'" class="f26 relative" style="margin:50px 0 20px 0;">运单目的地点</p>
            <p  v-if="(name=='xiangqing'||list==4)&&datas.ship_type_collect[0]!='买家自提苗木'" class="f18 c676868" style="padding-bottom:14px;">
					<span class="c999899">目的地   ·  </span>
					<span > {{datas.delivery_address}} </span>
			</p>
<!-- 地图确定运费与发货是没有地图的  xiangqing 4 -->
			<div v-if="(name=='xiangqing'||list==4)&&datas.ship_type_collect[0]!='买家自提苗木'" id='map0' :style="{width:w,marginBottom:list==4?'40px':'0'}" style="height:467px;" >
				
			</div>
<!-- 列表 -->
            <ul :class="{bgf2f2f2:name!='xiangqing'}">
            	<li v-if="datas.carriages!=undefined" v-for="(item,index) in datas.carriages" style="padding:20px 0;height:160px;" class='relative  bai ' :style="{'borderBottom':borderBottom,'marginBottom':marginBottom}">
            	<!-- 15px的灰色间隔 -->
            	<img class="absolute" v-show="name!='xiangqing'" src="/static/tu-order/1-12.png" alt="" style="top:-16px;left:-40px;">

            	   <div @click.stop="liclick($event,item.tree)" class='relative  overflow cursor lf' style="width:90px;height:160px;">
            	   	   <img :src="item.tree.mu_photo.length>0?item.tree.mu_photo[0].url+'?imageView2/1/w/90/h/160':'/static/tu-gouwuche/1-36.png'"alt=""  class=" cursor "  >
            	   </div>
            	   <div style="margin-left:20px;" :style="{width:name!='xiangqing'?'360px':'auto'}" class='lf'>
            	   	   <p class="c4A494B f26 " ><span  class="cursor" >{{item.tree.mu_name}}</span>
            	   	   <!-- .length>8?item.tree.mu_name.substring(0,8):item.tree.mu_name -->
						<!-- <span v-if="item.tree.mu_name.length>8">...</span> -->
						<span class="type20 f16">{{item.tree.mu_type!=undefined?item.tree.mu_type.substring(0,1):''}}</span>
						</p>
            	   	    <!-- <p class="c676868 f16 " style="margin-top:15px;">米径500-400cm · 自然高1100-1200cm · 肉高1200-1000cm · 主分枝高1000-1100cm</p>
            	   	    <p class="c676868 f16 " >冠幅1000-1100cm</p>
            	   	    <p class="c60B346 f18 " style="margin:10px 0;">￥2300.00/株</p>
            	   	    <p class="c999899 f15 " >广东·中山·民众镇中苗圃中苗圃场</p> -->
            	   	    	      	     	<div class="lf " style="margin-left:10px;margin-top:5px;">
	      	     	<!-- 假 地  盆 -->
	 	<div	style="height:55px;" class="" v-if="item.tree.mu_type!='草坪'">
	      	     		<span v-if="item.tree.mu_type!='袋苗'&&(item.tree.mu_mj_min!=''||item.tree.mu_mj_max!='')" class="c4A494B f12 ">
	      	     		<span v-show="item.tree.mu_mj_min!=''||item.tree.mu_mj_max!=''">
								米径{{item.tree.mu_mj_min}}
								<span v-show="item.tree.mu_mj_min!=''&&item.tree.mu_mj_max!=''&&item.tree.mu_mj_min!=item.tree.mu_mj_max">- {{item.tree.mu_mj_max}}</span>cm
							</span>

							<!-- 点 -->
							 · 

							<span v-show="item.tree.mu_zg_min!=''||item.tree.mu_zg_max!=''">
								自然高{{item.tree.mu_zg_min}}
                                <span v-show="item.tree.mu_zg_min!=''&&item.tree.mu_zg_max!=''&&item.tree.mu_zg_min!=item.tree.mu_zg_max">- {{item.tree.mu_zg_max}}</span>
								cm
							</span>
							
	      	   
	      	     		</span>
	      	     		<span  v-if="item.tree.mu_type!='袋苗'&&(item.tree.mu_dj_min!=''||item.tree.mu_dj_max!='')"  class="c4A494B f12 ">
	      	     		    <span v-show="item.tree.mu_dj_min!=''||item.tree.mu_dj_max!=''">
								地径{{item.tree.mu_dj_min}}
								<span v-show="item.tree.mu_dj_min!=''&&item.tree.mu_dj_max!=''&&item.tree.mu_dj_min!=item.tree.mu_dj_max">- {{item.tree.mu_dj_max}}</span>cm
							</span>

							<!-- 点 -->
							 · 

							<span v-show="item.tree.mu_zg_min!=''||item.tree.mu_zg_max!=''">
								自然高{{item.tree.mu_zg_min}}
                                <span v-show="item.tree.mu_zg_min!=''&&item.tree.mu_zg_max!=''&&item.tree.mu_zg_min!=item.tree.mu_zg_max">- {{item.tree.mu_zg_max}}</span>
								cm
							</span>
	      	     		<!-- 地径{{item.tree.mu_dj_min}}-{{item.tree.mu_dj_max}}cm · 自然高{{item.tree.mu_zg_min}}-{{item.tree.mu_zg_max}}cm -->
	      	     		</span>
	      	     		<span class="c4A494B f12 " v-if="item.tree.mu_type!='袋苗'" >
	      	     		<!-- 肉高 -->
							<span v-show="item.tree.mu_rg_min!=''||item.tree.mu_rg_max!=''">
								肉高{{item.tree.mu_rg_min}}
								<!-- 横 -->
								<span v-show="item.tree.mu_rg_min!=''&&item.tree.mu_rg_max!=''&&item.tree.mu_rg_min!=item.tree.mu_rg_max">- {{item.tree.mu_rg_max}}</span>cm
							</span>
							<!-- 点 -->
							<span  v-show="(item.tree.mu_rg_min!=''||item.tree.mu_rg_max!='')&&(item.tree.mu_zfjg_min!=''||item.tree.mu_zfjg_max!='')"> · </span>
                            
                            <!-- 主分枝高 -->
							<span v-show="item.tree.mu_zfjg_min!=''||item.tree.mu_zfjg_max!=''">
								 主分枝高{{item.tree.mu_zfjg_min}}
								 <!-- 横 -->
                                <span v-show="item.tree.mu_zfjg_min!=''&&item.tree.mu_zfjg_max!=''&&item.tree.mu_zfjg_min!=item.tree.mu_zfjg_max">- {{item.tree.mu_zfjg_max}}</span>
								cm
							</span>
	      	     		<!-- 肉高{{item.tree.mu_rg_min}}-{{item.tree.mu_rg_max}}cm · {{item.tree.mu_zfjg_min}}-{{item.tree.mu_zfjg_max}}cm -->
	      	     		</span>

	      	     	<!-- 袋 -->
	      	     
	      	     	<span v-if="item.tree.mu_type=='袋苗'&&(item.tree.mu_zg_min!=''||item.tree.mu_zg_max!='')" class="c4A494B f12 ">
	      	     	         {{item.tree.mu_package_weight}}斤袋 · 
	      	     	       自然高{{item.tree.mu_zg_min}}
							<!-- 点 -->
							<span  v-show="(item.tree.mu_zg_min!=''&&item.tree.mu_zg_max!=''&&item.tree.mu_zg_min!=item.tree.mu_zg_max)&&item.tree.mu_type=='袋苗'">- {{item.tree.mu_zg_max}}</span>
							cm
	      	     	<!-- 自然高{{item.tree.mu_zg_min}}-{{item.tree.mu_zg_max}}cm -->
	      	     	</span>
	      	     	
	      	     	<!-- 公用 冠幅 -->	
	      	     		<span class="c4A494B f12 ">
	      	     		<!-- 冠幅{{item.tree.mu_gf_min}}-{{item.tree.mu_gf_max}}cm -->
	      	     		 <span v-show="(item.tree.mu_gf_min!=''||item.tree.mu_gf_max!='')"> · 冠幅{{item.tree.mu_gf_min}}
							<!-- - -->
							<span  v-show="(item.tree.mu_gf_min!=''&&item.tree.mu_gf_max!=''&&item.tree.mu_gf_min!=item.tree.mu_gf_max)">- {{item.tree.mu_gf_max}}</span>
							cm</span>
	      	     		</span>
</div>


<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div v-if="item.tree.mu_type=='草坪'" style='height:55px;' class="">
        <p class="f12 c4A494B" style="margin-bottom:0;">
              <span v-show="item.tree.lawn_length!=''&&item.tree.lawn_length!=undefined">长{{item.tree.lawn_length}}cm</span>
              <span v-show="item.tree.lawn_width!=''&&item.tree.lawn_width!=undefined"><span v-show="item.tree.lawn_length!=''&&item.tree.lawn_length!=undefined"> · </span>宽{{item.tree.lawn_width}}cm</span>
              <span v-show="item.tree.lawn_density!=''&&item.tree.lawn_density!=undefined"><span v-show="(item.tree.lawn_length!=''&&item.tree.lawn_length!=undefined)||(item.tree.lawn_width!=''&&item.tree.lawn_width!=undefined)"> · </span>密度{{item.tree.lawn_density}}%</span>
             <!--  <span v-show="item.tree.lawn_amount==''||item.tree.lawn_amount==undefined">（单位：cm）</span> -->
      </p>
         <p class="f12 c4A494B">
              <span v-show="item.tree.lawn_amount!=''&&item.tree.lawn_amount!=undefined">每捆数量{{item.tree.lawn_amount}}片</span>
              <!-- <span>（单位：cm）</span> -->
      </p>

  </div>
	      	     		<p style="margin:5px 0;">
	      	     		<span class="c60B346 f18 " style="display:inline-block;width:250px;"><span class="sonPrice">
	      	     		<!-- ￥{{item.current_price=='-1'?'面议':item.current_price}}元/株 -->
	      	     		{{item.current_price=='-1'?'面议':(item.tree.mu_type=='草坪'?'￥'+item.current_price+'/㎡':'￥'+item.current_price+'/株')}}
	      	     		</span>
	      	     		<span v-if="item.original_price!=item.current_price" class="f13 c999899" style="text-decoration:line-through;">{{item.original_price=='-1'?'面议':(item.tree.mu_type=='草坪'?'￥'+item.original_price+'/㎡':'￥'+item.original_price+'/株')}}
	
	      	     		</span>
								</span>
	      	     		</span>

	      	     		


								</span>
	      	     		<span v-if="name=='xiangqing'" class="c999899 f13 center" style="display:inline-block;width:160px;">库存{{item.tree.mu_stock}}{{item.tree.mu_type=='草坪'?'㎡':'株'}}
</span>
	      	     		</p>

	      	     		<p class="c999899 f12 diandiandian" style="line-height:25px;">{{item.tree.mu_province}}·{{item.tree.mu_city}}·{{item.tree.mu_ground.gg_name.length>10?item.tree.mu_ground.gg_name.substring(0,10):item.tree.mu_ground.gg_name}}
                       <span v-if="item.tree.mu_ground.gg_name.length>10">...</span>
	      	     		</p>
	      	     	</div>
            	   </div>

<!--买家端的状态判断  -->
                   <!-- 不需要验苗： -->	
            			<span v-if="item.check_type==0&&name=='xiangqing'" class="f18 c676868 absolute" style="top:25px;right:0px;">不需要验苗</span>
            			
            	   <!-- 查看验苗报告：等待卖家发货 -->
            			<router-link target="_blank" :to="{name:'baogao',params:{objectId:item.objectId,where:'looks',shipment_id:0,carriage_id:0}}">
            			<span v-if="datas.trade_status==710&&item.check_type!=0&&name=='xiangqing'"  class="f18 c676868 absolute" style="top:25px;right:0px;">查看验苗报告
            			<i class="iconfont icon-arrow-bottom f18" style=""></i>
            			</span>
            			</router-link>
                 
            	   <!-- 查看验收报告：确认发货 -->
            	   <!-- 卖家订单的3没有验收报告 -->
            	   <router-link  target="_blank"  :to="{name:'baogao',params:{objectId:item.objectId,where:'shouhuo',shipment_id:datas.objectId,carriage_id:item.carriageId}}">
            	   <span v-if="datas.trade_status!=710&&item.check_type!=0&&name=='xiangqing'"  class="f18 c60B346 absolute" style="top:25px;right:0px;">查看验收报告
            	   <i class="iconfont icon-arrow-bottom f18" style=""></i>
            	   </span>
                        </router-link>

 <!--卖家端的3,4模块的状态判断  -->
                <!--卖家端的模块3   查看验苗报告灰+不需要验苗 -->
                      <!-- 不需要验苗： -->	
            			<span v-if="item.check_type==0&&list==3" class="f18 c676868 absolute" style="top:25px;right:0px;">不需要验苗</span>
                      <!-- 灰色查看验苗报告 -->
            			<router-link target="_blank" :to="{name:'baogao',params:{objectId:item.objectId,where:'list3',shipment_id:0,carriage_id:0}}">
            			<span v-if="list==3&&item.check_type!=0"  class="f18 c999899 absolute" style="top:25px;right:0px;">查看验苗报告
            			<i class="iconfont icon-arrow-bottom f18" style=""></i>
            			</span>
            			</router-link>

                <!--卖家端的模块4   查看验收报告绿+不需要验苗 -->
                      <!-- 不需要验苗： -->	
            			<span v-if="item.check_type==0&&list==4" class="f18 c676868 absolute" style="top:25px;right:0px;">不需要验苗</span>
                      <!-- 查看验收报告绿 -->
            			<router-link target="_blank" :to="{name:'baogao',params:{objectId:item.objectId,where:'list4',shipment_id:datas.objectId,carriage_id:item.carriageId}}">
            			<span v-if="list==4&&item.check_type!=0"  class="f18 c60B346 absolute" style="top:25px;right:0px;">查看验收报告
            			<i class="iconfont icon-arrow-bottom f18" style=""></i>
            			</span>
            			</router-link>




            			<!-- 1=货到付款；2=上车付款；3=分期付款； -->
            		<!-- 1.等待卖家发货 -->
            		<div v-if="false" class="c999899 absolute" style="right:20px;bottom:70px;" >
            			<p>运输数量<span  class="c4A494B">{{item.send_count}}{{item.tree.mu_type=='草坪'?'㎡':'株'}}</span></p>
            			<p  class="right">{{item.pay_type==3?'分期付款':(item.pay_type==2?'上车付款':'货到付款')}}</p>
            		</div>

            		<!-- 2.确认发货 -->
            		<div  v-if="true"  class="c999899 absolute" style="right:20px;bottom:70px;" >
            			<p>
            			运输数量
            			<span  class="c4A494B " :class="{borderR:list!=3,m0p0:list==3}" style="padding-right:10px;margin-right:8px;">{{item.send_count}}{{item.tree.mu_type=='草坪'?'㎡':'株'}}</span></span>
            			<!-- list=3是没有已收货的 -->
                         <span v-if="list!=3" >已收货</span>
                         <span  v-if="list!=3" class="c4A494B">
                                  <!--  <span v-if="datas.trade_status!=910" class="c60B346">{{item.accept_count}}</span>
                                   <span class="c60B346" v-if="datas.trade_status==910">{{item.send_count}}</span> -->
                                  <span v-if="datas.trade_status<910" class="c60B346">0</span>
                                   <span class="c60B346" v-if="datas.trade_status>910||datas.trade_status==910">{{item.send_count}}</span>
                                   {{item.tree.mu_type=='草坪'?'㎡':'株'}}</span>
                                  <!--  -->
                         </span>
            			</p>
            			<p class="right">{{item.pay_type==3?'分期付款':(item.pay_type==2?'上车付款':'货到付款')}}</p>
            		</div>
            		
            	</li>
<!-- 1,2,5是不含carriage的，那我们直接采用tree -->
            	<li v-if="datas.carriages==undefined"  style="padding:20px 0;height:160px;" class='relative  bai ' :style="{'borderBottom':borderBottom,'marginBottom':marginBottom}">
            	<!-- 15px的灰色间隔 -->
            	<img class="absolute" v-show="name!='xiangqing'" src="/static/tu-order/1-12.png" alt="" style="top:-16px;left:-40px;">

            	   <div @click.stop="liclick($event,datas.tree)" class='relative  overflow cursor lf' style="width:90px;height:160px;">
            	   	   <img :src="datas.tree.mu_photo.length>0?datas.tree.mu_photo[0].url+'?imageView2/1/w/90/h/160':'/static/tu-gouwuche/1-36.png'"alt=""  class=" cursor "  >
            	   </div>
            	   <div style="margin-left:20px;" :style="{width:name!='xiangqing'?'360px':'auto'}" class='lf'>
            	   	   <p class="c4A494B f26 " ><span  class="cursor" >{{datas.tree.mu_name}}</span>
            	   	   <!-- .length>8?datas.tree.mu_name.substring(0,8):datas.tree.mu_name -->
						<!-- <span v-if="datas.tree.mu_name.length>8">...</span> -->
						<span class="type20 f16">{{datas.tree.mu_type!=undefined?datas.tree.mu_type.substring(0,1):''}}</span>
						</p>
            	   	    <!-- <p class="c676868 f16 " style="margin-top:15px;">米径500-400cm · 自然高1100-1200cm · 肉高1200-1000cm · 主分枝高1000-1100cm</p>
            	   	    <p class="c676868 f16 " >冠幅1000-1100cm</p>
            	   	    <p class="c60B346 f18 " style="margin:10px 0;">￥2300.00/株</p>
            	   	    <p class="c999899 f15 " >广东·中山·民众镇中苗圃中苗圃场</p> -->
            	   	    	      	     	<div class="lf " style="margin-left:10px;margin-top:5px;">
	      	     	<!-- 假 地  盆 -->
	 	<div	style="height:55px;"  class="" v-if="datas.tree.mu_type!='草坪'" >
	      	     		<span v-if="datas.tree.mu_type!='袋苗'&&(datas.tree.mu_mj_min!=''||datas.tree.mu_mj_max!='')" class="c4A494B f12 ">
	      	     		<span v-show="datas.tree.mu_mj_min!=''||datas.tree.mu_mj_max!=''">
								米径{{datas.tree.mu_mj_min}}
								<span v-show="datas.tree.mu_mj_min!=''&&datas.tree.mu_mj_max!=''&&datas.tree.mu_mj_min!=datas.tree.mu_mj_max">- {{datas.tree.mu_mj_max}}</span>cm
							</span>

							<!-- 点 -->
							 · 

							<span v-show="datas.tree.mu_zg_min!=''||datas.tree.mu_zg_max!=''">
								自然高{{datas.tree.mu_zg_min}}
                                <span v-show="datas.tree.mu_zg_min!=''&&datas.tree.mu_zg_max!=''&&datas.tree.mu_zg_min!=datas.tree.mu_zg_max">- {{datas.tree.mu_zg_max}}</span>
								cm
							</span>
							
	      	   
	      	     		</span>
	      	     		<span  v-if="datas.tree.mu_type!='袋苗'&&(datas.tree.mu_dj_min!=''||datas.tree.mu_dj_max!='')"  class="c4A494B f12 ">
	      	     		    <span v-show="datas.tree.mu_dj_min!=''||datas.tree.mu_dj_max!=''">
								地径{{datas.tree.mu_dj_min}}
								<span v-show="datas.tree.mu_dj_min!=''&&datas.tree.mu_dj_max!=''&&datas.tree.mu_dj_min!=datas.tree.mu_dj_max">- {{datas.tree.mu_dj_max}}</span>cm
							</span>

							<!-- 点 -->
							 · 

							<span v-show="datas.tree.mu_zg_min!=''||datas.tree.mu_zg_max!=''">
								自然高{{datas.tree.mu_zg_min}}
                                <span v-show="datas.tree.mu_zg_min!=''&&datas.tree.mu_zg_max!=''&&datas.tree.mu_zg_min!=datas.tree.mu_zg_max">- {{datas.tree.mu_zg_max}}</span>
								cm
							</span>
	      	     		<!-- 地径{{datas.tree.mu_dj_min}}-{{datas.tree.mu_dj_max}}cm · 自然高{{datas.tree.mu_zg_min}}-{{datas.tree.mu_zg_max}}cm -->
	      	     		</span>
	      	     		<span class="c4A494B f12 " v-if="datas.tree.mu_type!='袋苗'" >
	      	     		<!-- 肉高 -->
							<span v-show="datas.tree.mu_rg_min!=''||datas.tree.mu_rg_max!=''">
								肉高{{datas.tree.mu_rg_min}}
								<!-- 横 -->
								<span v-show="datas.tree.mu_rg_min!=''&&datas.tree.mu_rg_max!=''&&datas.tree.mu_rg_min!=datas.tree.mu_rg_max">- {{datas.tree.mu_rg_max}}</span>cm
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
	      	     		<!-- 肉高{{datas.tree.mu_rg_min}}-{{datas.tree.mu_rg_max}}cm · {{datas.tree.mu_zfjg_min}}-{{datas.tree.mu_zfjg_max}}cm -->
	      	     		</span>

	      	     	<!-- 袋 -->
	      	     
	      	     	<span v-if="datas.tree.mu_type=='袋苗'&&(datas.tree.mu_zg_min!=''||datas.tree.mu_zg_max!='')" class="c4A494B f12 ">
	      	     	         {{datas.tree.mu_package_weight}}斤袋 · 
	      	     	       自然高{{datas.tree.mu_zg_min}}
							<!-- 点 -->
							<span  v-show="(datas.tree.mu_zg_min!=''&&datas.tree.mu_zg_max!=''&&datas.tree.mu_zg_min!=datas.tree.mu_zg_max)&&datas.tree.mu_type=='袋苗'">- {{datas.tree.mu_zg_max}}</span>
							cm
	      	     	<!-- 自然高{{datas.tree.mu_zg_min}}-{{datas.tree.mu_zg_max}}cm -->
	      	     	</span>
	      	     	
	      	     	<!-- 公用 冠幅 -->	
	      	     		<span class="c4A494B f12 ">
	      	     		<!-- 冠幅{{datas.tree.mu_gf_min}}-{{datas.tree.mu_gf_max}}cm -->
	      	     		 <span v-show="(datas.tree.mu_gf_min!=''||datas.tree.mu_gf_max!='')"> · 冠幅{{datas.tree.mu_gf_min}}
							<!-- - -->
							<span  v-show="(datas.tree.mu_gf_min!=''&&datas.tree.mu_gf_max!=''&&datas.tree.mu_gf_min!=datas.tree.mu_gf_max)">- {{datas.tree.mu_gf_max}}</span>
							cm</span>
	      	     		</span>
</div>


<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div v-if="datas.tree.mu_type=='草坪'" style='height:55px;' class="">
        <p class="f12 c4A494B" style="margin-bottom:0;">
              <span v-show="datas.tree.lawn_length!=''&&datas.tree.lawn_length!=undefined">长{{datas.tree.lawn_length}}cm</span>
              <span v-show="datas.tree.lawn_width!=''&&datas.tree.lawn_width!=undefined"><span v-show="datas.tree.lawn_length!=''&&datas.tree.lawn_length!=undefined"> · </span>宽{{datas.tree.lawn_width}}cm</span>
              <span v-show="datas.tree.lawn_density!=''&&datas.tree.lawn_density!=undefined"><span v-show="(datas.tree.lawn_length!=''&&datas.tree.lawn_length!=undefined)||(datas.tree.lawn_width!=''&&datas.tree.lawn_width!=undefined)"> · </span>密度{{datas.tree.lawn_density}}%</span>
             <!--  <span v-show="datas.tree.lawn_amount==''||datas.tree.lawn_amount==undefined">（单位：cm）</span> -->
      </p>
         <p class="f12 c4A494B">
              <span v-show="datas.tree.lawn_amount!=''&&datas.tree.lawn_amount!=undefined">每捆数量{{datas.tree.lawn_amount}}片</span>
              <!-- <span>（单位：cm）</span> -->
      </p>

  </div>
<!-- 卖家模块1才有的设置商品价格 -->
<div  v-if="priceKuang==true" style='left:120px;bottom:55px;width:145px;height:27px;background:url(/static/tu-order/1-13.jpg) no-repeat;z-index:10;' class="absolute  bai" >
	      	     	<!-- jia -->
	      	     	<span class="czjz cursor " @click="clicks($event,'-1')" style='left:0;width:25px;height:25px;'></span>
	      	     	<!-- input -->
	      	     	<!-- onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/[^\d.]/g,'')}"  onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/[^\d.]/g,'')}" -->
	      	     	<input v-model="current_price"  @keyup="Onlytwo($event,1)" @afterpaste="Onlytwo($event,1)" class="red czjz center none sonCount" type='number' style='left:35px;width:75px;height:21px;'>
	      	     	<!-- jian -->
	      	     	<span class="czjz cursor "  @click="clicks($event,'1')" style='right:0;width:25px;height:25px;'></span>
</div>




	      	     		<p style="margin:5px 0;" class="relative">
	      	     		<span class="c60B346 f18 " style="display:inline-block;width:250px;"><span class="sonPrice">
	      	     		<!-- ￥{{datas.current_price=='-1'?'面议':datas.current_price}}元/株 -->
	      	     		{{datas.current_price=='-1'?'面议':(datas.tree.mu_type=='草坪'?'￥'+datas.current_price+'/㎡':'￥'+datas.current_price+'/株')}}
	      	     		</span>
	      	     		<span v-if="datas.original_price!=datas.current_price" class="f13 c999899" style="text-decoration:line-through;">{{datas.original_price=='-1'?'面议':(datas.tree.mu_type=='草坪'?'￥'+datas.original_price+'/㎡':'￥'+datas.original_price+'/株')}}
	      	     
	      	     		</span>
								</span>
	      	     		</span>

	      	     		


								</span>
	      	     		<span v-if="name=='xiangqing'" class="c999899 f13 center" style="display:inline-block;width:160px;">库存{{datas.tree.mu_stock}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</span></span>
	      	     		</p>

	      	     		<p class="c999899 f12 diandiandian" style="line-height:25px;">{{datas.tree.mu_province}}·{{datas.tree.mu_city}}·{{datas.tree.mu_ground.gg_name.length>10?datas.tree.mu_ground.gg_name.substring(0,10):datas.tree.mu_ground.gg_name}}
                       <span v-if="datas.tree.mu_ground.gg_name.length>10">...</span>
	      	     		</p>
	      	     	</div>
            	   </div>

                    <!-- 1.第1个模块 承接交易与拟定交易方式 -->
                    <span @click="changes($event,0)" v-if="list==1&&(datas.supply_status==50||datas.supply_status==150)&&hasdo==false" class="f18 c60B346 absolute cursor" style="top:25px;right:0px;">更改苗木报价
                      <i class="iconfont icon-arrow-bottom f18"></i>
                    </span>
                    <span @click="changes($event,1)" v-if="list==1&&(datas.supply_status==50||datas.supply_status==150)&&hasdo==true" class="f18 c60B346 absolute cursor" style="top:25px;right:0px;">完成
                      <i class="iconfont icon-arrow-bottom f18"></i>
                    </span>
                    <!-- 这里根据实际情况显示：不需要验苗，查看验苗报告绿,查看验苗报告灰，等待验苗报告 -->
<!-- 
datas.amount!=datas.checked_pass_count&&datas.check_type!=0&&datas.checked_count!=0 查看验苗报告  绿色
datas.amount==datas.checked_pass_count&&datas.check_type!=0&&datas.checked_count!=0 查看验苗报告  灰色
datas.checked_count==0&&datas.check_type!=0 为等待验苗报告
datas.check_type==0 为不需要验苗 -->

                    <!--a1.不需要验苗点击无效-->
                    <span v-if="list==1&&datas.check_type==0&&datas.supply_status==210"  class="f18 c999899 absolute" style="top:25px;right:0px;">不需要验苗
            	  
            	   </span>
            	   <!--a2.等待验苗报告点击无效-->
            	   <span v-if="list==1&&datas.checked_count==0&&datas.check_type!=0&&datas.supply_status==210"  class="f18 c999899 absolute" style="top:25px;right:0px;">等待验苗报告
            	  
            	   </span>
            	   <!-- a3.查看验苗报告绿点击查看报告 -->
                     <router-link  target="_blank"  :to="{name:'baogao',params:{objectId:datas.objectId,where:'list1',shipment_id:0,carriage_id:0}}">
            	   <span v-if="list==1&&datas.amount!=datas.checked_pass_count&&datas.check_type!=0&&datas.checked_count!=0&&datas.supply_status==210"  class="f18 c60B346  absolute" style="top:25px;right:0px;">查看验苗报告
            	   <i class="iconfont icon-arrow-bottom f18" style=""></i>
            	   </span>
                        </router-link>
                     <!-- a4.查看验苗报告灰点击查看报告 -->
                     <router-link  target="_blank"  :to="{name:'baogao',params:{objectId:datas.objectId,where:'list1',shipment_id:0,carriage_id:0}}">
            	   <span v-if="list==1&&datas.amount==datas.checked_pass_count&&datas.check_type!=0&&datas.checked_count!=0&&datas.supply_status==210"  class="f18 c999899  absolute" style="top:25px;right:0px;">查看验苗报告
            	   <i class="iconfont icon-arrow-bottom f18" style=""></i>
            	   </span>
                        </router-link>
                     


                    <!-- 2.第2个模块 确认付款方式与运输方式 灰色的查看验苗报告、不需要验苗-->
                    <!-- b1不需要验苗 -->
                     <span v-if="list==2&&datas.check_type==0"  class="f18 c999899 absolute" style="top:25px;right:0px;">不需要验苗
            	   </span>
            	   <!--  b2灰色的查看验苗报告 -->
                     <router-link  target="_blank"  :to="{name:'baogao',params:{objectId:datas.objectId,where:'list1',shipment_id:0,carriage_id:0}}">
            	   <span v-if="list==2&&datas.checked_pass_count==datas.amount&&datas.check_type!=0"  class="f18 c999899 absolute" style="top:25px;right:0px;">查看验苗报告
            	   <i class="iconfont icon-arrow-bottom f18" style=""></i>
            	   </span>
                        </router-link>


                    <!-- 3.第5个模块 已关闭的交易 根据交易实际情况显示：等待验苗报告、不需要验苗、查看验苗报告绿、查看验苗报告灰、
                          查看才可以点击
                     其中拒绝的是隐藏的没有显示
                    -->
                     <!-- <router-link  target="_blank"  :to="{name:'baogao',params:{objectId:123,where:'shouhuo',shipment_id:123,carriage_id:123}}"> -->
            	   <span v-if="list==5"  class="f18 c999899 absolute" style="top:25px;right:0px;">

                      <!--a1.不需要验苗点击无效-->
                    <span v-if="list==5&&datas.check_type==0"  class="f18 c999899 ">不需要验苗</span>
            	   <!--a2.等待验苗报告点击无效-->
            	   <span v-if="list==5&&datas.checked_count==0&&datas.check_type!=0"  class="f18 c999899" >等待验苗报告</span>           	   
            	   <!-- a3.查看验苗报告绿点击查看报告 -->
                     <router-link  target="_blank"  :to="{name:'baogao',params:{objectId:datas.objectId,where:'list5',shipment_id:0,carriage_id:0}}">
            	          <span v-if="list==5&&datas.amount!=datas.checked_pass_count&&datas.check_type!=0&&datas.checked_count!=0"  class="f18 c60B346  " >查看验苗报告
            	          <i class="iconfont icon-arrow-bottom f18" style=""></i>
            	          </span>
                    </router-link>
                     <!-- a4.查看验苗报告灰点击查看报告 -->
                    <router-link  target="_blank"  :to="{name:'baogao',params:{objectId:datas.objectId,where:'list5',shipment_id:0,carriage_id:0}}">
            	          <span v-if="list==5&&datas.amount==datas.checked_pass_count&&datas.check_type!=0&&datas.checked_count!=0"  class="f18 c999899  ">查看验苗报告
            	         <i class="iconfont icon-arrow-bottom f18" style=""></i>
            	          </span>
                   </router-link>





            	   <!-- <i class="iconfont icon-arrow-bottom f18" style=""></i> -->
            	   </span>
                        <!-- </router-link> -->

                  


            			<!-- 预采购苗木数量1000株 -->
            		<!-- 1.等待卖家发货 -->
            		<div  class="c676868 absolute f12" style="right:0;bottom:70px;" >
            			<p>预采购数量{{datas.amount}}{{datas.tree.mu_type=='草坪'?'㎡':'株'}}</p>
            			
            		</div>
            		
            	</li>
            	</ul>
			
		</div>

<!--  -->
		<!-- A.低栏 买方 -->
		<!-- 1. 等待卖家发货-->
			 <div v-if="name=='xiangqing'&&datas.trade_status==710" style="height:80px;line-height:80px;width:984px;margin:0 auto;padding-left:40px;" class='border-t f18 bai'>
                        <span  class="c676868" >采购苗木{{datas.tree_type_count}}种</span>
                        <span  class="c676868" style="margin-left:60px;">合计(不含运费)：</span>
                        <span  class="c60B346" >￥{{datas.total_price}}</span>
                 
                        <img src="/static/tu-gouwuche/1-33.png" alt="" class="rf cursor" >
            	   </div>
        <!-- 2. 确认收货灰-->
			 <div  v-if="name=='xiangqing'&&datas.trade_status==810"  style="height:80px;line-height:80px;width:984px;margin:0 auto;padding-left:40px;" class='border-t f18 bai'>
                        <span  class="c676868" >未收货合计(不含运费)：</span>
                        <span  class="cC96832" >￥{{datas.total_price}}</span>
                        <!-- {{datas.wait_for_accept_price}} -->
                         <span  class="c676868" style="margin-left:60px;">已收货合计(不含运费)：</span>
                        <span  class="c60B346" >￥0</span>
                        <!-- {{datas.accept_price}} -->
                        <img src="/static/tu-gouwuche/1-34.png" alt="" class="rf cursor" >
            	   </div>
        <!-- 3. 确认收货绿-->
			 <div  v-if="name=='xiangqing'&&datas.trade_status==811"  style="height:80px;line-height:80px;width:984px;margin:0 auto;padding-left:40px;" class='border-t f18 bai'>
                       <span  class="c676868" >未收货合计(不含运费)：</span>
                        <span  class="cC96832" >￥{{datas.total_price}}</span><!-- {{datas.wait_for_accept_price}} -->
                         <span  class="c676868" style="margin-left:60px;">已收货合计(不含运费)：</span>
                        <span  class="c60B346" >￥0</span><!-- {{datas.accept_price}} -->
                        
                        <img  @click="isshouhuo=true" src="/static/tu-gouwuche/1-35.png" alt="" class="rf cursor" >
            	   </div>
        <!-- 4. 已收货-->
			 <div  v-if="name=='xiangqing'&&datas.trade_status==910"  style="height:80px;line-height:80px;width:984px;margin:0 auto;padding-left:40px;" class='border-t f18 bai'>
			         <span  class="c676868" style="margin-right:60px;">采购苗木{{datas.tree_type_count}}种</span>
                       <span  class="c676868" >未收货合计(不含运费)：</span>
                        <span  class="cC96832" >￥0</span>
                         <span  class="c676868" style="margin-left:60px;">已收货合计(不含运费)：</span>
                        <span  class="c60B346" >￥{{datas.total_price}}</span>
            	   </div>
<!--  <div  v-if="name=='xiangqing'&&datas.trade_status==910"  style="height:80px;line-height:80px;width:984px;margin:0 auto;padding-left:40px;" class='border-t f18 bai'>
			         <span  class="c676868" style="margin-right:60px;">采购苗木{{datas.tree_type_count}}种</span>
                       <span  class="c676868" >未收货合计(不含运费)：</span>
                        <span  class="cC96832" >￥{{datas.wait_for_accept_price}}</span>
                         <span  class="c676868" style="margin-left:60px;">已收货合计(不含运费)：</span>
                        <span  class="c60B346" >￥{{datas.accept_price}}</span>
</div> -->


        <!-- 确认收货的弹出框 -->
        <div class="wai_kuangs" v-show="isshouhuo==true">
        	  <div class="nei_kuang bai rad f26 center" style="width:400px;height:254px;">
        	  	     <p style="margin-top:50px;">是否确认收货并对已验收</p>
        	  	     <p style="margin-bottom:54px;">苗木进行结算？</p>
        	  	     <!-- 取消 确定-->
        	  	      <img @click="isshouhuo=false" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor" style="width:200px;"><img  @click="shouhuo($event)" src="/static/tu-gouwuche/1-77.png" alt="" class="cursor" style="width:200px;">
        	  </div>
        </div>







<!-- B.低栏 卖方 -->
<!-- 1.承接交易与拟定交易方式   3种状态 -->
<!-- 卖方supply_status说明:
50:显示：待承接;
150:显示：等待买家确认;
210:显示：待买家选择付款与运输;
511:显示：待确认交易;
521:显示：等待买家填写运单 -->
 <div v-if="list==1" style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f18 bai'>
                        <span  class="c676868">合计(不含运费)：</span>
                        <span  class="c60B346" >{{datas.current_price==-1?'面议':"￥"+(datas.current_price*datas.amount).toFixed(2)}}</span>

                        <button v-if="datas.supply_status==210" type="" class="white  bg999899 layui-btn rf" style="margin-top: 25px;height:31px;line-height:31px;width:225px;">等待买家选择付款与运输方式</button>
                        
                        <!-- 灰色的按钮 -->
                        <button v-if="datas.supply_status==150&&hasing==false" type="" class="white  bg999899 layui-btn rf" style="margin-top: 25px;height:31px;line-height:31px;width:98px;">发送新报价</button>
                        <!-- 绿色的按钮 -->
                        <button @click="sendNew()" v-if="datas.supply_status==150&&hasing==true" type="" class="white  bg60B346 layui-btn rf" style="margin-top: 25px;height:31px;line-height:31px;width:98px;">发送新报价</button>

                        <button @click="cjjys()" v-if="datas.supply_status==50" type="" class="bg60B346bg layui-btn rf" style="height:31px;margin-top: 25px;line-height:31px;width:98px;">承接交易</button>
                        <button  @click="jjcjKuang=true"  v-if="datas.supply_status==50" type="" class="bai cC96832  layui-btn rf" style="color:#C96832;height:31px;margin-top: 25px;margin-right:10px;line-height:31px;width:98px;border:1px solid #C96832;">拒绝承接</button>
                       
                       
             </div>
<!-- 2.确认付款方式与运输方式   2种状态 -->
				 <div v-if="list==2" style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f18 bai'>
                        <span  class="c676868">合计(不含运费)：</span>
                        <span  class="c60B346" >{{datas.current_price==-1?'面议':"￥"+(datas.current_price*datas.amount).toFixed(2)}}</span>
                 
                       

                         <button v-if="datas.supply_status==521" type="" class="white  bg999899 layui-btn rf" style="margin-top: 25px;height:31px;line-height:31px;width:155px;">等待买家填写运单</button>

                        <button @click="qrjyKuang=true" v-if="datas.supply_status==511" type="" class="bg60B346bg layui-btn rf" style="height:31px;margin-top: 25px;line-height:31px;width:98px;">确认交易</button>
                        <button  @click="jyzhKuang=true"  v-if="datas.supply_status==511" type="" class="bai cC96832  layui-btn rf" style="color:#C96832;height:31px;margin-top: 25px;margin-right:10px;line-height:31px;width:98px;border:1px solid #C96832;">交易暂缓</button>
                       
             </div>
<!-- 3.确定运费与发货   3种状态 -->
<!-- 卖方shipment_status说明:
610:显示: 等待运费报价;
620:显示: 等待买家确认运输;
700:显示: 待发货; -->
		<!-- 3.1 绿色运费报价-->
			 <div v-if="list==3&&datas.shipment_status==610" style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f18 bai'>
                        <span  class="c676868" >采购苗木{{datas.tree_type_count}}种</span>
                        <span  class="c676868" style="margin-left:60px;">合计(不含运费)：</span>
                        <span  class="c60B346" >{{datas.total_price==-1?'待卖家填写报价':"￥"+datas.total_price}}</span>
                 
                        <button @click="supplys($event,'运费报价')" type="" class="yfbj rf layui-btn" style="padding: 0 35px;background:#60B346;height:30px;line-height:30px;margin-top: 25px;">运费报价</button>
             </div>
        <!-- 3.2 橙色更改报价-->
			 <div v-if="list==3&&datas.shipment_status==620" style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f18 bai'>
                        <span  class="c676868" >采购苗木{{datas.tree_type_count}}种</span>
                        <span  class="c676868" style="margin-left:60px;">合计(不含运费)：</span>
                        <span  class="c60B346" >{{datas.total_price==-1?'待卖家填写报价':"￥"+datas.total_price}}</span>
                 
                        <button  @click="supplys($event,'更改报价')"  type="" class="ggbj rf layui-btn" style="height:30px;padding: 0 35px;background:#C96832;line-height:30px;margin-top: 25px;">更改报价</button>
             </div>
        <!-- 3.3 绿色发货-->
			 <div v-if="list==3&&datas.shipment_status==700" style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f18 bai'>
                        <span  class="c676868" >采购苗木{{datas.tree_type_count}}种</span>
                        <span  class="c676868" style="margin-left:60px;">合计(不含运费)：</span>
                        <span  class="c60B346" >{{datas.total_price==-1?'待卖家填写报价':"￥"+datas.total_price}}</span>
                 
                        <button  @click="fahuos=true" type="" class="layui-btn rf" style="height:30px;line-height:30px;padding: 0 35px;background:#60B346;margin-top: 25px;">发货</button>
             </div>
<!-- 4.验收与收货   1种状态  大于910都是已收货，小于都是未收货-->
			 <div  v-if="name!='xiangqing'&&list==4&&datas.trade_status>910"  style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f15 bai'>
			         <span  class="c676868" style="margin-right:60px;">采购苗木<span class="c60B346">{{datas.tree_type_count}}</span>种</span>
                       <span  class="c676868" >未收货合计(不含运费)：</span>
                        <span  class="cC96832" >￥0</span>
                         <span  class="c676868" style="margin-left:60px;">已收货合计(不含运费)：</span>
                        <span  class="c60B346" >￥{{datas.total_price}}</span>
            	   </div>
            	 <div  v-if="name!='xiangqing'&&list==4&&datas.trade_status<910"  style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f15 bai'>
			         <span  class="c676868" style="margin-right:60px;">采购苗木<span class="c60B346">{{datas.tree_type_count}}</span>种</span>
                       <span  class="c676868" >未收货合计(不含运费)：</span>
                        <span  class="cC96832" >￥{{datas.total_price}}</span>
                         <span  class="c676868" style="margin-left:60px;">已收货合计(不含运费)：</span>
                        <span  class="c60B346" >￥0</span>
            	   </div>
<!-- 5.关闭的交易   1种状态 -->
				 <div v-if="list==5" style="height:80px;line-height:80px;width:620px;margin:0 auto;padding:0 40px;" class='border-t f18 bai'>
                        <span  class="c676868">合计(不含运费)：</span>
                        <span  class="c60B346" >￥{{datas.current_price}}</span>
                 
                        <button  type="" class="layui-btn rf" style="height:30px;line-height:30px;padding: 0 20px;background:#999899;margin-top: 25px;">{{datas.supply_status==-1?'已拒绝承接的交易':'买家已删除的交易'}}</button>
             </div>

 

<!-- 卖方运单和交易详情按钮弹出框里面下方的按钮 -->
<!-- 第1部分的弹出框  承接交易与拟定交易方式   确认承接弹出框和拒绝承接弹出框 -->
     <div v-if="cjjyKuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:254px;">
	      	       <div class="f26 c4A494B " style="height:175px;line-height:175px;">确认承接买家交易？</div>

	      	         <img @click="cjjyKuang=false"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor">
	      	          <button  @click="yiKuangOk($event,1)" type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#60B346;margin-left:0;">确定</button>
	      	       
	             </div>
	      </div>
	     <div v-if="jjcjKuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:254px;">
	      	       <div class="f26 c4A494B " style="height:175px;line-height:175px;">确认拒绝承接买家交易？</div>

	      	         <img @click="jjcjKuang=false"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor">
	      	          <button  @click="yiKuangOk($event,-1)" type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#C96832;margin-left:0;">确定</button>
	      	       
	             </div>
	      </div>
<!-- 第2部分的弹出框  确认付款方式与运输方式   确认交易弹出框和交易暂缓弹出框 -->
     <div v-if="qrjyKuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:254px;">
	      	       <div class="f26 c4A494B " style="height:175px;line-height:175px;">确认与买家进行交易？</div>

	      	         <img @click="qrjyKuang=false"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor">
	      	          <button  @click="erKuangOk($event,1)" type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#60B346;margin-left:0;">确定</button>
	      	       
	             </div>
	      </div>
	     <div v-if="jyzhKuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:254px;">
	      	       <div class="f26 c4A494B " style="height:175px;line-height:175px;">确认暂缓交易？</div>

	      	         <img @click="jyzhKuang=false"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor">
	      	          <button  @click="erKuangOk($event,-1)" type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#C96832;margin-left:0;">确定</button>
	      	       
	             </div>
	      </div>
<!-- 第3部分的弹出框  确定运费与发货   3种状态 -->
	        <!-- a.发起交易的弹出框 -->
	     <div v-if="supplykuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:365px;">
	      	       <div class="f26 c4A494B border-b" style="height:130px;line-height:125px;">请选择您的承运方</div>
	      	       <div  @click="supplyclick($event)" @mouseenter="supplyenter($event)" @mouseleave="supplyleave($event)"  class="supply cursor f18 c676868 border-b" style="height:76px;line-height:76px;">由我提供承运商</div>
	      	       <div  class=" f18 cF2F2F2 border-b" style="height:76px;line-height:76px;">由苗讯提供第三方承运商</div>
	      	         <img @click="supplycal($event)"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor">
	      	          <button v-show="issupply==false"  type="" class="rf layui-btn f18 white" style="width:200px;height:80px;background:#F2F2F2;margin-left:0;">确定</button>
	      	          <button  v-show="issupply==true"  @click="supplyok($event)"  type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#60B346;margin-left:0;">确定</button>
	             </div>
	      </div>
	      	        <!--b. 运费报价输入框 -->
	     <div v-if="supplyinput==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:363px;">
	      	       <div class="f26 c4A494B " style="height:130px;line-height:125px;">请填写您的运费价格</div>
	      	          <div style="width:360px;height:80px;margin-bottom:72px;" class="layui-main relative f26 border">
	      	               <span class="c999899 czjz" style="left:5px;">￥</span>
	      	          	   <input type="text" v-model="baojiaVal"  @keyup="Onlytwo($event,3)" @afterpaste="Onlytwo($event,3)" style="height:80px;width:300px;" class="center none" />
	      	          </div>
	      	         <img @click="inputcal($event)"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor">
	      	          <button v-show="ors=='yfbj'" @click="inputok($event,1)" type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#60B346;margin-left:0;">确定报价</button>
	      	           <button v-show="ors=='ggbj'" @click="inputok($event,2)" type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#C96832;margin-left:0;">确定更改</button>
	      	       
	             </div>
	      </div>

	      	      	        <!--c. 卖方发货的弹出框 -->
	     <div v-if="fahuos==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:254px;">
	      	       <div class="f26 c4A494B " style="height:175px;line-height:175px;">确认该运单发货？</div>

	      	         <img @click="fahuos=false"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor">
	      	          <button  @click="fahuosok($event)" type="" class="rf layui-btn f18" style="width:200px;height:80px;background:#60B346;margin-left:0;">确定</button>
	      	       
	             </div>
	      </div>
<!-- 第4部分的弹出框  验收与发货   没有弹出框 -->
<!-- 第5部分的弹出框  已关闭的交易   没有弹出框 -->
 <!-- 点击的放大图 -->
<fangdatu v-if="fangdatuShow==true"></fangdatu>
	</div>
</template>
<script>
	import headers from '../common/headers.vue'
    import fangdatu from '../common/fangdatu.vue'

	export default{
		data(){
			return{
				current_price:0,//第一部分中间变量当前价格
				priceKuang:false,//卖家第一部分点击修改价格后出现价格框
				hasdo:false,//卖家第一部分判断是否点击过更改报价的灰色报价按钮
				hasing:false,//卖家第一部分判断是否点击过完成的绿色报价按钮
				jjcjKuang:false,//卖家第一部分的拒绝承接框
				cjjyKuang:false,//卖家第一部分的承接交易框
				jyzhKuang:false,//卖家第二部分的交易暂缓框
				qrjyKuang:false,//卖家第二部分的确认交易框
				fahuos:false,//卖家第三部分的发货按钮的弹出框
				ors:'',//卖家第三部分判断点击的是运费报价还是更改报价
				baojiaVal:'',//卖家第三部分运费报价输入框
				supplyinput:false,//卖家第三部分运费报价输入框
				issupply:false,//卖家第三部分点击运费报价的弹出框的确定按钮变绿色
				supplykuang:false,//卖家第三部分点击运费报价的弹出框
				marginBottom:this.$route.name!='xiangqing'?'15px':'0px',
				borderBottom:this.$route.name!='xiangqing'?'none':'1px solid #f2f2f2',
				// state:this.$route.name=='xiangqing'?0:this.$parent.state,//等待报价
				list:this.$route.name=='xiangqing'?-1:this.$parent.list,//判断如果是弹出框的话到底是3.确定运费与发货还是4.验收与收货
				name:this.$route.name,//判断是xiangqing还是orderView:list=3,4
				right:this.$route.name=='xiangqing'?'-80px':'-300px',
				w:this.$route.name=='xiangqing'?'944px':'620px;',//如果是弹出框则是620，如果是购物车收货点击的新路由就是944
				fangdatuShow:false,//控制放大图的显示和隐藏
				isshouhuo:false,//确认收货弹出框的变量
				where:'begin',//是从哪里进来的，begin是开始验苗  look是查看验苗报告
				datas:'no'
				
			}                                                                                                                                                                                                                                                                                  
		},
		components:{                                                                                                                                                                                                                                                                                      
			'headers':headers,
			"fangdatu":fangdatu
		},
		mounted(){
			var that=this
  if(this.$route.name=='xiangqing'){
			  // 买方购物车运单详情的接口
           $.get(Boss+'purchaseTrade/'+this.$route.params.objectId,{'sessiontoken':sessiontoken},function(data){
           	    JSONS(data,'买方运单详情')
           	    that.datas=data.results
           	    if(data.results.ship_type_collect[0]=='买家自提苗木'){
           	    	return
           	    }
           	    setTimeout(function(){
        var map = new BMap.Map("map0");            // 创建Map实例
		var point = new BMap.Point(data.results.delivery_coordinate.longitude, data.results.delivery_coordinate.latitude); // 创建点坐标
		map.centerAndZoom(point,15);                 
		map.enableScrollWheelZoom();
		map.disableDragging()
		var myIcon = new BMap.Icon("/static/tu-gouwuche/1-20.png", new BMap.Size(28,37));
	var marker2 = new BMap.Marker(point,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);              // 将标注添加到地图中
	
	},200)
           	                   
           })
}else{
			  // 卖方运单详情的接口
		   if(that.list==1){
		   	var adress='supply'
		   }else if(that.list==2){
		   	var adress='supplyOrders'
		   }else if(that.list==3){
		   	var adress='supplyShipment'
		   }else if(that.list==4){
		   	var adress='supplyTrade'
		   }else if(that.list==5){
		   	var adress='supplyOrders'
		   }
           $.get(Boss+adress+'/'+this.$route.params.objectId,{'sessiontoken':sessiontoken},function(data){
           	    JSONS(data,'卖方运单详情')
           	    that.datas=data.results 
           	    if(that.list==1){
           	    	if(data.results.current_price==-1){
                        that.current_price=0
           	    	}else{
           	    		that.current_price=data.results.current_price 
           	    	}
           	    	
           	    }
           	    
           	    if(that.list==4){
           	    	setTimeout(function(){
        var map = new BMap.Map("map0");            // 创建Map实例
		var point = new BMap.Point(data.results.delivery_coordinate.longitude, data.results.delivery_coordinate.latitude); // 创建点坐标
		map.centerAndZoom(point,15);                 
		map.enableScrollWheelZoom();
		map.disableDragging()
		var myIcon = new BMap.Icon("/static/tu-gouwuche/1-20.png", new BMap.Size(28,37));
	var marker2 = new BMap.Marker(point,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);              // 将标注添加到地图中
	
	},200)
           	    }       	                   
           })
}
			
	      

		},
		methods:{
// 价格输入框最多只能输入两位小数
Onlytwo(e,num){
	 var val=$(e.currentTarget).val()
      if(val.indexOf('.')!=-1){
          if(val.toString().split(".")[1].length>2){
               alert("最多只能输入两位小数")
               if(num==1){
               	// 第一模块的价格报价
               	this.current_price=''
               }else if(num==3){
               	// 第三模块的价格报价
               	this.baojiaVal=''
               }
               
          }
      }

  },
// // XX月XX日 星期X XX:XX
formatDate(timi) {
	// alert(timi)
	if(timi==''){
		return
	}
          var t = timi.replace('年','-').replace('月','-').replace('日','')
          var now = new Date(t)
          var year=now.getFullYear();;
          var month=now.getMonth()+1;
          var date=now.getDate();
          var hour=now.getHours();
            if(month<10){
			    	month = '0'+month
			    }

          if(hour<10){
            hour = '0'+hour
          }
          var minute=now.getMinutes();
        if(minute<10){
            minute = '0'+minute
          }
        var day = now.getDay()
        if(day==0){
          day = '天'
        }else if(day == 1){
          day = '一'
        }else if(day == 2){
          day = '二'
        }else if(day == 3){
          day = '三'
        }else if(day == 4){
          day = '四'
        }else if(day == 5){
          day = '五'
        }else if(day == 6){
          day = '六'
        }
          
          	return month+"月"+date+"日 "+"星期"+day+" "+hour+":"+minute;
          
          
      },
			// 点击放大图出现
liclick(e,item){
	 this.fangdatuShow=true

         this.$store.state.fangdatuItem=item
     },
		  // 绿色的确认收货弹出框的确定按钮
		  shouhuo(e){
		  	var that=this
		  	// 点击收货，然后请求完就刷新页面
		  	$.post(Boss+'purchaseTrade/'+this.$route.params.objectId+'/confirm',{'sessiontoken':sessiontoken},function(data){
		  		JSONS(data,'点击收货')
		  		 location.reload()
		  		that.isshouhuo=false

		  	})
		  	
		  	
		  },
// 卖方的第一部分的发送新报价
sendNew(){
	var that=this
		// 卖方完成 报价
		$.post(Boss+'supply/offering',{'sessiontoken':sessiontoken,'supplyId':this.datas.objectId,'current_price':this.current_price},function(data){
			 if(data.status==1){
			// 	if(that.datas.current_price!=that.current_price){
			// 		// 修改上一次的价格
			// 		that.datas.original_price=that.datas.current_price
			// 	}
			// 	// 修改列表的价格和详情的价格
			// 	// that.datas.current_price=that.current_price
			 that.$parent.datas[($("li[classing="+that.$route.params.objectId+"]").index())-1].current_price=that.current_price
			 // alert($("li[classing="+that.$route.params.objectId+"]").index())
		 //  //       that.priceKuang=false
		 //  //       that.hasdo=false
		              that.hasing=false
			 }
		})
},
// 卖方的第一部分的修改价格的时候变完成按钮，并且价格框出现
changes(e,index){
	var that=this
	// 卖方更改苗木报价
	if(index==0){
		this.priceKuang=true
		this.hasdo=true//控制显示完成
		this.hasing=false//控制显示绿色的报价
		
	}else{
		// 卖方完成 报价
		if(that.current_price==0){
			alert("价格必须大于0")
			return
		}
				if(that.datas.current_price!=that.current_price){
					// 修改上一次的价格
					that.datas.original_price=that.datas.current_price
				}
				// 修改列表的价格和详情的价格
				that.datas.current_price=that.current_price
				
		        that.priceKuang=false
		        that.hasdo=false
		        that.hasing=true
			}
		
		
	
},
// 卖方的第一部分的修改价格的弹出框事件
			// 加号
clicks(e,type){
	// alert(123)
	var that=this
  if(type==1){//1加号

         	this.current_price=parseInt(this.current_price)+1

  }else if(type==-1){

         if(parseInt(this.current_price)-1==0){//2减号
         	return
         }        
        this.current_price=parseInt(this.current_price)-1

  }    
			},
// 第一部分卖方的承接交易和拒绝承接的弹出框的确定按钮
yiKuangOk(e,flag){
	// Order - 卖方 - 从采购单中确认/暂缓交易
	var that=this

   if(flag==1){
   	// 承接交易
   	$.post(Boss+'supply/confirm',{'sessiontoken':sessiontoken,'supplyId':this.datas.objectId,'current_price':this.datas.current_price},function(data){
   		  JSONS(data,'承接交易')
   		   if(data.status==1){
   		   // 返回列表并将对应的状态更新为等待买家确认交易
        	that.$parent.datas[($("li[classing="+that.$route.params.objectId+"]").index())-1].supply_status=150
        	that.$parent.datas[($("li[classing="+that.$route.params.objectId+"]").index())-1].current_price=that.datas.current_price
        	// alert($("li[classing="+that.$route.params.objectId+"]").index())
        	that.$parent.xiangqings=false
        }
   	})
   }else{
   	// 拒绝承接交易
   	$.post(Boss+'supply/refuse',{'sessiontoken':sessiontoken,'supplyId':this.datas.objectId},function(data){
   		  JSONS(data,'拒绝承接')
   		  if(data.status==1){
   		  		// 返回列表并将对应的删除，删除后的将在第5部分出现
        	that.$parent.datas.splice(($("li[classing="+that.$route.params.objectId+"]").index())-1,1)
        	that.$parent.xiangqings=false
   		  }
   	})
   }

},
// 第一部分的承接交易的时候如果价格是面议 则要弹出改价提示
cjjys(){
	  if(this.datas.current_price==''||this.datas.current_price==-1){
         alert('要改价后才能承接')
	  }else{
	  	 this.cjjyKuang=true
	  }
    
},

// 第二部分卖方的确认交易和交易暂缓的弹出框的确定按钮
erKuangOk(e,flag){
	// Order - 卖方 - 从采购单中确认/暂缓交易
	var that=this
$.post(Boss+'supplyOrders',{"flag":flag,"sessiontoken":sessiontoken,"supplyId":this.datas.objectId},function(data){
        JSONS(data,'从采购单中确认/暂缓交易')
        if(data.status==1){
        	that.jyzhKuang=false
        that.qrjyKuang=false
        if(flag==1){
        	// 返回列表并将对应的状态更新为等待买家填写运单
        	that.$parent.datas[($("li[classing="+that.$route.params.objectId+"]").index())-1].supply_status=521
        }else if(flag==-1){
        	// 返回列表并将对应的删除，删除后的将在第一部分出现
        	that.$parent.datas.splice(($("li[classing="+that.$route.params.objectId+"]").index())-1,1)
        }
        that.$parent.xiangqings=false
        }
        
})

},
// 第三部分点击运费报价和更改报价
supplys(e,who){
	if(who=='运费报价'){
		this.ors='yfbj'
	}else{
		this.ors='ggbj'
	}
	this.supplykuang=true
},
// 第三部分卖方运费报价的弹出框鼠标放上和离开和点击的事件
supplyenter(e){
	$(e.currentTarget).removeClass("bgFFFFFFbg")
    $(e.currentTarget).addClass("bgF2F2F2bg")
},
supplyleave(e){
	$(e.currentTarget).removeClass("bgF2F2F2bg")
   $(e.currentTarget).addClass("bgFFFFFFbg")
},
supplyclick(e,num){
	$(e.currentTarget).removeClass("bgFFFFFFbg")
	$(e.currentTarget).removeClass("bgF2F2F2bg")
	$('.yan').removeClass("bg269C88bg")
	$(e.currentTarget).addClass("bg269C88bg")
	this.issupply=true
	// this.check_type=$(e.currentTarget).attr("type")
},
// 第三部分卖方运费报价的弹出框的取消按钮
supplycal(e){
	this.supplykuang=false
	this.issupply=false
},
// 第三部分卖方运费报价的弹出框的确定按钮
supplyok(e){
	if(this.issupply==true){

			this.supplykuang=false
	        this.supplyinput=true
	        this.issupply=false
	}


},
// 第三部分卖方请填写您的运费价格的取消按钮
inputcal(e){
	this.supplyinput=false
	this.baojiaVal=''
},
// 第三部分卖方请填写您的运费价格的确定报价和确定更改按钮
inputok(e,num){
	var that=this
	if(this.baojiaVal.length>0){
		// 卖方 - 卖家修改报价（运费）
		$.post(Boss+"supplyShipment/"+this.datas.objectId+"/freight",{'transport_type':'由我提供承运商','freight':this.baojiaVal,'sessiontoken':sessiontoken},function(data){
			console.log(data)
			if(data.status==1){
				that.supplyinput=false
            //1. 改变当前运单的状态码
				that.datas.shipment_status=620
		    //2. 改变当前运单的父元素状态码
				that.$parent.datas[($("li[classing="+that.$route.params.objectId+"]").index())-1].shipment_status=620
			//3. 改变当前父元素的合计
				that.$parent.datas[($("li[classing="+that.$route.params.objectId+"]").index())-1].total_price=that.$parent.datas[($("li[classing="+that.$route.params.objectId+"]").index())-1].total_price-that.datas.current_freight+parseFloat(that.baojiaVal)
			//4. 如果是确定报价，则将等待报价变成具体的运费价格
				if(num==1){
					that.datas.original_freight=that.baojiaVal
				}
			//5. 改变当前运单运费的值
				that.datas.current_freight=that.baojiaVal
			//6. 清空运费输入框
				that.baojiaVal=''




			}
			

		})
			
	}


},
// 第三部分卖方的发货按钮
fahuosok(e){
	var that=this
    		$.post(Boss+"supplyShipment/"+this.datas.objectId+"/delivery",{'sessiontoken':sessiontoken},function(data){
			console.log(data)
			if(data.status==1){
				// 点击发货成功后该运单将提交到下一个环节，则这个环节要删除这个运单
				that.$parent.datas.splice(($("li[classing="+that.$route.params.objectId+"]").index())-1,1)
	            that.fahuos=false
	            that.$parent.xiangqings=false
			}
			

		})
}
		 
		}
	}
</script>
<style	scoped>
	p{margin:0;}
.borderR{border-right: 1px solid #F1F1F1;}
.m0p0{padding-right:0 !important;margin-right: 0 !important;}
.bg269C88bg{background:#269C88 !important;color:white !important; }
.bgF2F2F2bg{background:#F2F2F2}
.bgFFFFFFbg{background:#FFFFFF}
.flyTop{position: relative;
    top: -40px;}
.ownti{padding:10px 0 28px 0 !important;}
.ownb{border:none !important;}
/*限制输入框为数值类型，但是去掉默认的上下箭头*/
/*在chrome下：*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0; 
}
/*Firefox下：*/
input[type="number"]{-moz-appearance:textfield;}
</style>