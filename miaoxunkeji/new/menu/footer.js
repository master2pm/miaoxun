
 
// 网页的底部模display:none;板  @mouseleave="bangzhu_leave"  v-if="(open_bangzhu==true)"margin-top:265px;       <div id="footer"  style="position:fixed;left:0;bottom:0;z-index:100;background:#E3E3E2;height:40px;line-height:40px;width:100%;" class="lf f13 c808082 center footerfix" >苗讯科技有限公司</div>

const footers = {
    template: `


     <div  style="z-index:100;background:#E3E3E2;height:40px;line-height:40px;width:100%;position:fixed;left:0;bottom:0;" class=" f13 c808082 center " >苗讯科技有限公司</div>
   
	 `,
     data:function(){
      return {
    
      }
     },
    methods:{
         see:''
    },
    // 
    mounted:function () {

    }
}

// window.onscroll = function (){
// // 	//alert(11)
// // 	if(window.scrollTop<=0) {
// // 	$(".footerfix").css("opacity",'1')
// // //alert("最底部")
// // }else{
// // 	$(".footerabs").css("opacity",'0')
// // }
// var marginBot = 0;
// if (document.documentElement.scrollTop){
// marginBot = document.documentElement.scrollHeight-(document.documentElement.scrollTop+document.body.scrollTop)-document.documentElement.clientHeight;
// } else {
// marginBot = document.body.scrollHeight-document.body.scrollTop-document.body.clientHeight;
// }
// if(marginBot<=0) {
// 	$("#footer").css("display",'block')
// //alert("最底部")
// }else{
// 	$("#footer").css("display",'none')
// }
// }

// window.onresize = function (){
// // 	if(window.scrollTop<=0) {
// // 	$(".footerfix").css("opacity",'1')
// // //alert("最底部")
// // }else{
// // 	$(".footerabs").css("opacity",'0')
// // }
// var marginBot = 0;
// if (document.documentElement.scrollTop){
// marginBot = document.documentElement.scrollHeight-(document.documentElement.scrollTop+document.body.scrollTop)-document.documentElement.clientHeight;
// } else {
// marginBot = document.body.scrollHeight-document.body.scrollTop-document.body.clientHeight;
// }
// if(marginBot<=0) {
// 	$("#footer").css("opacity",'1')
// //alert("最底部")
// }else{
// 	$("#footer").css("opacity",'0')
// }
// }