//买卖家我的 个人信息style="width:984px;"

const message = {
    template: `
   <div class=" overflow" >
       <div class="lf" style="width:463px;margin-right:40px;">
                 <p class=" c4C4C4F f26" style="background:url(../tu-me/17_38.png) no-repeat center left;padding:15px 0;padding-left: 50px;">个人信息</p>
				 <p class="f18 c4C4C4F border0" style="margin:20px 0;padding-bottom:10px;">用户名称</p>
                 <p class="f16 c696A6C" style="margin:25px 0 20px 0;">这是在您注册苗讯账号时输入的名称，名称仅可修改一次，您
				 可以填写您的姓名，或能够贴切代表您的称呼。</p>
				 <input v-model="name" @keyup="saveQx=true" type="text" style="width:463px;height:38px;border:1px solid #E3E3E2;padding:0 35px;" placeHolder="苗讯科技" class="rad f15 none">



        
		         <p class="f18 c4C4C4F border0" style="margin-top:65px;padding-bottom:10px;">个人联系电话</p>
                 <p class="f16 c686A6C " style="margin:25px 0 20px 0;">
				其他用户可以通过个人联系电话来找到您，您可以将个人联
系电话更改为常用的手机号，这会让您在苗木买卖过程中的沟通更加高效。
				 </p>



           <div style="position:relative;" class="f15">      
				  <input v-model="phone" type="text" readOnly style="width:463px;height:38px;border:1px solid #E3E3E2;padding-right:70px;padding-left:35px;" placeHolder="150-1956-3841" class="rad f15 none">
                  <span @click="phone_opens($event)" class="c298B79 czjz cursor" style="right:35px;">更改</span>
		  </div>
				  
				
		
		</div>






		<div  style="width:463px;" class="rf">
                <p class="f18 c4C4C4F border0" style="margin-top: 85px;margin-bottom: 25px;padding-bottom:10px;" >用户头像</p>
		       <div  style="position:relative;">
		       <div  style="border-radius:50%;width:150px;height:150px;display:inline-block;" class="overflow relative">
		         <img @click="zhongji_open($event)" id='canvas' :src="srcs==''?'../tu-me/17_32.png':srcs" class="jz cursor" @load='adjust($event)'>
		       </div>
			    
				<!--<input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
				<img  @click='uploading' :src="srcs=='../tu-me/17_32.png'?'../tu-me/17_21.png':'../tu-me/34.png'" style="top:30px;" class="spjz cursor">-->
<!--触发上传头像截图-->
<div  id="crop-avatar"  style="height:auto;width:auto;"> 
        <div class="avatar-view"  style="height:auto;width:auto;border:none;">
          <img  :src="srcs=='../tu-me/17_32.png'?'../tu-me/17_21.png':'../tu-me/34.png'"  class="spjz cursor" style="top:30px;height:auto;width:auto;">
        </div>
        <imgTailor :geturl='geturl'></imgTailor>   
</div>


				<img  style="top:90px;display:none;" class="spjz">
			  </div>
		</div>
			

         <!-1.更改联系人电话的弹出框-->
		 <div v-if="phoneOpens==true" class="wai_kuangs c686A6C" >
		  <div v-if="phoneOpens==true&&yzmOpens==false" class="nei_kuang bai rad" style="width:468px;height:203px;padding:20px;">
		         <p class="f26 " style="margin-bottom: 25px;">更改个人联系电话</p>
				 <p class="f12 c999899">设置个人联系电话为常用的手机号会让您在苗木买卖过程中的沟通</p>
				 <p class="f12 c999899">更加高效。更改个人联系电话不会对登录造成影响。</p>
				 <input @keyup.enter="yzm_opens" maxlength=11  @keyup="checkPhone()"  @afterpaste="checkPhone()" v-model="newphone" type="text" style="width:463px;height:38px;border:1px solid #E3E3E2;padding-left:30px;margin:20px 0;" placeHolder="请输入新的手机号码" class="rad f15 none">
		         <img @click="yzm_opens" :src="newphone.length==11?'../tu-me/18_68.png':'../tu-me/18_97.png'" class="rf cursor">
		 
		  </div>
		   <!-2.验证码的弹出框-->
		  <div v-if="yzmOpens==true" class="nei_kuang bai rad" style="width:468px;height:203px;padding:20px;">
		         <p class="f26 " style="margin-bottom: 25px;">请检查您的手机</p>
				 <p class="f12 c999899">我们向{{newphone}}发送了一个验证码请在该消息中输入验证码。</p>
				 <input @keyup.enter="tests($event)" v-model="yzm"  type="text" style="width:463px;height:38px;border:1px solid #E3E3E2;padding-left:30px;margin:35px 0 20px 0;" placeHolder="输入4位验证码" class="rad f15 none">
		        <p class="f12 c999899">没收到验证码？</p>
				<p class="f12 c999899" v-show="times!=1">请稍等片刻，{{times}}秒后<span  class="c298B79">重新发送</span>…</p>
				<p class="f12 c999899" v-show="times==1">请稍等片刻，<span  @click="renew()" class="c298B79 cursor">重新发送</span>…</p>
				 <img @click="tests($event)" :src="yzm.length==4?'../tu-me/18_72.png':'../tu-me/18_99.png'" class="rf cursor" style="position:absolute; right:20px;bottom:20px;">
		  </div>
		   <!-3.验证码错误的弹出框-->
		  <div v-if="fail==true" class="nei_kuang bai rad cF6" style="background:url(../tu-me/23.png) no-repeat ;width:468px;height:203px;padding:20px;">
		         <p class="f26" style="margin-bottom: 25px;">请检查您的手机</p>
				 <p class="f12">验证码填写错误。</p>
				 <input @keyup.enter="tests($event)" v-model="yzm"  type="text" style="width:463px;height:38px;border:1px solid #E3E3E2;padding-left:30px;margin:35px 0 20px 0;" placeHolder="输入4位验证码" class="rad f15 none">
		        <p class="f12">没收到验证码？</p>
				<p class="f12" v-show="times0!=1">请稍等片刻，{{times0}}秒后<span  class="c298B79 " >重新发送…</span></p>
				<p class="f12" v-show="times0==1">请稍等片刻，<span  class="c298B79 cursor" @click="renew0()">重新发送…</span></p>
				 <img @click="tests($event)" src="../tu-me/18_95.png" class="rf cursor" style="position:absolute; right:20px;bottom:20px;">
		  </div>
		   <!-4.验证成功的弹出框-->
		  <div v-if="success==true" class="nei_kuang bai rad" style="width:468px;height:203px;padding:20px;">
		         <p class="f26 " style="margin-bottom: 25px;">更改成功！</p>
				 <img @click="closes($event)" src="../tu-me/18_91.png" class="rf cursor" style="position:absolute; right:20px;bottom:20px;">
		  </div>
		  </div>

 <div v-if="saveQx==true" style="z-index:110;background:url(../tu-menu/33.png) repeat;height:72px;width:100%;position:fixed;bottom:0;" class="lf f13 c808082 center spjz2" >
		        <div style="width:1024px;position:relative;margin:0 auto;height:72px;">
				     <img @click="qxs($event)" src="../tu-me/18_89.png" style="right:163px;" class="czjz cursor">  
				     <img @click="saves($event)" src="../tu-me/18_87.png" style="right:20px;" class="czjz cursor">   
				</div>
				
		</div>
		  
		
            <!-- 终极放大图 -->
<zhongji v-if="bigbig==true" ></zhongji>	

  </div>
  `,
    data: function() {
        return {
        	geturl:Boss+"user/modify",//获取图片裁剪的图片保存后台接口
        	number:0,//终极放大图的下面的小圆点
        	bigbig:false,//终极放大图显示和隐藏的变量
        	file:'',
			// datas:"",//用户的信息
            name:'',//用户名称
			phone:'',//个人联系电话
			newphone:'',//请输入新的手机号码
			srcs:"../tu-me/17_32.png",//用户照片
			phoneOpens:false,//控制更改的弹出框的
			yzmOpens:false,//控制验证码的弹出框的
			yzm:'',//验证码的input
			verify:'',//后台返回的验证码
			success:false,//成功的弹出框
			fail:false,//失败的弹出框
			times:60,//倒计时
			times0:60,//
			saveQx:false//修改用户名称的时候底部的提示框出先

        }
    },

   components:{'zhongji':zhongji,'imgTailor':imgTailor},//
   props:['datas'],
    methods: {
    	photos(){
          this.$store.state.photo=true
    	},
    zhongji_open(e){
  if(this.srcs==''){
                 return
              }
  var that=this
 this.$store.state.finalArrs=[] 
 this.$store.state.finalArrs.push($(e.currentTarget).attr('src'))
  that.bigbig=true
  
 
  },
    	adjust(e){
               //获取容器宽高
          var pwidth = $(e.currentTarget).parent().width()
          var pheight = $(e.currentTarget).parent().height()
          //获取图片实际宽高
          var width = $(e.currentTarget).width()
          var height = $(e.currentTarget).height()
          //获取实际宽高比例
          var kgb = width/height
          var gkb = height/width
          console.log(width,height,pwidth,pheight)
          //修正图片宽高 多加了==
          if(width<height||width==height){
              $(e.currentTarget).css('width',pwidth+'px')
              var xzg = pwidth/kgb
              $(e.currentTarget).css('height',xzg+'px')
              console.log('取宽')
          }else{
              $(e.currentTarget).css('height',pheight+'px')
              var xzk = pheight*kgb
              $(e.currentTarget).css('width',xzk+'px')
              console.log('取高')
          }
},
    	 // 检测手机号码
        checkPhone(){
          this.newphone=this.newphone.replace(/\D/g,'')
        },
		// 确定的按钮
		saves:function(){
			 var that=this
			  that.modifys(this.name,0)
              this.saveQx=false
            },
			// 取消的按钮
		qxs:function(){
              this.saveQx=false
            },
		// 上传照片的按钮
		uploading:function(){
              $('#schuan').click()
            },
      compress:function(e){
		  var that=this
              var that = this
              var file = e.currentTarget.files[0];
              console.log(file)
              var reader = new FileReader();
              reader.onload = function(){

                var result = this.result;
                that.srcs = result
                that.file=file
                // setTimeout(function(){
                // 	that.modifys(file,0)
                // },500)
                 that.saveQx=true
				
              };
              reader.readAsDataURL(file);

          },
		// 验证成功的确定按钮
		closes:function(e){
            // if(this.yzm.length==4&&this.verify==this.yzm){
                      this.phoneOpens=false
					  this.yzmOpens=false
					  this.success=false
					  this.fail=false
					  this.phone=this.newphone
			// }
		},
		// 点击验证按钮
		tests:function(e){
			var that=this
            if(this.yzm.length==4){
				// 验证码正确则发请求修改手机号码
				    $.post(Boss+"user/modify/contact_number",
					{"mobile":this.newphone,"verify":this.yzm,"sessiontoken":sessiontoken},function(data){
						console.log(data)
						if(data.status==1){
                       that.success=true
						}else{
							that.fail=true
							var dd=setInterval(function(){
					that.times0--
					if(that.times0==1){
						clearInterval(dd); 
					}
				},1000)

						}
					})
                    
			}

		},
        //  点击更改按钮的让更改弹出框出现
		phone_opens:function(e){	
			this.phoneOpens=true
		},
		//  点击更改弹出框的下一步按钮
		yzm_opens:function(e){
			var that=this
			this.yzmOpens=true
			this.yzm=''
			if(this.newphone.length==11){
				//倒计时
				var dd=setInterval(function(){
					that.times--
					if(that.times==1){
						clearInterval(dd); 
						// alert(that.times)
						// that.yzms()
					}
				},1000)
				
			 that.yzms()
			}
		},
		// 验证码错误的重新发送按钮
		renew(){
			//倒计时
			var that=this
			   that.times=60
				var dd=setInterval(function(){
					that.times--
					if(that.times==1){
						clearInterval(dd); 
						// alert(that.times)
						// that.yzms()
					}
				},1000)
            this.yzms()
		},
		renew0(){
			//倒计时
			var that=this
			   that.times0=60
				var dd=setInterval(function(){
					that.times0--
					if(that.times0==1){
						clearInterval(dd); 
						// alert(that.times)
						// that.yzms()
					}
				},1000)
            this.yzms()
		},
		// 发验证码的请求  UserClient - 发送用户联系电话号码验证 "isDebug":'1',
		yzms:function(){
			var that=this
			$.post(Boss+"user/modify/contact_number/verify",
			{"mobile":this.newphone,"sessiontoken":sessiontoken},function(data){
				// console.log(data)
				// if(data.status==1){
				// 	that.verify=data.results.code
				// }
				if(data.status==0){
					alert(data.results.message)
				}
			})
		},
		// information:function(){
		// 	   //   获取用户资料m1-ymboss.leanapp.cn
		// 	var that=this
		// 	$.get(this.$store.state.Boss+"user/info",
		// 	{"sessiontoken":this.$store.state.sessiontoken},function(data){
		// 		console.log(data)
		// 		if(data.status==1){
		// 			// that.datas=data.results
		// 			that.name=data.results.nickname
		// 			that.phone=data.results.contact_number
		// 			that.srcs=data.results.avatar.url
		// 		}
		// 	})
		// },
		// 修改用户资料
modifys:function(name,src){
			var that=this
var formData = new FormData();
formData.append("sessiontoken",sessiontoken);
// 头像可以修改9999次，但是名字只能修改1次，所以当不是修改名字的时候就不能去同时提交名字
if(this.file!=''){
formData.append("avatar", this.file);

}else if(this.file==''&&name!=0){
formData.append("nickname", name);
}else if(this.file!=''&&name!=0){
// formData.append("nickname", name);
alert('不能同时保存用户名称和用户头像')
return
}
jQuery.ajax({
    url:Boss+"user/modify",
    type: "POST",
    processData: false,
    contentType: false,
    data: formData,
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
	if(data.status==1){
		window.location.reload()
	}else if(data.status==0){
		alert(data.results.message)
		 // window.location.reload()
	}
  
})

		}
    },

    mounted: function() {
    	var that=this
       // this.information()
                 // 个人资料
     //    common_users(function(data){
     //     			that.name=data.nickname
					// that.phone=data.contact_number
					// that.srcs=data.avatar.url
     //    })

         			that.name=that.datas.nickname
					that.phone=that.datas.contact_number
					that.srcs=that.datas.avatar.url
       
    }
}