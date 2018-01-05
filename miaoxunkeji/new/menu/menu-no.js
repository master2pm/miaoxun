
 
//买卖家菜单栏第一次建立企业团队

const menuNo = {
    template: `
    <div class="center left">
            <p class="f26 c4C4C4F" style="margin:60px 0 15px 0;">您想建立的是团队还是企业？</p>
            <p class="f16 c686A6C">建立团队或企业使您可以添加子账号，进行多人合作或对子帐号权限进行设定</p>
            <p class="f16 c686A6C">管理，建立认证企业则会提高买卖家对您的信任。</p>
            <div  style="position: relative;" >
                <img src="../tu-menu/22_101.png" alt="" style="width:984px;margin:50px 0;">
                <img @click="buildTeam($event)" src="../tu-menu/21_85.png" class="cursor" style="position:absolute;width:97px;right:25px;bottom:80px;">
            </div>
            <div  style="position: relative;" >
                <img src="../tu-menu/22_104.png" alt="" style="width:984px;margin-bottom:85px;">
                <img @click="buildeEnterprise($event)" src="../tu-menu/21_93.png" class="cursor" style="position:absolute;width:97px;right:25px;bottom:115px;">
            </div>
            
        </div>


     `,
     data:function(){
      return {
    
      }
     },
    methods:{
      // 建立团队
      buildTeam:function(e){
         this.$router.push({"name":'buildTeam'})
      },
       // 建立企业
      buildeEnterprise:function(e){
                this.$router.push({"name":'buildeEnterprise'})
      }
    },
  
    mounted:function () {
     
    }
}

