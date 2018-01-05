<template>
<!--  -->
	<div class="fangdatuBox   "  @click.stop="falses($event)" style="animate-delay: 1s;">
	<div style="display:none;">
		{{watch}}
	</div>
		<div class="fangdatu animated fadeIn" v-if="wai==true" @click.stop="falses2">
			<div class="fdt_header">
				<div class="mpname" @click="message=true" @mouseleave="message=false" >
					<span class="cursor relative">{{datas.mu_ground.gg_name.length>10?datas.mu_ground.gg_name.substring(0,10):datas.mu_ground.gg_name}}<span v-if="datas.mu_ground.gg_name.length>10">...</span>

                         <div v-show="message==true" class=" bai" style="left:-30px;position:absolute;width:213px;z-index:100;border:1px solid #999899;">
                         	 <div style="padding:15px;line-height: 100%;margin-top:15px;">
                         	 	<p style="width:140px;" class="f15 c4A494B">{{datas.mu_ground.gg_name.length>10?datas.mu_ground.gg_name.substring(0,10):datas.mu_ground.gg_name}}<span v-if="datas.mu_ground.gg_name.length>10">...</span></p>
                         	 	<img :src="datas.mu_ground.group.type=='private'?'/static/tu-detail/1-13.png':datas.mu_ground.group.type=='company'?'/static/tu-detail/1-12.png':'/static/tu-detail/1-11.png'" style="position:absolute;right:15px;top:30px;">
                                 <p class="f12 c676868 diandiandian4" style="margin-bottom:5px;">{{datas.mu_ground.gg_intro}}</p>
                                 <p class="f12 c999899" style="margin-bottom:5px;">回复率：<span class="c60B346">{{datas.mu_ground.group.reply_ratio}}</span></p>
                                 <p class="f12 c999899" style="margin-bottom:0;">平均回复时间：<span class="c60B346">{{datas.mu_ground.group.reply_time}}</span></p>
                                       <div style="border-bottom:1px dashed #999899;margin:30px 0 20px 0;"></div>

                                 <p  class="f12 c4A494B" style="margin-bottom:5px;">

                                 {{datas.mu_ground.group.type=='private'?'个人信息':datas.mu_ground.group.type=='company'?'企业信息':'团队信息'}}
                                 </p>
                                 <p  class="f12 c676868 diandiandian" style="margin-bottom:0;">{{datas.mu_ground.group.name}}</p>
                                       <div style="border-bottom:1px dashed #999899;margin:20px 0;"></div>


                                 <p  class="f12 c4A494B" style="margin-bottom:5px;">苗圃地址</p>
                                 <p  class="f12 c676868" style="margin-bottom:0;">
                                {{datas.mu_province}}{{datas.mu_city}}{{datas.mu_ground.gg_address.detail_address}}</p>
                                       <div style="border-bottom:1px dashed #999899;margin:20px 0 30px 0;"></div>

															 <div class="center">
																<div id="fx2" class="bai" style="z-index:100;width:100%;height:100%;">
																		<div id="QWE2" style="width:121px;height:121px;margin:0 auto;margin:20px 0 10px 30px;" class="">

																		</div>
																	<p class="f12 c676868 center">扫一扫分享</p>
																</div>
                               </div>
                                  <p  class="f12 c676868 center" style="margin-bottom:30px;">APP进入苗圃</p>
                         	 </div>

                         	  <router-link target="_blank" :to="{name:'home',params:{page:0,groundId:groundId}}">
                         	 <div  style="height:40px;line-height:40px;background:#F2F2F2;bottom:0;width:100%;" class="absolute c60B346 f15 center">进苗圃逛逛</div>
                         	  </router-link>
                         </div>


					</span>
					<img :src="datas.mu_ground.group.type=='private'?'/static/tu-detail/1-13.png':datas.mu_ground.group.type=='company'?'/static/tu-detail/1-12.png':'/static/tu-detail/1-11.png'">


				</div>
<!-- 收藏苗圃 -->
				<div class="scmp" @mouseenter='hoverSCs(1)'  @mouseleave='hoverSCs(0)'>
					<img   @click="clicks($event,3,datas.mu_ground.objectId,'groupground',0)"  :src="hoverSC==0?'/static/tu-detail/1-107.png':hoverSC==2?'/static/tu-detail/1-57.png':'/static/tu-detail/1-56.png'" class="tran cursor" style="">
				</div>
<!-- 联系卖家 -->
				<div class="lxmj relative"  @click="kuang2=true"   @mouseenter='hoverLX=true' @mouseleave='hoverLXs()'>
					<img :src="hoverLX==0?'/static/tu-detail/1-55.png':'/static/tu-detail/1-54.png'" class="tran cursor" >
						<!--00联系卖家弹出框 -->
			<div v-if="kuang2==true" style="line-height:20px;width:213px;height:161px;position:absolute;top:50px;right:-100px;z-index:10;border:1px solid #999899;" class=" bai">
				<div  style="" class=" kuang2 bai">
					<div style="padding:25px 15px 20px 15px;" class="f12 c676868">
						<img src="/static/tu-detail/1-53.png" style="margin-bottom:20px;">
						<div class=""  >联系人：{{datas.mu_ground.gg_contacts}}</div>
						<div class="" >联系电话：{{datas.mu_ground.gg_contact_number}}</div>

					</div>
					<div  class="f15 c60B346 center F2F2F2bg" style="height:40px;">
						<img src="/static/tu-detail/1-52.png" style="width:100%;" >
					</div>

				</div>
			</div>
				</div>
			</div>
<!--1.上 左 放大图 -->
			<div class="fdt_main lf" id='fangda_tu'>
				<div class="lf relative">
					<div class="eeeContain" v-show='showFdt'>
						<img :src="fdtImg+'?imageView2/2/w/512/h/568'" id='eee' style="position: absolute;">
					</div>
					<div class="relative" style="top: 30px;left: 30px;width: 254px;
					height: 282px;" id='daili' @mouseenter='showFdt=true' @mouseleave='showFdt=false'>
						<div class="wai relative" >
							<img :src="fdtImg+'?imageView2/2/w/256/h/284'" class="jz">
						</div>
						<div id="mask"  >
						</div>
						<div id="superMask" class="wai" ></div>
					</div>
<!-- 放大图下面的小图片的上一页按钮 -->
				<div class="small">
					<div class="prev lf" @click="houtuis($event)" id="houtui">
						<img src="/static/tu-detail/1-64.png" class="jz">
					</div>
<!-- 放大图下面的小图片 -->
					<div class="fada relative">
						<ul class="lf smallImg" id="fada">
							<li @click="zhongji_open($event,index)" v-for="(item,index) in datas.mu_photo" :class="{active:index==0}">
								<img :src="item.url+'?imageView2/1/w/27/h/50'" @mouseenter="qiehuans($event,index)">
							</li>
						</ul>
					</div>
<!-- 放大图下面的小图片的下一页按钮 -->
					<div class="next rf" @click="qianjins($event)" id="qianjin">
						<img src="/static/tu-detail/1-65.png" class="jz">
					</div>
				</div>
			</div>

<!--2.上 右 商品详细 -->
			<div class="rf content">
				<div class="f26 c4A494B relative miaoname">
					{{datas.mu_name.length>8?datas.mu_name.substring(0,8):datas.mu_name}}
					<span v-if="datas.mu_name.length>8">...</span>
					<span data-v-20c2b8af="" class=" f12  type19">{{datas.mu_type!=undefined?datas.mu_type.substring(0,1):''}}</span>
				</div>
				<div class="f12 miaotime relative">
					发布时间：{{datas.createdAt}}




<!-- 分享 -->
				<div @click="changer(true)" @mouseleave="changer(false)" class="cursor share relative">
					<img src="/static/tu-detail/1-60.png" >
					<div id="fx1" class="bai" style="z-index:100;position:absolute;left:-65px;top:40px;width:160px;height:181px;border:1px solid #999899;">
							<div id="QWE1" style="width:121px;height:121px;margin:0 auto;margin:20px 0 10px 18px;" >

							</div>
						<p class="f12 c676868 center">扫一扫分享</p>
					</div>
				</div>




<!-- 收藏 -->
					<div class="save cursor">
						<img  @click="storeShows($event,3,datas.objectId,'tree',0)"  :src="storeShow==false?'/static/tu-detail/1-58.png':'/static/tu-detail/1-62.png'" >
					</div>
				</div>
				<div class="miaoprice relative">
					<span style="float:left;height:51px;line-height: 51px; ">价格</span>
					<span>{{datas.mu_price=='-1'?'面议':(datas.mu_type=='草坪'?('￥'+datas.mu_price+'/㎡'):('￥'+datas.mu_price+'元/株'))}}</span>
				</div>
				<div class="miaoInfo">
					<div class="lf">
						苗木标准
					</div>
<!-- 1非草坪 -->
					<ul class="rf f12 c4A494B" v-if="datas.mu_type!='草坪'">

						<li v-if="datas.mu_type!='袋苗'&&(datas.mu_mj_min!=''||datas.mu_mj_max!='')">
								米径：{{datas.mu_mj_min}}
								<span v-show="datas.mu_mj_min!=''&&datas.mu_mj_max!=''&&datas.mu_mj_min!=datas.mu_mj_max">- {{datas.mu_mj_max}}</span>cm

						</li>


						<li v-if="datas.mu_type!='袋苗'&&(datas.mu_dj_min!=''||datas.mu_dj_max!='')">
								地径：{{datas.mu_dj_min}}
								<span v-show="datas.mu_dj_min!=''&&datas.mu_dj_max!=''&&datas.mu_dj_min!=datas.mu_dj_max">- {{datas.mu_dj_max}}</span>cm
						</li>

                           <li v-if="datas.mu_type!='袋苗'&&(datas.mu_zg_min!=''||datas.mu_zg_max!='')">
                                                自然高：{{datas.mu_zg_min}}
                                <span v-show="datas.mu_zg_min!=''&&datas.mu_zg_max!=''&&datas.mu_zg_min!=datas.mu_zg_max">- {{datas.mu_zg_max}}</span>cm

						   </li>

							<li v-if="datas.mu_type!='袋苗'&&(datas.mu_rg_min!=''||datas.mu_rg_max!='')">
							肉高：{{datas.mu_rg_min}}
							<span v-show="datas.mu_rg_min!=''&&datas.mu_rg_max!=''&&datas.mu_rg_min!=datas.mu_rg_max">- {{datas.mu_rg_max}}</span>cm
							</li>

							<li v-if="datas.mu_type!='袋苗'&&(datas.mu_zfjg_min!=''||datas.mu_zfjg_max!='')">
							主分枝高：{{datas.mu_zfjg_min}}
							<span v-show="datas.mu_zfjg_min!=''&&datas.mu_zfjg_max!=''&&datas.mu_zfjg_min!=datas.mu_zfjg_max">- {{datas.mu_zfjg_max}}</span>cm
							</li>



							<!-- 袋 -->
							<li v-if="datas.mu_type=='袋苗'">{{datas.mu_package_weight}}斤袋</li>
							<li v-if="datas.mu_type=='袋苗'">自然高：{{datas.mu_zg_min}}-{{datas.mu_zg_max}}cm</li>

							<!-- 公用 冠幅 -->
							<li >冠幅：{{datas.mu_gf_min}}-{{datas.mu_gf_max}}cm</li>
					</ul>
<!-- 2草坪 -->
 

					<ul class="rf f12 c4A494B" v-if="datas.mu_type=='草坪'">

						<li v-if="datas.lawn_length!=undefined&&datas.lawn_length!=''">
								草坪长：{{datas.lawn_length}}cm
						</li>
						<li v-if="datas.lawn_width!=undefined&&datas.lawn_width!=''">
								草坪宽：{{datas.lawn_width}}cm
						</li>
						<li v-if="datas.lawn_density!=undefined&&datas.lawn_density!=''">
								密度：{{datas.lawn_density}}%
						</li>
						<li v-if="datas.lawn_amount!=undefined&&datas.lawn_amount!=''">
								每捆数量：{{datas.lawn_amount}}片
						</li>						
					</ul>


				</div>
				<div class="miaoAdress">
					<div class="lf">
						苗木地址
					</div>
					<div class="rf">
						{{datas.mu_province}}{{datas.mu_city}}{{datas.mu_ground.gg_address.detail_address}}
					</div>
				</div>
<!-- 加入购物车加减 -->
				<div class="miaonum">
					数量
					<div class="relative" style="top:10px;width:139px;height:26px;background-size:139px 26px;background:url('/static/tu-detail/1-72.png') no-repeat;">

						<div @click="add($event,'jian',datas.mu_stock)" class="cursor miaoLess czjz center f20" style="left:0;width:25px;line-height:25px;height:25px;">-</div>
<!-- onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" -->
						 <input  @keyup="shuliangs(datas.mu_stock)"  type="" v-model="shuliang" name="" style="width: 65px;height: 25px;line-height: 25px;border:none;outline: none;padding: 0 10px;" class="center jz ">

                        <div @click="add($event,'jia',datas.mu_stock)" class="cursor miaoAdd czjz center f20" style="right:0;width:25px;line-height:25px;height:25px;">+</div>


					</div>
					{{datas.mu_type=='草坪'?'㎡':'株'}}（库存{{datas.mu_stock}}{{datas.mu_type=='草坪'?'㎡':'株'}}）
				</div>
<!-- 加入购物车按钮 -->
				<div class="cart" >
					 <div @click="clicks($event,11,datas.objectId,'当前登录人所属的组的id',0)" 	 @mouseenter="cartindex1($event)"  @mouseleave="cartindex0($event)"   style="width:145px;height:30px;line-height:30px;border:1px solid #60B346;" class="c60B346s0 cursor rad  f12  center ">
					 	{{datas.isselected==0?'加入购物车':'已加入购物车'}}
					 </div>
				</div>
			</div>
		</div>



<!-- 4.右边的看了又看轮播图 -->
		<div class="klyk rf" style="display:none;">
			<p class="title">看了又看</p>
			<!-- Swiper -->
			<div class="relative" style="height: 500px">
				<div class="swiper-container swipe-fdt" >
					<div class="swiper-wrapper ">
						<div class="swiper-slide" v-for="(item,index) in carousel" >
							<div >
								<img :src="item" alt="slide" class=" " style="width: 105px;height: 185px" >
								<div class="f13  relative" style="color: #676868;margin-top: 3px">香樟
									<span class=" f12 type" style="top: 0px;">地</span>
								</div>
								<div class="f13 c60B346 relative" style="">￥20000/株</div>
							</div>

						</div>


					</div>
					<!-- Add Pagination -->

				</div>

				<!-- 如果需要导航按钮 -->
				<div class="swiper-pagination swiper-pagination1"></div>
				<div class=" swiper-button-prev fdt-pre"></div>
				<div class=" swiper-button-next fdt-next"></div>
			</div>
		</div>






<!--3.底部同场苗木轮播图 1-->
		<div class="lf lbContainer" >
			<div class="biaoti">
				<span class="tcmm">同场苗木</span>
				<router-link target="_blank" :to="{name:'home',params:{page:0,groundId:groundId}}">
				<span  class="ckgd cursor">查看更多</span>
				</router-link>
			</div>
			<!-- Swiper -->
			<div class="relative ggg" style="overflow: hidden;">
				<div class="swiper-container swipe-fdt2" >
					<div class="swiper-wrapper ">
						<div class="swiper-slide" v-for="(item,index) in carousel2" >
							<div @click.stop="liclick($event,item)">
								<img :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/82/h/146':'/static/tu-detail/1-102.png'"  alt="slide" class="cursor" style="width: 82px;height: 146px">
								<div class="f12  relative" style="color: #676868;margin-top: 3px">
								{{item.mu_name.length>3?item.mu_name.substring(0,3):item.mu_name}}</span>
						<span v-if="item.mu_name.length>3">...</span>
									<span class=" f12 type" style="top: 0px;">{{item.mu_type!=undefined?item.mu_type.substring(0,1):''}}</span>
								</div>
								<div class="f12 c60B346 relative" style="">{{item.mu_price=='-1'?'面议':(item.mu_type=='草坪'?('￥'+item.mu_price+'/㎡'):('￥'+item.mu_price+'元/株'))}}</div>

							</div>

						</div>


					</div>
					<!-- Add Pagination -->

				</div>

				<!-- 如果需要导航按钮 -->
				<!-- <div class="swiper-pagination swiper-pagination2"></div> -->
				<div class=" swiper-button-prev fdt-pre2"></div>
				<div class=" swiper-button-next fdt-next2"></div>
			</div>
		</div>





	</div>

	    <!-- 终极放大图-->

<div v-show="bigbig==true" id="myCarousels" class="carousel zhongji" data-ride="carousel" data-interval=false style="height:100%;width:100%;cursor:pointer;" @click.stop='falses2'>
					<!-- 轮播（Carousel）指标 -->
					<ol class="carousel-indicators" >
						<li data-target="#myCarousels" @click.stop='toNum(index)' :data-slide-to="index" :class="{active:index==0}" v-for="(item,index) in finalArrs"></li>
					</ol>
					<!-- 轮播（Carousel）项目 -->
					<div id="myCarousels1"  class="carousel-inner" style="height:100%;width:100%;">
						<div class="item relative" :class="{active:index==0}" id="getheight" v-for="(item,index) in finalArrs" style="height:100%;width:100%;">
							<img :src="item.url+'?imageView2/2/h/'+height" alt="slide" style="max-width:none;" class="jz cursor"
							@mouseenter="drag_over($event)" @mouseleave="drag_out($event)">
							<!-- <div class="carousel-caption">标题 {{index}}</div> -->
						</div>
					</div>

					<!-- 轮播（Carousel）导航 -->
      <a class="tingzhi absolute" href="javascript:void(0)" @click.prevent='toPrev()'
      data-slide="prev" id="lbp"  style="width:25px;height:35px;left:10px;top:50%;transform:translatey(-50%);">
                        <img src="/static/tu-detail/1-113.png"  id="home_img1" >
      </a>
      <a class="  tingzhi absolute" href="javascript:void(0)" @click.prevent='toNext()'
    data-slide="next" id="lbn"  style="width:25px;height:35px;right:10px;top:50%;transform:translatey(-50%);">
                        <img src="/static/tu-detail/1-112.png"  id="home_img2"  >
      </a>


 <!-- 减 -->
      <img @click="final4s($event)" @mouseenter="hover_enter($event,4)" @mouseleave="hover_leave($event)" :src="index==4?'/static/tu-detail/1-108.png':'/static/tu-detail/1-109.png'"  class="final4 ff absolute" style="bottom:10px;right:80px;">

 <!-- 加 -->
      <img @click="final3s($event)" @mouseenter="hover_enter($event,3)" @mouseleave="hover_leave($event)" :src="index==3?'/static/tu-detail/1-110.png':'/static/tu-detail/1-111.png'"  class="final3 ff absolute" style="bottom:10px;right:10px;">

<!-- 关闭叉子 -->
      <img @click="closes($event)" src="/static/tu-detail/1-75.png"  class="cursor final5 absolute" style="top:20px;right:10px;">
</div>





</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				height:parseInt(innerHeight*0.9),
				wai:true,//点击终极放大图的时候，外层的放大图消失
				 index:-1,//控制<>+-
                 finalArr:[], //全局变量，用来保存终极放大图中，从放大图传入的图片路径
                 finalArrs:this.$store.state.fangdatuItem.mu_photo,//原来的路径没有转大写的
                 drag:0,
                 move:0,
                 dragObj:0,
                 clickleft:'',
                 clickTop:'',
                 bigbig:false,

                groundId:this.$store.state.fangdatuItem.mu_ground.objectId,

				shareShow:false,//分享的弹出框变量
				storeShow:(this.$store.state.fangdatuItem.isfavor==1?true:false),//收藏的变量false
				message:false,//控制左边点击的时候苗圃详细信息的弹出框
				shuliang:1,//加入购物车的输入框
				kuang2:false,//联系卖家的弹出框
				datas:this.$store.state.fangdatuItem,//放大图获取的数据信息,
				fdtImg:this.$store.state.fangdatuItem.mu_photo[0].url,//当前放大图图片
				showFdt:false,
				hoverSC:0,//鼠标移入收藏苗圃时,false为未移入，true为移入
				hoverLX:0,//鼠标移入联系卖家时,0为未移入，1为移入
				carousel:['/static/tu-detail/1-01.png','/static/tu-detail/1-01.png','/static/tu-detail/1-01.png','/static/tu-detail/1-01.png'],//纵向轮播图数据
				carousel2:'',//第二个轮播图数据
			}
		},
	computed:{
		watch(){
			 this.datas=this.$store.state.fangdatuItem
			 this.fdtImg=this.$store.state.fangdatuItem.mu_photo[0].url//当前放大图图片
			 this.finalArrs=this.$store.state.fangdatuItem.mu_photo
		}
	},

		methods:{
			 shuliangs(stock){
           if(this.shuliang.length==1){
           	this.shuliang=this.shuliang.replace(/[^1-9]/g,'')
           }else{
           	this.shuliang=this.shuliang.replace(/\D/g,'')
           }


           	if(parseFloat(this.shuliang)>parseFloat(stock)){
               alert('不能超过库存量')
               this.shuliang=stock
           	}else{

           	}
           },
			changqr(str){
				// #QWE1生成苗木分享的二维码   #QWE2生成苗圃场分享的二维码
				var that = this;
				var dz = location.href;
				var tou = dz.substring(0,dz.indexOf("new"));
				var temp = str.substring(str.length-1);
				var test = '';
				if(temp == 1){
					test = tou + 'phone/detail/miao_mm.html?mid=' + that.$store.state.fangdatuItem.mu_ground.objectId  + "&cid=" + that.$store.state.fangdatuItem.objectId;
				}else{
					test = tou + 'phone/detail/miao_mpc.html?id=' + that.$store.state.fangdatuItem.mu_ground.objectId;
				}
				console.log(test);
				// $("#qrcode").qrcode({text:test1,width:150,height:150})
				$(str).qrcode({text:test,width:120,height:120})
			},changer(bool){
				if(bool){
					$("#fx1").show()
				}else{
					$("#fx1").hide()
				}
			},
			chu(){
				var that=this
				that.changqr("#QWE1");
				that.changqr("#QWE2");
				that.changer(false);
				console.log('csh');
			},

// 点击放大图出现
liclick(e,item){
	var that=this
	  this.$store.state.fangdatuItem=item
      this.$store.state.fangdatuItem.mu_photo=item.mu_photo
	  this.$store.state.fangdatuItem.mu_photo[0].url=item.mu_photo[0].url//当前放大图图片
     },
toNum(index){
	 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
  				  $("#myCarousels").carousel(index);
			},
 // 防止点击轮播的时候被识别成路由
      toNext(e){
      	 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
      	$("#myCarousels").carousel('next');

      },
      // 防止点击轮播的时候被识别成路由
      toPrev(e){
      	 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
      	$("#myCarousels").carousel('prev');

      },
  initWheel(){
				// 轮滚缩放功能
			 	$(document).on('#myCarousels mousewheel DOMMouseScroll', function (e) {

				  	if($("#myCarousels").css("display")=="block"){
				        e.preventDefault();
				        //鼠标滚轮的滚动方向 >0 up;<0 down
				        var _delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
				        if (_delta > 0) {
				        	//var widthMax=parseFloat($(".zhongji .active")..width())
				        	//alert(widthMax)
				            var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
				             var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
				              var sx=width+width*0.06
				            var sx2=height+height*0.06
				            // if((sx>innerWidth||sx==innerWidth)){
                //                return
				            // }

				            $(".zhongji .active>img").css({'width':sx+'px','height':sx2})

				        } else {
				        	//var widthMax=parseFloat(getComputedStyle(document.querySelector(".zhongji .active")).width)
				            var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
				             var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
				              var sx=width-width*0.06
				            var sx2=height-height*0.06
				            // if((sx>innerWidth||sx==innerWidth)){
                //                return
				            // }

				            $(".zhongji .active>img").css({'width':sx+'px','height':sx2})
				        }
				    }
    			})
			},
			// 移动的代码
			init(){
				window.document.onmousemove = this.mouseMove
				window.document.onmousedown = this.mouseDown
				window.document.onmouseup = this.mouseUp
				window.document.ondragstart = this.mouseStop
			},
			mouseDown() {
				if (this.drag) {
					console.log('can move')
					this.clickleft = window.event.x - parseInt(getComputedStyle(this.dragObj).left)
					this.clicktop = window.event.y - parseInt(getComputedStyle(this.dragObj).top)
					this.dragObj.style.zIndex += 1
					this.move = 1
				}
			},
			mouseStop() {
				window.event.returnValue = false
			},
			mouseMove() {

				if (this.move) {
					//console.log($(this.dragObj),window.event.x, this.clickleft)
				    $(this.dragObj).css('left', window.event.x - this.clickleft)
				    $(this.dragObj).css('top',  window.event.y - this.clicktop)
				}
			},
			mouseUp() {
				this.move = 0
			},
		    // 终极图的下方的+点击事件
		    final3s(e){
		             var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
		           var sx=width+width*0.06
		           var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
		           var sx2=height+height*0.06
		           console.log(width+'and'+sx)
		           $(".zhongji .active>img").css({'width':sx+'px','height':sx2})
		    },
		      // 拖到的图片
  			drag_over(e){
			    var final_fd=document.querySelector('.zhongji .active>img')
			    this.drag=1
			    this.dragObj=final_fd
			    console.log(this.dragObj)
			},
			drag_out(e){
			    this.drag=0
			},
		  // 终极图的下方的-点击事件
		  final4s(e){
		        var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
		           var sx=width-width*0.06
		           var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
		           var sx2=height-height*0.06
		           console.log(width+'and'+sx)
		           $(".zhongji .active>img").css({'width':sx+'px','height':sx2})
		  },
		  // 终极放大图右上角的关闭叉子
		  closes(e){
		    var that=this
		    this.wai=true
		           // $('#welcome').modal('hide')
		    $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
		            this.bigbig = false
		            //canlisten=false
		          //that.$store.state.fangdatu_show=true
		            //$("#fangda_").css('display','block')
								setTimeout(function(){

									that.chu();
								},0.01);
		          },
		  // <>+-鼠标放上的时候换暗色的图片路径
		  hover_enter(e,n){
		    this.index=n
		  },
		  hover_leave(e){
		   this.index=-1
		  },
			  // 点击小图片展开终极大图
zhongji_open(e,number){
  var that=this
  this.wai=false
 // alert(number)
   $('#myCarousels').carousel(number)
  this.bigbig=true

  },

			// 联系卖家
			hoverLXs(){
				this.hoverLX=false
				this.kuang2=false
			},
			// 收藏苗圃
			hoverSCs(n){
				console.log(this.hoverSC)
				if(this.hoverSC==2){
					return
				}else{
					this.hoverSC=n
				}

			},
			// 收藏按钮
			storeShows(e,n,objectId,type,amount){
				
				if(this.storeShow==false){
					 if(sessiontoken==null){
					 	common_adds(e,n,objectId,type,amount)
					 	return
					 }
					this.storeShow=true
					if(this.$store.state.fangdatuIndex!=-1){
						if(this.$route.name=='tj'){
							this.$parent.carousel[this.$store.state.fangdatuIndex].isfavor=1
							
							  console.log('tj')
							  // console.log(this.$parent.carousel)
						}else if(this.$route.name!='home'){
							this.$store.state.group[this.$store.state.fangdatuIndex].isfavor=1
							 console.log('列表地图')
						}else{
							this.$parent.datas[this.$store.state.fangdatuIndex].isfavor=1
							console.log('home')
						}
					}
                    common_adds(e,n,objectId,type,amount)
				}else{
					if(sessiontoken==null){
					 	common_adds(e,n,objectId,type,amount)
					 	return
					 }
					this.storeShow=false
					if(this.$store.state.fangdatuIndex!=-1){
						if(this.$route.name=='tj'){
							this.$parent.carousel[this.$store.state.fangdatuIndex].isfavor=0
							 
							  console.log('tj')
							   // console.log(this.$parent.carousel)
						}else if(this.$route.name!='home'){
							this.$store.state.group[this.$store.state.fangdatuIndex].isfavor=0
							 console.log('列表地图')
						}else{
							this.$parent.datas[this.$store.state.fangdatuIndex].isfavor=0
							console.log('home')
						
						}
						
					}
					common_adds(e,n,objectId,type,amount)
				}
			},
			// 加入购物车按钮
			cartindex0(e){
				$(e.currentTarget).removeClass("bg60B346s0")
				$(e.currentTarget).addClass("c60B346s0")
			},
			cartindex1(e){
				$(e.currentTarget).removeClass("c60B346s0")
				$(e.currentTarget).addClass("bg60B346s0")
			},
			// 加入购物车和收藏
			clicks(e,n,objectId,type,amount){

				if(n==11){
					if(parseFloat(this.shuliang)>parseFloat(this.datas.mu_stock)){
						alert('不能超过库存数量')
						return
					}
					if(this.shuliang==''){
						alert('数量不能为空')
						return
					}
					if(this.shuliang!=''){
						common_adds(e,n,objectId,type,this.shuliang)
                         }
                }else if(n==3){

  	                       if($(e.currentTarget).attr("src")=='/static/tu-detail/1-56.png'&&sessiontoken!=null){
                         	// 变成取消收藏
                         	this.hoverSC=2
                            }else if($(e.currentTarget).attr("src")=='/static/tu-detail/1-57.png'&&sessiontoken!=null){
                         	// 变成收藏苗圃
                         	this.hoverSC=1
                  }
                      common_adds(e,n,objectId,type,amount)
            }

},

			// 加入购物车的加减按钮
			add(e,item,stock){
				if(item=='jia'){
                    var shu=this.shuliang+1
					if(shu>stock){
						alert('不能超过库存数量')
					}else{
						this.shuliang++
					}
				}else if(item=='jian'){
					this.shuliang--
					if(this.shuliang==0){
						this.shuliang=1
					}
				}
			},
			falses2(){
					console.log(1111111111111111)
			},
			// 鼠标点击放大图的外面的时候让弹出框消失
			falses(e){
				//alert(11)
				this.$parent.fangdatuShow = false
				this.$store.state.fangdatuIndex=-1
			},
			  // 放大镜函数
			  fdj(){
			        //var superMask=document.getElementById("wai")

			        var mask=document.getElementById("mask")
			        //
			        var HEIGHT1=$('#superMask').height()//左边容器高
			        var HEIGHT2=$(mask).height()//放大镜容器高

			        var width1=$('#superMask').width()//左边容器宽
			        var width2=$(mask).width()//放大镜容器宽
			        var hbili=HEIGHT1/HEIGHT2//高比率
			        var wbili=width1/width2//宽比率
			        //获取左边容器中图片宽高，按宽高比率放大右边图片
			            //左右两边容器宽高并不一样，所以需要在放大比率中修正左右容器比率
			            var xz_width=341/width1
			            var xz_height=341/HEIGHT1
			            var zuog=parseInt($("#fangda_tu .wai>img").css("height"))
			            var zuok=parseInt($("#fangda_tu .wai>img").css("width"))
			            	console.log(zuok,zuog)
			            $("#fangda_tu #eee").css("height",hbili*zuog*xz_height)
			            $("#fangda_tu #eee").css("width",wbili*zuok*xz_width)
			            var youg=parseInt($("#fangda_tu #eee").css("height"))
			            var youk=parseInt($("#fangda_tu #eee").css("width"))

			            var h=(HEIGHT1-zuog)/2
			var w=(width1-zuok)/2//求左右空白


			// var kuanbi=youk/zuok

			// var gaobi=youg/zuog
			var MAX1=width1-width2
			var MAX=HEIGHT1-HEIGHT2
			$(document).on("mousemove","#fangda_tu #daili",function(e){

				var x=e.offsetX
				var y=e.offsetY
			     //
			     var TOP=y-HEIGHT2/2
			     var LEFT=x-width2/2
				 //console.log(LEFT)
				 var TOP=(TOP<0?0:TOP>MAX?MAX:TOP)
				 var LEFT=(LEFT<0?0:LEFT>MAX1?MAX1:LEFT)
				 $(this).css({'cursor':"none"})

				 document.getElementById("mask").style.top=TOP+"px"
				 document.getElementById("mask").style.left=LEFT+"px"
				 document.getElementById("eee").style.top=-hbili*TOP*xz_height+h*hbili*xz_height+"px"
				 document.getElementById("eee").style.left=-wbili*LEFT*xz_width+w*xz_width*wbili+"px"
				})
		},
		houtuis(e){
			if($("#fada>li").length==0){
				return
			}
			        // 获取每次移动的距离 2是li的左右padding
			        var w = parseFloat(getComputedStyle(document.querySelector("#fada>li")).marginRight)
			        +parseFloat(getComputedStyle(document.querySelector("#fada>li")).width)+2

			       // 获取当前ul的left值
			       var d=parseFloat(getComputedStyle(document.querySelector("#fada")).left)
			        // 当前减去此次需要移动到的位置
			        var moveS=d-w
			        // 限制是否能够点击移动 获取li的数量,显示区域一定要有4张图片，既可移动的图片是 数量-4
			        var linum=$('#fada>li').length
			        var canMove=-(linum-5)*(w)//可移动的次数*移动距离=可移动距离---》left
			        console.log(canMove+'ad'+w)
			        if(d>canMove){
			        	console.log('canMove')
			        	$("#fada").animate({'left':moveS+'px'},500)
			        }
			    },
			 // li列表的前进后退按钮
			 qianjins(e){
			 	if($("#fada>li").length==0){
			 		return
			 	}
			        // 获取每次移动的距离 2是li的左右padding
			        var w = parseFloat(getComputedStyle(document.querySelector("#fada>li")).marginRight)
			        +parseFloat(getComputedStyle(document.querySelector("#fada>li")).width) +2
			       // 获取当前ul的left值
			       var d=parseFloat(getComputedStyle(document.querySelector("#fada")).left)
			        // 当前减去此次需要移动到的位置
			        var moveS=d+w
			//animate({'right':'0'},1000)

			var linum=$('#fada>li').length
			        var canMove=0//可移动的次数*移动距离=可移动距离---》left
			        console.log(canMove+'ad'+d)//83 0
			        if(d<canMove){
			        	console.log('canMove')
			        	$("#fada").animate({'left':moveS+'px'},500)
			        }
			    },
			// 放大图下方li列表的鼠标放上切换上方的大图片
			qiehuans(e,i){
				var that = this
				this.fdtImg = this.datas.mu_photo[i].url
				$('.wai>img').load(function(){
					that.fdj()
				})
			    // $('#mymapa .active img').attr('src',$(e.currentTarget).attr("src"))
			    // document.getElementById("eee").src=$(e.currentTarget).attr("src")
			    // this.fdj()
			}
		},
			mounted(){
				this.chu();
				var that=this
							// 请求 对应苗圃埸ID下的全部已发布的苗木
			var where={"groundId":this.$store.state.fangdatuItem.mu_ground.objectId}
			$.get(this.$store.state.Boss+"/tree?where="+encodeURI(JSON.stringify(where))
                    ,function(data){
				if(data.status==1){
					if(data.results.data.length>0){
						console.log(3223)
				JSONS(data,'我是同场')
						that.carousel2=data.results.data
						setTimeout(function(){
							var swiper = new Swiper('.swipe-fdt', {
				direction: 'vertical',
				slidesPerView: 2,
				freeMode: true,
				onlyExternal : true,//值为true时，slide无法拖动，只能使用扩展API函数例如slideNext() 或slidePrev()或slideTo()等改变slides滑动。
				 // 如果需要分页器
				 paginationClickable: true,
				 pagination: '.swiper-pagination1',
				 observer:true,
				// 如果需要前进后退按钮
				nextButton: '.fdt-next',
				prevButton: '.fdt-pre',
			});
			var swiper2 = new Swiper('.swipe-fdt2', {
				slidesPerView: 'auto',
				freeMode: true,
				observer:true,
				onlyExternal : true,//值为true时，slide无法拖动，只能使用扩展API函数例如slideNext() 或slidePrev()或slideTo()等改变slides滑动。
				 // 如果需要分页器
				 paginationClickable: true,
    			//pagination: '.swiper-pagination2',
				// 如果需要前进后退按钮
				nextButton: '.fdt-next2',
				prevButton: '.fdt-pre2',
			});
		},100)
					}
				}

			})




			this.datas =this.$store.state.fangdatuItem //this.$store.state.all[2]
			this.fdtImg = this.$store.state.fangdatuItem.mu_photo[0].url//this.datas.mu_photo[0].url
			//this.shuliang=this.$store.state.fangdatuItem.amount
			var that = this
			$('.wai>img').load(function(){
				that.fdj()
			})
			// var swiper = new Swiper('.swipe-fdt', {
			// 	direction: 'vertical',
			// 	slidesPerView: 2,
			// 	freeMode: true,
			// 	onlyExternal : true,//值为true时，slide无法拖动，只能使用扩展API函数例如slideNext() 或slidePrev()或slideTo()等改变slides滑动。
			// 	 // 如果需要分页器
			// 	 paginationClickable: true,
			// 	 pagination: '.swiper-pagination1',
			// 	// 如果需要前进后退按钮
			// 	nextButton: '.fdt-next',
			// 	prevButton: '.fdt-pre',
			// });
			// var swiper2 = new Swiper('.swipe-fdt2', {
			// 	slidesPerView: 'auto',
			// 	freeMode: true,
			// 	onlyExternal : true,//值为true时，slide无法拖动，只能使用扩展API函数例如slideNext() 或slidePrev()或slideTo()等改变slides滑动。
			// 	 // 如果需要分页器
			// 	 paginationClickable: true,
   //  			//pagination: '.swiper-pagination2',
			// 	// 如果需要前进后退按钮
			// 	nextButton: '.fdt-next2',
			// 	prevButton: '.fdt-pre2',
			// });

			// 检测是否加入购物车
			if(this.datas.isselected==1){
				 $(".cart>div").removeClass("bg60B346s0")
                 $(".cart>div").removeClass("c60B346s0")
                 $(".cart>div").addClass("bg60B346s1")
			}
			//初始化鼠标轮滚
			this.initWheel()
			// 初始化移动的代码
   			this.init()
		}
	}
</script>
<style type="text/css">
	.swiper-pagination1 .swiper-pagination-bullet{
		background: transparent ;
		border: 1px solid #999899;
		width: 6px;
		height: 6px;
		margin-left: 5px;
	}
	.swiper-pagination1 .swiper-pagination-bullet-active{
		background: #999899 !important
	}
</style>
<style type="text/css" scoped>

	.lbContainer{
		width:657px;
		height: calc(100% - 450px);
		padding: 0 22px 0 30px;
	}
	.lbContainer .biaoti{
		width: 100%;
		height: 26px;
		font-size: 15px;
		border-bottom: 1px solid #F2F2F2;
	}
	.lbContainer .biaoti .tcmm{
		color: #676868;
		float: left;
		margin-left: 10px;
	}
	.lbContainer .biaoti .ckgd{
		color: #999899;
		float: right;
		margin-right:10px;
	}
	.ggg{
		padding:0 12px;
	}
	.swipe-fdt2{
		width: 100%;
		height: 186px;
		margin-top: 10px;
	}
	.swipe-fdt2 .swiper-slide{
		height: 185px !important;
		width: 82px;
		margin-right:10px;
	}
	.swipe-fdt2 .swiper-slide:last-child{
		margin-right:0px;
	}
	.fdt-pre2,.fdt-next2{
		width: 7px;
		height: 12px;
	}
	.fdt-pre2{
		background: url('/static/tu-detail/1-31.png') no-repeat;
		background-size: 100% 100%;
		left: 0;
		top: 50%;
	}
	.fdt-next2{
		background: url('/static/tu-detail/1-32.png') no-repeat;
		background-size: 100% 100%;
		right: 0;
		top: 50%;
	}
	.fangdatuBox{
		z-index: 2000;
		font-family: 微软雅黑;
		width: 100%;
		position: fixed;
		left: 0px;
		top: 0px;
		right: 0px;
		bottom: 0px;
		cursor: url("/static/tu-detail/1-117.png"), auto;
		background: rgba(0, 0, 0, 0.701961);
	}
	.fangdatu{
		width: 850px;
		height: 700px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: default;
		background: white;
	}
	.fdt_header{
		width: 100%;
		height: 50px;
		background-color: #F2F2F2;
		line-height: 50px;
		font-size: 16px;
	}
	.mpname{
		position: relative;
		margin-left: 30px;
		float: left;
		color: #4A494B;
	}
	.mpname>img{
		margin-left: 10px;
		width: 29px;
		height: 15px;
		margin-bottom: 2px;
	}
	.scmp{
		float: right;
		margin-right: 30px;
	}
	.lxmj{
		float: right;
		margin-right: 30px;
	}
	.tran{
		margin-bottom: 2px;
	}
	.fdt_main{
		width: 709px;
		height: 400px;

	}
	.wai{
		width: 254px;
		height: 282px;
		border:1px solid #F2F2F2;
		position: absolute;
		top: 0;
		left: 0;
	}
	.small{
		width: 256px;
		height: 52px;
		margin-top: 36px;
		margin-left: 30px;
	}
	.prev,.next{
		width: 34px;
		height: 52px;
		position: relative;
	}
	.prev>img{
		width: 11px;
		height: 22px;
	}
	.next>img{
		width: 11px;
		height: 22px;
	}
/*	.smallImg{
		width: 186px;
		height: 52px;
		margin: 0;
	}
	.smallImg>li{
		width: 29px;
		height: 52px;
		background: #F2F2F2;
		margin-right: 10px;
		float: left;
	}*/
	.smallImg>li:last-child{
		margin: 0;
	}
	.content{
		width: 385px;
		height: 100%;
		padding:32px 23px 0 13px ;
	}
	.content .miaoname{

	}
	.type19{
		width: 19px;
		height: 19px;
		display: inline-block;
		line-height: 19px;background: #35AD4A;color:#FFFFFF;text-align: center;
		position: relative;top:-3px;
		font-size: 16px;
	}
	.content .miaotime{
		color:#999899;
		width: 100%;
	}
	.content .miaotime .share{
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.content .miaotime .save{
		position: absolute;
		right: 45px;
		bottom: 0;
	}
	.miaoprice{
		margin-top: 4px;
		width: 100%;
		height: 51px;
		line-height: 51px;
		background: url(/static/tu-detail/1-67.png) no-repeat;
		background-size: 100% 100%;
	}
	.miaoprice span:first-child{
		margin-left: 7px;
	}
	.miaoprice span:nth-child(2){
		margin-left: 20px;
		font-size: 26px;
		color:#60B346;
	}
	.miaoInfo{
		height: 75px;
		margin-top: 13px;
		width: 100%;
		border-bottom:1px solid #F2F2F2;
	}
	.miaoInfo>div:first-child{
		font-size: 12px;
		width: 78px;
		height: 100%;
	}
	.miaoInfo>ul{
		padding-top: 1px;
		width:calc(100% - 78px);
		height: 100%;
		font-size: 12px;
		color:#4A494B;
	}
	.miaoInfo>ul li{
		padding-bottom: 7px;
		float: left;
		width: 50%;
	}
	.miaoAdress{
		height: 45px;
		padding-top: 12px;
		width: 100%;
		border-bottom:1px solid #F2F2F2;
	}
	.miaoAdress>div:first-child{
		font-size: 12px;
		width: 78px;
		height: 100%;
	}
	.miaoAdress>div:nth-child(2){
		width:calc(100% - 78px);
		height: 100%;
		font-size: 12px;
		color:#676868;
	}
	.miaonum{
		font-size: 12px;
		line-height: 53px;
		width: 100%;
		height: 53px;
	}
	.miaonum > div{
		margin: 0 7px 0 12px;
		position: relative;
		height: 25px;
		display: inline-block;
	}


	.cart{
		margin-left: 40px;
	}
	.klyk{
		padding: 30px 37px 0 0;
		width:calc(100% - 746px);
		height: calc(100% - 80px);
		font-size: 12px;
	}
	.klyk .title{
		padding-bottom: 9px;
		border-bottom:1px solid  #F2F2F2;
		margin-bottom: 5px;
	}
	.swipe-fdt{
		width: 100%;
		height: 483px;
	}
	.swipe-fdt .swiper-slide{
		height: 233px !important;
		width: 100%;
		border-bottom: 1px solid  #F2F2F2;
		margin-top: 10px;
	}
	.swipe-fdt .swiper-slide:first-child{
		margin-top: 0;
	}
	.fdt-pre,.fdt-next{
		width: 7px;
		height: 12px;
	}
	.fdt-pre{
		background: url('/static/tu-detail/1-31.png') no-repeat;
		background-size: 100% 100%;
		left: 0;
		top: 102%;
	}
	.fdt-next{
		background: url('/static/tu-detail/1-32.png') no-repeat;
		background-size: 100% 100%;
		right: 0;
		top: 102%;
	}
	.swiper-pagination{
		left: 50%;
		transform: translateX(-50%);
	}
/*daizou*/
	.eeeContain{
		width: 340px;
		height: 339px;
		border: 1px solid #F2F2F2;
		border-left: none;
		position: absolute;
		left: 100%;
		z-index: 1000;
		top: 30px;
		overflow: hidden;
		background: #fff;
	}
	#mask{width:126px;height:126px;
		background:url(/static/tu-detail/1-76.png) no-repeat 0 0;
		opacity:1;cursor:none;
		position: absolute;
		top: 0;
		left: 0
	}
	.fada{
		width: 186px;
		overflow: hidden;
		float: left;
		height: 52px;
	}
	.smallImg .active{
		/*border:1px solid #60B346;
		padding: 0;*/
	}
	.smallImg>li:hover{
		border:1px solid #60B346;
		padding: 0;
	}
	.smallImg>li{
		padding: 1px;
		width: 27px;
		height: 50px;
		background: #F2F2F2;
		margin-right: 10px;
		float: left;
		cursor: url("/static/tu-detail/1-117.png"), auto;
	}
	.smallImg{
		width: 1000px;
		height: 52px;
		margin: 0;
		position: absolute;
		left: 0;
	}
	#myCarousels > ol > li{width:5px;height:5px;border:1px solid #FFFFFF;margin:2px;}
	#myCarousels > ol > li.active{width:5px;height:5px;border:1px solid #FFFFFF;background:#FFFFFF;position: relative;}

/*.zhongji .carousel-inner>.item>a>img,.zhongji  .carousel-inner>.item>img,.zhongji  .img-responsive,.zhongji  .thumbnail a>img,.zhongji  .thumbnail>img{max-width:auto !important;}


	.zhongji .active>img{max-width:auto !important;}*/
</style>
