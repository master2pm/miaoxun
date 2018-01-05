//买卖家我的 实名认证

const renzhen = {
    template: `
  <div class=" overflow" style="width:984px;">
     
                 <p class=" c4C4C4F f26" style="background:url(../tu-me/17_46.png) no-repeat center left;padding:15px 0;padding-left: 50px;">实名认证</p>
				
				 <!-1.已认证-->
				  <div v-if="states=='yes'">
				       <img  src="../tu-me/39_08.png" class="" style="margin:45px 0 40px 0;">
				  </div>
                  
				  <!-2.未认证-->
				   <div  v-if="states=='no'" style="position:relative;">
				       <img  src="../tu-me/39_03.png" class="" style="margin:45px 0 40px 0;">    
					   <img @click="renzhen($event)" src="../tu-me/18_76.png" class=" cursor czjz" style="right:20px;">    
				  </div>
                  
				  <!-3.正在审核中-->
				 <div  v-if="states=='ing'">
				       <img  src="../tu-me/39_06.png" class="" style="margin:45px 0 40px 0;">    
				  </div>
                  
				  <!-4.认证失败-->
				  <div  v-if="states=='error'" style="position:relative;">
				       <img  src="../tu-me/39_10.png" class="" style="margin:45px 0 40px 0;">   
				       <img  @click="renzhen($event)" src="../tu-me/18_78.png" class=" cursor czjz" style="right:20px;">    
					    
				  </div>
<p v-if="states=='error'"  class=" cBF4040 f26" style="padding-bottom:20px;">实名认证未通过，苗讯客服会尽快联系您。</p>
<p v-if="states=='error'"   class=" cBF4040 f16" style="padding-bottom:20px;margin-bottom:160px;">我们的人工客服会在8:30-17:00之间尽快联系您，协助您进行认证。</p>


 <p class=" c4C4C4F f26" style="padding-bottom:20px;">为什么要认证？</p>
 <p  class=" c686A6C f16" style="padding-bottom:20px;margin-bottom:160px;">先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案</p>
 <p v-if="states!='error'"  class=" c4C4C4F f26" style="padding-bottom:20px;">认证完成后会造成什么影响？</p> 
 <p v-if="states!='error'"  class=" c686A6C f16" style="">先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案先做，慢慢再写为什么要做的文案</p>
				
	
     
  </div>


  `,
    data: function() {
        return {
		   states:''//认证的状态
		
        }
    },
 props:['datas'],
    methods: {
	//   点击立即认证按钮  是否有头像
	renzhen:function(e){
			 this.$router.push({name:'touxiang',params:{index:2}})
	}
    },

    mounted: function() {
    	var that=this
 	// 个人资料
		 		// common_users(function(data){
		 		// 	          	if(that.$route.params.states==0){
     //                                 that.states=(data.status=='0'?
		   //                           	         'no':(data.status=='1'?
		   //                           			'ing':data.status=='2'?
		   //                           			'yes':'error'
		   //                           			))
		   //                           }else{
		   //                           	 that.states=that.$route.params.states
		   //                           }
		   //                            		})
		   
		 			          	if(that.$route.params.states==0){
                                     that.states=(that.datas.status=='0'?
		                             	         'no':(that.datas.status=='1'?
		                             			'ing':that.datas.status=='2'?
		                             			'yes':'error'
		                             			))
		                             }else{
		                             	 that.states=that.$route.params.states
		                             }
		                              		


	
        
    }
}