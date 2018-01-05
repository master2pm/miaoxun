

//  商品

const shangpin = {
  template: `
  <div>
  <!-- 商品鼠标放上出现购物车的li -->


<div v-if="datas.length==0" >

</div>
  <ul  v-cloak class="miaoyuan overflow bai" style="margin-left:25px;width:985px;">
 <li class=" lf" v-for="(item,index) in datas" @mouseenter="indexa=index" @mouseleave="indexa=-1" style="height:610px;width:231px;margin-bottom:20px;margin-right:15px;">
        <div >
        <div @click.stop="liclick($event,item,index)"  style="width:231px;height:411px;margin-bottom:7px;">
           <img class="cursor" :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/231/h/411':'/static/tu-detail/1-102.png'" alt="slide" :class="{borderL1:indexa==index,borderB1:indexa!=index}" style="">
        </div>
          
          <div >
            <div class="f18 c4A494B relative">{{item.mu_name.length>8?item.mu_name.substring(0,8):item.mu_name}}
            <span v-if="item.mu_name.length>8">...</span>
              <span class="f12 type16s">{{item.mu_type!=undefined?item.mu_type.substring(0,1):''}}</span>
              

             <!-- 团队标准 group-->
              <img v-if="item.mu_ground.group.type=='group'" src="/static/tu-detail/1-11.png" class="czjz" style="right:0;">
              <!-- 个人标准 private-->
              <img  v-if="item.mu_ground.group.type=='private'" src="/static/tu-detail/1-13.png" class="czjz" style="right:0;">
              <!-- 企业标准 company-->
              <img  v-if="item.mu_ground.group.type=='company'" src="/static/tu-detail/1-12.png" class="czjz" style="right:0;">


            </div>
    

   <div style='height:55px;' class="" v-if="item.mu_type!='草坪'">
  

            <!-- 假 地  盆 -->
            <div v-if="item.mu_type!='袋苗'&&(item.mu_mj_min!=''||item.mu_mj_max!='')" class="f12 c4A494B">
              <span v-show="item.mu_mj_min!=''||item.mu_mj_max!=''">
                米径{{item.mu_mj_min}}
                <span v-show="item.mu_mj_min!=''&&item.mu_mj_max!=''&&item.mu_mj_min!=item.mu_mj_max">- {{item.mu_mj_max}}</span>
              </span>

                              · 
              <span v-show="item.mu_zg_min!=''||item.mu_zg_max!=''">
                自然高{{item.mu_zg_min}}
                                <span v-show="item.mu_zg_min!=''&&item.mu_zg_max!=''&&item.mu_zg_min!=item.mu_zg_max">- {{item.mu_zg_max}}</span>
                
              </span>
              

              </div>

              <div  v-if="item.mu_type!='袋苗'&&(item.mu_dj_min!=''||item.mu_dj_max!='')"  class="f12 c4A494B">
              <span v-show="item.mu_dj_min!=''||item.mu_dj_max!=''">
                地径{{item.mu_dj_min}}
                <span v-show="item.mu_dj_min!=''&&item.mu_dj_max!=''&&item.mu_dj_min!=item.mu_dj_max">- {{item.mu_dj_max}}</span>
              </span>
                               · 
              <span v-show="item.mu_zg_min!=''||item.mu_zg_max!=''">
                自然高{{item.mu_zg_min}}
                                <span v-show="item.mu_zg_min!=''&&item.mu_zg_max!=''&&item.mu_zg_min!=item.mu_zg_max">- {{item.mu_zg_max}}</span>
                
              </span>

              </div>

              <div v-if="item.mu_type!='袋苗'" class="f12 c4A494B">
              <!-- 肉高 -->
              <span v-show="item.mu_rg_min!=''||item.mu_rg_max!=''">
                肉高{{item.mu_rg_min}}
                <!-- 横 -->
                <span v-show="item.mu_rg_min!=''&&item.mu_rg_max!=''&&item.mu_rg_min!=item.mu_rg_max">- {{item.mu_rg_max}}</span>
              </span>
              <!-- 点 -->
              <span  v-show="(item.mu_rg_min!=''||item.mu_rg_max!='')&&(item.mu_zfjg_min!=''||item.mu_zfjg_max!='')"> · </span>
                            
                            <!-- 主分枝高 -->
              <span v-show="item.mu_zfjg_min!=''||item.mu_zfjg_max!=''">
                 主分枝高{{item.mu_zfjg_min}}
                 <!-- 横 -->
                                <span v-show="item.mu_zfjg_min!=''&&item.mu_zfjg_max!=''&&item.mu_zfjg_min!=item.mu_zfjg_max">- {{item.mu_zfjg_max}}</span>
                
              </span>
              </div>
              

              <!-- 袋 -->

              <div v-if="item.mu_type=='袋苗'&&(item.mu_zg_min!=''||item.mu_zg_max!='')" class="f12 c4A494B">
              {{item.mu_package_weight}}斤袋 · 
              自然高{{item.mu_zg_min}}
              <!-- 横 -->
              <span  v-show="(item.mu_zg_min!=''&&item.mu_zg_max!=''&&item.mu_zg_min!=item.mu_zg_max)&&item.mu_type=='袋苗'">- {{item.mu_zg_max}}</span>
              
              </div>

              <!-- 公用 冠幅 -->
              <div class="f12 c4A494B">
              <span v-show="(item.mu_gf_min!=''||item.mu_gf_max!='')">冠幅{{item.mu_gf_min}}
              <span  v-show="(item.mu_gf_min!=''&&item.mu_gf_max!=''&&item.mu_gf_min!=item.mu_gf_max)">- {{item.mu_gf_max}}</span>
              </span>
              （单位：cm）
              </div>
</div>

<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div v-if="item.mu_type=='草坪'" style='height:55px;' class="f12 c4A494B">
        <p >
             <span v-show="item.lawn_length!=undefined&&item.lawn_length!=''">长{{item.lawn_length}}</span>
              <span v-show="item.lawn_width!=undefined&&item.lawn_width!=''"><span v-show="item.lawn_length!=''&&item.lawn_length!=undefined"> · </span>宽{{item.lawn_width}}</span>
              <span v-show="item.lawn_density!=undefined&&item.lawn_density!=''"><span v-show="(item.lawn_length!=''&&item.lawn_length!=undefined)||(item.lawn_width!=''&&item.lawn_width!=undefined)"> · </span>密度{{item.lawn_density}}%</span>
                <span v-show="item.lawn_amount==''||item.lawn_amount==undefined">（单位：cm）</span>
      </p>
         <p >
               <span v-show="item.lawn_amount!=undefined&&item.lawn_amount!=''">每捆数量{{item.lawn_amount}}片</span>
               <span>（单位：cm）</span>
      </p>
  </div>

              <div class="f16 c60B346 relative" style="margin:10px 0 3px 0;">{{item.mu_price=='-1'?'面议':(item.mu_type=='草坪'?('￥'+item.mu_price+'/㎡'):('￥'+item.mu_price+'/株'))}}<span class="czjz f12 c676868" style="right:0;">库存{{item.mu_stock}}{{item.mu_type=='草坪'?'㎡':'株'}}</span></div>
              <div class="f12 c989698 relative">{{item.mu_ground.gg_name.length>10?item.mu_ground.gg_name.substring(0,10):item.mu_ground.gg_name}}<span v-if="item.mu_ground.gg_name.length>10">...</span><span class="czjz " style="right:0;">{{item.mu_province}}·{{item.mu_city}}</span></div>
              <div v-show="indexa==index" style="margin-top:15px;">
                <span @click="clicks($event,1,item.objectId,'当前登录人所属的组的id',1,index)"  @mouseenter="mouseenters($event)" @mouseleave="mouseleaves($event)" class="lf f12 c989698 center border cursor" style="height:35px;line-height:35px;width:144px;" :class="{c60B346:item.isselected==1}" >{{item.isselected==0?'加入购物车':'已加入购物车'}}</span>
                <span  :class="{c60B346:item.isfavor==1}"  @click="clicks($event,2,item.objectId,'tree',0,index)"  @mouseenter="mouseenters($event)" @mouseleave="mouseleaves($event)" class="border lf f12 c989698 center cursor" style="height:35px;line-height:35px;width:83px;border-left:none;">{{item.isfavor==0?'收藏':'已收藏'}}</span>
              </div>
            </div>

          </div>
        </li>
  </ul>

  <!-- 点击的放大图 -->
<fangdatu v-if="fangdatuShow==true"></fangdatu>
</div>
  `,
  data:function(){
      return {indexa:-1,//鼠标放上li图片出现绿色的边框线
        fangdatuShow:false,//控制放大图的显示和隐藏
           datas:[],// 已发布
           Yulans:'yes'//用来区分是哪个的放大图
         }
       },
       components:{"fangdatu":fangdatu},
       methods:{
     // 点击列表图片的时候放大图显示
     liclick(e,item,index){
       this.fangdatuShow=true
       common_fangdatuIndex=index
       //this.$store.state.fangdatuItem=item
       common_fangdatuItem=item

     },
   clicks(e,n,objectId,type,amount,index){
              var that=this
        if(n==1){  
        // this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId})
         common_adds(e,n,objectId,type,amount)
        }else if(n==2){
         common_adds(e,n,objectId,type,amount)
         // 让对应的收藏变成已收藏或者未收藏
                    if(this.datas[index].isfavor==1){
                      this.datas[index].isfavor=0
                    }else if(this.datas[index].isfavor==0){
                       this.datas[index].isfavor=1
                    }
        //this.$store.commit("adds",{"e":e,"n":n,"objectId":objectId,'type':type})
        }          
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
      //  查看指定苗埸的树林
      $.get(Boss+"ground/"+this.$route.params.objectId+"/tree",{"sessiontoken":sessiontoken},function(data){
        that.datas=data.results.data
        JSONS(data,'预览的苗木123')
        console.log(that.datas)
      })
      
       // 根据地址栏的苗圃场id去查该苗圃场的信息和下面的所有已发布苗木
     }
   }

