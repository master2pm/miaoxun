

// (function($) {
//   $.fn.extend({
//     resizeImg: function(opt, callback) {
//       var defaults = {
//         w: 200,
//         h: 150
//       },
//           opts = $.extend(defaults, opt);

//       //获取图片实际宽高，此方法摘自网络
//       var getImgWh = function(url, callback) {
//         var width, height, intervalId, check, div, img = new Image(),
//             body = document.body;
//         img.src = url;

//         //从缓存中读取
//         if (img.complete) {
//           return callback(img.width, img.height);
//         };

//         //通过占位提前获取图片头部数据
//         if (body) {
//           div = document.createElement('div');
//           div.style.cssText = 'visibility:hidden;position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden';
//           div.appendChild(img)
//           body.appendChild(div);
//           width = img.offsetWidth;
//           height = img.offsetHeight;
//           check = function() {
//             if (img.offsetWidth !== width || img.offsetHeight !== height) {
//               clearInterval(intervalId);
//               callback(img.offsetWidth, img.clientHeight);
//               img.onload = null;
//               div.innerHTML = '';
//               div.parentNode.removeChild(div);
//             };
//           };
//           intervalId = setInterval(check, 150);
//         };
//         // 加载完毕后方式获取
//         img.onload = function() {
//           callback(img.width, img.height);
//           img.onload = img.onerror = null;
//           clearInterval(intervalId);
//           body && img.parentNode.removeChild(img);
//         };
//       };

//       this.each(function() {
//         var _this = this;
//         getImgWh(this.src, function(imgWidth, imgHeight) {
//           //计算图片最大宽度                        
//           if (imgWidth > opts["w"]) {
//             _this.width = opts["w"];
//             _this.height = imgHeight * (opts["w"] / imgWidth);
//             imgWidth = opts["w"];
//             imgHeight = _this.height;
//           }
//           //计算图片最大高度
//           if (imgHeight > opts["h"]) {
//             _this.height = opts["h"];
//             _this.width = imgWidth * (opts["h"] / imgHeight);
//             imgHeight = opts["h"];
//             imgWidth = _this.width;
//           }

//           //水平居中，垂直居中
//           $(_this).css({
//             "margin-top": (opts["h"] - imgHeight) / 2,
//             "margin-left": (opts["w"] - imgWidth) / 2
//           });

//         });

//       });
//     }
//   });
// })(jQuery); 



  $(document).on("click",".add",function(){
    // $(".shangchuan").css("display","block")
     $('#file').click()//模拟上传框点击，触发上传事件
  })

// 点击透明层的地方让透明层消失
    $(".shangchuan").on("click",function(event){
     var target=event.target
     if(target.nodeName=="DIV"){
$(".shangchuan").css("display","none")
     }
  });



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

// 单个的转base64转文件对象  base64,formData,append的项目名字
    // 调用
    // var files='base64的路径'
    // var items="appendTitle"
    // commonFile(files,formData,items)
function commonFile(files,formData,items){
                       //base64转换为blob对象
                        var text = window.atob(files.split(",")[1]);
                        var buffer = new ArrayBuffer(text.length);
                        var ubuffer = new Uint8Array(buffer);
                        var pecent = 0 , loop = null;

                        for (var n = 0; n < text.length; n++) {
                            ubuffer[n] = text.charCodeAt(n);
                        }
                        var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder;
                        var blob;
                        if (Builder) {
                            var builder = new Builder();
                            builder.append(buffer);
                            blob = builder.getBlob(type);
                        } else {
                            blob = new window.Blob([buffer], {type : 'image/png'});
                        }
                        
                            formData.append(items,blob);//添加的项目名称             
}




// 个人资料

//多个的转base64转文件对象  base64['srcdddddddd','srcdddddddd','srcdddddddd','srcdddddddd'],formData,项目名字[name1,name2,name3,name4]
    // 调用
    // var items="appendTitle"
    // var files=['base64的路径1','base64的路径2','base64的路径3']
    // var items=["appendTitle1","appendTitle2","appendTitle3"]
    // commonFiles(files,formData,items)
function commonFiles(files,formData,items){
                       for (var i = 0; i < files.length; i++) {
                       //base64转换为blob对象
                        var text = window.atob(files[i] .split(",")[1]);
                        var buffer = new ArrayBuffer(text.length);
                        var ubuffer = new Uint8Array(buffer);
                        var pecent = 0 , loop = null;

                        for (var n = 0; n < text.length; n++) {
                            ubuffer[n] = text.charCodeAt(n);
                        }
                        var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder;
                        var blob;
                        if (Builder) {
                            var builder = new Builder();
                            builder.append(buffer);
                            blob = builder.getBlob(type);
                        } else {
                            blob = new window.Blob([buffer], {type : 'image/png'});
                        }
                        //循环项目名称，依次添加项目
                            formData.append(items[i],blob);//依次添加的项目名称                 
                   
                    }           
}



// var common_user=''//用于new的个人资料的
var common_friend=''//用于邀请好友的头像的
var common_limit1000=1000
var common_limit20=20
var common_centerAndZoom=18//地图中心级别
// var default_group=''//默认组或者个人的id  个人项目的时候是0
//  var Boss="http://m1-ymboss.leanapp.cn/api/v1/"
// var Boss1="http://stg-m1-ymboss.leanapp.cn/api/v1/"
var Boss2="http://m1-ymboss.leanapp.cn/api/v1/"//正式服
var Boss="http://stg-m1-ymboss.leanapp.cn/api/v1/"//测试服
var Boss1='http://m1-ymboss.leanapp.cn'//全国城市级联列表
console.log(Boss)
// var Boss="http://m1-ymboss.leanapp.cn/"//公共地址
var sd = window.localStorage.getItem('user_id');
var sessiontoken=sd//'rmdqrg8ayjm104o1q6m5uayvd'
var sp = window.localStorage.getItem('user_phone');

// 0查看个人信息
function common_users(callback){
               // 卖家的个人资料
$.get(Boss+"user/info",{"sessiontoken":sessiontoken},function(data){
                 console.log(data)
        if(data.status==1){
          callback(data.results)
        }
              })
}
// 1.请求默认组的内容
function common_default_groups(objectId,callback){
    $.get(Boss+"group/"+objectId,{"sessiontoken":sessiontoken},function(data){
        console.log(data)
       // obj=data.results
      callback(data.results)

      })
}

// 2.查看默认企业或者团队或者个人项目下默认的苗圃场
function common_default_mpc(objectId,callback){
  //查看团队/企业属下的苗圃埸  先让group_id为0
      $.get(Boss+"group/"+objectId+"/ground",{"sessiontoken":sessiontoken},function(data){        
         if(data.status==1){
          if(data.results.data.length>0){
             callback(data)
          }
         }
         
      })
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




var common_fangdatuIndex=-1
// var common_fangdatuItem// 声明放大图的变量，到时候直接把点击的li的循环的item赋值给这个变量，然后放大图获取这个变量的item去获取数据
// var groupId=0//暂时默认是个人项目0
// var default_group=''

var common_user=''//用于new的个人资料的
console.log("申明的个人资料common.js")
var default_group=''//当前默认组或者个人项目的id
console.log("申明的当前默认组或者个人项目的id（default_group） common.js")
var groupId=''//暂时默认是个人项目0
console.log("申明的当前默认组或者个人项目的id（groupId） common.js")
var common_fangdatuItem// 声明放大图的变量，到时候直接把点击的li的循环的item赋值给这个变量，然后放大图获取这个变量的item去获取数据
console.log("申明的当前放大图的数组变量 common.js")


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





// 初始化layui的弹出框 layui.js必须放在common.js前面
layui.use('layer', function(){
      layer = layui.layer;
        var active = {
// 方法1 我的苗圃里面的添加新苗木里面的苗圃场地址的弹出地图框
tjxmmMap: function(){
      var that = this; 
      //多窗口模式，层叠置顶
      layer.open({
        type:1 //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）。
         ,title: false //不显示标题栏
        ,area: ['600px', '600px']
        ,shade: [0.8, '#000']
        ,shadeClose:true
        ,offset: '100px'
        // ,maxmin: true
        ,resize:true
        ,scrollbar :false
        ,content: '<div id="tjxmmMaps" style="width:94%;height:94%;margin:0 auto;margin-top:3%;"></div>'
        ,zIndex: layer.zIndex //重点1
        ,success: function(layero){
          layer.setTop(layero); //重点2
          var map=new BMap.Map('tjxmmMaps')
          var point = new BMap.Point($("#tjxmmMap").attr('log'), $("#tjxmmMap").attr('lat'));
          map.centerAndZoom(point, 15);
          map.enableScrollWheelZoom()
          var myIcon = new BMap.Icon("../tu-mpz/1-68.png", new BMap.Size(29,37));
          var marker2 = new BMap.Marker(point,{icon:myIcon});  // 创建标注
          map.addOverlay(marker2);              // 将标注添加到地图中
        }
      });
    }


// 方法2



}




// 调用方法1 我的苗圃里面的添加新苗木里面的苗圃场地址的弹出地图框
$(document).on('click','#tjxmmMap',function(){
    var othis = $(this), method = othis.data('method');
    active[method] ? active[method].call(this, othis) : '';
})






});