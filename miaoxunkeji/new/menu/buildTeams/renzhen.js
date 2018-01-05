//买卖家菜单栏 已经建立企业 并且管理的是团队  企业认证  <img :src="states=='yes'?'../tu-menu/24_154.png':states=='ing'?'../tu-menu/24_156.png':'../tu-menu/24_159.png'" style="width:986px;height:166px;" class=" " >

const renzhen = {
    template: `
  <div class="" style="position:relative;margin-top:50px;width:984px;margin-bottom:35px;padding:0 20px;">
       <img :src="datas.g_status=='1'?'../tu-menu/24_154.png':(datas.g_status=='0'?'../tu-menu/24_156.png':(datas.g_status=='-1'?'../tu-menu/24_159.png':''))" style="width:986px;height:166px;" class=" " >


       <div class="lf" style="width:463px;margin-right:40px;">
                
				 <p class="f18 c4C4C4F border0" style="margin:60px 0 10px 0;padding-bottom:10px;">企业名称/营业执照</p>
                 <p class="f16 c696A6C" style="margin:0 0 30px 0;">您的企业名称和营业执照在认证通过完成后将不能更改，请慎重填写与上传。</p>
				  <p class="f18 c686A6C overflow" style="margin-bottom:20px;"> 企业名称</p>
				      <input type="text" readOnly style="margin:0px 0 30px 0;width:463px;height:38px;border:1px solid #E3E3E2;padding: 20px;" :value="datas.name" class="rad f15 none">
				 </p>

             <p class="f18 c686A6C overflow" style="margin-bottom:20px;"> 企业营业执照</p>


			  <div style="position:relative;" v-if="look==true">
			       <img  :src="datas.business_licence!=undefined?datas.business_licence.url:''" style="" class=" " style="width:464px;">
              </div>
              <div class="overflow" style="position:relative;width:464px;height:181px;" v-if="look==false">
			       <img :src="datas.business_licence!=undefined?datas.business_licence.url:''" style="" class=" " style="width:464px;">
				   <img @click="look=true" src="../tu-menu/35.png" style="position:absolute;bottom:0;" class="cursor " >
              </div>
		        
				
		
		</div>






		<div  style="width:463px;" class=" rf">
                 <p class="f18 c4C4C4F border0" style="margin:60px 0 10px 0;padding-bottom:10px;">法人名称/法人身份证</p>
                 <p class="f16 c696A6C" style="margin:0 0 30px 0;">您的法定代表人名称和法定代表人身份证正面在认证通过完成后将不能更改，请慎重填写与上传。</p>
				  <p class="f18 c686A6C overflow" style="margin-bottom:20px;"> 法定代表人名称</p>
				      <input type="text" readOnly style="margin:0px 0 30px 0;width:463px;height:38px;border:1px solid #E3E3E2;padding: 20px;" :value="datas.legal_person" class="rad f15 none">
				 </p>

             <p class="f18 c686A6C overflow" style="margin-bottom:20px;"> 法定代表人身份证</p>
			  <img :src="datas.legal_person_identify!=undefined?datas.legal_person_identify.url:''" style="" class=" " style="width:292px;margin-bottom:200px;">

<div v-if="datas.g_status=='-1'" style="left:0;z-index:101;bottom:0px;position:fixed;height:58px;line-height:58px;width:100%;" class="bai f18 cF6 left">			  
              <div   class="right jz" style="width:1024px;">
			      <router-link :to="{name:'buildeEnterprise'}"><img class="cursor"  src="../tu-menu/24_142.png" style="" ></router-link>
			  </div>
</div>			   
		
		</div>

<div v-if="bottom==true&&datas.g_status=='-1'" style="left:0;z-index:102;background:url(../tu-menu/33.png) repeat;bottom:0px;position:fixed;height:148px;line-height:148px;width:100%;" class="lf f18 cF6 left">
		<div  style="width:1024px;margin:0 auto;">
		     企业认证未通过，我们的人工客服会在8:30-17:00之间尽快联系您，协助您完成企业认证。
			 <img class="cursor"  @click="bottom=false" src="../tu-menu/21_57.png" style="position:absolute;right:40px;top:30px;" >
		</div>
</div>
		
		<!--<div style="background:#E3E3E2;margin-top:15px;height:40px;line-height:40px;width:1024px;" class="lf f13 c808082 center" >苗讯科技有限公司</div>-->
        
  </div>

  `,
    data: function() {
        return {
          look:false,//点击查看预览
		  states:'',//认证的状态  ing审核中   yes已认证   no认证不通过
		  bottom:true,//控制底部透明栏的
		  datas:''

        }
    },
     // props:['datas'],//gaishu请求当前默认组的内容
    methods: {
    //   认证未通过的右下方的重新认证按钮
	buildeEnterprise:function(e){
		this.$router.push({name:'buildeEnterprise'})
	}
          
    },

    mounted: function() {
		 var that=this
// 组的审核信息接口 审核中的时候这里看到的是审核通过后的内容
	$.get(Boss+'group/'+this.$route.params.objectId+'/authinfo',{'sessiontoken':sessiontoken},function(data){
	if(data.status==1){
		that.datas=data.results
	}else{
       alert(data.results.message)
	}
})
         this.states= this.$route.params.states
		  console.log(this.states)
    }
}