
<template>
<transition name="fade">
<div>
	

<!--1.网页顶部的轮播图  -->
<carouselT></carouselT>

	
<!-- 2.网页中部清场推荐轮播图 -->
<carouselC></carouselC>


<!-- 3.网页底部苗源精选轮播图 -->
<carouselB></carouselB>


</div>
</transition>
</template> 


<!--2. 默认导出 -->
<script>
import carouselT from './tj_carouselT.vue'
import carouselC from './tj_carouselC.vue'
import carouselB from './tj_carouselB.vue'
	export default {
		data() {
			return {
				

			};
		},
components:{"carouselT":carouselT,
            "carouselC":carouselC,
            "carouselB":carouselB
},
		methods:{

		},
		mounted(){

		}
	};
</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
	
</style>
