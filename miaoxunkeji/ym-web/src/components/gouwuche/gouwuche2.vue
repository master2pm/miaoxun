
<template>
	<div style="">
		<!-- 共14种，已选0种 -->
		<div style="padding:0 20px;height:25px;line-height:25px;background:#F2F2F2;" class="f12 c999899">
			<!-- 勾选按钮上 -->
			<img @click="gouxuanparent($event)" src="/static/tu-gouwuche/1-48.png" alt="" class="relative parent cursor" style="height: 14px;top:-2px;margin-right:17px;">共{{gouwuche2C}}种，已选{{treeLength}}种
			<span class="rf cursor" @click="allDel($event)" >删除全部</span>
		</div>
		<div style="display:none;">
			{{watch}}
		</div>
		<div	class="listf"  :style="{height:height}">

<!-- @scroll="scrolls($event)" animated zoomIn-->
			<ul  id="gouwucheLoads"  class="list relative  flow-default "  :style="{height:height}" style="overflow-y:scroll;padding:0 20px;" >
				<li v-if="datas.length>0" :ids="item.objectId" :sonId="item.tree.objectId" @mouseenter="opens($event,item.tree.objectId,index)" @mouseleave="closes($event,item.tree.objectId,index)" v-for="(item,index) in datas" style="border-bottom:1px solid #F2F2F2;height:145px;padding:20px 0;" class=" relative" >
					<!-- 勾选按钮列表 -->
					<img @click="gouxuanson($event,'son',item.check_status)" :type="item.check_status" :status="item.check_status"  src="/static/tu-gouwuche/1-48.png" alt="" class="czjz cursor lf son" :class="{opacitys:item.check_status=='410'||item.check_status=='420'}" style="height: 14px;opacity:0.1;">

					<div class="overflow " style="margin-left:23px;">
						<p class="c4A494B f18 " style="margin-bottom:8px;padding-left:7px;"><span @click="showme(item.tree.objectId)" class="cursor">{{item.tree.mu_name.length>8?item.tree.mu_name.substring(0,8):item.tree.mu_name}}</span> 
						<span v-if="item.tree.mu_name.length>8">...</span> 
						<span class="type f12">{{item.tree.mu_type!=undefined?item.tree.mu_type.substring(0,1):''}}</span></p>
						<div @click.stop="liclick($event,item.tree,item.tree.mu_photo.length)"	:class="{border80:indexb!=index}" class="lf">
							<img :src="item.tree.mu_photo.length>0?item.tree.mu_photo[0].url+'?imageView2/1/w/65/h/115':'/static/tu-gouwuche/1-36.png'"  alt="" :imgs="item.tree.objectId" class="fangda cursor " style="width:65px;height:115px;" :class="{borderL1:indexa==index,borderB1:indexa!=index}">
						</div>

						<div class="lf " style="margin-left:10px;margin-top:5px;">
						 	<!-- 假 地  盆 -->
	 	<div v-if="item.tree.mu_type!='草坪'" 	style="height:55px;" class="">
	      	     		<p v-if="item.tree.mu_type!='袋苗'&&(item.tree.mu_mj_min!=''||item.tree.mu_mj_max!='')" class="c4A494B f12 ">
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
							
	      	   
	      	     		</p>
	      	     		<p  v-if="item.tree.mu_type!='袋苗'&&(item.tree.mu_dj_min!=''||item.tree.mu_dj_max!='')"  class="c4A494B f12 ">
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
	      	     		</p>
	      	     		<p class="c4A494B f12 " v-if="item.tree.mu_type!='袋苗'" >
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
	      	     		</p>

	      	     	<!-- 袋 -->
	      	     
	      	     	<p v-if="item.tree.mu_type=='袋苗'&&(item.tree.mu_zg_min!=''||item.tree.mu_zg_max!='')" class="c4A494B f12 ">
	      	     	         {{item.tree.mu_package_weight}}斤袋 · 
	      	     	       自然高{{item.tree.mu_zg_min}}
							<!-- 点 -->
							<span  v-show="(item.tree.mu_zg_min!=''&&item.tree.mu_zg_max!=''&&item.tree.mu_zg_min!=item.tree.mu_zg_max)&&item.tree.mu_type=='袋苗'">- {{item.tree.mu_zg_max}}</span>
							cm
	      	     	<!-- 自然高{{item.tree.mu_zg_min}}-{{item.tree.mu_zg_max}}cm -->
	      	     	</p>
	      	     	
	      	     	<!-- 公用 冠幅 -->	
	      	     		<p class="c4A494B f12 ">
	      	     		<!-- 冠幅{{item.tree.mu_gf_min}}-{{item.tree.mu_gf_max}}cm -->
	      	     		 <span v-show="(item.tree.mu_gf_min!=''||item.tree.mu_gf_max!='')">冠幅{{item.tree.mu_gf_min}}
							<!-- - -->
							<span  v-show="(item.tree.mu_gf_min!=''&&item.tree.mu_gf_max!=''&&item.tree.mu_gf_min!=item.tree.mu_gf_max)">- {{item.tree.mu_gf_max}}</span>
							cm</span>
	      	     		</p>
</div>


<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div v-if="item.tree.mu_type=='草坪'" style='height:55px;' class="">
        <p class="f12 c4A494B">
              <span v-show="item.tree.lawn_length!=''&&item.tree.lawn_length!=undefined">长{{item.tree.lawn_length}}cm</span>
              <span v-show="item.tree.lawn_width!=''&&item.tree.lawn_width!=undefined"><span v-show="item.tree.lawn_length!=''&&item.tree.lawn_length!=undefined"> · </span>宽{{item.tree.lawn_width}}cm</span>
              <span v-show="item.tree.lawn_density!=''&&item.tree.lawn_density!=undefined"><span v-show="(item.tree.lawn_length!=''&&item.tree.lawn_length!=undefined)||(item.tree.lawn_width!=''&&item.tree.lawn_width!=undefined)"> · </span>密度{{item.tree.lawn_density}}%</span>
      </p>
         <p class="f12 c4A494B">
              <span v-show="item.tree.lawn_amount!=''&&item.tree.lawn_amount!=undefined">每捆数量{{item.tree.lawn_amount}}片</span>
      </p>
  </div>
							<p style="margin:5px 0;">
								<span class="c60B346 f18 " style="display:inline-block;">
								<span class="sonPrice"  :sonPrice="item.current_price=='-1'?'面议':item.current_price">
								{{item.check_status==-1||item.check_status==0?(item.tree.mu_price=='-1'?'面议':(item.tree.mu_type=='草坪'?'￥'+item.tree.mu_price+'/㎡':'￥'+item.tree.mu_price+'/株')):(item.current_price=='-1'?'面议':(item.tree.mu_type=='草坪'?'￥'+item.current_price+'/㎡':'￥'+item.current_price+'/株'))}}
								</span>
                                <span v-if="item.original_price!=item.current_price" class="f13 c999899" style="margin-left:30px;text-decoration:line-through;">{{item.original_price=='-1'?'面议':(item.tree.mu_type=='草坪'?'￥'+item.original_price+'/㎡':'￥'+item.original_price+'/株')}}</span>
								</span>
								
							</p>

							<p class="c999899 f12 diandiandian" style="line-height:25px;">{{item.tree.mu_province}}·{{item.tree.mu_city}}·{{item.tree.mu_ground.gg_name.length>10?item.tree.mu_ground.gg_name.substring(0,10):item.tree.mu_ground.gg_name}}
                       <span v-if="item.tree.mu_ground.gg_name.length>10">...</span></p>
						</div>
					</div>

					<div style='right:0;top:60px;' class=" absolute f12 c999899" >
						数量：<span class="sonCount">{{item.amount}}</span>{{item.tree.mu_type=='草坪'?'㎡':'株'}}
					</div>
					<!-- y -->
					<div style='right:0;bottom:20px;' class="absolute f12 c999899" >
						

<!-- @全体成员  最新的买方验苗列表 提示语  check_status=
  -1: 卖家已拒绝承接
   0: 等待卖家承接
 100: 确认交易
 200: 等待验苗木报告（灰）
 201: 开始验苗
 300: 查看验苗木报告(绿)
 410: 查看验苗报告（灰）（可交易）
 420: 不需要验苗 （可交易）
 500: 等待卖家确认交易 -->
						



						<!--1 卖家已拒绝承接 处理结果-->
						<div v-show="item.check_status==-1" class="right cC96832">卖家已拒绝承接</div>
						

						<!--2 等待卖家承接 处理结果-->
						<div v-show="item.check_status==0" class="right ">等待卖家承接</div>



                        <!--3 绿色确认交易 卖家操作完 买家确认订单-->
                         <div  v-show="item.check_status==100" class="right" style="margin-bottom:10px;">卖家已承接</div>
                         <div  v-show="item.check_status==100" @click="imgoks($event)" class="center rad  cursor c60B346" style="border:1px solid #60B346;height:30px;line-height:30px;width:112px;">确认交易</div>

						<div  class="wai_kuang" style="">
							<div class="center nei_kuang bai rad" style="width:550px;height:254px;">
								<p class="f26 c4A494B" style="margin:69px 0;">是否确认以此价钱与卖家进行交易？</p>
								<img @click="imgoksCan($event)"  style="width:275px;" src="/static/tu-gouwuche/1-82.png" alt="" class="cursor"><img @click="imgoksOk($event,item.objectId)" style="width:275px;"  src="/static/tu-gouwuche/1-83.png" alt="" class="cursor">

							</div>
						</div>




						<!--41 等待验苗报告灰200 苗讯验苗并承接并确认交易 -->
						 <div  v-show="item.check_status==200" class="right" style="margin-bottom:10px;">买家已确认交易</div>
<!--                          <div   class="center   cursor " style="height:30px;line-height:30px;width:112px;"></div> -->
                         <div v-show="item.check_status==200" class="right ">等待验苗报告</div>
						
<!-- 当勾选发起购买的时候  勾选的灰色查看验苗报告和不需要验苗按钮对应等待卖家确认付款与运输方式-->
                        <div  class="right" v-show="item.check_status==500">等待卖家确认</div>
						<div  class="right" v-show="item.check_status==500" style="margin-bottom:15px;">付款与运输方式</div>
						
                        
<!-- 查看验苗报告和不需要验苗都是对应买家已确认交易    -->
                        <div v-show="item.check_status==420||item.check_status==410||item.check_status==300" class="right" style="margin-bottom:10px;">买家已确认交易</div>


                        <!--42 灰色的查看验苗报告410 买家确认交易后全部验完合格-->
						<router-link target="_blank"  :to="{name:'baogao',params:{objectId:item.objectId,where:'look',shipment_id:0,carriage_id:0}}">
						<div v-show="item.check_status==410"  class="center rad border cursor" style="height:30px;line-height:30px;width:112px;color:#999899 !important;">查看验苗报告</div>
						</router-link>


						<!--43 绿色的查看验苗报告300 买家确认交易后没有全部验完合格 -->
						<router-link target="_blank"  :to="{name:'baogao',params:{objectId:item.objectId,where:'look',shipment_id:0,carriage_id:0}}">
						<div v-show="item.check_status==300" class="center rad  cursor c60B346" style="border:1px solid #60B346;height:30px;line-height:30px;width:112px;color:#60B346 !important;">查看验苗报告</div>
                        </router-link>


						<!--44 绿色的开始验苗201 买家确认交易后自己进行验苗-->
                          <div  v-show="item.check_status==201"  class="right" style="margin-bottom:10px;">买家已确认交易</div>
                        <router-link target="_blank"  :to="{name:'baogao',params:{objectId:item.objectId,where:'begin',shipment_id:0,carriage_id:0}}">
                        <div  v-show="item.check_status==201"  class="center rad  cursor c60B346" style="border:1px solid #60B346;height:30px;line-height:30px;width:112px;">开始验苗</div>
                        </router-link>


						<!--45 不需要验苗420 买家确认交易后不需要验苗-->
						<div v-show="item.check_status==420" class="right">不需要验苗</div>
						
					</div>

					<!-- 删除按钮 200等待验苗报告不能删除-->
					<img @click="tckopen($event,item.objectId,index)" :iscan="item.check_status=='200'?'no':'yes'" src="/static/tu-gouwuche/1-49.png" alt="" class="close absolute" style="right:0;top:20px;display:none;">

				</li>
<!-- 滚动的动画 -->
	      	<!-- <li v-show="gif==true" class="center" style="padding:30px;"><img src="/static/tu-gouwuche/zhuan.gif" alt=""></li> -->
<!-- 提示无更多 -->
	      	<!-- <li v-show="gif==false" class="center c999899 f12" style="padding:30px;">没有更多苗木啦</li> -->
<li  class="center c999899 f12"></li>
			</ul>
		</div>
<!-- 删除单个的254 -->
		<div v-if="tanchukuang==true" class="wai_kuangs" style="">
			<div class="center nei_kuang bai rad" style="width:400px;height:252px;">
				<p class="f26 c4A494B" style="margin:69px 0;">确认删除苗木？</p>
				<!-- <img @click="quxiao"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor"><img @click="queding" style="width:200px;"  src="/static/tu-gouwuche/1-77.png" alt="" class="cursor"> -->
                  <!-- 灰色的取消按钮 -->
				       <button type=""  @click="quxiao" class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
                      <!-- 绿色的确定验苗 -->
                       <button type="" @click="queding"   class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">确定</button>
			</div>
		</div>
<!-- 删除全部的 -->
		<div v-if="tanchukuang2==true" class="wai_kuangs" style="">
			<div class="center nei_kuang bai rad" style="width:400px;height:252px;">
				<p class="f26 c4A494B" style="margin:69px 0;">确认删除苗木？</p>
				<!-- <img @click="quxiao2s"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor"><img @click="alldelted" style="width:200px;"  src="/static/tu-gouwuche/1-77.png" alt="" class="cursor"> -->
                     <!-- 灰色的取消按钮 -->
				       <button type=""  @click="quxiao2s" class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
                      <!-- 绿色的确定验苗 -->
                       <button type="" @click="alldelted"   class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">确定</button>
			</div>
		</div>


		<!-- 发起交易 -->
		<div style='height:35px;padding:10px 20px 10px 47px;' class="border-t relative">
			<div class="c676868 f12" >已选苗木<span class="c60B346">{{treeLength}}</span>种</div>
			<div class="c676868 f12" >合计(不含运费)：<span class=" f15 c60B346">{{isNaN(treePrice)?'待卖家填写报价':'￥'+treePrice}}</span></div>
			<img @click="next($event)"  :src="treeLength>0?'/static/tu-gouwuche/1_86.png':'/static/tu-gouwuche/1_87.png'" alt="" class="cursor czjz" style="right:40px;">
		</div>


		<!-- 发起购买的弹出框  540-->
		<div  class="wai_kuangs" v-if="nextkuang==true" style="">
			<!--请选择付款方式 -->
			<div  v-show="who=='one'" class="center nei_kuang bai rad " style="width:400px;height:538px;">
				<div class="f26 c4A494B border-b " style="height:157px;background:url(/static/tu-gouwuche/1-87.png) no-repeat 80px 10px;margin-top:59px;">
					<div	style="margin-bottom:39px;">请选择付款方式</div>
					<div	class="cF2F2F2">请选择运输方式</div>

				</div>

				<div  type="1" @click="yanmiaoclick($event,1)" @mouseenter="yanmiaoenter($event)" @mouseleave="yanmiaoleave($event)"  class="yan cursor f18 c676868 border-b" style="height:80px;line-height:80px;">苗木货到付款</div>
				<div  type="2" @click="yanmiaoclick($event,2)" @mouseenter="yanmiaoenter($event)" @mouseleave="yanmiaoleave($event)"    class="yan cursor f18 c676868 border-b" style="height:80px;line-height:80px;">苗木上车付款</div>
				<div type="3" @click="yanmiaoclick($event,3)" @mouseenter="yanmiaoenter($event)" @mouseleave="yanmiaoleave($event)"   class="yan cursor f18 c676868" style="height:80px;line-height:80px;">分期付款</div>

				<!-- <img @click="quxiao1($event)"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor"><img @click="queding1($event)" style="width:200px;"  :src="isyanmiao==false?'/static/tu-gouwuche/1-80.png':'/static/tu-gouwuche/1-81.png'" alt="" class="cursor"> -->
                   <button type=""  @click="quxiao1($event)" class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
                     <!-- 灰色的确定验苗 -->
                      <button type="" v-show="isyanmiao==false" class="layui-btn layui-btn-you layui-btn-primary" style="background:#F2F2F2;">下一步</button>
                      <!-- 绿色的确定验苗 -->
                       <button type="" @click="queding1($event)" v-show="isyanmiao!=false"  class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">下一步</button>


			</div>

			<!-- 清选择运输方式 -->
			<div  v-show="who=='two'" class="center nei_kuang bai rad " style="width:400px;height:538px;">
				<div class="f26 c4A494B border-b " style="height:157px;background:url(/static/tu-gouwuche/1-86.png) no-repeat 80px 10px;margin-top:59px;">
					<div	style="margin-bottom:39px;left:-12px;" class="relative">{{check_type==1?'苗木货到付款':check_type==2?'苗木上车付款':'分期付款'}}</div>
					<div	class="">请选择运输方式</div>

				</div>

				<div  type="1" @click="yanmiaoclick1($event,1)" @mouseenter="yanmiaoenter($event)" @mouseleave="yanmiaoleave($event)"  class="yan cursor f18 c676868 border-b" style="height:80px;line-height:80px;">买家自提苗木</div>
				<div  type="2" @click="yanmiaoclick1($event,2)" @mouseenter="yanmiaoenter($event)" @mouseleave="yanmiaoleave($event)"    class="yan cursor f18 c676868 border-b" style="height:80px;line-height:80px;">卖家运输苗木(运费另计)</div>
				<div type="3" class="yan  f18 c676868" style="opacity:0.4;height:80px;line-height:80px;">第三方物流运输</div>
				<!-- @mouseenter="yanmiaoenter($event)" @mouseleave="yanmiaoleave($event)" @click="yanmiaoclick1($event,3)" -->

				<!-- <img @click="quxiao2($event)"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor"><img @click="queding2($event)" style="width:200px;"  :src="isyanmiao2==false?'/static/tu-gouwuche/1-79.png':'/static/tu-gouwuche/1-78.png'" alt="" class="cursor"> -->
                 <button type=""  @click="quxiao2($event)" class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
                     <!-- 灰色的确定验苗 -->
                      <button type="" v-show="isyanmiao2==false" class="layui-btn layui-btn-you layui-btn-primary" style="background:#F2F2F2;">确认购买</button>
                      <!-- 绿色的确定验苗 -->
                       <button type="" @click="queding2($event)" v-show="isyanmiao2!=false"  class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">确认购买</button>


			</div>
		</div>


		<!-- 点击的放大图 -->
		<fangdatu v-if="fangdatuShow==true"></fangdatu>
	</div>
</template>
<script>
	import fangdatu from '../common/fangdatu.vue'

	export default{
		data(){
			return{
				page:1,//默认第一次请求为1
				// gif:this.$store.state.gif,//控制滚动的动画
				height:innerHeight-200+'px',
				buy:false,
				who:'',//付款方式one和运输方式two
				fangdatuShow:false,//控制放大图的显示和隐藏
				indexb:-1,//控制灰色背景的
				indexa:-1,//鼠标放上li图片出现绿色的边框线
				isyanmiao:false,//控制下一步按钮的颜色
				isyanmiao2:false,//控制确认购买按钮的颜色
				check_type:'',//付款方式 1=苗木货到付款，2=苗木上车付款，3=分期付款
				check_type2:'',//付款方式 1=买家自提苗木，2卖家运输苗木(运费另计)，3=第三方物流运输
				deletedId:'',//点击删除的弹出框的苗木id
				deletedIndex:'',//点击删除的弹出框的苗木index
				tanchukuang:false,//删除弹出框
				tanchukuang2:false,//全部删除的弹出框
				nextkuang:false,//验苗弹出框出现
				gouwuche2C:this.$store.state.gouwuche2C,//初选的数据
				treeLength:0,//勾选的树木的长度
				treePrice:'',//勾选树木的总价
				datas:this.$store.state.gouwuche2//初选的数据的总量
			}
		},
		components:{"fangdatu":fangdatu},
		computed:{
			watch(){
		this.datas=this.$store.state.gouwuche2//初选的数据
		this.gouwuche2C=this.$store.state.gouwuche2C//初选的数据的总量
		// this.gif=this.$store.state.gif//控制滚动的动画
	}
},
methods:{
		// 全部删除  如果没有勾选的东西则返回,否则就让删除全部的弹出框出现
	allDel(e){
		if($(".son[src='/static/tu-gouwuche/1-47.png']").length==0){
			return
		}
		this.tanchukuang2=true
	},
		// 滚动加载
// 	scrolls(e){
// 		var that=this
//        var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
//        var nScrollTop = 0;   //滚动到的当前位置
//        var nDivHight = $(e.currentTarget).height();
//          nScrollHight = $(e.currentTarget)[0].scrollHeight;
//          nScrollTop = $(e.currentTarget)[0].scrollTop;
// 　　　　　var paddingBottom = parseInt( $(e.currentTarget).css('padding-bottom') ),paddingTop = parseInt( $(e.currentTarget).css('padding-top') );
//          if(nScrollTop + paddingBottom + paddingTop + nDivHight >= nScrollHight){
//          	that.page++
//          	that.$store.commit("gouwuche2",{'page':that.page})
//          }
           
     

              
// 	},
  	showme(d){
				// 模拟地图被点击价格标
				console.log($(".ditu #"+d))
				$(".ditu #"+d).click()
			},
// 确认交易的按钮让对应的弹出框出现
imgoks(e){

	$(e.currentTarget).next().css("display","block")
},
// 确认交易的按钮让对应的弹出框的确定按钮---变成等验苗报告状态
imgoksOk(e,checkId){
	// 买方 确认交易 
	var that=this
	var aa=$(e.currentTarget)
		$.post(Boss+"check_operater/confirm",{"sessiontoken":sessiontoken,'checkId':checkId},function(data){
		console.log(data)
		aa.parent().parent().css("display","none")

		 that.$store.commit("gouwuche2",{'page':1})
	})
	
},
// 确认交易的按钮让对应的弹出框的取消按钮
imgoksCan(e){
	$(e.currentTarget).parent().parent().css("display","none")
},
// 点击删除全部弹出框的取消按钮
quxiao2s(){
	this.tanchukuang2=false
},
// 点击删除全部弹出框的删除按钮
alldelted(){

	var that=this
		// 已选多少种
	 var arr=[]
	 var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
	 for (var i = 0; i < tree.length; i++) {
	 	var ids=$(tree[i]).attr('ids')
	 	arr.push(ids)
	 }
	 if(arr.length>1){
          var bb=arr.join(',')
	 }else{
	 	 var bb=arr[0]
	 }
	$.ajax({
		url:Boss+"check_operater",
		type: 'DELETE',
		data:{
			"sessiontoken":sessiontoken,
			"checkId":bb//指定删除的 checkId，/api/v1/check_operater 查看已发起的验苗木数据中取得对应的 objectID
		},
		success: function(data) {
                    	that.tanchukuang=false
                    	that.deletedId=''
                    	that.deletedIndex=''
                          // 调用更新已选择的树木长度
                          that.$store.commit("gouwuche2",{'page':1})

                          //that.$store.state.gouwuche2C=that.$store.state.gouwuche2C-tree
                          
                          that.tanchukuang2=false
                          $(".son").attr('src','/static/tu-gouwuche/1-48.png')
	                      $(".parent").attr('src','/static/tu-gouwuche/1-48.png')
	                      that.gouxuantree()
                      }
                  });



},
// 点击放大图出现
liclick(e,item,length){
	  if(length==0){
  	return
  }
	this.fangdatuShow=true

	this.$store.state.fangdatuItem=item
},
yanmiaoenter(e){
	$(e.currentTarget).removeClass("bgFFFFFFbg")
	$(e.currentTarget).addClass("bgF2F2F2bg")
},
yanmiaoleave(e){
	$(e.currentTarget).removeClass("bgF2F2F2bg")
	$(e.currentTarget).addClass("bgFFFFFFbg")
},
// 付款方式的点击事件
yanmiaoclick(e,num){
	$(e.currentTarget).removeClass("bgFFFFFFbg")
	$(e.currentTarget).removeClass("bgF2F2F2bg")
	$('.yan').removeClass("bg269C88bg")
	$(e.currentTarget).addClass("bg269C88bg")
	this.isyanmiao=true
	this.check_type=$(e.currentTarget).attr("type")
},
// 运输方式的点击事件
yanmiaoclick1(e,num){
	$(e.currentTarget).removeClass("bgFFFFFFbg")
	$(e.currentTarget).removeClass("bgF2F2F2bg")
	$('.yan').removeClass("bg269C88bg")
	$(e.currentTarget).addClass("bg269C88bg")
	this.isyanmiao2=true
	this.check_type2=$(e.currentTarget).attr("type")
},
// 发起购买的付款方式弹出框的确定按钮
queding1(e){
	var that=this
	// 绿色的确认验苗按钮
	// if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-81.png'){
		this.who='two'
	// }

},
// 发起购买的付款方式弹出框的取消按钮
quxiao1(e){
	this.nextkuang=false
},
// 发起购买的运输方式弹出框的确定购买按钮
queding2(e){
	var that=this
	// 灰色的时候不能点击
	// if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-79.png'){
		// return	
	// }
	// 选择已全合格的拟定单发起交易
	console.log(this.check_type)
	console.log(this.check_type2)
var check_ids=[]
// 绿色被勾选的图片的ids
var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
for (var i = 0; i < tree.length; i++) {
	var ids=$(tree[i]).attr("ids")
	check_ids.push(ids)
}
console.log(check_ids)
	
	$.post(Boss+'orderCommit',{
		'sessiontoken':sessiontoken,
		'pay_type':this.check_type,//付款方式：1=货到付款；2=上车付款；3=分期付款；
		'ship_type':this.check_type2,//运输方式：1=买家自提苗木；2=卖家包运苗木；3=第三方物流；
		'check_ids':check_ids.join(',')//拟定单ID，多个以','分隔, 从GET:/api/v1/check_operater 中取得  [111,2222].join(',')
	},function(data){
		console.log(data)
		that.who=''
	that.nextkuang=false
	 that.$store.commit("gouwuche2",{'page':1})
	$(".son").attr('src','/static/tu-gouwuche/1-48.png')
	$(".parent").attr('src','/static/tu-gouwuche/1-48.png')
	})
	
},
// 发起购买的运输方式弹出框的取消按钮
quxiao2(e){
this.who=''
	this.nextkuang=false
	
},
// 发起交易的按钮    验苗弹出框出现
next(e){
	// 灰色的时候不可以
	if($(e.currentTarget).attr('src')=='/static/tu-gouwuche/1_87.png'){
		return
	}
	this.nextkuang=true
	this.who='one'
},
// 勾选的棵树有多少
gouxuantree(){
	// 已选多少种
	this.treeLength=$(".son[src='/static/tu-gouwuche/1-47.png']").length
	//this.$store.state.gouwuche2C=this.$store.state.gouwuche2.length
	// alert(this.$store.state.gouwuche2C)
	 // 合计不含运费

	 var all=0
	 var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
	 for (var i = 0; i < tree.length; i++) {
	 	var price=$(tree[i]).find(".sonPrice").attr('sonPrice')
	 	var count=$(tree[i]).find(".sonCount").html()
	 	console.log(price,count)
	 	all+=price*count
	 }
	 this.treePrice=all
	 
	},
// 勾选按钮
gouxuanson(e,who,status){
	// 如果点击的勾选状态不是以下的两种情况，则返回，不能勾选
	//1.查看验苗报告（灰）410（可交易）;
	//2.不需要验苗 420 （可交易）;

console.log(status)
	if(status=='410'||status=='420'){
	// 1.未选状态的时候让他变选择状态
	if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-48.png'){

		$(e.currentTarget).attr("src",'/static/tu-gouwuche/1-47.png')
			$(".parent").attr("src",'/static/tu-gouwuche/1-47.png')
	}else if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-47.png'){
	// 2.选择状态的时候让他变未选状态
	$(e.currentTarget).attr("src",'/static/tu-gouwuche/1-48.png')
		if($(".son[src='/static/tu-gouwuche/1-47.png']").length==0){
			$(".parent").attr("src",'/static/tu-gouwuche/1-48.png')
		}
}
// 调用更新已选择的树木长度
this.gouxuantree()
}else{
	return
}
},
// 勾选按钮
gouxuanparent(e){
console.log(status)
if($(".son[status='410']").attr("src",'/static/tu-gouwuche/1-47.png').length==0&&$(".son[status='420']").attr("src",'/static/tu-gouwuche/1-47.png').length==0){
	return
}
	// 1.未选状态的时候让他变选择状态
	if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-48.png'){
		$(e.currentTarget).attr("src",'/static/tu-gouwuche/1-47.png')

			$(".son[status='410']").attr("src",'/static/tu-gouwuche/1-47.png')
			$(".son[status='420']").attr("src",'/static/tu-gouwuche/1-47.png')
		
	}else if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-47.png'){
	// 2.选择状态的时候让他变未选状态
	$(e.currentTarget).attr("src",'/static/tu-gouwuche/1-48.png')
		    $(".son[status='410']").attr("src",'/static/tu-gouwuche/1-48.png')
			$(".son[status='420']").attr("src",'/static/tu-gouwuche/1-48.png')
	}

// 调用更新已选择的树木长度
this.gouxuantree()

},
// 叉子消失
closes(e,d,index){
	$(e.currentTarget).find(".close").css("display","none")
	this.indexa=-1
	$(".ditu #"+d).removeClass("z_1000")
				// 如果含有一个记忆hui的class，移除hui，添加clickbjs  clickbks
				if($(".ditu #"+d).hasClass("hui")){
					$(".ditu #"+d).addClass("clickbjs")
					$(".ditu #"+d).removeClass("hui")
					$(".ditu #"+d).find(".san").addClass("clickbks");  
				}else{
					// 否则恢复绿色
					$(".ditu #"+d).css({"backgroundColor":"#34AD4A","borderColor":'#DBDFDF'})
					$(".ditu #"+d).find(".san").css({"borderTop":"6px solid #34AD4A"})
				}
			},
// 叉子出现
opens(e,d,index){
	$(e.currentTarget).find(".close").css("display","block")
	this.indexa=index
	$(".ditu #"+d).addClass("z_1000")
				// console.log($(".ditu #"+d))
				// 如果一开始是灰色的价格条，则加一个记忆hui的class，移除clickbjs  clickbks
				if($(".ditu #"+d).hasClass("clickbjs")&&$(".ditu #"+d).hasClass("fu")){
					$(".ditu #"+d).removeClass("clickbjs")
					$(".ditu #"+d).addClass("hui")
					$(".ditu #"+d).find(".san").removeClass("clickbks");         
				}

                // 设置橙色
                $(".ditu #"+d).addClass("z_1000")
                $(".ditu #"+d).css("background","#F16622")
                $(".ditu #"+d).css("borderColor","#DBDFDF")
                $(".ditu #"+d).find(".san").css("border-top","6px solid #F16622") 
            },
// 点击叉子出现删除弹出框
tckopen(e,id,index){
	// // 如果自定义属性是等待验苗报告则不能删除
	// if($(e.currentTarget).attr("iscan")=='no'){
	// 	return
	// }
	this.tanchukuang=true
	this.deletedId=id
	this.deletedIndex=index
},
// 弹出框取消按钮
quxiao(){
	this.tanchukuang=false
	this.deletedId=''
	this.deletedIndex=''
},
// 弹出框确定按钮 发起交易- 买方删除拟定交易删除苗木
queding(){
	var that=this
	$.ajax({
		url:Boss+"check_operater",
		type: 'DELETE',
		data:{
			"sessiontoken":sessiontoken,
			"checkId":this.deletedId//指定删除的 checkId，/api/v1/check_operater 查看已发起的验苗木数据中取得对应的 objectID
		},
		success: function(data) {
                    	that.tanchukuang=false
                          // 调用更新已选择的树木长度
                           $(".son").attr('src','/static/tu-gouwuche/1-48.png')
	                      $(".parent").attr('src','/static/tu-gouwuche/1-48.png')
	                      that.$store.state.gouwuche2.splice(that.deletedIndex,1)
                        that.$store.state.gouwuche2C--
	                     
	                    
	                      that.deletedId=''
                    	that.deletedIndex=''
                          //that.$store.commit("gouwuche2")
                          that.gouxuantree()
                      }
                  });


}

},
mounted(){
			//alert(innerHeight)
			
			   // this.$store.commit("gouwuche2",{'page':1})
			  this.$store.state.gouwuche2=[]
           this.$store.commit('loads',{name:"gouwuche2"})


		}



		


	}

</script>
<style	scoped>
	.bg269C88bg{background:#269C88 !important;color:white !important; }
	.bgF2F2F2bg{background:#F2F2F2}
	.bgFFFFFFbg{background:#FFFFFF}
.opacitys{opacity:1 !important;}


	p{margin:0;}
</style>