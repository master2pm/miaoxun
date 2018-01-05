//买卖家我的  <img src="../tu-me/20_06.png" class="spjz">

const bases = {
    template: `
  <div style="" class="overflow">
     
	  <ul style="margin-top:5px;margin-bottom:35px;position:relative;width:1024px;height:100px;" class="cD1D5D5  overflow">
	         <router-link :to="{name:'gaishu',params:{index:0}}"  tag="div">
						<li :class="{cF6:index==0,bgtu11:index==0,bgtu1:index!=0}" @click="jumps(0,'gaishu','')" class=" cursor lf f15 center " style="position:relative;padding-top:70px;vertical-align:bottom;height:25px;width:170px;">
								概述
								<img v-if="index==0" src="../tu-me/26.png"  style="position:absolute;bottom: 0;left: 70px;">
								<div style="display:none;">{{watch}}</div>
						</li>
			 </router-link>


			  <router-link :to="{name:'message',params:{index:1}}" tag="div">
						<li :class="{cF6:index==1,bgtu22:index==1,bgtu2:index!=1}" @click="jumps(1,'message','')" class="cursor lf f15 center " style="position:relative;padding-top:70px;vertical-align:bottom;height:25px;width:170px;">
								个人信息
									<img v-if="index==1" src="../tu-me/26.png"  style="position:absolute;bottom: 0;left: 70px;">
						</li>
			 </router-link>

             <router-link :to="{name:'renzhen',params:{index:2,states:0}}"  tag="div">
						<li :class="{cF6:index==2,bgtu33:index==2,bgtu3:index!=2}" @click="jumps(2,'renzhen','')" class="cursor lf f15 center " style="position:relative;padding-top:70px;vertical-align:bottom;height:25px;width:170px;">
								实名认证
									<img v-if="index==2" src="../tu-me/26.png"  style="position:absolute;bottom: 0;left: 70px;">
						</li>
            </router-link>


             <router-link :to="{name:'news',params:{index:3}}"  tag="div">
			 <li :class="{cF6:index==3,bgtu44:index==3,bgtu4:index!=3}" @click="jumps(3,'news','')" class="cursor lf f15 center " style="position:relative;padding-top:70px;vertical-align:bottom;height:25px;width:170px;">
			           推送通知
					    <img v-if="index==3" src="../tu-me/26.png"  style="position:absolute;bottom: 0;left: 70px;">
			 </li>
            </router-link>

			  <router-link :to="{name:'secret',params:{index:4}}"  tag="div">
						<li :class="{cF6:index==4,bgtu55:index==4,bgtu5:index!=4}" @click="jumps(4,'secret','')" class="cursor lf f15 center " style="position:relative;padding-top:70px;vertical-align:bottom;height:25px;width:170px;">
								安全与隐私
									<img v-if="index==4" src="../tu-me/27.png"  style="position:absolute;bottom: 0;left: 63px;">
						</li>
			 </router-link>

            <router-link :to="{name:'service',params:{index:5}}"  tag="div">
						<li :class="{cF6:index==5,bgtu66:index==5,bgtu6:index!=5}" @click="jumps(5,'service','')" class="cursor  lf f15 center " style="position:relative;padding-top:70px;vertical-align:bottom;height:25px;width:170px;">
								服务条款
									<img v-if="index==5" src="../tu-me/26.png"  style="position:absolute;bottom: 0;left: 70px;">
						</li>
			 </router-link>
	  </ul>
	  <router-view style="padding:0 20px;" v-if="datas!=''" :datas='datas'></router-view>
  </div>

  `,
    data: function() {
        return {
			index:0,
			datas:''
        }
    },
	computed:{
		watch:function(){
			this.index=this.$store.state.index //顶栏标题的图片
			

		}
	},
	// 检测浏览器后退按钮
	watch:{
		"$route":'dotitle'
	},
	
    methods: {
    	// 检测浏览器后退按钮
    	dotitle:function(){
    		this.$store.state.index=this.$route.params.index
    	},
        // 点击标签页跳转到不同的路由
		jumps:function(n,href,ids){
			this.$store.state.index=n
			// 企业认证标签页点击的时判断是前去认证的页面还是说未通过  已认证  认证中
			// 1.企业认证 ---留在本页面的ing  yes   no
			// if(ids=='ing'||ids=='yes'||ids=='no'){
			// 	console.log("企业认证本页面")
			// 	this.$router.push({name:href,params:{states:ids,index:2}})
			// }else{
			// 	// 2.前去认证的页面
			// 	console.log("企业认证团队")
            //    //this.$router.push({name:"menuNos1"})
			// }
			
		}

       

        
    },

    mounted: function() {
		console.log(this.$route.params.index)
         this.$store.state.index=this.$route.params.index
		 		var that=this
		 		// 个人资料
		 		common_users(function(data){
		 			that.datas=data
		 		})
//            // 卖家的个人资料
// $.get(Boss+"user/info",{"sessiontoken":sessiontoken},function(data){
//                  console.log(data)
// 				if(data.status==1){
// 					that.datas=data.results
// 				}
//               })
    }
}