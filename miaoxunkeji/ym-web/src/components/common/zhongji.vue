<!-- 验苗报告的样式 -->
<template>



	<!-- 终极放大图-->
	<div class="wai_kuangs"  style="z-index:2006;">
		<div	style="display:none;">{{jiance}}</div>
		<div  v-if="finalArrs.length!=0" id="myCarousels" class=" carousel zhongji " data-ride="carousel" data-interval=false style="height:100%;width:100%;" >
			<!-- 轮播（Carousel）指标 -->
			<ol class="carousel-indicators" >
				<li data-target="#myCarousels" @click.stop='toNum(index)' :data-slide-to="index" :class="{active:index==0}" v-for="(item,index) in finalArrs"></li>
			</ol> 
			<!-- 轮播（Carousel）项目 -->
			<div id="myCarousels1"  class="carousel-inner" style="height:100%;width:100%;">
				<div class="item relative" :class="{active:index==0}" id="getheight" v-for="(item,index) in finalArrs" style="height:100%;width:100%;">
					<img :src="item+'?imageView2/2/h/'+height" alt="slide" style="max-width:none;" class="jz cursor"
					@mouseenter="drag_over($event)" @mouseleave="drag_out($event)">
					<!-- <div class="carousel-caption">标题 {{index}}</div> -->
				</div>
			</div>

			<!-- 轮播（Carousel）导航 -->
			<a class="tingzhi absolute" href="javascript:void(0)" @click.prevent='toPrevs()'
			data-slide="prev" id="lbp"  style="width:25px;height:35px;left:10px;top:50%;transform:translatey(-50%);">
			<img src="/static/tu-detail/1-113.png"  id="home_img1" >
		</a>
		<a class="  tingzhi absolute" href="javascript:void(0)" @click.prevent='toNexts()'
		data-slide="next" id="lbn"  style="width:25px;height:35px;right:10px;top:50%;transform:translatey(-50%);">
		<img src="/static/tu-detail/1-112.png"  id="home_img2"  >
	</a>


	<!-- 减 -->
	<img @click="final4s($event)" @mouseenter="hover_enter($event,4)" @mouseleave="hover_leave($event)" :src="index==4?'/static/tu-detail/1-108.png':'/static/tu-detail/1-109.png'"  class="final4 ff absolute cursor" style="z-index:10;bottom:10px;right:80px;">

	<!-- 加 -->
	<img @click="final3s($event)" @mouseenter="hover_enter($event,3)" @mouseleave="hover_leave($event)" :src="index==3?'/static/tu-detail/1-110.png':'/static/tu-detail/1-111.png'"  class="final3 ff absolute cursor" style="z-index:10;bottom:10px;right:10px;">

	<!-- 关闭叉子 -->
	<img @click="closes($event)" src="/static/tu-detail/1-75.png"  class="cursor final5 absolute" style="top:20px;right:10px;">

	<!-- 文字描述 -->
	<div v-show="remark!=''" style="position:fixed;bottom:0;width:100%;height:135px;background:rgba(0,0,0,0.7);" >
		  <p style="padding:25px 30px;width:964px;margin:0 auto;height:85px;" class="cFFFFFF f18">{{remark}}</p>
	</div>
</div>
</div>
</div>
</template>
<script>



	export default{
		data(){
			return{
				height:parseInt(innerHeight*0.9),
				index:-1,//控制<>+-
                 //finalArr:[], //全局变量，用来保存终极放大图中，从放大图传入的图片路径
                 finalArrs:this.$store.state.finalArrs,//原来的路径没有转大写的
                 remark:this.$store.state.remark,//描述
                 drag:0,
                 move:0,
                 dragObj:0,
                 clickleft:'',
                 clickTop:''
               

             }
         },
      computed:{
  	jiance(){
  		this.finalArrs=this.$store.state.finalArrs//原来的路径没有转大写的
        this.remark=this.$store.state.remark//描述
	}
},    
         methods:{

  		toNum(index){
				 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
  				  $("#myCarousels").carousel(index);
			},       
  // 防止点击轮播的时候被识别成路由
  toNexts(e){
  	 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
  	$("#myCarousels").carousel('next');
  },
      // 防止点击轮播的时候被识别成路由
      toPrevs(e){
      	 // $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
      	$("#myCarousels").carousel('prev');
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
                this.finalArrs=this.$store.state.finalArrs
                this.remark=this.$store.state.remark
                this.initWheel()
                this.init()
		}
	}
</script>
<style	scoped>
	p{margin:0;}
	#myCarousels > ol > li{width:5px;height:5px;border:1px solid #FFFFFF;margin:2px;}
	#myCarousels > ol > li.active{width:5px;height:5px;border:1px solid #FFFFFF;background:#FFFFFF;position: relative;}
</style>