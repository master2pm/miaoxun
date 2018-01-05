//买卖家我的 安全与隐私 验证身份

const testSFs = {
    template: `
  <div >
       <p class="f26 c4C4C4F border0" style="margin:20px 0;padding-bottom:10px;">验证身份</p>
                 <p class="f16 c696A6C" style="margin:25px 0 20px 0;">我们向{{phone}}发送了一个验证码请在该消息中输入验证码。</p>
				

        
		         
                 <p v-if="hong==false" class="f12 c686A6C " style="margin:60px 0 20px 0;">
				待验证成功后将可更改账户密码。
				 </p>
				 <p v-if="hong==true" class="f26 cBF4040 " style="margin:60px 0 20px 0;">
				验证码填写错误
				 </p>


 <input  v-model="yzm" @keyup.enter="tests($event)"  :class="{hong:hong==true}" type="text" style="width:463px;height:38px;border:1px solid #E3E3E2;padding:0 35px;" placeHolder="输入4位验证码…" class="rad f15 none">
		       <p class="f12 c686A6C " style="margin:35px 0 0 0;">没收到验证码？</p> 
			   <p class="f12 c686A6C "  v-if="times!=1">请稍等片刻，将在{{times}}秒后<span class="c298B79">重新发送…</span></p>
			   <p class="f12 c686A6C " v-if="times==1">请稍等片刻，<span class="c298B79 cursor" @click="renew()">重新发送…</span></p> 
			   
				<img @click="tests($event)" src="../tu-me/18_72.png" style="position:absolute;bottom:0;right:0;" class="cursor">
				

  </div>


  `,
    data: function() {
        return {
		
			// verify:'',//后台验证码
			yzm:'',//验证码输入框
			phone:'',//手机号码
			times:60,//时间倒计时
			hong:false,//验证码填写错误提示
            daojishi:''//倒计时的定时器
        }
    },

    methods: {
		// 倒计时函数
		daojishis:function(){
			var that=this
				//倒计时
				that.daojishi=setInterval(function(){
					that.times--
					if(that.times==1){
						// that.times=60
						clearInterval(that.daojishi)
						// that.yzms()
					}
				},1000)
			// that.yzms()
		},
		renew(){
			
			var that=this
			this.times=60
				//倒计时
				that.daojishi=setInterval(function(){
					that.times--
					if(that.times==1){
						// that.times=60
						clearInterval(that.daojishi)
						// that.yzms()
					}
				},1000)
            this.yzms()
		},
		// 测试验证按钮
		tests:function(e){
			var that=this
			// 发请求去验证
			if(this.yzm.length==4){
				$.get(Boss+'verify/checker',{'mobile':this.phone,'verify':this.yzm},function(data){
					if(data.status==1&&data.results.success==1){
						//验证成功
				
				that.$router.push({"name":'passwords',params:{index:4,verify:that.yzm}})
				that.yzm=''
				that.hong=false
				clearInterval(that.daojishi); //清楚定时器
					}else if(data.status==1&&data.results.success==0){
						// 验证失败
				       that.hong=true
					}
				})
                
			}else{
				// 验证失败
				       that.hong=true
			}
		},
		yzms:function(){//"isDebug":'1',
			var that=this
			$.post(Boss+"user/resetpwd/verify",
				// user/modify/contact_number/verify
			{"sessiontoken":sessiontoken},function(data){
				console.log(data)
				if(data.status==0){
					alert(data.results.message)
				}
			})
		}
    },

    mounted: function() {
        this.phone=this.$route.params.phone

				// 发验证码的请求 发送用户修改密码验证,系统自动根据用户的手机号码发送验证码
			var that=this
			// 倒计时
		// that.daojishis()
		that.renew()
    }
}