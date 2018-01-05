// var sd = window.localStorage.getItem('user_id');
// var sp = window.localStorage.getItem('user_phone');
// $.ajaxSetup({
//     async: false
// });
// // 卖家的个人资料
// $.get("http://m1-ymboss.leanapp.cn/api/v1/user/info", {
//     "sessiontoken": sd
// }, function(data) {
//     console.log(data)
//     se = data.results
//     //gsv=data.results
// })
var mtjxmm
// 创建添加新苗木的二维数组
// 1.添加新苗木的
  if(window.sessionStorage.getItem("mtjxmm")==null){
     console.log("null of tjxmm")
   mtjxmm={
          "objectId":'',//苗圃埸ID
          "mu_photo":'',//图片
          "lawn_length":'',//草坪长
          'lawn_width':'',//草坪宽
          'lawn_density':'',//草坪密度
          'lawn_amount':'',//草坪每捆数量
          "mu_name":'',//添加新苗木名称
          'mu_type':'',//添加新苗木类型
          'mu_zg_min':'',//添加新苗木株高最小值
          'mu_zg_max':'',//添加新苗木株高最大值
          'mu_gf_min':'',//添加新苗木冠幅最小值
          'mu_gf_max':'', //添加新苗木冠幅最大值
          'mu_package_weight':'', //添加新苗木的几斤袋
          'mu_rg_min':'',//添加新苗木的肉高最小值
          'mu_rg_max':'',//添加新苗木的肉高最大值
          'mu_zfjg_min':'',//添加新苗木的主分支高
          'mu_zfjg_max':'',//添加新苗木的主分支高
          'mu_mj_min':'', //添加新苗木的米茎最小值
          'mu_mj_max':'',//添加新苗木的米茎最大值
          'mu_dj_min':'', //添加新苗木的地径最小值
          'mu_dj_max':'',//添加新苗木的地径最大值
          'mu_stock':'',//添加新苗木的库存
          'mu_price':''//添加新苗木的价格
          // "mu_name":this.name,//草坪长
          // 'mu_type':this.chosetype,//草坪宽
          // 'mu_zg_min':this.zgmin,//草坪密度
          // 'mu_zg_max':this.zgmax,//草坪数量
      }
      window.sessionStorage.setItem("mtjxmm",JSON.stringify(mtjxmm))
  }else{
   console.log("nonull of tjxmm")
    mtjxmm=JSON.parse(window.sessionStorage.getItem("mtjxmm"))
}


var mpc
// 创建苗圃场的二维数组
if(window.sessionStorage.getItem("mpc")==null){
    console.log("null")
   mpc={
          "objectId":'',//苗圃埸ID
          "gg_name":'',//苗圃埸名称
          "gg_intro":'',//苗圃埸简介
          "gg_contact_number":'',//苗圃埸联系人电话
          "gg_contacts":'',//苗圃埸联系人姓名
          "gg_address":'',//苗圃埸详细地址
          "gg_city":'',//苗圃埸所在城市
          "gg_province":'',//苗圃埸所在省份
          "gg_coordinate_lat":'',//苗圃埸坐标纬度
          "gg_coordinate_lng":''//苗圃埸坐标经度
      }
      window.sessionStorage.setItem("mpc",JSON.stringify(mpc))
       mpc=JSON.parse(window.sessionStorage.getItem("mpc"))
  }else{
   console.log("nonull")
    mpc=JSON.parse(window.sessionStorage.getItem("mpc"))
}



var addtree
// 添加/修改苗木数据的二维数组
if(window.sessionStorage.getItem("addtree")==null){
    console.log("addtreenull")
   addtree={
                        // "objectId":objectId,
                        // "mu_name":mu_name,
                        // "mu_type":mu_type,
                        // "groundId":groundId,
                        // "mu_package_weight":mu_package_weight,
                        // "mu_mj_min":mu_mj_min,
                        // "mu_mj_max":mu_mj_max,
                        // "mu_dj_min":mu_dj_min,
                        // "mu_dj_max":mu_dj_max,
                        // "mu_zg_min":mu_zg_min,
                        // "mu_zg_max":mu_zg_max,
                        // "mu_gf_min":mu_gf_min,
                        // "mu_gf_max":mu_gf_max,
                        // "mu_rg_min":mu_rg_min,
                        // "mu_rg_max":mu_rg_max,
                        // "mu_zfjg_min":mu_zfjg_min,
                        // "mu_zfjg_max":mu_zfjg_max,
                        // "mu_price":mu_price,
                        // "mu_stock":mu_stock,
                        // "mu_coordinate_lat":mu_coordinate_lat,
                        // "mu_coordinate_lng":mu_coordinate_lng,
                        // "ispublish":'1'//是否直接提交审核，1：提交审核；0:不提交
      }
      window.sessionStorage.setItem("addtree",JSON.stringify(addtree))
       addtree=JSON.parse(window.sessionStorage.getItem("addtree"))
  }else{
   console.log("nonull")
    addtree=JSON.parse(window.sessionStorage.getItem("addtree"))
}

// var default_group=''
// var common_user=''//用于new的个人资料的
$.ajax({
   async: false,
   type: "GET",
   url:Boss+"user/info",
   data:{"sessiontoken":sessiontoken},
   success : function(data) {
      common_user=data.results
      // 只要登录了就不可能是空
      var user=window.localStorage.getItem('default_group')
      if(window.localStorage.getItem('default_group')!=null){
                                                                 
                                                                  var user1=JSON.parse(user)
                                                                   for (var key in user1) {
                                                                       // 1.如果有记录也有登录过
                                                                       if(data.results.objectId==key){
                                                                         default_group=user1[key]
                                                                       }
                                                                   }
      }
      //  if(window.localStorage.getItem('default_group')==null){
      //        default_group=data.results.default_group
      // }else{
      //        default_group=window.localStorage.getItem('default_group')
      // }
   }
});
const store = new Vuex.Store({
    state: {
  //     default_group:default_group,
  //     common_user:common_user,//个人资料
  //       Boss: "http://m1-ymboss.leanapp.cn/api/v1/", //公共地址
		// Boss1: "http://m1-ymboss.leanapp.cn/", //公共地址
  //       sessiontoken: sd, //登录 授权码
  //       user_phone: sp, //用户头像
  //       //datas:se,
  //       group_id:0,//默认企业和团队id为0
		header:'hei',//是白色的还是黑色的顶栏底色
		biaoti:-1,//当前是第几个
     mtjxmm:mtjxmm,//添加新苗木的保存参数
        mpc:mpc,//企业/团队创建苗圃埸的保存参数
        qbmm:[],
        yfb:[],
        wfb:[],
        tdate:0,
        // 编辑苗圃场的数据
        modifyChanged:false,
        modifyObjectId:'',//苗圃埸ID
        modifyGg_name:'',//苗圃埸名称
        modifyGg_intro:'',//苗圃埸简介
        modifyGg_contact_number:'',//苗圃埸联系人电话
        modifyGg_contacts:'',//苗圃埸联系人姓名
        modifyGg_address:'',//苗圃埸详细地址
        modifyGg_city:'',//苗圃埸所在城市
        modifyGg_province:'',//苗圃埸所在省份
        modifyGg_coordinate_lat:'',//苗圃埸坐标纬度
        modifyGg_coordinate_lng:''//苗圃埸坐标经度
    },
    mutations: {
      // 发请求到后台保存数据
      httpTjxmm:function(state,obj){

                 var formData = new FormData();
                  var formData2 = new FormData();
                if(obj.objectId!=undefined){
                  formData.append("objectId",obj.objectId);
                }
                    formData.append("sessiontoken",sessiontoken);
                    formData2.append("sessiontoken",sessiontoken);
                    if(state.mtjxmm.mu_photo!=''){
                      console.log()
                      // alert("长度是"+state.mtjxmm.mu_photo.length)
                     for (var i = 0; i < state.mtjxmm.mu_photo.length; i++) {
                      if(state.mtjxmm.mu_photo[i].id==undefined){
                       //base64转换为blob对象
                        var text = window.atob(state.mtjxmm.mu_photo[i] .split(",")[1]);
                     
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
                        if(obj.insert_photo!=undefined){
                          // 其他三个标签的
                          formData2.append("mu_photo",blob);
                          // alert('sange')
                        }else{
                          formData.append("mu_photo",blob);
                          // alert('tjxmm')
                        }
                       
                       // alert(8787)
                       //console.log(state.mtjxmm.mu_photo[i],'www')
                     }
                    }};
                    

                    if(state.mtjxmm.mu_dj_min!=''){
                      formData.append("mu_dj_min",parseFloat(state.mtjxmm.mu_dj_min));  
                    }
                     if(state.mtjxmm.mu_dj_max!=''){
                      formData.append("mu_dj_max",parseFloat(state.mtjxmm.mu_dj_max)); 
                    }
                    if(state.mtjxmm.mu_dj_min!=''&&state.mtjxmm.mu_dj_max==''){
                         formData.append("mu_dj_max",parseFloat(state.mtjxmm.mu_dj_min)); 
                    }        
                     if(state.mtjxmm.mu_dj_max!=''&&state.mtjxmm.mu_dj_min==''){
                         formData.append("mu_dj_min",parseFloat(state.mtjxmm.mu_dj_max)); 
                    } 




                    if(state.mtjxmm.mu_gf_min!=''){
                      formData.append("mu_gf_min",parseFloat(state.mtjxmm.mu_gf_min));  
                    }
                     if(state.mtjxmm.mu_gf_max!=''){
                      formData.append("mu_gf_max",parseFloat(state.mtjxmm.mu_gf_max)); 
                    }   
                    if(state.mtjxmm.mu_gf_min!=''&&state.mtjxmm.mu_gf_max==''){
                         formData.append("mu_gf_max",parseFloat(state.mtjxmm.mu_gf_min)); 
                    }        
                     if(state.mtjxmm.mu_gf_max!=''&&state.mtjxmm.mu_gf_min==''){
                         formData.append("mu_gf_min",parseFloat(state.mtjxmm.mu_gf_max)); 
                    } 



                               
                    if(state.mtjxmm.mu_mj_min!=''){
                      formData.append("mu_mj_min",parseFloat(state.mtjxmm.mu_mj_min));    
                    }
                     if(state.mtjxmm.mu_mj_max!=''){
                       formData.append("mu_mj_max",parseFloat(state.mtjxmm.mu_mj_max));  
                    }
                    if(state.mtjxmm.mu_mj_min!=''&&state.mtjxmm.mu_mj_max==''){
                         formData.append("mu_mj_max",parseFloat(state.mtjxmm.mu_mj_min)); 
                    }        
                     if(state.mtjxmm.mu_mj_max!=''&&state.mtjxmm.mu_mj_min==''){
                         formData.append("mu_mj_min",parseFloat(state.mtjxmm.mu_mj_max)); 
                    } 




                    if(obj.groundId!=undefined){
                    formData.append("groundId", obj.groundId);
                    }

                    
                    if(state.mtjxmm.mu_name!=''){
                        formData.append("mu_name", state.mtjxmm.mu_name);
                    } 


                    if(state.mtjxmm.mu_package_weight!=''){
                       formData.append("mu_package_weight",parseFloat(state.mtjxmm.mu_package_weight));  
                    }



                    if(state.mtjxmm.mu_price!=''&&state.mtjxmm.mu_price!=undefined){
                      formData.append("mu_price", parseFloat(state.mtjxmm.mu_price));
                    }
                   
                    if(state.mtjxmm.mu_stock!=''){
                       formData.append("mu_stock", parseFloat(state.mtjxmm.mu_stock));
                    }
                    


                    if(state.mtjxmm.lawn_length!=undefined&&state.mtjxmm.lawn_length!=''){//草坪长
                       formData.append("lawn_length",parseFloat(state.mtjxmm.lawn_length));  
                    }
                    if(state.mtjxmm.lawn_width!=undefined&&state.mtjxmm.lawn_width!=''){//草坪宽
                       formData.append("lawn_width",parseFloat(state.mtjxmm.lawn_width));  
                    }
                    if(state.mtjxmm.lawn_density!=undefined&&state.mtjxmm.lawn_density!=''){//草坪密度
                       formData.append("lawn_density",parseFloat(state.mtjxmm.lawn_density));  
                    }
                    if(state.mtjxmm.lawn_amount!=undefined&&state.mtjxmm.lawn_amount!=''){//草坪每捆数量
                       formData.append("lawn_amount",parseFloat(state.mtjxmm.lawn_amount));  
                    }
                    


                    if(state.mtjxmm.mu_rg_min!=''){
                      formData.append("mu_rg_min",parseFloat(state.mtjxmm.mu_rg_min)); 
                      if(state.mtjxmm.mu_rg_max==''){
                      formData.append("mu_rg_max",parseFloat(state.mtjxmm.mu_rg_min));    
                      }   
                    }
                     if(state.mtjxmm.mu_rg_max!=''){
                        formData.append("mu_rg_max",parseFloat(state.mtjxmm.mu_rg_max)); 
                       if(state.mtjxmm.mu_rg_min==''){
                        formData.append("mu_rg_min",parseFloat(state.mtjxmm.mu_rg_max));    
                      }  
                    }
                   

                    formData.append("mu_type", state.mtjxmm.mu_type);

                  if(obj.mu_coordinate_lat!=undefined){
                      formData.append("mu_coordinate_lat",obj.mu_coordinate_lat);    
                    }
                  if(obj.mu_coordinate_lng!=undefined){
                      formData.append("mu_coordinate_lng",obj.mu_coordinate_lng);    
                    }

                    if(state.mtjxmm.mu_zfjg_min!=''){
                      formData.append("mu_zfjg_min",parseFloat(state.mtjxmm.mu_zfjg_min));
                      if(state.mtjxmm.mu_zfjg_max==''){
                         formData.append("mu_zfjg_max",parseFloat(state.mtjxmm.mu_zfjg_min));
                      }    
                    }
                     if(state.mtjxmm.mu_zfjg_max!=''){
                       formData.append("mu_zfjg_max",parseFloat(state.mtjxmm.mu_zfjg_max));
                       if(state.mtjxmm.mu_zfjg_min==''){
                         formData.append("mu_zfjg_min",parseFloat(state.mtjxmm.mu_zfjg_max));
                      }    
                    }

                    
                    if(state.mtjxmm.mu_zg_min!=''){
                      formData.append("mu_zg_min",parseFloat(state.mtjxmm.mu_zg_min));    
                    }
                     if(state.mtjxmm.mu_zg_max!=''){
                       formData.append("mu_zg_max",parseFloat(state.mtjxmm.mu_zg_max));  
                    }
                     if(state.mtjxmm.mu_zg_min!=''&&state.mtjxmm.mu_zg_max==''){
                         formData.append("mu_zg_max",parseFloat(state.mtjxmm.mu_zg_min)); 
                    }        
                     if(state.mtjxmm.mu_zg_max!=''&&state.mtjxmm.mu_zg_min==''){
                         formData.append("mu_zg_min",parseFloat(state.mtjxmm.mu_zg_max)); 
                    } 
  
 //在添加新苗木的时候要把照片一起提交1，否则要执行插入操作执行其他的请求
 if(obj.insert_photo!=undefined&&tdate.length>0){
  // alert('httpinsert_photo')
// 说明是在其他三个标签的图片要移除图片并进行新请求
                    jQuery.ajax({
                        url: Boss+'tree/'+obj.objectId+'/insert_photo',
                        type: "POST",
                        processData: false,
                        async:false,
                        contentType: false,
                        data: formData2,
                    })
                    .done(function(data, textStatus, jqXHR) {
                        console.log("HTTP Request Succeeded: " + jqXHR.status);
                        console.log(data);
                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        console.log("HTTP Request Failed");
                    })
                    .always(function() {});
  }
                                                    
                console.log(formData)
                jQuery.ajax({
                        url: Boss+"tree",
                        type: "POST",
                         async:false,
                        processData: false,
                        contentType: false,
                        data: formData,
                    })
                    .done(function(data, textStatus, jqXHR) {
                        console.log("HTTP Request Succeeded: " + jqXHR.status);
                        console.log(data);
                        // 若果是按了发布按钮
                        if(data.status==1){
                           if(obj.wheres=='fb'){
                             store.commit("updataStatus",{"objectId":data.results.objectId,"status":0})
                        }
                        }
                       
                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        console.log("HTTP Request Failed");
                    })
                    .always(function() {});
      },
      go:function(state,n){
        history.go(n)
    },
    // 添加新苗木还是修改的让数据挂到4个模块
    whereTjxmm:function(state,obj){
         var mtjxmm={
          "objectId":obj.objectId,//苗圃埸ID
          "mu_photo":obj.mu_photo,
          "lawn_length":obj.lawn_length,//草坪长
          'lawn_width':obj.lawn_width,//草坪宽
          'lawn_density':obj.lawn_density,//草坪密度
          'lawn_amount':obj.lawn_amount,//草坪每捆数量
          "mu_name":obj.mu_name,//添加新苗木名称
          'mu_type':obj.mu_type,//添加新苗木类型
          'mu_zg_min':obj.mu_zg_min,//添加新苗木株高最小值
          'mu_zg_max':obj.mu_zg_max,//添加新苗木株高最大值
          'mu_gf_min':obj.mu_gf_min,//添加新苗木冠幅最小值
          'mu_gf_max':obj.mu_gf_max, //添加新苗木冠幅最大值
          'mu_package_weight':obj.mu_package_weight, //添加新苗木的几斤袋
          'mu_rg_min':obj.mu_rg_min,//添加新苗木的肉高最小值
          'mu_rg_max':obj.mu_rg_max,//添加新苗木的肉高最大值
          'mu_zfjg_min':obj.mu_zfjg_min,//添加新苗木的主分支高
          'mu_zfjg_max':obj.mu_zfjg_max,//添加新苗木的主分支高
          'mu_mj_min':obj.mu_mj_min, //添加新苗木的米茎最小值
          'mu_mj_max':obj.mu_mj_max,//添加新苗木的米茎最大值
          'mu_dj_min':obj.mu_dj_min, //添加新苗木的地径最小值
          'mu_dj_max':obj.mu_dj_max,//添加新苗木的地径最大值
          'mu_stock':obj.mu_stock,//添加新苗木的库存
          'mu_price':obj.mu_price//添加新苗木的价格
          // "mu_name":this.name,//草坪长
          // 'mu_type':this.chosetype,//草坪宽
          // 'mu_zg_min':this.zgmin,//草坪密度
          // 'mu_zg_max':this.zgmax,//草坪数量
      }
      state.mtjxmm=mtjxmm
       window.sessionStorage.setItem("mtjxmm",JSON.stringify(mtjxmm))
    },

    saveTjxmm:function(state,obj){
          function blobToDataURL(blob, callback) {
              var a = new FileReader();
              a.onload = function (e) { callback(e.target.result); }
              a.readAsDataURL(blob);
          }
    // console.log(obj)
          var mtjxmm=JSON.parse(window.sessionStorage.getItem("mtjxmm"))
        if(obj.mu_name!=undefined){//名字
          mtjxmm.mu_name=obj.mu_name
        }
        if(obj.mu_photo.length>0){
          //遍历图片转换成base64存入缓存
          for (var i = 0; i < obj.mu_photo.length; i++) {
            blobToDataURL(obj.mu_photo[i], function (dataurl) {
             //如果缓存中图片长度为0，直接压入
                  var isLive = false
                 if(mtjxmm.mu_photo.length<1){
                    mtjxmm.mu_photo.push(dataurl)
                 }else{
                  //否则遍历缓存中的图片，找出不重复的压入
                    for (var n = 0; n < mtjxmm.mu_photo.length; n++) {
                     if(mtjxmm.mu_photo[n]==dataurl){
                          isLive = true 
                     }
                   }
                   if(isLive==false){
                     mtjxmm.mu_photo.push(dataurl)
                   }
                 }
            });
          }
        }



        if(obj.lawn_length!=undefined){//草坪长
          mtjxmm.lawn_length=obj.lawn_length
        }
        if(obj.lawn_width!=undefined){//草坪宽
          mtjxmm.lawn_width=obj.lawn_width
        }
        if(obj.lawn_density!=undefined){//草坪密度
          mtjxmm.lawn_density=obj.lawn_density
        }
        if(obj.lawn_amount!=undefined){//草坪每捆数量
          mtjxmm.lawn_amount=obj.lawn_amount
        }



        if(obj.mu_type!=undefined){//类型
          mtjxmm.mu_type=obj.mu_type
        }
        if(obj.mu_zg_min!=undefined){//株高
          mtjxmm.mu_zg_min=obj.mu_zg_min
        }
        if(obj.mu_zg_max!=undefined){//株高
          mtjxmm.mu_zg_max=obj.mu_zg_max
        }
        if(obj.mu_gf_min!=undefined){//冠幅
          mtjxmm.mu_gf_min=obj.mu_gf_min
        }
        if(obj.mu_package_weight!=undefined){//几斤袋
          mtjxmm.mu_package_weight=obj.mu_package_weight
        }
        if(obj.mu_gf_max!=undefined){//冠幅
          mtjxmm.mu_gf_max=obj.mu_gf_max
        }
        if(obj.mu_rg_min!=undefined){//肉高
          mtjxmm.mu_rg_min=obj.mu_rg_min
        }
        if(obj.mu_rg_max!=undefined){//肉高
          mtjxmm.mu_rg_max=obj.mu_rg_max
        }
        if(obj.mu_zfjg_min!=undefined){//主分支
          mtjxmm.mu_zfjg_min=obj.mu_zfjg_min
        }
        if(obj.mu_zfjg_max!=undefined){//主分支
          mtjxmm.mu_zfjg_max=obj.mu_zfjg_max
        }
        if(obj.mu_dj_min!=undefined){//地径
          mtjxmm.mu_dj_min=obj.mu_dj_min
        }
        if(obj.mu_dj_max!=undefined){//地径
          mtjxmm.mu_dj_max=obj.mu_dj_max
        }
        if(obj.mu_mj_min!=undefined){//米茎
          mtjxmm.mu_mj_min=obj.mu_mj_min
        }
        if(obj.mu_mj_max!=undefined){//米茎
          mtjxmm.mu_mj_max=obj.mu_mj_max
        }
         if(obj.mu_price!=undefined){//价格
          mtjxmm.mu_price=obj.mu_price
        }
        if(obj.mu_stock!=undefined){//库存
          mtjxmm.mu_stock=obj.mu_stock
        }
       // 更新mtjxmm
   if(obj.mu_photo.length>0){
           setTimeout(function(){
            state.mtjxmm=mtjxmm
            window.sessionStorage.setItem("mtjxmm",JSON.stringify(mtjxmm))
           },1000)
         }else{
             state.mtjxmm=mtjxmm
            window.sessionStorage.setItem("mtjxmm",JSON.stringify(mtjxmm))
         }
      

    },
    saveMPC:function(state,obj){
    console.log(123)
       var mpc=JSON.parse(window.sessionStorage.getItem("mpc"))
       if(obj.objectId!=undefined){
          mpc.objectId=obj.objectId
       }
       if(obj.gg_name!=undefined){
          mpc.gg_name=obj.gg_name
       }
       if(obj.gg_intro!=undefined){
          mpc.gg_intro=obj.gg_intro
       }
       if(obj.gg_contact_number!=undefined){
          mpc.gg_contact_number=obj.gg_contact_number
       }
       if(obj.gg_contacts!=undefined){
          mpc.gg_contacts=obj.gg_contacts
       }
       if(obj.gg_address!=undefined){
          mpc.gg_address=obj.gg_address
       }
       if(obj.gg_city!=undefined){
          mpc.gg_city=obj.gg_city
       }
       if(obj.gg_province!=undefined){
          mpc.gg_province=obj.gg_province
       }
        if(obj.gg_coordinate_lat!=undefined){
          mpc.gg_coordinate_lat=obj.gg_coordinate_lat
       }
        if(obj.gg_coordinate_lng!=undefined){
          mpc.gg_coordinate_lng=obj.gg_coordinate_lng
       }
       // "mu_name":this.name,//草坪长
          // 'mu_type':this.chosetype,//草坪宽
          // 'mu_zg_min':this.zgmin,//草坪密度
          // 'mu_zg_max':this.zgmax,//草坪数量
     
      // 更新mpc
      state.mpc=mpc
      window.sessionStorage.setItem("mpc",JSON.stringify(mpc))
     
      
  },
  // 清空苗圃场
  qingkongMPC:function(state){
       mpc={
          "objectId":'',//苗圃埸ID
          "gg_name":'',//苗圃埸名称
          "gg_intro":'',//苗圃埸简介
          "gg_contact_number":'',//苗圃埸联系人电话
          "gg_contacts":'',//苗圃埸联系人姓名
          "gg_address":'',//苗圃埸详细地址
          "gg_city":'',//苗圃埸所在城市
          "gg_province":'',//苗圃埸所在省份
          "gg_coordinate_lat":'',//苗圃埸坐标纬度
          "gg_coordinate_lng":''//苗圃埸坐标经度
      }
      window.sessionStorage.setItem("mpc",JSON.stringify(mpc))
      state.mpc=JSON.parse(window.sessionStorage.getItem("mpc"))
  },


  // 全部苗木  已发布  未发布 的数据  根据企业和团队id获取查看团队/企业属下的苗圃埸id,根据这个id去查看已发布的苗木数据
  updataMu(state,obj){
   // alert('我是更新页面数据')
  
      //查看团队/企业属下的苗圃埸  先让group_id为0   
              var ispublish
              if(obj.where=='qbmm'){
                    ispublish=''
               }else if(obj.where=='yfb'){
                    ispublish='1'
               }else if(obj.where=='wfb'){
                   ispublish='0'
               }
               var aa={"groundId":obj.objectId}
if(ispublish==''){
  var dd={"sessiontoken":sessiontoken,'limit':10000}
}else{
  var dd={"sessiontoken":sessiontoken,"ispublish":ispublish,'limit':10000}
}

 $.ajax({   
            type :"get",
            cache:false,  
            url :Boss+"tree?where="+encodeURI(JSON.stringify(aa)),  
            headers:{"role":"seller"},
            data :dd, 
            async : false,  
            success : function(data){  
             //alert('我更新好了页面数据')
              if(obj.where=='qbmm'){
                    state.qbmm=data.results.data
                    JSONS(data,'QBMM')
               }else if(obj.where=='yfb'){
                    state.yfb=data.results.data
               }else if(obj.where=='wfb'){
                    state.wfb=data.results.data
               }
            }  
           }); 

    
  },
// 修改苗木发布状态数据
updataStatus(state,obj){
    // alert('我是更新状态')
  var status
                 // 1.未发布的时候点击发布  审核不通过点击发布苗木     让他变审核中1
            if (obj.status == "0"||obj.status == "-1") {
                status = "1"
                // status="2"
            } else if (obj.status == "2") {
                // 2.已发布的时候点击取消发布让他变未发布0
                status = "0"
            } 
$.ajax({
    url:Boss+"tree/"+obj.objectId+"/publish",
    type: 'POST',
    async:false,
    data:{"status":status,"sessiontoken":sessiontoken},
    success: function(data) {
             // alert('我更新好了状态')
           //console.log(data)
    }
});
//   $.post(state.Boss+"tree/"+obj.objectId+"/publish",{"status":status,"sessiontoken":state.sessiontoken},function(data){
//       alert('我更新好了状态')
//            console.log(data)
// })
},
// 删除用户发布的苗木数据
deleteStatus(state,obj){
    // alert('我是更新删除')
$.ajax({
    url: Boss+"tree/"+obj.objectId,
    type: 'DELETE',
    async:false,
    data:{"status":obj.status,"sessiontoken":sessiontoken},
    success: function(data) {
         //alert('我更新好了删除')
    }
});
}



}
})