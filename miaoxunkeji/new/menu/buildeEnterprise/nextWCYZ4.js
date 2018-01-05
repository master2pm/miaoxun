

//买卖家菜单栏 未建立企业  点击完成认证按钮的最终结果

const nextWCYZ4 = {
  template: `
  <div style="padding:0 20px;position: relative;margin-bottom:20px;" class="center c696A6C">
  <div class="f26 " style="background: url(../tu-menu/21_35.png) no-repeat;height:165px;line-height:165px;margin:50px 0;position: relative;padding-left:130px;">
  您的认证信息已成功提交，请稍等片刻。
  </div> 
 
          <img  class="cursor"  src="../tu-menu/21_71.png"   alt="" style="margin-top:110px;">


  </div>

  `,
  data:function(){
    return {
          
         }
       },
       methods:{

     
       
      
            },

            mounted:function () {
              // 1.5秒后回到苗木网站
                   setTimeout(function(){
                       location.href="../parent/index.html"
                   },1500)
            }
          }