//买卖家我的 安全与隐私style="width:984px;"

const secret = {
    template: `
  <div class=" overflow" >
       <div class="lf" style="width:463px;margin-right:40px;opacity:0.2;">
                 <p class=" c4C4C4F f26" style="background:url(../tu-me/17_41.png) no-repeat center left;padding:15px 0;padding-left: 50px;">安全与隐私</p>
				 <p class="f18 c4C4C4F border0" style="margin:20px 0;padding-bottom:10px;">手机绑定</p>
                 <p class="f16 c696A6C" style="margin:25px 0 20px 0;">这是您注册账号时绑定的手机号码，亦是登录用的手机号码，
若想更改绑定手机号码，我们需要先验证此号码。</p>
				 <input v-model="phone1"  readOnly type="text" style="width:463px;height:38px;border:1px solid #E3E3E2;padding:0 35px;" placeHolder="" class="rad f15 none">
                <div class="right" style="margin-top:20px;">
				 <img src="../tu-me/18_65.png">
                </div>

        
		         <p class="f18 c4C4C4F border0" style="margin-top:65px;padding-bottom:10px;">应急手机绑定</p>
                 <p class="f16 c686A6C " style="margin:25px 0 20px 0;">
				如果你没有邮箱那么你可以选择应急手机绑定。应急手机可
在你丢失手机或者忘记密码的情况下使用您第二台手机来确认您的身份借此更改您的绑定手机和账号密码。
				 </p>


 <input v-model="phone2" readOnly type="text" style="width:463px;height:38px;border:1px solid #E3E3E2;padding:0 35px;" placeHolder="" class="rad f15 none">
		 <div class="right" style="margin-top:20px;">
				 <img src="../tu-me/18_65.png">
                </div>		  
				
		
		</div>






		<div  style="width:463px;" class=" rf">
                      
		         <p class="f18 c4C4C4F border0" style="opacity:0.2;margin-top:85px;padding-bottom:10px;">邮箱绑定</p>
                 <p class="f16 c686A6C " style="opacity:0.2;margin:25px 0 20px 0;">
			           手机绑定不能完全确保账户的信息安全。当然我们可以利用邮箱绑定来增加账号的安全，并且，邮箱还能收到苗讯的推送通知。
				 </p>
                 <input v-model="email" readOnly type="text" style="opacity:0.2;width:463px;height:38px;border:1px solid #E3E3E2;padding:0 35px;" placeHolder="邮箱" class="rad f15 none">
		       <div class="right" style="margin-top:20px;opacity:0.2;">
				 <img src="../tu-me/18_65.png" >
                </div>	



				 <p class="f18 c4C4C4F border0" style="margin-top:65px;padding-bottom:10px;">修改密码</p>
                 <p class="f16 c686A6C " style="margin:25px 0 20px 0;">
			           您对密码的安全度不满意？若您要修改你的密码，首先需要验证您绑定的手机号码 {{phone.substring(0,3)+'****'+phone.substring(7)}}。
				 </p>
                
		       <div class="right" style="margin-top:20px;">
				 <router-link :to="{name:'testSFs',params:{phone:phone,index:4}}"><img  src="../tu-me/18_65.png" class="cursor" ></router-link>
                </div>	
		</div>
			

         
		  
		
     
  </div>


  `,
    data: function() {
        return {		
			email:'',//邮箱
			phone1:'',//手机绑定
			phone2:'',//应急手机绑定
			phone:''//发送验证码的手机
			
        }
    },
 props:['datas'],
    methods: {
			information:function(){
			   //   获取用户资料m1-ymboss.leanapp.cn
			var that=this
			common_users(function(data){
		 		    that.phone=data.mobilePhoneNumber//contact_number	          
		    })
			// $.get(Boss+"user/info",
			// {"sessiontoken":sessiontoken},function(data){
			// 	console.log(data)
			// 	if(data.status==1){
			// 	that.phone=data.results.mobilePhoneNumber//contact_number

			// 	}
			// })
		}
    },

    mounted: function() {
    	var that=this
        // this.information()
         that.phone=that.datas.mobilePhoneNumber//contact_number	
    }
}