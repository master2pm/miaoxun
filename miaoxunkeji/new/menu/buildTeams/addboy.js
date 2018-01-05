//买卖家菜单栏 已经建立企业 并且管理的是团队  添加子帐号

const addboy = {
    template: `
  <div class="c686A6C" style="position:relative;margin-top:50px;width:984px;padding:0 20px;">
    <p class=" c4C4C4F f26" style="background:url(../tu-menu/24_62.png) no-repeat center left;padding:15px 0;padding-left: 50px;">添加子帐号</p>
       <img src="../tu-menu/24_162.png" style="margin-top:25px;margin-bottom:50px;" class=" " >
       <p class="f26 " style="margin-bottom:5px;">请输入您要邀请添加为子账号的用户注册手机号码。</p>
	   <p class="f18 ">子账号可以和您一起管理和经营您的团队或企业，您可以通过子账号管理页面来</p>
	   <p class="f18 ">改变每个子账号的权限。</p>
	   <div class="" style="margin-top:35px;width:463px;height:38px;position:relative;">
<input  v-model="phone" type="text" @keyup='shuzi' @onafterpaste='shuzi'
style="left:0;width:375px;height:38px;border:1px solid #E3E3E2;padding:10px 20px;" 
placeHolder="请输入用户注册手机号码" class="czjz rad f16 none">
	    
<img @click="adds($event)" :src="phone!=''&&phone.length==11?'../tu-menu/24_140.png':'../tu-menu/24_144.png'" style="right:0;width:96px;height:38px;" class="czjz cursor">
	   </div>

	   <p v-if="zhuce==true" style="margin-top:10px;">
	     <span class="f13 cBE403F">您所添加的手机号码未注册</span>
		 <span @click="zhuces($event)" class="f13 c239B87 cursor" style="margin-left:15px;">发送注册邀请</span>
	   </p>
       

<div v-if="phone!=''&&bottom==true" style="z-index:101;background:url(../tu-menu/37.png) repeat;width:100%;bottom: 0px;left:0;position:fixed;height:69px;line-height:69px;" class=" f18 cF6 left" >
		<div style="width:976px;margin:0 auto;position:relative;">
		     子帐号添加邀请已成功发送。
			 <img class="cursor czjz"  @click="closes($event)" src="../tu-menu/21_57.png" style="right:40px;" >
		</div>
</div>

	
 
      
  </div>

  `,
    data: function() {
        return {
			// datas:'',
           phone:'',//请输入用户注册手机号码
		   zhuce:false,//您所添加的手机号码未注册        发送注册邀请
		   bottom:false//控制底部透明层

        }
    },
     props:['datas'],//添加子账号请求个人资料
    components:{"footers":footers},
    methods: {
    //  添加之账号的输入框旁边的添加按钮
	shuzi:function(){
		this.phone = this.phone.replace(/\D/g,'')
	},
	adds:function(e){
		var that=this
		if(this.phone!=''&&this.phone.length==11){
             
			  $.post(Boss+"group/"+this.datas.objectId+"/invite",{
				  "sessiontoken":sessiontoken,
				  "mobile":this.phone
				  //,"type":"sign"
				},function(data){
				console.log(data)
                    that.bottom=true
			})
		}
	},
	//关闭叉子
	closes:function(e){
		this.bottom=false
		this.phone=''
	},
	//发送注册邀请
	zhuces:function(e){
		this.bottom=false
		this.phone=''
	}
          
    },

    mounted: function() {
        var that=this
        // 子账号管理与企业转换的再次邀请要自动填写电话号码
        // alert(this.$route.params.phone)
       if(this.$route.params.phone!='no'){
       	  this.phone=this.$route.params.phone
       	  // alert(1)
       }else{
       	// alert(2)
       	this.phone=''
       }

		 
    }
}