
<template>
	<div style="" class="relative">

<!-- 苗圃场 -->
<!-- 		<div style="display:none;">
	     {{watch}}
        </div> -->
<!-- top1 蓝色的简介 -->
	<div v-if="message!=''" v-cloak style="background:#269C88;" class=" relative">
	<div style="padding:0 20px;height:86px;padding-top:40px;width:984px;margin:0 auto;" class=" relative">
             <!-- 苗圃场名称 回复率和时间 -->
			<p  class="f26 cFFFFFF" style="margin-bottom:20px;">{{who=='private'?message.private_group.name:message.name}}</p>
			<p  class="f16 cFFFFFF"><span>回复率：{{who=='private'?message.private_group.reply_ratio:message.reply_ratio}}</span><span style="margin-left:50px;">平均回复时间：{{who=='private'?message.private_group.reply_time:message.reply_time}}</span></p>


			<!--002个人信息：收藏    -->
			<img v-if="who=='private'"  @click="clicks($event,3,objectIduser,'user',0)"  class="gr cursor" :src="message.private_group.isfavor==0?'/static/tu-detail/1-59.png':'/static/tu-detail/1-61.png'" alt="" style="position:absolute;top:20px;right:80px;">
            <!--003企业信息：收藏   -->
			<img v-if="who=='company'"  @click="clicks($event,3,objectIdgroup,'company',0)"  class="qy cursor" :src="message.isfavor==0?'/static/tu-detail/1-59.png':'/static/tu-detail/1-61.png'" alt="" style="position:absolute;top:20px;right:80px;">
			<!--004团队信息：收藏    -->
			<img v-if="who=='group'"  @click="clicks($event,3,objectIdgroup,'group',0)"  class="td cursor" s:src="message.isfavor==0?'/static/tu-detail/1-59.png':'/static/tu-detail/1-61.png'" alt="" style="position:absolute;top:20px;right:80px;">


            <!--005 分享 -->
			<img v-if="this.$store.state.where=='qymessage'"  @mouseleave="changer(false)" class="cursor" @click="changer(true)" src="/static/tu-detail/1-63.png" alt="" style="position:absolute;top:20px;right:20px;">


			<!--只有企业有认证企业-->
			<div v-if="who=='company'"  class="relative " style="position:absolute;bottom:0px;right:160px;height:30px;">
				<img  class="cursor"  src="/static/tu-detail/1-99.png" alt="" >
			</div>

            <!-- 联系卖家 -->
           <div @click="kuang2=true"  @mouseleave="kuang2=false" style="height:30px;position:absolute;bottom:0px;right:20px;">

				<img class="cursor" src="/static/tu-detail/1-71.png" alt="" >
				<div v-if="kuang2==true" style="" class=" kuang2 bai">
					<div style="padding:20px 15px 10px 15px;" class="f12 c676868">
						<img src="/static/tu-detail/1-53.png" style="margin-bottom:20px;">
						<p class="">联系人：{{who=='private'?message.nickname:message.contacts}}</p>
						<p class="">联系电话：{{who=='private'?message.mobilePhoneNumber:message.contact_number}}</p>

					</div>
					<div  class="f15 c60B346 center F2F2F2bg" style="height:40px;">
						<img src="/static/tu-detail/1-52.png" style="width:100%;" >
					</div>

				</div>
			</div>
</div>
</div>

<!-- top22  v-if="groundId!=''&&has=='yes'"-->
<div style="height:44px;line-height:44px;background:#F2F2F2;" >
				<div v-if="has=='yes'" style="width:969px;margin:0 auto;height:44px;line-height:44px;padding-left:55px;background:url(/static/tu-detail/1-97.png) no-repeat;" class="f15">
				<!-- 00公用的 苗圃场首页 关于苗圃-->

						<span @click="go(-1)" @mouseenter="shao=0" @mouseleave="shao=-1"  class="c676868 cursor relative" style="margin-right:95px;" >返回苗圃场

						</span>



						<span  @mouseenter="shao=1" @mouseleave="shao=-1"  class="c60B346 cursor relative">
							{{who=='private'?'个人信息':who=='company'?'企业信息':'团队信息'}}
							<img  src="/static/tu-detail/1-80.png" class="spjz" style="bottom:-8px;">
						</span>

				</div>
</div>


<!-- top2 -->
<div v-if="message!=''" style="margin:0 auto;width:1024px;">
		<p class="f26 c4A494B relative" style="margin:0 20px;margin-top:60px;width:335px;">
			{{who=='private'?message.private_group.name:message.name}}
			<!-- 企业 -->
			<img v-if="who=='company'" class="cursor" src="/static/tu-detail/1-78.png" alt="" style="position:absolute;top:3px;right:-40px;">
			<!-- 团队 -->
			<img v-if="who=='group'" class="cursor" src="/static/tu-detail/1-77.png" alt="" style="position:absolute;top:3px;right:-40px;">
			<!-- 个人 -->
			<img v-if="who=='private'" class="cursor" src="/static/tu-detail/1-79.png" alt="" style="position:absolute;top:3px;right:-40px;">
		</p>



		<p v-if="who!='private'" class="f16 c999899" style="margin:0 20px;padding-bottom:50px;">建立时间： {{message.createdAt}}</p>
		<p v-if="who=='private'" class="f16 c999899" style="margin:0 20px;padding-bottom:50px;">注册时间： {{message.createdAt}}</p>


		<!-- 企业企业简介 -->
		<p v-if="who=='company'" class="f16 c4A494B" style="padding-left:20px;">企业简介</p>
		<!-- 团队团队简介 -->
		<p v-if="who=='group'" class="f16 c4A494B" style="padding-left:20px;">团队简介</p>
		<!-- 个人 无简介-->




		<!-- 个人 无简介-->
		<p v-if="who!='private'" class="f16 c676868" style="padding:20px 0 50px 0;">{{message.intro}}</p>




		<p v-if="who=='company'" class="f18 c4A494B relative" style="margin:0 20px;display:inline-block;">
			企业联系信息
			<img class="cursor" src="/static/tu-detail/1-98.png" alt="" style="position:absolute;top:3px;right:-25px;">
		</p>
		<p v-if="who=='group'" class="f18 c4A494B relative" style="margin:0 20px;display:inline-block;">
			团队联系信息
			<img class="cursor" src="/static/tu-detail/1-98.png" alt="" style="position:absolute;top:3px;right:-25px;">
		</p>
		<p v-if="who=='private'" class="f18 c4A494B relative" style="margin:0 20px;display:inline-block;">
			个人联系信息
			<img class="cursor" src="/static/tu-detail/1-98.png" alt="" style="position:absolute;top:3px;right:-25px;">
		</p>



		<p style="margin:20px 0 50px 0;" class="f18 c676868">
			<span style="margin-right:105px;margin:0 20px;">联系人：{{who=='private'?message.nickname:message.contacts}}</span>
			<span>联系电话：{{who=='private'?message.mobilePhoneNumber:message.contact_number}}</span>
		</p>


		<div v-if="who=='company'" >
			<p class="f18 c4A494B" style="">营业执照</p>
			<img class="cursor rad border" :src="message.business_licence" alt="" style="margin:35px 0 60px 0;width:225px;height:300px;">
		</div>


<!-- 企业：旗下苗圃场   个人和团队：***苗圃场 -->
		<p class="f18 c4A494B" style="margin:0 20px;margin-bottom:30px;">
		<span v-if="who=='group'||who=='private'">{{message.private_group.name==undefined?message.name:message.private_group.name}}</span><span v-if="who=='company'">旗下</span>苗圃场</p>
		<!-- 旗下苗圃场 -->
		<ul class="overflow " style="padding-left:20px;">
			<li v-for="item in datas" class="lf F2F2F2bg" style="margin-right:15px;margin-bottom:20px;width:292px;height:64px;padding:20px 10px;">
				<p class="f18 c60B346" style="margin-bottom:5px;">{{item.gg_name}}<span class="c999899 rf">{{item.distance}}</span>	</p>
				<p class="f13 c999899">苗圃场地址 ·<span class="c676868">{{item.gg_address.province}}{{item.gg_address.city}}{{item.gg_address.detail_address}}</span></p>
			</li>
		</ul>
</div>
		<div	id="map0" style="display:none;">

		</div>
		<div id="fx" class="bai" style="z-index:100;position:absolute;left:70%;top:65px;width:160px;height:181px;border:1px solid #999899;">
				<div id="QWE" style="width:121px;height:121px;margin:0 auto;margin:20px 0 10px 18px;" class="">

				</div>
			<p class="f12 c676868 center">扫一扫分享</p>
		</div>
	</div>
</template>
<script>


	export default{
		data(){
			return{
				datas:'',
				message:'',
				lng:'',
				lat:"",
				has:'',//是否含有返回苗圃场
				who:'',
				ewm:false,
				index:0,//标题的序号
				shao:-1,//鼠标烧过

					objectIdgroup:'',//"597c26e7a0bb9f0058085996",//this.$store.state.mpcxq.group.objectId企业团队id
					objectIduser:'',//个人id
				kuang2:false//联系卖家弹出框
			}
		},
		components:{

		},
		mounted(){
			var that=this;
var objectId=this.$route.params.objectId

	// var objectIds=this.$route.params.objectId//查旗下的苗圃场的时候按原来的样子去查
// 旗下苗圃场接口
var objectIds=this.$route.params.objectId
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function (pos) {
            var lng1 = pos.point.lng;//当前纬度
            var lat1 = pos.point.lat;//当前经度
            // var lng1=121
            // var lat1=27
            console.log(lng1,lat1)
            $.get(that.$store.state.Boss+"group/"+objectIds+"/ground",{"sessiontoken":that.$store.state.sessiontoken,"longitude":lng1,"latitude":lat1},function(data){
	that.datas=data.results.data
	console.log(that.datas)
	JSONS(data,'WOSHI QIXIAMPC')
     })
})
			// 一进来的时候就要获取id去查看内容
	
	this.has=this.$route.params.has

	if(objectId.indexOf("private")!=-1){
		objectId=objectId.split(":")[1]
		this.objectIduser=objectId
	}else{
		this.objectIdgroup=objectId
	}
	var who=this.$route.params.who

	this.who=who
	if(who=='private'){
		//刷新用户资料 传了id代表查特定人的id的信息
		$.get(this.$store.state.Boss+"user/info",{"id":objectId,"sessiontoken":this.$store.state.sessiontoken},function(data){
			JSONS(data,'private')
                  that.message=data.results
									that.changqr();
									that.changer(false);

		})

	}else{
		// 团队和企业作为一组
			$.get(this.$store.state.Boss+"group/"+objectId,{"sessiontoken":this.$store.state.sessiontoken},function(data){
				JSONS(data,'!private')
                  that.message=data.results
									that.changqr();
									that.changer(false);
		})

	}


		},
		methods:{
		  go(n){
              	history.go(-1)
              }	,
             			// 收藏
			clicks(e,n,objectId,type,amount){
				//alert(1)
				common_adds(e,n,objectId,type,amount)
         // this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId,'type':type})

			},
			changqr(){
				var that = this;
				var mid = this.$route.params.groundId;
				var dz = location.href;
				console.log(dz.substring(0,dz.indexOf("parent")))
				console.log(that.message)
				var test = dz.substring(0,dz.indexOf("parent")) + 'detail/miao_gqt.html?id=' + that.message.objectId;
				// $("#qrcode").qrcode({text:test1,width:150,height:150})
				$("#QWE").qrcode({text:test,width:120,height:120})
			},changer(bool){
				if(bool){
					$("#fx").show()
				}else{
					$("#fx").hide()
				}
			}
		}
	}
</script>
<style	scoped>
	p{margin:0;}

.kuang2{width:213px;height:160px;position: absolute;right:-15px;top:30px;z-index:10;border:1px solid #999899;}


</style>
