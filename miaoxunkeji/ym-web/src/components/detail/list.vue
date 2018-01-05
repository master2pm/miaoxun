
<template>

	<div class="">
	
		<!-- 苗源  @mouseenter="indexa=index" @mouseleave="indexa=-1" @mouseenter="indexb=index" @mouseleave="indexb=-1" item.mu_coordinate.latitude!=''&&item.mu_coordinate.longitude!=''-->
		<transition name="fade">
		<ul	v-if="datas!=''" v-cloak class=" miaoyuan overflow" :class="{miaoyuanH:view==5,miaoyuanS:view==4}">
			<li :latitude="item.mu_coordinate.latitude" :longitude="item.mu_coordinate.longitude"  v-show="item.mu_coordinate.latitude!=undefined&&item.mu_coordinate.longitude!=undefined" :class="item.objectId" @mouseenter="chengs(item.objectId,index,$event)" @mouseleave="greens(item.objectId,index,$event)"  v-for="(item,index) in datas">
				<div >
					<div @click.stop="liclick($event,item,index)" :classz="item.objectId" :class="{border80:indexb!=index,width4:view==4,width5:view==5}" class=" fangda cursor overflow kuang relative" >

						<img v-if="view==4" :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/230/h/345':'/static/tu-detail/1-102.png'" class="jz"  :class="{borderL1:indexa==index,borderB1:indexa!=index}" style="">
						<img  v-if="view==5"  :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/95/h/169':'/static/tu-detail/1-102.png'" class="jz"  :class="{borderL1:indexa==index,borderB1:indexa!=index}" style="">
						<!-- margin-bottom:7px; -->
					</div>
					
					<div style="padding:0 8px;" class="kuangr">



						<div class="f18 c4A494B relative"><span class="cursor" @click="showme(item.objectId,index,item.mu_coordinate.longitude,item.mu_coordinate.latitude)">{{item.mu_name.length>8?item.mu_name.substring(0,8):item.mu_name}}</span>
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
							<div class="showorhide" style="margin-top:15px;display:none;">
<!-- v-show="indexa==index" -->
							
								<span @click="clicks($event,1,item.objectId,'当前登录人所属的组的id',1,item.mu_photo[0].url)" @mouseenter="mouseenters($event)" @mouseleave="mouseleaves($event)" class="lf f12 c989698 center border cursor" :class="{c60B346:item.isselected==1}" style="height:35px;line-height:35px;width:142px;" >{{item.isselected==0?'加入购物车':'已加入购物车'}}</span>

								<span @click="clicks($event,2,item.objectId,'tree',0,index)" @mouseenter="mouseenters($event)" @mouseleave="mouseleaves($event)" class="border lf f12 c989698 center cursor" :class="{c60B346:item.isfavor==1}" style="height:35px;line-height:35px;width:83px;border-left:none;">{{item.isfavor==0?'收藏':'已收藏'}}</span>
							</div>
						</div>

					</div>
				</li>
			</ul>
</transition>
<!-- 点击的放大图 -->
<fangdatu v-if="fangdatuShow==true"></fangdatu>

			<div	style="display:none;">{{jiance}}</div>

		</div>
		
	</template> 


	<!--2. 默认导出 -->
	<script>
import fangdatu from '../common/fangdatu.vue'
		export default {
			name: 'list',
			data() {
				return {
				view:this.$store.state.view,//4浮动的，5是独占一行的
				fangdatuShow:false,//控制放大图的显示和隐藏
				datas:this.$store.state.group,
				indexb:-1,//控制灰色背景的
				indexa:-1,//鼠标放上li图片出现绿色的边框线
				carousel:['/static/tu-detail/1-01.png','/static/tu-detail/1-01.png','/static/tu-detail/1-01.png','/static/tu-detail/1-01.png']

			};
		},
		watch: {
			'$route':'routeChange'
      // 对路由变化作出响应...
  },
  computed:{
  	jiance(){
  		this.datas=this.$store.state.group
  		this.view=this.$store.state.view
		//alert(this.datas)
	}
},
components:{"fangdatu":fangdatu},
methods:{
	// 点击列表图片的时候放大图显示
	liclick(e,item,index){
         this.fangdatuShow=true
         this.$store.state.fangdatuIndex=index
         this.$store.state.fangdatuItem=item
         

	},
	routeChange(){
		var that=this
		if(that.$route.path.indexOf("all")!=-1||that.$route.path.indexOf("item")!=-1){
			var i=that.$route.params.indexs
			that.$store.commit("searchs",i)
			console.log(that.$store.state.group)
		}
  	},
  	showme(d,index,x,y){
				// 模拟地图被点击价格标
				console.log($(".ditu #"+d))
				$(".ditu #"+d).click()
			},
			// 加入购物车和收藏
			clicks(e,n,objectId,type,amount,img){
				if(n==1){
					common_adds(e,n,objectId,type,amount,img)
					//this.$store.commit("searchAdd")
				//this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId})
				}else if(n==2){
					common_adds(e,n,objectId,type,amount)
                    // 让对应的收藏变成已收藏或者未收藏
                     if(sessiontoken==null){
					 	return
					 }
                    if(this.$store.state.group[img].isfavor==1){
                    	this.$store.state.group[img].isfavor=0
                    }else if(this.$store.state.group[img].isfavor==0){
                    	 this.$store.state.group[img].isfavor=1
                    }
                    
                   
				//this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId,'type':type})
				}
          

			},
			mouseenters(e){
				$(e.currentTarget).addClass("F1F1F1bg")
			},	
			mouseleaves(e){
				$(e.currentTarget).removeClass("F1F1F1bg")
			},
			chengs(d,index,e){//鼠标放上的时候让右边的地图价格条变橙色
				this.indexa=index //vue控制的
				 //显示加入购物车和收藏 
                $(e.currentTarget).find('.showorhide').css({"display":'block'})

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
			greens(d,index,e){//鼠标离开的时候让右边的地图价格条变橙色
				// 加入购物车和收藏的控制
				this.indexa=-1
				$(e.currentTarget).find('.showorhide').css({"display":'none'})

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
				
				
			}
		},
		mounted(){
			var that=this
			var i=that.$route.params.indexs
			that.$store.commit("searchs",i)
			if(i==1){
				this.$store.state.view=JSON.parse(window.sessionStorage.getItem('title'))[i].my.view 
			}else{
				this.$store.state.view=JSON.parse(window.sessionStorage.getItem('title'))[i].item.view 
			}
			
			// console.log(i)
			// //alert(i)
			// console.log(that.$store.state.group)
			// console.log(that.$store.state.group[i])
			// console.log(that.datas)
			// that.datas=that.$store.state.group[i]

			//}

			
		}
	};

</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
/*共同的*/
	.miaoyuan{margin-top: 35px;}
	.miaoyuan>li{margin-bottom:20px;}



	/*浮动的4*/
	/*.miaoyuanS>li{height:610px;width:246px;margin-bottom:20px;float:left;}*/
	.miaoyuanS>li{height:545px;width:246px;margin-bottom:20px;float:left;}
	.miaoyuanH>li .kuang{width:231px;height:411px;}


	/*独占一行的5*/
	.miaoyuanH>li{border-bottom:1px solid #F2F2F2;height:210px;margin-bottom:20px;display:block !important;}
	.miaoyuanH>li .kuang{height:169px !important;width:95px !important;float:left;}
	.miaoyuanH>li .kuangr{padding-top:10px !important;height:169px !important;width:370px;float:left;}
	.width4{width:232px;height:347px;}
	.width5{width:97px;height:171px;}
/*地图点击价格标让左边列表的加入购物车和收藏出现*/
/*.SHOWS{display: block !important;}*/
</style>
