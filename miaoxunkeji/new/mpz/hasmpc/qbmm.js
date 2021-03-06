
 // <div class="lf" style="width:100px;height:178px;padding:4px;border:1px dashed #D2D6D6;">
  // <img :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/229/h/409':'../tu-mpz/1-91.png'"  style="width:100%;height:100%;">
  // </div>
// 有 qbmm 91

const qbmm = {
  template: `
  <div class="relative" style="height:593px;padding:20px;padding-top:0;">


  <div style="display:none;">{{watch}}</div>



  <ul class="overflow ULs" style="">
  <li @click="gotjxmm(item.objectId,item)" v-for="(item,index) in datas" class="cursor border-b" style="width:471px;padding:20px 0;">
 
   <div  class="lf relative" style="width:100px;height:178px;padding:4px;border:1px dashed #D2D6D6;">
                             <img :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/100/h/178':'../tu-mpz/1-91.png'" class="jz">
                             <!--   <img :src="item.mu_photo.length>0?item.mu_photo[0].url+'?imageView2/1/w/229/h/409':'../tu-mpz/1-91.png'"  style="width:100%;height:100%;">-->
  </div>
  <div class="rf  relative" style="width:345px;height:178px;">

  <p style="margin:10px 0;">
  <span class="f26 " style="margin-right:10p;display:inline-block;">{{item.mu_name.length>11?item.mu_name.substring(0,11):item.mu_name}}</span>
  <span v-if="item.mu_name.length>11" >...</span>
  <span v-if="item.mu_type!=undefined&&item.mu_type!=''" class="type" style="position:relative;top:-2px;">{{item.mu_type!=undefined?item.mu_type.substring(0,1):''}}</span>
  </p>


  <!--1.这个是非草坪的-->
  <div v-if="item.mu_type!='草坪'" style='height:55px;' class="">
  <!-- 假 地  盆 -->
  <p class="f15 c696A6C"  v-if="item.mu_type!='袋苗'">

            <span v-show="item.mu_mj_min!=''">
                    米径{{item.mu_mj_min}}
                    <span v-show="item.mu_mj_min!=''&&item.mu_mj_min!=item.mu_mj_max">- {{item.mu_mj_max}}</span>
                    cm
            </span>

            <span v-show="item.mu_dj_min!=''">
                 地径{{item.mu_dj_min}}
                 <span v-show="item.mu_dj_min!=''&&item.mu_dj_min!=item.mu_dj_max">- {{item.mu_dj_max}}</span>
                 cm
            </span>

            <!-- 点 -->
            <span  v-show="(item.mu_zg_min!=''&&item.mu_dj_min!='')||(item.mu_zg_min!=''&&item.mu_mj_min!='')"> · </span>

            <span v-show="item.mu_zg_min!=''">
                     自然高{{item.mu_zg_min}}
                     <span v-show="item.mu_zg_min!=''&&item.mu_zg_min!=item.mu_zg_max">- {{item.mu_zg_max}}</span>
                     cm
            </span>
  </p>



  <p class="f15 c696A6C"    v-if="item.mu_type!='袋苗'">

              <span v-show="item.mu_rg_min!=''">
                     肉高{{item.mu_rg_min}}
                     <!-- 横 -->
                     <span v-show="item.mu_rg_min!=''&&item.mu_rg_min!=item.mu_rg_max">- {{item.mu_rg_max}}</span>
                     cm
              </span>
              <!-- 点 -->
              <span  v-show="item.mu_rg_min!=''&&item.mu_zfjg_min!=''"> · </span>      
              <!-- 主分枝高 -->
              <span v-show="item.mu_zfjg_min!=''">
                     主分枝高{{item.mu_zfjg_min}}
                     <!-- 横 -->
                     <span v-show="item.mu_zfjg_min!=''&&item.mu_zfjg_min!=item.mu_zfjg_max">- {{item.mu_zfjg_max}}</span>
                     cm
                
              </span>
  </p>




  <!-- 斤袋{{item.mu_package_weight}}斤袋 ·  -->

  <p class="f15 c696A6C" v-if="item.mu_type=='袋苗'">

                 {{item.mu_package_weight.indexOf('斤袋')!=-1?item.mu_package_weight:item.mu_package_weight+'斤袋'}}

                 <span v-show="item.mu_zg_min!=''">
                       <!-- 点 -->
                      <span  v-show="item.mu_package_weight!=''&&item.mu_zg_min!=''"> · </span>
                      自然高{{item.mu_zg_min}}<span v-show="item.mu_zg_min!=item.mu_zg_max">-{{item.mu_zg_max}}</span>
                      cm
                 </span>

                 
  </p>




  <!-- 公用 冠幅 -->
  <p class="f15 c696A6C" v-if="item.mu_type!='草坪'">
              <span v-show="item.mu_gf_min!=''">冠幅{{item.mu_gf_min}}
                             <span  v-show="(item.mu_gf_min!=''&&item.mu_gf_min!=item.mu_gf_max)">- {{item.mu_gf_max}}</span>
                             cm
              </span>
  </p>
</div>



<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div v-if="item.mu_type=='草坪'" style='height:55px;' class="">
        <p class="f15 c696A6C">
              <span v-show="item.lawn_length!=undefined&&item.lawn_length!=''">长{{item.lawn_length}}cm</span>
              <span v-show="item.lawn_width!=undefined&&item.lawn_width!=''"><span v-show="item.lawn_length!=''&&item.lawn_length!=undefined"> · </span>宽{{item.lawn_width}}cm</span>
              <span v-show="item.lawn_density!=undefined&&item.lawn_density!=''"><span v-show="(item.lawn_length!=''&&item.lawn_length!=undefined)||(item.lawn_width!=''&&item.lawn_width!=undefined)"> · </span>密度{{item.lawn_density}}%</span>
      </p>
         <p class="f15 c696A6C">
              <span v-show="item.lawn_amount!=undefined&&item.lawn_amount!=''">每捆数量{{item.lawn_amount}}片</span>
      </p>
  </div>




  <p v-if="item.mu_price!=undefined&&item.mu_price!=''" class="f18 c4C4C4F" style="margin-top:15px;">{{item.mu_price=='-1'?'面议':(item.mu_type=='草坪'?('￥'+item.mu_price+'/㎡'):('￥'+item.mu_price+'/株'))}}</p>
  <p class="f15 c696A6C" v-if="item.mu_stock!=undefined&&item.mu_stock!=''">{{item.mu_stock}}{{item.mu_type=='草坪'?'㎡':'株'}}</p>


  <!-- 状态值 1=审核中，0=未发布，2=已发布, -1=审核不通过-->    

  <!--1已发布：取消发布+已发布-->
  <img v-show="item.status=='2'" @click.stop="statesopen($event)" class="cursor relative" src="../tu-mpz/1-35.png" style="right:0;bottom:15px;position:absolute;">
  <ul class="liul f13 center rad border bai" style="display:none;z-index:0;right:0;bottom:15px;position:absolute;width:130px;height:80px;">
  <li @click.stop="changes($event,'qxfb',item.objectId,item.status)" class="cC06431 cursor border-b" style="height:40px;line-height:40px;">取消发布</li> 
  <li @click.stop="statesclose($event)" class="cursor c5FAA46 relative" style="opacity:0.3;height:40px;line-height:40px;">已发布
  <img src="../tu-mpz/1-93.png" class="czjz" style="right:10px;">
  </li> 
  </ul> 

  <!--2审核中:审核中-->
  <img  v-show="item.status=='1'"  class=" relative" src="../tu-mpz/1-36.png" style="right:0;bottom:15px;position:absolute;">

  <!--3审核未通过：删除苗木+发布苗木+审核未通过-->
  <img v-show="item.status=='-1'"  @click.stop="statesopen($event)" class="cursor relative" src="../tu-mpz/1-37.png" style="right:0;bottom:15px;position:absolute;">
  <ul class="f13 liul center rad border bai" style="display:none;z-index:0;right:0;bottom:15px;position:absolute;width:130px;height:120px;">
  <li @click.stop="changes($event,'sc',item.objectId,item.status)" class="c696A6C cursor border-b" style="height:40px;line-height:40px;">删除苗木</li> 
  <li @click.stop="changes($event,'fb',item.objectId,item.status,item)" class="cC06431 cursor border-b" style="height:40px;line-height:40px;">发布苗木</li> 
  <li @click.stop="statesclose($event)" class="cursor cC06431 relative" style="opacity:0.3;height:40px;line-height:40px;">审核未通过
  <img src="../tu-mpz/1-95.png" class="czjz" style="right:10px;">
  </li> 
  </ul> 

  <!--4未发布：删除苗木+发布苗木+未发布-->
  <img  v-show="item.status=='0'" @click.stop="statesopen($event)" class="cursor relative" src="../tu-mpz/1-38.png" style="right:0;bottom:15px;position:absolute;">
  <ul class="f13 center liul rad border bai" style="display:none;z-index:0;right:0;bottom:15px;position:absolute;width:130px;height:120px;">
  <li @click.stop="changes($event,'sc',item.objectId,item.status)" class="c696A6C cursor border-b" style="height:40px;line-height:40px;">删除苗木</li> 
  <li @click.stop="changes($event,'fb',item.objectId,item.status,item)" class="c5FAA46 cursor border-b" style="height:40px;line-height:40px;">发布苗木</li> 
  <li @click.stop="statesclose($event)" class="cursor cC06431 relative" style="opacity:0.3;height:40px;line-height:40px;">未发布
  <img src="../tu-mpz/1-95.png" class="czjz" style="right:10px;">
  </li> 
  </ul> 

  </div>
  </li>

  </ul>


  <!--点击发布 删除 取消发布按钮的弹出条-->
  <div v-show="what==true" style="position:fixed;bottom:0;left:0;width:100%;height:73px;background:url(../tu-mpz/1-10.png) no-repeat;background-size:100% 100%;">
  <div style="width:1024px;margin:0 auto;height:73px;" class="relative">
  <!--取消-->
  <img src="../tu-mpz/1-42.png" @click.stop="whats" class="czjz cursor" style="right:160px;">

  <!--发布-->
  <img v-if="who=='fb'" @click.stop="updataStatus" src="../tu-mpz/1-43.png" class="czjz cursor" style="right:20px;">
  <!--删除-->
  <img v-if="who=='sc'" @click.stop="updataStatus"  src="../tu-mpz/1-44.png" class="czjz cursor" style="right:20px;">
  <!--取消发布-->
  <img v-if="who=='qxfb'" @click.stop="updataStatus"  src="../tu-mpz/1-45.png" class="czjz cursor" style="right:20px;">
  </div>  
  </div>

<!--添加新苗木
<infor1 v-if="tjxmm==true" class="" style="position:fixed;top:230px;bottom:0;left:50%;transform:translateX(-50%);right:0;background:white;z-index:2;"></infor1>
  -->

  <!--发布的时候提示是否全部必填信息已经填完-->
<div v-if="alerts==true" style="z-index:2000;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);">
<div  class="bai rad center f26 c4b494b" style="width:350px;height:130px;position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">
      <p style="margin-top:30px;">您需先把必填的资料</p>  
       <p style="">填写完整才能发布</p>   
</div>
</div>


  </div>


  `,
  data:function(){
    return {
           alerts:false,//发布的时候提示是否全部必填信息已经填完
           what:false,//底部的低栏
           who:'',//点击的是什么类型的按钮
           treeid:'',//点击的该按钮的苗木id
           status:'',//点击的该按钮的苗木状态 1 0 -1 2
           datas:this.$store.state.qbmm,// 全部苗木
           tjxmm:false//控制添加新苗木的弹出框
         }
       },
       components:{
        "adds":adds
       },
       computed:{
        watch(){
          this.datas=this.$store.state.qbmm
        }
      },
      methods:{
      //跳到添加新苗木:name/:objectId/tjxmm/:biaoti/inf
      gotjxmm(objectId,item){
          this.$store.commit("whereTjxmm",item)
          this.$router.push({'name':'adds1',params:{'name':this.$route.params.name,'objectId':this.$route.params.objectId,'biaoti':2,'tjId':objectId,'status':item.status}})
      },
      // 更新苗木状态确定按钮
      updataStatus(){
        var that=this
        // 111如果不是删除按钮的时候执行更新状态操作
        if(this.who!='sc'){
          this.what=false
          this.$store.commit("updataStatus",{"objectId":this.treeid,"status":this.status})
                      // 1.更新苗木状态
                      $(".liul").css("display","none")
                      // 2.调用更新所以数据的方法
          that.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:'qbmm'})
                     
                    }else if(this.who=='sc'){
        // 222如果是删除按钮的时候执行删除状态操作
        this.what=false
        this.$store.commit("deleteStatus",{"objectId":this.treeid,"status":this.status})
                       // 1.更新苗木状态
                       $(".liul").css("display","none")
                       // 2.调用更新所以数据的方法
                       // setTimeout(function(){
        that.$store.commit("updataMu",{objectId:this.$route.params.objectId,where:'qbmm'})
                       // },200)
                       
                     }



                   },  
      // 取消按钮
      whats(){
          // $(".liul").css("display","none")
          this.what=false
          this.treeid=''
          this.status=''
        },
      // 列表旁边的按钮点击后展开
      statesopen:function(e){
        if(this.what==true){
          return
        }
        $(e.currentTarget).next("ul").css("display","block")
      },
        // 列表旁边的按钮点击后关闭
        statesclose:function(e){
          if(this.what==true){
            return
          }
          $(e.currentTarget).parent("ul").css("display","none")
        },
        // 列表旁边的按钮点击后展开后某个的点击事件
        changes:function(e,who,treeid,status,item){
          // alert(33)
          var that=this
          if(this.what==true){
            return
          }
                            if(who=='fb'){
                           // 要发布苗木需要把必填的项都填写完毕才能发布，若用户未填写完整，需弹出提示：您需先把必填的资料填写完整才能发布  
                          
                           // console.log("item") 
                           // JSONS(item,'您需先把必填的资料填写完整才能发布') 
                           var iss=false
                           if(item.mu_type!=''&&item.mu_type=="袋苗"){
                                if(item.mu_package_weight!=''&&(item.mu_gf_max!=''||item.mu_gf_min!='')&&(item.mu_zg_max!=''||item.mu_zg_min!='')){
                                     iss=true
                                }else{
                                     iss=false
                                }
                           }else if(item.mu_type!=''&&item.mu_type!="袋苗"&&item.mu_type!="草坪"){
                                if((item.mu_dj_max!=''||item.mu_dj_min!=''||item.mu_mj_max!=''||item.mu_mj_min!='')&&(item.mu_gf_max!=''||item.mu_gf_min!='')&&(item.mu_zg_max!=''||item.mu_zg_min!='')){
                                     iss=true
                                }else{
                                     iss=false
                                }
                           }else if(item.mu_type!=''&&item.mu_type=="草坪"){
                                if(item.lawn_density!=''&&item.lawn_density!=undefined){
                                     iss=true
                                }else{
                                     iss=false
                                }
                           }
                           if(iss==true&&item.mu_name!=''&&item.mu_type!=''&&(item.mu_price!=undefined&&item.mu_price!='')&&item.mu_stock!=''&&item.mu_photo.length>0){
                                  // 可以继续的
                                  // alert('ky')
                                  // return
                                this.alerts=false
                           }else{
                                // 返回
                                 // alert('bky')
                                 //  return
                                 this.alerts=true
                                 setTimeout(function(){
                                    that.alerts=false
                                 },1000)
                                return
                           }
                            
                            }
// 设置要操作的那个苗木的信息，到时候直接取这个信息来发送请求
          this.what=true
          this.who=who
          this.treeid=treeid
          this.status=status
          
        }
      },
    // 
    mounted:function () {
      var that=this
      
    }
  }

