
// var datas

 $.ajaxSetup({  
         async : false  
});
      // $.post("http://ym-boss.leanapp.cn/boss/login",{"mobile":this.phone,"password":this.password},function(data){
      //                 console.log(data)
      //         datas=data
                     
      //             })
//  // 卖家的个人资料
// $.get("http://ym-boss.leanapp.cn/api/v1/user/info",{"sessiontoken":sd},function(data){
//                  console.log(data)
//                 se=data.results
//                 //gsv=data.results
//               })
var stk;
if(window.sessionStorage.getItem("sessiontoken")!=null){
    stk=window.sessionStorage.getItem("sessiontoken")
}else{
    stk=''
};
var stks;
if(window.sessionStorage.getItem("datas")!=null){
    stks=window.sessionStorage.getItem("datas")
}else{
    stks=[]
};
const store = new Vuex.Store({
    state:{ 
            Boss:"http://ym-boss.leanapp.cn/api/v1/",//公共地址
             sessiontoken:stk,//登录 授权码
             //username:"",//用户头像
             datas:'',
             //kurl:"",
            // data_grzl:se,//预览个人资料的数据
            // jdt:'',//预览个人资料进度条
            
            // mu_name:'',//苗木名称
            // mu_type:'',//苗木类型（种植情况）
            // mu_j_min:'',//米径最小值
            // mu_j_max:'',//米径最大值
            // mu_zg_min:'',//自然高（原株高）最小值
            // mu_zg_max:'',//自然高（原株高）最大值
            // mu_gf_min:'',//冠福最小值
            // mu_gf_max:'',//冠福最大值
            // mu_dj_min:'',//地径最小值
            // mu_dj_max:'',//地径最大值
            // mu_rg_min:'',//肉径最小值
            // mu_rg_max:'',//肉径最大值
            // mu_address:'',//地址
            // mu_price:'',//价格
            // mu_stock:'',//库存
            // mu_discount_count:'',//折扣数量
            // mu_discount:'',//折扣百分比，如 1%= 0.01
            // mu_coordinate_lat:se.point.latitude,//纬度
            // mu_coordinate_lng:se.point.longitude,//经度
            // //mu_photo:['https://pic3.zhimg.com/195038d3a_xs.jpg','https://pic3.zhimg.com/195038d3a_xs.jpg'],//苗木图片

            // mu_mjs:'',//米径
            // mu_zgs:'',//自然高
            // mu_gfs:'',//冠福
            // mu_djs:'',//地径
            // mu_rgs:'',//肉径

            // mu_company:se.company_name,//默认是个人资料里面的公司名字
            // mu_country:se.country, 
            // mu_city:se.city, //默认是个人资料里面的城市名字
            // mu_province:se.province,//默认是个人资料里面的省名字 
            // mu_address:se.address,//默认是个人资料里面的地址名字

            // objectIds:'',//判断添加新苗木是否为第一次创建还保存修改的id
            // objectId:'',//其他三个页面的id
            // data_qbmm2:'',//全部苗木的数据
            // data_yfb3:'',//已发布的数据
            // data_wfb4:'',//未发布的数据
            // x:se.point.longitude,//默认的经度
            // y:se.point.latitude,//默认的纬度
            // mu_photo:'',//照片

            // pages_qbmm2:1,//分页器  全部苗木的
            // pages_yfb3:1,//分页器  已发布的
            // pages_wfb4:1,//分页器  未发布的

            // pages_qbmm20:'',//分页器  全部苗木的第几条到
            // pages_qbmm21:'',//分页器  全部苗木的第几条
            // pages_qbmm22:'',//分页器  全部苗木的共几条

            // pages_yfb30:'',//分页器  未发布的第几条到
            // pages_yfb31:'',//分页器  未发布的第几条
            // pages_yfb32:'',//分页器  未发布的共几条
            pages_fbmms:'',
            pages_fbmm:'1',//分页器,默认第几页
            pages_fbmm0:'',//分页器  已发布的第几条到
            pages_fbmm1:'',//分页器  已发布的第几条
            pages_fbmm2:'',//分页器  已发布的共几条
            
            limit:20,//每页输出
            searchkey:'',//关键字搜索
            data_shenhe_fbmm:''//挂的数据data






    }
})