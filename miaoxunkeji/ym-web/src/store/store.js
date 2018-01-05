import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)




// 卖家还是买家进入该页面
//var bg='sell'
var bg='buy'
var background

if(bg=='sell'){
  background='hei'
}else if(bg=='buy'){
  background='bai'
}



// 获取缓存的title数据
var title= window.sessionStorage.getItem("title")
if(title!=null){
	title=JSON.parse(title)
}else{
	title=[
	{'tj':{"title":'推荐',"view":"4","condition":[],"sort":'',"page":'1',"price":{"max":'',"min":''}}},
	{'my':{"title":'苗源',"view":"4","condition":[],"sort":'',"page":'1',"price":{"max":'',"min":''}}},
	{'tt':{"title":'头条',"view":"4","condition":[],"sort":'',"page":'1',"price":{"max":'',"min":''}}}
	]
	window.sessionStorage.setItem("title",JSON.stringify(title))			
}











// var groupId=''//暂时默认是个人项目0
// var default_group=''//当前默认组或者个人项目的id
// var common_user=''//用于new的个人资料的
$.ajax({
   async: false,
   type: "GET",
   url:Boss+"user/info",
   data:{"sessiontoken":sessiontoken},
   success : function(data) {
    console.log("申明的个人资料赋值store")
      common_user=data.results
      // 只要登录了就不可能是空
      var user=window.localStorage.getItem('default_group')
      if(window.localStorage.getItem('default_group')!=null){
                                                                 
                                                                  var user1=JSON.parse(user)
                                                                   for (var key in user1) {
                                                                       // 1.如果有记录也有登录过
                                                                       if(data.results.objectId==key){
                                                                        if(user1[key]!='0'){
                                                                          user1[key]=data.results.default_group
                                                                          window.localStorage.setItem('default_group',JSON.stringify(user1))
                                                                        }
                                                                         default_group=user1[key]//1当前默认组或者个人项目的id
                                                                         groupId=default_group//2暂时默认是个人项目0
                                                                       }
                                                                   }
      }
   }
});








     window.store = new Vuex.Store({
     state:{
      default_group:default_group,//全局的默认id
      common_user:common_user,//个人资料
      minis:false,//运输模块的选择分钟
      limit1000:1001,
      limit20:20,
      h:0,//推荐
      h1:0,//头条
      denglu:false,//登录的弹出框
      zhuce:false,//注册的弹出框
      gif:true,//控制滚动加载的转动动画
      currentTop:{'lng':'','lat':'','getId':'','getPlace':'','getCity':'','getProvince':'','getTime':'','getMoney':'','getAddress':'','getGroup':'','shipment_status':''},
      getProvince:'',//用车地点 省
      getCity:'',//用车地点   市
      getAddress:'',//用车地点   详细街道
      getcarTime2:'',//运输的日历 年月
      getcarTime3:'',//运输的日历 年月日
      finalArrs:[],//验苗报告终极放大图的图片路径
      remark:'',//验苗报告终极放大图的图片描述
      transitioner:'',//路由过渡的效果
       header:background,//导航栏的背景颜色  是卖家还是买家
      allPage:'',//所有的页数
		  //searchindex:0,//搜索框对应的下面标签栏的当前的标签下标
		  Boss: Boss, //公共地址
		  Boss1:Boss1, //公共地址
        sessiontoken:sessiontoken, //登录 授权码
        user_phone: sp, //用户头像
        datas:'no',
        fangdatuItem:'',//放大图弹出框的所有信息
        fangdatuIndex:-1,//放大图弹出框的序号，用来改变是否已收藏的group
        fangdatuShowditu:false,
        wheres:'',//省份城市数据
        opens:common_biaozhun,//米经地径等的弹出框数据
		title:title,//['推荐','苗源','头条']
		group:'',//item vue对应的内容
		lat:'',//当前经纬度
		lng:'',//当前经纬度
		mpcxq:'',//苗圃场的详细信息
		groundId:'',//模拟的苗圃场id59801fd5fe88c20057f0e14f
    groupId:0,//当前登录的所属的企业或团队的id
		//where:'',//当前是哪个页面
		//location:'',//判断是qymessage   home
    treeCount:'',//购物车总数
    gouwuche1:[],//初选
    gouwuche1C:'',//初选总数量
    gouwuche2:[],//验苗
    gouwuche2C:'',//验苗总数量
    gouwuche3:[],//运输
    gouwuche3C:'',//运输总数量
    gouwuche4:[],//收货
    gouwuche4C:''//收货总数量

  },
  mutations:{
// 保存title的方法 title:['推荐','苗源','头条'],
titles(state){
 window.sessionStorage.setItem("title",JSON.stringify(state.title))
 state.title=JSON.parse(window.sessionStorage.getItem("title"))
},



//统一的更新 更新大数组中对应项的内容
updata(state,obj){
//alert(1)
var near={}
var aaa = JSON.parse(JSON.stringify(obj));
          //更新帅选条件
          state.title[aaa.indexs].item.condition = aaa.condition
          //更新视图
          state.title[aaa.indexs].item.view = aaa.view
          //更新页码
          state.title[aaa.indexs].item.page = aaa.page
          //更新价格
          state.title[aaa.indexs].item.price.max = aaa.priceMax
          state.title[aaa.indexs].item.price.min = aaa.priceMin
          //更新排序方式
          state.title[aaa.indexs].item.sort = aaa.sort
         // console.log( state.title[aaa.indexs].item)
          //更新缓存
          window.sessionStorage.setItem("title",JSON.stringify(state.title))
          var index = aaa.indexs

                       //1 拿苗木的名字
                       var mu_name=state.title[index].item.title
                //2 米经 1
                var mu_mj_min=state.title[index].item.condition.mjMin
                var mu_mj_max=state.title[index].item.condition.mjMax
                //2 地经 2
                var mu_dj_min=state.title[index].item.condition.djMin
                var mu_dj_max=state.title[index].item.condition.djMax
                //2 冠幅 3
                var mu_gf_min=state.title[index].item.condition.gfMin
                var mu_gf_max=state.title[index].item.condition.gfMax
                //2 肉高 4
                var mu_rg_min=state.title[index].item.condition.rgMin
                var mu_rg_max=state.title[index].item.condition.rgMax
                //2 主分枝高 5
                var mu_zfjg_min=state.title[index].item.condition.zfzgMin
                var mu_zfjg_max=state.title[index].item.condition.zfzgMax
                //2 株高 6
                var mu_zg_min=state.title[index].item.condition.zgMin
                var mu_zg_max=state.title[index].item.condition.zgMax
                //2.省 7
                var mu_province=state.title[index].item.condition.province
                // 2.市 数组 8
                var mu_city1=state.title[index].item.condition.cits
                var mu_city=[]
                for (var i = 0; i < mu_city1.length; i++) {
                  mu_city.push(mu_city1[i].city)
                }
                // 2.几斤袋 数组 9
                var mu_package_weight=state.title[index].item.condition.baoVal
                // 2.种植情况 数组 10
                var mu_type=state.title[index].item.condition.zzqkVal
                // 3.排序
                var sort=state.title[index].item.sort
                if(sort=='库存'){
                  sort='mu_stock'
                }else if(sort=='发布时间'){
                  sort='createdAt'
                }else if(sort=='价格'){
                  sort='mu_price'
                }else if(sort=='综合排序'){
                  sort=''
                }else if(sort=='信用'){
                  sort=''
                }else if(sort=='距离'){
                  //alert(44)
                  sort=''
                  near={"longitude":116.397428,"latitude":39.90923}
                  
                }
                // 4.价格最大值
                var mu_price_max=state.title[index].item.price.max
                // 4.价格最小值
                var mu_price_min=state.title[index].item.price.min
                // .......
                var view=state.title[index].item.view
                // 5.第几页
                var page=state.title[index].item.page
// 请求
var where={}
function push(key,item){
 if(item!=''){
  where[key]=item
}

}  
push('mu_mj_min',mu_mj_min) 
push('mu_mj_max',mu_mj_max) 
push('mu_dj_min',mu_dj_min) 
push('mu_dj_max',mu_dj_max) 
push('mu_gf_min',mu_gf_min) 
push('mu_gf_max',mu_gf_max) 
push('mu_rg_min',mu_rg_min) 
push('mu_rg_max',mu_rg_max) 
push('mu_zfjg_min',mu_zfjg_min) 
push('mu_zfjg_max',mu_zfjg_max) 
push('mu_zg_min',mu_zg_min) 
push('mu_zg_max',mu_zg_max)

push('mu_province',mu_province) 
push('mu_city',mu_city) 
push('mu_package_weight',mu_package_weight) 
push('mu_type',mu_type) 
push('mu_price_min',mu_price_min) 
push('mu_price_max',mu_price_max)
console.log("near")
console.log(near)
if(near.longitude!=undefined){
 $.get(state.Boss+"tree?searchkey="+mu_name+"&near="+encodeURI(JSON.stringify(near))+"&where="+encodeURI(JSON.stringify(where)),
  {"limit":40,"page":page,"sort":sort},function(data){

    state.group=data.results.data
    state.allPage=data.results.page_count
  })
}else{
 $.get(state.Boss+"tree?searchkey="+mu_name+"&where="+encodeURI(JSON.stringify(where)),
  {"limit":40,"page":page,"sort":sort},function(data){

    state.group=data.results.data
    state.allPage=data.results.page_count
  })
}


},
// 统一的搜索  只有苗源和搜索的苗源会影响数据和地图
searchs(state,index){
       
       var near={}
              //苗源
              if(index==0||index==2){
              	return
              }
              if(index==1){
      // 请求全部已发布的苗木
      // $.get(Boss+"tree",{"sessiontoken":sessiontoken,"limit":state.limit1000},function(data){
      //   if(data.status==1){
      //     if(data.results.data.length>0){
      //       state.group=data.results.data
      //     }
      //   }
        
      // })
              	
              }else{
              	// 获取所有的搜索条件
              	//console.log("我是搜索项目")
                //1 拿苗木的名字
                var mu_name=state.title[index].item.title
              	//2 米经 1
              	var mu_mj_min=state.title[index].item.condition.mjMin
              	var mu_mj_max=state.title[index].item.condition.mjMax
              	//2 地经 2
              	var mu_dj_min=state.title[index].item.condition.djMin
              	var mu_dj_max=state.title[index].item.condition.djMax
              	//2 冠幅 3
              	var mu_gf_min=state.title[index].item.condition.gfMin
              	var mu_gf_max=state.title[index].item.condition.gfMax
              	//2 肉高 4
                var mu_rg_min=state.title[index].item.condition.rgMin
                var mu_rg_max=state.title[index].item.condition.rgMax
              	//2 主分枝高 5
              	var mu_zfjg_min=state.title[index].item.condition.zfzgMin
              	var mu_zfjg_max=state.title[index].item.condition.zfzgMax
              	//2 株高 6
              	var mu_zg_min=state.title[index].item.condition.zgMin
              	var mu_zg_max=state.title[index].item.condition.zgMax
                //2.省 7
                var mu_province=state.title[index].item.condition.province
                // 2.市 数组 8
               
                var mu_city1=state.title[index].item.condition.cits
                var mu_city=[]
                for (var i = 0; i < mu_city1.length; i++) {
                  mu_city.push(mu_city1[i].city)
                }
                // 2.几斤袋 数组 9
                var mu_package_weight=state.title[index].item.condition.baoVal
                // 2.种植情况 数组 10
                var mu_type=state.title[index].item.condition.zzqkVal
                // 3.排序
                var sort=state.title[index].item.sort
                if(sort=='库存'){
                  sort='mu_stock'
                }else if(sort=='发布时间'){
                  sort='createdAt'
                }else if(sort=='价格'){
                  sort='mu_price'
                }else if(sort=='综合排序'){
                  sort=''
                }else if(sort=='信用'){
                  sort=''
                }else if(sort=='距离'){
                  sort=''
                  near={"longitude":116.397428,"latitude":39.90923}

                }
                // 4.价格最大值
                var mu_price_max=state.title[index].item.price.max
                // 4.价格最小值
                var mu_price_min=state.title[index].item.price.min
                // .......
                var view=state.title[index].item.view
                // 5.第几页
                var page=state.title[index].item.page
// 请求
var where={}
function push(key,item){
 if(item!=''){
  where[key]=item
}

}  
push('mu_mj_min',mu_mj_min) 
push('mu_mj_max',mu_mj_max) 
push('mu_dj_min',mu_dj_min) 
push('mu_dj_max',mu_dj_max) 
push('mu_gf_min',mu_gf_min) 
push('mu_gf_max',mu_gf_max) 
push('mu_rg_min',mu_rg_min) 
push('mu_rg_max',mu_rg_max) 
push('mu_zfjg_min',mu_zfjg_min) 
push('mu_zfjg_max',mu_zfjg_max) 
push('mu_zg_min',mu_zg_min) 
push('mu_zg_max',mu_zg_max)

push('mu_province',mu_province) 
push('mu_city',mu_city) 
push('mu_package_weight',mu_package_weight) 
push('mu_type',mu_type) 
push('mu_price_min',mu_price_min) 
push('mu_price_max',mu_price_max)
if(sort=='createdAt'){
  sort="-createdAt"
}

 if(near.longitude!=undefined){
//  $.get(state.Boss+"tree?searchkey="+mu_name+"&near="+encodeURI(JSON.stringify(near))+"&where="+encodeURI(JSON.stringify(where)),
//   {"limit":40,"page":page,"sort":sort},function(data){

//     state.group=data.results.data
//     state.allPage=data.results.page_count
//   })
 $.ajax({   
            type :"get",
            cache:false,  
            url :Boss+state.Boss+"tree?searchkey="+mu_name+"&near="+encodeURI(JSON.stringify(near))+"&where="+encodeURI(JSON.stringify(where)),  
            // headers:{"role":"seller"},
            data :{"sessiontoken":sessiontoken,"limit":40,'page':page,'ispublish':'1',"sort":sort},
            async : false,  
            success : function(data){  
           state.group=data.results.data
           state.allPage=data.results.page_count
            }  
           }); 


}else{
 // $.get(state.Boss+"tree?searchkey="+mu_name+"&where="+encodeURI(JSON.stringify(where)),
 //  {"limit":40,"page":page,"sort":sort},function(data){

 //    state.group=data.results.data
 //    state.allPage=data.results.page_count
 //  })
  $.ajax({   
            type :"get",
            cache:false,  
            url :Boss+"tree?searchkey="+mu_name+"&where="+encodeURI(JSON.stringify(where)),  
            // headers:{"role":"seller"},
            data :{"sessiontoken":sessiontoken,"limit":40,'page':page,'ispublish':'1',"sort":sort},
            async : false,  
            success : function(data){  
          state.group=data.results.data
    state.allPage=data.results.page_count
            }  
           }); 
}

}
},
// 查看指定群组/企业ID的----初选
 gouwuche1(state,obj){
   $.get(state.Boss+"select",
  {"limit":20,"page":obj.page,"groupId":groupId,"sessiontoken":sessiontoken},function(data){
       // console.log(data)
           console.log("gouwuche1")
         if(data.status==1&&data.results.data!=undefined){
             state.gouwuche1C=data.results.count//购物车总数量
             state.treeCount=data.results.count//购物车总数量
           // 1.说明是滚动累加的,则将新拿的push到原来的地方
          if(obj.page!=1){
                             // 1.1长度为0的时候让动画消失  提示无更多数据
                           if(data.results.data.length==0){
                              state.gif=false
                             // alert(11)
                             return
                           }else{
                                for (var i = 0; i < data.results.data.length; i++) {
                                  state.gouwuche1.push(data.results.data[i])//购物车总数据 
                                }
                                 
                           }
           
            
            
          }else{
            // 2.说明是刷新的，从新赋值
             state.gouwuche1=data.results.data//购物车总数据
             // state.gouwuche1C=data.results.count//购物车总数量
             // 如果数量已经全部取完  则显示没有更多苗木
              if(data.results.data.length==data.results.count){
                 state.gif=false
             }else{
               state.gif=true
             }
          }
          
         }
         
  })
    
},
// 查看指定群组/企业ID的----验苗
 gouwuche2(state,obj){
   $.get(state.Boss+"check_operater",
  {"limit":20,"page":obj.page,"groupId":groupId,"sessiontoken":sessiontoken},function(data){
         // console.log(data)
           console.log("gouwuche2")
            if(data.status==1&&data.results.data!=undefined){
              state.gouwuche2C=data.results.count//购物车总数量
                   // 1.说明是滚动累加的,则将新拿的push到原来的地方
          if(obj.page!=1){
                             // 1.1长度为0的时候让动画消失  提示无更多数据
                           if(data.results.data.length==0){
                              state.gif=false
                             return
                           }else{
                                for (var i = 0; i < data.results.data.length; i++) {
                                state.gouwuche2.push(data.results.data[i])//购物车总数据 
                                }
                                 
                           }
           
            
            
          }else{
            // 2.说明是刷新的，从新赋值
             state.gouwuche2=data.results.data//购物车总数据
          // state.gouwuche2C=data.results.count//购物车总数量
          // 如果数量已经全部取完  则显示没有更多苗木
             if(data.results.data.length==data.results.count){
                 state.gif=false
             }else{
               state.gif=true
             }
          }
          
          }
  })
    
},
// 查看卖方已确认的交易（全部待运）----运输
 gouwuche3(state,obj){
   $.get(Boss+"purchaseOrders",{"limit":20,"page":obj.page,"groupId":groupId,'sessiontoken':sessiontoken},function(data){
     JSONS(data,'请求全部代运苗木')
         // console.log(data)
           console.log("gouwuche3")
            if(data.status==1&&data.results.data!=undefined){
                   // 1.说明是滚动累加的,则将新拿的push到原来的地方
          if(obj.page!=1){
                             // 1.1长度为0的时候让动画消失  提示无更多数据
                           if(data.results.data.length==0){
                              state.gif=false
                             return
                           }else{
                                for (var i = 0; i < data.results.data.length; i++) {
                                state.gouwuche3.push(data.results.data[i])//购物车总数据 
                                }
                                 state.gouwuche3C=data.results.count//购物车总数量
                           }
           
            
            
          }else{
            // 2.说明是刷新的，从新赋值
             state.gouwuche3=data.results.data//购物车总数据
          state.gouwuche3C=data.results.count//购物车总数量
          // 如果数量已经全部取完  则显示没有更多苗木
              if(data.results.data.length==data.results.count){
                 state.gif=false
             }else{
               state.gif=true
             }
          }
          
          }
  })
    
},
// 查看指定群组/企业ID的----收货
 gouwuche4(state,obj){
   $.get(state.Boss+"purchaseTrade",
  {"limit":20,"page":obj.page,"groupId":groupId,"sessiontoken":sessiontoken},function(data){
         // console.log(data)
           console.log("gouwuche4")
           JSONS(data.results.data,'gouwuche4')
            if(data.status==1&&data.results.data!=undefined){
                   // 1.说明是滚动累加的,则将新拿的push到原来的地方
          if(obj.page!=1){
                             // 1.1长度为0的时候让动画消失  提示无更多数据
                           if(data.results.data.length==0){
                              state.gif=false
                             return
                           }else{
                                for (var i = 0; i < data.results.data.length; i++) {
                                state.gouwuche4.push(data.results.data[i])//购物车总数据 
                                }
                                 state.gouwuche4C=data.results.count//购物车总数量
                           }
           
            
            
          }else{
            // 2.说明是刷新的，从新赋值
             state.gouwuche4=data.results.data//购物车总数据
          state.gouwuche4C=data.results.count//购物车总数量
          // 如果数量已经全部取完  则显示没有更多苗木
             if(data.results.data.length==data.results.count){
                 state.gif=false
             }else{
                state.gif=true
             }
          }
          
          }
  })
    
},
// 查看指定群组/企业ID的初选的总数也就是购物车总数
searchAdd(state){
  $.get(state.Boss+"select",{"sessiontoken":state.sessiontoken,'groupId':groupId},function(data){
    console.log("查看指定群组")
    console.log(data)
    state.treeCount=data.results.count
  })
},
      loads(state,obj){
        var that=this    
                layui.use('flow',function(){
                  var $ = layui.jquery;
                  var flow=layui.flow;
                  
                  flow.load({
                    elem:'#gouwucheLoads',
                    scrollElem:'#gouwucheLoads',//滚动条所在元素选择器，默认document。如果你不是通过窗口滚动来触发流加载，而是页面中的某一个容器的滚动条，那么通过该参数指定即可。
                     isAuto:true,//是否自动加载。默认true。如果设为false，点会在列表底部生成一个“加载更多”的button，则只能点击它才会加载下一页数据。
                     end:'<div style="font-size:12px;color:#999899;">没有更多苗木啦</div>',//用于显示末页内容，可传入任意HTML字符。默认为：没有更多了
                    done:function(page,next){
                    // alert(1) 
        if(obj.name=='gouwuche1'){
                           $.get(state.Boss+"select",
                  {"limit":20,"page":page,"groupId":groupId,"sessiontoken":sessiontoken},function(data){
                         // console.log(data)
                          // alert(333)
                           console.log("gouwuche1")
                           JSONS(data,'woshi ni s   ddjjdssf')
                            if(data.status==1&&data.results.data!=undefined){
                              var lis=[]
                              state.gouwuche1C=data.results.count//购物车总数量
                              state.treeCount=data.results.count//购物车总数量
                                   // 1.说明是滚动累加的,则将新拿的push到原来的地方
                                   for (var i = 0; i < data.results.data.length; i++) {
                                  state.gouwuche1.push(data.results.data[i])
                                    }
                                // $('.layui-flow-more').css({'bottom':'-50px'}) 
                                   next(lis.join(''),page < data.results.page_count); //假设总页数为 10
                          
                          }
                  })  
          
        }else if(obj.name=='gouwuche2'){
                           $.get(state.Boss+"check_operater",
                  {"limit":20,"page":page,"groupId":groupId,"sessiontoken":sessiontoken},function(data){
                         // console.log(data)
                          // alert(333)
                           console.log("gouwuche2")
                           JSONS(data,'woshi ni s   ddjjdssf')
                            if(data.status==1&&data.results.data!=undefined){
                              var lis=[]
                              state.gouwuche2C=data.results.count//购物车总数量
                                   // 1.说明是滚动累加的,则将新拿的push到原来的地方
                                   for (var i = 0; i < data.results.data.length; i++) {
                                  state.gouwuche2.push(data.results.data[i])
                                    }
                                // $('.layui-flow-more').css({'bottom':'-50px'}) 
                                   next(lis.join(''),page < data.results.page_count); //假设总页数为 10
                          
                          }
                  })  
          
        }else if(obj.name=='gouwuche3'){
                           $.get(state.Boss+"purchaseOrders",
                  {"limit":20,"page":page,"groupId":groupId,"sessiontoken":sessiontoken},function(data){
                         // console.log(data)
                          // alert(333)
                           console.log("gouwuche3")
                           JSONS(data,'woshi ni s   ddjjdssf')
                            if(data.status==1&&data.results.data!=undefined){
                              var lis=[]
                              state.gouwuche3C=data.results.count//购物车总数量
                                   // 1.说明是滚动累加的,则将新拿的push到原来的地方
                                   for (var i = 0; i < data.results.data.length; i++) {
                                  state.gouwuche3.push(data.results.data[i])
                                    }
                                // $('.layui-flow-more').css({'bottom':'-50px'}) 
                                   next(lis.join(''),page < data.results.page_count); //假设总页数为 10
                          
                          }
                  })  
          
        }else if(obj.name=='gouwuche4'){
                           $.get(state.Boss+"purchaseTrade",
                  {"limit":20,"page":page,"groupId":groupId,"sessiontoken":sessiontoken},function(data){
                         // console.log(data)
                          // alert(333)
                           console.log("gouwuche4")
                           JSONS(data,'woshi ni s   ddjjdssf')
                            if(data.status==1&&data.results.data!=undefined){
                              var lis=[]
                              state.gouwuche4C=data.results.count//购物车总数量
                                   // 1.说明是滚动累加的,则将新拿的push到原来的地方
                                   for (var i = 0; i < data.results.data.length; i++) {
                                  state.gouwuche4.push(data.results.data[i])
                                    }
                                // $('.layui-flow-more').css({'bottom':'-50px'}) 
                                   next(lis.join(''),page < data.results.page_count); //假设总页数为 10
                          
                          }
                  })  
          
        }

     
   
                    }
                  })
                })
      }


}

})


// // 请求地径米经高度弹出框搜索条件内容
// $.get(Boss1+"/dict.json",function(data){
//  // console.log(data)
//  store.state.opens=data
// })

//     // 请求省和市的数据
//     $.get(Boss1+'/cities.json',function(data){
//      // console.log(data)
//      // console .log("d2222ata")
//      store.state.wheres=data
//    })


export default window.store