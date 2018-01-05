
 
//买卖家菜单栏 未建立企业  点击建立企业按钮的对应页面

const buildeEnterprise = {
    template: `
   <div style="padding:0 20px;" class="c4C4C4F f26">
              <p  style="margin-top:55px;background: url(../tu-menu/24_40.png) no-repeat;background-size: 33px 34px;padding-left:50px;">
                  为什么需要认证企业?
              </p>
              <div  style="background: url(../tu-menu/21_109.png) no-repeat;height:165px;line-height:165px;margin:50px 0;position: relative;padding-left:130px;">
                   为什么需要认证企业?
                    <img @click="buildAndrz($event)" src="../tu-menu/21_91.png" alt="" class="czjz cursor" style="right:25px;">
              </div> 
             <div style="margin-bottom:170px; ">
                  <img src="../tu-menu/22_113.png" alt="">
             </div>
             
        </div>

     `,
     data:function(){
      return {
    
      }
     },
    methods:{
      // 建立并认证企业按钮
      buildAndrz:function(e){
            this.$router.push({name:"buildAndrz"})
			this.$store.commit("kong")
      }
    },
  
    mounted:function () {
     
    }
}