

//买卖家菜单栏 未建立企业  请提供您的企业法定代表人姓名与身份证照片

const nextSFZ2 = {
  template: `
  <div style="padding:0 20px;position: relative;" class="footertop c696A6C">
  <div class="f26 " style="background: url(../tu-menu/21_116.png) no-repeat;height:165px;line-height:165px;margin:50px 0;position: relative;padding-left:130px;">
  建立企业正在进行中
  </div> 
  <p class="f26 " style="margin-bottom:10px;">请提供您的企业法定代表人姓名与身份证照片</p>
  <p class="f16 c686A6C">个体商户请提供经营者姓名和经营者身份证正面照片</p>

  <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">法定代表人名称</p>
  <input  @keyup="nogroup($event)" v-model="legalPerson" type="text" placeHolder="请输入您的法人名称" name="" style="width:462px;height: 38px;padding:10px 20px;" class="inputborder none rad f15">

  <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">请提供您的法定代表人身份证正面</p>

  <input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
  <img :src="url!=''?url:'../tu-menu/23_03.png'" alt="" class="cursor" style="margin-bottom:120px;width:464px;" @click='uploading'>

 
<div class=" bai" style="left:0;bottom:0;z-index:101;height:71px;position:fixed;width:100%;">
<div class="jz bai" style="z-index:101;height:51px;width:1024px;">
   <img @click="go()" @mouseenter="index=1" @mouseleave="index=0" :src="index==0?'../tu-menu/21_09.png':'../tu-menu/23_07.png'"  alt="" style="position: absolute;bottom: 0;left:20px;" class="cursor">
  <!--下一步-->
  <img v-if="hasItem==true" :src="legalPerson!=''&&url!=''?'../tu-menu/21_14.png':'../tu-menu/21_20.png'" class="cursor" @click="nexts1($event)"  alt="" style="position: absolute;bottom: 0;right:20px;">
  <!--完成建立-->
  <img v-if="hasItem==false" :src="legalPerson!=''&&url!=''?'../tu-menu/21_30.png':'../tu-menu/21_39.png'" class="cursor" @click="nexts2($event)"  alt="" style="position: absolute;bottom: 0;right:20px;">
</div>
</div>


    <div style="display:none;">{{watch}}</div>
  </div>

  `,
  data:function(){
    return {
           legalPerson:this.$store.state.legal_person,//企业法人代表名称
           index:0,//控制左下角的返回按钮的颜色
           url:this.$store.state.legal_src,//法定代表人身份证
		   urls:this.$store.state.legal_person_identify,//法定代表人身份证
           hasItem:false//1.有个人苗木项目private_ground_count>0个人项目的苗圃场数量   下一步   nexts1      2.private_ground_count==0个人项目的苗圃场数量 完成认证   nexts2  
         }
       },
	    computed:{
           watch:function(){
			   this.$store.state.legal_person_identify=this.urls
			   this.$store.state.legal_src=this.url
			this.$store.state.legal_person=this.legalPerson
		   }
	   },
       methods:{
		      nogroup:function(e){
				//alert(11)
             this.$store.commit("nogroup")
	  },
//   返回上一步
		go:function(){
			history.back()//只是单纯的返回到上一页
		},
      // 下一步
      nexts1:function(e){
        if(this.legalPerson!=''&&this.url!=''){
                this.$router.push({name:"nextWCYZ3"})
              }

            },
      // 完成认证
      nexts2:function(e){
		  var that=this
        if(this.legalPerson!=''&&this.url!=''){
			    // 调用store的方法 
				this.$store.commit("Group")
				setTimeout(function() {
					 that.$router.push({name:"nextWCYZ4"})
				}, 100);
               
              }

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
				that.urls=file
				setTimeout(function(){
                  that.nogroup()
				},100)
              };
              reader.readAsDataURL(file);
            }
          },

   mounted:function () {
    // 判断有没有个人苗木数据--判断个人是否有苗圃场private_group.ground_count
    if(common_user.private_ground_count>0){//私有项目的苗圃埸数
        //有个人苗木数据
        this.hasItem=true
    }else{
        //无个人苗木数据
        this.hasItem=false
    }
          }
        }