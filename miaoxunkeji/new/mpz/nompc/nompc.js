
 
// 没有成为苗圃主的时候的顶栏

const nompc = {
    template: `
    
       <div class="" style="margin:0 auto;width:1024px;height:654px;padding-top:60px;">
                <headers style="border-bottom:1px solid #F2F2F2;"></headers>               
				<router-view ></router-view>
          </div>

     `,
     data:function(){
      return {
      
     }},
	 components:{
        "headers":headers//菜单栏menu处抽取的顶栏
	 },
    methods:{
    
    },
	mounted:function(){
      
	}
}

