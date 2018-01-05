//买卖家菜单栏 已经建立企业 并且管理的是团队background:white;

const buildTeams = {
    template: `
  <div style="position:relative;width:1024px;" class="">
  <div class="overflow">
      <div class="lf overflow relative" style="width:197px;height:120px;margin-left:20px;margin-top:35px;">
     <img v-if="datas.avatar!=undefined&&datas.avatar.url!=undefined" @load='adjust($event)' :src="datas.avatar!=undefined?datas.avatar.url+'?imageView2/2/w/197/h/120':''" class="jz" >  
     <img  v-if="datas.avatar==undefined||datas.avatar.url==undefined"  :src="datas.type=='company'?'../tu-menu/63.png':(datas.type=='private'?'../tu-menu/62.png':'../tu-menu/64.png')" class="jz" >  
	  </div>

	  <div class="lf" style="margin-left:20px;margin-top:50px;">
				<p class="f40 cF6" style="margin-bottom:5px;">{{datas.name}}</p>
				<p class="f15 cF6">建立时间： {{datas.createdAt}}</p>
				<p class="f15 cF6">回复率/平均回复时间： {{datas.reply_ratio}} / {{datas.reply_time}}</p>
	  </div>

	  <ul style="margin-top: 46px;width:1024px;height:100px;" class="cD1D5D5  overflow lf">
	         <li :class="{cF6:index==0,bgtu11:index==0,bgtu1:index!=0}" @click="jumps(0,'gaishu','no')" class="cursor lf f15 center " style="padding-top:70px;vertical-align:bottom;height:25px;width:170px;position:relative;">
			           概述<div style="display:none;">{{watch}}</div>
					   <img v-if="index==0" src="../tu-menu/43.png"  style="position:absolute;bottom: 0;left: 70px;">
			 </li>
			 <li :class="{cF6:index==1,bgtu22:index==1,bgtu2:index!=1}" @click="jumps(1,'message','no')" class="cursor lf f15 center " style="padding-top:70px;vertical-align:bottom;height:25px;width:170px;position:relative;">
			           团队/企业信息
					     <img v-if="index==1" src="../tu-menu/45.png"  style="position:absolute;bottom: 0;left: 53px;">
			 </li>
			 <li :class="{cF6:index==2,bgtu33:index==2,bgtu3:index!=2}" @click="jumps(2,'renzhen',datas.g_status)" class="cursor lf f15 center " style="padding-top:70px;vertical-align:bottom;height:25px;width:170px;position:relative;">
			           企业认证
					    <img v-if="index==2" src="../tu-menu/43.png"  style="position:absolute;bottom: 0;left: 70px;">
			 </li>
			 <li :class="{cF6:index==3,bgtu44:index==3,bgtu4:index!=3}" @click="jumps(3,'addboy','no')" class="cursor lf f15 center " style="padding-top:70px;vertical-align:bottom;height:25px;width:170px;position:relative;">
			           添加子帐号
					    <img v-if="index==3" src="../tu-menu/44.png"  style="position:absolute;bottom: 0;left: 60px;">
			 </li>
			 <li :class="{cF6:index==4,bgtu55:index==4,bgtu5:index!=4}" @click="jumps(4,'boy','no')" class="cursor lf f15 center " style="padding-top:70px;vertical-align:bottom;height:25px;width:170px;position:relative;">
			           子帐号管理
					    <img v-if="index==4" src="../tu-menu/44.png"  style="position:absolute;bottom: 0;left: 60px;">
			 </li>
			 <li :class="{cF6:index==5,bgtu66:index==5,bgtu6:index!=5}" @click="jumps(5,'payment','no')" class="cursor  lf f15 center " style="padding-top:70px;vertical-align:bottom;height:25px;width:170px;position:relative;">
			           收款方式
					    <img v-if="index==5" src="../tu-menu/43.png"  style="position:absolute;bottom: 0;left: 70px;">
			 </li>
	  </ul>
	  </div>
	  <router-view :index="index" :datas='datas' v-if="datas!=''"></router-view>

  </div>

  `,
    data: function() {
        return {
			datas:'',
            hasItem: false, //已建立过企业/团队，当前选择为团队
            index:this.$store.state.index //顶栏标题的图片

        }
    },
     components:{"footers":footers},
	// 检测
	computed:{
       watch:function(){
		   this.index=this.$store.state.index
		   console.log(this.index)
		   return this.index
	   }
	},
	// 检测浏览器后退按钮
   watch:{
   	'$route':'dotitle'
   },
    methods: {
    	// 检测浏览器后退按钮
    	dotitle:function(){
    		this.$store.state.index=this.$route.params.index
    	},
        // 点击标签页跳转到不同的路由
		jumps:function(n,href,ids){
			console.log('tiaozhu')
			this.$store.state.index=n
			// 企业认证标签页点击的时判断是前去认证的页面还是说未通过  已认证  认证中
			// 1.企业认证 ---留在本页面的ing  yes   no
			if(ids==1||ids==0||ids==-1){
				console.log("点击的是企业认证标签2：留在本页面")
				this.$router.push({name:href,params:{objectId:this.$route.params.objectId,states:ids,index:n}})
			}else if(ids==-2){
				// 2.前去认证的页面
				console.log("点击的是企业认证标签2：前去认证的页面")
               this.$router.push({name:"menuNos1"})
			}else if(ids=='no'){
				console.log("点击的不是企业认证标签2，而是0,1,3,4,5,6")
				if(n==3){
					// 添加之账号需要多加一个电话号码的参数
                  this.$router.push({name:href,params:{objectId:this.$route.params.objectId,phone:'no',index:n}})
				}else{
                  this.$router.push({name:href,params:{objectId:this.$route.params.objectId,index:n}})
				}
			}
			
		},
	     adjust(e){
     var thisImage=$(e.currentTarget)
              var wkuang = thisImage.parent().width()
              var hkuang = thisImage.parent().height()
              var wtupian=thisImage.width()
              var htupian=thisImage.height()
          var kbl=wkuang/hkuang
          var tbl=wtupian/htupian
          if(kbl>tbl||kbl==tbl){
              thisImage.css({"height":hkuang+'px'})
          }else{
             thisImage.css({"width":wkuang+'px'})
          }
 }	

       

        
    },

    mounted: function() {
		console.log(this.$route.params.index)
             this.$store.state.index=this.$route.params.index

			  var that=this
			  // 请求当前默认组的内容
			 common_default_groups(this.$route.params.objectId,function(data){
			 	 that.datas=data
			 })
                 
    }
}