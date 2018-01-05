//买卖家我的 推送通知width:1040px;

const news = {
    template: `
   <div class=" overflow" style="background:url(../tu-me/37.png) no-repeat 0px 72px;height:900px;">
       
                 <p class=" c4C4C4F f26" style="background:url(../tu-me/17_56.png) no-repeat center left;padding:15px 0;padding-left: 50px;">推送通知</p>
				<ul class="c4C4C4F lf" style="margin-top: 50px;width:400px;padding-left: 50px;">
				      <li class="" style="position:relative;height:80px;margin-bottom:10px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">系统通知</p>
								 <p class="f12 c999899">关闭后，您将不会收到来自平台的任何提醒。</p>
							  </div>
							  <img @click="toggles($event,'zuo')" src="../tu-me/18_55.png" class="czjz cursor" style="right:0;">
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">活动信息</p>
								 <p class="f12 c999899">系统推出活动时会收到提醒</p>
							  </div>
				      </li>
                      <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">我的收藏</p>
								 <p class="f12 c999899">收藏苗木和苗圃时会收到提醒</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">账号活动</p>
								 <p class="f12 c999899">对您的账号所做的更改</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">对我的评价</p>
								 <p class="f12 c999899">用户对买卖公司或组织评价时会收到提醒</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">展示开屏广告</p>
								 <p class="f12 c999899">软件开启时会出现系统活动广告</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">网页登录提示</p>
								 <p class="f12 c999899">用户在网页登录账号时手机会收到提醒</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">头条新闻</p>
								 <p class="f12 c999899">头条新闻更新时会收到提醒</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">新消息提醒</p>
								 <p class="f12 c999899">收到聊天消息时会收到提醒</p>
							  </div>
				      </li>
				</ul>

              



			  <ul class="c4C4C4F rf" style="margin-top: 50px;width:400px;padding-right:30px;">
				      <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">短信通知</p>
								 <p class="f12 c999899">关闭短信通知，您将不会收到来自平台的任何短信提醒。</p>
							  </div>
							  <img @click="toggles($event,'you')" src="../tu-me/18_52.png" class="czjz cursor" style="right:0;">
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">订单信息</p>
								 <p class="f12 c999899">收到订单消息短信提醒</p>
							  </div>
				      </li>
                      <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">新消息提醒</p>
								 <p class="f12 c999899">收到聊天消息时会收到短信提醒</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">收到评价</p>
								 <p class="f12 c999899">买卖双方评价时会收到短信提醒</p>
							  </div>
				      </li>
					   <li class="" style="position:relative;height:80px;">
				              <div class="czjz" style="left:0;">
							     <p class="f18">活动信息</p>
								 <p class="f12 c999899">系统推出活动时会收到短信提醒</p>
							  </div>
				      </li>
					 
				</ul>




	
		  
		
     
  </div>

  `,
    data: function() {
        return {
			

        }
    },

    methods: {
		// 推送的快关按钮
		toggles:function(e,item){
			// 关闭的时候
             if($(e.currentTarget).attr("src")=="../tu-me/18_52.png"){
				 $(e.currentTarget).attr("src","../tu-me/18_55.png")
			 }else{
				  $(e.currentTarget).attr("src","../tu-me/18_52.png")
			 }
		}
    },

    mounted: function() {
 
    }
}