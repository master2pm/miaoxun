//买卖家我的 安全与隐私 您已成功修改密码

const passwordsSuccess = {
    template: `
  <div >
         <img src="../tu-me/35.png" style="margin-left: 283px;margin-top: 150px;">
  </div>


  `,
    data: function() {
        return {
		
		
        }
    },

    methods: {
	
    },

    mounted: function() {
		var that=this
       this.$store.state.anquan=true
	   //3秒后回到安全与隐私主页面
	    setTimeout(function(){
            that.$router.push({name:'secret',params:{index:4}})  
		},3000)
    }
}