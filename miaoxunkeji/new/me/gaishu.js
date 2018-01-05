//买卖家我的 概述style="width:984px;"      状态: 1=已提交资料（待审核）, 2=已通过审核，-1=未通过审核 0未认证状态

const gaishu = {
    template: `
  <div class=" overflow" >
       <div class="lf" style="width:463px;margin-right:40px;">
                 <p class="border0 c4C4C4F f20" style="background:url(../tu-me/17_38.png) no-repeat center left;padding:15px 0;padding-left: 50px;">个人信息</p>
				 <p class="f16 c696A6C" style="margin:20px 0;">用户名称：{{datas.nickname}}</p>
                 <p class="f16 c696A6C" style="margin:20px 0;">个人联系电话：{{datas.contact_number}}</p>
				
					<router-link :to="{name:'message',params:{index:1}}">
					<img @click="jumps($event,1)" @mouseleave="srcs_leave($event,'../tu-me/17_24.png',1)" @mouseenter="srcs_enter($event,'../tu-me/17_24.png','../tu-me/22_03.png',1)" :src="src1" class="rf cursor" style="margin-top:35px;">
					</router-link>
				



        
		         <p class="border0  c4C4C4F f20" style="background:url(../tu-me/17_56.png) no-repeat center left;padding:15px 0;margin-top:150px;padding-left: 50px;margin-bottom:35px;">推送通知</p>
		        <img  src="../tu-me/33.png" class=" cursor" style="margin:0 55px 0 30px;">
                <img  src="../tu-me/32.png" class=" cursor" style="margin-right:63px;">
				<router-link :to="{name:'news',params:{index:3}}">
				         <img @mouseleave="srcs_leave($event,'../tu-me/17_07.png',2)" @mouseenter="srcs_enter($event,'../tu-me/17_07.png','../tu-me/22_06.png',2)" :src="src2"  @click="jumps($event,3)"  class="cursor" style="">
                </router-link>
			
		
		</div>






		<div  style="width:463px;" class=" rf">
                  <p class="border0 c4C4C4F f20" style="margin-bottom: 35px;background:url(../tu-me/17_46.png) no-repeat center left;padding:15px 0;padding-left: 50px;">实名认证</p>
                 
				  <!-1.已认证-->
				  <div v-if="datas.status==2">
				  <img  src="../tu-me/28.png" class="" style="margin-right:63px;">
				  <router-link :to="{name:'renzhen',params:{index:2,states:'yes'}}">
				        <img @mouseleave="srcs_leave($event,'../tu-me/17_26.png',31)" @mouseenter="srcs_enter($event,'../tu-me/17_26.png','../tu-me/22_10.png',31)" :src="src31"  @click="jumps($event,2)"  class="rf cursor" style="margin-top: 40px;margin-right: 1px;">
				  </router-link>
				  </div>
                  
				  <!-2.未认证--> 
				  <div  v-if="datas.status==0">
				  <img  src="../tu-me/29.png" class="" style="margin-right:63px;">
				   <router-link :to="{name:'touxiang',params:{index:2}}">
				        <img @mouseleave="srcs_leave($event,'../tu-me/17_22.png',32)" @mouseenter="srcs_enter($event,'../tu-me/17_22.png','../tu-me/22_18.png',32)" :src="src32" @click="jumps($event,2)"   class="rf cursor" style="margin-top: 40px;margin-right: 1px;">
				   </router-link>
				  </div>
                  
				  <!-3.正在审核中-->
				  <div  v-if="datas.status==1">
				       <router-link :to="{name:'renzhen',params:{index:2,states:'ing'}}">
					          <img  @click="jumps($event,2)" src="../tu-me/30.png" class=" cursor" style="margin-right:63px;">
                       </router-link>
				  </div>
                  
				  <!-4.认证失败-->
				  <div  v-if="datas.status==-1">
				  <img  src="../tu-me/31.png" class="" style="margin-right:63px;">
				   <router-link :to="{name:'touxiang',params:{index:2}}">
				           <img  @click="jumps($event,2)" @mouseleave="srcs_leave($event,'../tu-me/17_09.png',33)" @mouseenter="srcs_enter($event,'../tu-me/17_09.png','../tu-me/22_16.png',33)" :src="src33"  class="rf cursor" style="margin-top: 40px;margin-right: 1px;">
                   </router-link>
				  </div>
				  



				  
				   <p class="border0 c4C4C4F f20" style="background:url(../tu-me/17_41.png) no-repeat center left;padding:15px 0;padding-left: 50px;margin-top:86px;">安全与隐私</p>
				   <ul>
				       <li class="border-b"  style="height:70px;line-height:70px;position:relative;">
					         手机绑定：<span class="cA73E3B">未绑定</span>
							<router-link :to="{name:'secret',params:{index:4}}">
							 <img @click="jumps($event,4)"  @mouseleave="srcs_leave($event,'../tu-me/17_24.png',4)" @mouseenter="srcs_enter($event,'../tu-me/17_24.png','../tu-me/22_03.png',4)" :src="src4"   class="czjz cursor" style="margin-right:63px;right:0;" >
                            </router-link>
					   </li>
					   <li class="border-b"  style="height:70px;line-height:70px;position:relative;">
					         邮箱绑定：<span class="cA73E3B">未绑定</span>
							 <router-link :to="{name:'secret',params:{index:4}}">
							 <img @click="jumps($event,4)"    @mouseleave="srcs_leave($event,'../tu-me/17_24.png',5)" @mouseenter="srcs_enter($event,'../tu-me/17_24.png','../tu-me/22_03.png',5)" :src="src5"   class="czjz cursor" style="margin-right:63px;right:0;" >
							 </router-link>
					   </li>
					    <li class="border-b"  style="height:70px;line-height:70px;position:relative;">
					         应急手机绑定：<span class="cA73E3B">未绑定</span>
							 <router-link :to="{name:'secret',params:{index:4}}">
							 <img @click="jumps($event,4)"   @mouseleave="srcs_leave($event,'../tu-me/17_24.png',6)" @mouseenter="srcs_enter($event,'../tu-me/17_24.png','../tu-me/22_03.png',6)" :src="src6"   class="czjz cursor" style="margin-right:63px;right:0;" >
							 </router-link>
					   </li>
					   <li class="border-b"  style="height:70px;line-height:70px;position:relative;">
					         密码安全等级：<span class="c60B346">优</span>
							 <router-link :to="{name:'secret',params:{index:4}}">
							 <img @click="jumps($event,4)"    @mouseleave="srcs_leave($event,'../tu-me/17_11.png',7)" @mouseenter="srcs_enter($event,'../tu-me/17_11.png','../tu-me/22_08.png',7)" :src="src7"   class="czjz cursor" style="margin-right:63px;right:0;">
							 </router-link>
					   </li>
				   </ul>

		</div>
		
      
  </div>

  `,
    data: function() {
        return {
			// datas:"",
           src1:'../tu-me/17_24.png',//个人信息的编辑按钮
           src2:'../tu-me/17_07.png',//推送通知的设置按钮
		   src31:'../tu-me/17_26.png',//实名认证的查看按钮
		   src32:'../tu-me/17_22.png',//实名认证的前往认证按钮
		   src33:'../tu-me/17_09.png',//实名认证的重新认证按钮
		   src4:'../tu-me/17_24.png',//安全隐私的编辑按钮
		   src5:'../tu-me/17_24.png',//安全隐私的编辑按钮
		   src6:'../tu-me/17_24.png',//安全隐私的编辑按钮
		   src7:'../tu-me/17_11.png'//安全隐私的更改密码按钮
        }
    },
    props:['datas'],
	components:{"footers":footers},
    methods: {
		srcs_enter:function(e,src1,src,num){
			if(num==1){
                this.src1=src
			}else if(num==2){
                this.src2=src
			}else if(num==31){
                this.src31=src
			}else if(num==32){
                this.src32=src
			}else if(num==33){
                this.src33=src
			}else if(num==4){
                this.src4=src
			}else if(num==5){
                this.src5=src
			}else if(num==6){
                this.src6=src
			}else if(num==7){
                this.src7=src
			}
		},
		srcs_leave:function(e,src1,num){
			if(num==1){
                this.src1=src1
			}else if(num==2){
                this.src2=src1
			}else if(num==31){
                this.src31=src1
			}else if(num==32){
                this.src32=src1
			}else if(num==33){
                this.src33=src1
			}else if(num==4){
                this.src4=src1
			}else if(num==5){
                this.src5=src1
			}else if(num==6){
                this.src6=src1
			}else if(num==7){
                this.src7=src1
			}
		},
        // 按钮跳转到不同的标题
		jumps:function(e,num){
			this.$store.state.index=num
		}
    },

    mounted: function() {
		var that=this
		// that.datas=common_user
           // 卖家的个人资料
// $.get(Boss+"user/info",{"sessiontoken":sessiontoken},function(data){
//                  console.log(data)
// 				that.datas=data.results
//               })
    }
}