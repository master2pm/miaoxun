<template>

	<div id="boss " class="bai overflow " style="margin:0 auto;max-width:1920px;">
		<headers style="top:0;"></headers>
		<div id="left" :style='{height:height}' class="lf leftscroll" style="overflow-y: scroll !important;overflow-x: hidden;" >
		<!-- :class="{LF:indexs!=0&&indexs!=2,MARGIN:indexs==0||indexs==2}" -->
			<searchs ></searchs>
		</div>
		<div id="right" :style='{height:height}' class="relative rf" >
		<!-- v-if="indexs!=0&&indexs!=2" -->
			  <maps class="maps" >	
			  </maps>
			  <div @click='go'>
				<gouwuche></gouwuche>
			</div>

		</div>
				<!-- 登录注册的弹出框 -->
		<div   style="display:none;">{{watch}}</div>
		<logins v-show="denglu==true"></logins>
		<message></message>	
	</div>
</template>
<script>
import headers from '../common/headers.vue'
import gouwuche from '../common/gouwuche.vue'
import searchs from '../detail/searchs.vue'
import map from '../detail/map.vue'
import logins from '../common/logins.vue'
import message from '../common/message.vue'
	export default{
		data(){
			return{
				indexs:-1,
				denglu:this.$store.state.denglu,//登录的控制变量
				zhuce:this.$store.state.zhuce,//注册的控制变量
                   height:innerHeight-60+'px'
			}
		},
		 watch: {
       '$route':'doload'
      // 对路由变化作出响应...
    },
		components:{
			'headers':headers,
			'maps':map,
			'searchs':searchs,
            'gouwuche':gouwuche,
            'logins':logins,
            'message':message
		},
		  computed:{
  	watch(){
  		this.denglu=this.$store.state.denglu//登录的控制变量
		this.zhuce=this.$store.state.zhuce//注册的控制变量
  	}
  },
		mounted(){
			this.indexs=this.$route.params.indexs
             //只适应高度
 // console.log(innerHeight,innerHeight-90)
 // $("#left").css("height",innerHeight-60-25+'px')
 // $(".maps").css("height",innerHeight-60-25+'px')
		},
		methods:{
			doload(){
                   this.indexs=this.$route.params.indexs
			},
			go(){
				if(sessiontoken==null){
                this.$store.state.denglu=true
                this.$store.state.zhuce=true
                 return
}
				// 设置缓存  记录当前标签是哪里后点击的购物车去往购物车
				var bb
				if(this.$route.params.indexs==0){
					 bb=0
				}else if(this.$route.params.indexs==1){
					 bb=1
				}else if(this.$route.params.indexs==2){
					 bb=2
				}else{
					 bb=this.$route.params.indexs
				}
         		window.sessionStorage.setItem("fromWhere",bb)
         		
         		this.$store.state.transitioner = 'fade'
         		this.$router.push({name:'gouwuche1',params:{page:1}})

         	}

		}
	}
</script>
<style	scoped>

	#boss{width:100%;max-width:1920px;min-width:1024px;margin:0 auto;}
/*#right{width:41%;}*/
	/*1024以下*/

	@media screen and (max-width: 1027px) {
    #left {
    	width:569px;/*559*/
    }
    #right {
        width:455px;/*465*/
    }
}

/*1920以上*/

	@media screen and (min-width: 1921px) {
    #left {

    	/*width:49.3164062%;*/
    	width:1150px;
        /*width:505px;+15*/
    }
    #right {
    	/*width:47.9876161%;*/
    	width:770px;
        /*width:465px;*/
    }
}

/*1024---1920*/
	@media screen and (max-width: 1920px) and (min-width: 1028px){
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
.MARGIN{margin:0 auto;width:1024px !important;}
.LF{float: left;}

</style>