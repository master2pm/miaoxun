
<template>
    <!-- 购物车 -->
			 
              <div id="gouwuche" class="czjz cursor" style="right:0;">
               <div style="display:none;">{{watch}}</div>
                <img :src="where=='gouwuche'?'/static/tu-detail/1-115.png':'/static/tu-detail/1-114.png'" alt="" style="top:15px;" class="spjz cursor">
                <img src="/static/tu-detail/1-106.png" alt="" style="top:70px;" class="spjz">
                <img  src="/static/tu-detail/1-116.png" alt="" style="bottom:15px;" class="spjz">
                <span id="add" v-show="count!=undefined&&count!=0" style="display:inline-block;" class="f12">{{count}}</span>
               
              </div>

</template> 


<!--2. 默认导出 -->
<script>

	export default {
		data() {
			return {
                where:'',
				count:this.$store.state.treeCount//加入购物车的总数

			};
		},
		computed:{
			watch(){
				this.count=this.$store.state.treeCount
			}
		},
		methods:{
             
		},
		mounted(){
			// 查看指定群组/企业ID的初选的总数也就是购物车总数
           this.$store.commit("searchAdd")
           if(location.href.indexOf("gouwuche")!=-1){
            this.where='gouwuche'
           }
		}
	};
</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
#gouwuche{width: 45px;height: 175px;background: #ECECEA;}
#add {
    border-radius: 50%;
    background: #E9591C;
    position: absolute;
    line-height: 20px;
    text-align: center;
    width: 20px;
    height: 20px;
    color: white;
    bottom: 26px;
    display: none;
    left: 8px;
    font-size: 12px;
}
</style>
