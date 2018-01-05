//买卖家菜单栏 已经建立企业 并且管理的是团队  概述

const message = {
    template: `
  <div class="overflow" style="margin-bottom:50px;position:relative;margin-top:50px;width:984px;padding:0 20px;">
       <div class="lf" style="width:463px;margin-right:40px;">
                 <p v-if="datas.type=='company'" class=" c4C4C4F f26" style="background:url(../tu-menu/24_46.png) no-repeat center left;padding:15px 0;padding-left: 50px;">企业信息</p>
				 <p v-if="datas.type=='group'" class=" c4C4C4F f26" style="background:url(../tu-menu/24_43.png) no-repeat center left;padding:15px 0;padding-left: 50px;">团队信息</p>

				 <p class="f18 c4C4C4F border0" style="margin:20px 0;padding-bottom:10px;">{{datas.type=='group'?'团队':'企业'}}名称</p>
                 <p class="f20 c696A6C" style="margin:35px 0 40px 0;">{{datas.name}}</p>
				 <p class="f20 c686A6C overflow" style="margin:20px 0;">
				  <p class="f18 c686A6C overflow" style="margin-bottom:30px;"> 简介</p>
				      <textarea @keyup="xians()"  :value="datas.intro" v-model="jianjie" style="resize:none;border:1px solid #E3E3E2;padding:20px;width:463px;height:128px;" class="f16 none rad f16" :placeHolder="datas.type=='group'?'请输入团队简介':'请输入企业简介'"></textarea>
				 </p>



        
		         <p class="f18 c4C4C4F border0" style="margin-top:65px;padding-bottom:10px;">
				 {{datas.type=='group'?'团队联系人/联系电话':' 企业联系人/联系电话'}}
				 </p>

                 <p v-if="datas.type=='company'" class="f16 c686A6C " style="margin:25px 0 30px 0;">
				 通过请在下列表单中填写您的企业联系人信息和企业联系电话，准确的企业联系人与联系电话会使您的买卖
                 交易更加便利。
				 </p>
				  <p v-if="datas.type=='group'" class="f16 c686A6C " style="margin:25px 0 30px 0;">
				通过请在下列表单中填写您的团队联系人信息和团队联系电话，准确的团队联系人与联系电话会使您的买卖
                交易更加便利。
				 </p>



                  <p class="f18 c686A6C " style="margin-top:65px;padding-bottom:20px;">{{datas.type=='group'?'团队':'企业'}}联系人</p>
				  <input @keyup="xians()" v-model="name" type="text" style="margin:0px 0 30px 0;width:463px;height:38px;border:1px solid #E3E3E2;padding: 20px;" placeHolder="卡卡西" class="rad f15 none">

				   <p class="f18 c686A6C " style="margin-top:5px;padding-bottom:20px;">{{datas.type=='group'?'团队':'企业'}}联系电话</p>
				  <input @keyup="xians()"  v-model="phone" type="text" style="margin:0px 0 30px 0;width:463px;height:38px;border:1px solid #E3E3E2;padding: 20px;" placeHolder="135-2456-5784" class="rad f15 none">
				
		
		</div>






		<div  style="width:463px;" class=" rf">
                <p class="f18 c4C4C4F border0" style="margin-top: 85px;margin-bottom: 25px;padding-bottom:10px;">
				{{datas.type=='group'?'团队':'企业'}}头像
				</p>
		        <div class="" style="position:relative;height:145px;width:239px;">	  
					  <img @click="zhongji_open($event)"  :src="url!=''?url:(datas.type=='company'?'../tu-menu/67.png':(datas.type=='private'?'../tu-menu/65.png':'../tu-menu/66.png'))" style="height:145px;width:239px;" class=" czjz cursor" >
					  <!----><input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
					  <img src="../tu-menu/24_129.png" style="left:290px;" class="czjz cursor" @click='uploading'>
<!--头像裁剪上传
<div  id="crop-avatar"  style="height:auto;width:auto;"> 
        <div class="avatar-view"  style="height:auto;width:auto;border:none;">
           <img src="../tu-menu/24_129.png" style="left:290px;width:auto;height:auto;" class="czjz cursor" >
        </div>
        <imgTailor :geturl="geturl"></imgTailor>   
</div>-->
				</div>

				 <p v-if="datas.type=='company'" class="f18 c4C4C4F border0" style="margin-top: 197px;margin-bottom: 25px;padding-bottom:10px;">企业认证</p>
		          <p v-if="datas.type=='group'" class="f18 c4C4C4F border0" style="margin-top: 197px;margin-bottom: 25px;padding-bottom:10px;">将团队升级为企业</p>

			   <!--1.未认证   立刻认证
			    <div  v-if="datas.type=='company'&&datas.g_status=='-2'" class="" style="height:87px;width:465px;position:relative;background:url(../tu-menu/24_03.png) no-repeat;">
					  <router-link :to="{name:'menuNos1'}">
					  <img src="../tu-menu/24_05.png" style="right:30px;" class="czjz cursor">
					  </router-link>
				</div>-->
			   <!--2.正在审核中
			    <router-link :to="{name:'renzhen',params:{states:'ing',index:2}}"> 
				<div  v-if="datas.type=='company'&&datas.g_status=='0'" @click="indexs($event,2)" class="" style="height:87px;width:465px;position:relative;background:url(../tu-menu/24_28.png) no-repeat;">
					
				</div>
				</router-link>-->
			    <!--3.已认证   查看认证-->
			    <div  v-if="datas.type=='company'&&datas.g_status=='1'" class="" style="height:87px;width:465px;position:relative;background:url(../tu-menu/24_57.png) no-repeat;">
					  <router-link :to="{name:'renzhen',params:{states:'yes',index:2}}">
					  <img @click="indexs($event,2)"  src="../tu-menu/24_14.png" style="right:30px;" class="czjz cursor">
					  </router-link>
				</div>
				 <!--4.认证未通过  查看认证
			    <div v-if="datas.type=='company'&&datas.g_status=='-1'" class="" style="height:87px;width:465px;position:relative;background:url(../tu-menu/24_102.png) no-repeat;">
					  <router-link :to="{name:'renzhen',params:{states:'no',index:2}}">
					  <img @click="indexs($event,2)"  src="../tu-menu/24_29.png" style="right:30px;" class="czjz cursor">
					  </router-link>
				</div>-->




				<!--1.未认证   立刻认证-->
			    <div  v-if="datas.type=='group'&&datas.g_status=='-2'" class="" style="height:87px;width:465px;position:relative;">
					  <router-link :to="{name:'menuNos1'}">
					  <img src="../tu-menu/24_05.png" style="right:30px;" class="czjz cursor">
					  </router-link>
				</div>
			   <!--2.正在审核中-->
			    <router-link :to="{name:'renzhen',params:{states:'ing',index:2}}"> 
				<div  v-if="datas.type=='group'&&datas.g_status=='0'" @click="indexs($event,2)" class="" style="height:87px;width:465px;position:relative;">
					 <img src="../tu-menu/48.png" style="right:30px;" class="czjz cursor">
				</div>
				</router-link>
			    <!--3.已认证   查看认证-->
			    <div  v-if="datas.type=='group'&&datas.g_status=='1'" class="" style="height:87px;width:465px;position:relative;background:url(../tu-menu/24_57.png) no-repeat;">
					  <router-link :to="{name:'renzhen',params:{states:'yes',index:2}}">
					  <img @click="indexs($event,2)"  src="../tu-menu/24_14.png" style="right:30px;" class="czjz cursor">
					  </router-link>
				</div>
				 <!--4.认证未通过  查看认证-->
			    <div v-if="datas.type=='group'&&datas.g_status=='-1'" class="" style="height:87px;width:465px;position:relative;">
					  <router-link :to="{name:'renzhen',params:{states:'no',index:2}}">
					  <img @click="indexs($event,2)"  src="../tu-menu/24_29.png" style="right:30px;" class="czjz cursor">
					  </router-link>
				</div>
		
		</div>
			
<div   style="display:none;z-index:101;background:url(../tu-menu/33.png) repeat;height:72px;width:100%;position:fixed;bottom:0;left:0;" class="f13 c808082 center xian" >
        <div style="width:1024px;position:relative;height:72px;margin:0 auto;">
		        <img @click="saves($event)" src="../tu-menu/24_133.png" style="right:20px;" class="czjz cursor"> 
				<img @click="qxs($event)" src="../tu-menu/24_137.png" style="right:163px;" class="czjz cursor">    
		</div>
</div>
            <!-- 终极放大图-->
<zhongji v-if="bigbig==true" ></zhongji>	
  </div>

  `,
    data: function() {
        return {
        	geturl:'',//获取图片裁剪的图片保存后台接口
        	number:0,//终极放大图的下面的小圆点
        	bigbig:false,//终极放大图显示和隐藏的变量
            hasItem: false, //已建立过企业/团队，当前选择为团队
            index: 0, //顶栏标题的图片
			name:'',//企业联系人
			phone:'',//企业联系人电话号码
			jianjie:'',//企业团队简介
			//states:'',
			url:'',//企业头像
			avatar:''
			// datas:'',

        }
    }, 
 props:['datas'],//gaishu请求当前默认组的内容
components:{"footers":footers,'zhongji':zhongji,'imgTailor':imgTailor}, 
    methods: {
    	 zhongji_open(e){
  if(this.srcs==''){
                 return
              }
  var that=this
 this.$store.state.finalArrs=[] 
 this.$store.state.finalArrs.push($(e.currentTarget).attr('src'))
  that.bigbig=true
  
 
  },
		xians:function(){
			$(".xian").css("display","block")
		},
		//    点击概述里面团队信息的编辑按钮切到团队企业信息
	indexs:function(e,n){
		console.log(this.$store.state.index)
		this.$store.state.index=n
	},
    //    点击取消按钮
	qxs:function(e){
		// 让固定栏消失
		$(".xian").css("display","none")
		//$(e.currentTarget).parent().css("display",'none')
	},
	//    点击保存按钮  修改团队/企业资料
	saves:function(e){
		var that=this
		//  发请求并让固定栏消失
		var formData=new FormData()
		if(this.name!=''){
             formData.append("contacts",this.name)
		}
		formData.append("sessiontoken",sessiontoken)
		if(this.phone!=''){
             formData.append("contact_number",this.phone)
		}
		if(this.jianjie!=''){
             formData.append("intro",this.jianjie)
		}
		if(this.avatar!=''){
             formData.append("avatar",this.avatar)
		}
		

		     jQuery.ajax({
                    url: Boss+"group/"+this.datas.objectId,
                    type: "POST",
                    processData: false,
                    contentType: false,
                    data: formData,
                })
                .done(function(data, textStatus, jqXHR) {
                    if (data.status == 1) {
                    	location.reload()
      //                   console.log(data)
      //                   // alert(2)
      //                   // alert(data.results.avatar.url)
      //                   that.$parent.datas.avatar.url=data.results.avatar.url
      //                    // that.$parent.datas.avatar.url=data.avatar.url
						// $(".xian").css("display","none")
                    }

                })

		
	},
	 uploading(){
              $('#schuan').click()
            },
    compress(e){
              var that = this
              var file = e.currentTarget.files[0];
              console.log(file)
              var reader = new FileReader();
              reader.onload = function(){

                var result = this.result;
                that.url=this.result;
				that.avatar=file
				setTimeout(function(){
					that.xians() 
				},10)
              };
              reader.readAsDataURL(file);
            }
          
    },

    mounted: function() {
		  var that=this
// 1.请求默认组的内容
		// 	common_default_groups(this.$route.params.objectId,function(data){
  //                that.datas=data
  //                if(data.avatar.url!=undefined){
  //                	that.url=data.avatar.url
  //                }
		// 		that.name=data.contacts
		// 		that.phone=data.contact_number
		// 		that.jianjie=data.intro
  //                console.log("信息 请求当前默认组的内容")
		// })
// 接收父元素的datas
		if(that.datas.avatar.url!=undefined){
                 	that.url=that.datas.avatar.url
                 }
				that.name=that.datas.contacts
				that.phone=that.datas.contact_number
				that.jianjie=that.datas.intro
				that.geturl=Boss+"group/"+that.datas.objectId
		
    }
}