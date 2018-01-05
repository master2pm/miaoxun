
<template>
	<div style="">
	      <!-- 共14种，已选0种 -->
	      <div style="padding:0 20px;height:25px;line-height:25px;background:#F2F2F2;" class="f12 c999899">
	       <!-- 勾选按钮上 -->
	      	  <img @click="gouxuan($event,'parent')" src="/static/tu-gouwuche/1-48.png" alt="" class="relative parent cursor" style="height: 14px;top:-2px;margin-right:17px;">共{{gouwuche1C}}种，已选{{treeLength}}种
	      	  <span class="rf cursor" @click="allDel($event)" style="">删除全部</span>
	      </div>
	      <div style="display:none;">
	      	{{watch}}
	      </div>
	        <div	class="listf " :style="{height:height}">
	        <!-- @scroll="scrolls($event)"  animated zoomIn-->
	      <ul  id="gouwucheLoads" class="list relative  flow-default "  :style="{height:height}" style="overflow-y:scroll;padding:0 20px;" >
	      	<li v-if="datas.length>0" :sonId="item.tree.objectId" :type="item.tree.mu_type" @mouseenter="opens($event,item.tree.objectId,index)" @mouseleave="closes($event,item.tree.objectId,index)" v-for="(item,index) in datas" style="border-bottom:1px solid #F2F2F2;height:145px;padding:20px 0;" class=" relative" >
	      <!-- 勾选按钮列表 -->
	      	     <img @click="gouxuan($event,'son')" src="/static/tu-gouwuche/1-48.png" alt="" class="czjz cursor lf son" style="height: 14px;">

	      	     <div class="overflow " style="margin-left:23px;">
	      	     	<p class="c4A494B f18 " style="margin-bottom:8px;padding-left:7px;"><span @click="showme(item.tree.objectId)" class="cursor">{{item.tree.mu_name.length>8?item.tree.mu_name.substring(0,8):item.tree.mu_name}}</span>
						<span v-if="item.tree.mu_name.length>8">...</span> <span class="type f12">{{item.tree.mu_type!=undefined?item.tree.mu_type.substring(0,1):''}}</span></p>
	      	     	<div @click.stop="liclick($event,item.tree,item.tree.mu_photo.length)"	:class="{border80:indexb!=index}" class="lf">
	      	     		<img :src="item.tree.mu_photo.length>0?item.tree.mu_photo[0].url+'?imageView2/1/w/65/h/115':'/static/tu-gouwuche/1-36.png'" alt="" :imgs="item.tree.objectId" class="fangda cursor " style="width:65px;height:115px;"  :class="{borderL1:indexa==index,borderB1:indexa!=index}">
	      	     	</div>
	      	     	
	      	     	<div class="lf " style="margin-left:10px;margin-top:5px;">
	      	     	<!-- 假 地  盆 -->
	 	<div v-if="item.tree.mu_type!='草坪'" 	style="height:55px;" class=""  >
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
	      	     		<span class="c60B346 f18 " style="display:inline-block;width:150px;"><span class="sonPrice" :sonPrice="item.tree.mu_price=='-1'?'面议':item.tree.mu_price">
	      	     		{{item.tree.mu_price=='-1'?'面议':(item.tree.mu_type=='草坪'?('￥'+item.tree.mu_price+'/㎡'):('￥'+item.tree.mu_price+'/株'))}}
	      	     		</span></span>
	      	     		<span class="c999899 f13 " style="display:inline-block;width:160px;">库存{{item.tree.mu_stock}}{{item.tree.mu_type=='草坪'?'㎡':'株'}}</span>
	      	     		</p>

	      	     		<p class="c999899 f12 diandiandian" style="line-height:25px;">{{item.tree.mu_province}}·{{item.tree.mu_city}}·{{item.tree.mu_ground.gg_name.length>10?item.tree.mu_ground.gg_name.substring(0,10):item.tree.mu_ground.gg_name}}
                       <span v-if="item.tree.mu_ground.gg_name.length>10">...</span>
	      	     		</p>
	      	     	</div>
	      	     </div>

	      	     <div style='right:0;bottom:20px;width:107px;height:27px;background:url(/static/tu-gouwuche/1-37.png) no-repeat;' class="absolute" >
	      	     	<!-- jia -->
	      	     	<span class="czjz cursor" @click="clicks($event,item.tree.objectId,'-1',index,item.tree.mu_stock)" style='left:0;width:25px;height:25px;'></span>
	      	     	<!-- input -->
	      	     	<input @keyup="clicks($event,item.tree.objectId,'2',index,item.tree.mu_stock)"  :value="item.amount" class="czjz center none sonCount" type='text' style='left:28px;width:48px;height:20px;'>
	      	     	<!-- jian -->
	      	     	<span class="czjz cursor"  @click="clicks($event,item.tree.objectId,'1',index,item.tree.mu_stock)" style='right:0;width:25px;height:25px;'></span>
	      	     </div>
	 <!-- 删除按钮 -->
	          <img @click="tckopen($event,item.tree.objectId,index)"  src="/static/tu-gouwuche/1-49.png" alt="" class="close absolute" style="right:0;top:20px;display:none;">

	      	</li>
<!-- 滚动的动画 -->
	      	<!-- <li v-show="gif==true" class="center" style="padding:30px;"><img src="/static/tu-gouwuche/zhuan.gif" alt=""></li> -->
<!-- 提示无更多 -->
	      	<!-- <li v-show="gif==false" class="center c999899 f12" style="padding:30px;">没有更多苗木啦</li> -->
	      	<li  class="center c999899 f12"></li>
	      </ul>
</div>
<!-- 254 -->
	      <div v-if="tanchukuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:252px;">
	      	     <p class="f26 c4A494B" style="margin:69px 0;">确认删除苗木？</p>
	      	    <!--  <img @click="quxiao"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor"><img @click="queding" style="width:200px;"  src="/static/tu-gouwuche/1-77.png" alt="" class="cursor"> -->
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
				       <button type=""   @click="quxiao2s"  class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
                      <!-- 绿色的确定验苗 -->
                       <button type="" @click="alldelted"   class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">确定</button>
			</div>
		</div>

	      <!-- 发起交易 -->
	      <div style='height:35px;padding:10px 20px 10px 47px;' class="border-t relative">
	      	<div class="c676868 f12" >已选苗木<span class="c60B346">{{treeLength}}</span>种</div>
	      	<div class="c676868 f12" >合计(不含运费)：<span class=" f15 c60B346">{{isNaN(treePrice)?'待卖家填写报价':'￥'+treePrice}}</span></div>
	      	<img @click="next($event)"  :src="treeLength>0?'/static/tu-gouwuche/1-39.png':'/static/tu-gouwuche/1-38.png'" alt="" class="cursor czjz" style="right:40px;">
	      </div>


	        <!-- 发起交易的弹出框 -->
	     <div v-if="nextkuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad" style="width:400px;height:440px;">
	      	       <div class="f26 c4A494B border-b" style="height:130px;line-height:125px;">请问您需要验苗么？</div>


	      	       <div  :type="2" @click="yanmiaoclick($event,1)" :style="{opacity:canChoose=='one'?'0.5':'1'}" @mouseenter="yanmiaoenter($event,1)" @mouseleave="yanmiaoleave($event,1)"  class="yan cursor f18 c676868 border-b" style="height:76px;line-height:76px;">由苗讯提供验苗服务</div>
	      	       <div  :type="1" @click="yanmiaoclick($event,2)" :style="{opacity:canChoose=='one'?'0.5':'1'}"  @mouseenter="yanmiaoenter($event,2)" @mouseleave="yanmiaoleave($event,2)"    class="yan cursor f18 c676868 border-b" style="height:76px;line-height:76px;">由买家亲自验苗</div>
	      	       <div :type="0" @click="yanmiaoclick($event,3)" @mouseenter="yanmiaoenter($event,3)" @mouseleave="yanmiaoleave($event,3)"   class="yan cursor f18 c676868" style="height:76px;line-height:76px;">不需要验苗</div>
                     <button type=""  @click="quxiao1($event)" class="layui-btn layui-btn-zuo layui-btn-primary">取消</button>
                     <!-- 灰色的确定验苗 -->
                      <button type="" v-show="isyanmiao==false" class="layui-btn layui-btn-you layui-btn-primary" style="background:#F2F2F2;">确定验苗</button>
                      <!-- 绿色的确定验苗 -->
                       <button type="" @click="queding1($event)" v-show="isyanmiao!=false"  class="layui-btn layui-btn-you layui-btn-primary" style="background:#60B346;">确定验苗</button>
	<!-- <img @click="quxiao1($event)"  style="width:200px;" src="/static/tu-gouwuche/1-75.png" alt="" class="cursor"><img @click="queding1($event)" style="width:200px;"  :src="isyanmiao==false?'/static/tu-gouwuche/1-76.png':'/static/tu-gouwuche/1-84.png'" alt="" class="cursor">      	       	 -->
	      	       
	             </div>
	      </div>



     <!-- 草坪弹出框 -->
	     <div v-if="caokuang==true" class="wai_kuangs" style="">
	      	     <div class="center nei_kuang bai rad f26" style="width:550px;height:254px;">
	      	       <p style="margin:60px 0 40px 0;">草坪需与其他苗木分开发起交易	</p>
	      	       	<button @click="caokuang=false" type="" class="layui-btn layui-btn-primary f18" style="margin:0 auto;width:180px;height:80px;color:white;background:#60B346;border:1px solid #60B346;">好的</button>   
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
                canChoose:'three',//验苗方式的选择，如果是草坪则只能选一种，否则能选三种
				caokuang:false,//草坪的提示弹出框
				page:1,//默认第一次请求为1
				// gif:this.$store.state.gif,//控制滚动的动画
				height:innerHeight-200+'px',
				fangdatuShow:false,//控制放大图的显示和隐藏
				indexb:-1,//控制灰色背景的
				indexa:-1,//鼠标放上li图片出现绿色的边框线
				isyanmiao:false,//控制确定验苗按钮的颜色
				check_type:'',//验苗方式 0=不需要验苗，1=由买家亲自验苗，2=由苗讯提供验苗服务
				deletedId:'',//点击删除的弹出框的苗木id
				deletedIndex:'',//点击删除的弹出框的苗木index
				tanchukuang:false,//删除弹出框
				tanchukuang2:false,//全部删除弹出框
				nextkuang:false,//验苗弹出框出现
				gouwuche1C:this.$store.state.gouwuche1C,//初选的数据
				treeLength:0,//勾选的树木的长度
				treePrice:'',//勾选树木的总价
				datas:this.$store.state.gouwuche1//初选的数据的总量
			}
		},
components:{"fangdatu":fangdatu},
computed:{
	watch(){
		this.datas=this.$store.state.gouwuche1//初选的数据
		this.gouwuche1C=this.$store.state.gouwuche1C//初选的数据的总量
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
//          	that.$store.commit("gouwuche1",{'page':that.page})
//          }
           
     

              
// 	},
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
yanmiaoenter(e,num){
	// 如果是草坪的时候点击的是第一第二项则不能点击，直接返回
	if(this.canChoose=='one'&&(num=='1'||num=='2')){
		return
	}
	$(e.currentTarget).removeClass("bgFFFFFFbg")
   $(e.currentTarget).addClass("bgF2F2F2bg")
},
yanmiaoleave(e,num){
	// 如果是草坪的时候点击的是第一第二项则不能点击，直接返回
	if(this.canChoose=='one'&&(num=='1'||num=='2')){
		return
	}
	$(e.currentTarget).removeClass("bgF2F2F2bg")
   $(e.currentTarget).addClass("bgFFFFFFbg")
},
// 验苗的点击事件
yanmiaoclick(e,num){
	// 如果是草坪的时候点击的是第一第二项则不能点击，直接返回
	if(this.canChoose=='one'&&(num=='1'||num=='2')){
		return
	}
	$(e.currentTarget).removeClass("bgFFFFFFbg")
	$(e.currentTarget).removeClass("bgF2F2F2bg")
	$('.yan').removeClass("bg269C88bg")
	$(e.currentTarget).addClass("bg269C88bg")
	this.isyanmiao=true
	this.check_type=$(e.currentTarget).attr("type")
},
// 验苗的弹出框的确认验苗按钮
queding1(e){
	var that=this
	// 绿色的确认验苗按钮
// if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-84.png'){
	//发起交易-从初始中选择苗木到验
	//验苗列表, 如苗木ID为001，数量为10，则该值为 [{tree_id:'001',amount:10}] 的数组对象序列化成字符串形式上传
	 var check_list=[]
	 var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
	 for (var i = 0; i < tree.length; i++) {
	 	var tree_id=$(tree[i]).attr("sonId")
	 	var amount=$(tree[i]).find(".sonCount").val()
	 	var aa={tree_id:tree_id,amount:amount}
	 	check_list.push(aa)
	 }
	$.post(Boss+"check_operater",{"sessiontoken":sessiontoken,'check_type':this.check_type,'groupId':groupId,'check_list':JSON.stringify(check_list)},function(data){
		console.log(data)
		that.nextkuang=false
		 that.$router.push({name:'gouwuche2',params:{page:2}})
		 that.$parent.titleIndex=2
		 that.$store.state.treeCount=that.$store.state.treeCount-tree.length
	})
// }

},
// 验苗的弹出框的取消按钮
quxiao1(e){
this.nextkuang=false
this.isyanmiao=false
},
// 发起交易的按钮    验苗弹出框出现
next(e){
	var that=this
	if($(e.currentTarget).attr('src')=='/static/tu-gouwuche/1-39.png'){
		// 判断是否有草坪和苗木混合在一起提交
	 var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
	 var one=$(tree[0]).attr("type")
	 for (var i = 0; i < tree.length; i++) {
	 	var tree_type=$(tree[i]).attr("type")
	 	if(tree_type!=one){
	 	 that.caokuang=true
	 		return
	 	}
	 }

// 如果在循环中没有return，说明勾选的是一样的种类
            if(one=='草坪'){
			 	// 只能勾选不需要验苗
			 	this.canChoose='one'
			 }else{
			 	// 弹出框的所有内容都可以勾选
			 	this.canChoose='three'
			 }
			 that.nextkuang=true

	}
	
},
// 勾选的棵树有多少
gouxuantree(){
	// 已选多少种
	 this.treeLength=$(".son[src='/static/tu-gouwuche/1-47.png']").length
	// alert(this.treeLength)
	 // this.$store.state.gouwuche1C=this.$store.state.gouwuche1.length
	 // 合计不含运费
	
	 var all=0
	 var tree=$(".list>li img[src='/static/tu-gouwuche/1-47.png']").parent("li")
	 for (var i = 0; i < tree.length; i++) {
	 	var price=$(tree[i]).find(".sonPrice").attr('sonPrice')
	 	var count=$(tree[i]).find(".sonCount").val()
	 	//if(price=='')
	 	all+=price*count
	 }
	  this.treePrice=all
	 
},
// 勾选按钮
gouxuan(e,who){
	// 1.未选状态的时候让他变选择状态
	if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-48.png'){
          $(e.currentTarget).attr("src",'/static/tu-gouwuche/1-47.png')
          if(who=='parent'){
              $(".son").attr("src",'/static/tu-gouwuche/1-47.png')
          }else if(who=='son'){
          	  $(".parent").attr("src",'/static/tu-gouwuche/1-47.png')
          }
	}else if($(e.currentTarget).attr("src")=='/static/tu-gouwuche/1-47.png'){
	// 2.选择状态的时候让他变未选状态
           $(e.currentTarget).attr("src",'/static/tu-gouwuche/1-48.png')
           if(who=='parent'){
           $(".son").attr("src",'/static/tu-gouwuche/1-48.png')
          }else if(who=='son'){
          	  if($(".son[src='/static/tu-gouwuche/1-47.png']").length==0){
                   $(".parent").attr("src",'/static/tu-gouwuche/1-48.png')
          	  }
          }
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
// 弹出框确定按钮 删除苗木
queding(){
	var that=this
     $.ajax({
                    url:Boss+"select",
                    type: 'DELETE',
                    data:{
                      "sessiontoken":sessiontoken,
                      "groupId":groupId,
                      "treeId":this.deletedId
                    },
                    success: function(data) {
                    	// 删除购物车的数组对应下标
                    	// that.$store.state.gouwuche1.splice(that.deletedIndex,1)
                         
                    	  that.tanchukuang=false
                          that.deletedId=''
                          that.deletedIndex=''
                          // 调用更新已选择的树木长度
                           $(".son").attr('src','/static/tu-gouwuche/1-48.png')
	                      $(".parent").attr('src','/static/tu-gouwuche/1-48.png')
	                      that.$store.state.gouwuche1.splice([that.deletedIndex],1)
	                       that.$store.state.treeCount--
	                       that.$store.state.gouwuche1C--
	                       //alert(that.$store.state.treeCount)
                           //that.$store.commit("gouwuche1")
	                       that.gouxuantree()
                   }
                 });


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
	  // store.state.treeCount= store.state.treeCount-tree.length
	 for (var i = 0; i < tree.length; i++) {
	 	var ids=$(tree[i]).attr('sonId')
	 	arr.push(ids)
	 }
	 if(arr.length>1){
          var bb=arr.join(',')
	 }else{
	 	 var bb=arr[0]
	 }

     $.ajax({
                    url:Boss+"select",
                    type: 'DELETE',
                    data:{
                      "sessiontoken":sessiontoken,
                      "groupId":groupId,
                      "treeId":bb
                    },
                    success: function(data) {
                    	// 删除购物车的数组对应下标
                    	// that.$store.state.gouwuche1.splice(that.deletedIndex,1)
                    	  that.tanchukuang2=false
                          // 调用更新已选择的树木长度

                           that.$store.commit("gouwuche1",{'page':1})
	                       
	                       $(".son").attr('src','/static/tu-gouwuche/1-48.png')
	                      $(".parent").attr('src','/static/tu-gouwuche/1-48.png')
	                      that.gouxuantree()
                   }
                 });


},
			// 加号
clicks(e,objectId,type,index,stock){
	var that=this
  if(type==1){//1加号

         	var value=parseInt($(e.currentTarget).parent().find("input").val())+1
         	if(value>parseFloat(stock)){
         	value=value-1	  
         	return
         	}

  }else if(type==-1){

         if(parseInt($(e.currentTarget).parent().find("input").val())-1==0){//2减号
         	return
         }        
         var value=parseInt($(e.currentTarget).parent().find("input").val())-1

  }else if(type==2){//3输入框

                if($(e.currentTarget).val()<1){
            	 	    var value=1
            	
                }else{
                		var value=$(e.currentTarget).val()
                		console.log(value)
                		if(value>parseFloat(stock)){
                			value=parseFloat(stock)
                			 alert('不能超过库存数量')
         	                  
                           }  
                }        
  
  }
          $.ajax({
                    url:Boss+"select",
                    type: 'PUT',
                    data:{
                      "sessiontoken":sessiontoken,
                      "groupId":groupId,
                      "treeId":objectId,
                      "amount":value
                    },
                    success: function(data) {
                     console.log("修改加入购物车的数量")
                     console.log(data)
                     that.$store.state.gouwuche1[index].amount=value
                     // that.$store.commit("gouwuche1")
                   }
                 });     


			}
		},
		mounted(){			
		    // this.$store.commit("gouwuche1",{'page':1})
		    this.$store.state.gouwuche1=[]
           this.$store.commit('loads',{name:"gouwuche1"})

		    
        
      }



		

	
}

</script>
<style	scoped>
.bg269C88bg{background:#269C88 !important;color:white !important; }
.bgF2F2F2bg{background:#F2F2F2}
.bgFFFFFFbg{background:#FFFFFF}

p{margin:0;}
</style>