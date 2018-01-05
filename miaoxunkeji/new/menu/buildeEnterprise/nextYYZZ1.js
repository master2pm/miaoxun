

//买卖家菜单栏 未建立企业  请提供您的企业全称与营业执照

const nextYYZZ1 = {
  template: `
  <div style="padding:0 20px;position: relative;" class="footertop c696A6C">
  <div class="f26 " style="background: url(../tu-menu/21_116.png) no-repeat;height:165px;line-height:165px;margin:50px 0;position: relative;padding-left:130px;">
  建立企业正在进行中
  </div> 
  <p class="f26 " style="margin-bottom:10px;">请提供您的企业全称与营业执照</p>
  <p class="f16 c686A6C">我们需要您输入企业全称并提供企业营业执照正面照片。</p>

  <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">企业全称</p>
  <input  @keyup="nogroup($event)"  v-model="company" type="text" placeHolder="请输入您的企业全称" name="" style="width:462px;height: 38px;padding:10px 20px;" class="inputborder none rad f15">

  <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">请提供企业营业执照正面照片</p>

  <input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
  <img :src="url!=''?url:'../tu-menu/23_03.png'" alt="" class="cursor" style="margin-bottom:120px;width:464px;" @click='uploading'>

  
 <div class=" bai" style="left:0;bottom:0;z-index:101;height:71px;position:fixed;width:100%;">
<div class="jz bai" style="z-index:101;height:51px;width:1024px;">
  <img @click="go()" @mouseenter="index=1" @mouseleave="index=0" :src="index==0?'../tu-menu/21_09.png':'../tu-menu/23_07.png'"  alt="" style="position: absolute;bottom: 0;left:20px;" class="cursor">
  <img :src="company!=''&&url!=''?'../tu-menu/21_14.png':'../tu-menu/21_20.png'" @click="nexts($event)"  class="cursor" alt="" style="position: absolute;bottom: 0;right:20px;">
</div>
</div>


   <div style="display:none;">{{watch}}</div>
  </div>

  `,
  data:function(){
    return {
           company:this.$store.state.name,//企业名称
           index:0,//控制左下角的返回按钮的颜色
           url:this.$store.state.business_src,//企业营业执照
		   urls:this.$store.state.business_licence,//企业营业执照
         }
       },
	   computed:{
           watch:function(){
			   this.$store.state.name=this.company
			   this.$store.state.business_src=this.url
			   this.$store.state.business_licence=this.urls
		   }
	   },
       methods:{
		    nogroup:function(e){
				//保存二维数组
             this.$store.commit("nogroup")
	  },
    //   返回上一步
		go:function(){
			history.back()//只是单纯的返回到上一页
		},
      // 下一步
      nexts:function(e){
        var that=this
        if(this.company!=''&&this.url!=''){
                //检测组名是否重复，没有重复就发请求
                      $.get(Boss+'duplicate/group_name',{'name':that.company,'sessiontoken':sessiontoken},function(data){
                          if(data.status==1){
                            // pass是否通过，1=没有重复，0=该组名已重复
                            if(data.results.pass==1){
                                 that.$router.push({name:"nextSFZ2"})
                            }else{
                                   alert('该企业全称已存在，请重新输入！')
                                 }
                          }
                      })
                
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

          }
        }