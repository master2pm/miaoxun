<!-- 购物车基础路由的样式 -->
<template>

	<div id="gouwuche" class="bai overflow" style="margin:0 auto;max-width:1920px;">
		<headers style="top:0;"></headers>
		<div id="left" class=" lf " :style="{height:h}">
		     <maps></maps>
		</div>
		<div id="right" class="relative rf"  :style="{height:h}">
			 <ul class="f15 c4A494B overflow  " style="height:55px;line-height:55px;margin-bottom:0;">
			 	<li @click="gorouter(index)" v-for="(item,index) in title" :class="{hoverxian:(index+1)==titleIndex}" class="lf center cursor" style="height:53px;width:25%;">{{item}}</li>

			 </ul>
			 <div class="relative "	style="opacity:0.4;top:-1px;border-bottom:1px solid #999899;">
			 	
			 </div>
             <router-view></router-view>
		</div>
	</div>
</template>
<script>
import headers from '../common/headers.vue'
 import map from '../gouwuche/map.vue'

	export default{
		data(){
			return{
				h:innerHeight-60+'px',
				titleIndex:0,
                 title:['初选','验苗','运输','收货']
			}
		},
		components:{
			'headers':headers,
			 'maps':map
		},
		mounted(){
             //只适应高度
 console.log(innerHeight,innerHeight-90)
 $("#left").css("height",innerHeight-60+'px')
 $("#right").css("height",innerHeight-60+'px')
 this.titleIndex=this.$route.params.page

		},
		methods:{
			gorouter(index){
				// 让动画的转动变为true
				this.$store.state.gif=true
				if(index==0){
					this.$router.push({name:'gouwuche1',params:{page:1}})
				}else if(index==1){
					this.$router.push({name:'gouwuche2',params:{page:2}})
				}else if(index==2){
					this.$router.push({name:'gouwuche3',params:{page:3,index:-1}})
				}else if(index==3){
					this.$router.push({name:'gouwuche4',params:{page:4}})
				}
				  this.titleIndex=index+1
			}
		}
	}
</script>
<style	scoped>

	#boss{width:100%;max-width:1920px;min-width:1024px;margin:0 auto;}
/*#right{width:41%;}*/
	/*1024以下*/

	@media screen and (max-width: 1024px) {
    #left {
    	width:464px;
    }
    #right {
        width:560px;
    }
}

/*1920以上*/

	@media screen and (min-width: 1921px) {
    #left {

    	/*width:49.3164062%;*/
    	width:1166px;
        /*width:505px;+15*/
    }
    #right {
    	/*width:47.9876161%;*/
    	width:754px;
        /*width:465px;*/
    }
}


/*1024---1920*/
	@media screen and (max-width: 1920px) and (min-width: 1261px){
    #left {
    	/*width:59.2411924%;*/
    	width:55%;
        /*width:1093px;*/
    }
    #right {
    	width:45%;
        /*width:770px;*/
    }
}

@media screen and (max-width: 1260px) and (min-width: 1025px){
    #left {
    	/*width:59.2411924%;*/
    	width:45%;
        /*width:1093px;*/
    }
    #right {
    	width:55%;
        /*width:770px;*/
    }
}

/**/
.hoverxian{border-bottom:1px solid #60B346;color:#60B346;}
</style>