<!-- 购物车基础路由的样式 -->
<template>

	<div id="gouwuche4" class=" overflow" style="background:#F2F2F2;">
	<!-- 搜索 -->
	<div style="display:none;">
			{{watch}}
		</div>
	<div style="padding:0 20px;display:none;" class=" bai">
		  <div style="height:48px;padding:25px 0;width:100%;" class="bai  relative">
			
				<input placeholder="查找订单" type="text" name="" class="f18 border rad" style="width:calc(100% - 55px);height:49px;padding:0 10px 0 45px;" >
				<img src="/static/tu-gouwuche/1-97.png" alt=""  class="czjz" style="left:10px;">
				<img src="/static/tu-gouwuche/1-46.png" alt="" class="czjz cursor" style="right:10px;">
		</div>
	</div>
	<!-- 列表@scroll="scrolls($event)" animated zoomIn-->	
	<ul   id="gouwucheLoads"  :style="{height:h}"  style="overflow-y:scroll;margin-bottom:0;" class=" relative  flow-default ">
		<li v-if="datas.length>0" v-for="item in datas" style="margin-top:15px;padding:0 20px;" class="bai">

			<div style="height:60px;line-height:60px;" class="relative border-b f15 c676868">
				<span v-show="item.ship_type_collect[0]!='买家自提苗木'">预定到货时间：{{formatDate(item.delivery_time)}}</span>
				<span v-show="item.ship_type_collect[0]=='买家自提苗木'">自提</span>
				<router-link target="_blank" :to="{name:'xiangqing',params:{objectId:item.objectId}}">
				<span class="f12 c60B346 czjz cursor" style="right:23px;">查看运单详情
				<i class="iconfont icon-arrow-bottom f12" style=""></i>
				</span>
				<!-- <img   class=" czjz cursor" style="right:10px;" src="/static/tu-gouwuche/2-10.png" alt="" > -->

				</router-link>
			</div>

			<p style="margin:26px 0 24px 0;" class="relative">
				<img :src="item.group.avatar.url+'?imageView2/1/w/48/h/48'" alt="" style="">
				<span class="c676868 f15">{{item.supply_group_name}}</span>
				<!-- 个人 -->
				<img v-show="item.group.type=='private'" src="/static/tu-detail/1-13.png" alt="" class="czjz cursor" style="right:10px;">
				<!-- 企业 -->
				<img v-show="item.group.type=='company'" src="/static/tu-detail/1-12.png" alt="" class="czjz cursor" style="right:10px;">
				<!-- 团队 -->
				<img v-show="item.group.type=='group'" src="/static/tu-detail/1-11.png" alt="" class="czjz cursor" style="right:10px;">
			</p>

			<p class="f15 c999899 relative">
				<span>采购苗木 · </span>
				<span class="c676868 border-r" style="padding-right:10px;margin-right:5px;">{{item.tree_type_count}}种</span>
				<span >运输总数 ·   </span>
				<span class="c676868" style="margin-right:5px;" >		
                       {{pfm(item.send_count_detail)}}
                       {{dian(item.send_count_detail)==0?'':'·'}}
                       {{zhu(item.send_count_detail)}}
	              </span>
				 <!-- {{its.key=='株'?'苗木':'草坪'}}{{its.value}}{{its.key}} -->
				
			</p>

			<p class="f15 c999899" style="margin:10px 0;">运单号 {{item.sn}}</p>

			<p class="f15 c676868 relative" style="padding-bottom:30px;">
				<span>合计（含运费）：</span>
				<span class="f18 c60B346">￥{{parseFloat(item.total_price)+parseFloat(item.current_freight)}}</span>
				<!-- 等待卖家发货 710-->
				<!-- <img v-if="item.trade_status==710" src="/static/tu-gouwuche/1-89.png" alt="" class="czjz cursor" style="right:10px;"> -->
				<span v-if="item.trade_status==710" class="absolute cursor f15 c999899" style="right:10px;bottom:27px;">等待卖家发货</span>
				<!-- 苗木待收货 810-->
				<!-- <img v-if="item.trade_status==810" src="/static/tu-gouwuche/1-90.png" alt="" class="czjz cursor" style="right:10px;"> -->
				<span v-if="item.trade_status==810" class="absolute cursor f15 c999899" style="right:10px;bottom:27px;">苗木待收货</span><!-- 灰色 -->
				
				<span v-if="item.trade_status==811" class="absolute cursor f15 c999899" style="right:10px;bottom:27px;">苗木待收货</span><!-- 绿色 -->
				<!-- 苗木已收货 910-->
				<!-- <img v-if="item.trade_status==910" src="/static/tu-gouwuche/1-91.png" alt="" class="czjz cursor" style="right:10px;"> -->
				<span v-if="item.trade_status==910" class="absolute cursor f15 c999899" style="right:10px;bottom:27px;">苗木已收货</span>
			</p>
		</li>
		<!-- 滚动的动画 -->
	      	<!-- <li v-show="gif==true" class="center" style="padding:30px;"><img src="/static/tu-gouwuche/zhuan.gif" alt=""></li> -->
<!-- 提示无更多 -->
	      	<li  class="center c999899 f12"></li>
	</ul>
	</div>
</template>
<script>

	export default{
		data(){
			return{   page:1,//默认第一次请求为1
				// gif:this.$store.state.gif,//控制滚动的动画
                   datas:this.$store.state.gouwuche4,//初选的数据的总量
                    //h:innerHeight-215+"px"//有查找订单的时候
                    h:innerHeight-115+"px"//没有查找订单的时候
			}
		},
		computed:{
			watch(){
				this.datas=this.$store.state.gouwuche4//初选的数据
				// this.gif=this.$store.state.gif//控制滚动的动画
			}
		},

		mounted(){
// 购物车4的地图
// this.$store.commit('gouwuche4',{page:1})
this.$store.state.gouwuche4=[]
this.$store.commit('loads',{name:"gouwuche4"})

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
//          	that.$store.commit('gouwuche4',{page:that.page})
//          }
           
     

              
// 	}, 
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
          
          
      }



		}
	}
</script>
<style	scoped>
p{margin:0;}

</style>