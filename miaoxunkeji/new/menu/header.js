
var headers = {
    template: `
    <header v-if="datas!='no'" :class="{borderB:this.$store.state.headertu==undefined&&bj=='bai',borderH:this.$store.state.headertu==undefined&&bj=='hei',headerbai:bj=='bai'&&this.$store.state.headertu=='me',heishe:bj=='hei',baishe:bj=='bai'}" style="z-index:1000;top: 0;left:0;position:fixed;height:60px;width:100%;">

           <ul class="topbar  " style="height:60px;width:1004px;margin:0 auto;padding-right:0;">
             <li class="f13" style="margin:0;">
                                          <img  @click="golocation('../parent/index.html','')"   src="../tu-menu/50.png" class="czjz cursor"  style="left:20px;">
                     
            </li>
              
			   
              <li v-if="sessiontoken!=null" class="f13 relative rf " @mouseenter="xian=1" @mouseleave="gerenziliaoCloses($event)" @click="gerenziliaoOpens($event)"   style="margin:0;padding-left:25px;min-width:27px;padding-right:20px;position: relative;height:60px;">
                      <img :src="datas.avatar!=undefined?datas.avatar.url+'?imageView2/1/w/27/h/27':''"  style="border-radius:50%;" class="cursor jz">
                        <div v-if="xian==1" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:15px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div>                   
												<div  class="gerenziliao"  v-if="gerenziliao==true"  style="border:1px solid #D1D5D5;width: 350px;background: white;position: absolute;top:59px;right:0px;" > 
        
																		<ul :class="{heishe:bj=='hei',baishe:bj=='bai'}">
																			<li @mouseover="index=0" :class="{activeg1:index==0&&bj=='hei',activeg:index==0&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" style="height:105px;position:relative;" >
																				<span @click="golocation('miao_me.html','#/bases/gaishu/0')" class="cursor" style="height:100px;display:inline-block;">
																				   <span style="color:#4D4C4F;font-size:25px;height:61px;">
																				       <span class="cursor"   :class="{activeg1:index==0&&bj=='hei',activeg:index==0&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">{{datas.nickname==''?'无':datas.nickname}}</span>
																				   </span>
																				   <span style="color:#696B6D;font-size:13px;display:block;height:30px;line-height:0;width:110px;">
																					   <span     :class="{activeg1:index==0&&bj=='hei',activeg:index==0&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">修改个人账户设置</span>
																				   </span>
																				</span>
																				<span   @click="golocation('miao_me.html','#/bases/message/1')"  >
																				<img  :src="datas.avatar!=undefined?datas.avatar.url+'?imageView2/1/w/53/h/52':'../tu/1.png'"  style="width:53px;height:52px;right:20px;border-radius:50%;" class="czjz cursor">
																				</span>
																				<div class="xian" v-if="index!=0&&index!=10"></div>
																			</li>
																			<li @click="golocation('miao_collection.html','')" @mouseover="index=10" :class="{activeg1:index==10&&bj=='hei',activeg:index==10&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}"  class=" cursor" style="position:relative;top:0px;height:62px;line-height:62px;color:#696B6D;font-size:13px;" >	
								                                             收藏夹
																				<img :src="bj=='bai'?'../tu/1-10.png':'../tu/1-09.png'" style="cursor:pointer;width:24px;right:20px;height:24px;" class="czjz">
																				<div class="xian" v-if="index!=10&&index!=1"></div>
																			</li>
																			<li  @click="golocation('miao_friend.html','')" @mouseover="index=1" :class="{activeg1:index==1&&bj=='hei',activeg:index==1&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}"  class=" cursor" style="position:relative;top:0px;height:62px;line-height:62px;color:#696B6D;font-size:13px;" >
																				邀请好友
																				<img :src="bj=='bai'?'../tu/5.png':'../tu/5(1).png'" style="cursor:pointer;width:24px;right:20px;height:24px;" class="czjz">
																				<div class="xian" v-if="index!=1&&index!=2"></div>
																			</li>
																			<li @mouseover="index=2"  class=" cursor"  @click="golocation('miao_menu.html','','menu')" :class="{activeg1:index==2&&bj=='hei',activeg:index==2&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" style="position:relative;top:0px;height:75px;color:#696B6D;" >
							                                                         <p style="line-height:30px;font-size:13px;margin-bottom:0;"><span  :class="{activeg1:index==2&&bj=='hei',activeg:index==2&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">{{qysrc==true?'关闭企业模式':'开启企业模式'}}</span></p>

							                                                         <span  class="f12" :class="{activeg1:index==2&&bj=='hei',activeg:index==2&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" style="line-height: 20px;width: 256px;display:inline-block;">{{qysrc==true?'关闭此功能后，您将使用个人账户协同买卖苗木。':'开启此功能后，您将可以建立团队或企业，多人协同合作，买卖苗木。'}}</span>							    
								                                                    <img @click.stop="qysrcs($event)" :src="qysrc==true&&bj=='bai'?'/static/tu-header/11-03.png':(qysrc==true&&bj=='hei'?'/static/tu-header/11-05.png':(qysrc==false&&bj=='bai'?'/static/tu-header/11-02.png':'/static/tu-header/11-04.png'))"  style="cursor:pointer;width:46px;right:20px;height:24px;" class="czjz">
							     
							                                                         <div class="xian" v-if="(qysrc==true&&index!=2&&index!=38)||(qysrc==false&&index!=2&&index!=3)"></div>
						                                                    </li>
						                                                    <li  @click="exchange($event)"   v-if="qysrc==true" class="cursor" @mouseover="index=38" :class="{activeg1:index==38&&bj=='hei',activeg:index==38&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" style="position:relative;top:0px;height:62px;color:#696B6D;font-size:13px;" >
																					<p><span  :class="{activeg1:index==38&&bj=='hei',activeg:index==38&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">企业转换与管理</span></p>
																					<img :src="bj=='hei'?'/static/tu-header/555-07.png':'/static/tu-header/555-06.png'" class="czjz" style="right:20px;height:25px;width:25px;">
																					<div class="xian" v-if="index!=3&&index!=38"></div>
																			</li>
																			<li  @click="golocation('miao_mpz.html','')"   v-if="(master=='0')" class="cursor" @mouseover="index=3" :class="{activeg1:index==3&&bj=='hei',activeg:index==3&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" style="position:relative;top:0px;height:62px;color:#696B6D;font-size:13px;" >
																					<p><span  :class="{activeg1:index==3&&bj=='hei',activeg:index==3&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">成为苗圃主</span></p>
										
																					<div class="xian" v-if="index!=3&&index!=4"></div>
																			</li>
																			<li  @click="golocation('../parent/index.html','')"  v-if="(master==1&&bj=='hei')"  class="relative cursor" @mouseover="index=3" :class="{activeg1:index==3&&bj=='hei',activeg:index==3&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">
																				切换至买家模式
																				 <img src="../tu/3+.png" class="czjz" style="right:20px;width:22px;height:24px;">
																					<div class="xian" v-if="index!=3&&index!=4"></div>
																			</li>
																			<li  @click="golocation1('miao_mpz.html','#/hasmpc/'+MPCname+'/'+MPCid+'/qbmm/2')"  v-if="(master==1&&bj=='bai')"  class="relative cursor" @mouseover="index=3" :class="{activeg1:index==3&&bj=='hei',activeg:index==3&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">
																				切换至卖家模式
																				<img src="../tu/3.png" class="czjz" style="right:20px;width:22px;height:24px;">
																					<div class="xian" v-if="index!=3&&index!=4"></div>
																			</li>
																			<li @click="golocation('miao_me.html','')"  @mouseover="index=4"  class=" cursor" :class="{activeg1:index==4&&bj=='hei',activeg:index==4&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" style="position:relative;top:0px;height:62px;line-height:62px;color:#696B6D;font-size:13px;" >
																				<p><span   :class="{activeg1:index==4&&bj=='hei',activeg:index==4&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}">向我们反馈问题</span></p>
																				<img :src="bj=='bai'?'../tu/2.png':'../tu/2(1).png'" style="cursor:pointer;width:23px;height:24px;right:20px;" class="czjz">
																				<div class="xian" v-if="index!=4&&index!=5"></div>
																			</li>
																			<li @click="homes" @mouseover="index=5"  class=" cursor" :class="{activeg1:index==5&&bj=='hei',activeg:index==5&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" style="position:relative;top:0px;color:#696B6D;height:60px;line-height:60px;font-size:13px;cursor:pointer;" >
																				<p >退出登录</p>
															
																			</li>
																		</ul>
                                         </div>
              </li>

			  <li v-if="sessiontoken==null" :class="{heishe:bj=='hei',baishe:bj=='bai'}" class="f13   rf cursor relative">登录</li>
			  <li v-if="sessiontoken==null" :class="{heishe:bj=='hei',baishe:bj=='bai'}" class="f13   rf cursor relative">注册</li>


              <li  @mouseenter="xian=2"  @mouseleave="xian=-1" class=" f13  rf relative cursor">帮助 <div v-if="xian==2" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:15px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div></li>
              
			  <li @click="orders()" @mouseenter="xian=62"  @mouseleave="xian=-1"  v-if="(bj=='hei'&&this.$store.state.headertu==undefined)"   class="f13 header_heishe  rf cursor relative">订单
			  <div v-if="xian==62" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:15px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div>
			     <img src="../tu-mpz/1-67.png" style="position: absolute;left:26px;top:17px;">
			  </li>
			  <li @mouseenter="xian=61"  @mouseleave="xian=-1"  v-if="(bj=='hei'&&this.$store.state.headertu==undefined)"   class="f13 header_heishe  rf cursor relative">统计数据
			 <div v-if="xian==61" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:15px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div>
			   <img src="../tu-mpz/1-67.png" style="position: absolute;right:-9px;top:17px;">
			  </li>

			  <li  @mouseenter="xian=3"  @mouseleave="xian=-1" class="f13  rf relative cursor">消息
			  <div v-if="xian==3" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:15px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div>
			   <img  v-if="(bj=='hei'&&this.$store.state.headertu==undefined)||this.$store.state.headertu=='me'"   src="../tu-mpz/1-67.png" style="position: absolute;left:26px;top:17px;">
			   </li>

              <li  @mouseenter="xian=4"  @click="golocation('miao_mpz.html','#/nompc/begin1')"  @mouseleave="xian=-1" v-if="master==0" class="f13  rf cursor relative"> 
			                <span style="width:80px;">成为苗圃主 </span>
							<div v-if="xian==4" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:35px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div>
			  </li>
			  <li  @mouseenter="xian=4" @click="miaopu" @mouseleave="closes" v-if="master==1"  class="f13  rf cursor relative"> 
			 
						<span style="width:80px;" >
						        我的苗圃
						</span>
						 <img v-if="(bj=='hei'&&this.$store.state.headertu==undefined)||this.$store.state.headertu=='me'"  src="../tu-mpz/1-67.png" style="position: absolute;right:-9px;top:17px;">
						<ul  v-if="(open_miaopu==true)"  style="top: 60px;right: -10px;width:214px;height:240px;position:absolute;" class=" miaopuk bai border c696A6C f13">
							<li  @click.stop="golocation1('miao_mpz.html','#/hasmpc/'+MPCname+'/'+MPCid+'/tjxmm/1/9/adds')"   :class="{activeg1:index1==0&&bj=='hei',activeg:index1==0&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" @mouseenter="move($event)" style="padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							添加新苗木
							<span v-if="index1!=0&&index1!=1" class="spjz" style="bottom:0px;border-top:1px solid #D1D4D4;width:174px;height:0;"></span>
							</li>
							<li  @click.stop="golocation1('miao_mpz.html','#/hasmpc/'+MPCname+'/'+MPCid+'/qbmm/2')" :class="{activeg1:index1==1&&bj=='hei',activeg:index1==1&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" @mouseenter="move($event)" style="top:0px;padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							全部苗木
							<span v-if="index1!=1&&index1!=2" class="spjz" style="bottom:0px;border-top:1px solid #D1D4D4;width:174px;height:0;"></span>
							</li>
							<li  @click.stop="golocation1('miao_mpz.html','#/hasmpc/'+MPCname+'/'+MPCid+'/yfb/3')" :class="{activeg1:index1==2&&bj=='hei',activeg:index1==2&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" @mouseenter="move($event)" style="top:0px;padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							已发布
							<span v-if="index1!=2&&index1!=3" class="spjz" style="bottom:0px;border-top:1px solid #D1D4D4;width:174px;height:0;"></span>
							</li>
							<li  @click.stop="golocation1('miao_mpz.html','#/hasmpc/'+MPCname+'/'+MPCid+'/wfb/4')" :class="{activeg1:index1==3&&bj=='hei',activeg:index1==3&&bj=='bai',heishe:bj=='hei',baishe:bj=='bai'}" @mouseenter="move($event)" style="top:0px;padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							未发布
							</li>
						</ul>
						 <div v-if="xian==4" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:15px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div>
			  </li>
			  
        
              <li  @mouseenter="xian=5"  @mouseleave="xian=-1" class="f13  rf relative cursor">
			  手机端
			  <div v-if="xian==5" class="topbar_xian layui-anim layui-anim-scaleSpring relative" style="margin:0 auto;width:15px;height:3px;border-radius: 5px;background:#D2D6D6;top:-10px;"></div>
            
			  </li>
			  <!--当前代表的企业或团队或者个人项目的名字-->
			  <li class="f12  rf">{{qysrc==false?datas.private_group.name:datas.default_group_name}}</li>

          </ul>

           <!--企业管理和转换的弹出框-->
          <div @click="exfalse($event)" class="wai_kuangs" v-if="exchangeK==true">
               <div @click.stop="alert" class="nei_kuang bai flow-default" style="width:448px;height:600px;"   >
                        <p class="f12 c999899 bgF2F2F2" style="height:28px;line-height:28px;padding:0 15px;">
                        企业转换与管理
                        <span @click="gocreate" class="c269C88 rf cursor" style="">建立团队或企业</span>
                        </p> 
                        <div  style="overflow-y:scroll;height:570px;" @scroll="scrolls($event)">
                        <ul   class="relative">
                          	<li v-for="(item,index) in exchangeItem" style="padding:15px;height:96px;border-bottom:5px solid #F2F2F2;" class="relative">
                          		<div style="height:56px;" class="overflow">
                          			<div style="width:56px;height:56px;border-radius:50%;" class="overflow lf relative">
                          			  <img class="jz" alt="" @load="adjust($event)" :src="item.avatar.url!=undefined?item.avatar.url:(item.type=='group'?'/static/tu-header/68.png':(item.type=='company'?'/static/tu-header/69.png':'/static/tu-header/70.png'))"  >
                          			  <!-- 68 团队 69 企业 70 个人 -->
                          		    </div>
                          		    <div class="lf f16 c4A494B diandiandians" style="margin-left:10px;margin-top:10px;max-width:206px;">
                          		    	{{item.name}}
                          		    </div>
                          		    <!-- ?'/static/tu-header/1-11.png':'/static/tu-header/1-12.png' -->
                          		    <img  alt="" src='/static/tu-header/1-11.png' style="margin-top:12px;margin-left:10px;">
                          		</div>
                          		<div style="padding-top:15px;margin-top:8px;border-top:1px solid #F2F2F2;" class="f13 c999899">
                          			<span v-if="current!=index" class="cursor" @click="transforms(item.objectId,item.name,index)">转换为默认管控企业</span>
                          			<span v-if="current==index" class="c60B346"><img class="relative" style="margin-right:5px;top:-2px;" src="/static/tu-header/555-08.png" alt="">转换为默认管控企业</span>

                          			 <span class="c676868 rf cursor" @click="manages(item.objectId)">管理</span>
                          			 <img  @click="manages(item.objectId)" alt="" src='/static/tu-header/555-06.png' style="width:17px;margin-right:10px;" class="rf cursor">

                          		</div>
                          		<div v-if="current==index" style="position:absolute;left:0;top:0;border:3px solid #60B346;height:119px;"></div>
                          	</li>

                        </ul>  
                       <div style="color:#999899;background:#f2f2f2;height:60px;line-height:60px;" class="center">{{page>page_count?'暂无更多信息~':'加载更多'}}</div>
                       </div>

                        <div v-if="trip==true" class="f16  spjz" style="color:#FFFFFF;bottom:15px;width:370px;padding:10px 15px;background:#000000;opacity:0.5;">
                        	您已成功转换为“{{tripname}}”
                        </div>


               </div>
          </div>

      </header>  


     `,
    data: function() {
        return {
        	page_count:0,//数据的总页数
        	page:1,//企业转换列表的页数
        	istransform:false,//记录是否替换过默认企业
        	    current:-1,//当前的默认企业 
				trip:false,//您已成功转换为“{{tripname}}”的提示框
				tripname:'',//您已成功转换为“{{tripname}}”
				exchangeItem:'',//企业管理和转换的列表数据
				exchangeK:false,//企业管理和转换的弹出框true
        	master:-1,//是否成为苗圃主，1是  0不是
        	MPCname:'',//苗圃场名字
			MPCid:'',//苗圃场id
            user_phone: '',
            user_id: '',
            bj:this.$store.state.header,
            qysrc:false,//企业转换的开关
			xian:-1,
			sessiontoken:sessiontoken,
            datas: 'no',//个人资料
            index: -1,//鼠标放上的时候个人资料弹出框的灰色背景
			index1: -1,//鼠标放上的时候我的苗圃弹出框的灰色背景
            gerenziliao: false,
          open_miaopu:false//控制我的苗圃弹出框的显示和隐藏
        }
    },

    methods:{
    	    	adjust(e){
               //获取容器宽高
          var pwidth = $(e.currentTarget).parent().width()
          var pheight = $(e.currentTarget).parent().height()
          //获取图片实际宽高
          var width = $(e.currentTarget).width()
          var height = $(e.currentTarget).height()
          //获取实际宽高比例
          var kgb = width/height
          var gkb = height/width
          console.log(width,height,pwidth,pheight)
          //修正图片宽高 多加了==
          if(width<height||width==height){
              $(e.currentTarget).css('width',pwidth+'px')
              var xzg = pwidth/kgb
              $(e.currentTarget).css('height',xzg+'px')
              console.log('取宽')
          }else{
              $(e.currentTarget).css('height',pheight+'px')
              var xzk = pheight*kgb
              $(e.currentTarget).css('width',xzk+'px')
              console.log('取高')
          }
},
    	// 滚动加载
	scrolls(e){
		var that=this
       var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
       var nScrollTop = 0;   //滚动到的当前位置
       var nDivHight = $(e.currentTarget).height();
         nScrollHight = $(e.currentTarget)[0].scrollHeight;
         nScrollTop = $(e.currentTarget)[0].scrollTop;
　　　　　var paddingBottom = parseInt( $(e.currentTarget).css('padding-bottom') ),paddingTop = parseInt( $(e.currentTarget).css('padding-top') );
         if(nScrollTop + paddingBottom + paddingTop + nDivHight >= nScrollHight){
         	
         	that.page++
         	console.log("到达底部了"+that.page)
         	// 当前页数大于总页数则返回
         	if(that.page>that.page_count){
         		return
         	}
         	
         // 企业团队列表
		    $.get(Boss+"user/groups",{"sessiontoken":sessiontoken,'limit':common_limit20,'page':that.page},function(data){
		    	 if(data.status==1){
                                if(data.results.data.length>0){
                                for (var i = 0; i < data.results.data.length; i++) {
                                  that.exchangeItem.push(data.results.data[i])
                                  if(data.results.data[i].objectId==default_group){
                                       that.current=i
				    	           }
                                    }  
				    				    
                                }
                              
                             }else{
		    		                    alert(data.results.message)
		    	                  }  				       
			})        
         }                        
	},

    		// 建立团队或企业
  	gocreate(){
        window.open('../detail/miao_menu.html?role='+this.bj+'#/menuNo')
  	},
  	// 防止冒泡的
  	alert(){

  	},
  	// 点击黑色层让企业管理和转换消失
  	exfalse(e){
  		// alert(1)
         this.exchangeK=false
         if(this.istransform==true){
         	location.reload()
         }
         
  	},
  	// 转换为默认管控企业
  	transforms(objectId,name,index){
  		var that=this
            		// 设定用户的默认组
			$.post(Boss+'user/groups/'+objectId+'/default',{'sessiontoken':sessiontoken},function(data){
				console.log(data)
				if(data.status==1){
					that.istransform=true
					// 您已成功转换为“广东省花木苗讯电子科技信息合作大社群”
					that.tripname=name
					that.current=index
					that.trip=true
					setTimeout(function(){
						that.trip=false
						// 重新加载，直接取最新的数据
					// location.reload()
					},3000)
					
					
				}
			})
  	},
  	// 管理按钮跳转到menu菜单
  	manages(objectId){
          window.open('../detail/miao_menu.html?role='+this.bj+'#/menuYes/boy/'+objectId+'/4')
  	},
  	// 企业管理和转换列表弹出框
    	exchange(e){
        var that=this
        that.exchangeItem=[]
        that.exchangeK=true  
		that.istransform=false 
	   // that.loads()

       
        that.page=1
                       // 企业团队列表
		    $.get(Boss+"user/groups",{"sessiontoken":sessiontoken,'limit':common_limit20,'page':that.page},function(data){
		    	if(data.status==1){
		    		that.page_count=data.results.page_count
		    		that.exchangeItem=data.results.data     
				    that.exchangeK=true  
				    that.istransform=false 
				    for (var i = 0; i < data.results.data.length; i++) {
				    	if(data.results.data[i].objectId==default_group){
                            that.current=i
				    	}
				    }
		    	}else{
		    		alert(data.results.message)
		    	}
				       
			})
        
    	},
    	orders:function(){
    		// 点击订单
    		console.log('order')
    		console.log(this.$route.name)
    		 if(this.$route!=undefined){
 	        if(this.$route.name=='adds1'||this.$route.name=='adds'){
    		Showbo.Msg.confirm('离开当前页面，将不保存苗木信息，确定离开？',function(flag){
    			if(flag=='yes'){
                console.log('你点击了确定!');
                 location.href="../parent/index.html?#/order/orderView"
            }else if(flag=='no'){
                 console.log('你点击了取消!');
            }	
    		})
    	}else{
    		   		 		location.href="../parent/index.html?#/order/orderView"
    		   		 	}
    	}else{
    		location.href="../parent/index.html?#/order/orderView"
    	}
    		
    	},


    	golocation:function(href,router,isfirst){
    		// alert(2)
    		// alert('who')
    		console.log('who')
    		// alert(6)
                         		var that=this
                         		var returns=1
                     // 判断如果点击的是企业转换按钮则根据个人资料里面的字段去判断是否建立过企业和团队
				if(isfirst=='menu'&&that.qysrc==false){
					$.ajax({
					   async: false,
					   type: "GET",
					   url:Boss+"user/groups",
					   data:{"sessiontoken":sessiontoken},
					   success : function(data) { 
					   	// alert(2)
					  if(data.results.data.length==0){
											router='#/menuNo'
					  			        }else{
					                        // router='#/menuYes/gaishu/0'
					                        // 没有建立过的点了没反应
					                         returns=0 
					                        
					  			        }
									}
					   
					});
    	 }else if(isfirst=='menu'&&that.qysrc==true){
    	 	 // router='#/menuYes/gaishu/0'
    	 	 // 必须通过下面的弹出框来去企业管理和装换
    	 	 return
    	 }
// 个人的时候没有建立过的点击去建立
// 个人的时候有建立过的点击了没反应，除非通过开的按钮然后再点击
if(returns==0){
	return
}

 // alert(33)
 console.log('golocation')
    		   		 if(this.$route!=undefined){
    		   		 	if(this.$route.name=='adds1'||this.$route.name=='adds'){
    		                Showbo.Msg.confirm('离开当前页面，将不保存苗木信息，确定离开？',function(flag){
    			                          if(flag=='yes'){
                                          console.log('你点击了确定!');
                                           location.href=href+'?role='+that.bj+router
  		                                   setTimeout(function(){
  		                                       	location.reload()
  		                                       },100)
                                          }else if(flag=='no'){
                                           console.log('你点击了取消!');
                                          }	
    		                    })
    		   		 	}else{
    		   		 		location.href=href+'?role='+that.bj+router
  		                             setTimeout(function(){
  		                                 	location.reload()
  		                                 },100)
    		   		 	}
    	            }else{
    	            	 location.href=href+'?role='+that.bj+router
  		                             setTimeout(function(){
  		                                 	location.reload()
  		                                 },100)
    	            }
  		
  	},
      	golocation1:function(href,router){
      		 console.log('golocation1')
	// if(this.$route.name=='adds1'||this.$route.name=='adds'){
 //    			// return
 //    			if(confirm("离开当前页面，将不保存苗木信息，确定离开？")){
 //                    location.href=href+'?role=hei'+router
 //  		    setTimeout(function(){
 //  		    	location.reload()
 //  		    },100)
 //                 }
 //                 return false;
 //    		}else{
 //    			location.href=href+'?role=hei'+router
 //  		    setTimeout(function(){
 //  		    	location.reload()
 //  		    },100)
 //    		}
 if(this.$route!=undefined){
 	        if(this.$route.name=='adds1'||this.$route.name=='adds'){
    		                Showbo.Msg.confirm('离开当前页面，将不保存苗木信息，确定离开？',function(flag){
    			                          if(flag=='yes'){
                                          console.log('你点击了确定!');
                                            location.href=href+'?role=hei'+router
  		                                   setTimeout(function(){
  		                                       	location.reload()
  		                                       },100)
                                          }else if(flag=='no'){
                                           console.log('你点击了取消!');
                                          }	
    		                    })
    		                }else{
    		   		 		location.href=href+'?role=hei'+router
  		                             setTimeout(function(){
  		                                 	location.reload()
  		                                 },100)
    		   		 	}
    	            }else{
    	            	  location.href=href+'?role=hei'+router
  		                             setTimeout(function(){
  		                                 	location.reload()
  		                                 },100)
    	            }
  	},
    	// 企业转换的开关
  	qysrcs:function(e){
  		
  		    	console.log(this.datas.objectId)
  				var that=this
  				 var user=window.localStorage.getItem('default_group') 
  		//关的时候，让他变开
  		if(this.qysrc==false){
  			// 如果当前是关个人项目，而且没有建立过团队和企业，则跳去建立的界面
  			// alert('false')
  			    $.get(Boss+"user/groups",{"sessiontoken":sessiontoken},function(data){
				if(data.status==1){
					if(data.results.data.length==0){
						location.href='miao_menu.html?role='+that.bj+'#/menuNo'
                           return
  			        }else{
                    that.qysrc=true
  			// 设置默认项目
  			// 只要登录了就不可能是空                                 
          var user1=JSON.parse(user)
          for (var key in user1) {

          if(that.datas.objectId==key){

                user1[key]=that.datas.default_group//$store.state.common_user.default_group
                window.localStorage.setItem('default_group',JSON.stringify(user1))
                default_group=that.datas.default_group//that.$store.state.common_user.default_group
                groupId=that.datas.default_group
                // 现在设置成了团队项目，则判断团队信息的苗圃场字段是否大于0
                if(that.datas.default_group_ground_count>0){
                	if(location.href.indexOf('miao_mpz')!=-1){
														// 2.查看默认企业或者团队或者个人项目下默认的苗圃场
														common_default_mpc(default_group,function(data4){
															JSONS(data4,'查看团队/企业属下的苗圃埸')

														         var names0=data4.results.data[0].gg_name
														          var ids0=data4.results.data[0].objectId
											                		var bb=''
											                		if(that.$route.params.biaoti==1){
											                			bb='/tjxmm/1/9/adds'
											                		}else if(that.$route.params.biaoti==2){ 
											                			bb='/qbmm/2'
											                		}else if(that.$route.params.biaoti==3){
											                			bb='/yfb/3'
											                		}else if(that.$route.params.biaoti==4){
											                			bb='/wfb/4'
											                		}   
											                		var hrefs='miao_mpz.html#/hasmpc/'+encodeURI(names0)+'/'+ids0+bb
											                		location.replace(hrefs)
											                		// 留有足够的时间去替换地址栏
											                		  setTimeout(function(){
											                	    	location.reload(hrefs)
											                	    },500)         	
														})
 
                	}else{
                		// that.master=1
                	   // 刷新当前页面
                	   location.reload()
                	}
                	
                	console.log('可以留在本页面')
                }else{
                	that.master=0
                	if(location.href.indexOf('miao_mpz')!=-1){
                		location.href='../parent/index.html?role=bai#/detail/tj/0'
                		// return
                	}
                	

  			        
                }
            }
          }
  			        }
				}
				
// location.reload()
			})
  			
  	
  		}else{
  			// alert('true')
  		//开的时候，让他变关
  			this.qysrc=false
  			var user1=JSON.parse(user)
          for (var key in user1) {
          if(this.datas.objectId==key){
                user1[key]=0
                window.localStorage.setItem('default_group',JSON.stringify(user1))
                default_group=0
                groupId=0
                // 现在设置成了个人项目，则判断个人信息的苗圃场字段是否大于0
                // 1.如果当前是位于菜单栏，让他回到首页
                if(location.href.indexOf('menuYes')!=-1){
                	    if(that.bj=='hei'){
                	    	// 跳去卖家的全部苗木
                	    	location.href='miao_mpz.html#/hasmpc/'+that.MPCname+'/'+that.MPCid+'/qbmm/2'
                	    }else if(that.bj=='bai'){
                	    	// 跳去买家的页面
                	    	location.href='../parent/index.html?role=bai#/detail/tj/0'
                	    }
                	  return	
                	}
                // 2.如果不是菜单栏
                if(that.datas.private_group.ground_count>0){
                	 	if(location.href.indexOf('miao_mpz')!=-1){
								                      // 2.查看默认企业或者团队或者个人项目下默认的苗圃场
														common_default_mpc(default_group,function(data4){
															JSONS(data4,'查看团队/企业属下的苗圃埸')
														          var names0=data4.results.data[0].gg_name
														          var ids0=data4.results.data[0].objectId
											                		var bb=''
											                		if(that.$route.params.biaoti==1){
											                			bb='/tjxmm/1/9/adds'
											                		}else if(that.$route.params.biaoti==2){ 
											                			bb='/qbmm/2'
											                		}else if(that.$route.params.biaoti==3){
											                			bb='/yfb/3'								
											                		}else if(that.$route.params.biaoti==4){
											                			bb='/wfb/4'
											                		}
											                		var hrefs='miao_mpz.html#/hasmpc/'+encodeURI(names0)+'/'+ids0+bb
											                	    location.replace(hrefs)
											                	    setTimeout(function(){
											                	    	location.reload(hrefs)
											                	    },500)											                	            	
											                	                	
														})
                		
                	}else{
                		// that.master=1
                	   // 刷新当前页面
                	   location.reload()
                	}
                	// // 刷新当前页面
                	//  location.reload()
                	// console.log('可以留在本页面')
                	// that.master=1
                }else{
                	that.master=0
                	if(location.href.indexOf('miao_mpz')!=-1){
                		location.href='../parent/index.html?role=bai#/detail/tj/0'
                		// return
                	}
                }
            }
          }
// location.reload()
  		}
  	},
		 // 鼠标离开我的苗圃的时候弹出框消失
      closes:function(){
        this.open_miaopu=false;
        this.index=-1
       this.index1=-1
	   this.xian=-1
       
      },
      // 鼠标放上li的时候
       move:function(e){
          this.index1=$(e.currentTarget).index()
       },
		// 1.我的苗圃点击事件
      // 鼠标放上我的苗圃的时候弹出框出现
      miaopu:function(){
       this.open_miaopu=true;
      },
        // 鼠标放上头像的时候弹出个人资料弹出框
        gerenziliaoOpens: function(e) {
            this.gerenziliao = true
        },
		// 鼠标离开头像的时候个人资料弹出框消失
        gerenziliaoCloses: function(e) {
            this.gerenziliao = false
			this.xian=-1
        },
        // 退出账号到登录页面
        homes: function() {
        	console.log('退出账号')
 if(this.$route!=undefined){
 	        if(this.$route.name=='adds1'||this.$route.name=='adds'){
    		                Showbo.Msg.confirm('离开当前页面，将不保存苗木信息，确定离开？',function(flag){
    			                          if(flag=='yes'){
                                          console.log('你点击了确定!');
                                            // localStorage.clear();
                                            localStorage.removeItem("user_id")
                                            // 获取切换苗圃场的时候缓存中的苗圃场的id和名字，如果不为空就用这个去发请求，如果为空就取第一个苗圃场id
                                            // 如果切换了账号则要清空这个缓存中的id和名字
                                            // sessionStorage.removeItem("MPCName")
                                            // sessionStorage.removeItem("MPCId")
                                            location.href = "../detail/miao_logins.html"
                                          }else if(flag=='no'){
                                           console.log('你点击了取消!');
                                          }	
    		                    })
    		            }else{
    		   		 		// localStorage.clear();
    		   		 		localStorage.removeItem("user_id")
                       // 获取切换苗圃场的时候缓存中的苗圃场的id和名字，如果不为空就用这个去发请求，如果为空就取第一个苗圃场id
                       // 如果切换了账号则要清空这个缓存中的id和名字
                       // sessionStorage.removeItem("MPCName")
                       // sessionStorage.removeItem("MPCId")
                       location.href = "../detail/miao_logins.html"
    		   		 	}
    	            }else{
    	               // localStorage.clear();
    	               localStorage.removeItem("user_id")
                       // 获取切换苗圃场的时候缓存中的苗圃场的id和名字，如果不为空就用这个去发请求，如果为空就取第一个苗圃场id
                       // 如果切换了账号则要清空这个缓存中的id和名字
                       // sessionStorage.removeItem("MPCName")
                       // sessionStorage.removeItem("MPCId")
                       location.href = "../detail/miao_logins.html"
    	            }
            
        },

  
    },
    // 
    mounted: function() {
 var that = this

    	if(this.$route!=undefined){
if(this.$route.path.split('/')[1]=='nompc'){
	this.bj='bai'
}}
       
        if (window.localStorage.getItem('user_id') != null) {
            this.user_id = window.localStorage.getItem('user_id');
        }
        if (window.localStorage.getItem('user_phone') != null) {
            this.user_phone = window.localStorage.getItem('user_phone');
        }

        // 个人资料
        $.get(Boss+"user/info", {
            "sessiontoken": sessiontoken
        }, function(data) {
			console.log(data,'导航栏的请求个人信息')
			common_friend=data.results.avatar.url
            that.datas = data.results
             if(window.localStorage.getItem("default_group")!=null){
    	                                                         // 只要登录了就不可能是空
                                                               var user=window.localStorage.getItem('default_group')
                                                                  var user1=JSON.parse(user)
                                                                   for (var key in user1) {
                                                                       // 1.如果有记录也有登录过
                                                                       if(data.results.objectId==key){
                                                                       	if(user1[key]!='0'){
                                                                       		user1[key]=data.results.default_group
                                     
                                                                       		window.localStorage.setItem('default_group',JSON.stringify(user1))
                                                                       	}
                                                                      
                                                                          groupId=user1[key]
                                                                          default_group=user1[key]

// 2.查看默认企业或者团队或者个人项目下默认的苗圃场
common_default_mpc(default_group,function(data){
	JSONS(data,'查看团队/企业属下的苗圃埸')
          that.MPCname=data.results.data[0].gg_name
          that.MPCid=data.results.data[0].objectId
})

                                                                          if(default_group==0){
                                                                          	// A.如果是个人项目则默认关,查找个人项目里面的苗圃场数量，ground_count=0则没有苗圃场，要显示成为苗圃主，否则大于0则代表有苗圃场
                                                                          	  that.qysrc=false
                                                                          	  if(data.results.private_group.ground_count>0){
                                                                          	  	   that.master=1
                                                                          	  }else{
                                                                          	  	   that.master=0
                                                                          	  }
                                                                          	  
                                                                          }else{
                                                                          	// B.如果是企业或团队项目，查找外层的非个人项目里面的default_group_ground_count，同上
                                                                          	that.qysrc=true
                                                                          	if(data.results.default_group_ground_count>0){
                                                                          	  	   that.master=1
                                                                          	  }else{
                                                                          	  	   that.master=0
                                                                          	  }
                                                                          }
                                                                       }
                                                                   }
      }

        })




    }
}