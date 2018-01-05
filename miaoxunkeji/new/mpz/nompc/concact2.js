
 
// 没有 您的苗圃场名称与联系方式是什么？

const concact2 = {
    template: `
         <div class="relative" style="height:593px;padding:20px;padding-top:55px;">
		    <p class="f26 c49494B">您的苗圃场名称与联系方式</p>
			<p class="f26 c49494B">是什么？</p>

			<p class="f18 c696A6C" style="margin-top:35px;margin-bottom:10px;">苗圃场名称（必填）</p>
			<div style="width:440px;" class="relative">
			    <input @keyup="tests($event)" :class="{hong:hong==true}" v-model="company" type="text" class="f15 rad border" placeHolder="请输入苗圃场名称" style="height:38px;width:440px;padding:10px;padding-right:35px;">
                <img  v-if="hong==true" src="../tu-mpz/1-62.png"  style="position:absolute;right:10px;" class="czjz">
			</div>
			<p v-if="hong==true" class="f12 cBF3F3F" style="margin-top:5px;">苗圃场名称不能包含公司以及企业字样</p>


			<p class="f18 c696A6C" style="margin-top:35px;margin-bottom:10px;">联系人（必填）</p>
			<input  v-model="name" type="text" class="f15 rad border" placeHolder="请输入联系人名称" style="height:38px;width:440px;padding:10px;">
			
			<p class="f18 c696A6C" style="margin-top:35px;margin-bottom:10px;">联系电话（必填）</p>
			<input  v-model="phone" type="text" class="f15 rad border" @keyup="checkPhone()" maxlength=11 @afterpaste="checkPhone()"  placeHolder="请输入电话号码" style="height:38px;width:440px;padding:10px;">
		    

			  

			  <img src="../tu-mpz/1-14.png" style="display:none;position:absolute;right:20px;top: 94px;" class="cursor">
			  
			  <div style="position:fixed;left:0;bottom:0;width:100%;height:73px;" class=" bai">
			     <div  style="width:1024px;height:73px;" class="spjz">
				     <goback></goback>
			         <img @click="nexts($event)" :src="company!=''&&name!=''&&phone.length==11?'../tu-mpz/1-25.png':'../tu-mpz/1-24.png'" style="right:20px;" class="cursor czjz">
				 </div>
               </div>
          </div>


     `,
     data:function(){
      return {
		hong:false,//控制苗圃场的红色错误线框的
		company:this.$store.state.mpc.gg_name,//请输入苗圃场名称
		name:this.$store.state.mpc.gg_contacts,//请输入联系人名称
		phone:this.$store.state.mpc.gg_contact_number//请输入电话号码
      }
     },
      components:{"goback":goback},
     computed:{
     	watch:function(){
     		this.company=this.$store.state.mpc.gg_name
     		this.name=this.$store.state.mpc.gg_contacts
     		this.phone=this.$store.state.mpc.gg_contact_number
     	}
     },
    methods:{
    	 // 检测手机号码
        checkPhone(){
          this.phone=this.phone.replace(/\D/g,'')
        },
		// 检测是否含有公司和企业的字样
	tests:function(e){
         if(this.company.indexOf("企业")!=-1||this.company.indexOf("公司")!=-1){
			 this.hong=true
		 }else{
			 this.hong=false
		 }
	},
    //   苗圃场名称  联系人名称  电话号码 不为空的时候点击下一步
	nexts:function(e){
		if(this.company!=''&&this.name!=''&&this.phone.length==11){
			// 保存二维数组
			this.$store.commit('saveMPC',{"gg_name":this.company,"gg_contact_number":this.phone,"gg_contacts":this.name}) 
			this.$router.push({name:'where3'})

		}else{
			return
		}
	}
    },
    // 
    mounted:function () {

    }
}

