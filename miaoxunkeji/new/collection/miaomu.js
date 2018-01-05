

//1.收藏的苗木

var miaomu = {
  template: `
  <div>



  <ul  v-if="datas!=''&&datas!='no'" v-cloak >
  <li @click="liclick($event,item.favorite)" @mouseenter="show=index" @mouseleave="show=-1" :class="{b20:show==index}" v-for="(item,index) in datas" class=" borders rad cursor" style="display:inline-block;margin-left:14px;margin-bottom:60px;width:231px;">
  <div style="width:231px;height:387px;" class="overflow relative">
  <img :src="item.favorite.mu_photo.length>0?item.favorite.mu_photo[0].url+'?imageView2/1/w/231/h/387':'../tu-collection/1-08.png'" class="jz">
  </div>


  <div style="width:231px;height:70px;" class="relative " >
  <div style="width:211px;height:45px;" class="jz " >
  <p class="c000000 f16">{{item.favorite.mu_name.length>8?item.favorite.mu_name.substring(0,8):item.favorite.mu_name}}
  <span v-if="item.favorite.mu_name.length>8">...</span>
  <span class="type">{{item.favorite.mu_type!=undefined?item.favorite.mu_type.substring(0,1):''}}</span></p>
  <p class="c60B346 f16">{{item.favorite.mu_price=='-1'?'面议':(item.favorite.mu_type=='草坪'?('￥'+item.favorite.mu_price+'/㎡'):('￥'+item.favorite.mu_price+'/株'))}}</p>
  </div>   
  </div>     


  <div v-show="show==index" style="width:211px;height:40px;margin:0 auto;" class="relative borders-t" >
  <span @click.stop="clicks($event,1,item.favorite.objectId,'当前登录人所属的组的id',1)" :class="{c676868:item.favorite.isselected==0,c60B346:item.favorite.isselected==1}" class="  f13 center czjz borders-r cursor" style="left:0;width:50%;">{{item.favorite.isselected==0?'加入购物车':'已加入购物车'}}</span>
  <span @click.stop="clicks($event,2,item.favorite.objectId,'tree',0)" class="c60B346 f13 center czjz cursor" style="right:0;width:50%;">取消收藏</span>
  </div>   


  </li>
  </ul>


  <!--没有数据的时候显示   你还没有收藏苗木哦！-->
  <div v-if="datas=='no'" class="center">
  <img src="../tu-collection/1-03.png" style="margin-top:290px;">
  </div>



<fangdatu v-if="fangdatuShow==true" class="c999899"></fangdatu>

  </div>
  `,
  data:function(){
    return {
      show:-1,
      datas:'',
      fangdatuShow:false
           //datas:''
         }
       },
       components:{"fangdatu":fangdatu},
       methods:{
liclick:function(e,item){

common_fangdatuItem=item//this.$store.state.
this.fangdatuShow=true
},
// 加载最新数据
load(){
  var that=this
  $.get(Boss+'favorite',{
    "sessiontoken":sessiontoken,
    "type":'tree',
    'limit':common_limit1000

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
},

          clicks(e,n,objectId,type,amount){
              var that=this
        if(n==1){
          common_adds(e,n,objectId,type,amount)
        //this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId})
        }else if(n==2){
         common_adds(e,n,objectId,type,amount)
         $(e.currentTarget).parent().parent().remove()
        //this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId,'type':type})
        }

//  setTimeout(function(){
// that.load()
//           },400)
          

      }


      },

      mounted:function () {
this.load()
      }
    }