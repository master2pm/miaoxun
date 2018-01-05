//买卖家我的 实名认证 头像

const touxiang = {
    template: `
  <div class=" overflow" style="width:984px;">

<!--1.似乎您还没有头像-->
 <div v-if="touxiang==false">     
<p class=" c4C4C4F f30" style="padding:15px 0;">似乎您还没有头像</p>
<p class=" c4C4C4F f16" style="">清晰而具有亲和力的头像可以让您在用户中脱颖而出，让</p>
<p class=" c4C4C4F f16" style="">其他人更加容易记住您。</p>
<div class="center" style="margin-top:115px;position:relative;"> 

      <span style="width:331px;height:330px;display:inline-block;">
            <input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
             <!--图片-->
             <div style="border-radius:50%;width:325px;height:325px;" class="overflow relative">	
	        <img  @load="adjust($event)" @click="zhongji_open($event)" :src="srcs==''?'../tu-me/18_32.png':srcs"  class="jz cursor">  
	         </div>
	   </span>
	   <!--下一步-->
	  <img   @click='nexts($event)' class="cursor" :src="srcs!=''?'../tu-me/18_38.png':'../tu-me/18_42.png'"  style="position:absolute;top:130px;right:0;">  
	  <!--上传照片-->
	 <p style="margin-top:80px;"><img  @click="uploading" src="../tu-me/17_21.png" class="cursor" >  </p> 
</div>
 </div>				



<!--2.很完美，您还有更好的选择吗？-->
 <div v-if="touxiang==true">     
<p class=" c4C4C4F f30" style="padding:15px 0;">很完美，您还有更好的选择吗？</p>
<p class=" c4C4C4F f16" style="">清晰而具有亲和力的头像可以让您在用户中脱颖而出，让</p>
<p class=" c4C4C4F f16" style="">其他人更加容易记住您。</p>
<div class="center" style="margin-top:115px;position:relative;min-height:300px;"> 
      <span style="width:331px;height:330px;display:inline-block;">
	        <!--图片-->
	        <div style="border-radius:50%;width:325px;height:325px;" class="overflow relative">	
	        <img  @load="adjust($event)" @click="zhongji_open($event)" :src="srcs==''?'../tu-me/18_32.png':srcs"   class="jz cursor">  
	         </div>
	   </span>
	    <!--下一步-->
	  <img @click="nexts($event)" :src="srcs!=''?'../tu-me/18_38.png':'../tu-me/18_42.png'"  class="cursor" style="position:absolute;top:130px;right:0;">  
	<!--上传照片-->
	 <input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
	 <p style="margin-top:80px;"><img @click="uploading" src="../tu-me/17_21.png" class="cursor" >  </p> 
</div>
 </div>				
	            <!-- 终极放大图-->
<zhongji v-if="bigbig==true" ></zhongji>
     
  </div>

  `,
    data: function() {
        return {
          bigbig:false,
           number:0,
        	srcs:'',
        	file:'',
		   touxiang:false,//默认没有头像
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
                window.sessionStorage.setItem('touxiang',result)
                that.srcs = result
                that.file=file
                 console.log(result)
                that.touxiang=true
                // setTimeout(function(){
                // 	that.modifys(file,0)
                // },500)
                 // that.saveQx=true
				
              };
              reader.readAsDataURL(file);

          },
	// 头像的右边的下一步图片>
	nexts:function(e){
		// 深色的才能进行下一步
		if($(e.currentTarget).attr("src")=='../tu-me/18_38.png'){

              this.$router.push({name:'sfz'})
		}
	},
	// 上传照片
	uploads:function(e){
		this.touxiang=true
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
     var thisImage=$(e.currentTarget)
              var wkuang = thisImage.parent().width()
              var hkuang = thisImage.parent().height()
              var wtupian=thisImage.width()
              var htupian=thisImage.height()
          var kbl=wkuang/hkuang
          var tbl=wtupian/htupian
          if(kbl>tbl||kbl==tbl){
          	thisImage.css({"width":wkuang+'px'})
          		
          }else{
          	 thisImage.css({"height":hkuang+'px'})
          }
 }
// 	adjust(e){
//                //获取容器宽高
//           var pwidth = $(e.currentTarget).parent().width()
//           var pheight = $(e.currentTarget).parent().height()
//           //获取图片实际宽高
//           var width = $(e.currentTarget).width()
//           var height = $(e.currentTarget).height()
//           //获取实际宽高比例
//           var kgb = width/height
//           var gkb = height/width
//           console.log(width,height,pwidth,pheight)
//           //修正图片宽高 多加了==
//           if(width<height||width==height){
//               $(e.currentTarget).css('width',pwidth+'px')
//               var xzg = pwidth/kgb
//               $(e.currentTarget).css('height',xzg+'px')
//               console.log('取宽')
//           }else{
//               $(e.currentTarget).css('height',pheight+'px')
//               var xzk = pheight*kgb
//               $(e.currentTarget).css('width',xzk+'px')
//               console.log('取高')
//           }
// }
    },

    mounted: function() {
    			 		var that=this
//            // 卖家的个人资料
// $.get(Boss+"user/info",{"sessiontoken":sessiontoken},function(data){
// 	if(window.sessionStorage.getItem('touxiang')!=null){
// 		return
// 	}
// 	// 如果缓存有则不取后台的，否则判断后台有没有，有就取后台的
//                 if(data.results.avatar!=undefined&&data.results.avatar.url!=undefined){
//                 	// 有头像
//                 	that.touxiang=true
//                 	that.srcs=data.results.avatar.url
//                 }else{
//                 	// 无头像
//     		        that.touxiang=false
//                 }
//               })
    	
  // 个人资料
        common_users(function(data){
          if(window.sessionStorage.getItem('touxiang')!=null){
              return
            }
  // 如果缓存有则不取后台的，否则判断后台有没有，有就取后台的
                if(data.avatar!=undefined&&data.avatar.url!=undefined){
                  // 有头像
                  that.touxiang=true
                  that.srcs=data.avatar.url
                }else{
                  // 无头像
                that.touxiang=false
                }
        })

    	// 获取缓存的base64
    	if(window.sessionStorage.getItem('touxiang')!=null){
            // 有头像
            that.touxiang=true
    		this.srcs=window.sessionStorage.getItem('touxiang')
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