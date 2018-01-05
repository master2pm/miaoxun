
 
<template>
<div	class="wai_kuangs layui-anim layui-anim-fadein" style="z-index:10000;position:fixed;">
	

      <div class="f20  relative nei_kuang bai center" style="width:285px;height:265px;background:url(/static/tu-detail/1-120.png) no-repeat;color:white;">
                    <div class="" style="padding:35px 0 40px 0;">请先登录</div>


          			<!-- 再看看 -->
          			<div>
          				<img @click="gos()" src="/static/tu-detail/1-121.png" alt="" class="cursor">
          			</div>
          			
          			<!-- 前往登录 -->
          			<div>
          				<img @click="go()" src="/static/tu-detail/1-122.png" alt="" class="cursor" style="margin:20px 0 35px 0;">
          			</div>


          			<div class="f12">
          				苗讯科技
          			</div>

          			<!-- 删除叉子 -->
          				<img @click="cha()" src="/static/tu-detail/1-123.png" alt="" style="left:20px;top:20px;" class="cursor absolute" >
          			

      </div>
</div>
</template> 


<script>

	export default {
		data() {
			return {
		

			};
		},

		methods:{
// 
cha(){
	this.$store.state.denglu=false//登录的控制变量
		this.$store.state.zhuce=false//注册的控制变量
	},
// 前往登录
go(){
	location.href='../detail/miao_logins.html'
},
//再看看
gos(){
	    this.$store.state.denglu=false//登录的控制变量
		this.$store.state.zhuce=false//注册的控制变量
}

		},
		mounted(){
            		var that=this
   
		}

	};
</script>

<style scoped>



</style>


