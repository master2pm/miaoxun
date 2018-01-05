<template>	
	<div class="search lright  c999899" style="">
		<div class="top relative">
			<!-- 搜索条 -->
			<input v-model="keywords" @keyup.enter="searchs($event)" type="text" name="" class="rad  none f16  F1F1F1bg" placeholder="寻找苗木？" style="width:calc(100% - 140px);">
			<img src="/static/tu-detail/1-05.png" alt="" class="czjz" style="left:20px;">
			<button  @click="searchs($event)" type="" class="relative cursor Fsearchs layui-btn f13 white rf" style="width:79px;height:33px;line-height:33px;right:30px;background:#5EA946;padding:0 12px;top:-46px;right:15px;">苗讯一下</button>
			<!-- <img  @click="searchs($event)"  src="/static/tu-detail/1-04.png" alt="" class="czjz cursor Fsearchs" style="right:30px;"> -->
		</div>
		<ul	class="f13 overflow ulhot">
			<li class="lf title">热门推荐：</li>
			<li class="lf hot" v-for="(item,index) in hot">{{item}}</li>
		</ul>
		<!-- 推荐   苗源   头条 -->
		<ul	class="f16 overflow ultitle " >
			<li class="lf center cursor relative "  @mouseleave="chaindex=-1" @mouseenter="chaindex=index1" style="margin-bottom:15px;padding:0 25px;height:30px;" v-for="(item,index1) in datas" v-if="index1!=2">
				<div  :class="{c60B346:index1==searchindex}"  @click="changes($event,item.title,index1)" style="height:30px;"  v-for="(item,index) in item">{{item.title.length>6?item.title.substring(0,6)+'...':item.title}}
<!-- 检测缓存title的数据 -->
				<div	style="display:none;">
					{{watch}}
				</div>

                <span  v-if="index1!=searchindex"  style="width:100%;height:3px;display:inline-block;bottom:0;" class="bai spjz">	</span>
                <span  v-if="index1==searchindex"  style="width:100%;height:3px;display:inline-block;background:#60B346;bottom:0;" class="spjz">	</span>
				<!-- <img v-if="index1==searchindex" src="/static/tu-detail/1-24.png"> -->
				<!-- <img v-if="index1!=searchindex" src="/static/tu-detail/1-25.png"> -->
				<img @click.stop="closes($event,index1)" @mouseenter="closesC($event)" v-if="index1>2&&chaindex==index1" @mouseleave="closesH($event)" style="position:absolute;top:-8px;right:0;" src="/static/tu-detail/1-27.png">

				</div>
				


				
			</li>
			<!--  -->
		</ul>
		<img src="/static/tu-detail/1-25.png" alt="" style="display:block;width:100%;position:relative;top:-7px;">
		<!-- 左边的内容列表 -->
		<router-view style="width:100%;"></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				   keywords:'',//输入框的关键字
				   hot:["香樟",'五角枫','紫丁香','五角枫','紫丁香'],
				   datas:this.$store.state.title,
				   searchindex:'',
                   chaindex:-1//控制叉子的小标
               }
           },
	// 检测当前的标题
	computed:{
		watch(){
                this.datas=this.$store.state.title
		}
	},

	methods:{
	// 查找苗木的方法 只负责压数据和跳转和
	searchs(e){
		console.log(this.keywords)
		if(this.keywords==''||this.keywords==null){
			return
		}
		var that=this
	 	// 1.新增一个标签
	 	
	 	//var where={"mu_name":this.keywords}
	 	// $.get(this.$store.state.Boss+"tree?where="+encodeURI(JSON.stringify(where)),function(data){
	 	// 	console.log(data)
	 		//if(data.status==1){
	 			// if(data.results.data.length>0){
	 			// 	that.$store.state.group.push(data.results.data)
	 			// }else{
	 			// 	that.$store.state.group.push([])
	 			// }
	 			// 搜索的时候一开始只会有名字，所以创建含有名字的对象压入title，然后执行保存到缓存
that.$store.state.title.push(
	{'item':{
		"title":that.keywords,
		"view":"4",
		"condition":{//帅选条件
	            'zzqkVal':[],
	            'mjMin':'',
	            'mjMax':'',
	            'djMin':'',
	            'djMax':'',
	            'zgMin':'',
	            'zgMax':'',
	            'rgMin':'',
	            'rgMax':'',
	            'zfzgMin':'',
	            'zfzgMax':'',
	            'gfMin':'',
	            'gfMax':'',
	            'baoVal':[],
	            'province':'',
	            'cits':[]
	          },
	    "sort":'发布时间',//排序方式
	    "page":'1',
	    "price":{"max":'',"min":''}
}
})

	 			that.$store.commit("titles")
	 			// 将item vue统一的数据换成现在搜索的东西
	 			//that.$store.state.group=da
	 			that.$router.push({name:'item',params:{indexs:that.datas.length-1}})
	 			that.searchindex=that.datas.length-1
	 		//}
	 	// })
	 	// setTimeout(function(){
	 		// 保存当前订单
	 		
	 	// },10)
	 	// 调用查询方法
	 	that.$store.commit("searchs",that.datas.length-1)
	 },
	 closesC(e){
	 	// alert(1)
	 	$(e.currentTarget).attr("src","/static/tu-detail/1-26.png")
	 },
	  closesH(e){
	  	// alert(2)
	 	$(e.currentTarget).attr("src","/static/tu-detail/1-27.png")
	 },
    // 删除标签页的方法
    closes(e,index){
    	//alert(index)
    	var that=this
    	// $(e.currentTarget).attr("src","/static/tu-detail/1-26.png")
        // 请求删除的方法
       // alert(index)
        that.$store.state.title.splice(index,1)
        // this.$store.state.group.splice(index-2,1)
        // this.$store.state.group.splice(index,1)
        //console.log(this.$store.state.group.length)



        // 删除后如果大数组的长度为1说明没有搜索产生的标签页，回到推荐页面
        if(this.$store.state.title.length==3){
        	//alert("tj")
            // that.$router.push({name:'tj',params:{indexs:0}})
            this.changes('0','推荐','0')
        }else{
        	// 否则如果当前的上一个存在让上一个当前
        	if(this.$store.state.title[index-1]!=undefined&&(index-1)!=2){
        		 console.log("前面有")
        		that.$router.push({name:'item',params:{indexs:index-1}})
        		that.searchindex=index-1
        	}else if(this.$store.state.title[index-1]!=undefined&&(index-1)==2){
        		 console.log("前面有但是是头条")
                 this.changes('0','推荐','0')
        	}else{
        		// 不存在让下一个当前
        	   that.$router.push({name:'item',params:{indexs:index}})
        	   that.searchindex=index
        	   console.log("后面"+index)
        	}
        	
        }
     
	 		// 保存当前订单
	 		that.$store.commit("titles")
	 
    },
    // 点击标签页的时候去往不同的路由并更新列表和地图
    changes(e,item,index){
    	if(this.searchindex==index){
    		return
    	}
    	$('.leftscroll').scrollTop('0')
    	//alert(index)
    	this.searchindex=index
    	if(index==0){
    		this.$router.push({name:'tj',params:{"indexs":index}})
    		this.keywords=""
    	}

    	if(index==1){
    		// 清空数据防止请求过慢
    		this.$store.state.group=[]
    		this.$router.push({name:'all',params:{"indexs":index}})
    		this.keywords=""
    	}

    	if(index==2){
    		this.$router.push({name:'tt',params:{"indexs":index}})
    		this.keywords=""
    	}
    	if(index!=0&&index!=1&&index!=2){
    		// 清空数据防止请求过慢
    		this.$store.state.group=[]
    		this.$router.push({name:'item',params:{"indexs":index}})
    		this.keywords=item
    	}
    }
},
mounted: function() {
function locations(name, url){
    if (!url) {
      url = window.location.href;
      console.log(url)
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
this.searchindex=this.$route.params.indexs
this.keywords= window.localStorage.getItem('keywords')
if(this.keywords!=null){
	if(this.keywords.length>0){
		$(".Fsearchs").click()
		window.localStorage.setItem('keywords','')
	}


}

//alert(locations("keywords"))




}
}
</script>
<style scoped>
/*  .lright::-webkit-scrollbar {
    width: 15px;

}*/
.search{padding:30px 20px 20px 20px;}
input{height:30px;padding:15px 10px;display: block;padding-left: 40px;padding-right: 100px;}
.top{height:60px;}
.title{margin-right:10px; }
.hot{margin-right:20px; }
.ulhot{margin-top: 10px;padding-left:30px;}
.ultitle{padding-top: 30px;margin-bottom: 0;}
/*.ultitle>li{width:105px;}*/
.ultitle>li{width:auto;}
</style>