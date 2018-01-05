

//买卖家菜单栏 未建立企业  点击完成认证按钮进来的后期才搞

const nextWCYZ3 = {
  template: `
  <div style="padding:0 20px;position: relative;" class="footertop c696A6C">
  <div class="f26 " style="background: url(../tu-menu/21_116.png) no-repeat;height:165px;line-height:165px;margin:50px 0;position: relative;padding-left:130px;">
  建立企业正在进行中
  </div> 
  <p class="f26 " style="margin-bottom:10px;">是否转移您的苗木数据到企业中？</p>
  <p class="f16 c686A6C">我们发现您的个人账户中存在苗木数据，您可以将他们转移到您的企业中，</p>
  <p class="f16 c686A6C">转移后您个人账户中的苗木数据将被移除。</p>

  <img class="cursor" @click="srczys($event)" :src="srcs1==false?'../tu-menu/21_74.png':'../tu-menu/21_79.png'" style="margin:35px 0 20px 0;display:none;"><br>
  <img class="cursor" @click="srcbzys($event)" :src="srcs2==false?'../tu-menu/21_77.png':'../tu-menu/21_95.png'" style="margin:35px 0 20px 0;margin-bottom:380px;"><br>


 
<div class=" bai" style="left:0;bottom:0;z-index:101;height:71px;position:fixed;width:100%;">
<div class="jz bai" style="z-index:101;height:51px;width:1024px;">
   <img @click="go()" @mouseenter="index=1" @mouseleave="index=0" :src="index==0?'../tu-menu/21_09.png':'../tu-menu/23_07.png'"  alt="" style="position: absolute;bottom: 0;left:20px;" class="cursor">
  <img  class="cursor"  src="../tu-menu/21_30.png" @click="wcrzs($event)"  alt="" style="position: absolute;bottom: 0;right:20px;">
</div>
</div>



  <div v-if="srczy==true"  class="f18 cF6" style="z-index:120;width:100%;height:148px;background:url(../tu-menu/33.png) repeat;left:0;position:fixed;bottom:0px;">
         <div style="padding-left:55px;margin:0 auto;width:969px;height:148px;line-height:148px;position:relative;">
		  <img  class="cursor"  src="../tu-menu/24_17.png" @click="closes1($event)"  alt="" style="position: absolute;top: 20px;right:30px;">
          转移您的苗木数据至此企业中，将会导致您的个人苗木数据被移除，请再次确认是否转移。
         </div>
  </div>

    <div v-if="srcbzy==true" class="f18 cF6" style="z-index:120;width:100%;height:148px;background:url(../tu-menu/33.png) repeat;left:0;position:fixed;bottom:0px;">
           <div style="padding-left:55px;margin:0 auto;width:969px;height:148px;line-height:148px;position:relative;">
		  <img  class="cursor"  src="../tu-menu/24_17.png" @click="closes2($event)"  alt="" style="position: absolute;top: 20px;right:30px;">
           <p style="">不转移苗木数据至企业中将不会对您的个人苗木数据作出任何更改，此后将不能再次转移</p>
           <p>个人苗木数据至此企业中。</p>
		   </div>
		   
  </div>
  </div>

  `,
  data:function(){
    return {
           index:0,//控制左下角的返回按钮的颜色
           srcs1:false,//控制转移的图片路径的
           srcs2:false,//控制不转移的图片路径的
           srczy:false,//转移的弹出框
           srcbzy:false//不转移的弹出框
         }
       },
       methods:{

      //   返回上一步
		go:function(){
			history.back()//只是单纯的返回到上一页
		},
      // 完成认证
      wcrzs:function(e){
                // 建立企业
                  var that=this
          // 调用store的方法 暂时还没加是否转移的字段
          // 判断是建立企业还是升级企业
          if(window.sessionStorage.getItem('upcompany')=='1'){
            // 团队升级企业
            // window.sessionStorage.setItem('upcompany','0')
             this.$store.commit("upcompany",that.$store.state.default_group)
          }else{
            // 建立企业
            // window.sessionStorage.setItem('upcompany','0')
             this.$store.commit("Group")
          }
        
             // return
        setTimeout(function() {
           that.$router.push({name:"nextWCYZ4"})
        }, 100);
              
              },
      // 关闭转移
      closes1:function(e){
         this.srczy=false
      },
      // 关闭不转移
      closes2:function(e){
         this.srcbzy=false
      },
      // 转移的点击事件
      srczys:function(e){
       // alert(this.srcs)
        if(this.srcs1==false){
          this.srcs1=true
          this.srcs2=false
          this.srczy=true
          this.srcbzy=false
        }
       
      },
      // 不转移的点击事件
      srcbzys:function(e){
       // alert(this.srcs)
        if(this.srcs2==false){
          this.srcs2=true
          this.srcs1=false
          this.srcbzy=true
          this.srczy=false
        }
       
      }
            },

            mounted:function () {

            }
          }