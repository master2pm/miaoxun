const htgl = {
  template:`
    <div> 
      <headers></headers>
        <!-- <shenhe></shenhe> -->
      <ul style="width:181px;display: inline-block;position: fixed;top:70px;bottom:0;" id="zuobian" class="zuo lf c49494B">
            <li class="f19 " :class="{bais:index==1}">
                <router-link to="/mmsh/fbmm/1"> 苗木审核 </router-link>
            </li>
            <li class="f19 " :class="{bais:index==2}">优苗管理后台</li>
            <li class="f19 " :class="{bais:index==3}">优苗管理</li>
      </ul>
        <router-view></router-view>
    </div>
  `,data:function(){
      return{
       index:1,//控制大标题下的小标题的底部红色线height:935px;
      }
       
    },
  components:{
    'headers':headers
  }
}






//当路由路径为foo时，显示Foo组件
const routes = [
    {path:'/login',component:login},
    {path:'/htgl',component:htgl,children:[
      {path:'/htgl/mmsh',name:'苗木审核',component:shenhe,children:[
            { path: '/htgl/mmsh/fbmm/:pages', component:fbmm },
            { path: '/', redirect: '/htgl/mmsh/fbmm/1' },
      { path: '/htgl', redirect: '/htgl/mmsh' },
     ]},
    ]},
    
    { path:'/',component:login,redirect: '/login'},
     //{ path: '/', redirect: '/mmsh/' },
    
]
//创建路由实例，保存在router中
const router = new VueRouter({
    routes: routes
})
router.beforeEach((to, from, next) => {
    // ...
     if (window.sessionStorage.getItem("sessiontoken")!=null) {

      //登录过的话，允许通行
       next()
    }else{ //alert(11)
       console.log(111)
       if (to.path === '/login') {
            return next();
        }
       next('/login');
    }
    
})
//创建vue实例，组件的创建应该在vue创建之前
var vm = new Vue({
    el:'#containers',
    data:{

        sessiontoken:'',
        ss:0,//控制预览弹出框的左边标题的当前状态
       index:1,//控制大标题下的小标题的底部红色线
       
    },
    //在创建vue实例时，引入路由
    //router:router,
        // 封装的模板标签
         router:router,
        components:{
        "htgl":htgl,
        "pages":pages,
        "shenhe":shenhe,//审核
        "headers":headers//头部

    },
   
    store:store,
    methods:{
                // 调整图片大小的
       adjust:function (e) {
          //获取容器宽高
          var pwidth = $(e.currentTarget).parent().width()
          var pheight = $(e.currentTarget).parent().height()
          //获取图片实际宽高
          var width = $(e.currentTarget).width()
          var height = $(e.currentTarget).height()
          //获取实际宽高比例
          var kgb = width/height
          var gkb = height/width
          //console.log(width,height,pwidth,pheight)
          //修正图片宽高 多加了==
          if(width<height||width==height){
              $(e.currentTarget).css('width',pwidth+'px')
              var xzg = pwidth/kgb
              $(e.currentTarget).css('height',xzg+'px')
             // console.log('取宽')
          }else{
              $(e.currentTarget).css('height',pheight+'px')
              var xzk = pheight*kgb
              $(e.currentTarget).css('width',xzk+'px')
             // console.log('取高')
          }
      },
    },
    mounted:function(){

    }
  })