import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
//详情页
{
  path:'/',redirect:'/hglxt/',name:"hglxt",components:require('../components/hglxt/login')
},
{
  path:'/login',name:'login',component:require('../components/hglxt/login')
},
{
  path:'/hglxt',component:require('../components/hglxt/shgzt'),children:[
    { path:'/hglxt/user/:type/:page',name:'user',component:require('../components/hglxt/user')},//用户审核
    { path:'/hglxt/qy/:type/:page',name:'qy',component:require('../components/hglxt/qy')},//企业审核
    { path:'/hglxt/mm/:type/:page',name:'mm',component:require('../components/hglxt/mm')},//苗木审核
    { path:'/hglxt/mhss/:neir',name:'mhss',component:require('../components/hglxt/mhss')},//模糊搜索
    { path:'/hglxt/ddzz/:type/:page',name:'ddzz',component:require('../components/hglxt/ddzz')}//订单跟踪

  ]
},
{
  path:'/hglxt',component:require('../components/hglxt/shgzt1'),children:[
    { path:'/hglxt/ycgxq/:id',name:'ycgxq',component:require('../components/hglxt/ycgxq')},//订单详情
    { path:'/hglxt/jypm/:type/:page',name:'jypm',component:require('../components/hglxt/jypm')}//交易排名
  ]

},
{
  path:'/ewm',name:'ewm',component:require('../components/hglxt/ewm')
},
{
  path:'/testtt',name:'mytest',component:require('../components/testplay/test1')
}
],
});
