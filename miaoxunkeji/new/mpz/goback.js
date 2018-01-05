
 
// 后退

const goback = {
    template: `
         <img @click="go(-1)" @mouseenter="index=1" @mouseleave="index=0" :src="index==0?'../tu-mpz/1-56.png':'../tu-mpz/1-57.png'" style="left:20px;" class="cursor czjz">


     `,
     data:function(){
      return {
      	index:0//控制返回键的
      }
     },
    methods:{
    
	 // 调用store的返回事件
	go:function(n){
		this.$store.commit("go",n)
	}
    },
    // 
    mounted:function () {
    	
    }
}

