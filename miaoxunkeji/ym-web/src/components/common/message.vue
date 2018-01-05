
 
<template>
<div style="position:fixed;right:0;bottom:0;z-index:10;" class="border" id="message">
  

       <!-- 消息条 -->
       <div  v-if="open==false" @click='opens()' style="width:285px;height:40px;" class="bgF2F2F2  border-r relative cursor">
            <img src="/static/tu-message/1-09.png" alt="" style="left:15px;" class="czjz">
            <span class="c4A494B f12 jz"  style="left:65px;">私信聊天</span>
            <span v-if="news==true" class="c60B346 f12 rf relative"  style="top:12px;right:15px;">
            新消息

            </span>
             <span v-if="news==true" class="c60B346 f40" style="top:-17px;position:absolute;right:10px;">·</span>

       </div>




<!-- 消息面板 -->
<div style="width:560px;height:400px;background:white;" class=" overflow f12" v-show="open==true">
<!-- 左边标题栏 -->
      <ul style="width:160px;height:400px;border-right:1px solid #999899;" class="lf ">
           <li style="padding:7.5px 10px;height:25px;border-bottom:1px solid #999899;" class="relative ">
              <input type="text" name="" placeholder="查找联系人" style="background:#F0F0F0;width:110px;height:25px;padding:0px 20px 0px 10px;border:none;" >
              <img src="/static/tu-message/1-11.png" alt="" style="right:15px;" class="czjz">
           </li>
           <li @click="qiehuan(1)" style="padding:0 10px;" :style="{borderRight:who==1?'2px solid #269C88':'none'}" class="relative border-b cursor"> 
                <span class="c676868 czjz" style="left:15px;" >系统通知</span>
                <!-- 如果有消息并且当前是买家页面则绿色，卖家页面则橙色，没有消息则灰色 -->
                <!-- <img :src="dataXt.length>0?(header=='bai'?'/static/tu-message/1-05.png':'/static/tu-message/1-04.png'):'/static/tu-message/1-03.png'" alt="" style="right:15px;" class="czjz"> -->
                 <img src="/static/tu-message/1-03.png" alt="" style="right:15px;" class="czjz onimg1">
           </li>
            <!-- <li style="padding:0 10px;" :style="{borderRight:who==1?'2px solid #269C88':'none'}" class="relative border-b cursor">  -->
            <li  @click="qiehuan(2)" :style="{borderRight:who==2?'2px solid #269C88':'none'}"  style="padding:0 10px;" class="relative cursor"> 
                <span class="c676868 czjz" style="left:15px;" >交易通知</span>
                <!-- 如果有消息并且当前是买家页面则绿色，卖家页面则橙色，没有消息则灰色 -->
                <!-- <img :src="dataJy.length>0?(header=='bai'?'/static/tu-message/1-08.png':'/static/tu-message/1-07.png'):'/static/tu-message/1-06.png'" alt="" style="right:15px;" class="czjz"> -->
                 <img src="/static/tu-message/1-06.png" alt="" style="right:15px;" class="czjz onimg2">
               
           </li>
           <li style="padding:100px 10px 0 10px;height:140px;background:#F0F0F0;" class="c999899 center"> 
           私信聊天功能暂无开通敬请期待
           </li>
            <li style="padding:0 10px;border-top:1px solid #999899;" class="relative "> 
                <span class="cF2F2F2 czjz" style="left:15px;" >查看全部私信</span>
                <!-- 灰色 -->
                <img src="/static/tu-message/1-10.png" alt="" style="right:15px;" class="czjz">
              
           </li>
      </ul>

<!-- 右边内容栏 -->
       <ul style="width:399px;height:400px;" class="rf">
           <li style="padding:0 20px;height:40px;border-bottom:1px solid #999899;" class="relative ">
              <span class="c676868 czjz" style="left:20px;"> {{who==2?'交易通知':'系统通知'}} </span>
              <img :src="cha==0?'/static/tu-message/1-02.png':'/static/tu-message/1-01.png'" alt="" @mouseenter='cha=1'  @mouseleave='cha=0'  style="right:20px;" class="czjz cursor" @click.stop="open=false" >
           </li>
 <!--111 系统通知对应的块 -->
            <li  flow-default id="dataXt" v-show="who==1" style="height:360px;background:#F0F0F0;overflow-y:scroll;" class="relative border-b">
                 <!-- 没有信息的时候 -->
                 <div v-if="dataXt.length==0" class="c999899 center" style="padding:0 20px;padding-top:180px;"> 暂时还没有收到系统通知哦！</div>

                

                 <ul class="xttz" v-if="dataXt.length!=0">
                 <li> <!-- 有最新消息的时候 -->
                 <div v-if="dataXt.length!=0" style="height:30px;line-height:30px;padding:0 20px;" class="c999899 bgF0F0F0">
                       最新消息
                 </div></li>
                 <li v-for="(item,index) in dataXt" style="padding:10px 20px;" :style="{background:item.event_name=='TREE_AUDIT_RESPONSE'?'#4A494B':'white'}" class="overflow">
                      <div class="overflow">
                         <span class="f13 lf diandiandian"  style="width:60%;"  :class="{bais:item.event_name=='TREE_AUDIT_RESPONSE',huis:(item.event_name!='TREE_AUDIT_RESPONSE'&&index==indexs1)||(item.event_name=='TREE_AUDIT_RESPONSE'&&index==indexs1),heis:(item.event_name!='TREE_AUDIT_RESPONSE'&&index!=indexs1)}">{{item.message.title}}</span>
                         <span class="f12 rf c999899">{{item.createdAt}}</span>
                       </div>

                       <div class="overflow">
                       <div style="width:60%;">
                          <span class="f12 lf c999899 diandiandian d" :class="{bais:item.event_name=='TREE_AUDIT_RESPONSE'&&index==indexs1,huis:(item.event_name=='TREE_AUDIT_RESPONSE'&&index!=indexs1)||(item.event_name!='TREE_AUDIT_RESPONSE'&&index!=indexs1),heis:(item.event_name!='TREE_AUDIT_RESPONSE'&&index==indexs1)}" v-html='hongs(item.message.text)'>{{hongs(item.message.text)}}</span>
                      </div>
                         
                         <span @click="looks($event,1,index)" style="padding:10px 20px;position:relative;z-index:2;" :style="{color:item.event_name=='TREE_AUDIT_RESPONSE'?'#C96832':'#60B346'}" class="f12 rf  cursor l">查看</span>
                       </div>

                       <!-- 接受   拒绝 -->
                       <div style="display:none;" class="b">
                           <button type=""  @click="ok(item.actions[0].method,item.actions[0].url)" v-show="item.event_name=='GROUP_MEMBER_INVITE'" class="layui-btn layui-btn-radius " style="width:99px;height:31px;line-height:31px;color:#60B346;background:white;border:1px solid #60B346;margin-top:10px;">接受</button>
                          <button type="" @click="cancel(item.actions[1].method,item.actions[1].url)" v-show="item.event_name=='GROUP_MEMBER_INVITE'&&item.actions[1].text=='拒绝'" class="layui-btn layui-btn-radius " style="width:99px;height:31px;line-height:31px;color:#C96832;background:white;border:1px solid #C96832;margin-top:10px;">拒绝</button>
                       </div>

                       <!-- 查看详情 -->
                       <div @click="go(item.message.text)" class="c60B346 f12 right cursor" v-show="ishas(item.message.text)">查看详情</div>
                      

                   </li>
                 
                 </ul>
           </li>
    








    <!--2222 交易通知对应的块 -->
            <li v-show="who==2" flow-default id="dataJy" style="height:360px;background:#F0F0F0;overflow-y:scroll;" class="relative border-b">
                 <!-- 没有信息的时候 -->
                 <div v-if="dataJy.length==0" class="c999899 center" style="padding:0 20px;padding-top:180px;"> 暂时还没有收到交易通知哦！</div>

                 

                  <ul   class="jytz"   v-if="dataJy.length!=0">
                  <li><!-- 有最新消息的时候 -->
                 <div v-if="dataJy.length!=0"  style="height:30px;line-height:30px;padding:0 20px;" class="c999899 bgF0F0F0">
                       最新消息
                 </div></li>
                 <li v-for="(item,index) in dataJy" style="padding:10px 20px;" :style="{background:item.key.substring(0,6)=='SUPPLY'?'#4A494B':'white'}" class="overflow">
                  <!-- 左边图片 -->
                   <div class="lf bg999899 overflow relative" style="top:-3px;width:47px;height:47px;">
                     <img :src="item.from.type=='private'?'/static/tu-message/33-03.png':(item.from.type=='company'?'/static/tu-message/33-04.png':'/static/tu-message/33-05.png')" alt="">
                   </div>
                   <!-- 右边列表信息 -->
                    <div  class="rf overflow" style="width:290px;">
                          <div class="overflow">
                               <span class="f13 lf diandiandian" style="width:60%;"  :class="{bais:(item.key.substring(0,6)=='SUPPLY'&&iskai==0)||(item.key.substring(0,6)=='SUPPLY'&&index!=indexs),huis:(item.key.substring(0,6)!='SUPPLY'&&iskai==1&&index==indexs)||(item.key.substring(0,6)=='SUPPLY'&&iskai==1&&index==indexs),heis:item.key.substring(0,6)!='SUPPLY'&&iskai==0}">{{item.from.name}}</span>
                               <span class="f12 rf c999899">{{item.createdAt}}</span>
                          </div>

                         <div class="overflow">
                               <div style="width:60%;">
                                   <span class="f12 lf c999899 diandiandian d">{{item.message}}</span>
                               </div>
                         
                                   <span @click="looks($event,2,index)" style="padding:10px 20px;position:relative;z-index:2;" :style="{color:item.key.substring(0,6)=='SUPPLY'?'#C96832':'#60B346'}" class="f12 rf  cursor l">查看</span>
                         </div>
                  </div>

                  <!-- 线条 -->
                  <div :style="{borderTop:item.key.substring(0,6)=='SUPPLY'?'1px solid #676868':'1px solid #F2F2F2'}" style="border-bottom:none;width:360px;opacity:0;padding-top:10px;position:relative;margin-top:60px;z-index:1;" class="xian">
                        <span class="f12 " :class="{bais:item.key.substring(0,6)=='SUPPLY',heis:item.key.substring(0,6)!='SUPPLY'}">{{item.message}}</span>
                  </div>
                   </li>
                 
                 </ul>
                
           </li>      
      </ul>
</div>







 </div>     
</template> 


<script>

	export default {
		data() {
			return {
        conversations:[],//未读消息的全局变量
         news:false,//新消息是否显示
         header:this.$store.state.header,
         indexs1:-1,//系统通知
          indexs:-1,//交易通知
          iskai:0,//判断是否点击过查看
          cha:0,//右上角的叉子，0代表灰色，1代表绿色
          dataXt:[],//系统通知的数据
          dataJy:[],//交易通知的数据
           who:1,//点击的如果是系统通知则1  交易通知则2
		       open:false//控制显示和隐藏的

			};
		},

		methods:{
        // 邀请好友接受和拒绝的接口
  ok(methods,url){
     $.get(url,{'sessiontoken':sessiontoken},function(data){
         if(data.status==1){
          console.log(data)
        }else{
          alert(data.results.message)
        }
          
     })
  },
 cancel(methods,url){
     $.get(url,{'sessiontoken':sessiontoken},function(data){
         if(data.status==1){
          console.log(data)
        }else{
          alert(data.results.message)
        }
     })
  },
    // 控制查看详情按钮的显示和隐藏，只有系统通知里面的未通过审核才能看到这些按钮，然后点击跳转去不同的地方
      ishas(text){
        if(text.indexOf('未通过审核')!=-1){
          return true
        }else{
          return false
        }
         
      },
      // 点击系统通知里面的未通过审核的查看详情按钮跳到对应的页面去
      go(text){
// 1.实名认证未通过审核--跳去我的-实名认证  miao_me.html?role=bai#/bases/renzhen/2/0
if(text.indexOf('实名认证未通过审核')!=-1){
  window.open('../detail/miao_me.html?role='+this.$store.state.header+'#/bases/renzhen/2/0')
}else if(text.indexOf('企业认证未通过审核')!=-1||text.indexOf('企业申请未通过审核')!=-1){
 // 1.企业认证未通过审核--跳去菜单栏-认证  miao_menu.html?role=bai#/menuYes/renzhen/1/2
// 1.团队升级为企业申请未通过审核 --跳去菜单栏-认证  miao_menu.html?role=bai#/menuYes/renzhen/1/2 
 window.open('../detail/miao_menu.html?role='+this.$store.state.header+'#/menuYes/renzhen/1/2 ')
}else{
   // window.open('../detail/miao_menu.html?role='+this.$store.state.header+'#/menuYes/renzhen/1/2 ')
     // window.open('../detail/miao_me.html?role='+this.$store.state.header+'#/bases/renzhen/2/0')
}


      },
      // 系统通知的三个未通过审核红色标注
      hongs(text){
        // alert(text)
        return text.replace(/未通过审核/ig,'<span style="color:#BF4040;">未通过审核</span>')
      },
  //点击消息栏的时候将未读消息设置为已读
      opens(){
        var that=this
        that.news=false
        that.open=true
              
if(that.conversations.length>0){
       for(let conv of that.conversations) {
        console.log(conv);
        conv.read().then(function(conversation) {
              console.log('对话已标记为已读');
              that.conversations=[]
        }).catch(console.error.bind(console));

      }
      
}else{
  console.log('对话未读为0，不需要手动设置0')
}


      },
    loads1(n){
      
        var that=this    
                layui.use('flow',function(){
                  var $ = layui.jquery;
                  var flow=layui.flow;
                  
                  flow.load({
                 
                    elem:'#dataXt',
                    scrollElem:'#dataXt',//滚动条所在元素选择器，默认document。如果你不是通过窗口滚动来触发流加载，而是页面中的某一个容器的滚动条，那么通过该参数指定即可。
                     // isAuto:true,//是否自动加载。默认true。如果设为false，点会在列表底部生成一个“加载更多”的button，则只能点击它才会加载下一页数据。
                     end:'<div style="font-size:12px;color:#999899;">没有更多通知啦</div>',//用于显示末页内容，可传入任意HTML字符。默认为：没有更多了
                    done:function(page,next){
        // alert(1)
console.log('检测到有系统消息推送--loads1')
 $.ajax({   
            type :"get",
            cache:false,  
            url :Boss+"user/message",  
            // headers:{"role":"seller"},
            data :{'sessiontoken':sessiontoken,"limit":10,'page':page},
            async : false,  
            success : function(data){  
             console.log("系统通知的内容")
                           JSONS(data,'系统通知的内容')
                            if(data.status==1){
                               var lis=[]
                                if(data.results.data.length>0){
                                  if(n==1){
                                    that.dataXt=[]
                                  }
                                for (var i = 0; i < data.results.data.length; i++) {
                                  that.dataXt.push(data.results.data[i])
                                    }
                                }
                                next(lis.join(''),page < data.results.page_count); //假设总页数为 10
                             }
            }  
           }); 
                     
                    }
                  })
                })
      },
  loads2(n){
    var that=this
// if(that.$store.state.common_user.default_group==''){
//   that.$store.state.common_user.default_group=0
// }
        var that=this    
                layui.use('flow',function(){
                  var $ = layui.jquery;
                  var flow=layui.flow;
                  
                  flow.load({
                    elem:'#dataJy',
                    scrollElem:'#dataJy',//滚动条所在元素选择器，默认document。如果你不是通过窗口滚动来触发流加载，而是页面中的某一个容器的滚动条，那么通过该参数指定即可。
                     // isAuto:true,//是否自动加载。默认true。如果设为false，点会在列表底部生成一个“加载更多”的button，则只能点击它才会加载下一页数据。
                     end:'<div style="font-size:12px;color:#999899;">没有更多通知啦</div>',//用于显示末页内容，可传入任意HTML字符。默认为：没有更多了
                    done:function(page,next){
console.log('检测到有交易消息推送--loads2')
 $.ajax({   
            type :"get",
            cache:false,  
            url :Boss+"message/groupDeal",  
            // headers:{"role":"seller"},
            data :{'sessiontoken':sessiontoken,"limit":10,'page':page,'groupId':that.$store.state.default_group},//0
            async : false,  
            success : function(data){  
             console.log("交易通知的内容")
                           JSONS(data,'交易通知的内容')
                            if(data.status==1){
                               var lis=[]
                                if(n==1){
                                    that.dataJy=[]
                                  }
                                if(data.results.data.length>0){
                                 
                                for (var i = 0; i < data.results.data.length; i++) {
                                  that.dataJy.push(data.results.data[i])
                                    }
                                }
                                next(lis.join(''),page < data.results.page_count); //假设总页数为 10
                             }
            }  
           }); 
                     
                    }
                  })
                })
      },
// 两个通知的切换
qiehuan(who){
  var that=this
  if(this.who==who){
    return
   }
   this.who=who

  if(who==1){   
    // 推送的时候让标题变橙色或者绿色，为未读，切换的时候变灰色，变已读
   $(".onimg1").attr('src','/static/tu-message/1-03.png')        
   // 系统通知的内容
    $('.jytz').find('.l').css('display','block')//查看按钮
     $('.xttz').find('.l').css('display','block')//查看按钮
   $('.xttz').find('.b').css('display','none')//按钮接受和拒绝
   $('.jytz').find('.b').css('display','none')//按钮接受和拒绝
    $('.xttz>li').css('height','40px')//li的高度
       $('.jytz>li').css('height','40px')//li的高度
        this.loads1(1)
       
  }else{
     // 推送的时候让标题变橙色或者绿色，为未读，切换的时候变灰色，变已读
     $(".onimg2").attr('src','/static/tu-message/1-06.png')
            // 交易通知的内容 说明 key说明：当出现 “SUPPLY”开头的就是卖家消息，"PURCHASE"开头的是买家消息
             $('.jytz').find('.l').css('display','block')//查看按钮
     $('.xttz').find('.l').css('display','block')//查看按钮
   $('.xttz').find('.b').css('display','none')//按钮接受和拒绝
   $('.jytz').find('.b').css('display','none')//按钮接受和拒绝
         $('.jytz>li').css('height','40px')//li的高度
         $('.xttz>li').css('height','40px')//li的高度
         // this.dataJy=[]
         // this.dataXt=[]
          this.loads2(1)
   
  }
},
// 系统通知的查看
looks(e,who,index){
  if(who==1){
        console.log('系统通知')
    this.indexs1=index
    $('.xttz').find('.l').css('display','block')//查看按钮

   $(e.currentTarget).css('display','none')//查看按钮

   $('.xttz').find('li').css('height','40px')//li的高度
   $(e.currentTarget).parent().parent().css('height','auto')
   console.log($(e.currentTarget).parent().parent().html())

   $('.xttz').find('.d').addClass('diandiandian')//信息内容
   $(e.currentTarget).parent().parent().find('.diandiandian').removeClass('diandiandian')

    $('.xttz').find('.b').css('display','none')//按钮接受和拒绝
    $(e.currentTarget).parent().parent().find('.b').css('display','inline-block')
  
    
  }else if(who==2){
    console.log('交易通知')
    this.iskai=1
    this.indexs=index
     $('.jytz').find('.l').css('display','block')//查看按钮
   $(e.currentTarget).css('display','none')

   $('.jytz').find('li').css('height','40px')//li的高度
   $(e.currentTarget).parent().parent().parent().css('height','auto')
   console.log($(e.currentTarget).parent().parent().parent().html())

   $('.jytz').find('.d').addClass('diandiandian')//信息内容
   $('.jytz').find('.d').css('display','block')
    $(e.currentTarget).parent().find('.diandiandian').css('display','none')

   $('.jytz').find('.b').css('display','none')
   $(e.currentTarget).parent().parent().parent().parent().find('.b').css('display','inline-block')

   $('.jytz').find('.xian').css('opacity','0')
   $(e.currentTarget).parent().parent().parent().parent().find('.xian').css('opacity','1')//线条
   
  }
   
   
}

		},
		mounted(){
            		var that=this

          this.loads1()   
          this.loads2()




var Realtime = AV.Realtime;
var TextMessage = AV.TextMessage;

var realtime = new Realtime({
  appId: 'z602nHLmfmjTAPs2hmYBWMl6-gzGzoHsz',
  appKey: 'BwEzvqDzVjJ0kHr0TFIfjhrc',
  region: 'cn', // 美国节点为 "us"
});

// 1.系统通知Tom 用objectId作为 clientId，获取 Client 对象实例
realtime.createIMClient(common_user.objectId).then(function(tom) {
   console.log(tom);
tom.on('unreadmessagescountupdate', function(conversations) {
   if(conversations.length>0){
        that.conversations=conversations
        that.news=true
     console.log('系统通知未读消息大于0')
    }
   console.log('已经触发监听消息推送--系统通知')
   console.log(conversations)
   if(conversations.creator=="system"){
   // 1.如果是系统通知，更新系统通知
 that.loads1(1) 
   // 推送的时候让标题变橙色或者绿色，为未读，切换的时候变灰色，变已读
           if(that.header=='bai'){
            $(".onimg1").attr('src','/static/tu-message/1-05.png')
           }else{
             $(".onimg1").attr('src','/static/tu-message/1-04.png')
           }
   } 
});


}).catch(console.error);





// 2.交易通知  用default_channel_name作为 clientId，获取 Client 对象实例
realtime.createIMClient(common_user.default_channel_name).then(function(tom) {
  // 打印 client 实例that.$store.state.common_user.default_channel_name
   console.log(tom);
tom.on('unreadmessagescountupdate', function(conversations) {
   if(conversations.length>0){
    that.conversations=conversations
    that.news=true
     console.log('交易通知未读消息大于0')
  }
   console.log('已经触发监听消息推送--交易通知')
   console.log(conversations)
 if(conversations.creator=="group_deal"){
   // 2.如果是交易通知，更新交易通知
  that.loads2(1)   
  // 推送的时候让标题变橙色或者绿色，为未读，切换的时候变灰色，变已读
   if(that.header=='bai'){
            $(".onimg2").attr('src','/static/tu-message/1-08.png')
           }else{
             $(".onimg2").attr('src','/static/tu-message/1-07.png')
           }     
         
   } 
});


}).catch(console.error);

		}

	};
</script>

<style scoped>

#message li{height:40px;position: relative;}
#message input::-moz-placeholder { color: white; }
#message input:-ms-input-placeholder { color: white; }
#message input::-webkit-input-placeholder { color: white; }
#message .white{color:white;}
#message .bai{background:white;}
#message .xttz>li{margin-bottom: 5px;}
#message .jytz>li{margin-bottom: 5px;}
#message .bais{color:#FFFFFF;}
#message .huis{color:#999899;}
#message .heis{color:#4A494B;}
</style>


