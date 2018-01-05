var se
function locations(name, url){
  if (!url) {
    url = window.location.href;
    console.log(url)
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var common_biaozhun={
  "mu_mj": [{
    "min": 3,
    "max": 4
  },{
    "min": 5,
    "max": 6
  },{
    "min": 7,
    "max": 8
  },{
    "min": 9,
    "max": 10
  },{
    "min": 11,
    "max": 12
  },{
    "min": 13,
    "max": 15
  },{
    "min": 16,
    "max": 18
  },{
    "min": 19,
    "max": 21
  },{
    "min": 22,
    "max": 25
  },{
    "min": 26,
    "max": 30
  },{
    "min": 31,
    "max": 35
  },{
    "min": 36,
    "max": 40
  },{
    "min": 41,
    "max": 50
  },{
    "min": 50,
    "max": 55
  },{
    "min": 56,
    "max": 60
  },{
    "min": 61,
    "max": 65
  },{
    "min": 66,
    "max": 70
  },{
    "min": 71,
    "max": 75
  },{
    "min": 76,
    "max": 80
  },{
    "min": 81,
    "max": 85
  },{
    "min": 86,
    "max": 90
  },{
    "min": 91,
    "max": 95
  },{
    "min": 96,
    "max": 100
  },{
    "min": 100,
    "max": 120
  },{
    "min": 120,
    "max": 150
  },{
    "min": 150,
    "max": 200
  }],
  "mu_dj": [{
    "min": 3,
    "max": 4
  },{
    "min": 5,
    "max": 6
  },{
    "min": 7,
    "max": 8
  },{
    "min": 9,
    "max": 10
  },{
    "min": 11,
    "max": 12
  },{
    "min": 13,
    "max": 15
  },{
    "min": 16,
    "max": 18
  },{
    "min": 19,
    "max": 21
  },{
    "min": 22,
    "max": 25
  },{
    "min": 26,
    "max": 30
  },{
    "min": 31,
    "max": 35
  },{
    "min": 36,
    "max": 40
  },{
    "min": 41,
    "max": 50
  },{
    "min": 50,
    "max": 55
  },{
    "min": 56,
    "max": 60
  },{
    "min": 61,
    "max": 65
  },{
    "min": 66,
    "max": 70
  },{
    "min": 71,
    "max": 75
  },{
    "min": 76,
    "max": 80
  },{
    "min": 81,
    "max": 85
  },{
    "min": 86,
    "max": 90
  },{
    "min": 91,
    "max": 95
  },{
    "min": 96,
    "max": 100
  },{
    "min": 100,
    "max": 120
  },{
    "min": 120,
    "max": 150
  },{
    "min": 150,
    "max": 200
  }],
  "mu_rg": [{
    "min": 50,
    "max": 100
  },{
    "min": 100,
    "max": 150
  },{
    "min": 150,
    "max": 200
  },{
    "min": 200,
    "max": 250
  },{
    "min": 250,
    "max": 300
  },{
    "min": 300,
    "max": 350
  },{
    "min": 350,
    "max": 400
  },{
    "min": 400,
    "max": 450
  },{
    "min": 450,
    "max": 500
  },{
    "min": 500,
    "max": 550
  },{
    "min": 550,
    "max": 600
  },{
    "min": 600,
    "max": 650
  },{
    "min": 650,
    "max": 700
  },{
    "min": 700,
    "max": 800
  },{
    "min": 800,
    "max": 900
  },{
    "min": 900,
    "max": 1000
  },{
    "min": 1000,
    "max": 1100
  }, 
{
    "min": 1100,
    "max": 1200
  },{
    "min": 1200,
    "max": 1500
  }],
  "mu_zg": [{
    "min": 50,
    "max": 100
  },{
    "min": 100,
    "max": 150
  },{
    "min": 150,
    "max": 200
  },{
    "min": 200,
    "max": 250
  },{
    "min": 250,
    "max": 300
  },{
    "min": 300,
    "max": 350
  },{
    "min": 350,
    "max": 400
  },{
    "min": 400,
    "max": 450
  },{
    "min": 450,
    "max": 500
  },{
    "min": 500,
    "max": 550
  },{
    "min": 550,
    "max": 600
  },{
    "min": 600,
    "max": 650
  },{
    "min": 650,
    "max": 700
  },{
    "min": 700,
    "max": 800
  },{
    "min": 800,
    "max": 900
  },{
    "min": 900,
    "max": 1000
  },{
    "min": 1000,
    "max": 1100
  }, 
{
    "min": 1100,
    "max": 1200
  },{
    "min": 1200,
    "max": 1500
  }],
  "mu_zfjg": [{
    "min": 50,
    "max": 100
  },{
    "min": 100,
    "max": 150
  },{
    "min": 150,
    "max": 200
  },{
    "min": 200,
    "max": 250
  },{
    "min": 250,
    "max": 300
  },{
    "min": 300,
    "max": 350
  },{
    "min": 350,
    "max": 400
  },{
    "min": 400,
    "max": 450
  },{
    "min": 450,
    "max": 500
  },{
    "min": 500,
    "max": 550
  },{
    "min": 550,
    "max": 600
  },{
    "min": 600,
    "max": 650
  },{
    "min": 650,
    "max": 700
  },{
    "min": 700,
    "max": 800
  },{
    "min": 800,
    "max": 900
  },{
    "min": 900,
    "max": 1000
  },{
    "min": 1000,
    "max": 1100
  }, 
{
    "min": 1100,
    "max": 1200
  },{
    "min": 1200,
    "max": 1500
  }],
  "mu_gf": [{
    "min": 50,
    "max": 100
  },{
    "min": 100,
    "max": 150
  },{
    "min": 150,
    "max": 200
  },{
    "min": 200,
    "max": 250
  },{
    "min": 250,
    "max": 300
  },{
    "min": 300,
    "max": 350
  },{
    "min": 350,
    "max": 400
  },{
    "min": 400,
    "max": 450
  },{
    "min": 450,
    "max": 500
  },{
    "min": 500,
    "max": 550
  },{
    "min": 550,
    "max": 600
  },{
    "min": 600,
    "max": 650
  },{
    "min": 650,
    "max": 700
  },{
    "min": 700,
    "max": 800
  },{
    "min": 800,
    "max": 900
  },{
    "min": 900,
    "max": 1000
  },{
    "min": 1000,
    "max": 1100
  }, 
{
    "min": 1100,
    "max": 1200
  },{
    "min": 1200,
    "max": 1500
  }]
}

 

function JSONS(obj,where){
  console.log(where)
  console.log(JSON.parse(JSON.stringify(obj)))
}
var Boss="http://m1-ymboss.leanapp.cn/api/v1/"
console.log(Boss)
var Boss1="http://m1-ymboss.leanapp.cn/"//公共地址
var sd = window.localStorage.getItem('user_id');
var sessiontoken=sd//'rmdqrg8ayjm104o1q6m5uayvd'//6qzpmkebwv13gm481b8h56945   rmdqrg8ayjm104o1q6m5uayvd
var sp = window.localStorage.getItem('user_phone');
// $.ajaxSetup({
//   async: false
// });
// 卖家的个人资料
// var common_userInfo='no'
// $.get(Boss+"user/info", {
//   "sessiontoken": sd
// }, function(data) {
//     console.log(data.results)
//     se=data.results
//     store.state.datas = data.results
//     console.log(66666666666666666666,store.state)
//      common_userInfo= data.results
//   })






var common_fangdatuItem// 声明放大图的变量，到时候直接把点击的li的循环的item赋值给这个变量，然后放大图获取这个变量的item去获取数据
var groupId=0//暂时默认是个人项目0
//var common_treeCount=''//购物车的总数



// function common_gouwucheCount(){
//   // 查看指定群组/企业ID的初选的总数也就是购物车总数
//   $.get(Boss+"select",{"sessiontoken":sessiontoken,'groupId':groupId},function(data){
//     console.log("查看指定群组")
//     console.log(data)
//     common_treeCount=data.results.count
//   })
// }
// 0000000000000=》加入购物车和收藏接口
// 1是加入购物车  11是放大图的加入购物车   2是收藏的文字   3是图标的收藏
function common_adds(e,n,objectId,type,amount,img){//e  n  id  type：加入购物车是groupid  收藏是收藏的类型  数量
       //抛物线的终点
       // alert(2)
     //alert(img)
if(sessiontoken==null){
  vm.$store.state.denglu=true
  vm.$store.state.zhuce=true
  return
}
// 火狐没有offset()，所以火狐的时候不能用飞车
if (navigator.userAgent.indexOf('Firefox') >= 0) {  
         
    }else{


if(img!=undefined){
  // alert(1)
        var offset = $("#gouwuche").offset();
        var flyer = $('<img class="u-flyer" src="'+img+'">');                
        flyer.fly({
            start: {
                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                top: event.pageY //开始位置（必填）
            },
            end: {
                left: offset.left+30, //结束位置（必填）
                top: offset.top+120, //结束位置（必填）
                width: 0, //结束时宽度
                height: 0 //结束时高度
            },
            onEnd: function(){ //结束回调
                this.destory(); //移除dom
            }
        });
}
      
}


  if(n==1||n==11){    
   if(n==1){
    if($(e.currentTarget).html()=='加入购物车'){
      $(e.currentTarget).addClass("c60B346")
      $(e.currentTarget).html("已加入购物车")
                      // 放请求
                      $.post(Boss+"select",{
                        "sessiontoken":sessiontoken,
                        "groupId":groupId,
                        "treeId":objectId,
                        "amount":1
                      },function(data){
                        console.log("点一次加一次到购物车")
                        store.state.treeCount++
                        console.log(data)
                      })
                    }  
                  }else if(n==11){
                   $(e.currentTarget).removeClass("bg60B346s0")
                   $(e.currentTarget).removeClass("c60B346s0")
                   $(e.currentTarget).addClass("bg60B346s1")
                   $(e.currentTarget).html("已加入购物车")
                   $.ajax({
                    url:Boss+"select",
                    type: 'POST',
                    data:{
                      "sessiontoken":sessiontoken,
                      "groupId":groupId,
                      "treeId":objectId,
                      "amount":amount
                    },
                    success: function(data) {
                     console.log("修改加入购物车的数量")
                     console.log(data)
                     store.state.treeCount++
                   }
                 });

                   
                 }

    // 调用查询购物车的总数的函数更新购物车数量
    // if(location.href.indexOf("mpc/home")!=-1||location.href.indexOf("detail")!=-1){
    //  common_gouwucheCount()
    // }
    



  }else if(n==2||n==3){

// A.当前是已收藏则取消收藏
if($(e.currentTarget).html()=='已收藏'||$(e.currentTarget).attr("src")=='/static/tu-detail/1-61.png'||$(e.currentTarget).attr("src")=='/static/tu-detail/1-62.png'){ 
                 //取消收藏的接口
                 $.ajax({
                  url:Boss+"favorite",
                  type: 'DELETE',
                  data:{
                    "sessiontoken":sessiontoken,
                    "type":type,
                    "objectId":objectId},
                    success: function(data) {
                    }
                  });
                 // 这里是通过变量控制的  所以不需要手动改
                        if($(e.currentTarget).attr("src")=='/static/tu-detail/1-62.png'){
                          return
                        }
                // 11文字的已收藏变收藏
                $(e.currentTarget).removeClass("c60B346")
                $(e.currentTarget).html("收藏")
                // 12图片的已收藏变空心的收藏
                $(e.currentTarget).attr("src",'/static/tu-detail/1-59.png')                 

              }else if($(e.currentTarget).html()=='收藏'||$(e.currentTarget).attr("src")=='/static/tu-detail/1-59.png'||$(e.currentTarget).attr("src")=='/static/tu-detail/1-58.png'){
// B.当前是收藏则已收藏
                  // 收藏的接口
                  $.post(Boss+"favorite",{
                    "sessiontoken":sessiontoken,
                    "type":type,
                    "objectId":objectId
                  },function(data){
                  })
                   // 这里是通过变量控制的  所以不需要手动改
                        if($(e.currentTarget).attr("src")=='/static/tu-detail/1-58.png'){
                          return
                        }
                  $(e.currentTarget).addClass("c60B346")
                  $(e.currentTarget).html("已收藏")
                // 12图片的收藏变实心的已收藏
                $(e.currentTarget).attr("src",'/static/tu-detail/1-61.png')


              }else if($(e.currentTarget).html()=='取消收藏'){
// C.当前是取消收藏直接执行取消收藏操作-----收藏夹页面的苗木的取消收藏
                       //取消收藏的接口
                       $.ajax({
                        url:Boss+"favorite",
                        type: 'DELETE',
                        data:{
                          "sessiontoken":sessiontoken,
                          "type":type,
                          "objectId":objectId},
                          success: function(data) {
                          }
                        });

                     }else if($(e.currentTarget).attr("src")=='/static/tu-detail/1-56.png'||$(e.currentTarget).attr("src")=='/static/tu-detail/1-107.png'){
// D.当前是图标的收藏苗圃-----放大图右上角的左边是星星的（星星都是黑色的===）
                       //收藏的接口
                       $.post(Boss+"favorite",{
                        "sessiontoken":sessiontoken,
                        "type":type,
                        "objectId":objectId
                      },function(data){
                      })
                

              }else if($(e.currentTarget).attr("src")=='/static/tu-detail/1-57.png'){
// D.当前是图标的取消收藏-----放大图右上角的左边是星星的（星星都是绿色的===）
                     $.ajax({
                    url:Boss+"favorite",
                    type: 'DELETE',
                    data:{
                        "sessiontoken":sessiontoken,
                        "type":type,
                        "objectId":objectId},
                        success: function(data) {
                        }
                    });

              }

            }
          }