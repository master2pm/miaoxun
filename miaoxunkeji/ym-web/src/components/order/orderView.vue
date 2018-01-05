<template>

	<div class="" style="background:#f2f2f2;padding-bottom:100px;">

		<div style="background:#393c3d;" class="">
			<div style="width:986px;padding:0 20px;height:125px;line-height:125px;" class="f26 cffffff  layui-main">
			订单
		</div>
		</div>
<!-- 说明 
1.pending_order_count:承接交易与拟定交易方式 总数;
pending_order_wait_for_dispose_count:承接交易与拟定交易方式 待处理数;
2.order_count:确认付款方式与运输方式;
order_wait_for_dispose_count:确认付款方式与运输方式 待处理数;
3.shipment_count:确定运费与发货;
shipment_wait_for_offering_count:确认付款方式与运输方式 待运费报价;
shipment_wait_for_delivery_count:确认付款方式与运输方式 待发货;
4.trade_count:查看验收与收货;
5.invalid_count:已关闭数; -->
		<ul v-if="data.length!=0" style="width:986px;padding:20px 20px 100px 20px;background:#f2f2f2;" class=" layui-main">
		    <li v-show="lishow==true" style="margin-bottom:20px;" class="relative"> 	
                   <img src="/static/tu-order/1-37.png">
                   <img @click="lishow=false" @mouseenter="srcs=1" @mouseleave="srcs=0"  :src="srcs==0?'/static/tu-order/1-39.png':'/static/tu-order/1-38.png'" class="absolute cursor" style="right:20px;top:20px;">
		    </li>	
			<!--  <li @click="goorder(1)" style="height:80px;padding:15px 20px 25px 20px;margin-top:20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b">承接交易与拟定交易方式</p>
			 	<p class="f18 c676868" style="margin-top:35px;">您有<span class="cc96832">{{data.pending_order_wait_for_dispose_count}}</span>单待承接</p>
			 	<span class="f50 c676868 absolute" style="right:15px;bottom:5px;">{{data.pending_order_count}}</span>
			 </li> -->
			  <li @click="goorder(1)" style="height:142px;padding:0 20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b border-b relative" style="height:85px;line-height:85px;">承接交易与拟定交易方式
                         
                         <span v-show="data.pending_order_count==''" class="f26 c999899 absolute" style="right:15px;bottom:5px;">0笔订单</span>
			 	         <span  :class="{grees:indexs==1}" @mouseenter="indexs=1" @mouseleave="indexs=-1" v-show="data.pending_order_count!=''" class="f26 c676868 absolute" style="right:15px;bottom:5px;">{{data.pending_order_count}}笔订单
                         <!-- 绿色的线条 -->
			 	         <span v-if="indexs==1" style="bottom:22px;width:100%;height:0;border-top:2px solid #269C88;" class="absolute layui-anim  layui-anim-scale"></span>
			 	         </span>
			 	</p>
			 	<span v-show="data.pending_order_count==''" class="f18 c999899">您暂时没有订单待确认交易哦~</span>
			 	<span v-show="data.pending_order_count!=''" class="f18 c676868">您有<span class="cC96832">{{data.pending_order_wait_for_dispose_count}}</span>单待承接</span>
			 	
			 </li>
			<!--   <li @click="goorder(2)" style="height:80px;padding:15px 20px 25px 20px;margin-top:20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b">确认付款方式与运输方式</p>
			 	<p class="f18 c676868" style="margin-top:35px;">您有<span class="cc96832">{{data.order_wait_for_dispose_count}}</span>单待确认交易</p>
			 	<span class="f50 c676868 absolute" style="right:15px;bottom:5px;">{{data.order_count}}</span>
			 </li> -->
			 <li @click="goorder(2)" style="height:142px;margin-top:20px;padding:0 20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b border-b relative" style="height:85px;line-height:85px;">确认付款方式与运输方式
                         
                         <span v-show="data.order_count==''" class="f26 c999899 absolute" style="right:15px;bottom:5px;">0笔订单</span>
			 	         <span @mouseenter="indexs=2" @mouseleave="indexs=-1" v-show="data.order_count!=''" :class="{grees:indexs==2}"  class="f26 c676868 absolute" style="right:15px;bottom:5px;">{{data.order_count}}笔订单
			 	        <!-- 绿色的线条 -->
			 	         <span v-if="indexs==2" style="bottom:22px;width:100%;height:0;border-top:2px solid #269C88;" class="absolute layui-anim  layui-anim-scale"></span>
			 	         </span>
			 	</p>
			 	<span v-show="data.order_count==''" class="f18 c999899">您暂时没有订单待确认交易哦~</span>
			 	<span v-show="data.order_count!=''" class="f18 c676868">您有<span class="cC96832">{{data.order_wait_for_purchase_confirm_count}}</span>单待确认交易</span>
			 	
			 </li>
			 <!--  <li @click="goorder(3)" style="height:80px;padding:15px 20px 25px 20px;margin-top:20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b">确定运费与发货</p>
			 	<p class="f18 c676868" style="margin-top:35px;">您有<span class="cc96832">{{data.shipment_wait_for_offering_count}}</span>单等待运费报价，<span class="cc96832">{{data.shipment_wait_for_delivery_count}}</span>单待发货</p>
			 	<span class="f50 c676868 absolute" style="right:15px;bottom:5px;">{{data.shipment_count}}</span>
			 </li> -->
			  <li @click="goorder(3)" style="height:142px;margin-top:20px;padding:0 20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b border-b relative" style="height:85px;line-height:85px;">确定运费与发货
                         
                         <span v-show="data.shipment_count==''" class="f26 c999899 absolute" style="right:15px;bottom:5px;">0笔订单</span>
			 	         <span :class="{grees:indexs==3}" @mouseenter="indexs=3" @mouseleave="indexs=-1"  v-show="data.shipment_count!=''" class="f26 c676868 absolute" style="right:15px;bottom:5px;">{{data.shipment_count}}笔订单
                         <!-- 绿色的线条 -->
			 	         <span v-if="indexs==3" style="bottom:22px;width:100%;height:0;border-top:2px solid #269C88;" class="absolute layui-anim  layui-anim-scale"></span>
			 	         </span>
			 	         </span>
			 	</p>
			 	<span v-show="data.shipment_count==''" class="f18 c999899">您暂时没有订单待运费报价与待发货哦~</span>
			 	<span v-show="data.shipment_count!=''" class="f18 c676868">您有<span class="cC96832">{{data.shipment_wait_for_offering_count}}</span>单等待运费报价,<span class="cC96832">{{data.shipment_wait_for_delivery_count}}</span>单待发货</span>
			 	
			 </li>
			  <li @click="goorder(4)" style="height:142px;margin-top:20px;padding:0 20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b border-b relative" style="height:85px;line-height:85px;">验货与收货
                         
                         <span v-show="data.trade_count==''" class="f26 c999899 absolute" style="right:15px;bottom:5px;">0笔订单</span>
			 	         <span :class="{grees:indexs==4}" @mouseenter="indexs=4" @mouseleave="indexs=-1"  v-show="data.trade_count!=''" class="f26 c676868 absolute" style="right:15px;bottom:5px;">{{data.trade_count}}笔订单
                           <!-- 绿色的线条 -->
			 	         <span v-if="indexs==4" style="bottom:22px;width:100%;height:0;border-top:2px solid #269C88;" class="absolute layui-anim  layui-anim-scale"></span>

			 	         </span>
			 	</p>
			 	<span v-show="data.trade_count==''" class="f18 c999899">您暂时没有订单待买家确认收货哦~</span>
			 	<span v-show="data.trade_count!=''" class="f18 c676868">您有<span class="cC96832">{{data.trade_wait_for_delivery_count}}</span>单等待买家确认收货</span>
			 	
			 </li>
			  <li @click="goorder(5)" style="height:104px;line-height:104px;padding:0 20px;margin-top:20px;" class="bgF2F2F2 rad relative cursor">
			 	<p class="f26 c4a494b">已关闭的交易</p>
			 	<span v-show="data.invalid_count!=''" class="f26 cBF4040 absolute" style="right:15px;bottom:5px;">您有{{data.invalid_count}}笔已关闭的交易</span>
			 	<span v-show="data.invalid_count==''" class="f26 c999899 absolute" style="right:15px;bottom:5px;">您暂时没有已关闭的订单</span>
			 </li>
		</ul>
		

	</div>
</template>
<script>

	export default{
		data(){
			return{
				data:[],
				srcs:0,
				indexs:-1,//控制线条和字体颜色的
				lishow:true
			}
		},
		
		components:{
			
			
		},

		methods:{
			goorder(index){
				// alert(name)
				this.$router.push({name:'orderViewItem',params:{'index':index,'objectId':0}})
			},
			getdata(){
				var that=this
				$.get(Boss+'supply/statistics',{"sessiontoken":sessiontoken,"groupId":groupId},function(data){
					JSONS(data,'查看查看交易统计数据')
					if(data.status==1){
                     that.data=data.results
					}
				})
			}
		},
		mounted(){
			this.getdata()
		}
	}
</script>
<style	scoped>
ul>li{background: white;}
.grees{color:#269C88 !important;}
</style>

<!-- 说明 pending_order_count: 承接交易与拟定交易方式 总数
pending_order_wait_for_dispose_count: 带承接 总数
pending_order_wait_for_purchase_confirm_count: 待买家确认 总数
pending_order_wait_for_pay_and_ship_count: 待买家选择付款与运输 总数
order_count: 确认付款方式与运输方式 总数 
order_wait_for_purchase_confirm_count: 待确认交易 总数
order_wait_for_purchase_commit_shipment_count: 待买家填写运单 总数
shipment_count: 确定运费与发货 总数
shipment_wait_for_offering_count: 待运费报价 总数
shipment_wait_for_confirm_count: 待买家确认运输 总数
shipment_wait_for_delivery_count: 待买卖家发货 总数
trade_count: 验收与收货 总数
trade_wait_for_delivery_count: 待买家收货 总数
trade_delivery_confirm_count: 交易已完成 总数
invalid_count :关闭的交易数 -->