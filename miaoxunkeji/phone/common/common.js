
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



var common_limit1000=1000
var Boss="http://m1-ymboss.leanapp.cn/api/v1/"
console.log(Boss)
var Boss1="http://m1-ymboss.leanapp.cn/"//公共地址
var sd = window.localStorage.getItem('user_id');
var sessiontoken=sd//'rmdqrg8ayjm104o1q6m5uayvd'
var sp = window.localStorage.getItem('user_phone');
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
// $.ajaxSetup({
//   async: false
// });
// 卖家的个人资料
// $.get("http://m1-ymboss.leanapp.cn/api/v1/user/info", {
//   "sessiontoken": sd
// }, function(data) {
//     //console.log(data)
//     se = data.results
//     //gsv=data.results
//   })


// // 1111111111=》common_userInfo登录人个人资料
// var common_userInfo=''
// $.get(Boss+"user/info", {
//   "sessiontoken":sessiontoken
// }, function(data) {
//           // console.log("2223333")
//           // console.log(data)
//           common_userInfo= data.results
//         })





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
function common_adds(e,n,objectId,type,amount){//e  n  id  type：加入购物车是groupid  收藏是收藏的类型  数量

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


//  Group - 删除苗圃埸
function common_deletedmpc(objectId){
    $.ajax({
                        url:Boss+"ground/"+objectId,
                        type: 'DELETE',
                        async:false,
                        data:{
                          "sessiontoken":sessiontoken,
                         },
                          success: function(data) {
                        history.go(-1)
                        location.reload()
                        setTimeout(function(){
                        // 删除苗圃场后模拟点击第一个苗圃场
                        //console.log($(".clicks").html())
                         $(".clicks").click()   
                        },300)
                                    
                          }
                        });

}


// TreeGroup - 添加/修改苗木数据
function common_addtree(
  objectId,//苗木ID, 存在时则为修改苗木数据，否则当作添加
  mu_name,//苗木名称
  mu_type,//苗木类型（种植情况）对应值 [地苗，袋苗，假植苗，盘苗]
  groundId,//苗圃埸ID
  mu_package_weight,//重量，对应袋苗使用
  mu_mj_min,mu_mj_max,//米径
  mu_dj_min,mu_dj_max,//地径
  mu_zg_min,mu_zg_max,//自然高
  mu_gf_min,mu_gf_max,//冠福
  mu_rg_min,mu_rg_max,//肉高
  mu_zfjg_min,mu_zfjg_max,//主分支高
  mu_price,mu_stock,//价格 库存
  mu_coordinate_lat,mu_coordinate_lng//纬度经度
  ){
                       $.post(Boss+"tree",{
                        "sessiontoken":sessiontoken,
                        //'mu_photo':mu_photo,//手机操作的
                        "objectId":objectId,
                        "mu_name":mu_name,
                        "mu_type":mu_type,
                        "groundId":groundId,
                        "mu_package_weight":mu_package_weight,
                        "mu_mj_min":mu_mj_min,
                        "mu_mj_max":mu_mj_max,
                        "mu_dj_min":mu_dj_min,
                        "mu_dj_max":mu_dj_max,
                        "mu_zg_min":mu_zg_min,
                        "mu_zg_max":mu_zg_max,
                        "mu_gf_min":mu_gf_min,
                        "mu_gf_max":mu_gf_max,
                        "mu_rg_min":mu_rg_min,
                        "mu_rg_max":mu_rg_max,
                        "mu_zfjg_min":mu_zfjg_min,
                        "mu_zfjg_max":mu_zfjg_max,
                        "mu_price":mu_price,
                        "mu_stock":mu_stock,
                        "mu_coordinate_lat":mu_coordinate_lat,
                        "mu_coordinate_lng":mu_coordinate_lng,
                        "ispublish":'1'//是否直接提交审核，1：提交审核；0:不提交
                      },function(data){
                        console.log(data)
                      })
}