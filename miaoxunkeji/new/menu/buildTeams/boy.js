//买卖家菜单栏 已经建立企业 并且管理的是团队  子帐号管理与企业转换

const boy = {
    template: `
  <div  class="c686A6C overflow" style="margin-bottom:100px;position:relative;margin-top:50px;width:984px;padding:0 20px;">
    <p class=" c4C4C4F f26" style="background:url(../tu-menu/24_59.png) no-repeat center left;padding:15px 0;padding-left: 50px;margin-bottom:30px;">
	子帐号管理
	<span class="c269C88 rf">查看操作历史记录</span>
	</p>
	    






	






<!--1.人员列表   邀请待确认：invite_status=0  已拒绝：invite_status=-1  成功邀请了：invite_status=1 -->
		<div  class="lf" style="width:318px;height:443px;">
		    <p class="c999899 f12" style="background:#F2F2F2;height:25px;line-height:25px;padding:0 15px;">人员名单</p>
		     <ul @scroll="scrolls($event)" v-if="member!=''" class="border f16 rad" @mouseenter="ulenter($event)" @mouseleave="ulleave($event)" style="height:418px;z-index:2;width:316px;position:relative;top:-2px;">
		         <li @click="zuos(item,index,item.role)" v-for="(item,index) in member" @mouseenter="memberindex=index" @mouseleave="memberindex=-1" :class="{bgF2F2F2:memberindex==index}" class="c676867 border-b cursor"  style="position:relative;height:70px;">
				<div style="width:53px;height:53px;left:10px;border-radius:50%;" class="overflow czjz" >
				        <img  @load="adjust($event)"  :src="item.user.avatar.url!=undefined&&item.user.avatar.url!=''?item.user.avatar.url:'../tu-menu/70.png'" class="jz">
				</div>
				<div class="czjz " style="left:85px;">
				  <p style="height:20px;">{{item.user.nickname==''?item.mobile:item.user.nickname}} 
				          <span class="c5FB246 f12" v-if="item.role=='owner'">(企业拥有者)</span>
				          <span class="cC86731 f12" v-if="item.role=='manager'">(企业管理者)</span>
				          <span class="cC86731 f12" v-if="item.invite_status==0&&item.user.objectId!=''">(邀请待确认)</span>
				          <span class="cBF4040 f12" v-if="item.invite_status==-1">(已拒绝邀请)</span>
				          <span class="c999899 f12" v-if="item.user.objectId==''"">(未注册用户)</span>
				  </p>
				  <p class="f12 c999899" v-if="item.remark!=''">备注名：{{item.remark}}</p>
				</div>
				      
				 <div v-if="current==index" style="position:absolute;left:0;top:0;border:3px solid #269C88;height:65px;"></div>      
				 </li>
				 <li class="f13">
				        <div style="color:#999899;background:#f2f2f2;height:60px;line-height:60px;" class="center">{{page>page_count||page_count==undefined?'暂无更多人员信息~':'加载更多'}}</div>
				 </li>
		     </ul>
		</div>




<!--2.信息与权限设置   邀请待确认：invite_status=0  已拒绝：invite_status=-1  成功邀请了：invite_status=1 -->		  		     
<div v-if="you==true" class="border you lf rad" style="width:316px;height:443px;margin-left:15px;">
 <p class="c999899 f12" style="background:#F2F2F2;height:25px;line-height:25px;padding:0 15px;">信息与权限设置</p>
		     <div class="f18">
			          <p style="height:55px;position:relative;">
					      <span class="czjz" style="left:20px;">名称: {{youitem.user.nickname==''?youitem.mobile:youitem.user.nickname}}
                                   <span class="c5FB246 f12" v-if="youitem.role=='owner'">(企业拥有者)</span>
				                   <span class="cC86731 f12" v-if="youitem.role=='manager'">(企业管理者)</span>
				                   <span class="cC86731 f12" v-if="youitem.invite_status==0&&youitem.user.objectId!=''">(邀请待确认)</span>
				                   <span class="cBF4040 f12" v-if="youitem.invite_status==-1">(已拒绝邀请)</span>
				                   <span class="c999899 f12" v-if="youitem.user.objectId==''"">(未注册用户)</span>
					               </span>
					  </p>
					  <p   style="height:25px;position:relative;">
					       <span class="czjz" style="left:20px;">备注名：</span>
					       <!--邀请待确认：invite_status=0 已拒绝：invite_status=-1  都不能修改备注-->
						   <input :style="{border:canwrite==true?'1px solid #f2f2f2':'none'}" :readOnly="canwrite==true?false:true" :value="youitem.remark" type="text" src="../tu-menu/40.png" placeHolder="未填写" class="beizhuming f16  rad czjz none c999899" style="right:80px;width:150px;height:23px;padding:0 10px;">
					         <!--添加备注名   1.前提条件：已拒绝邀请,未注册用户,邀请待确认不能编辑 2.拥有者可以改所有包括自己；管理者可以改普通成员；普通成员都不能改-->
					         <span v-if="youitem.remark==''&&canwrite==false&&youitem.invite_status!=0&&youitem.invite_status!=-1&&youitem.user.objectId!=''&&(roles==1)||(roles==2&&role==3)" @click="getfocus"  class="czjz cursor c269C88 f16" style="right:20px;">
					           <img   src="../tu-menu/71.png" >添加
					         </span>
					         <!--更改备注名-->
					         <span v-if="youitem.remark!=''&&canwrite==false&&youitem.invite_status!=0&&youitem.invite_status!=-1&&youitem.user.objectId!=''&&(roles==1)||(roles==2&&role==3)" @click="getfocus"  class="czjz cursor c269C88 f16" style="right:20px;">
					           <img   src="../tu-menu/71.png" >更改
					         </span>
					          <!--完成备注名-->
					         <span v-if="canwrite==true&&youitem.invite_status!=0&&youitem.invite_status!=-1&&youitem.user.objectId!=''&&((roles==1)||(roles==2&&role==3))" @click="finished($event,youitem.objectId)"  class="czjz cursor c269C88 f16" style="right:20px;">
					           <img   src="../tu-menu/71.png" >完成
					         </span>
						  
					  </p>
					  <hr style="width:280px;margin:15px 0 15px 20px;background-color:#f2f2f2;">
					  <p style="padding-left:20px;margin-bottom:45px;" >个人联系电话: {{youitem.user.mobilePhoneNumber==''?youitem.mobile:youitem.user.mobilePhoneNumber}}</p>
					  <div class="center" >
					   <!--0已拒绝邀请  再次邀请 -->
							   <img @click="addboys(youitem.mobile)" v-if="youitem.invite_status==-1&&(roles!=3)" style="margin: 0 auto;margin-bottom:20px;display:block;" src="../tu-menu/72.png" class="cursor">
					   <!--1企业拥有者   转交企业 -->
					           <img v-if="roles==1&&role==1" style="margin-bottom:20px;" @click="delivers($event)" :src="zjqy" class="cursor">
					            <img v-if="(roles==2&&role==1)||(roles==3&&role==1)" style="margin-bottom:20px;"  :src="zjqy0" class="cursor">
						<!--2权限拥有者  移除企业 -->
							   <img @click="removes($event)" v-if="(roles==1&&role!=1)||(roles==2&&role!=1&&role!=2)" style="margin-bottom:45px;" src="../tu-menu/24_117.png" class="cursor">
					  </div>
					  
			<ul v-if="zjqyPeople==true" class="border-t f16" style="z-index:2;width:318px;position:relative;top:-2px;height:182px;overflow-y:scroll;">
		         <li class="c676867 border-b " style="padding-left:88px;position:relative;height:70px;line-height:70px;background:url(../tu-menu/24_08.png) no-repeat 20px 50%;">
				  王丹江口市
				  <span @click="mans($event,0)" :class="{cC86731s:cheng==0}"  class="czjz cD2D6D6 cursor" style="right:20px;">选择</span>
				 </li>
				 <li  class="c676867 border-b " style="padding-left:88px;position:relative;height:70px;line-height:70px;background:url(../tu-menu/24_08.png) no-repeat 20px 50%;">
				  风刀霜剑
				  <span @click="mans($event,1)"  :class="{cC86731s:cheng==1}"   class="czjz cD2D6D6 cursor" style="right:20px;">选择</span>
				 </li>
				 <li class="c676867 border-b " style="padding-left:88px;position:relative;height:70px;line-height:70px;background:url(../tu-menu/24_08.png) no-repeat 20px 50%;">
				  王点击
				  <span @click="mans($event,2)"  :class="{cC86731s:cheng==2}"  class="czjz cD2D6D6 cursor" style="right:20px;">选择</span>
				 </li>
				 <li class="c676867 border-b " style="padding-left:88px;position:relative;height:70px;line-height:70px;background:url(../tu-menu/24_08.png) no-repeat 20px 50%;">
				  啊十分好看
				  <span @click="mans($event,3)"  :class="{cC86731s:cheng==3}"  class="czjz cD2D6D6 cursor" style="right:20px;">选择</span>
				 </li>
				 <li class="c676867 border-b " style="padding-left:88px;position:relative;height:70px;line-height:70px;background:url(../tu-menu/24_08.png) no-repeat 20px 50%;">
				  数据的
				  <span @click="mans($event,4)"  :class="{cC86731s:cheng==4}"  class="czjz cD2D6D6 cursor" style="right:20px;">选择</span>
				 </li>
				  <li class="c676867 " style="padding-left:88px;position:relative;height:70px;line-height:70px;background:url(../tu-menu/24_08.png) no-repeat 20px 50%;">
				  王尼玛
				  <span @click="mans($event,5)"  :class="{cC86731s:cheng==5}"  class="czjz cD2D6D6 cursor" style="right:20px;">选择</span>
				 </li>
				 
				 
		     </ul>
<!--1.拒绝，待确定，未注册不显示权限列表，2.拥有者操作管理者,普通成员权限列表 3.管理人员操作普通人员权限列表-->
            <ul class="f16 c4C4C4F" v-if="youitem.invite_status!=0&&youitem.invite_status!=-1&&youitem.user.objectId!=''&&((roles==1&&role!=1)||(roles==2&&role==3))">
              <li style="height:50px;line-height:50px;border-top:1px solid #f2f2f2;padding-left:20px;" class="relative">买家权限 <span @click="whoers(1)" class="c269C88 czjz cursor" style="right:20px;">编辑</span></li>
              <li style="height:50px;line-height:50px;border-top:1px solid #f2f2f2;padding-left:20px;" class="relative">卖家权限 <span @click="whoers(2)" class="c269C88 czjz cursor" style="right:20px;">编辑</span> </li>
              <li style="height:50px;line-height:50px;border-top:1px solid #f2f2f2;padding-left:20px;" class="relative">企业与团队管理  <span @click="whoers(3)" class="c269C88 czjz cursor" style="right:20px;">编辑</span></li>
            </ul>
			 </div>
</div>

<!--3.开关权限-->
		<div v-if="whoer!=-1" class="rf border" style="width:316px;height:443px;margin-left:15px;">
		    <p class="c999899 f12" style="background:#F2F2F2;height:25px;line-height:25px;padding:0 15px;">{{whoer=='buyer'?'买家':(whoer=='seller'?'卖家':'企业与团队')}}权限</p>
		    <ul class="f16 c4C4C4F" style="padding:0 20px;">
		    <!--1.买家权限 绿色-->
              <li v-if="whoer==1" v-for="(item,index) in buyer" style="height:50px;line-height:50px;border-bottom:1px solid #f2f2f2;padding-left:20px;" class="relative">{{item}}
                <img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}" @click="greens($event,'')" src="../tu-menu/24_36.png" class="czjz cursor testsG" style="right:10px;">
              </li>
            <!--2.卖家权限 橙色-->
              <li v-if="whoer==2" v-for="(item,index) in seller" style="height:50px;line-height:50px;border-bottom:1px solid #f2f2f2;padding-left:20px;" class="relative">{{item}}
               <img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="oranges($event,'')" src="../tu-menu/24_68.png" class="czjz cursor testsO" style="right:10px;">
              </li>
            <!--3.企业与团队管理 蓝色-->
              <li v-if="whoer==3" v-for="(item,index) in companyer" style="height:50px;line-height:50px;border-bottom:1px solid #f2f2f2;padding-left:20px;" class="relative">{{item}}
              <img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="blues($event,'','no')" :src="index==1?'../tu-menu/24_72.png':'../tu-menu/24_50.png'" class="czjz cursor testsB" style="right:10px;">
              </li>
            </ul>
		</div>

		 <!--企业拥有者   转交企业的弹出框 -->
	<div v-if="deliver==true" style="z-index: 5;background:url(../tu-menu/38.png);bottom: 0px;position:fixed;height:229px;width:100%;left:0;">
       <div  style="padding-left:50px;height:229px;width:976px;" class="lf f18 cF6 left spjz2" >
		     <p style="margin-top:50px;">企业拥有者享有企业最高权限，您可以把企业转交至您选定的企业子帐号，并使它成为企业拥有者。</p>
			 <p>一旦成功转交，您将不再享有企业拥有者权限。</p>
			 <img class="cursor "  @click="closes($event)" src="../tu-menu/21_57.png" style="position:absolute;top:20px;right:40px;" >
		</div>
    </div>
      <!--深色确认转交的弹出框 -->
    <div v-if="tips==true" style="z-index: 5;background:url(../tu-menu/38.png);bottom: 0px;position:fixed;height:229px;width:100%;left:0;">
       <div  style="height:229px;width:976px;padding-left:50px;" class="lf f18 cF6 left spjz2" >
		     <p style="margin-top:50px;">企业拥有者享有企业最高权限，您可以把企业转交至您选定的企业子帐号，并使它成为企业拥有者。</p>
			 <p>一旦成功转交，您将不再享有企业拥有者权限。</p>
			 <img class="cursor "  @click="saves($event)" src="../tu-menu/24_96.png" style="position:absolute;bottom:20px;right:20px;" >
			  <img class="cursor "  @click="qxs($event)" src="../tu-menu/24_110.png" style="position:absolute;bottom:20px;right:165px;" >
		</div>
    </div>
      <!--企业权限者   移除企业的弹出框 -->
     <div  v-if="remove==true" style="z-index: 5;background:url(../tu-menu/38.png);bottom: 0px;position:fixed;height:229px;width:100%;left:0;">
         <div style="height:229px;width:976px;padding-left:50px;" class="lf f18 cF6 left spjz2" >
		     <p style="margin-top:50px;">作为企业拥有者，您可以从企业中移除子帐号。被移除的子帐号将不能查看或</p>
			 <p>参与企业管理，如子帐号在企业中仍有在进行中的工作，这些工作的联系方式默认会被</p>
			  <p>替换成企业联系电话与企业联系人。</p>
			 <img class="cursor "  @click="removes1($event,youitem.objectId)" src="../tu-menu/24_91.png" style="position:absolute;bottom:20px;right:20px;" >
			  <img class="cursor "  @click="qxs1($event)" src="../tu-menu/24_110.png" style="position:absolute;bottom:20px;right:165px;" >
		</div>
    </div>
	
		
  </div>

  `,
    data: function() {
        return {

        	page_count:0,//数据的总页数
        	page:1,//企业转换列表的页数
        	whoer:-1,//点击编辑后显示哪个循环数组
        	buyer:['初选','验苗','运输','验收','确认收货','查看与回复消息'],
            seller:['承接与编辑订单','发货','编辑苗圃场','查看与回复消息'],
            companyer:['子账号管理','编辑企业与团队信息'],
        	canwrite:false,//完成编辑按钮
        	current:-1,//当前的左边有绿色的条
			// datas:'',
			youitem:'',//点击中间的某一个人，然后要保存当前的这个人的信息
			member:'',//[1,2,3]
            bgindex:0,//公司下拉的默认下标
			memberindex:-1,//中间的默认下标
			company:'',//公司select的绑定变量
			srcs:'../tu-menu/24_26.png',//上下箭头
            zuo: false, //控制左边下拉公司的数据
			you: false ,//控制中间块的
			kaiguan:false,//控制开关模块的显示和隐藏
			roles:'1',//角色  1是拥有者可以转交企业    2是权限者可以移除企业    -1是无权限观看者右边消失
			role:-1,//角色  点击编辑的时候判断点击的是管理者还是非管理者还是拥有者
			deliver:false,//企业拥有者的点击转交企业按钮的时候下方的透明 提示框弹出框
			tips:false,//确认转交 提示框弹出框
			remove:false,//移除企业的提示框弹出框
			zjqy:'../tu-menu/24_32.png',//转交企业按钮图片
			zjqy0:'../tu-menu/24_112.png',//转交企业灰色按钮图片
			zjqyPeople:false,//转交人员名单出现
			cheng:-1//选择转交的成员

        }
    },
     props:['datas'],//gaishu请求当前默认组的内容
	components:{"footers":footers},
    methods: {
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
        	// 滚动加载人员名单
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
         	
               // 界面最左边的某个企业或者团队的人员名单
				 $.get(Boss+"group/"+this.$route.params.objectId+"/members",{"sessiontoken":sessiontoken,'limit':common_limit20,'page':that.page},function(data){
				 	if(data.status==1){
                                if(data.results.data.length>0){
                                for (var i = 0; i < data.results.data.length; i++) {
                                  that.member.push(data.results.data[i])
                                  
                                    }  
				    				    
                                }
                              
                             }else{
		    		                    alert(data.results.message)
		    	                  }  		

			      })  
         }                        
	},
     	// 再次邀请的时候跳到新页面
  	addboys(phone){
         window.open('miao_menu.html?role='+this.$store.state.header+'#/menuYes/addboy/'+this.$route.params.objectId+'/'+phone+'/3')
  	},
    	// 权限的编辑按钮
    whoers(number){      
       	   this.whoer=number
    },
    //鼠标离开进入的时候显示隐藏滚动条
    ulenter(e){
    	$(e.currentTarget).addClass('overflowy')
    },
    ulleave(e){
    	$(e.currentTarget).removeClass('overflowy')
    },
    // 中间的管理设置
		zuos(item,index,who){
			this.current=index
			// this.you=true
			// this.youitem=item
			 this.canwrite=false//显示完成按钮
			 			// 点击的时候保存当前的个人的信息
		this.youitem=item
		this.zjqyPeople=false
		this.zjqy='../tu-menu/24_32.png'
		// 先默认全开半透明

			// // 先收起来
   //       this.you=false
         //1. 如果当前登录的是拥有者
         if(this.roles==1){
            this.you=true//开关上面的块        1.备注名（可编辑）  2.[转交企业]按钮（可操作）  3开关不可看     权限列表（无）
         	if(who=='owner'){
         		console.log('拥有者')         	
         		this.role=1//当前列表被点击的人名是拥有者
            }else if(who=='manager'){
            	console.log('管理者')
            	this.role=2//当前列表被点击的人名是拥有者
            }else if(who=='member'){
            	console.log('非管理者')
            	this.role=3//当前列表被点击的人名是拥有者
            }
         }else if(this.roles==2){
      //2. 如果当前登录的是管理者
            this.you=true//开关上面的块        1.备注名（可编辑）  2.[转交企业]按钮（可操作）  3开关不可看     权限列表（无）
         	if(who=='owner'){
         		console.log('拥有者')         	
         		this.role=1//当前列表被点击的人名是拥有者
            }else if(who=='manager'){
            	console.log('管理者')
            	this.role=2//当前列表被点击的人名是拥有者
            }else if(who=='member'){
            	console.log('非管理者')
            	this.role=3//当前列表被点击的人名是拥有者
            }
         }else if(this.roles==3){
      //2. 如果当前登录的是非管理者
            this.you=true//开关上面的块        1.备注名（可编辑）  2.[转交企业]按钮（可操作）  3开关不可看     权限列表（无）
         	if(who=='owner'){
         		console.log('拥有者')         	
         		this.role=1//当前列表被点击的人名是拥有者
            }else if(who=='manager'){
            	console.log('管理者')
            	this.role=2//当前列表被点击的人名是拥有者
            }else if(who=='member'){
            	console.log('非管理者')
            	this.role=3//当前列表被点击的人名是拥有者
            }
         }
          console.log(this.roles,this.role) 
		},
		// 修改备注的更改和添加按钮，让输入框获取光标
		getfocus:function(e,memberId){
          $('.beizhuming').focus();
         this.canwrite=true//显示完成按钮
        
		},
		// 修改备注的完成按钮
		finished:function(e,memberId){
         // this.you=false
         var that=this
         // 按钮已经通过显示和隐藏控制了，能点到的肯定是能点击的
         $.post(Boss+'groupmembers/'+memberId,{'sessiontoken':sessiontoken,'remark':$('.beizhuming').val()},function(data){
         	if(data.status==1){
         		console.log('修改备注成功')
         		that.canwrite=false
         		// 修改数据源
         		that.member[that.current].remark=$('.beizhuming').val()
         	}else{
         		alert(data.results.message)
         	}
         })
        
      
		},
		// 右边的移除企业
		removes:function(e){
		 if((this.roles==1)||(this.roles==2&&this.role==3)){
		 	 this.remove=true
		 	}else{
		 		alert("您没有权限移除企业")
		 	}
        
		},
		// 移除企业取消
		qxs1:function(e){
         this.remove=false
		//this.you=false
		},
		// 移除企业确认移除
		removes1:function(e,memberId){
        var that=this
		// 移除团队/企业 下的成员
		     $.ajax({
                    url:Boss+"groupmembers/"+memberId,
                    type: 'DELETE',
                    data:{
                      "sessiontoken":sessiontoken
                    },
                    success: function(data) {
                       that.remove=false
		               //更新中间的数据并让右边的消失
		               that.you=false
		               // 让左边的数据消失
		              
		               		 that.member.splice(that.current,1)
		               	
		               	
		               
		              
                   }
                 });
    

		},
		// 取消
		qxs:function(e){
         this.tips=false
		 this.zjqy='../tu-menu/24_78.png'//深色的确认转交
		},
		// 确认转交
		saves:function(e){
         this.tips=false
		//  更新中间的数据并让右边的消失
		this.you=false
		},
		// 转交人员选择
		mans:function(e,index){
         this.cheng=index
		 this.zjqy='../tu-menu/24_78.png'//深色的确认转交
		},
		// 企业拥有者的点击转交企业按钮弹出框的关闭叉子
		closes:function(e){
         this.deliver=false
		  this.zjqy='../tu-menu/42.png'//深色的继续转交
		},
		// 企业拥有者的点击转交企业按钮
		delivers:function(e){
			// 如果不是企业拥有者就不能移交企业
			if(this.roles!=1){
				alert("您没有权限移交企业！")
				return
			}
		//  转交企业按钮图片让底部提示框出现
		 if(this.zjqy=='../tu-menu/24_32.png'){//  转交企业
              this.deliver=true
			  this.zjqy='../tu-menu/24_48.png'//浅色的继续转交
		 }else if( this.zjqy=='../tu-menu/42.png'){//深色的继续转交
        // 深色继续转交按钮图片 让转交人员出现
		   this.zjqyPeople=true
		    this.zjqy='../tu-menu/24_65.png'//浅色的确认转交
		 }else if( this.zjqy=='../tu-menu/24_78.png'){//深色的确认转交
        //    然底部的确认转交的提示框出现
		      this.tips=true
		 }
		
		},
       

		// 企业与团队管理的开关  蓝色
		blues:function(e,zong,no){
return
			// 这个子账号管理只有拥有者可以控制
			if(no!=undefined&&no=='no'){
				if(this.roles!=1){
					alert("您没有权限控制子账号开关！")
					return
				}
			}
			if(this.roles==1){
				console.log("拥有者点击管理员和非管理员都可以操作按钮开关")
			}else if(this.roles==2&&(this.role==1||this.role==2)){
				alert("您没有权限控制开关！")
				return
				console.log("管理者点击拥有者和管理员都不可以操作按钮开关")
			}else if(this.roles==3){
				alert("您没有权限控制开关！")
				return
				console.log("非管理者都不可以操作按钮开关")
			}
			if($(e.currentTarget).attr("src")=='../tu-menu/24_50.png'){
                   $(e.currentTarget).attr("src",'../tu-menu/24_72.png')
				//如果点击的是总开关 的开则让总开关的从属 全部开   否则点击的是从属开关的开  则让总开关开
				    if(zong=='zong'){
                         $(".youBlue>li>img").attr("src",'../tu-menu/24_72.png')
				   }else{
					    $(".last").attr("src",'../tu-menu/24_72.png')
				   }
			}else{
				  $(e.currentTarget).attr("src",'../tu-menu/24_50.png')
				//如果点击的是总开关 的关则让总开关的从属 全部关   否则点击的是从属开关的关  则让总开关关
				  if(zong=='zong'){
                         $(".youBlue>li>img").attr("src",'../tu-menu/24_50.png')

				   }else{
					   if( $(".youBlue>li>img[src='../tu-menu/24_50.png']").length==2){
						    $(".last").attr("src",'../tu-menu/24_50.png')
					   }
				   }
			}
		},
		// 卖家权限  橙色
		oranges:function(e,zong){
return
			if(this.roles==1){
				console.log("拥有者点击管理员和非管理员都可以操作按钮开关")
			}else if(this.roles==2&&(this.role==1||this.role==2)){
				alert("您没有权限控制开关！")
				return
				console.log("管理者点击拥有者和管理员都不可以操作按钮开关")
			}else if(this.roles==3){
				alert("您没有权限控制开关！")
				return
				console.log("非管理者都不可以操作按钮开关")
			}
			if($(e.currentTarget).attr("src")=='../tu-menu/24_50.png'){
                   $(e.currentTarget).attr("src",'../tu-menu/24_68.png')
				   	//如果点击的是总开关 的开则让总开关的从属 全部开   否则点击的是从属开关的开  则让总开关开
				    if(zong=='zong'){
                         $(".youOrange>li>img").attr("src",'../tu-menu/24_68.png')
				   }else{
					    $(".second").attr("src",'../tu-menu/24_68.png')
				   }
			}else{
				  $(e.currentTarget).attr("src",'../tu-menu/24_50.png')
				  //如果点击的是总开关 的关则让总开关的从属 全部关   否则点击的是从属开关的关  则让总开关关
				   if(zong=='zong'){
                         $(".youOrange>li>img").attr("src",'../tu-menu/24_50.png')
				   }else{
					   if( $(".youOrange>li>img[src='../tu-menu/24_50.png']").length==4){
						    $(".second").attr("src",'../tu-menu/24_50.png')
					   }
				   }
			}
		},
		// 买家权限   绿色
		greens:function(e,zong){
return
			if(this.roles==1){
				console.log("拥有者点击管理员和非管理员都可以操作按钮开关")
			}else if(this.roles==2&&(this.role==1||this.role==2)){
				alert("您没有权限控制开关！")
				return
				console.log("管理者点击拥有者和管理员都不可以操作按钮开关")
			}else if(this.roles==3){
				alert("您没有权限控制开关！")
				return
				console.log("非管理者都不可以操作按钮开关")
			}

			if($(e.currentTarget).attr("src")=='../tu-menu/24_50.png'){
                   $(e.currentTarget).attr("src",'../tu-menu/24_36.png')
				   	//如果点击的是总开关 的开则让总开关的从属 全部开   否则点击的是从属开关的开  则让总开关开
				   if(zong=='zong'){
                         $(".youGreen>li>img").attr("src",'../tu-menu/24_36.png')
				   }else{
					    $(".first").attr("src",'../tu-menu/24_36.png')
				   }
			}else{
				  $(e.currentTarget).attr("src",'../tu-menu/24_50.png')
				  //如果点击的是总开关 的关则让总开关的从属 全部关   否则点击的是从属开关的关  则让总开关关
				  if(zong=='zong'){
                         $(".youGreen>li>img").attr("src",'../tu-menu/24_50.png')
				   }else{
					   if( $(".youGreen>li>img[src='../tu-menu/24_50.png']").length==6){
						    $(".first").attr("src",'../tu-menu/24_50.png')
					   }
				   }
			}


			
		},
		// 总开关控制下面的从属开关
		lengths:function(e,methods,css){
return;
			if(this.roles==1){
				console.log("拥有者点击管理员和非管理员都可以操作按钮开关")
			}else if(this.roles==2&&(this.role==1||this.role==2)){
				alert("您没有权限控制开关！")
				return
				console.log("管理者点击拥有者和管理员都不可以操作按钮开关")
			}else if(this.roles==3){
				alert("您没有权限控制开关！")
				return
				console.log("非管理者都不可以操作按钮开关")
			}
			console.log(methods,css)
			if(methods=='greens'){
                this.greens(e,'zong')
			
			}
			if(methods=='oranges'){
                this.oranges(e,'zong')
			}
			if(methods=='blues'){
                this.blues(e,'zong')
			}
            
			
		}
		
    },

    mounted: function() {
// 能到这个页面的肯定是企业或者团队的
               var that=this
               // 界面最左边的某个企业或者团队的人员名单
				 $.get(Boss+"group/"+this.$route.params.objectId+"/members",{"sessiontoken":sessiontoken,'limit':common_limit20,'page':1},function(data){
				if(data.status==1){
					that.member=data.results
					that.page_count=data.results.page_count//总页数
					console.log('某个企业或者团队的人员名单',that.member)
					for (var i = 0; i < that.member.length; i++) {
						if(common_user.objectId==that.member[i].user.objectId){
							 // 循环查找个人资料里面的id等于成员里面的id
							 if(that.member[i].role=='owner'){
                               // 当前登录者是拥有者
                               that.roles=1
							 }else if(that.member[i].role=='manager'){
                               // 当前登录者是管理者
                               that.roles=2
							 }else if(that.member[i].role=='member'){
                               // 当前登录者是普通成员
                               that.roles=3
							 }
						}
					}
				}else{
					alert(data.results.message)
				}

			      })
                

    }
}




// 测试开关  1.html里面的.testsO,.testsG,.testsB{opacity: 0.5 !important;}   2.按钮的点击事件的return
// 测试开关子账号   默认关  默认其他开关是全开