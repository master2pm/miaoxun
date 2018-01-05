
var zhongjiSwiper = {
    template: `
	<!-- 终极放大-->
	<div class="wai_kuangs"  style="z-index:2006;">

		  <div class="swiper-container zhongjiSwiper" style="">
        <div class="swiper-wrapper" >
            <img v-for="(item,index) in finalArrs" :src="item" class="swiper-slide" style="">
        </div>
        <!-- Add Pagination -->
        <div v-for="(item,index) in finalArrs" class="swiper-pagination swiper-pagination-white" style="transform:none;"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white lf"></div>
        <div class="swiper-button-prev swiper-button-white rf"></div>
    </div>
    	<!-- 关闭叉子 -->
	<img @click="closes($event)" src="/static/tu-detail/1-75.png"  class="cursor final5 absolute" style="top:20px;right:10px;z-index: 20;">
</div>
   `,
   // props:['number'],
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
     		  // 终极放大图右上角的关闭叉子
		  closes(e){
		  	var that=this
		  	// this.wai=true
		   //         // $('#welcome').modal('hide')
		   //         $(".zhongji .item>img").css({'width':'auto','height':'auto','left':'50%'})
		           this.$parent.bigbig = false
		          
		        },
      initWheel(){
				// 轮滚缩放功能			
				     $(document).on('.zhongjiSwiper mousewheel DOMMouseScroll', function (e) {			 	
					if($(".zhongjiSwiper").css("display")=="block"){
						e.preventDefault();
				        //鼠标滚轮的滚动方向 >0 up;<0 down   
				        var _delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
				        if (_delta > 0) {
				        	var width=parseFloat(getComputedStyle(document.querySelector(".zhongjiSwiper .swiper-slide-active")).width)
				        	var sx=width+width*0.06
				        	var height=parseFloat(getComputedStyle(document.querySelector(".zhongjiSwiper .swiper-slide-active")).height)
				        	var sx2=height+height*0.06
				        	// if((sx>innerWidth||sx==innerWidth)){
             //                   return
				         //    }
				        	$(".zhongjiSwiper .swiper-slide-active").css({'width':sx+'px','height':sx2})

				        } else {
				        	var width=parseFloat(getComputedStyle(document.querySelector(".zhongjiSwiper .swiper-slide-active")).width)
				        	var sx=width-width*0.06
				        	var height=parseFloat(getComputedStyle(document.querySelector(".zhongjiSwiper .swiper-slide-active")).height)
				        	var sx2=height-height*0.06
				        	// if((sx>innerWidth||sx==innerWidth)){
             //                   return
				         //    }
				        	$(".zhongjiSwiper .swiper-slide-active").css({'width':sx+'px','height':sx2})		                  
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
		   
		      // 拖到的图片
		      drag_over(e){
		      	var final_fd=document.querySelector('.zhongjiSwiper .swiper-slide-active')
		      	this.drag=1
		      	this.dragObj=final_fd
		      	console.log(this.dragObj)
		      },
		      drag_out(e){
		      	this.drag=0
		      },
		  // 终极放大图右上角的关闭叉子
		  closes(e){
		  	var that=this
		  	this.wai=true
		           // $('#welcome').modal('hide')
		           $(".zhongjiSwiper .swiper-slide-active").css({'width':'auto','height':'auto','left':'50%'})
		           this.$parent.bigbig = false
		           this.number=-1
		          
		        }
		



		},
		mounted(){
			this.number=parseInt(this.$parent.number)
			// alert(this.number)
                this.finalArrs=this.$store.state.finalArrs
                console.log(this.finalArrs)
               // this.remark=this.$store.state.remark
                this.initWheel()
                this.init()
                 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });
         swiper.slideTo(this.number)
		}
	}

	
