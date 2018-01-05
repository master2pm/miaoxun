
<template>
	<div class="  relative  flow-default" id="allloads">
	<!-- 商品列表模板 -->
		   <list></list>		

		</div>
	</template> 


	<!--2. 默认导出 -->
	<script>
import list from '../detail/list.vue'
		export default {
			name: 'all',
			datas:'',
			data() {
				return {
				

			};
		},
components:{
			
			'list':list
		},
		methods:{
  loads(){
        var that=this    
                layui.use('flow',function(){
                  var $ = layui.jquery;
                  var flow=layui.flow;
                  
                  flow.load({
                    elem:'#allloads',
                    scrollElem:'#allloads',//滚动条所在元素选择器，默认document。如果你不是通过窗口滚动来触发流加载，而是页面中的某一个容器的滚动条，那么通过该参数指定即可。
                     // isAuto:true,//是否自动加载。默认true。如果设为false，点会在列表底部生成一个“加载更多”的button，则只能点击它才会加载下一页数据。
                     end:'<div style="font-size:12px;color:#999899;">没有更多苗木啦</div>',//用于显示末页内容，可传入任意HTML字符。默认为：没有更多了
                    done:function(page,next){
// alert("loadsdo")'role':'seller',
 $.ajax({   
            type :"get",
            cache:false,  
            url :Boss+"tree",  
            // headers:{"role":"seller"},
            data :{"sessiontoken":sessiontoken,"limit":40,'page':page,'ispublish':'1','sort':'-createdAt'},
            async : false,  
            success : function(data){  
             console.log("all")
                           JSONS(data,'allall')
                            if(data.status==1){
                            	 var lis=[]
                                if(data.results.data.length>0){
                                	if(that.$store.state.group==''){
                                		that.$store.state.group=[]
                                	}
                                for (var i = 0; i < data.results.data.length; i++) {
                                  that.$store.state.group.push(data.results.data[i])
                                    }
                                }
                                next(lis.join(''),page < data.results.page_count); //假设总页数为 10
                             }
            }  
           }); 
                     
                    }
                  })
                })
      }
  },
		mounted(){
      // alert(23)
			this.$parent.searchindex=1
      // 清空，防止累加
      this.$store.state.group=[]
            this.loads()
		}
			
	};

</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
	
</style>
