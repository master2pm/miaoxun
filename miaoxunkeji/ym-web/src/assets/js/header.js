// 网页的顶栏模板  @mouseleave="bangzhu_leave"  v-if="(open_bangzhu==true)"

const headers = {
    template: `
    <header v-if="datas!='no'" class=" border-b " :class="{heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" style="z-index:1000;top: 0;left:0;position:fixed;height:60px;width:100%;">
           <ul class="topbar  " style="height:60px;width:1004px;margin:0 auto;padding-right:0;">
             <li class="f13" style="margin:0;">
                  <a href="../home/miao.html" >
                      <img src="../tu-menu/50.png" class="czjz"  style="left:20px;">
                  </a>
              </li>
              
			   
              <li v-if="sessiontoken!=null" class="f13 relative rf cursor" @mouseenter="xian=1" @mouseleave="gerenziliaoCloses($event)" @click="gerenziliaoOpens($event)"   style="margin:0;padding-left:25px;padding-right:20px;position: relative;height:60px;">
                      <img :src="datas.avatar!=undefined?datas.avatar.url+'?imageView2/1/w/27/h/27':''"  style="margin-top:15px;border-radius:50%;" class="cursor">
                        <div v-if="xian==1" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;">  </div>                       
												<div  class="gerenziliao " v-if="gerenziliao==true"  style="border:1px solid #D1D5D5;width: 350px;height:427px;background: white;position: absolute;top:59px;right:0px;" > 
        
																		<ul :class="{heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">
																			<li @mouseover="index=0" :class="{activeg1:index==0&&this.$store.state.header=='hei',activeg:index==0&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" style="height:105px;position:relative;" class=" cursor">
																				<span style="color:#4D4C4F;font-size:25px;display:block;width:308px;height:61px;">
																				<a :class="{heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" href="../detail/miao_me.html#/bases/gaishu/0" >{{datas.nickname}}</a>
																				</span>
																				<span style="color:#696B6D;font-size:13px;display:block;line-height:0;">
																					<a  href="../detail/miao_me.html#/bases/gaishu/0" :class="{activeg1:index==0&&this.$store.state.header=='hei',activeg:index==0&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">修改个人账户设置</a>
																				</span>
																				<a  href="../detail/miao_me.html#/bases/message/1" >
																				<img  src="../tu/1.png"  style="cursor:pointer;width:53px;right:20px;height:52px;border-radius:50%;" class="czjz">
																				</a>
																				<div class="xian" v-if="index!=0&&index!=1"></div>
																			</li>
																			<li @mouseover="index=1" :class="{activeg1:index==1&&this.$store.state.header=='hei',activeg:index==1&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}"  class=" cursor" style="position:relative;top:0px;height:62px;line-height:62px;color:#696B6D;font-size:13px;" >
																				邀请好友
																				<img src="../tu/5.png" style="cursor:pointer;width:24px;right:20px;height:24px;" class="czjz">
																				<div class="xian" v-if="index!=1&&index!=2"></div>
																			</li>
																			<li @mouseover="index=2"  class=" cursor" :class="{activeg1:index==2&&this.$store.state.header=='hei',activeg:index==2&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" style="position:relative;top:0px;height:75px;color:#696B6D;" >
																				<p style="line-height:40px;font-size:13px;"><a  href="../detail/miao_menu.html" :class="{activeg1:index==2&&this.$store.state.header=='hei',activeg:index==2&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">企业管理与转换</a></p>
																				<p style="line-height:0;font-size:12px;"><a  href="../detail/miao_menu.html" :class="{activeg1:index==2&&this.$store.state.header=='hei',activeg:index==2&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">开启企业管理与转换功能后，个人账户</a></p>
																				<p style="line-height:30px;font-size:12px;"><a  href="../detail/miao_menu.html" :class="{activeg1:index==2&&this.$store.state.header=='hei',activeg:index==2&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">买卖功能将关闭。</a></p>

																				<a  href="../home/miao.html" >
																				<img src="../tu/4.png" style="cursor:pointer;width:46px;right:20px;height:24px;" class="czjz">
																				</a>
																				<div class="xian" v-if="index!=2&&index!=3"></div>
																			</li>
																			<li v-if="(datas.master=='0')" class="cursor" @mouseover="index=3" :class="{activeg1:index==3&&this.$store.state.header=='hei',activeg:index==3&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" style="position:relative;top:0px;height:62px;color:#696B6D;font-size:13px;" >
																					<p><a  href="../detail/miao_mpz.html" :class="{activeg1:index==3&&this.$store.state.header=='hei',activeg:index==3&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">成为苗圃主</a></p>
																					<p style="line-height:30px;font-size:12px;color:#5FB246;right:20px;" class="czjz">还差2步</p>
																					<div class="xian" v-if="index!=3&&index!=4"></div>
																			</li>
																				<li v-if="(datas.master==1)"  class=" cursor" @mouseover="index=3" :class="{activeg1:index==3&&this.$store.state.header=='hei',activeg:index==3&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">
																				<a  href="../home/miao.html" >切换至买家模式</a>
																					<div class="xian" v-if="index!=3&&index!=4"></div>
																			</li>
																			<li @mouseover="index=4"  class=" cursor" :class="{activeg1:index==4&&this.$store.state.header=='hei',activeg:index==4&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" style="position:relative;top:0px;height:62px;line-height:62px;color:#696B6D;font-size:13px;" >
																				<p><a  href="../detail/miao_me.html" :class="{activeg1:index==4&&this.$store.state.header=='hei',activeg:index==4&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}">向我们反馈问题</a></p>
																				<img src="../tu/2.png" style="cursor:pointer;width:23px;height:24px;right:20px;" class="czjz">
																				<div class="xian" v-if="index!=4&&index!=5"></div>
																			</li>
																			<li @mouseover="index=5"  class=" cursor" :class="{activeg1:index==5&&this.$store.state.header=='hei',activeg:index==5&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" style="position:relative;top:0px;color:#696B6D;height:60px;line-height:60px;font-size:13px;cursor:pointer;" >
																				<p @click="homes">退出登录</p>
															
																			</li>
																		</ul>
                                         </div>
              </li>

			  <li v-if="sessiontoken==null" :class="{heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" class="f13   rf cursor relative">登录</li>
			  <li v-if="sessiontoken==null" :class="{heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" class="f13   rf cursor relative">注册</li>


              <li  @mouseenter="xian=2"  @mouseleave="xian=-1" class="f13  rf relative cursor">帮助 <div v-if="xian==2" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;"></div></li>
              
			  <li @mouseenter="xian=62"  @mouseleave="xian=-1" v-if="this.$store.state.header=='hei'" class="f13 header_heishe  rf cursor relative">订单
			  <div v-if="xian==62" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;"></div>
			     <img src="../tu-mpz/1-67.png" style="position: absolute;left:26px;top:17px;">
			  </li>
			  <li @mouseenter="xian=61"  @mouseleave="xian=-1" v-if="this.$store.state.header=='hei'" class="f13 header_heishe  rf cursor relative">统计数据
			  <div v-if="xian==61" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;"></div>
			   <img src="../tu-mpz/1-67.png" style="position: absolute;right:-9px;top:17px;">
			  </li>

			  <li  @mouseenter="xian=3"  @mouseleave="xian=-1" class="f13  rf relative cursor">消息
			   <div v-if="xian==3" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;"></div>
			    <img src="../tu-mpz/1-67.png" style="position: absolute;left:26px;top:17px;">
			   </li>

              <li  @mouseenter="xian=4"  @mouseleave="xian=-1" v-if="datas.master==0" class="f13  rf cursor relative"> 
			                <a href="../detail/miao_mpz.html#/nompc/begin1" style="width:80px;">成为苗圃主 </a>
							<div v-if="xian==4" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;"></div>
			  </li>
			  <li  @mouseenter="xian=4" @click="miaopu" @mouseleave="closes" v-if="datas.master==1"  class="f13  rf cursor relative"> 
			   <div v-if="xian==4" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;"></div>
						<span style="width:80px;" >
						        我的苗圃
						</span>
						 <img src="../tu-mpz/1-67.png" style="position: absolute;right:-9px;top:17px;">
						<ul  v-if="(open_miaopu==true)"  style="top: 60px;right: -10px;width:214px;height:240px;position:absolute;" class=" miaopuk bai border c696A6C f13">
							<li @click="close(0)" :class="{activeg1:index1==0&&this.$store.state.header=='hei',activeg:index1==0&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" @mouseenter="move($event)" style="padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							<router-link to="/tjxmm/base1" tag='span'>添加新苗木</router-link>
							<span v-if="index1!=0&&index1!=1" class="spjz" style="bottom:0px;border-top:1px solid #D1D4D4;width:174px;height:0;"></span>
							</li>
							<li @click="close(1)" :class="{activeg1:index1==1&&this.$store.state.header=='hei',activeg:index1==1&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" @mouseenter="move($event)" style="top:0px;padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							<router-link to="/qbmm2/1" tag='span'>全部苗木</router-link>
							<span v-if="index1!=1&&index1!=2" class="spjz" style="bottom:0px;border-top:1px solid #D1D4D4;width:174px;height:0;"></span>
							</li>
							<li @click="close(2)" :class="{activeg1:index1==2&&this.$store.state.header=='hei',activeg:index1==2&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" @mouseenter="move($event)" style="top:0px;padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							<router-link to="/yfb3/1" tag='span'>已发布</router-link>
							<span v-if="index1!=2&&index1!=3" class="spjz" style="bottom:0px;border-top:1px solid #D1D4D4;width:174px;height:0;"></span>
							</li>
							<li @click="close(3)" :class="{activeg1:index1==3&&this.$store.state.header=='hei',activeg:index1==3&&this.$store.state.header=='bai',heishe:this.$store.state.header=='hei',baishe:this.$store.state.header=='bai'}" @mouseenter="move($event)" style="top:0px;padding:0 20px;position:relative;height:60px;line-height:60px;cursor:pointer;">
							<router-link to="/wfb4/1" tag='span'>未发布</router-link>
							</li>
						</ul>
			  </li>
			  
        
              <li  @mouseenter="xian=5"  @mouseleave="xian=-1" class="f13  rf relative cursor">
			  手机端
			   <div v-if="xian==5" class="topbar_xian spjz" style="width:15px;height:3px;border-radius: 5px;background:#D2D6D6;bottom:5px;"></div>
            
			  </li>
			  <li class="f12 c989898 rf">{{datas.company_name}}</li>

          </ul>
      </header>  


     `,
    data: function() {
        return {
            user_phone: '',
            user_id: '',
			xian:-1,
			sessiontoken:sessiontoken,
            datas: '',//个人资料
            index: -1,//鼠标放上的时候个人资料弹出框的灰色背景
			index1: -1,//鼠标放上的时候我的苗圃弹出框的灰色背景
            gerenziliao: false,
          open_miaopu:false//控制我的苗圃弹出框的显示和隐藏
        }
    },
    methods: {
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
            localStorage.clear();
            location.href = "../detail/miao_logins.html"
        },

  
    },
    // 
    mounted: function() {

        var that = this
        if (window.localStorage.getItem('user_id') != null) {
            this.user_id = window.localStorage.getItem('user_id');
        }
        if (window.localStorage.getItem('user_phone') != null) {
            this.user_phone = window.localStorage.getItem('user_phone');
        }

        // 个人资料
        $.get("http://m1-ymboss.leanapp.cn/api/v1/user/info", {
            "sessiontoken": this.user_id
        }, function(data) {
			console.log(data)
            that.datas = data.results
        })





    }
}
export default headers