import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
//详情页 
{
  path:'/detail',component:require('../components/detail/shop'),children:[


  { path:'/detail/tj/:indexs',name:'tj',component:require('../components/detail/tj')},
  { path:'/detail',redirect:'/detail/tj/0',component:require('../components/detail/tj')},
  { path:'/detail/tt/:indexs',name:'tt',component:require('../components/detail/tt')},
  { path:'/detail/all/:indexs',name:'all',component:require('../components/detail/all')},
  { path:'/detail/item/:indexs',name:'item',component:require('../components/detail/item')}
  ]
},
// 苗圃场
{
 path:'/mpc/:groundId',component:require('../components/mpc/mpc'),children:[
 { path:'/mpc/home/:page/:groundId',name:'home',component:require('../components/mpc/home')},//苗圃场首页
  { path:'/mpc/about/:page/:groundId',name:'about',component:require('../components/mpc/about')},//关于苗圃
 //{ path:'/mpc/tdmessage',name:'tdmessage',component:require('../components/mpc/tdmessage')},//团队信息
   { path:'/mpc/qymessage/:who/:objectId/:has',name:'qymessage',component:require('../components/mpc/qymessage')}//企业信息
 ]
},
// 下载页面
{
   path:'/download',component:require('../components/detail/download')
},
{
   path:'/downloads',component:require('../components/detail/downloads')
},
// 购物车
{
 path:'/gouwuche',component:require('../components/gouwuche/gouwuche'),redirect:'/gouwuche/gouwuche1/1',children:[
   { path:'/gouwuche/gouwuche1/:page',name:'gouwuche1',component:require('../components/gouwuche/gouwuche1')},//初选,
   { path:'/gouwuche2/:page',name:'gouwuche2',component:require('../components/gouwuche/gouwuche2')},//验苗
   { path:'/gouwuche3/:page/:index',name:'gouwuche3',component:require('../components/gouwuche/gouwuche3')},//运输
   { path:'/gouwuche4/:page',name:'gouwuche4',component:require('../components/gouwuche/gouwuche4')}//收货
   
]
},

// 验苗报告
{
 path:'/baogao/:objectId/:where/:carriage_id/:shipment_id',name:'baogao',component:require('../components/gouwuche/baogao')
},

// 收货的查看运单详情
{
 path:'/xiangqing/:objectId',name:'xiangqing',component:require('../components/gouwuche/xiangqing')
},

// 重定位 从首页的登录页面跳到详情页的时候重定向，登录页面的跳转地址是index.html、
{
  path:'/',redirect:'/detail',components:require('../components/detail/shop')
},
// 订单
{
  path:'/order',component:require('../components/order/order'),redirect:'orderView',children:[//顶栏
   {path:'/order/orderView',name:'orderView',component:require('../components/order/orderView')},//四大模块的入口
   {path:'/order/orderViewItem/:index/:objectId',name:'orderViewItem',component:require('../components/order/orderViewItem')}//1.承接交易与拟定交易方式

  ]
},
{
  path:'/',redirect:'/detail',components:require('../components/detail/shop')
}
],
});
