

//当vue识别到当前路由路径为某项时，显示某项对应的组件
//当路由路径为foo时，显示Foo组件
var routes=[
	                 {path:"*",redirect:"/title/miaomu/0"},//1.收藏的苗木
	                 {path:"/title",name:'title',component:title,children:[
                              {path:"/title/miaomu/:indexs",name:'miaomu',component:miaomu},//1.收藏的苗木
                              {path:"/title/miaopu/:indexs",name:'miaopu',component:miaopu},//2.收藏的苗圃
                              {path:"/title/company/:indexs",name:'company',component:company},//3.收藏的企业
                               {path:"/title/group/:indexs",name:'group',component:group},//4.收藏的团队
                               {path:"/title/private/:indexs",name:'private',component:private}//5.收藏的个人

	                 ]}//1.收藏的苗木     
  
]

var router = new VueRouter({
    routes: routes
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
    components:{"headers":headers},
    methods: {
         
    },
    mounted: function() {

    }

})