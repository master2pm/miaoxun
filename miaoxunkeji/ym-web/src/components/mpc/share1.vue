
<template>
<div>
<!-- top1 蓝色的简介 -->
	<div v-if="mpcxq!=''" v-cloak style="background:#269C88;">

	<div style="height:86px;width:1024px;padding-top:40px;margin:0 auto;" class=" relative" >
             <!-- 苗圃场名称 回复率和时间 -->
			<p  class="f26 cFFFFFF" style="margin-bottom:20px;">
			{{mpcxq.gg_name.length>30?mpcxq.gg_name.substring(0,30):mpcxq.gg_name}}
            <span v-if="mpcxq.gg_name.length>30">...</span>
			</p>
			<p  class="f16 cFFFFFF"><span>回复率：{{mpcxq.group.reply_ratio}}</span><span style="margin-left:50px;">平均回复时间：{{mpcxq.group.reply_time}}</span></p>


			<!--苗圃场：收藏   分享 -->
			<img   @click="clicks($event,3,groundId,'groupground',0)"  class="mpc cursor" :src="mpcxq.isfavor==0?'/static/tu-detail/1-59.png':'/static/tu-detail/1-61.png'"  alt="" style="position:absolute;top:20px;right:80px;">
			<img  @mouseleave="changer(false)" class="cursor" @click="changer(true)" src="/static/tu-detail/1-63.png" alt="" style="position:absolute;top:20px;right:20px;">

			<!--00企业信息  在首页的时候个人企业团队都有各自的信息和联系卖家 -->
			<div  class="relative " @click="kuang1=true" @mouseleave="kuang1=false" style="position:absolute;bottom:0px;right:160px;height:30px;">
				<!-- 个人信息 -->
				<img v-if="location=='private'" class="cursor"  src="/static/tu-detail/1-68.png" alt="" >
				<!-- 企业信息 -->
				<img v-if="location=='company'" class="cursor"  src="/static/tu-detail/1-70.png" alt="" >
				<!-- 团队信息 -->
				<img v-if="location=='group'" class="cursor"  src="/static/tu-detail/1-69.png" alt="" >


<!-- 个人和企业信息弹出框 -->
				<div v-if="kuang1==true" style="" class=" kuang1 bai">
					<div style="padding:18px 15px 14px 15px;" class="f12 c676868">
						<p style="margin-bottom:10px;">{{mpcxq.group.name}}</p>
						<p class="relative" v-if="location=='company'" style="margin-bottom:10px;"><span class='c999899'>认证：</span><img src="/static/tu-detail/1-66.png" style="margin-right:3px;">{{mpcxq.group.g_status}}企业已认证	</p>
						<p class="relative" style="margin-bottom:10px;"><span class='c999899'>回复率：</span><span class='c60B346'>{{mpcxq.group.reply_ratio}}</span></p>
						<p class="relative" style="margin-bottom:10px;"><span class='c999899'>平均回复时间：</span><span class='c60B346'>{{mpcxq.group.reply_time}}</span>	</p>
					</div>

					<router-link v-if="location=='company'" :to="{name:'qymessage',params:{who:'company',objectId:mpcxq.group.objectId,has:'yes'}}">
						<div  class="f15 c60B346 center F2F2F2bg" style="height:40px;line-height:40px;">
							查看企业信息
						</div>
					</router-link>

					<router-link v-if="location=='private'" :to="{name:'qymessage',params:{who:'private',objectId:mpcxq.group.objectId,has:'yes'}}">
						<div  class="f15 c60B346 center F2F2F2bg" style="height:40px;line-height:40px;">
							查看个人信息
						</div>
					</router-link>

					<router-link v-if="location=='group'" :to="{name:'qymessage',params:{who:'group',objectId:mpcxq.group.objectId,has:'yes'}}">
						<div  class="f15 c60B346 center F2F2F2bg" style="height:40px;line-height:40px;">
							查看团队信息
						</div>
					</router-link>


				</div>
			</div>


			<!--00联系卖家 -->
			<div @click="kuang2=true"  @mouseleave="kuang2=false" style="height:30px;position:absolute;bottom:0px;right:20px;">

				<img class="cursor" src="/static/tu-detail/1-71.png" alt="" >
				<div v-if="kuang2==true" style="" class=" kuang2 bai">
					<div style="padding:20px 15px 10px 15px;" class="f12 c676868">
						<img src="/static/tu-detail/1-53.png" style="margin-bottom:20px;">
						<p class="" style="margin-bottom: 10px;">联系人：{{mpcxq.gg_contacts}}</p>
						<p class="" style="margin-bottom: 10px;">联系电话：{{mpcxq.gg_contact_number}}</p>

					</div>
					<div  class="f15 c60B346 center F2F2F2bg" style="height:40px;">
						<img src="/static/tu-detail/1-52.png" style="width:100%;" >
					</div>

				</div>
			</div>
</div>
</div>
<!--top2苗圃场首页  关于苗圃-->

				<div v-if="groundId!=''" style="margin:0 auto;height:44px;line-height:44px;background:#F2F2F2;" class="f15 ">
				<div	class="relative" style="padding-left:55px;width:1024px;margin:0 auto;background:url(/static/tu-detail/1-97.png) no-repeat;">
					
				
				<!-- 00公用的 苗圃场首页 关于苗圃-->
					<router-link :to="{name:'home',params:{page:0,groundId:groundId}}">
						<span @mouseenter="shao=0" @mouseleave="shao=-1" @click="index=0" class="cursor relative" style="margin-right:95px;" :class="{shao:shao==0,c60B346:index==0,c676868:index!=0}">苗圃场首页
						<img v-if="index==0" src="/static/tu-detail/1-80.png" class="spjz" style="bottom:-8px;">
						</span>
					</router-link>


					<router-link   :to="{name:'about',params:{page:1,groundId:groundId}}">
						<span  @mouseenter="shao=1" @mouseleave="shao=-1" @click="index=1" class="cursor relative" :class="{shao:shao==1,c60B346:index==1,c676868:index!=1}">
							关于苗圃
							<img v-if="index==1" src="/static/tu-detail/1-80.png" class="spjz" style="bottom:-8px;">
						</span>
					</router-link>
                
				</div>

				</div>
			 	<!-- 二维码 -->
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
				mpcxq:'',//苗圃场的信息
				index:0,//标题的序号
				ewm:false,

				shao:-1,//鼠标烧过
                datas:'',//对应的苗圃信息
				groundId:'',//苗圃场的id
				location:'',//当前是哪种企业和团队和个人
				kuang1:false,//企业信息弹出框
					kuang2:false//联系卖家弹出框
			}
		},

		methods:{
			changqr(){
				var mid = this.$route.params.groundId;
				var dz = location.href;
				console.log(dz.substring(0,dz.indexOf("parent")))
				var test = dz.substring(0,dz.indexOf("parent")) + 'detail/miao_mpc.html?id=' + mid;
				// $("#qrcode").qrcode({text:test1,width:150,height:150})
				$("#QWE").qrcode({text:test,width:120,height:120})
			},changer(bool){
				if(bool){
					$("#fx").show()
				}else{
					$("#fx").hide()
				}
			},
			   			// 收藏
			clicks(e,n,objectId,type,amount){
				//alert(1)
          //this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId,'type':type})
            common_adds(e,n,objectId,type,amount)
			}
		},
		mounted(){
var that=this
this.changqr();
this.changer(false);
this.index=this.$route.params.page
	// 一进来的时候就要获取id去查看内容
	this.groundId=this.$route.params.groundId
	$.get(this.$store.state.Boss+"ground/"+this.groundId,{"sessiontoken":this.$store.state.sessiontoken}
  ,function(data){
     console.log(data)
    if(data.status==1){
      that.mpcxq=data.results
          //苗圃场类型； group= 团队，company=企业
          if(data.results.group.type=='group'){
            console.log('group')
            that.location="group"
          }else if(data.results.group.type=='company'){
            console.log('company')
             that.location="company"
          }else if(data.results.group.type=='private'){
            console.log('private')
             that.location="private"
          }

        }

      })
}
}
</script>
<style	scoped>
	p{margin:0;}
.kuang1{width:213px;position: absolute;right:-55px;top:30px;z-index:10;border:1px solid #999899;}/*height:180px;*/
.kuang2{width:213px;height:160px;position: absolute;right:-15px;top:30px;z-index:10;border:1px solid #999899;}



</style>
