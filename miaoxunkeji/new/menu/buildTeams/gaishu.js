//买卖家菜单栏 已经建立企业 并且管理的是团队  概述1  状态: 0=已提交资料（待审核）, 1=已通过审核，-1=未通过审核 -2未认证状态

const gaishu = {
    template: `
  <div class="overflow" style="margin-bottom:50px;position:relative;margin-top:50px;width:984px;padding:0 20px;">
       <div class="lf footertop" style="width:463px;margin-right:40px;">
                 <p class="border0 c4C4C4F f26" style="background:url(../tu-menu/24_46.png) no-repeat center left;padding:15px 0;padding-left: 50px;">{{datas.type=='group'?'团队':'企业'}}信息</p>
				 <p class="f16 c696A6C" style="margin:20px 0;"><span style="padding-right:28px;">联系人名称</span>{{datas.contacts}}</p>
                 <p class="f16 c696A6C" style="margin:20px 0;"><span style="padding-right:28px;">{{datas.type=='group'?'团队':'企业'}}联系人电话</span> {{datas.contact_number}}</p>
				 <p class="f16 c696A6C overflow" style="margin:20px 0;">
				 <span style="margin-right:10px;" class="lf"> <span style="padding-right:28px;">简介</span></span>
                   
				     <span class="lf diandiandian" style="width:390px;">
					 {{datas.intro==''?'请输入团队/企业简介':datas.intro}}
                    </span>
					 <router-link :to="{name:'message',params:{index:1,objectId:objectId}}">
					 <img @click="indexs($event,1)" src="../tu-menu/24_101.png" class="rf cursor" style="margin-top:35px;">
					  </router-link>
				 </p>



        
		         <p class="border0  c4C4C4F f26" style="background:url(../tu-menu/24_59.png) no-repeat center left;padding:15px 0;margin-top:40px;padding-left: 50px;">子帐号管理</p>
		        <p class="f16 c696A6C" style="position:relative;height:70px;line-height:70px;border-bottom:1px solid #D1D5D5;">
				当前{{datas.type=='group'?'团队':'企业'}}    <span style="padding-left:28px;">{{datas.name}}</span>
				     <router-link :to="{name:'boy',params:{index:4,objectId:objectId}}">
					 <img @click="indexs($event,4)" src="../tu-menu/24_115.png" class="czjz cursor" style="right:0;display:none;">
					  </router-link>
				</p>
				 <p class="f16 c696A6C" style="position:relative;height:70px;line-height:70px;border-bottom:1px solid #D1D5D5;">
				子帐号权限设定与管理
				     <router-link :to="{name:'boy',params:{index:4,objectId:objectId}}">
					 <img @click="indexs($event,4)" src="../tu-menu/24_101.png" class="czjz cursor" style="right:0;">
					 </router-link>
				</p>


				 <p class="border0  c4C4C4F f26" style="background:url(../tu-menu/24_82.png) no-repeat center left;padding:15px 0;margin-top:40px;padding-left: 50px;">收款方式</p>
		        <p class="f16 c696A6C" style="padding:15px 0;position:relative;height:40px;border-bottom:1px solid #D1D5D5;">
				    <span class="" style="">广东苗讯科技有限公司</span><br>
					<span class="" style="">62141 12155 15546 13616 </span>
				    <span class="czjz" style="right:0;">中国建设银行</span>
				</p>
				<p class="f16 c696A6C" style="padding:15px 0;position:relative;height:40px;border-bottom:1px solid #D1D5D5;">
				    <span class="" style="">广东苗讯科技有限公司</span><br>
					<span class="" style="">62141 12155 15546 13616 </span>
				    <span class="czjz" style="right:0;">中国建设银行</span>
				</p>
				
				     <router-link :to="{name:'payment',params:{index:5,objectId:objectId}}">
					 <img @click="indexs($event,5)" src="../tu-menu/24_101.png" class="rf cursor" style="margin-top:35px;">
					 </router-link>
		
		</div>





		<div  style="width:463px;" class="footertop rf">
		     <div style="height:283px;">
                  <p v-if="datas.type=='group'" class="border0 c4C4C4F f26" style="background:url(../tu-menu/24_40.png) no-repeat center left;padding:15px 0;padding-left: 50px;">升级为企业</p>
                   <p v-if="datas.type=='company'" class="border0 c4C4C4F f26" style="background:url(../tu-menu/21_82.png) no-repeat center left;padding:15px 0;padding-left: 50px;">企业认证</p>
				  
				  <!--1.未认证   立刻认证datas.type=='group'&&0-->
				  <div v-if="datas.g_status=='-2'" style="background:url(../tu-menu/24_03.png) no-repeat center left;margin-top:35px;width:465px;height:87px;position:relative;">
				         <router-link :to="{name:'menuNos1'}"><img src="../tu-menu/24_05.png" class="czjz cursor" style="right:40px;"></router-link>
				  </div>
				  <!--2.正在审核中datas.type=='group'&&1-->
				   <router-link :to="{name:'renzhen',params:{states:'ing',index:2,objectId:objectId}}">
				   <div  v-if="datas.g_status=='0'" @click="indexs($event,2)"  style="background:url(../tu-menu/24_156.png) no-repeat;background-size:465px 87px;margin-top:35px;width:465px;height:87px;position:relative;">
				  </div>
				  </router-link>
				   <!--3.已认证   查看认证datas.type=='company'&&2-->
				  <div  v-if="datas.g_status=='1'" style="background:url(../tu-menu/24_57.png) no-repeat center left;margin-top:35px;width:465px;height:87px;position:relative;">
				         <router-link :to="{name:'renzhen',params:{states:'yes',index:2,objectId:objectId}}">
						 <img @click="indexs($event,2)" src="../tu-menu/24_14.png" class="czjz cursor" style="right:40px;">
						 </router-link>
				  </div>
				   <!--4.认证未通过  查看认证datas.type=='group'&&-1-->
				  <div  v-if="datas.g_status=='-1'" style="background:url(../tu-menu/24_102.png) no-repeat center left;margin-top:35px;width:465px;height:87px;position:relative;">
				        <router-link :to="{name:'renzhen',params:{states:'no',index:2,objectId:objectId}}"> 
						<img @click="indexs($event,2)"  src="../tu-menu/24_29.png" class="czjz cursor" style="right:40px;">
						</router-link>
				  </div>
			 </div>



				  
				   <p class="border0 c4C4C4F f26" style="background:url(../tu-menu/24_62.png) no-repeat center left;padding:15px 0;padding-left: 50px;">添加子帐号</p>
				   <p class=" c696A6C f16" style="margin:10px 0 25px 0;padding:15px 0;">
				   子账号可以和您一起管理和经营您的团队或企业，您可以通过子账号管理页面来改变每个子账号的权限。
					 </p>
					
				         <router-link :to="{name:'addboy',params:{index:3,phone:'no',objectId:objectId}}">
						          <img @click="indexs($event,3)"  src="../tu-menu/24_101.png" class="rf cursor" style="right:40px;">
						 </router-link>

                       <p class="border0 c4C4C4F f26" style="margin-top:100px;background:url(../tu-menu/24_84.png) no-repeat center left;padding:15px 0;padding-left: 50px;">建立团队或企业</p>
				   <p class=" c696A6C f16" style="margin:10px 0 5px 0;padding:15px 0;">
				   建立团队或企业使您可以添加子账号，进行多人合作或对子帐号权限进行设定管理，建立认证企业则会提高买卖家对您的信任。
					 </p>
					
				         <router-link to="/menuNo"><img src="../tu-menu/24_125.png" class="rf cursor" style=""></router-link>
		</div>
			
      
  </div>

  `,
    // props:{"index":index},
    data: function() {
        return {
        	objectId:'',//默认进来的团队或者企业的id
			// datas:'',//数据
            hasItem: false //已建立过企业/团队，当前选择为团队

        }
    },
    props:['datas'],//gaishu请求当前默认组的内容
	  components:{"footers":footers},
    methods: {
    //    点击概述里面团队信息的编辑按钮切到团队企业信息
	indexs:function(e,n){
		console.log(this.$store.state.index)
		this.$store.state.index=n
	}
    },

    mounted: function() {
		var that=this
      this.objectId=this.$route.params.objectId


		
  
    }
}