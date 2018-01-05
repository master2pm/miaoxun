
 
// 网页的顶栏模板  @mouseleave="bangzhu_leave"  v-if="(open_bangzhu==true)"
//    
const headers = {
    template: `
    <header id="head" style="height:70px;position: fixed;top:0;left:50%;transform:translatex(-50%);padding: 0 20px;
    width: 984px;z-index:115;" class="bai bottom">
   <a href="../home/miao.html" class="czjz" style="left:23px;">
     <img src="image/logo.png" >
   </a>
   <span class="f25 czjz" style="left:80px;">优苗管理后台</span>

   <p class="f17 czjz" style="right:120px;color:#666666;">
     <img :src="this.$store.state.datas!=''?this.$store.state.datas.avatar.url+'?imageView2/1/w/40/h/40':''"  style="margin-right:10px;border-radius:50%;">
    {{this.$store.state.datas!=''?this.$store.state.datas.username:''}}
   
   </p>
   <img src="../tubiao/login_out.png" @click="login_out()" style="width:61px;right:25px;" class="czjz cursor">
</header>


     `,
     data:function(){
      return {
         //0. 登录信息
        user_id:"",
        
        //1. 我的苗圃
          index:"-1",//控制我的苗圃背景颜色的
          bg:"-1",//控制箭头的背景颜色
          open_miaopu:false,//控制我的苗圃弹出框的显示和隐藏

        // 2.登录
          index1:"-1",//控制登录背景颜色的
          open_denglu:false,//控制登录弹出框的显示和隐藏

      // 3.帮助
         //控制帮助弹出框的显示和隐藏
         open_bangzhu:true
      }
     },
    methods:{
      // 登出 清除缓存跳到登录页面
      login_out:function(){
        // location.href="miao_login.html"
        sessionStorage.clear()
        this.$store.state.datas=""
        this.$store.state.sessiontoken=""
        this.$router.push('login')

      },

       // 鼠标离开ul，全部为false
      close_all:function(){
       this.open_miaopu=false;
       this.open_denglu=false;
       this.open_bangzhu=false;
       this.index="-1"
       this.bg="-1"
       this.index1="-1"
        $("#bangzhu_kuang").css('display',"none")
      },
      // 1.我的苗圃点击事件
      // 鼠标放上我的苗圃的时候弹出框出现
      miaopu:function(){
       this.open_miaopu=true;
       this.open_denglu=false;
       this.open_bangzhu=false;
      },
      // 鼠标点击我的苗圃的li时候弹出框消失
      close:function(n){
        vm.idx=n
        this.open_miaopu=false;
        this.index="-1"
       this.bg="-1"
       this.index1="-1"
       
      },
       // 鼠标离开我的苗圃的时候弹出框消失
      closes:function(){
        this.open_miaopu=false;
        this.index="-1"
       this.bg="-1"
       this.index1="-1"
       
      },
      // 鼠标放上li的时候
       move:function(e){
          this.index=$(e.currentTarget).index()
       },


      // 2.登录按钮的点击事件
       indexs:function(e){
          this.index1=$(e.currentTarget).index()

        },
        // 跳转到对应的页面
        jumps:function(href){
           window.open(href)
        },
        // 鼠标放上事件
        denglu_enter:function(){
          this.open_denglu=true;
          this.open_miaopu=false;
          this.open_bangzhu=false;
        },
        // 鼠标离开事件
        denglu_leave:function(){
          this.open_denglu=false;
          this.index="-1"
       this.bg="-1"
       this.index1="-1"
        },

        // 3.帮助按钮的点击事件
        bangzhu_enter:function(){
          console.log(2)
           this.open_denglu=false;
           this.open_miaopu=false;
           this.open_bangzhu=true;
        var height=innerHeight
        $("#bangzhu_kuang").css('height',height)
        $("#bangzhu_kuang").css('display',"block")
        // $("#bangzhu_kuang").animate({'right':'0'},1000,function(){
           
           
        // })
        },
        // 点击叉子关闭帮助框
        bangzhu_leave:function(){
         this.open_bangzhu=false;
          $("#bangzhu_kuang").css('display',"none")
          //alert(999)
        //   $("#bangzhu_kuang").animate({'right':'-350px'},10,function(){
        //     console.log("shuchu")
        // })
        },
        // 登录按钮的跳转
        jumps:function(type){

          // 跳转到编辑个人资料
          if(type=="grzl"){
           location.href="miao_grzl.html#/bjgrzl/jbxx";
          }
          // 跳转到邀请好友
          if(type=="friend"){
           //location.href="miao_grzl.html#/bjgrzl/jbxx";
          }
          // 跳转到账号设置
          if(type=="zhsz"){
           location.href="miao_grzl.html#/zhsz/aq";
          }
          // 跳转到反馈问题
          if(type=="fkwt"){
           location.href="miao_grzl.html#/fkwt/cjwt";
          }
          // 跳转到苗木的首页
          if(type=="home"){
           location.href="../home/miao.html";
          }
          // 跳转到苗木的首页并清除登录的缓存
          if(type=="home2"){
           location.href="../home/miao.html";
           localStorage.clear()
          }
          
        },
        // 修改对应的idx
        idx:function(n){
          vm.idx=n;
          this.open_denglu=false
        }
    },
    // 
    mounted:function () {
       // var user=window.localStorage
       // if(user.getItem('user_id')!=null){
       //  this.user_id=user.getItem('user_id');
       // }
       // if(user.getItem('user_phone')!=null){
       // this.user_phone=user.getItem('user_phone') ; 
       // }
    }
}

