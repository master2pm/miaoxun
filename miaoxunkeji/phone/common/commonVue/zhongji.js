
const zhongji = {
    template: `
	<!-- 终极放大图-->
	<div class="wai_kuangs"  style="z-index:2006;">

		<div  v-if="finalArrs.length!=0" id="myCarousels" class=" carousel zhongji " data-ride="carousel" data-interval=false style="height:100%;width:100%;" >

			<!-- 轮播（Carousel）项目 -->
			<div id="myCarousels1"  class="carousel-inner" style="height:100%;width:100%;">
				<div class="item relative" :class="{active:index==0}" id="getheight" v-for="(item,index) in finalArrs" style="height:100%;width:100%;">
					<img :ids="item.id" :src="item.url+'?imageView2/2/h/'+height" alt="slide" style="max-width:none;" class="jz cursor"
					@mouseenter="drag_over($event)" @mouseleave="drag_out($event)">
					<!-- <div class="carousel-caption">标题 {{index}}</div> -->
				</div>
			</div>

			<!-- 轮播（Carousel）导航 -->
			

<div class="f26  spjz center" style="color:white;padding:0 250px;width:524px;height:75px;bottom:0;">
    <!--1/5-->
    <span class="lf" style="margin-top:22px;">
         {{number}}/{{finalArrs.length}}
    </span>

    <!-- < -->
	<img @click="toPrevs()"  src="/static/tu-detail/1-69 (2).png"  class="final3 ff czjz cursor" style="z-index:10;bottom:10px;left:350px;">
	
	<!-- > -->
	<img @click="toNexts()"  src="/static/tu-detail/1-70 (2).png"   class="final3 ff czjz cursor" style="z-index:10;bottom:10px;left:400px;">

   <!-- 加 -->
	<img @click="final3s($event)"  src="/static/tu-detail/1-72 (2).png"  class="final3 ff czjz cursor" style="z-index:10;bottom:10px;left:450px;">
	<!-- 减 -->
	<img @click="final4s($event)"  src="/static/tu-detail/1-73 (2).png"  class="final4 ff czjz cursor" style="z-index:10;bottom:10px;left:500px;">

	

    <!--已设为封面  设为封面-->
    <span class="rf" style="margin-top:22px;margin-left:20px;">
         已设为封面
    </span>

    <!--删除-->
    <span @click="removePhoto()" class="rf cursor" style="margin-top:22px;">
         删除
    </span>
</div>


	<!-- 关闭叉子 -->
	<img @click="closes($event)" src="/static/tu-detail/1-75.png"  class="cursor final5 absolute" style="top:20px;right:10px;">


</div>
</div>
</div>
   `,
 data:function(){
     			return{
     				number:0,
				height:parseInt(innerHeight*0.9),
				index:-1,//控制<>+-
                 //finalArr:[], //全局变量，用来保存终极放大图中，从放大图传入的图片路径
                 finalArrs:this.$store.state.finalArrs,//原来的路径没有转大写的
                 //remark:this.$store.state.remark,//描述
                 drag:0,
                 move:0,
                 dragObj:0,
                 clickleft:'',
                 clickTop:''
               

             }
     },
methods:{
	// 删除指定苗木的图片
	removePhoto(){
		var that=this
		var ids=$(".item.active>img").attr("ids")
		var index=$(".item.active>img").index()		
        $.post(Boss+'tree/'+this.$route.params.tjId+'/remove_photo',{
         	'objectId':this.$route.params.tjId,
         	'pic_ids':ids,
         	'sessiontoken':sessiontoken
         },function(data){
         	if(data.status==1){
                     that.$store.state.finalArrs.splice(index,1)
		             if(that.$store.state.finalArrs.length>0){
		             	// 删完后还有则判断如果后面无-1  后面有就取原来的index
		             	if(that.$store.state.finalArrs[index+1]!=undefined){
		             		that.toNum(index+1)
		             	}else{
		             		that.toNum(index)
		             	}
                           
		             }else{
		             	// 删完后没有了则关闭
		             	that.$parent.bigbig=false
		             }
         	}
         })
	},
	// 设置封面
// 这个是点点点的轮播图的下面的小点
  		toNum(index){
				 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
  				  $("#myCarousels").carousel(index);
  				  this.number=index+1
  				   // alert(this.number)
			},       
  // 防止点击轮播的时候被识别成路由
  toNexts(e){
  	 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
  	$("#myCarousels").carousel('next');
  	this.number=parseInt($(".item.active").index())+1
  },
      // 防止点击轮播的时候被识别成路由
      toPrevs(e){
      	 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
      	$("#myCarousels").carousel('prev');
      		this.number=parseInt($(".item.active").index())+1
  	
      },
      initWheel(){
				// 轮滚缩放功能			
				     $(document).on('#myCarousels mousewheel DOMMouseScroll', function (e) {			 	
					if($("#myCarousels").css("display")=="block"){
						e.preventDefault();
				        //鼠标滚轮的滚动方向 >0 up;<0 down   
				        var _delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
				        if (_delta > 0) {
				        	var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
				        	var sx=width+width*0.06
				        	var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
				        	var sx2=height+height*0.06
				        	// if((sx>innerWidth||sx==innerWidth)){
             //                   return
				         //    }
				        	$(".zhongji .active>img").css({'width':sx+'px','height':sx2})

				        } else {
				        	var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
				        	var sx=width-width*0.06
				        	var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
				        	var sx2=height-height*0.06
				        	// if((sx>innerWidth||sx==innerWidth)){
             //                   return
				         //    }
				        	$(".zhongji .active>img").css({'width':sx+'px','height':sx2})		                  
				        }
				    }
				})		
			},
			// 移动的代码
			init(){
				window.document.onmousemove = this.mouseMove
				window.document.onmousedown = this.mouseDown
				window.document.onmouseup = this.mouseUp
				window.document.ondragstart = this.mouseStop
			},
			mouseDown() {
				if (this.drag) {
					console.log('can move')
					this.clickleft = window.event.x - parseInt(getComputedStyle(this.dragObj).left)
					this.clicktop = window.event.y - parseInt(getComputedStyle(this.dragObj).top)
					this.dragObj.style.zIndex += 1
					this.move = 1
				}
			},
			mouseStop() {
				window.event.returnValue = false
			},
			mouseMove() {

				if (this.move) {
					//console.log($(this.dragObj),window.event.x, this.clickleft)
					$(this.dragObj).css('left', window.event.x - this.clickleft)
					$(this.dragObj).css('top',  window.event.y - this.clicktop)
				}
			},
			mouseUp() {
				this.move = 0
			},
		    // 终极图的下方的+点击事件
		    final3s(e){
		    	var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
		    	var sx=width+width*0.06
		    	var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
		    	var sx2=height+height*0.06
		    	console.log(width+'and'+sx)
		    	$(".zhongji .active>img").css({'width':sx+'px','height':sx2})
		    },
		      // 拖到的图片
		      drag_over(e){
		      	var final_fd=document.querySelector('.zhongji .active>img')
		      	this.drag=1
		      	this.dragObj=final_fd
		      	console.log(this.dragObj)
		      },
		      drag_out(e){
		      	this.drag=0
		      },
		  // 终极图的下方的-点击事件
		  final4s(e){
		  	var width=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).width)
		  	var sx=width-width*0.06
		  	var height=parseFloat(getComputedStyle(document.querySelector(".zhongji .active>img")).height)
		  	var sx2=height-height*0.06
		  	console.log(width+'and'+sx)
		  	$(".zhongji .active>img").css({'width':sx+'px','height':sx2})
		  },
		  // 终极放大图右上角的关闭叉子
		  closes(e){
		  	var that=this
		  	this.wai=true
		           // $('#welcome').modal('hide')
		           $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
		           this.$parent.bigbig = false
		          
		        },
		  // <>+-鼠标放上的时候换暗色的图片路径
		  hover_enter(e,n){
		  	this.index=n
		  },
		  hover_leave(e){
		  	this.index=-1
		  }




		},
		mounted(){
			this.number=parseInt(this.$parent.number)+1
                this.finalArrs=this.$store.state.finalArrs
               // this.remark=this.$store.state.remark
                this.initWheel()
                this.init()
		}
	}

	
