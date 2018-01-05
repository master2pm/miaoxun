<template>

	<div style="background:#f2f2f2;">
       <div style="background:#f2f2f2;" id="scrolltop">
       <!-- position:fixed;top:60px;left:0; -->
		<div style="background:#393c3d;width:100%;z-index:2;" class="f14">
			<div style="width:926px;padding:0 30px;height:43px;line-height43px;" class="cf2f2f2  layui-main relative">
			<router-link :to="{name:'orderView'}" tag="div" >
				<span class="czjz cursor" style="padding-right:30px;">返回订单</span>
			</router-link>	
			
			<span class="cc96832 czjz " style="border-left:1px solid #727272;border-right:1px solid #727272;margin-left:90px;padding:0 30px;">
			<span v-show="list==1">承接交易与拟定交易方式</span>
			<span v-show="list==2">确认付款方式与运输方式</span>
			<span v-show="list==3">确定运费与发货</span>
			<span v-show="list==4">验货与收货</span>
			<span v-show="list==5">已关闭的交易</span>
			  <!-- 10个字 -->
              <span v-show="list==1||list==2" style="border-top:1px solid #C96832;width:130px;top:26px;" class="spjz"></span>
              <!-- 5个字 -->
               <span v-show="list==4" style="border-top:1px solid #C96832;width:40px;top:26px;" class="spjz"></span>
              <!-- 6个字 -->
               <span v-show="list==5" style="border-top:1px solid #C96832;width:66px;top:26px;" class="spjz"></span>
                <!-- 7个字 -->
               <span v-show="list==3" style="border-top:1px solid #C96832;width:70px;top:26px;" class="spjz"></span>
               

			</span>
		</div>
		</div>
<div id="juli">
<!-- margin-top:43px; -->
		<div style="height:60px;width:986px;" class="bai f13  layui-main relative">
			<span class="czjz" style="left:40px;">详细信息</span>
			<span class="czjz" style="left:430px;">{{list==3||list==4?'合计（含运费）':'合计（不含运费）'}}</span>
			<span class="czjz" style="left:635px;">{{list==3?'预定到货时间':(list==4?'预定到货时间':'交易发起时间')}}</span>
			<span class="czjz" style="left:855px;">操作</span>
		</div>
	

		<ul id="demoLoad"  style="width:986px;margin-bottom:190px;position: relative;" class="flow-default layui-main orderViewItem">
			<li v-if="datas.length>0" :classing="item.objectId" v-for="(item,index) in datas" class="bai relative" style="height:90px;width:906px;padding:25px 40px;margin-top:15px;">
			
			  <div	style="height:60px;width:60px;display:inline-block;" class="layui-circle relative overflow">
			  	<img :src="item.group.avatar.url+'?imageView2/1/w/60/h/60'" alt="" class="jz absolute lay-src" style="min-width:60px;min-height:60px;border-radius:50%;">
			  </div>
				


				<div style="height:40px;width:205px;left:115px;top:35px;" class="absolute f15 c4a494b">
					{{item.group.name}}
				</div>
				<img :src="item.group.type=='private'?'/static/tu-order/1-10.png':(item.group.type=='company'?'/static/tu-order/1-09.png':'/static/tu-order/1-08.png')" alt="" class="absolute" style="left:325px;top:35px;">

<!-- 确定运费与发货才有运单号 -->
                <p v-if="list==3||list==4" class="f13 absolute c676868" style="bottom:20px;"> 	
				   运单号 {{item.sn}}
				</p>


				<p class="f13 absolute" style="bottom:0;"> 	
				<span class="c999899">{{list==3?(item.shipment_status!=700?'预采购苗木':'采购苗木'):(list==4?'采购苗木':'采购名称 ')}} · </span> 
				<span class="c4A494B">{{list==1||list==2||list==5?item.mu_name:(item.tree_type_count+'种')}}</span>
				<span class="cf2f2f2">  |  </span> 
				<span class="c999899">{{list==3||list==4?'运输总数':'预采购数量'}}  · </span> 
				<!-- 3,4这两种情况存在两种情况，可能是同时存在 草坪和苗木 -->
				<span class="c4A494B"   v-if="list==3||list==4">
				    <span class="c676868" style="margin-right:5px;" >		
                       {{pfm(item.send_count_detail)}}
                       {{dian(item.send_count_detail)==0?'':'·'}}
                       {{zhu(item.send_count_detail)}}
	               </span>
				
				</span>
				</span>

				<span class="c4A494B" v-if="list!=3&&list!=4">{{item.amount}}{{item.unit}}</span>
				<!-- {{item.mu_type=='草坪'?'㎡':'株'}} -->
				</p>

				<span class="c60B346 f16 czjz" style="left:427px;">{{item.current_price==-1||item.total_price==-1?'待卖家填写报价':('￥'+(list==3||list==4?item.total_price+item.current_freight:item.amount*item.current_price))}}</span> 

				<!-- <span class="c676868 f16 czjz " style="left:627px;">{{list==3||list==4?formatDate(item.delivery_time):item.createdAt.replace(/-/g,'.').substring(0,10)}}</span>  -->
				<!-- <span v-show="list==4&&findIndexs(item)!=-1" class="c676868 f16 czjz " style="left:627px;">{{findIndexs(item)!=-1?'自提单':''}}</span>  -->
				
				<!-- 第三部分和第四部分的非自提的 02月1日 星期四 14:5 -->
				<span class="c676868 f16 czjz " v-if="list==3||(list==4&&findIndexs(item)==-1)" style="left:627px;">{{formatDate(item.delivery_time)}}</span> 
                <!-- 第一第二部分的2017.02.13 -->
				<span class="c676868 f16 czjz " v-if="list!=3&&list!=4" style="left:627px;">{{item.createdAt.replace(/-/g,'.').substring(0,10)}}</span> 
                  <!-- 第四部分的自提单 -->
				<span v-if="list==4&&findIndexs(item)!=-1" class="c676868 f16 czjz " style="left:627px;">{{findIndexs(item)!=-1?'自提单':''}}</span> 
				
				
				<!--

{{list==3?item.delivery_time.replace('年','.').replace('月','.').replace('日','.').substring(0,10):(list==4?item.delivery_disposeAt.replace(/-/g,'.').substring(0,10):item.createdAt.replace(/-/g,'.').substring(0,10))}}
				-->
				<button type="" @click="xiangqing(item.objectId,item)" class="layui-btn layui-btn-primary czjz f15 c60B346" style="right:40px;border:1px solid #60B346;">{{list==1||list==2||list==5?'查看交易详情':'查看运单详情'}}</button>
<!-- 1.承接交易与拟定交易方式   3种状态 -->
<!-- 卖方supply_status说明:
50:显示：待承接;
150:显示：等待买家确认;
210:显示：待买家选择付款与运输;
511:显示：待确认交易;
521:显示：等待买家填写运单 -->	
				<span v-if="list==1&&list!=-1" class="c999899 f16 absolute" style="right:40px;bottom:10px;">
				{{item.supply_status==50?'待承接':(item.supply_status==150?'等待买家确认交易':'待买家选择付款与运输方式')}}
				</span> 
<!-- 2.确认付款方式与运输方式   2种状态 -->
				<span v-if="list==2&&list!=-1" class="c999899 f16 absolute" style="right:40px;bottom:10px;">
				{{item.supply_status==511?'待确认交易':'等待买家填写运单'}}
				</span> 
<!-- 3.确定运费与发货   3种状态 -->
<!-- 卖方shipment_status说明:
610:显示: 等待运费报价;
620:显示: 等待买家确认运输;
700:显示: 待发货; -->
				<span v-if="list==3&&list!=-1" class="c999899 f16 absolute" style="right:40px;bottom:10px;">
				{{item.shipment_status==610?'等待运费报价':(item.shipment_status==620?'等待买家确认运输':'待发货')}}				
				</span> 
<!-- 4.验收与发货   2种状态 -->
<!-- 买方 trade_status说明:
812:显示: 等待买家收货;
920:显示: 运单已收货; -->
				<span v-if="list==4&&list!=-1" class="c999899 f16 absolute" style="right:40px;bottom:10px;">
				{{item.trade_status==920?'运单已收货':'等待买家收货'}}
				</span> 
<!-- 5.已关闭的交易   2种状态 -->
<!-- -1：卖家拒绝承接
-2：是删除的交易 -->
				<span v-if="list==5&&list!=-1" class="c999899 f16 absolute" style="right:40px;bottom:10px;">
               {{item.supply_status==-1?'拒绝承接的交易':'买家删除的交易'}}
				</span> 												
			</li>
		</ul>
</div>
</div>
<!-- 查看运单详情的弹出框 -->
<div class="wai_kuangs animated fadeIn" @click.stop="xqfalse()" v-if="xiangqings==true" :style="{height:h}" style="position:absolute;">
     <div  @click.stop="ceshi()" class="layui-main" style="width:700px;margin-top:125px;margin-bottom:125px;">
     		 <xiangqing style="width:700px;"></xiangqing>
     </div>	
</div>

	</div>
</template>
<style type="text/css" >
	.orderViewItem .layui-flow-more{
		    position: absolute;
    bottom: -50px;
    left: 50%;
	}
</style>
<script>
 import xiangqing from '../gouwuche/xiangqing.vue'
	export default{
		data(){
			return{
				top:'',//记录底部的滚动距离
				h:$(document).height()+'px',
				list:-1,//判断是哪里进来的
				datas:[],
				// page_now:1,//当前页数
				page_count:0,//总页数
				 xiangqings:false
			}
		},
		
		components:{
			 "xiangqing":xiangqing
			
		},

		methods:{
dian(item){
     for (var i = 0; i < item.length; i++) {
     	if(item[i].value==0){
            return 0
     	}
     }
     return 1
},
pfm(item){
     for (var i = 0; i < item.length; i++) {
     	if(item[i].key=='㎡'&&item[i].value!=0){
            return '草坪'+item[i].value+'㎡'
     	}
     }
   
},
zhu(item){
     for (var i = 0; i < item.length; i++) {
     	if(item[i].key=='株'&&item[i].value!=0){
            return '苗木'+item[i].value+'株'
     	}
     }

},
findIndexs(item){
		return _.findIndex(item.ship_type_collect, function(o) { 
			return o== '买家自提苗木'; 
		})
		// console.log(
  //       _.findIndex(item.ship_type_collect, function(o) { 
		// 	return o== '买家自提苗木'; 
		// })
		// 	)
		// console.log(
  //        item.ship_type_collect
		// 	)
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
			ceshi(){
				console.log('我是测试')
			},
			xqfalse(){
			// 网页弹出框可以滚动但是底部的内容不可以滚动
             $('#scrolltop').removeClass('scrolltop')
             this.xiangqings=false
             $(window).scrollTop(this.top)
			},
			xiangqing(objectId,item){
				var that=this
				// 1.保存滑动的位置
				this.top=$(window).scrollTop()
				console.log(this.top)
				$('#scrolltop').css({'top':-this.top+60+'px'})
				$(window).scrollTop('0')
               	// 2.网页弹出框可以滚动但是底部的内容不可以滚动
             $('#scrolltop').addClass('scrolltop')
                  // alert(this.top)
               	  this.xiangqings=true
               	  this.$route.params.objectId=objectId 
               	  setTimeout(function(){
               	  	 that.h=$(document).height()+'px'
               	  },1500)
               	  
			},
			loads(){
				var that=this
//console.log($('#demoLoad'))
				//alert(222)
                layui.use('flow',function(){
                	var $ = layui.jquery;
                	var flow=layui.flow;
                	// flow.lazyimg();
                	flow.load({
                		elem:'#demoLoad',
                		//scrollElem:'document',//滚动条所在元素选择器，默认document。如果你不是通过窗口滚动来触发流加载，而是页面中的某一个容器的滚动条，那么通过该参数指定即可。
                		 //isAuto:true,//是否自动加载。默认true。如果设为false，点会在列表底部生成一个“加载更多”的button，则只能点击它才会加载下一页数据。
                		 end:'<div style="font-size:12px;color:#999899;">没有更多啦</div>',//用于显示末页内容，可传入任意HTML字符。默认为：没有更多了
                		// isLazyimg:false,//是否开启图片懒加载。默认false。
                		// mb:50,//与底部的临界距离，默认50。即当滚动条与底部产生该距离时，触发加载。注意：只有在isAuto为true时有效。
                		done:function(page,next){
                			// alert('more')
                			// page++
                			//模拟数据插入
      			if(that.$route.params.index==1){
       	            var php='supply'					
				}else if(that.$route.params.index==2){
					var php='supplyOrders'
					
				}else if(that.$route.params.index==3){
					var php='supplyShipment'
					// 确定运费与发货
				}else if(that.$route.params.index==4){
					var php='supplyTrade'
					
				}else if(that.$route.params.index==5){
					var php='supplyDiscardOrders'
					// 已关闭的交易
				}
				// 查看验收与收货
				var bb={"sessiontoken":sessiontoken,'limit':that.$store.state.limit20,'page':page}
				if(that.$route.params.index!=2){
                   bb['groupId']=groupId
				}
					$.get(Boss+php,bb,function(data){
						  JSONS(data,'查看验收与收货')
						  var lis = []
						  console.log(data.results.data)
						  if(data.status==1){
						  	that.page_count=data.results.page_count
						  	for (var i = 0; i < data.results.data.length; i++) {
						  		that.datas.push(data.results.data[i])

						  	}
						  	
						  	   next(lis.join(''),page < that.page_count); //假设总页数为 10


						  	
						  }
						  
					})
        
        //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
        //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
     
   
                		}
                	})
                })
			},
			getdata(){
			
				var that=this
				if(this.$route.params.index==1){
					// 承接交易与拟定交易方式列表
					$.get(Boss+'supply',{"sessiontoken":sessiontoken,'limit':this.$store.state.limit20,'page':1,'groupId':groupId},function(data){
						  JSONS(data,'承接交易与拟定交易方式列表')
						  if(data.status==1){
						  	that.datas=data.results.data
						  	that.page_count=data.results.page_count
						  	that.loads()
						  }
						  
					})
				}else if(this.$route.params.index==2){
					// 确认付款方式与运输方式
					$.get(Boss+'supplyOrders',{"sessiontoken":sessiontoken,'limit':this.$store.state.limit20,'page':1},function(data){
						  JSONS(data,'确认付款方式与运输方式')
						  if(data.status==1){
						  	that.datas=data.results.data
						  	that.page_count=data.results.page_count
						  	that.loads()
						  }
						  
					})
				}else if(this.$route.params.index==3){
					// 确定运费与发货
					$.get(Boss+'supplyShipment',{"sessiontoken":sessiontoken,'limit':this.$store.state.limit20,'page':1,'groupId':groupId},function(data){
						  JSONS(data,'确定运费与发货')
						  if(data.status==1){
						  	that.datas=data.results.data
						  	that.page_count=data.results.page_count
						  	that.loads()
						  }
						  
					})
				}else if(this.$route.params.index==4){
					// 查看验收与收货
					$.get(Boss+'supplyTrade',{"sessiontoken":sessiontoken,'limit':this.$store.state.limit20,'page':1,'groupId':groupId},function(data){
						  JSONS(data,'查看验收与收货')
						  if(data.status==1){
						  	that.datas=data.results.data
						  	that.page_count=data.results.page_count
						  	that.loads()
						  	
						  }
						  
					})
				}else if(this.$route.params.index==5){
					// 已关闭的交易
					$.get(Boss+'supplyDiscardOrders',{"sessiontoken":sessiontoken,'limit':this.$store.state.limit1000,'page':1,'groupId':groupId},function(data){
						  JSONS(data,'已关闭的交易')
						  if(data.status==1){
						  	that.datas=data.results.data
						  	that.page_count=data.results.page_count
						 	that.loads()
						  }
						  
					})
				}
			}
		},
		mounted(){
			var that=this
			this.list=this.$route.params.index
			this.loads()
			// this.getdata()
		}

	}
</script>
<style	scoped>
.scrolltop{
        overflow:hidden;
        position:fixed;
        width:100%;
        top:60px;
        left:50%;
        transform: translateX(-50%);
        }

/*.bbbb{height:60px;width:60px;display:inline-block;border-radius:50%;}*/
</style>