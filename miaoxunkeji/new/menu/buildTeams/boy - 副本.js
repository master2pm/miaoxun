//买卖家菜单栏 已经建立企业 并且管理的是团队  子帐号管理与企业转换

const boy = {
    template: `
  <div v-if="datas!=''" class="c686A6C overflow" style="margin-bottom:100px;position:relative;margin-top:50px;width:984px;padding:0 20px;">
    <p class=" c4C4C4F f26" style="background:url(../tu-menu/24_59.png) no-repeat center left;padding:15px 0;padding-left: 50px;margin-bottom:30px;">
	子帐号管理与企业转换
	<span class="c269C88 rf">查看操作历史记录</span>
	</p>
	    




<!--左边的成员列表-->

		<div class=" zuo lf rad" style="width:318px;">
		     <div class="bai border rad f18" style="z-index:1;position:relative;width:298px;height:70px;line-height:70px;padding-left:20px;">
		          <span class="diandiandian" style="width:80%;display:inline-block;">{{company}}</span>
				  <img @click="zuos($event)" :src="srcs" class="czjz cursor" style="right:25px;">
		     </div>


			 <ul v-if="zuo==true" class="border-b border-l border-r f18 bai rad-bl rad-br" style="z-index:2;width:318px;position:relative;top:-2px;">
		         <li v-for="(item,index) in datas" @click="companys($event,item.name,item.objectId)" @mouseenter="members(item.objectId,index)" :class="{bgs:bgindex==index}" class="overflow cursor diandiandian" style="width:280px;position:relative;height:70px;line-height:70px;padding:0 20px;"> {{item.name}}
				 <span style="bottom:0;width:278px;height:0;" class="spjz border-b"></span>
				 </li>
		     </ul>


		</div>






<!--中间的成员列表   邀请待确认：invite_status=0  已拒绝：invite_status=-1  -->
		<div v-if="member!=''" class=" zhong lf " style="width:318px;margin-left:14px;">
		     <ul class="border f16 rad" style="z-index:2;width:318px;position:relative;top:-2px;">
		         <li v-for="(item,index) in member" @mouseenter="memberindex=index" @mouseleave="memberindex=-1" :class="{bgs:memberindex==index}" class="c676867 border-b "  style="position:relative;height:70px;">
				<div style="width:53px;height:53px;left:10px;border-radius:50%;" class="overflow czjz" >
				        <img :src="item.user.avatar.url!=undefined&&item.user.avatar.url!=''?item.user.avatar.url+'?imageView2/1/w/53/h/53':(datas.type=='company'?'../tu-menu/69.png':(datas.type=='private'?'../tu-menu/70.png':'../tu-menu/68.png'))" class="jz">
				</div>
				<div class="czjz " style="left:85px;">
				  <p style="height:20px;">{{item.user.nickname}}</p>
				  <p class="c5FB246 f12" v-if="item.role=='owner'">(企业拥有者)</p>
				  <p class="cC86731 f12" v-if="item.invite_status==0">(邀请待确认)</p>
				   <p class="cC86731 f12" v-if="item.role=='manager'">(企业管理者)</p>
				    
				</div>
				       <img v-if="index==memberindex"  @click="writes($event,item.role,item)" src="../tu-menu/40.png" class="czjz cursor" style="right:20px;">
				       
				 </li>
		     </ul>
		</div>






<!--右边的头部：移除和转交-->
		<div v-if="you==true" class="border you rf rad" style="width:318px;">
		     <div style="padding-top:20px;" class="f18">
			          <p style="height:55px;position:relative;">
					      <span class="czjz" style="left:20px;">名称: {{youitem.user.nickname}}</span>
					      <!--完成编辑-->
						   <img v-if='(roles==1&&youitem.invite_status!=0&&youitem.invite_status!=-1&&role!=1)||(roles==2&&role==3&&youitem.invite_status!=0&&youitem.invite_status!=-1)'  @click="finished($event,youitem.objectId)" src="../tu-menu/41.png" class="czjz cursor" style="right:20px;">
					  </p>
					  <p v-if='(roles==1&&youitem.invite_status!=0&&youitem.invite_status!=-1&&role!=1)||(roles==2&&role==3&&youitem.invite_status!=0&&youitem.invite_status!=-1)'  style="height:25px;position:relative;">
					       <span class="czjz" style="left:20px;">备注名：</span>
					       <!--邀请待确认：invite_status=0 已拒绝：invite_status=-1  都不能修改备注-->
						   <input  :value="youitem.remark" type="text" src="../tu-menu/40.png" placeHolder="请输入备注名" class="beizhuming f16 border rad czjz none" style="right:20px;width:204px;height:23px;padding:0 10px;">
					  </p>
					  <p style="padding-left:20px;margin:20px 0;">个人联系电话: {{youitem.user.mobilePhoneNumber}}</p>
					  <div class="center" >
					   <!--1企业拥有者   转交企业 -->
					           <img v-if="roles==1&&role==1" style="margin-bottom:20px;" @click="delivers($event)" :src="zjqy" class="cursor">
					            <img v-if="(roles==2&&role==1)||(roles==3&&role==1)" style="margin-bottom:20px;"  :src="zjqy0" class="cursor">
						<!--2权限拥有者  移除企业 -->
							   <img @click="removes($event)" v-if="(roles==1&&role!=1)||(roles==2&&role!=1||(roles==3&&role!=1))" style="margin-bottom:20px;" src="../tu-menu/24_117.png" class="cursor">
					  </div>
					  
			<ul v-if="zjqyPeople==true" class="border-t f16" style="z-index:2;width:318px;position:relative;top:-2px;">
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


			 </div>


<!--右边的下部：开关按钮-->
			 <ul v-if="(roles==1&&role!=1)||(roles==2&&role!=1)||(roles==3&&role!=1)" class="f16 c4C4C4F" >
			      <li class="border-t border-b" style="padding:0 20px;height:50px;line-height:50px;position:relative;">
				        买家权限 
						<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="lengths($event,'greens','youGreen')" src="../tu-menu/24_36.png" class="czjz cursor first testsG" style="right:20px;">
				  </li>
				  <li>
				         <ul class="c999899 youGreen" style="padding:0 20px;" >
						        <li class="border-b" style="height:50px;line-height:50px;position:relative;">
								初选<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}" @click="greens($event,'')" src="../tu-menu/24_36.png" class="czjz cursor testsG" style="right:10px;">
								</li>
								<li class="border-b" style="height:50px;line-height:50px;position:relative;">
								验苗<img  :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}" @click="greens($event,'')" src="../tu-menu/24_36.png" class="czjz cursor testsG" style="right:10px;">
								</li>
								<li class="border-b" style="height:50px;line-height:50px;position:relative;">
								运输<img  :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}" @click="greens($event,'')" src="../tu-menu/24_36.png" class="czjz cursor testsG" style="right:10px;">
								</li>
								<li class="border-b" style="height:50px;line-height:50px;position:relative;">
								验收<img  :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}" @click="greens($event,'')" src="../tu-menu/24_36.png" class="czjz cursor testsG" style="right:10px;">
								</li>
								<li class="border-b" style="height:50px;line-height:50px;position:relative;">
								确认收货<img  :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="greens($event,'')" src="../tu-menu/24_36.png" class="czjz cursor testsG" style="right:10px;">
								</li>
								<li style="height:50px;line-height:50px;position:relative;">
								查看与回复消息<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="greens($event,'')" src="../tu-menu/24_36.png" class="czjz cursor testsG" style="right:10px;">
								</li>
						 </ul>
				  </li>
				  <li class="border-t border-b" style="padding:0 20px;height:50px;line-height:50px;position:relative;">
				        卖家权限 
						<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="lengths($event,'oranges','youOrange')"  src="../tu-menu/24_68.png" class="czjz cursor second testsO" style="right:20px;">
				  </li>
				    <li>
				         <ul class="c999899 youOrange" style="padding:0 20px;">
						        <li class="border-b" style="height:50px;line-height:50px;position:relative;">
								承接与编辑订单<img  :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="oranges($event,'')" src="../tu-menu/24_68.png" class="czjz cursor testsO" style="right:10px;">
								</li>
								<li class="border-b" style="height:50px;line-height:50px;position:relative;">
								发货<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="oranges($event,'')" src="../tu-menu/24_68.png" class="czjz cursor testsO" style="right:10px;">
								</li>
								<li class="border-b" style="height:50px;line-height:50px;position:relative;">
								编辑苗圃场<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="oranges($event,'')" src="../tu-menu/24_68.png" class="czjz cursor testsO" style="right:10px;">
								</li>
								<li class="" style="height:50px;line-height:50px;position:relative;">
								查看与回复消息<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="oranges($event,'')" src="../tu-menu/24_68.png" class="czjz cursor testsO" style="right:10px;">
								</li>
								
						 </ul>
				  </li>
				  <li class="border-t " style="padding:0 20px;height:50px;line-height:50px;position:relative;">
				        企业与团队管理 
						<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="lengths($event,'blues','youBlue')" src="../tu-menu/24_72.png" class="czjz cursor last testsB" style="right:20px;">
				  </li>
				   <li>
				         <ul class="c999899 youBlue" style="padding:0 20px;">
						        <li  class="border-b" style="height:50px;line-height:50px;position:relative;">
								子账号管理<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="blues($event,'','no')" src="../tu-menu/24_50.png" class="czjz cursor testsB" style="right:10px;">
								</li>
								<li  class="" style="height:50px;line-height:50px;position:relative;">
								编辑企业与团队信息<img :style="{opacity:(roles==2&&(role==1||role==2))||roles==3?'0.5':'1'}"  @click="blues($event,'')" src="../tu-menu/24_72.png" class="czjz cursor testsB" style="right:10px;">
								</li>
								
						 </ul>
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
      <!--企业权限者   移除企业的弹出框<footers></footers> -->
     <div  v-if="remove==true" style="z-index: 5;background:url(../tu-menu/38.png);bottom: 0px;position:fixed;height:229px;width:100%;left:0;">
         <div style="height:229px;width:976px;padding-left:50px;" class="lf f18 cF6 left spjz2" >
		     <p style="margin-top:50px;">作为企业拥有者，您可以从企业中移除子帐号。被移除的子帐号将不能查看或</p>
			 <p>参与企业管理，如子帐号在企业中仍有在进行中的工作，这些工作的联系方式默认会被</p>
			  <p>替换成企业联系电话与企业联系人。</p>
			 <img class="cursor "  @click="removes1($event)" src="../tu-menu/24_91.png" style="position:absolute;bottom:20px;right:20px;" >
			  <img class="cursor "  @click="qxs1($event)" src="../tu-menu/24_110.png" style="position:absolute;bottom:20px;right:165px;" >
		</div>
    </div>
		
  </div>

  `,
    data: function() {
        return {
			datas:'',
			youitem:'',//点击中间的某一个人，然后要保存当前的这个人的信息
			member:'',//[1,2,3]
            bgindex:0,//公司下拉的默认下标
			memberindex:-1,//中间的默认下标
			company:'',//公司select的绑定变量
			srcs:'../tu-menu/24_26.png',//上下箭头
            zuo: false, //控制左边下拉公司的数据
			you: false ,//控制右边的编辑的显示和隐藏
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
	components:{"footers":footers},
    methods: {
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
                    url:Boss+" groupmembers/"+memberId,
                    type: 'DELETE',
                    data:{
                      "sessiontoken":sessiontoken
                    },
                    success: function(data) {
                       that.remove=false
		               //更新中间的数据并让右边的消失
		               that.you=false
                   }
                 });
    

		},
		// 右边的完成编辑
		finished:function(e,memberId){
         this.you=false
         // 按钮已经通过显示和隐藏控制了，能点到的肯定是能点击的
         $.post(Boss+'groupmembers/'+memberId,{'sessiontoken':sessiontoken,'remark':$('.beizhuming').val()},function(data){
         	if(data.status==1){
         		console.log('修改备注成功')
         	}
         })
        
      
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
        // 点击中间的编辑图片让右边的完成编辑显示
		writes:function(e,who,item){
			// 点击的时候保存当前的个人的信息
		this.youitem=item
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
// alert(3)
// console.log($('.testsG'))
// $('.testsG').attr('src','../tu-menu/24_36.png')
// $('.testsO').attr('src','../tu-menu/24_68.png')
// $('.testsB').attr('src','../tu-menu/24_72.png')
// $('.testsG').css('border','1px solid red')
// $('.testsG').css('opacity','0.5 !important')
// $('.testsO').css('opacity','0.5 !important')
// $('.testsB').css('opacity','0.5 !important')
		},
        //点击下拉箭头
        zuos: function(e) {
           
            if(this.srcs=='../tu-menu/24_26.png'){
                this.srcs='../tu-menu/36.png'
				 this.zuo = true
				 console.log(111)
			}else if(this.srcs=='../tu-menu/36.png'){
				this.srcs='../tu-menu/24_26.png'
				 this.zuo = false
				  console.log(this.srcs)
			}
        },
		// 点击公司下拉表的选择
		companys:function(e,name,objectId){
			var that=this
			this.company=name
			this.zuo=false
			this.srcs='../tu-menu/24_26.png'
			// 设定用户的默认组
			$.post(Boss+'user/groups/'+objectId+'/default',{'sessiontoken':sessiontoken},function(data){
				console.log(data)
				if(data.status==1){
					// 重新加载，直接取最新的数据
					location.reload()



				}
			})

		},
		// 企业与团队管理的开关  蓝色
		blues:function(e,zong,no){
return;
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
            
			
		},
		// 鼠标放到最左边的时候
		members:function(objectId,index){
			var that=this
			this.bgindex=index
			   $.get(Boss+"group/"+objectId+"/members",{"sessiontoken":sessiontoken},function(data){
				console.log(data)
				console.log("data")
				if(data.status==1){
					that.member=data.results
				}
				

			})
			
		}
    },

    mounted: function() {
// 能到这个页面的肯定是企业或者团队的
               var that=this
               // 界面最左边的下拉列表
		    $.get(Boss+"user/groups",{"sessiontoken":sessiontoken},function(data){
				console.log(data)
				console.log("data")
				that.datas=data.results.data
				that.company=common_user.default_group_name
				
                // 默认的中间显示的列表
				 $.get(Boss+"group/"+common_user.default_group+"/members",{"sessiontoken":sessiontoken},function(data1){
				console.log(data1)
				console.log("data1")
				if(data1.status==1){
					that.member=data1.results
					for (var i = 0; i < data1.length; i++) {
						if(that.$store.state.common_user.objectId==data1[i].objectId){
							 // 循环查找个人资料里面的id等于成员里面的id
							 if(data1[i].role=='owner'){
                               // 当前登录者是拥有者
                               that.roles=1
							 }else if(data1[i].role=='manager'){
                               // 当前登录者是管理者
                               that.roles=2
							 }else if(data1[i].role=='member'){
                               // 当前登录者是普通成员
                               that.roles=3
							 }
						}
					}
				}

			      })
                
			})
    }
}




// 测试开关  1.html里面的.testsO,.testsG,.testsB{opacity: 0.5 !important;}   2.按钮的点击事件的return
// 测试开关子账号   默认关  默认其他开关是全开