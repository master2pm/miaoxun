

//5.收藏的个人

var private = {
  template: `
   <div>



  <ul  v-if="datas!=''&&datas!='no'" v-cloak >
      <li @click="golocation($event,item.favorite.objectId)"  @mouseenter="show=index" @mouseleave="show=-1" :class="{b20:show==index}" v-for="(item,index) in datas" class=" borders rad cursor lf" style="margin-left:14px;margin-bottom:60px;width:230px;">
          <div style="width:230px;height:230px;" class="overflow relative">
               <img class="jz" :src="item.favorite.avatar.url!=undefined?item.favorite.avatar.url+'?imageView2/2/w/230/h/230':'../tu-collection/1-08.png'">
          </div>
           

           <div style="width:165px;height:60px;padding-right:50px;padding-left:15px;" class="relative left" >
             <img src="../tu-collection/1-12.png" style="right:15px;" class="czjz">
                
                   <p class="c4A494B f13 czjz diandiandian" style="width:166px;">{{item.favorite.nickname}}
                  
                   </p>
                   
                 
          </div>     

           
           <div  @click.stop="clicks($event,2,item.favorite.objectId,'user',0)"   v-if="show==index" style="width:211px;height:40px;line-height:40px;margin:0 auto;" class="center cursor f13 c60B346 relative borders-t" >取消收藏</div>   


      </li>
  </ul>


<!--没有数据的时候显示   你还没有收藏苗木哦！-->
<div v-if="datas=='no'" class="center">
  <img src="../tu-collection/1-07.png" style="margin-top:290px;">
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
  location.href="../parent/index.html#/mpc/qymessage/private/"+objectId+'/no'
},
   // 加载最新数据
load(){
  var that=this
  $.get(Boss+'favorite',{
    "sessiontoken":sessiontoken,
    "type":'user',
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
        }
            },

            mounted:function () {
this.load()
            }
          }