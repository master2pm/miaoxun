
<template>
	<div style="">
         <!-- 时间的选择器 -->
         <div style="width:100%;height:560px;position:fixed;bottom:0;left:0;z-index:2000;" class="bai " v-if="minis==true">
         	 <div style="width:410px;height:560px;margin:0 auto;padding:20px;" >
         	 	<p class="c999899 f26" style="margin:10px 0;">{{formatDate(this.$store.state.currentTop.getTime,'0')}}<!-- 1月11日  星期六 --></p>
         	 	<p class="c4A494B f26"><span class="c269C88">{{minis1}}</span>时<span class="c269C88">{{minis2}}</span>分</p>
         	 	<div style="margin:0 auto;width:290px;margin-top:180px;" class="f40">
         	 		  <input  @blur="totwo(1)" v-model="minis1" placeholder="00" @paste="changes(1)"   @keyup="changes(1)"   class="c269C88 none" type="number" name="" max="23" min="00" style="width:70px;" >
         	 	      <span class="f40 c676868">时</span>
         	 	      <input @blur="totwo(2)" v-model="minis2" placeholder="00" @paste="changes(2)"  @keyup="changes(2)"  class="c269C88 none" type="number" name=""  max="59" min="00" style="width:70px;" >
         	 	      <span class="f40 c676868">分</span>
         	 	</div>
         	 	
         	 	<button @click="minisC($event)" :class="{bg999899:minis1.length<1||minis2.length<1,bg269C88:minis1.length>0&&minis2.length>0}" class="f12 layui-btn layui-btn-radius layui-btn-primary  spjz " style="color:white;bottom:30px;width:272px;height:31px;line-height:31px;border:1px solid white;">下一步</button>
         	 </div>
         </div>
		<div style="display:none;">
			{{watch}}
		</div>
		<div	class="listf "  :style="{'height':height1}">
<!--AA1 循环运单的名字 -->
            <ul  style=" height:30px;line-height:30px;margin-top:15px;border-bottom:1px solid #F2F2F2;padding-left:20px;margin-bottom:0;" class="center f15">

            <!-- 全部代运题目 -->
            	<li @click="doss(-1)" class="lf   cursor" :class="{c999899b:titleIndex!=-1,c676868b:titleIndex==-1}" style="padding:0 20px;">全部待运苗木
            	</li>

            <!-- 子运单题目 -->
                 <li v-show="sons.length!=0" @click="doss(Index)" v-for="(item,Index) in sons" class="lf   cursor" :class="{c999899b:titleIndex!=Index,c676868b:titleIndex==Index}" style="padding:0 20px;">运单{{Index+1}}
            	<img  @click="deleted($event,Index+1,item.objectId)" v-if="titleIndex==Index" src="/static/tu-gouwuche/1-54.png" class="relative" style="margin-left:10px;top:-2px;"></li>

            	
  
            </ul>

<!-- 删除运单的弹出框254 -->
		<div v-if="tanchukuang==true" class="wai_kuangs" style="">
			<div class="center nei_kuang bai rad" style="width:400px;height:252px;">
				<p class="f26 c4A494B" style="margin:69px 0;">确认要删除{{deletedName}}吗？</p>
				      <!-- 灰色的取消按钮 -->
				       <button type=""  @click="quxiao" class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
                      <!-- 绿色的确定验苗 -->
                       <button type="" @click="queding"   class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">确定</button>
				<!-- <img @click="quxiao"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor"><img @click="queding" style="width:200px;"  src="/static/tu-gouwuche/1-77.png" alt="" class="cursor"> -->
			</div>
		</div>


<!--全部代运的内容 -->
<div>	
<!-- 标签页和用车时间等 -->
	<div v-show="titleIndex!=-1">
		  				<div class="f15  c999899 relative" style="margin-top: 5px;height:50px;line-height:50px;padding:0 20px;">
				   <div  class="border-b">
				   	  预定到货时间
				   <div	class="c4A494B rf" style="margin-right:40px;">
				   	    {{formatDate('0',currentTop.getTime)}}
				   </div>
                   <img @click="carTime" src="/static/tu-gouwuche/1-51.png" alt="" class="czjz cursor" style="right:20px;">
				   </div>
				</div>
                <div class="f15  c999899 relative" style="height:50px;line-height:50px;padding:0 20px;">
				   <div  class="border-b">
				   	  目的地点
				   <div	class="c4A494B rf f13" style="margin-right:40px;">
				   	    {{currentTop.shipment_status==590?currentTop.getProvince+currentTop.getCity+currentTop.getAddress:currentTop.getPlace}}
				   </div>
                   <img @click="carPlace" src="/static/tu-gouwuche/1-52.png" alt="" class="czjz cursor" style="right:20px;">
				   </div>
				</div>
				    <div class="f15  c999899 relative " style="height:50px;line-height:50px;padding:0 20px;">
				   <div class="border-b">
				   	  运费
				   <div	v-if="titleIndex!=-1&&currentTop.shipment_status==600" class=" rf f13 cC96832" style="margin-right:40px;">
				   	    等待卖家报价
				   </div>
				   <div	class=" rf f13 c4A494B" style="margin-right:40px;">
				   	    {{currentTop.getGroup}}
				   	    <span v-if="titleIndex!=-1&&currentTop.shipment_status!=600"  style="margin-left:20px;">￥{{currentTop.getMoney}}</span>		
				   </div>
                   <img  src="/static/tu-gouwuche/1-53.png" alt="" class="czjz cursor" style="right:20px;">
				   </div>
				</div>
	</div>
			<ul  @scroll="scrolls($event)"  v-if="currentitem.length!=0" class="list layui-anim layui-anim-upbit" :style="{'height':titleIndex==-1?height:height2}" style="overflow-y:scroll;padding:0 20px;width:calc(100% - 40px);padding-bottom:20px;">
				<li :groupId="item.tree.mu_ground.group.objectId" :sonId="item.tree.objectId" @mouseenter="opens($event,item.tree.objectId,index)" @mouseleave="closes($event,item.tree.objectId,index)" v-for="(item,index) in currentitem" style="border-bottom:1px solid #F2F2F2;height:186px;padding:20px 0;"  class=" relative" >
					<!-- 勾选按钮列表 -->
					<img v-show="titleIndex==-1" :groupId="item.tree.mu_ground.group.objectId" @click="gouxuan($event,'son',item.tree.mu_ground.group.objectId)" src="/static/tu-gouwuche/1-48.png" alt="" class="czjz cursor lf son" style="height: 14px;">

					<div class="overflow " style="margin-left:23px;">
						<p class="c4A494B f18 " style="margin-bottom:8px;padding-left:7px;"><span @click="showme(item.tree.objectId)" class="cursor">
							{{item.tree.mu_name.length>8?item.tree.mu_name.substring(0,8):item.tree.mu_name}}</span> 
						<span v-if="item.tree.mu_name.length>8">...</span> 
						</span> <span class="type f12">{{item.tree.mu_type!=undefined?item.tree.mu_type.substring(0,1):''}}</span></p>
						<div @click.stop="liclick($event,item.tree,item.tree.mu_photo.length)"	:class="{border80:indexb!=index}" class="lf">
							<img  :src="item.tree.mu_photo.length>0?item.tree.mu_photo[0].url+'?imageView2/1/w/78/h/140':'/static/tu-gouwuche/1-36.png'"  alt="" :imgs="item.tree.objectId" class="fangda cursor "  :class="{borderL1:indexa==index,borderB1:indexa!=index}" style="width:78px;height:140px;">
						<!-- 	<img v-if="item.tree.mu_photo.length==0" src="/static/tu-gouwuche/1-36.png"  alt="" :imgs="item.tree.objectId"  :class="{borderL1:indexa==index,borderB1:indexa!=index}" style="width:78px;height:140px;"> -->
						</div>

						<div class="lf " style="margin-left:10px;margin-top:5px;">
							<!-- 假 地  盆 -->
	 	<div	v-if="item.tree.mu_type!='草坪'"  style="height:55px;" class="">
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
								<span  :sonPrice="item.current_price=='-1'?'面议':item.current_price" class="sonPrice">
								<!-- '￥'+item.current_price+'元/株' -->
								{{item.current_price=='-1'?'面议':(item.tree.mu_type=='草坪'?'￥'+item.current_price+'/㎡':'￥'+item.current_price+'/株')}}
								</span>
                                <span  v-if="item.original_price!=item.current_price" class="f13 c999899" style="margin-left:30px;text-decoration:line-through;">{{item.original_price=='-1'?'面议':(item.tree.mu_type=='草坪'?'￥'+item.original_price+'/㎡':'￥'+item.original_price+'/株')}}</span>
								</span>
								
							</p>
<!-- 数量 -->
<div class="relative  " style="height:27px;" v-if="titleIndex==-1">
<span class="f13 c676868 czjz" style="">已选{{item.tree.mu_type=='草坪'?'草坪':'苗木'}}</span>

			 <div style='width:107px;height:27px;background:url(/static/tu-gouwuche/1-37.png) no-repeat;display:inline-block;margin:0 10px 0 62px;' class="relative  " >
	      	     	<!-- jia -->
	      	     	<span class="czjz cursor" @click="clicks($event,'-1',item.wait_for_send_count)" style='left:0;width:25px;height:25px;'></span>
	      	     	<!-- input -->
	      	     	<input @keyup="clicks($event,'input',item.wait_for_send_count)"  value="0" class="czjz center none sonCount" type='text' style='left:28px;width:48px;height:20px;'>
	      	     	<!-- jian -->
	      	     	<span class="czjz cursor"  @click="clicks($event,'1',item.wait_for_send_count)" style='right:0;width:25px;height:25px;'></span>
	      	     </div>	      	     
<span class="f13 c676868 rf relative" style="top:3px;"> 待运{{item.tree.mu_type=='草坪'?'草坪':'苗木'}}{{item.wait_for_send_count}}{{item.tree.mu_type=='草坪'?'㎡':'株'}}</span>
<!-- amount -->
</div>
			

							<p class="c999899 f12" style="line-height:25px;">{{item.tree.mu_province}}·{{item.tree.mu_city}}·{{item.tree.mu_ground.gg_name.length>10?item.tree.mu_ground.gg_name.substring(0,10):item.tree.mu_ground.gg_name}}
                             <span v-show="item.tree.mu_ground.gg_name.length>10">	...</span>
							</p>
						</div>
					</div>
<!-- 查看验苗报告 选择不需要验苗意外的其他方式-->
					<div v-show="item.check_type!=0"  style='right:0;top:60px;'  class=" absolute f12 c999899" >
						<!-- <img  class="cursor" src="/static/tu-gouwuche/1-15.png" alt=""> -->
						<router-link target="_blank"  :to="{name:'baogao',params:{objectId:item.objectId,where:'looks',shipment_id:0,carriage_id:0}}">
						 <span class="cursor" style="color:#999899 !important;" >查看验苗报告
						 <img src="/static/tu-gouwuche/2-04.png" alt="" class="czjz" style="right:-10px;">
						 </span>
						 </router-link>
					</div>
<!--  选择不需要验苗方式-->
					<div  v-show="item.check_type==0"    style='right:0;top:60px;'  class=" absolute f12 c999899" >
						 <span class="cursor" style="color:#999899 !important;" :tt="item.check_type">不需要验苗
						 </span>
					</div>
<!-- 运输数量 子运单才有 -->
                     <div v-show="titleIndex!=-1" style='right:0;bottom:65px;' class="absolute f12 c676868" >
					     <span>运输数量：{{item.send_count}}{{item.tree.mu_type=='草坪'?'㎡':'株'}}</span>
					</div>
<!--付款-->
					<div style='right:0;bottom:35px;' class="absolute f12 c999899" >
					<!-- 上车付款 -->
					     <span v-show="item.pay_type==2">上车付款</span>
					<!-- 货到付款 -->
					     <span v-show="item.pay_type==1">货到付款	</span>
					<!-- 分期付款 -->
					     <span v-show="item.pay_type==3">分期付款	</span>
					</div>

					

				</li>
<!-- 滚动的动画 -->
	      	<li v-show="gif==true&&titleIndex==-1" class="center" style="padding:30px;"><img src="/static/tu-gouwuche/zhuan.gif" alt=""></li>
<!-- 提示无更多 -->
	      	<li v-show="gif==false&&titleIndex==-1" class="center c999899 f12" style="padding:30px;">没有更多苗木啦</li>
			</ul>
		</div>
		</div>	

		<!-- 发起交易 -->
		<div style='height:35px;padding:10px 20px 10px 47px;' class="bai border-t relative">
			<div class="c676868 f12" >已选苗木<span class="c60B346">{{treeLength}}</span>种</div>
			<div class="c676868 f12" >合计(不含运费)：<span class=" f15 c60B346">{{isNaN(treePrice)?'待卖家填写报价':'￥'+treePrice}}</span></div>


			<!-- 全部待运苗木    生成运单灰 绿 -->
			<img v-if="titleIndex==-1" @click="yundanCreat($event)"  :src="treeLength>0?'/static/tu-gouwuche/1-41.png':'/static/tu-gouwuche/1-40.png'" alt="" class="cursor czjz" style="right:40px;">



			<!--订单苗木  -->
			<!-- 1.等待报价 -->
			<img v-if="titleIndex!=-1&&currentTop.shipment_status==600"   src="/static/tu-gouwuche/1-44.png" alt="" class="cursor czjz" style="right:40px;">

			<!-- 2.确认运输 -->
			<img  @click="yundanok()"  v-if="titleIndex!=-1&&currentTop.shipment_status==605"   src="/static/tu-gouwuche/1-45.png" alt="" class="cursor czjz" style="right:40px;">

			<!-- 3.发起报价灰 -->
			<img v-if="titleIndex!=-1&&currentTop.shipment_status==590&&(currentTop.getTime.length==0||currentTop.getPlace.length==0)"   src="/static/tu-gouwuche/1-42.png" alt="" class="cursor czjz" style="right:40px;">

			<!-- 2.发起报价绿 -->
			<img v-if="titleIndex!=-1&&currentTop.shipment_status==590&&currentTop.getTime.length>0&&currentTop.getPlace.length>0" @click="yundanBao($event)"  src="/static/tu-gouwuche/1-43.png" alt="" class="cursor czjz" style="right:40px;">

<!-- // 买方shipment_status说明:
// 590:发起报价灰 绿
// 600:等待报价
// 605:确认运输
 -->

		</div>



<!-- 用车时间的弹出框-->
<div class="item item-buydate input-group" style="display: none;">
    <input class="txt-input txt-buydate no-border-left text-right" type="text" placeholder="请选择申购日期" readonly>

</div>


		<!-- 点击的放大图 -->
		<fangdatu v-if="fangdatuShow==true"></fangdatu>

		<!-- 目的地的的弹出框 -->
		<place v-if="wheres==true"></place>
		<!-- 提示运输数量不能为0 -->
		<div	class="wai_kuangs" v-show="nocan0==true">
				<div	class="nei_kuang bai rad center f26 c4A494B" style="width:400px;line-height:200px;height:200px;">
					运输数量不能为0
				</div>
		</div>	
		<!-- 提示运输数量不能为0 -->
		<div	class="wai_kuangs" v-show="chao0==true">
				<div	class="nei_kuang bai rad center f26 c4A494B" style="width:400px;line-height:200px;height:200px;">
					已超出交易的运输量
				</div>
		</div>	
			<!-- 提示切换标签将不保存用车时间和目的地点 -->
	<div	class="wai_kuangs" v-show="nosave==true">
<div	class="nei_kuang bai rad center f26 c4A494B" style="width:400px;height:250px;">
<p style="margin-top:50px;">切换标签将不保存当前运单的</p>
<p style="margin-bottom:50px;">	用车时间和目的地点</p>
<!-- 取消 -->
<!-- <img @click="nosave0()" src="/static/tu-gouwuche/1-75.png" alt="" class="border cursor" style="width:120px;margin-top:40px;margin-right:15px;"> -->
<!-- 确定 -->
<!-- <img @click="nosave1()" src="/static/tu-gouwuche/1-77.png" alt="" class="cursor" style="width:120px;margin-top:40px;"> -->
 <!-- 灰色的取消按钮 -->
<button type=""  @click="nosave0()" class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
<!-- 绿色的确定验苗 -->
<button type="" @click="nosave1()"   class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">确定</button>
</div>
</div>
	</div>
</template>
<script>
	import fangdatu from '../common/fangdatu.vue'
	import place from '../common/place.vue'

	export default{
		data(){
			return{
				minis1:'00',//时
				minis2:'00',//分
				minis:this.$store.state.minis,
				nosaveIndex:-2,
				nosave:false,//提示切换标签将不保存用车时间和目的地点
				chao0:false,//超载
				nocan0:false,//运输数量不能为0
                page:1,//默认第一次请求为1
				gif:this.$store.state.gif,//控制滚动的动画


				height:innerHeight-240+'px',//全部代运苗木的高度
				height1:innerHeight-186+'px',//总体的高度
				height2:innerHeight-392+'px',//其他 运单的高度
				tanchukuang:false,


				getcarTime2:this.$store.state.getcarTime2,//月日
				getcarTime3:this.$store.state.getcarTime3,//年月日
				getProvince:this.$store.state.currentTop.getProvince,//用车地点 省
				getCity:this.$store.state.currentTop.getCity,//用车地点   市
				getAddress:this.$store.state.currentTop.getAddress,//用车地点   详细街道
				wheres:false,//目的地的的弹出框显示和隐藏
				currentTop:this.$store.state.currentTop,//当前上面的用车时间  地点  和 运费  公司
				currentitem:[],//当前点击的对应的数组
				
				titleIndex:0,//标题序号哪个标签页显示
				deletedName:'',//保存的删除运单的时候对应的名字
				deletedIndex:'',//保存的删除运单的时候对应的序号
				title:['全部待运苗木',1,2],//:['全部待运苗木','运单1','运单2','运单3']
				fangdatuShow:false,//控制放大图的显示和隐藏
				indexb:-1,//控制灰色背景的
				indexa:-1,//鼠标放上li图片出现绿色的边框线
				//gouwuche3C:this.$store.state.gouwuche3C,//初选的数据
				treeLength:0,//勾选的树木的长度
				treePrice:'',//勾选树木的总价
				datas:[],//运输的数据的总量
				parents:[],//全部代运苗木
				sons:[],//子运单
				deletedId:''

			}
		},
		components:{"fangdatu":fangdatu,
	                 'place':place},
		computed:{
			watch(){
		this.minis=this.$store.state.minis
		this.currentitem=this.$store.state.gouwuche3//运输的数据
		this.currentTop=this.$store.state.currentTop
		this.getProvince=this.$store.state.currentTop.getProvince//用车地点 省
		this.getCity=this.$store.state.currentTop.getCity//用车地点   市
		this.getAddress=this.$store.state.currentTop.getAddress//用车地点   详细街道
		//this.gouwuche3C=this.$store.state.gouwuche3C//运输的数据的总量
		// this.getcarTime2=this.$store.state.getcarTime2//月日
		// this.getcarTime3=this.$store.state.getcarTime3//年月日
		this.gif=this.$store.state.gif//控制滚动的动画
	}
},
methods:{
				// // XX月XX日 星期X XX:XX
formatDate(time1,time2) {
	// var timi=this.$store.state.currentTop.getTime
	if(time1!='0'){
		var timi=time1//时间选择器里面的时间
	}
	if(time2!='0'){
		var timi=time2//时间选择器里面的时间
	}

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
        //选择用车时间弹出框时分秒的时间
          if(time1!="0"){
          	return month+"月"+date+"日 "+"星期"+day;
          }
       //用车时间的显示
          if(time2!="0"){
          	return month+"月"+date+"日 "+"星期"+day+' '+hour+' :'+minute;
          }
          	
          
          
      },
    totwo(n){
         // 时间失去焦点的时候自动补齐0
         if(n==1){
         	if(this.minis1.length==1){
	                  this.minis1='0'+this.minis1
              }
         }
         if(n==2){
         	if(this.minis2.length==1){
	                  this.minis2='0'+this.minis2
              }
         }
    },
	minisC(e){
		// if($(e.currentTarget).hasClass("c999899")){
		// 	return
		// }else{

// 2.未填写的时候
var s=this.minis1
var f=this.minis2
if(s==''||f==''){
	return
}
if(s.length==1){
	s='0'+s
}
if(f.length==1){
	f='0'+f
}
	
	// if(this.minis1==''){
	// 	s='00' 
	// }
	
	// if(this.minis2==''){
	// 	f='00' 
	// }

			// mdater.saveValueToInput()
			gouwuche3Mdater.saveValueToInput('nn')
			this.$store.state.minis=false
			
			this.$store.state.currentTop.getTime=this.$store.state.currentTop.getTime+' '+s+':'+f
			// 每次进来的时候都要固定一个时间
			this.minis1='00'
            this.minis2='00'
		// }
       console.log(this.minis1)
        console.log(this.minis2)
	},
	changes(num){
 console.log(333)
     if(num==1){
     	if(this.minis1.length>2){
     		this.minis1=this.minis1.slice(0,2)
     	}
          // if(this.minis1.length==1){
          // 	this.minis1='0'+this.minis1
          // }
          // if(this.minis1.length>2){
          // 	this.minis1=this.minis1.substring(0,2)
          // }
          if(parseInt(this.minis1)>23){
          	  this.minis1='00'
          }
          if(parseInt(this.minis1)<0){
          	  this.minis1="00"
          }
     }else if(num==2){
     	if(this.minis2.length>2){
     		this.minis2=this.minis2.slice(0,2)
     	}
          //  if(this.minis2.length==1){
          // 	this.minis2='0'+this.minis2
          // }
          // if(this.minis2.length>2){
          // 	this.minis2=this.minis2.substring(0,2)
          // }
           if(parseInt(this.minis2)>59){
          	  this.minis2="00"
          }
          if(parseInt(this.minis2)<0){
          	  this.minis2="00"
          }
     }
		// 滚动加载
		// 1.含负号的
	// if(this.minis1.indexOf('-')!=-1){
	// 	// alert(1)
	// 	this.minis1=this.minis1.replace('-','')
	// }
	// if(this.minis2.indexOf('-')!=-1){
	// 	// alert(1)
	// 	this.minis2=this.minis2.replace('-','')
	// }
	},
	scrolls(e){
		var that=this
       var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
       var nScrollTop = 0;   //滚动到的当前位置
       var nDivHight = $(e.currentTarget).height();
         nScrollHight = $(e.currentTarget)[0].scrollHeight;
         nScrollTop = $(e.currentTarget)[0].scrollTop;
　　　　　var paddingBottom = parseInt( $(e.currentTarget).css('padding-bottom') ),paddingTop = parseInt( $(e.currentTarget).css('padding-top') );
         if(nScrollTop + paddingBottom + paddingTop + nDivHight >= nScrollHight){
         	that.page++
         	that.gouwuche3(that.page)
         }
           
     

              
	},
	// 全部苗木的输入框
	clicks(e,who,amount){
		var val=parseInt($(e.currentTarget).parent().find("input").val()) 
		// 减
		if(who==-1){
			if(val-1==-1){
             return
			}
			$(e.currentTarget).parent().find("input").val(val-1)

		}else if(who==1){
         // 加
         if(val+1>amount){
             return
			}
			$(e.currentTarget).parent().find("input").val(val+1)
		}else if(who=='input'){
         // input
         if($(e.currentTarget).val()>amount){
         	 $(e.currentTarget).val(amount)
             alert('已超过交易运输量')
			}
		}
// 调用更新已选择的树木长度
this.gouxuantree()
	},
	// 运输模块的目的地的
	carPlace(){
	if(this.$store.state.currentTop.shipment_status!=590){
		return
	}
		this.wheres=true
	},
	// 运输模块的用车时间弹出框
carTime(){
	if(this.$store.state.currentTop.shipment_status!=590){
		return
	}
  $('.item-buydate').mdater({
  	maxDate : null,//默认为空，日期格式
	minDate : new Date()//默认为1970-01-01，日期格式
  });
//   $('input').mdater({
	
// });
  $(".txt-input").click();
},
// 取消
nosave0(){
	this.nosave=false
},
// 确定
nosave1(){
	this.nosave=false
	this.dos(this.nosaveIndex)
},
doss(index){
	var that=this
	if(this.$store.state.currentTop.shipment_status==590&&this.$route.params.index!=-1&&(this.$store.state.currentTop.getProvince!=''||this.$store.state.currentTop.getCity!=''||this.$store.state.currentTop.getAddress!=''||this.$store.state.currentTop.getTime!='')){
this.nosave=true
this.nosaveIndex=index
}else{
	this.dos(index)
}

},
	// 点击切换标签页
	dos(index){
		
		if(index==-1){
			$(".son").attr("src",'/static/tu-gouwuche/1-48.png')
		$(".son").css("opacity",'1')
		}
		
		this.page=1
		this.$store.state.gif=true
		var that=this
		this.titleIndex=index
		this.$router.push({name:'gouwuche3',params:{index:index,page:3}})
		that.gouwuche3(1)
	// if(that.titleIndex==-1){
	// 	that.currentitem=that.parents
	// 	that.$store.state.gouwuche3=that.currentitem
	// }else{
	// 	that.currentitem=that.sons[that.titleIndex].carriages
	// 	that.$store.state.gouwuche3=that.currentitem
	// 	this.getcarTime3=that.sons[that.titleIndex].delivery_time
	// 	this.getplace=that.sons[that.titleIndex].delivery_address
	// 	this.getmoney=that.sons[that.titleIndex].delivery_address
	// 	this.getcompany=that.sons[that.titleIndex].delivery_address
	// }
	
	},
	// 点击删除运单的叉子
	deleted(e,index,id){
		this.deletedName='运单'+index
		this.deletedIndex=index
		this.deletedId=id
		this.tanchukuang=true
		
	},
	// 弹出框取消按钮
quxiao(){
	this.tanchukuang=false
	this.deletedName=''
	this.deletedIndex=''
	this.deletedId=''
},
// 弹出框确定按钮 发起交易- 买方删除拟定交易删除苗木
queding(){
	var that=this
  // 删除已创建的运单
  	$.ajax({
		url:Boss+"shipment",
		type: 'DELETE',
		data:{
			"sessiontoken":sessiontoken,
			"orderId":this.deletedId//运单号ID，从 GET：/api/v1/shipment 取得
		},
		success: function(data) {
                    	that.tanchukuang=false
                    	//alert(that.deletedIndex)
	                    that.dos(that.deletedIndex-2)
	                     //that.sons.splice(that.deletedIndex-1,1)
	                    that.deletedName=''
	                    that.deletedIndex=''
	                    that.deletedId=''
                      }
                  });
	
	// 发请求
},
// 从全部待运单中创建运输单
yundanCreat(e){
	// 如果是灰色的生成运单则返回
	if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-40.png'){
         return
	}
	var that=this
	// 已选多少种
	 var arr=[]
	 var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
	 for (var i = 0; i < tree.length; i++) {
	 	// 1.数量不能为0
	 	if($(tree[i]).find("input").val()==0){
	 		// 提示数量不能为0
	 		this.nocan0=true
	 		setTimeout(function(){
	 			that.nocan0=false
	 		},1000)
	 		return
	 	}
	 	var num=$(tree[i]).find("input").val()
	 	var idx=$(tree[i]).index()
	 	console.log(idx)
	 	var id=this.parents[idx].objectId
	 	arr.push({check_id:id,send_count:num})
	 }
	 
   $.post(Boss+'shipment',{
   	"sessiontoken":sessiontoken,
	"order":JSON.stringify(arr)//订单列表（从/api/v1/purchaseOrders取得）, 如待运ID为001，数量为10，则该值为 [{check_id:'001',send_count:10}] 的数组对象序列化成字符串形式上传
   },function(data){
   	// 超载提示
   	if(data.status==0){
   		that.chao0=true
   		setTimeout(function(){
   			that.chao0=false
   		},1000)
   		return
   	}
 
   	 that.$router.push({name:'gouwuche3',params:{page:3,index:that.sons.length}})
   	 that.titleIndex=that.sons.length
   	 that.gouwuche3(1)

   })
},
// 确认运输按钮
yundanok(){
	var that=this
	$.post(Boss+'shipment/'+this.$store.state.currentTop.getId+'/confirm',{
		"sessiontoken":sessiontoken,
		'objectId':this.$store.state.currentTop.getId//运单号ID，从 GET：/api/v1/shipment 取得
	},function(data){
           console.log(data)

          that.$router.push({name:'gouwuche4',params:{page:4}})
           that.$parent.titleIndex=4
            //that.gouwuche3(1)
	})
},
// 报价单中向卖方发起报价请求
yundanBao(e){
	
	var that=this
	 $.post(Boss+'freightRequest',{
   	"sessiontoken":sessiontoken,
   	'delivery_coordinate_latitude':this.$store.state.currentTop.lat,
   	'delivery_coordinate_longitude':this.$store.state.currentTop.lng,
	"orderId":this.$store.state.currentTop.getId,//运输单ID,从/api/v1/shipment 取得
	'delivery_address':this.$store.state.currentTop.getPlace,//目的地点
	'delivery_time':this.$store.state.currentTop.getTime.replace('年','-').replace('月','-').replace('日','')//用车时间
   },function(){
       that.gouwuche3(1)

   })
},
  	showme(d){
				// 模拟地图被点击价格标
				console.log($(".ditu #"+d))
				$(".ditu #"+d).click()
			},
// 点击放大图出现
liclick(e,item,length){
  if(length==0){
  	return
  }
	this.fangdatuShow=true

	this.$store.state.fangdatuItem=item
},

  

// 勾选的棵树有多少
gouxuantree(){//alert(1)
	if(this.titleIndex==-1){
// 已选多少种
	this.treeLength=$(".son[src='/static/tu-gouwuche/1-47.png']").length
	 // 合计不含运费

	 var all=0
	 var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
	 for (var i = 0; i < tree.length; i++) {

	 	var price=$(tree[i]).find(".sonPrice").attr('sonPrice')
	 	var count=$(tree[i]).find(".sonCount").val()
	 	//alert(price)
	 	console.log(price,count)
	 	all+=price*count
	 }
	 this.treePrice=all
	}
	
	 
	},
// 勾选按钮 检测 同一个企业和团队的苗木才能被勾选
gouxuan(e,who,groupId){
	console.log(groupId)
	// 1.未选状态的时候让他变选择状态
	if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-48.png'){
		for (var i = 0; i < $(".son").length; i++) {
			if($($(".son")[i]).attr('groupId')!=groupId){
              $($(".son")[i]).css("opacity",'0.2')
			}
		}
	$(e.currentTarget).attr("src",'/static/tu-gouwuche/1-47.png')
		
	}else if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-47.png'){
	// 2.选择状态的时候让他变未选状态
	
	for (var i = 0; i < $(".son").length; i++) {
			if($($(".son")[i]).attr('groupId')!=groupId){
              $($(".son")[i]).css("opacity",'1')
			}
		}
		$(e.currentTarget).attr("src",'/static/tu-gouwuche/1-48.png')
}
// 调用更新已选择的树木长度
this.gouxuantree()
},
// 叉子消失
closes(e,d,index){
	
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
https(){
	var that=this
	if(that.titleIndex==-1){
		that.currentitem=that.parents
		that.$store.state.gouwuche3=that.currentitem
		that.treePrice=0
		that.treeLength=0
	}else{
		that.currentitem=that.sons[that.titleIndex].carriages
		that.$store.state.gouwuche3=that.currentitem
		that.treeLength=that.currentitem.length
		// 公司 目的地 时间  运费
		that.$store.state.currentTop.getProvince=''
		that.$store.state.currentTop.getCity=''
		that.$store.state.currentTop.getAddress=''
		that.$store.state.currentTop.getGroup=that.sons[that.titleIndex].supply_group_name
		that.$store.state.currentTop.getPlace=that.sons[that.titleIndex].delivery_address
        that.$store.state.currentTop.getId=that.sons[that.titleIndex].objectId
        that.$store.state.currentTop.lng=that.sons[that.titleIndex].delivery_coordinate.longitude
        that.$store.state.currentTop.lat=that.sons[that.titleIndex].delivery_coordinate.latitude
		that.$store.state.currentTop.getTime=that.sons[that.titleIndex].delivery_time
		that.$store.state.currentTop.getMoney=that.sons[that.titleIndex].current_freight
		that.$store.state.currentTop.shipment_status=that.sons[that.titleIndex].shipment_status



		var all=0
		for (var i = 0; i < that.currentitem.length; i++) {
			console.log(that.currentitem[i])
			var price=parseFloat(that.currentitem[i].current_price)
			if(price=='-1'){
				price='面议'
			}
			var num=parseFloat(that.currentitem[i].send_count)
			console.log(price,num)
			all=all+price*num
		}
		that.treePrice=all
	}
	  //让容器恢复到顶部
	  $(".list").scrollTop=0 
},
gouwuche3(page){
	//alert(1)
	var that=this
// 查询全部和子运单
//1.子运单
$.ajax({
		url:Boss+"shipment",
		type: 'GET',
		async:false,
		data:{"page":1,"groupId":groupId,'sessiontoken':sessiontoken},
		success: function(data) {
          	 console.log(JSON.parse(JSON.stringify(data.results.data)),'sons')
            	if(data.status==1&&data.results.data!=undefined){
            		// // 1.累加的
            		// 	if(page!=1){
              //             // 1.1长度为0的时候让动画消失  提示无更多数据
              //              if(data.results.data.length==0){
              //                 that.$store.state.gif=false
              //                return
              //              }else{
              //                  for (var i = 0; i < data.results.data.length; i++) {
            		// 			that.sons.push(data.results.data[i])
            		// 		}
              //              }
            		// 	}else{
                    //2. 刷新的
            that.sons=data.results.data
          // 如果数量已经全部取完  则显示没有更多苗木
             //   if(data.results.data.length==data.results.count){
             //     that.$store.state.gif=false
           
             // }else{
             //   that.$store.state.gif=true
            
             // }
            			// }
that.https()
	  
            	}


                      }
                  });
// 调用2.全部待运
if(this.$route.params.index!=-1){
  return
}

$.ajax({
		url:Boss+"purchaseOrders",
		type: 'GET',
		async:false,
		data:{"limit":20,"page":page,"groupId":groupId,'sessiontoken':sessiontoken},
		success: function(data) {
                    	  	 console.log(JSON.parse(JSON.stringify(data.results.data)),'parents')
            	if(data.status==1&&data.results.data!=undefined){
            		// 1.累加的
            			if(page!=1){
                          // 1.1长度为0的时候让动画消失  提示无更多数据
                           if(data.results.data.length==0){
                              that.$store.state.gif=false
                             return
                           }else{
                               for (var i = 0; i < data.results.data.length; i++) {
            					that.parents.push(data.results.data[i])
            				}
                           }
            			}else{
                    //2. 刷新的
            that.parents=data.results.data
          // 如果数量已经全部取完  则显示没有更多苗木
               if(data.results.data.length==data.results.count){
                 that.$store.state.gif=false
             }else{
               that.$store.state.gif=true
             }
            			}

	  // 调用球球全部待运和子运单
that.https()
            	}

                      }
                  });
}




},
mounted(){
			//alert(innerHeight)
		var that=this	
		 that.$store.state.gif=true
			//this.$store.commit("gouwuche3",{'page':1})
			this.titleIndex=this.$route.params.index
            this.gouwuche3(1)
           
            

		}



		


	}

</script>
<style	scoped>
	.bg269C88bg{background:#269C88 !important;color:white !important; }
	.bgF2F2F2bg{background:#F2F2F2}
	.bgFFFFFFbg{background:#FFFFFF}
	/*当前点击的*/
.c676868b{color:#676868;border:1px solid #F2F2F2;border-bottom: 1px solid #FFFFFF;background-color: white;}
	/*未点击的*/
.c999899b{color:#999899;background:#F2F2F2;border:1px solid #F2F2F2;}
.padd0{padding-top:0 !important;}

	p{margin:0;}
</style>