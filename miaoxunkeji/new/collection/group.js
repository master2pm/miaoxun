

//4.收藏的团队

var group = {
  template: `
   <div>



  <ul  v-if="datas!=''&&datas!='no'" v-cloak >
      <li  @click="golocation($event,item.favorite.objectId)"  @mouseenter="show=index" @mouseleave="show=-1" :class="{b20:show==index}" v-for="(item,index) in datas" class=" borders rad cursor lf" style="margin-left:14px;margin-bottom:60px;width:231px;">
          <div style="width:231px;height:306px;" class="overflow relative">
               <img class="jz" :src="item.favorite.owner.avatar.url!=undefined?item.favorite.owner.avatar.url+'?imageView2/2/w/231/h/306':'../tu-collection/1-08.png'" >
          </div>
           

           <div style="width:166px;height:60px;padding-right:50px;padding-left:15px;" class="relative left" >
             <img src="../tu-collection/1-11.png" style="right:15px;" class="czjz">
                
                   <p class="c4A494B f13 czjz diandiandian" style="width:166px;">{{item.favorite.name}}</p>
                   
                 
          </div>     

           
           <div   @click.stop="clicks($event,2,item.favorite.objectId,'group',0)"  v-if="show==index" style="width:211px;height:40px;line-height:40px;margin:0 auto;" class="center cursor f13 c60B346 relative borders-t" >取消收藏</div>   


      </li>
  </ul>


<!--没有数据的时候显示   你还没有收藏苗木哦！-->
<div v-if="datas=='no'" class="center">
  <img src="../tu-collection/1-06.png" style="margin-top:290px;">
</div>





</div>
  `,
  data:function(){
    return {
      show:-1,
          datas:''
          // datas:''
         }
       },
       methods:{
golocation(e,objectId){
  location.href="../parent/index.html#/mpc/qymessage/group/"+objectId+'/no'
},
// 加载最新数据
load(){
  var that=this
  $.get(Boss+'favorite',{
    "sessiontoken":sessiontoken,
    "type":'group',
    'limit':common_limit1000

  },function(data){
        if(data.status==1){
      if(data.results.data.length>0){
       that.datas=data.results.data
      }else{
       that.datas='no'
      }
    }
  })
},
        // 取消收藏和加入购物车
        clicks(e,n,objectId,type,amount){
          var that=this
          common_adds(e,n,objectId,type,amount)
          $(e.currentTarget).parent().remove()
          //this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId,'type':type})
//           setTimeout(function(){
// that.load()
//           },10)
        }
   
            },

            mounted:function () {
this.load()
            }
          }