// 卖家还是买家进入该页面
//var bg='sell'
//var bg='sell'
var background=locations("role")

if(background=='hei'){
 // background='hei'
  $("body").addClass("bodyhei")//给body添加黑色的遮罩层背景图

  
}else if(background=='bai'){
  //background='bai'
   $("body").addClass("bodybai")//给body添加青色的遮罩层背景图
}

const store = new Vuex.Store({
    state:{ photo:false,
            header:background,
            finalArrs:[],//这个是终极放大图 身份证
            headertu:'me',//控制导航栏的左边是出现图标还是公司名字的        
			index:0,//标题的当前序号
			anquan:false//安全和隐私  成功修改密码的时候不显示返回安全和隐私

            
           

    }
})