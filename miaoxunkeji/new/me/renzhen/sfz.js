//买卖家我的 实名认证 为您的身份证正面拍一张照片

const sfz = {
    template: `
  <div class=" overflow" style="width:984px;">

<!--为您的身份证正面拍一张照片-->
    
<p class=" c4C4C4F f30" style="padding:15px 0;">为您的身份证正面拍一张照片</p>
<p class=" c4C4C4F f16" style="">我们需要您清晰的身份证照片来验证用户的身份，从而打造</p>
<p class=" c4C4C4F f16" style="">更加安全可靠的交易环境。</p>
<div class="center" style="margin-top:115px;position:relative;min-height:300px;"> 
   <!--图片-->
    <div style="width:305px;height:405px;margin: 0 auto;" class="overflow relative">	
         <img  @load="adjust($event)" @click="zhongji_open($event)" :src="srcs==''?'../tu-me/18_13.png':srcs"  class="jz cursor" >  
    </div>
	   <img  class="cursor" @click="prevs($event)" src="../tu-me/18_40.png"  style="position:absolute;top:130px;left:0;">  
	  <img  class="cursor" @click="nexts($event)" :src="srcs!=''?'../tu-me/18_38.png':'../tu-me/18_42.png'"   style="position:absolute;top:130px;right:0;">  
	 <!--上传照片-->
	 <input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
	 <p style="margin-top:80px;"><img   @click="uploading" src="../tu-me/17_21.png" class="cursor" >  </p> 
</div>
			
   
       <!-- 终极放大图-->
<zhongji v-if="bigbig==true" ></zhongji>
     
  </div>

  `,
    data: function() {
        return {
        bigbig:false,
		  srcs:'',
      number:0,
      file:'',
		   states:''//认证的状态
		
        }
    },
  components:{'zhongji':zhongji},
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
window.sessionStorage.setItem('sfz',result)
				
              };
              reader.readAsDataURL(file);

          },
	// 身份证右边的下一步图片>
	nexts:function(e){
		// 深色的才能进行下一步
		if($(e.currentTarget).attr("src")=='../tu-me/18_38.png'){
              this.$router.push({name:'sfz2'})
		}
	},
	// 身份证左边的上一步图片<
	prevs:function(e){
		 this.$router.push({name:'touxiang'})
		
	},

	//   点击立即认证按钮  是否有头像
	renzhen:function(e){
		 var touxiang=true
		 if(touxiang==true){
			 this.$router.push({name:'touxiangYes',params:{index:2}})
		 }else if(touxiang==false){
			 this.$router.push({name:'touxiangNo',params:{index:2}})
		 }
	},
     adjust(e){
// 图片地址
var img_url =$(e.currentTarget).attr('src')
var img = new Image();
img.src = img_url;

var thisImage=$(e.currentTarget)
var wkuang = thisImage.parent().width()
var hkuang = thisImage.parent().height()
// 判断是否有缓存
if(img.complete){
    // 打印
   console.log('from:complete : width:'+img.width+',height:'+img.height);
              var wtupian=img.width//thisImage.width()
              var htupian=img.height//thisImage.height()
              console.log(wkuang,hkuang,wtupian,htupian)
          var kbl=wkuang/hkuang
          var tbl=wtupian/htupian
          if(kbl>tbl||kbl==tbl){
              thisImage.css({"width":wkuang+'px'})
              thisImage.css({"height":'auto'})
          }else{
             thisImage.css({"height":hkuang+'px'})
              thisImage.css({"width":'auto'})
          }
}

              
 }
	
    },

    mounted: function() {
    	    	// 获取缓存的base64
    	if(window.sessionStorage.getItem('sfz')!=null){
    		this.srcs=window.sessionStorage.getItem('sfz')
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