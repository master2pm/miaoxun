
 
//买卖家菜单栏 未建立企业  点击建立并认证企业按钮的对应页面

const buildAndrz = {
    template: `
   <div style="padding:0 20px;position: relative;" class=" c696A6C footertop">
           <div class="f26 " style="background: url(../tu-menu/21_116.png) no-repeat;height:165px;line-height:165px;margin:50px 0;position: relative;padding-left:130px;">
             建立企业正在进行中
         </div> 
         <p class="f26 " style="margin-bottom:10px;">请填写您的企业联系信息</p>
         <p class="f16 c686A6C">请在下列表单中填写您的企业联系人信息和企业联系电话，准确的企业</p>
         <p class="f16 c686A6C">联系人与联系电话会使您的买卖交易更加便利。</p>

         <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">企业联系人</p>
         <input @keyup="nogroup($event,0)" v-model="people" type="text" placeHolder="请输入您的企业联系人" name="" style="width:462px;height: 38px;padding:10px 20px;" class="inputborder none rad f15">

         <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">企业联系电话</p>
         <input @afterpaste="checkPhone()" @keyup="nogroup($event,'phone')" v-model="phone" type="text" placeHolder="请输入手机号码或座机号码" name="" style="margin-bottom:110px;width:462px;height: 38px;padding:10px 20px;" class="inputborder none rad f15">
          
         
<div class=" bai" style="left:0;bottom:0;z-index:101;height:71px;position:fixed;width:100%;">
<div class="jz bai" style="z-index:101;height:51px;width:1024px;">
  <img class="cursor" :src="people!=''&&phone.length==11?'../tu-menu/21_14.png':'../tu-menu/21_20.png'" @click="nexts($event)"  alt="" style="position: absolute;bottom: 0;right:20px;">
</div>
</div>

	      <div style="display:none;">{{watch}}</div>
	 </div>

     `,
     data:function(){
      return {
           people:this.$store.state.contacts,//企业联系人
           phone:this.$store.state.contact_number//企业联系电话
      }
     },
	computed:{
            watch:function(){
                 this.$store.state.contacts=this.people
				this.$store.state.contact_number=this.phone
			}
	},
    methods:{
       // 检测手机号码
        checkPhone(){
          this.phone=this.phone.replace(/\D/g,'')
        },
	  nogroup:function(e,item){
      if(item=='phone'){
         this.checkPhone()
         // this.phone=this.phone.replace(/\D/g,'')
      }
            
             this.$store.commit("nogroup")
	  },
      // 下一步
      nexts:function(e){
        if(this.people!=''&&this.phone.length==11){
           this.$router.push({name:"nextYYZZ1"})
        }
           
      }
    },
  
    mounted:function () {
     
    }
}