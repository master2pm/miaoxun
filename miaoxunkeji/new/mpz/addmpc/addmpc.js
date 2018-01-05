
 
// 添加苗圃场的时候

const addmpc = {
    template: `
    
       <div class="" style="margin:0 auto;width:1024px;height:654px;padding-top:60px;">
                <headers></headers> 
				<router-view></router-view>
          </div>

     `,
     data:function(){
      return {
          // iscallback:false//是否从地图界面回来的
     }},
	 components:{
        "headers":headers//菜单栏menu处抽取的顶栏
	 },
    methods:{
    
    },
	mounted:function(){

	}
}

