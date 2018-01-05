
 
// 没有 们现在就开始。

const finish5 = {
    template: `
         <div class="relative" style="height:593px;padding:20px;padding-top:0;background:url(../tu-mpz/1-86.png) no-repeat 0 0;background-size:100% 200px;">
		          <p class="f26 cFEFEFE" style="padding-top:55px;">让我们一起来建立属于自己的苗圃场吧</p>
				  <p class="f18 cFEFEFE relative">真的哦！您可以把整个苗圃场搬过来哦，
				      <router-link :to="{name:'qbmm',params:{objectId:MPCid,name:MPCname,biaoti:2}}">
					       <img src="../tu-mpz/1-87.png" style="right:20px;" class="cursor czjz">
					  </router-link>
				  </p>
				  <p class="f18 cFEFEFE">我们现在就开始。</p>

				  <p class="f18 c4C4C4F" style="margin-top:95px;">建立苗圃场</p>
				  <p class="f13 c999899">为您的苗圃场设定名称、联系方式、地址</p>
				  <p class="f13 c999899" style="margin-bottom:20px;">以及快捷定位。</p>
                   <router-link :to="{name:'concact2'}">
                    <button  class="layui-btn layui-btn-primary" style="margin-right:270px;border:1px solid #269C88;color:#269C88;padding:0 9px;font-size:12px;width:83px;height:28px;line-height:28px;">编辑</button>
				   </router-link>
				   <img src="../tu-mpz/1-41.png" style="" class="">
				  <img src="../tu-mpz/1-13.png" style="display:none;position:absolute;right:20px;bottom:48px;" class="cursor">
          </div>


     `,
     data:function(){
      return {
        MPCname:'',//苗圃场名字
				MPCid:'',//苗圃场id
      }
     },
    methods:{
    
    },
    // 
    mounted:function () {
    	var that=this
//查看团队/企业属下的苗圃埸  先让group_id为0
      $.get(Boss+"group/"+groupId+"/ground",{"sessiontoken":sessiontoken},function(data){
         console.log(9898)         
          JSONS(data,'查看团队/企业属下的苗圃埸')
          that.MPCname=data.results.data[0].gg_name
          that.MPCid=data.results.data[0].objectId
      })
    }
}

