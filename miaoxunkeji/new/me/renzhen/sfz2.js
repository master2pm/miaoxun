//买卖家我的 实名认证 请您拍一张手持身份证的正脸照片

const sfz2 = {
    template: `
  <div class=" overflow" style="width:984px;">

<!--请您拍一张手持身份证的正脸照片-->
    
<p class=" c4C4C4F f30" style="padding:15px 0;">请您拍一张手持身份证的正脸照片</p>
<p class=" c4C4C4F f16" style="">我们需要您清晰的手持身份证照片来进一步确认您的身份。</p>

<div class="center" style="margin-top:115px;position:relative;min-height:300px;"> 
 <!--图片-->
    
    <div style="width:305px;height:405px;margin: 0 auto;" class="overflow relative"> 
     <img  @load="adjust($event)" @click="zhongji_open($event)" :src="srcs==''?'../tu-me/18_24.png':srcs"  class="jz cursor" >   
    </div>


	   <img  class="cursor" @click="prevs($event)" src="../tu-me/18_40.png"  style="position:absolute;top:130px;left:0;" >  
	  
	  <!--提交审核--> 
	  <img  class="cursor" @click="shenhe($event)" :src="srcs!=''?'../tu-me/18_46.png':'../tu-me/18_46(1).png'"  style="position:absolute;top:130px;right:0;">  
	 <!--上传照片-->
	 <input type="file" name="" id='schuan' style="display: none" @change='compress($event)'>
	 <p style="margin-top:80px;"><img @click="uploading" src="../tu-me/17_21.png" class="cursor" >  </p> 
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
    		// 身份证右边的提交审核图片>
	shenhe:function(e){
		var that=this
		var formData = new FormData();
		 formData.append("sessiontoken",sessiontoken);
		var photo=[]
		var touxiang=window.sessionStorage.getItem('touxiang')
		var sfz=window.sessionStorage.getItem('sfz')
		var sfz2=window.sessionStorage.getItem('sfz2')
		if(touxiang!=null){
			photo.push(touxiang)
		}
		if(sfz!=null){
			photo.push(sfz)
		}
		if(sfz2!=null){
			photo.push(sfz2)
		}

            for (var i = 0; i < photo.length; i++) {
                       //base64转换为blob对象
                        var text = window.atob(photo[i] .split(",")[1]);
                        var buffer = new ArrayBuffer(text.length);
                        var ubuffer = new Uint8Array(buffer);
                        var pecent = 0 , loop = null;

                        for (var n = 0; n < text.length; n++) {
                            ubuffer[n] = text.charCodeAt(n);
                        }
                        var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder;
                        var blob;
                        if (Builder) {
                            var builder = new Builder();
                            builder.append(buffer);
                            blob = builder.getBlob(type);
                        } else {
                            blob = new window.Blob([buffer], {type : 'image/png'});
                        }
                        if(i=0){
                        	// 头像
                          formData.append("avatar",blob);
                        }
                        if(i=1){
                        	// 身份证正面
                           formData.append("front",blob);//身份证正面
                        }
                        if(i=2){
                        	// 手持身份证
                          formData.append("handin",blob);//手持身份证
                        }
                         
                   
                    }
		// 提交审核上传用户身份证进行实名认证
		 
		  jQuery.ajax({
                        url: Boss+"user/identify",
                        type: "POST",
                         async:false,
                        processData: false,
                        contentType: false,
                        data: formData,
                    })
                    .done(function(data, textStatus, jqXHR) {
                    	 that.$router.push({name:'renzhen',params:{states:'ing'}})
                    	 window.sessionStorage.clear('sfz')
                        window.sessionStorage.clear('sfz2')
                        window.sessionStorage.clear('touxiang')
                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        console.log("HTTP Request Failed");
                    })
                    .always(function() {});
      
		
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
window.sessionStorage.setItem('sfz2',result)
				
              };
              reader.readAsDataURL(file);

          },
	// 身份证右边的下一步图片>
	nexts:function(e){
		// 深色的才能进行下一步
		if($(e.currentTarget).attr("src")=='../tu-me/18_38.png'){
              this.$router.push({name:'shenhe'})
		}
	},
	// 身份证左边的上一步图片<
	prevs:function(e){
		 this.$router.push({name:'sfz'})
		
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
// else{
//     // 加载完成执行
//     img.onload = function(){
//         // 打印
//               console.log('from:onload : width:'+img.width+',height:'+img.height);
//               var wtupian=img.width//thisImage.width()
//               var htupian=img.height//thisImage.height()
//               console.log(wkuang,hkuang,wtupian,htupian)
//           var kbl=wkuang/hkuang
//           var tbl=wtupian/htupian
//           if(kbl>tbl||kbl==tbl){
//               thisImage.css({"width":wkuang+'px'})
//           }else{
//              thisImage.css({"height":hkuang+'px'})
//           }
//     };
// }
              
 }
//       adjust(e){
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
    	    	// 获取缓存的base64
    	if(window.sessionStorage.getItem('sfz2')!=null){
    		this.srcs=window.sessionStorage.getItem('sfz2')
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