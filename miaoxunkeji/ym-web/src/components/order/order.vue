<template>

	<div id="order " class="bgF2F2F2 overflow" style="">
		<headers style="top:0;"></headers>
		<router-view ></router-view>	
		

	</div>
</template>
<script>
import headers from '../common/headers.vue'
	export default{
		data(){
			return{
				
			}
		},
		
		components:{
			'headers':headers
			
		},

		methods:{
			
		},
		// 让黑色条两边拉长
		// beforeRouteEnter(to, from, next){
		// 	next(vm=>{
  //          $('#app').css({"maxWidth":'100%'})
  //        })
		// },
		// beforeRouteLeave(to, from, next){
		// 	next(vm=>{
  //          $('#app').css({"maxWidth":'1920px'})
  //        })
		// },
		mounted(){
			this.$store.state.header='hei'
			// :class="{apporder:this.$route.name=='orderViewItem'||his.$route.name=='orderView'}"
			
		}
	}
</script>
<style	scoped>
#app{max-width:100% !important;}
</style>