// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/js/jquery-1.11.3.js'
import './assets/js/html5shiv.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/html2canvas.min.js'
import './assets/js/jquery.qrcode.min.js'
import router from './router'
import store from './store/store';
import _ from 'lodash'//第三方库
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
       if(to.path.indexOf("qymessage")!=-1){
		   store.state.where='qymessage'
		}else if(to.path.indexOf("home")!=-1||to.path.indexOf("about")!=-1){
		   store.state.where='home'
		}
			   next()
			   console.log(store.state.where)
         var that = this;
         store.state.srcc=location.href.indexOf("localhost:")!=-1?"":"/hthththt";
         // /hthththt
         console.log(to.name)
         store.state.mtype=to.name;
})

window.vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
