<template>

	<div id="boss1" class=" overflow" style="">
		<headers style="top:0;"></headers>
		<div style="margin:0 auto;" class="bai relative">
<div  class=" overflow" style="">
				<!-- 内容 -->
				<router-view></router-view>
			</div>
<!-- 购物车 -->
<router-link target="_blank" :to="{name:'gouwuche1',params:{page:1}}">
 <gouwuche id="gwc" style="top:330px;right:calc((100% - 1024px)/2);"></gouwuche>
 </router-link>
		</div>
	</div>
</template>
<script>
	import headers from '../common/headers.vue'
	import gouwuche from '../common/gouwuche.vue'
    // import titles from '../mpc/title.vue'
	export default{
		data(){
			return{
				
				}
			},
			components:{
				'headers':headers,
				'gouwuche':gouwuche
			},
			mounted(){
				 

				 	
			},
			methods:{
              // 
            

			}
		}
	</script>
	<style	scoped>

#boss{width:100%;max-width:1920px;min-width:1024px;margin:0 auto;}
#gwc{position: fixed !important;}

#gwc{width: 45px;height: 175px;background: #ECECEA;}

		/**/

	</style>
