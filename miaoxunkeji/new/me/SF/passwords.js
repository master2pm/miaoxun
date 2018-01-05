//买卖家我的 安全与隐私 修改您的登录密码

const passwords = {
    template: `
  <div >
       <p v-if="error==false" class="f26 c4C4C4F border0" style="margin:20px 0;padding-bottom:10px;">修改您的登录密码</p>
	    <p v-if="error==true"  class="f26 cBF4040 border0" style="margin:20px 0;padding-bottom:10px;">两次输入的密码不一致,请重新输入</p>
                 <p class="f16 c696A6C" style="margin:25px 0 20px 0;">您已通过验证，现在可以更改密码了。</p>
				<input @focus="renew" @keyup.enter="resets($event)" :class="{hong:hong==true}"  v-model="passwords1"  type="password" style="width:463px;height:38px;border:1px solid #E3E3E2;padding:0 35px;" placeHolder="请输入新密码" class="rad f15 none">

        
		         
                 <p class="f12 c686A6C " style="margin:60px 0 20px 0;">
				确保密码填写正确
				 </p>


 <input @focus="renew" @keyup.enter="resets($event)" :class="{hong:hong==true}"  v-model="passwords2"  type="password" style="width:463px;height:38px;border:1px solid #E3E3E2;padding:0 35px;" placeHolder="请再次输入新密码" class="rad f15 none">
		      <div class="right" style="margin-top:35px;">
			    <img @click="resets($event)" src="../tu-me/18_70.png"  class="cursor">
           </div>
  </div>


  `,
    data: function() {
        return {
		
			passwords1:'',
			passwords2:'',
			hong:false,//控制红色边框线
			error:false//false显示的是修改密码   true显示两次密码不一样
        }
    },

    methods: {
    	// 如果提示密码不一致，那么输入框获取到焦点的时候就让提示消失
    	renew:function(){
              if( this.hong==true&&this.error==true){
                    this.hong=false
                    this.error=false
              }
    	},
		// 完成修改按钮
		resets:function(e){
			var that=this
			if(this.passwords1!=''&&this.passwords1==this.passwords2){
				$.post(Boss+"user/resetpwd",
				{"newpwd":this.passwords1,"sessiontoken":sessiontoken,"verify":this.$route.params.verify},function(data){
					console.log(data)
					if(data.status==1){
                         that.$router.push({name:'passwordsSuccess',params:{index:4}})
				     that.hong=false
				     that.error=false
					}else{
						alert(data.err.message)
					}
					 
				})
                
			}else if(this.passwords1!=''&&this.passwords1!=this.passwords2){
                this.hong=true
				this.error=true
			}
		}
    },

    mounted: function() {
      

			
		
    }
}