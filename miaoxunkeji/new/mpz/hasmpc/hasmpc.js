
 
// 有 顶栏所在页面

const hasmpc = {
    template: `
           <div :class="{bgf2f2f2:this.$route.name=='adds'||this.$route.name=='adds1'}" style="padding-top:60px;" >
                <headers></headers> 
               
				<div class=" relative" style="margin:0 auto;background:url(../tu-mpz/22.png) no-repeat;background-size:100% 170px;">
				<div style="border-top:1px solid #777777;z-index:10;position:absolute;width:100%;" ></div>
        <div class=" relative" style="margin:0 auto;width:1024px;height:170px;background:url(../tu-mpz/1-88.png) no-repeat;background-size:1024px 170px;">
				      <p   class="f26  cFEFEFE  relative" style="padding-top:45px;padding-left:20px;padding-bottom:50px;width:330px;">
              <span  @click="choose($event)" class="cursor">{{mpcname.length>10?mpcname.substring(0,9):mpcname}} </span>
              <span v-if="mpcname.length>10">...</span>
				      	<img src="../tu-mpz/1-63.png" class="mpcfalse cursor jiantou" @click="choose($event)" >
				      	<!--苗圃场的展开和收起-->
				      	<div @mouseleave="mpcfalse()"  v-if="mpckuang==true"  style="height:500px;top: 95px;z-index:10;position:absolute;width:338px;border:1px solid #777777;background:#393C3D;">
                                <ul v-show="mpc.length!=0" id="scrollNo"  style="height:440px;overflow-y:scroll;overflow-x:hidden;">
                                     <li v-for="(item,index) in mpc" @click="mpcs(item.gg_name,item.objectId)" :class="{bg242726:index==bg,clicks:index==0}" @mouseenter="bg=index" @mouseleave="bg=-1" style="padding:0 20px;height:60px;line-height:60px;" :ids="item.objectId" class="clicksMPC relative cursor left f13 cFEFEFE">
                                     {{item.gg_name}}
                                     <p v-if="index!=mpc.length-1&&index!=bg&&index!=bg-1" style="border-bottom:1px solid #D1D4D4;bottom:0;width:298px;" class="spjz"></p>
                                     </li>
                                </ul>

                                <!--添加苗圃场this.$router.push({name:'ones'})-->
                                <router-link :to="{name:'ones',params:{'groundId':this.$route.params.objectId,'name':this.$route.params.name}}" target="_blank">
                                <p @click="golocation()" class="cursor  f13" style="border-top:1px solid white;color:white;padding:0 20px;width:100%;height:60px;line-height:60px;position:absolute;bottom:0;">
                                <i class="layui-icon" style="margin-right:5px;">&#xe654;</i>添加新苗圃场</p>
                                </router-link>
                                

                </div>
				      </p>





					  <div style="position:absolute;top:55px;right:20px;">
<!--预览苗圃-->								
                <span v-show="yulan==false" class="f18 cFEFEFE cursor" @click="yulan=true" style="border-right:1px solid white;margin-right:22px;padding-right:30px;">预览苗圃</span> 
<!--编辑苗圃场-->
								 <router-link :to="{name:'modifympc',params:{'groundId':this.$route.params.objectId,'name':this.$route.params.name}}" target="_blank">
               
                <span v-show="yulan==false">
                        <i class="iconfont icon-bianji f20 " style="color:white;"></i>
                       <span  class="f18 cFEFEFE cursor" style="margin-right:15px;">编辑苗圃场</span> 
                </span>
               <span v-show="yulan==true">
                 <button class="layui-btn layui-btn-primary layui-btn-radius" style="color:white;border:1px solid white;background:none;font-size:18px;width:150px;height:40px;line-height:40px;">
                       <i class="iconfont icon-bianji f20"  style="color:white;margin-right:5px;"></i>编辑苗圃场
                  </button>     
                </span>
                  </router-link>
					  </div>





					  <ul class="f15 center cD1D4D4"  style="position:absolute;bottom:0;height:40px;width:684px;line-height:40px;">
					        <li  @click="go(1,'tjxmm')"  class="relative lf cursor" :class="{cC86731:biaoti==1}" style="height:40px;width:25%;" >
									添加新苗木
										<img  v-if="biaoti==1" src="../tu-mpz/1-65.png" class="spjz layui-animated " style="bottom:3px;">
									
							</li>


							 <li  @click="go(2,'qbmm')" class="relative lf cursor"  :class="{cC86731:biaoti==2}"  style="height:40px;width:25%;" >
								全部苗木
									<img  v-if="biaoti==2" src="../tu-mpz/1-66.png" class="spjz" style="bottom:3px;">
								
							</li>

                            <li   @click="go(3,'yfb')"  class="relative lf cursor"  :class="{cC86731:biaoti==3}"  style="height:40px;width:25%;">
									已发布
									<img  v-if="biaoti==3" src="../tu-mpz/1-66.png" class="spjz" style="bottom:3px;">
									
							</li>

							<li  @click="go(4,'wfb')"  class="relative lf cursor"  :class="{cC86731:biaoti==4}"  style="height:40px;width:25%;" >
									未发布
									<img v-if="biaoti==4" src="../tu-mpz/1-66.png" class="spjz" style="bottom:3px;">
									<div style="display:none;">{{watch}}</div>
									
							<li/>
              
					  </ul>
              <span @click="yulan=false" v-show="yulan==true" class=" cursor f15 cFEFEFE"   style="right:20px;bottom:10px;position:absolute;" >
                  退出预览
              </span>
				</div>
				</div>
				 <div style="margin:0 auto;width:1024px;">
				<router-view class="animated zoomIn"></router-view>


 <!--预览的已发布弹出框-->
        <yulans v-if="yulan==true" ></yulans>



                </div>
<!--2  从添加新苗木跳到全部苗木，已发布，未发布的提醒？-->
<div v-if="trips2==true" style="z-index:2000;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);">
<div  class="bai rad center f26 c4b494b" style="width:402px;height:254px;position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">
      <p style="margin-top:50px;height:35px;">离开当前页面，将不保存</p>
      <p style="margin-bottom: 54px;height:35px;">苗木信息，确定离开？</p>
      <!--离开   留在当前页面-->
             <button@click="leaves2()" class="noleaves c676868 layui-btn layui-primary lf " style="border-bottom-left-radius: 5px;font-size:18px;color:#676868;background:white;width:200px;height:80px;border-top:1px solid #f2f2f2;">离开</button>
             <button @click="noleaves2()" class=" c676868 layui-btn layui-primary rf" style="border-bottom-right-radius: 5px;font-size:18px;margin:0;background:#5FB246;color:white;width:200px;height:80px;">留在当前页面</button>
     

</div>
</div>



<!--0添加新苗木的切换苗圃场的提醒-->
<div v-if="trips0==true" style="z-index:2000;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);">
<div  class="bai rad center f26 c4b494b" style="width:402px;height:254px;position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">
      <p style="margin-top:50px;height:35px;">离开当前页面，将不保存</p>
      <p style="margin-bottom: 54px;height:35px;">苗木信息，确定离开？</p>
      <!--离开   留在当前页面-->
    
             <button@click="leaves0()" class=" c676868 layui-btn layui-primary lf " style="border-bottom-left-radius: 5px;font-size:18px;color:#676868;background:white;width:200px;height:80px;border-top:1px solid #f2f2f2;">离开</button>
             <button @click="noleaves0()" class="noleaves c676868 layui-btn layui-primary rf" style="border-bottom-right-radius: 5px;font-size:18px;margin:0;background:#5FB246;color:white;width:200px;height:80px;">留在当前页面</button>
</div>
</div>

<!--1  全部苗木，已发布，未发布的编辑的时候切换苗圃场的提醒-->
<div v-if="trips1==true" style="z-index:2000;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);">
<div  class="bai rad center f26 c4b494b" style="width:402px;height:254px;position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">
      <p style="margin-top:50px;height:35px;">离开当前页面，将不保存</p>
      <p style="margin-bottom: 54px;height:35px;">苗木信息，确定离开？</p>
      <!--离开   留在当前页面-->
      
             <button@click="leaves1()" class=" c676868 layui-btn layui-primary lf " style="border-bottom-left-radius: 5px;font-size:18px;color:#676868;background:white;width:200px;height:80px;border-top:1px solid #f2f2f2;">离开</button>
             <button @click="noleaves1()" class="noleaves c676868 layui-btn layui-primary rf" style="border-bottom-right-radius: 5px;font-size:18px;margin:0;background:#5FB246;color:white;width:200px;height:80px;">留在当前页面</button>
</div>
</div>


</div>

     `,
     data:function(){
      return {
        // changeItem:'',
        // changeObjectId:'',
        // closeCal:false,//关闭编辑苗木的界面
        // changempc:false,
        modifympc:false,//在添加新苗木的时候点击编辑苗圃场
      	mpcname:'',
        trips2:false,//从添加新苗木跳到全部苗木，已发布，未发布的提醒
        tripsItem:'',
        tripsId:'',
         trips0:false,//添加新苗木的切换苗圃场的提醒
        trips0Item:'',
        trips0Id:'',
         trips1:false,//全部苗木，已发布，未发布的编辑的时候切换苗圃场的提醒
        trips1Item:'',
        trips1Id:'',
        yulan:false,//控制预览弹出框的变量
      	mpckuang:false,//苗圃场的弹出框的显示和隐藏
      	bg:-1,//苗圃场的鼠标放上的变量
      	  mpc:[],//旗下的苗圃场
          biaoti:this.$store.state.biaoti//缓存的第几个标题是 当前
      }
     },
	 computed:{
		 watch:function(){
			 this.biaoti=this.$store.state.biaoti
       this.trips2
		 }
	 },
    // 检测浏览器后退
     watch:{
     '$route':'dotitle'
      // 对路由变化作出响应...
    },
	 components:{
		 "headers":headers,
     "yulans":yulans
	 },
    methods:{
      // 检测浏览器后退
      dotitle(){
        this.$store.state.biaoti=this.$route.params.biaoti
      },
      // 点击编辑苗圃
      gomodifympc(){
        this.$router.push({name:'modifympc',params:{"groundId":this.$route.params.objectId}})  
      },
      mpcfalse(){
        this.mpckuang=false
        $(".mpcfalse").attr("src",'../tu-mpz/1-63.png')
      },
        golocation(){
          // 清空苗圃场
          // alert("清空苗圃场")
          this.$store.commit("qingkongMPC")
        	// this.$router.push({name:'ones'})
        },
		go:function(n,src){
			// 点击标题1跳转到对应的模块1
      this.yulan=false
      if(n==1){
        if(this.$route.name=='adds1'){
              this.trips2=true
            // alert(n)保存当前的标签，到时候跳转用的，方便知道是跳到第几个标签
             window.sessionStorage.setItem('trips2',n)
            return

        }
        if(tdate!=undefined){
            tdate=[]
        }
        // window.sessionStorage.setItem("tiao",1)
        // 每次点击1添加新苗木标签的时候都清空mtjxmm
           var mtjxmm={
          "objectId":'',//苗圃埸ID
          "mu_photo":[],
          "lawn_length":'',//草坪长
          'lawn_width':'',//草坪宽
          'lawn_density':'',//草坪密度
          'lawn_amount':'',//草坪每捆数量
          "mu_name":'',//添加新苗木名称
          'mu_type':'',//添加新苗木类型
          'mu_zg_min':'',//添加新苗木株高最小值
          'mu_zg_max':'',//添加新苗木株高最大值
          'mu_gf_min':'',//添加新苗木冠幅最小值
          'mu_gf_max':'', //添加新苗木冠幅最大值
          'mu_package_weight':'', //添加新苗木的几斤袋
          'mu_rg_min':'',//添加新苗木的肉高最小值
          'mu_rg_max':'',//添加新苗木的肉高最大值
          'mu_zfjg_min':'',//添加新苗木的主分支高
          'mu_zfjg_max':'',//添加新苗木的主分支高
          'mu_mj_min':'', //添加新苗木的米茎最小值
          'mu_mj_max':'',//添加新苗木的米茎最大值
          'mu_dj_min':'', //添加新苗木的地径最小值
          'mu_dj_max':'',//添加新苗木的地径最大值
          'mu_stock':'',//添加新苗木的库存
          'mu_price':''//添加新苗木的价格
          // "mu_name":this.name,//草坪长
          // 'mu_type':this.chosetype,//草坪宽
          // 'mu_zg_min':this.zgmin,//草坪密度
          // 'mu_zg_max':this.zgmax,//草坪数量
        }
      window.sessionStorage.setItem("mtjxmm",JSON.stringify(mtjxmm))
       this.$store.state.mtjxmm=mtjxmm    
        this.$store.state.biaoti=1
                this.$router.push({name:'tjxmm',params:{biaoti:1,status:'9'}})
      }else{
        // 点击234的时候判断当前的标题是不是位于添加新苗木1，是就要弹出框提示离开将不保存
        if(this.$route.params.biaoti==1){//说明点击2,3,4的时候当前是1，然后我点击了2,3,4，这个时候要弹出框提示
            this.trips2=true
            // alert(n)保存当前的标签，到时候跳转用的，方便知道是跳到第几个标签
             window.sessionStorage.setItem('trips2',n)
            return
        }else{//如果是2,3,4中的其中一个页面的编辑里面点击2,3,4，除了自己外的标签，则提示框出现
          // 如果现在是处于2,3,4中的编辑信息页面，这个时候点击自己则没反应，点击其他标签则弹出提示 是否离开
             if(this.$route.name=='adds1'){
                 if(n==this.biaoti){
                    return
                 }else{
                  this.trips2=true
              window.sessionStorage.setItem('trips2',n)
              return
                 }
             }
             // 排除上面的情况后就剩下既不是从1里面过来的，也不说从2,3,4的编辑页面过来的点击
                this.$store.state.biaoti=n
                this.$router.push({name:src,params:{biaoti:n}})
        }
      }
			 // this.$store.state.biaoti=n
			// this.$router.push({name:src,params:{biaoti:n}})
			// 调用更新所以数据的方法
           this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:src})
		},

     noleaves0(){
      this.trips0=false
      this.trips0Item=''
      this.trips0Id=''
    },
         noleaves1(){
      this.trips1=false
      this.trips1Item=''
      this.trips1Id=''
    },
        noleaves2(){
      this.trips2=false
    },
    leaves0(){
               var that=this
           var where=''
           // 保存切换的苗圃场Id,便于从其他页面跳过来的时候来到上次选择的苗圃场
           // window.sessionStorage.setItem('MPCId',this.trips0Id)
           // window.sessionStorage.setItem('MPCName',this.trips0Item)
           this.searchmpc(this.trips0Id)
        this.trips0=false

           if(this.$route.path.indexOf("tjxmm")!=-1){
               where='tjxmm'
               this.$router.push({name:'tjxmm',params:{name:this.trips0Item,objectId:this.trips0Id,biaoti:1,'status':'no'}})

           }
            this.mpcname=this.trips0Item
           this.mpckuang=false
           $(".jiantou").attr("src",'../tu-mpz/1-63.png')
           // 调用更新所以数据的方法
           this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:where})


  
    },
    leaves1(){
                var that=this
           var where=''
           // 保存切换的苗圃场Id,便于从其他页面跳过来的时候来到上次选择的苗圃场
           // window.sessionStorage.setItem('MPCId',this.trips1Id)
           // window.sessionStorage.setItem('MPCName',this.trips1Item)
           this.searchmpc(this.trips1Id)
           this.trips1=false

           if(this.$route.params.biaoti=='2'){
              where='qbmm'
              this.$router.push({name:'qbmm',params:{name:this.trips1Item,objectId:this.trips1Id,biaoti:2}})
           }else if(this.$route.params.biaoti=='3'){
              where='yfb'
              this.$router.push({name:'yfb',params:{name:this.trips1Item,objectId:this.trips1Id,biaoti:3}})
           }else if(this.$route.params.biaoti=='4'){
              where='wfb'
              this.$router.push({name:'wfb',params:{name:this.trips1Item,objectId:this.trips1Id,biaoti:4}})
           }
           this.mpcname=this.trips1Item
           this.mpckuang=false
           $(".jiantou").attr("src",'../tu-mpz/1-63.png')
           // 调用更新所以数据的方法
           this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:where})



  
    },
    leaves2(){
                var n=window.sessionStorage.getItem('trips2')               
                  this.$store.state.biaoti=n
                
                this.trips2=false
                if(n==1){
                      if(tdate!=undefined){
                            tdate=[]
                          }
          // window.sessionStorage.setItem("tiao",1)
          // 每次点击1添加新苗木标签的时候都清空mtjxmm
             var mtjxmm={
            "objectId":'',//苗圃埸ID
            "mu_photo":[],
            "lawn_length":'',//草坪长
          'lawn_width':'',//草坪宽
          'lawn_density':'',//草坪密度
          'lawn_amount':'',//草坪每捆数量
            "mu_name":'',//添加新苗木名称
            'mu_type':'',//添加新苗木类型
            'mu_zg_min':'',//添加新苗木株高最小值
            'mu_zg_max':'',//添加新苗木株高最大值
            'mu_gf_min':'',//添加新苗木冠幅最小值
            'mu_gf_max':'', //添加新苗木冠幅最大值
            'mu_package_weight':'', //添加新苗木的几斤袋
            'mu_rg_min':'',//添加新苗木的肉高最小值
            'mu_rg_max':'',//添加新苗木的肉高最大值
            'mu_zfjg_min':'',//添加新苗木的主分支高
            'mu_zfjg_max':'',//添加新苗木的主分支高
            'mu_mj_min':'', //添加新苗木的米茎最小值
            'mu_mj_max':'',//添加新苗木的米茎最大值
            'mu_dj_min':'', //添加新苗木的地径最小值
            'mu_dj_max':'',//添加新苗木的地径最大值
            'mu_stock':'',//添加新苗木的库存
            'mu_price':''//添加新苗木的价格
            // "mu_name":this.name,//草坪长
          // 'mu_type':this.chosetype,//草坪宽
          // 'mu_zg_min':this.zgmin,//草坪密度
          // 'mu_zg_max':this.zgmax,//草坪数量
          }
                  window.sessionStorage.setItem("mtjxmm",JSON.stringify(mtjxmm))
                  this.$store.state.mtjxmm=mtjxmm    
                this.$router.push({name:'tjxmm',params:{biaoti:1,status:'9'}})
                }else if(n==2){
                   this.$router.push({name:'qbmm',params:{biaoti:2}})
                    this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:'qbmm'})
                }else if(n==3){
                   this.$router.push({name:'yfb',params:{biaoti:3}})
                    this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:'yfb'})
                }else if(n==4){
                   this.$router.push({name:'wfb',params:{biaoti:4}})
                    this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:'wfb'})
                }
             
                window.sessionStorage.setItem('trips2','-1')

  
    },
    searchmpc(objectId){
      var that=this
                     $.get(Boss+"ground/"+objectId,{"sessiontoken":sessiontoken},function(data){
      console.log('根据苗圃场id请求苗圃场的信息')
     that.$store.state.mpc=data.results
     
     
    })
    },
		// 点击切换苗圃场
    	mpcs(item,objectId,trips){

// 弹出提示框
         // 0如果是处于添加新苗木的时候切换苗圃场则清空缓存和提示
         if(this.$route.params.biaoti=='1'){
            this.trips0=true
            this.trips0Item=item
            this.trips0Id=objectId
            return
         }




//1处于全部苗木，已发布，未发布的编辑里面的时候切换苗圃场
           // 如果处于添加新苗木的编辑里面的时候切换苗圃场要提示
        if($("#callback").html()!=undefined&&trips==undefined){
            this.trips1=true
            this.trips1Item=item
            this.trips1Id=objectId
            return
        }
// 弹出提示框
        // 当打开了详细的编辑页面的时候不允许点击切换苗圃场
        var that=this
           var where=''
           // 保存切换的苗圃场Id,便于从其他页面跳过来的时候来到上次选择的苗圃场
           this.searchmpc(objectId)
           if(this.$route.path.indexOf("tjxmm")!=-1){
           	where='tjxmm'
           	  // this.$router.push({name:'tjxmm',params:{name:item,objectId:objectId,biaoti:1}})
               this.$router.push({name:'transPage',params:{name:item,objectId:objectId,biaoti:1}})
           }else if(this.$route.path.indexOf("qbmm")!=-1){
           		where='qbmm'
           	  this.$router.push({name:'qbmm',params:{name:item,objectId:objectId,biaoti:2}})
           }else if(this.$route.path.indexOf("yfb")!=-1){
           		where='yfb'
           	  this.$router.push({name:'yfb',params:{name:item,objectId:objectId,biaoti:3}})
           }else if(this.$route.path.indexOf("wfb")!=-1){
           		where='wfb'
           	  this.$router.push({name:'wfb',params:{name:item,objectId:objectId,biaoti:4}})
           }
           this.mpcname=item
           this.mpckuang=false
           $(".jiantou").attr("src",'../tu-mpz/1-63.png')
           // 调用更新所以数据的方法
           this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:where})
    	},
		// 苗圃场的展开和收起
		choose(e){
      if(this.yulan==true){
        return
      }
     
			if($(e.currentTarget).attr("src")=='../tu-mpz/1-63.png'||$(e.currentTarget).parent().find('.mpcfalse').attr("src")=='../tu-mpz/1-63.png'){
				// 如果是关闭的
				$(e.currentTarget).attr("src",'../tu-mpz/1-64.png')
        $(e.currentTarget).parent().find('.mpcfalse').attr("src",'../tu-mpz/1-64.png')
				this.mpckuang=true
			}else{
				// 如果是打开的
				$(e.currentTarget).attr("src",'../tu-mpz/1-63.png')
         $(e.currentTarget).parent().find('.mpcfalse').attr("src",'../tu-mpz/1-63.png')
				this.mpckuang=false
			}
		}

    
    },
    // 
    mounted:function () {
    	var that=this
           this.$store.state.biaoti=this.$route.params.biaoti
      $.get(Boss+"group/"+default_group+"/ground",{"sessiontoken":sessiontoken,'limit':common_limit1000},function(data){
         console.log(9898)    
         JSONS(data.results.data,'苗圃场')     
          that.mpc= data.results.data
          that.mpcname=that.$route.params.name
      })  
      console.log(that.mpc)    
      
       // 调用更新所以数据的方法
        var where=''
           if(this.$route.path.indexOf("tjxmm")!=-1){
           	  where='tjxmm'
           }else if(this.$route.path.indexOf("qbmm")!=-1){
           		where='qbmm'
           }else if(this.$route.path.indexOf("yfb")!=-1){
           		where='yfb'
           }else if(this.$route.path.indexOf("wfb")!=-1){
           		where='wfb'
           }
           // 调用更新所以数据的方法
           this.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:where})
    }
}

