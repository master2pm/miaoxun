
 
//买卖家菜单栏第一次建立企业团队

const menuNo1 = {
    template: `
    <div class="centers left">
            <p class="f26 c4C4C4F" style="margin:60px 0 15px 0;">您想将团队升级为企业？</p>
            <p class="f16 c686A6C">企业在买卖中往往更容易取得其他 用户的信任，从团队升级到企业也是</p>
            <p class="f16 c686A6C">您展现实力的良好表达方式。</p>
            <div  style="position: relative;" >
                <img src="../tu-menu/22_104.png" alt="" style="width:984px;margin:50px 0;">
                <img @click="buildTeam($event)" src="../tu-menu/21_23.png" class="cursor" style="position:absolute;width:97px;right:25px;bottom:80px;">
            </div>
            
            
        </div>


     `,
     data:function(){
      return {
    
      }
     },
    methods:{
      // 团队升级为企业
      buildTeam:function(e){
        // 如果是经过这个通道的说明是升级的不是建立的
        window.sessionStorage.setItem('upcompany','1')
         this.$router.push({"name":'buildeEnterprise'})
      }
    },
  
    mounted:function () {
     
    }
}

