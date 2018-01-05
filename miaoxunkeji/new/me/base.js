

//当vue识别到当前路由路径为某项时，显示某项对应的组件
//当路由路径为foo时，显示Foo组件
var routes=[
	//第一次建立的时候 
    {path:"/",redirect:'/bases/gaishu/0'},  
	{path:"/bases",name:'bases',component:bases,
		children:[
            {path:"/bases/gaishu/:index",name:'gaishu',component:gaishu},
			{path:"/bases/message/:index",name:'message',component:message},//0.个人信息
			{path:"/bases/secret/:index",name:'secret',component:secret},  //4.安全与隐私  
			{path:"/bases/testSF/:index/:phone",name:'testSF',component:testSF,children:[//安全与隐私 验证身份
                 {path:"/bases/testSF/testSFs/:index/:phone",name:'testSFs',component:testSFs},//安全与隐私 验证身份
			     {path:"/bases/testSF/passwords/:index/:verify",name:'passwords',component:passwords},//安全与隐私 修改您的登录密码
			     {path:"/bases/testSF/passwordsSuccess/:index",name:'passwordsSuccess',component:passwordsSuccess}//安全与隐私 您已成功修改密码
			]},
			{path:"/bases/service/:index",name:'service',component:service},  //5.服务条款 
			{path:"/bases/news/:index",name:'news',component:news},  //3.推送通知    
			{path:"/bases/renzhen/:index/:states",name:'renzhen',component:renzhen}, //2.实名认证
			{path:"/bases/touxiang/:index",name:'touxiang',component:touxiang}, //2.实名认证 头像 
			{path:"/bases/sfz/:index",name:'sfz',component:sfz}, //2.实名认证 为您的身份证正面拍一张照片 
			{path:"/bases/sfz2/:index",name:'sfz2',component:sfz2}, //2.实名认证 请您拍一张手持身份证的正脸照片  
			{path:"/bases/shenhe/:index",name:'shenhe',component:shenhe} //2.实名认证 请您拍一张手持身份证的正脸照片 提交审核          
		]
	}
		
       
]

const router = new VueRouter({
    routes: routes
})

//创建vue实例，组件的创建应该在vue创建之前
var vm = new Vue({
    el: '.containers',
    data: {
         datas:'',
        sessiontoken: ''
    },
    //在创建vue实例时，引入路由
     router: router,
     store: store,
    components:{"headers":headers,"footers":footers},
    methods: {
              adjust(e){
     var thisImage=$(e.currentTarget)
              var wkuang = thisImage.parent().width()
              var hkuang = thisImage.parent().height()
              var wtupian=thisImage.width()
              var htupian=thisImage.height()
          // var kbl=wkuang/hkuang
          // var tbl=wtupian/htupian
          if(wtupian>htupian){
              thisImage.css({"height":hkuang+'px'})
          }else{
            thisImage.css({"width":wkuang+'px'})
          }
          // if(kbl>tbl||kbl==tbl){
          //     thisImage.css({"height":hkuang+'px'})
          // }else{
          //    thisImage.css({"width":wkuang+'px'})
          // }
 }
    },
    mounted: function() {
        		 		var that=this
           // 卖家的个人资料
           // 个人资料
        common_users(function(data){
          that.datas=data
          common_user=data.results
        })
// $.get(Boss+"user/info",{"sessiontoken":sessiontoken},function(data){
//                  console.log(data)
// 				that.datas=data.results
//         common_user=data.results
//               })
    }

})