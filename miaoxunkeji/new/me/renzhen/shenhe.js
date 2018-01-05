//买卖家我的 实名认证 请您拍一张手持身份证的正脸照片  shenhe

const shenhe = {
    template: `
  <div class=" overflow" style="width:984px;">

<!--请您拍一张手持身份证的正脸照片-->
    
<p class=" c4C4C4F f30" style="padding:15px 0;">请您拍一张手持身份证的正脸照片</p>
<p class=" c4C4C4F f16" style="">我们需要您清晰的手持身份证照片来进一步确认您的身份。</p>

<div class="center" style="margin-top:115px;position:relative;min-height:300px;"> 
<!--图片-->
     <img  :src="srcs==''?'../tu-me/18_24.png':srcs"  class="" > 

	   <img  class="cursor" @click="prevs($event)" src="../tu-me/18_40.png"  style="position:absolute;top:130px;left:0;">  
	 <!--提交审核--> 
	  <img  class="cursor" @click="nexts($event)" src="../tu-me/18_46.png"  style="position:absolute;top:130px;right:0;">  
	 <!--上传照片-->
	 <input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
	 <p style="margin-top:80px;"><img  @click="uploading" src="../tu-me/17_21.png" class="cursor" >  </p> 
</div>
			
	
     
 
     
  </div>

  `,
    data: function() {
        return {
		   srcs:'',
        	file:'',
		   states:''//认证的状态
		
        }
    },

    methods: {
    						// 上传照片的按钮
		uploading:function(){

       
            },
      compress:function(e){
		  var that=this
              var that = this
// 文件对象
              var file = e.currentTarget.files[0];
              var reader = new FileReader();
              reader.onload = function(){
// base64
                var result = this.result;
                that.srcs = result
                that.file=file
window.sessionStorage.setItem('shenhe',result)

                console.log(this.result)
                console.log(that.file)

				
              };
              reader.readAsDataURL(file);

          },
	// 身份证右边的提交审核图片>
	nexts:function(e){
		// 提交审核
		      
              this.$router.push({name:'renzhen',params:{states:'ing'}})
		
	},
	// 身份证左边的上一步图片<
	prevs:function(e){
		 this.$router.push({name:'sfz2'})
		
	},
	//   点击立即认证按钮  是否有头像
	renzhen:function(e){
		 var touxiang=true
		 if(touxiang==true){
			 this.$router.push({name:'touxiangYes',params:{index:2}})
		 }else if(touxiang==false){
			 this.$router.push({name:'touxiangNo',params:{index:2}})
		 }
	}
    },

    mounted: function() {
    	    	// 获取缓存的base64
    	if(window.sessionStorage.getItem('shenhe')!=null){
    		this.srcs=window.sessionStorage.getItem('shenhe')
    			// alert(this.srcs)
    	}
		if(this.$route.params.states==0){
              this.states=(this.$store.state.infor.status=='0'?
			         'no':(this.$store.state.infor.status=='1'?
					'ing':this.$store.state.infor.status=='2'?
					'yes':'error'
					))
		}else{
			 this.states=this.$route.params.states
		}
        
    }
}