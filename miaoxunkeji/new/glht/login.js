const login = {
    template: `
     <div class="containers cons" style="" >
    <img src="../tubiao/loginpt.png">  
      <input v-model="phone" :class="{red:phone_red==true}" type="tel" name="" @keyup.enter="denglu()" style="margin-top:35px;margin-bottom: 15px;" placeholder="电话号码"  onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">

      <input v-model="password" :class="{red:password_red==true}" type="password" name="" @keyup.enter="denglu()" style="margin-bottom: 50px;" placeholder="密码">
      <img src="../tubiao/login.png" @click="denglu()" style="width:385px;cursor:pointer;">

</div>
     `,
     data:function(){
      return {
        phone_red:false,//控制手机号码输入错误的红色边框
          password_red:false,//控制密码输入错误的红色边框
          phone:"",//电话号码
          password:""//密码
      }
     },
      methods:{
               denglu:function(){
                var that=this
                //判断是否输入了账号和密码// 登录的接口请求
                if(this.phone!=""&&this.password!=""){
                  this.password_red=false
                  this.phone_red=false
                  $.post("http://ym-boss.leanapp.cn/boss/login",{"mobile":this.phone,"password":this.password},function(data){
                      console.log(data)
                       //2. 密码错误  this.password_red=true
                      if(data.results.message=="密码不正确"){
                         that.password_red=true
                      }else if(data.results.message=="用户未注册"){
                      //1. 手机号码错误  this.phone_red=true
                      that.phone_red=true
                      }else if(data.status=="1"){
                      //3.成功后跳转
                        //that.$store.state.datas=data.results
                        // that.$store.state.username=data.results.username
                        window.sessionStorage.setItem("sessiontoken",data.results.sessiontoken)
                         window.sessionStorage.setItem("datas",JSON.stringify(data.results))
                        // that.$store.state.sessiontoken=data.results.sessiontoken
                        // that.$store.state.url=data.results.avatar.url
                        that.$router.push('htgl')
                      // window.sessionStorage.setItem("sessiontoken",data.results.sessiontoken)
                      //  window.sessionStorage.setItem("url",data.results.avatar.url)
                      //   location.href="miao_htgl.html#/mmsh/fbmm/1"
                      }
                     
                  }) 
                }else{
                   this.password_red=true
                  this.phone_red=true
                }
               }
        },
        mounted:function(){

        }
   }