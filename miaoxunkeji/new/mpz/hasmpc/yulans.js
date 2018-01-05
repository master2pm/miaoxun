

//  预览苗圃

const yulans = {
  template: `
  <!-- 已发布的弹出框预览layui-anim layui-anim-upbit  -->
  <div v-if="datas!=''"  class="bai  kuang animated fadeIn" :style="{minHeight:h}" style="z-index:10;position:absolute;width:1024px;top:231px;">

  <div style="padding:35px;color:#49494B;position: relative;margin-bottom:30px;" class="overflow f24 border-b ">

  <div class=" f24 c49494B" style="width: 65%;">
  <p class="f40 c12A739  " style="margin-bottom:30px; ">{{datas.gg_name}}</p>
  <p>{{datas.gg_name}} · {{datas.gg_contacts}} · {{datas.gg_contact_number}} ·</p>
  <p style="line-height: 150%;">{{datas.gg_address.province}}{{datas.gg_address.city}}{{datas.gg_address.detail_address}} · </p>
  <p >{{datas.gg_intro}}</p>    
  </div>

  <div style="width: 272px;height:171px;right:35px;" class="czjz overflow">
  <img  src="../tu-mpz/gs.png" class="jz" >
  </div>

  </div>

  <!-- 抽出来的li商品组件 -->
  <shangpin class="bai"></shangpin>

  </div>



  `,
  data:function(){
      return {
        h:$(document).height()-170-60+'px',
      indexa:-1,//鼠标放上li图片出现绿色的边框线
           datas:''// 已发布
         }
       },
       components:{"shangpin":shangpin},
       methods:{
     // 点击列表图片的时候放大图显示
     liclick(e,item){
       this.fangdatuShow=true

       this.$store.state.fangdatuItem=item


     },
     mouseenters(e){
      $(e.currentTarget).addClass("F1F1F1bg")
    },  
    mouseleaves(e){
      $(e.currentTarget).removeClass("F1F1F1bg")
    }
  },
    // 
    mounted:function () {
      var that=this
      // //  查看指定苗埸的树林
      // $.get(this.$store.state.Boss+"ground/"+this.$route.params.objectId+"/tree",{"sessiontoken":this.$store.state.sessiontoken},function(data){
      //   that.datas=data.results.data
      //   console.log("pppp")
      //   console.log(that.datas)
      // })
      $.get(Boss+"ground/"+this.$route.params.objectId,{"sessiontoken":sessiontoken},function(data){
         that.datas=data.results
         JSONS(data,'预览苗圃')
      })
       // 根据地址栏的苗圃场id去查该苗圃场的信息和下面的所有已发布苗木
     }
   }

