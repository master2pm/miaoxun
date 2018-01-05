

//2.收藏的苗圃

var miaopu = {
  template: `
  <div>

    <ul  v-if="datas!=''&&datas!='no'" v-cloak class="overflow miaopu">
      <li @click="golocation($event,item.favorite.objectId)" v-for="(item,index) in datas" @mouseenter="show=index" @mouseleave="show=-1"  class="relative F2F2F2bg cursor" style="margin-bottom:30px;width:429px;height:64px;padding:20px;">
        <p class="f18 c60B346 diandiandian" style="width:90%;margin-bottom:5px;">{{item.favorite.gg_name}}</p>

        <span class="c999899 absolute" style="right:20px;top:20px;">{{item.favorite.distance}}</span>

        <p class="f13 c999899 diandiandian2" style="width:60%;">苗圃场地址 ·<span class="c676868">{{item.favorite.gg_address.province}}{{item.favorite.gg_address.city}}{{item.favorite.gg_address.detail_address}}</span> </p>
<span  @click.stop="clicks($event,2,item.favorite.objectId,'groupground',0)"  v-if="show==index" class="f13 c60B346 cursor" style="position:absolute;right:20px;bottom:15px;">取消收藏</span>
      </li>
    </ul>




<!--没有数据的时候显示   你还没有收藏苗木哦！-->
<div v-if="datas=='no'" class="center">
  <img src="../tu-collection/1-04.png" style="margin-top:290px;">
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
  location.href="../parent/index.html#/mpc/home/0/"+objectId
},
// 加载最新数据
load(){
  var that=this
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function (pos) {
            var lng1 = pos.point.lng;//当前纬度
            var lat1 = pos.point.lat;//当前经度
   $.get(Boss+'favorite',{
    "sessiontoken":sessiontoken,
    "type":'groupground',
    'limit':common_limit1000,
    "longitude":lng1,
    "latitude":lat1

  },function(data){
    console.log(data)
        if(data.status==1){
      if(data.results.data.length>0){
       that.datas=data.results.data
      }else{
       that.datas='no'
      }
    }
  })
})
},
        // 取消收藏
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