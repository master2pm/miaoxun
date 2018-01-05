import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



     window.store = new Vuex.Store({
     state:{
       showxx:'',//打开用户团队苗木审核的详细信息
       url1:'stg-',
       url2:'',
       srcc:'',//图片路径 本地和服务器
       mtype:'',//用户 企业 苗木
       shjl:'',//审核记录
       showdd:'',//订单的详细信息
       htpageCount:''//后台分页的总页数
  },
  mutations:{

}

})


export default window.store
