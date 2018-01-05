

//当vue识别到当前路由路径为某项时，显示某项对应的组件
//当路由路径为foo时，显示Foo组件
var routes=[
	//第一次建立的时候 
        {path:"/",name:'menuNo',redirect:'/menuNo'},
        {path:"/menuNo",name:'menuNos',component:menuNo},
		{path:"/menuNo1",name:'menuNos1',component:menuNo1},//升级企业
        {path:"/menuNo/buildeEnterprise",name:'buildeEnterprise',component:buildeEnterprise},//1.建立企业按钮跳转的页面
					{path:"/menuNo/buildAndrz",name:'buildAndrz',component:buildAndrz},//建立并认证企业按钮跳转的页面
					{path:"/menuNo/nextYYZZ1",name:'nextYYZZ1',component:nextYYZZ1},//请提供您的企业全称与营业执照1
					{path:"/menuNo/nextSFZ2",name:'nextSFZ2',component:nextSFZ2},//请提供您的企业法定代表人姓名与身份证照片2
					{path:"/menuNo/nextWCYZ3",name:'nextWCYZ3',component:nextWCYZ3},//有个人项目的完成认证3
					{path:"/menuNo/nextWCYZ4",name:'nextWCYZ4',component:nextWCYZ4},//有个人项目的完成认证4  最终
        {path:"/menuNo/buildTeam",name:'buildTeam',component:buildTeam},//2.建立团队按钮跳转的页面
					{path:"/menuNo/buildTeam2",name:'buildTeam2',component:buildTeam2},//建立团队有个人项目的2
					{path:"/menuNo/buildTeam3",name:'buildTeam3',component:buildTeam3},//建立团队有个人项目的3最终
   //已经建立的时候 
   {path:'/menuYes',name:'menuYes',component:buildTeams,children:[
	       {path:'/menuYes/gaishu/:objectId/:index',name:'gaishu',component:gaishu},//已建立过企业/团队，当前选择为团队  概述
		   {path:'/menuYes/message/:objectId/:index',name:'message',component:message},//已建立过企业/团队，当前选择为团队  团队/企业信息
		    {path:'/menuYes/renzhen/:objectId/:states/:index',name:'renzhen',component:renzhen},//已建立过企业/团队，当前选择为团队  企业认证
			 {path:'/menuYes/addboy/:objectId/:phone/:index',name:'addboy',component:addboy},//已建立过企业/团队，当前选择为团队  添加子帐号
			  {path:'/menuYes/boy/:objectId/:index',name:'boy',component:boy},//已建立过企业/团队，当前选择为团队  子帐号管理与企业转换
			 {path:'/menuYes/payment/:objectId/:index',name:'payment',component:payment}//已建立过企业/团队，当前选择为团队  收款方式
   ]}
]

const router = new VueRouter({
    routes: routes
})
router.beforeEach((to, from, next) => {
      // 导航钩子，全局钩子
       if(to.path.indexOf("menuYes")!=-1){
		   console.log('add')
				   $(".containers").addClass("bjtp")
				   $("body").css({"marginTop":'60px'})
		}else{
			 console.log('remove')
				    $(".containers").removeClass("bjtp")
				    $("body").css({"marginTop":'110px'})
		}  
			   next()  
})
//创建vue实例，组件的创建应该在vue创建之前
var vm = new Vue({
    el: '.containers',
    data: {
       // abc:false,//控制背景图片的
        sessiontoken: ''
        
    },
    //在创建vue实例时，引入路由
     router: router,
    store: store,
    components:{"headers":headers,"footers":footers},
    methods: {
         
    },
    mounted: function() {
   
    }

})