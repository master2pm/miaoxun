// 卖家还是买家进入该页面
//var bg='sell'
//var bg='sell'
var background=locations("role")



var sd = window.localStorage.getItem('user_id');
var sp = window.localStorage.getItem('user_phone');
$.ajaxSetup({
    async: false
});




const store = new Vuex.Store({
    state: {
        Boss: "http://m1-ymboss.leanapp.cn/api/v1/", //公共地址
        sessiontoken: sd, //登录 授权码
        user_phone: sp, //用户头像
  //       index: 0, //标题的当前序号
		// datas:se,
		header:background


   
		
        
    },
    mutations: {
		// 用户个人资料
		yonghu:function(state){
			// 卖家的个人资料
$.get(state.Boss+"/api/v1/user/info", {
    "sessiontoken": sd
}, function(data) {
    console.log(data)
    se = data.results
    //gsv=data.results
})
		}
		// 清空企业的临时缓存
		
    }
})