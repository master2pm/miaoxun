
<template>
  <!-- 地图控件@click.stop="dituclick($event)" -->
  <div  id="allmap" class="ditu" style="width:100%;height:100%;">

    <div  style="display:none;">{{jiance}}</div>
    <!-- 点击的放大图 -->
<fangdatu v-if="fangdatuShow==true"></fangdatu>
  </div>

</template> 


<!--2. 默认导出 -->
<script>
import fangdatu from '../common/fangdatu.vue'
  export default {
    name: 'maps',
    data() {
      return {
        fangdatuShow:this.$store.state.fangdatuShowditu,//控制放大图的显示和隐藏
        map:null
        //datas:this.$store.state.group


      };
    },
    watch: {
       // '$route':'doload'
      // 对路由变化作出响应...
    },
    computed:{
      jiance(){
        this.datas=this.$store.state.group
        this.fangdatuShow=this.$store.state.fangdatuShowditu
        this.doload()
    //alert(this.datas)
  }
},
mounted(){
  var that=this
  setTimeout(function(){
    that.map = new BMap.Map("allmap");
  // 不知道干嘛的
  mapp= that.map
  var mapp= that.map
  var mapp_AA= that.map
  that.map.centerAndZoom("中山",11)
  that.map.enableScrollWheelZoom();
  // var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}
  // var top_left_navigation = new BMap.NavigationControl(opts);  //左上角，添加默认缩放平移控件
  // that.map.addControl(top_left_navigation);
  // 自定义放大缩小的按钮
 baidu_zoom(that.map)
  var opts2={
    anchor:BMAP_ANCHOR_BOTTOM_LEFT,
    showAddressBar:true,
    enableGeolocation:false,
    locationIcon:new BMap.Icon("/static/tu-gouwuche/1-20.png",new BMap.Size(38,47))
  }
  var geolocationControl = new BMap.GeolocationControl(opts2);
  geolocationControl.addEventListener("locationSuccess", function(e){
   // $('.BMap_geolocationAddressText')[0].innerHTML=""
 });
  geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  that.map.addControl(geolocationControl);

  that.doload()
  },500)
 
},
methods:{

  doload(){ 
    // alert(222)
    var that=this
    //执行前先清空地图

if(this.map==null){
         return
     }
      this.map.clearOverlays(); 

   function map(item){

    // 复杂的自定义覆盖物
    function ComplexCustomOverlay(point,text){
      this._point = point;
      this._text = text;

    }
    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function(map){
      this._map =  map;
      var div = this._div = document.createElement("div");
      div.className="fu"
      div.style.position = "absolute";
      div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
      div.style.backgroundColor = "#34AD4A";
      div.style.border = "1px solid #DBDFDF";
      div.style.borderRadius = "3px";
      div.style.cursor="pointer"
      div.id=item[i].objectId
        // div.x=
        // div.y=
        $(div).attr("x",item[i].mu_coordinate.longitude)
        $(div).attr("y",item[i].mu_coordinate.latitude)
        div.style.color = "white";
        div.style.height = "24px";
        div.style.paddingLeft = "4px";
        div.style.paddingRight = "4px";
        div.style.textAlign = "center";
        div.style.lineHeight = "24px";
        div.style.whiteSpace = "nowrap";
        div.style.MozUserSelect = "none";
        div.style.fontSize = "12px"
        var span = this._span = document.createElement("span");
        div.appendChild(span);
        span.appendChild(document.createTextNode(this._text));
        var that = this;
        var html_tu=''
        var tu=item[i].mu_photo
         // console.log("item[i].mu_photo" )
        // console.log(item[i].mu_photo )
        for (var f = 0; f < tu.length; f++) {
                // console.log(tu[f].mu_photo_original)
                html_tu+='<div  class="'+(f==0?'active':'')+' item fang  cursor relative" fangdaItem="'+item[i]+'" style="height:345px;width:230px;">'
                +'<img id="'+(f==0?'imgDemo':'')+'" src="'+tu[0].url
                +'?imageView2/1/w/230/h/345" alt="" class="jz" class="'+tu[0].id+'"/></div>'
              }

// style="height:411px;width:230px; 500"

              var    innerHTML=`
              <div  class="info relative" style="margin:0 auto;height:475px;width:230px;">
                `+
                `<div class="thumbnail" style="border:none;padding:0;margin-bottom:0;background:transparent;">
                <div id="mymap${i}"  class="carousel carouselaaa slide " data-interval="false">

                 <!-- 轮播（Carousel）项目 -->
                 <div class="carousel-inner">
                  `+
                  html_tu
                  +
                  `</div>

                  <!-- 轮播（Carousel）导航 -->
                  <a class="carousel-control  center2 centerr left carouselPrev" style="background-image:none;" data-slide="prev">
                   <img src="/static/tu-detail/1-09.png"   class="czjz cursor" style="left:10px;">
                 </a>
                 <a class="carousel-control  center2 centerr right carouselNext" style="background-image:none;" data-slide="next">
                   <img src="/static/tu-detail/1-10.png"   class="czjz cursor" style="right:10px;">
                 </a>
               </div>
               `+
               `
               <div >
          
                 <div class="f18 c4A494B relative" style="margin-top:8px;">${item[i].mu_name.length>8?item[i].mu_name.substring(0,8):item[i].mu_name}<span style="display:${item[i].mu_name.length>8?'inline-block':'none'};">...</span><span style="left:5px;" class=" f12 type">${item[i].mu_type!=undefined?item[i].mu_type.substring(0,1):''}</span>


                  <!-- 团队标准 group-->
                  <img style="right:0;display:${item[i].mu_ground.group.type=='group'?'block':'none'};" src="/static/tu-detail/1-11.png" class="czjz" >
                  <!-- 个人标准 private-->
                  <img  style="right:0;display:${item[i].mu_ground.group.type=='private'?'block':'none'};" src="/static/tu-detail/1-13.png" class="czjz" >
                  <!-- 企业标准 company-->
                  <img  style="right:0;display:${item[i].mu_ground.group.type=='company'?'block':'none'};" src="/static/tu-detail/1-12.png" class="czjz" >


                </div>

                <div  style="display:${item[i].mu_type!='草坪'?'block':'none'};height:65px;"    class=" relative">
                  <div  class="czjz">
                   <!-- 假 地  盆 -->
                   <div style="display:${item[i].mu_type!='袋苗'&&(item[i].mu_mj_min!=''||item[i].mu_mj_max!='')?'block':'none'};" class="f13 c4A494B">
                   <span>
                   米径${item[i].mu_mj_min}

                   <span style="display:${item[i].mu_mj_min!=''&&item[i].mu_mj_max!=''&&item[i].mu_mj_min!=item[i].mu_mj_max?'inline-block':'none'};">- ${item[i].mu_mj_max}</span>

                   
                   </span>
                   
                   · 

                   自然高${item[i].mu_zg_min}
                   <span style="display:${item[i].mu_zg_min!=''&&item[i].mu_zg_max!=''&&item[i].mu_zg_min!=item[i].mu_zg_max?'inline-block':'none'};">- ${item[i].mu_zg_max}</span>
                   
                   </div>

<div style="display:${item[i].mu_type!='袋苗'&&(item[i].mu_dj_min!=''||item[i].mu_dj_max!='')?'block':'none'};" class="f13 c4A494B">
                   <span>
                   地径${item[i].mu_dj_min}

                   <span style="display:${item[i].mu_dj_min!=''&&item[i].mu_dj_max!=''&&item[i].mu_dj_min!=item[i].mu_dj_max?'inline-block':'none'};">- ${item[i].mu_dj_max}</span>

                   
                   </span>
                   
                   · 

                   自然高${item[i].mu_zg_min}
                   <span style="display:${item[i].mu_zg_min!=''&&item[i].mu_zg_max!=''&&item[i].mu_zg_min!=item[i].mu_zg_max?'inline-block':'none'};">- ${item[i].mu_zg_max}</span>
                   
                   </div>

                   


                   <div style="display:${item[i].mu_type!='袋苗'?'block':'none'};" class="f13 c4A494B">
                   <span style="display:${item[i].mu_rg_min!=''||item[i].mu_rg_max!=''?'inline-block':'none'};">
                   肉高${item[i].mu_rg_min}

                   <span style="display:${item[i].mu_rg_min!=''&&item[i].mu_rg_max!=''&&item[i].mu_rg_min!=item[i].mu_rg_max?'inline-block':'none'};">- ${item[i].mu_rg_max}</span>
                   
                  </span>
                   <span style="display:${(item[i].mu_rg_min!=''||item[i].mu_rg_max!='')&&(item[i].mu_zfjg_min!=''||item[i].mu_zfjg_max!='')?'inline-block':'none'};"> · </span>

                   <span style="display:${item[i].mu_zfjg_min!=''||item[i].mu_zfjg_max!=''?'inline-block':'none'};">
                   主分枝高${item[i].mu_zfjg_min}

                   <span style="display:${item[i].mu_zfjg_min!=''&&item[i].mu_zfjg_max!=''&&item[i].mu_zfjg_min!=item[i].mu_zfjg_max?'inline-block':'none'};">- ${item[i].mu_zfjg_max}</span>

                   
                   </span>
                   </div>


                   <!-- 袋 -->
                 
                   <div  style="display:${item[i].mu_type=='袋苗'?'block':'none'};"  class="f12 c4A494B">
                   ${item[i].mu_package_weight}斤袋 · 
                   自然高${item[i].mu_zg_min}-${item.mu_zg_max}</div>


                   <!-- 公用 冠幅 -->                       
                   <div  class="f13 c4A494B">冠幅${item[i].mu_gf_min}
                    <span style="display:${item[i].mu_gf_min!=''&&item[i].mu_gf_max!=''&&item[i].mu_gf_min!=item[i].mu_gf_max?'inline-block':'none'};">- ${item[i].mu_gf_max}</span>
                   （单位：cm）</div>
                 </div>

               </div>

<!--2.这个是草坪的<i class="iconfont icon-pfm" style="font-size:12px;"></i>-->
  <div style="display:${item[i].mu_type=='草坪'?'block':'none'};height:65px;"  class="f13 c4A494B">
        <p style="margin:10px 0 0 0;">
              <span style="display:${item[i].lawn_length!=''&&item[i].lawn_length!=undefined?'inline-block':'none'};">长${item[i].lawn_length}cm</span>
              <span style="display:${item[i].lawn_width!=''&&item[i].lawn_width!=undefined?'inline-block':'none'};" ><span style="display:${item[i].lawn_length!=''&&item[i].lawn_length!=undefined?'inline-block':'none'};"> · </span>宽${item[i].lawn_width}cm</span>
              <span style="display:${item[i].lawn_density!=''&&item[i].lawn_density!=undefined?'inline-block':'none'};" ><span style="display:${(item[i].lawn_length!=''&&item[i].lawn_length!=undefined)||(item[i].lawn_width!=''&&item[i].lawn_width!=undefined)?'inline-block':'none'};"> · </span>密度${item[i].lawn_density}%</span>
       <span style="display:${item[i].lawn_amount==''||item[i].lawn_amount==undefined?'inline-block':'none'};">（单位：cm）</span>
      </p>
         <p  style="margin:0;">
              <span style="display:${item[i].lawn_amount!=''&&item[i].lawn_amount!=undefined?'inline-block':'none'};" >每捆数量${item[i].lawn_amount}片 <span>（单位：cm）</span>
             
      </p>
      
  </div>

               <div class="f16 c60B346 relative" style="m">${item[i].mu_price=='-1'?'面议':(item[i].mu_type=='草坪'?'￥'+item[i].mu_price+'/'+item[i].unit:'￥'+item[i].mu_price+'/株')}<span class="relative f12 c676868" style="left: 10px;top: -1px;">库存${item[i].mu_stock}${item[i].mu_type=='草坪'?'㎡':'株'}</span></div>


             </div>
           </div>


           `
        // 信息船体
        var content =innerHTML
        var arrow = this._arrow = document.createElement("div");
        var parentb=document.createElement("h3");

            //arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
            arrow.style.position = "absolute";
            arrow.style.borderTop="6px solid #34AD4A";
            arrow.style.borderLeft="6px solid transparent";
            arrow.style.borderBottom="6px solid transparent";
            arrow.style.borderRight="6px solid transparent";
            arrow.style.width = "0px";
            arrow.style.height = "0px";
            arrow.className="san"
            arrow.style.top = "99%";
            arrow.style.left = "50%";
            arrow.style.zIndex = "50";
            arrow.style.transform="translate(-50%)"
            div.appendChild(arrow);


            parentb.style.position = "absolute";
            parentb.style.borderTop="8px solid #DBDFDF";
            parentb.style.borderLeft="8px solid transparent";
            parentb.style.borderBottom="8px solid transparent";
            parentb.style.borderRight="8px solid transparent";
            parentb.style.width = "0";
            parentb.style.padding = "0";
            parentb.style.margin = "0";
            parentb.style.height = "0px";
            parentb.style.top = "99%";
            parentb.style.left = "50%";
            parentb.style.transform="translate(-50%)"
            div.appendChild(parentb);

            ////点击变颜色
            div.onclick=function(){ 
                //点击时创建信息窗体
                //var n = ($(this).find('span').html()).length
                 var n = ($(this).find('span').html()).length
                if(n == 1){
                  n = n - 49
                }else if( n == 2 ){
                  
                    if($(this).find('span').html()=='面议'){
                      n = n - 49
                      console.log('num')
                    }else{
                       n = n - 52
                    }
                 
                }else if( n == 3 ){
                  n = n - 49
                }else if( n == 4 ){
                  n = n - 48
                }else if( n == 5 ){
                  n = n - 44
                }else if( n == 6 ){
                  n = n - 42
                }else if( n == 7 ){
                  n = n - 40
                }else if( n == 8 ){
                  n = n - 37
                }else if( n == 9 ){
                  n = n - 35
                }else{
                  n = n - 33
                }

                var opts = {
                        width : 230,     // 信息窗口宽度
                        height: 475,     // 信息窗口高度
                        title : "" , // 信息窗口标题
                        offset:new BMap.Size(n,2),
                        enableMessage:true//设置允许信息窗发送短息
                      }; 
                var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
                //去除了轮播图左右切换的href属性，通过js控制
                infoWindow.addEventListener('open', function(e){
                //绑定信息框的open事件
                    //在信息窗体打开时，给左右按钮添加切换功能
                    $('.carouselPrev').click(function(){
                      $(".carouselaaa").carousel('prev');
                    })
                    $('.carouselNext').click(function(){
                      $(".carouselaaa").carousel('next');
                    })              
                    //图片加载完毕重绘infowindow
                    // document.getElementById('imgDemo').onload = function (){
                    //    infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
                    //  }
                   });
                   //alert(333)
                // 价格条加灰色背景 ！important  三角形加灰色边框 ！important
                $(this).addClass("clickbjs");
                $(this).find(".san").addClass("clickbks");
                // 层叠性
                $(this).siblings(".ditu .fu").removeClass("z_10000")

                // $(this).siblings(".ditu .fu").removeClass("z_10000")
                 $(this).addClass("z_10000")

                // 当前点击的价格条的id去查找左边的列表中classz和该id相同的东西设置背景颜色灰色
                var id=this.id
                $(".miaoyuan .fangda").removeClass("border8")
                $(".miaoyuan>li div[classz='"+id+"']").addClass("border8")
                $(".miaoyuan li."+id).find('.showorhide').addClass('SHOWS')
                var point = new BMap.Point($(this).attr("x"),$(this).attr("y"));
                console.log(point)
                map.openInfoWindow(infoWindow,point);

              }

            ////移入变颜色
            div.onmouseenter = function(){
              var id=this.id
              // $(".miaoyuan div[classz='"+id+"']>img").removeClass("borderB11")
              $(".miaoyuan div[classz='"+id+"']>img").addClass("borderL11")
              $(".miaoyuan li."+id).find('.showorhide').css({"display":'block'})
                // 长方形的价格条的背景颜色和边框颜色:橙色
                this.style.backgroundColor = "#F16622";
                this.style.borderColor = "#DBDFDF";
                 // 三角形边框颜色和偏移
                 arrow.style.borderTop="6px solid #F16622";
                 arrow.style.backgroundPosition = "0px -20px";
               }




            //移出变颜色
            div.onmouseleave = function(){
              var id=this.id
              $(".miaoyuan div[classz='"+id+"']>img").removeClass("borderL11")
              // $(".miaoyuan div[classz='"+id+"']>img").addClass("borderB11")
              $(".miaoyuan li."+id).find('.showorhide').css({"display":'none'})
                // 长方形的价格条的背景颜色和边框颜色:绿色
                this.style.backgroundColor = "#34AD4A";
                this.style.borderColor = "#DBDFDF";
                 // 三角形边框颜色和偏移
                 arrow.style.backgroundPosition = "0px 0px";
                 arrow.style.borderTop="6px solid #34AD4A";
               }


               map.getPanes().labelPane.appendChild(div);

               return div;
             }

         ComplexCustomOverlay.prototype.draw = function(){
          var map = this._map;
          var pixel = map.pointToOverlayPixel(this._point);
          this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
          this._div.style.top  = pixel.y - 30 + "px";
        }
    //文本信息
    var txt;
    //创建点
  // 1.调整最佳视野，将所有的坐标点的压入数组
    var pointsView = []

    for (var i= 0;i<item.length;i++){
      if(item[i].mu_coordinate.latitude!=undefined&&item[i].mu_coordinate.longitude!=undefined){
        if(item[i].mu_coordinate.latitude!=''&&item[i].mu_coordinate.longitude!=''){
          // 2.调整最佳视野，将所有的坐标点的压入数组
           var pt = new BMap.Point(item[i].mu_coordinate.longitude ,
              item[i].mu_coordinate.latitude
              )
          pointsView.push(pt);

          var myCompOverlay = new ComplexCustomOverlay(
            pt,(item[i].mu_price=='-1'?'面议':"￥"+item[i].mu_price)

            );
        }


        that.map.addOverlay(myCompOverlay);
      }
    }
    that.map.enableDragging()
    // 3.调整最佳视野，将所有的坐标点的压入数组
     // that.map.setViewport(pointsView); //将所有的点放置在最佳视野内

  }
//调用函数
setTimeout(function(){
  console.log("检测的group"+that.$store.state.group.length)
console.log(that.$store.state.group)
map(that.$store.state.group)
},10)

}

}
}

// 点击的时候将放大的数据取出来
$(document).on("click",'.fang',function(){
  alert(1)
     store.state.fangdatuItem=$(this).attr("fangdaItem")
     store.state.fangdatuShowditu=true
})


</script>





<!-- 3.样式 scoped：限制作用范围，只对当前组件有效 -->
<style scoped>
  /*价格条点击的时候灰色的背景颜色和三角边框*/

</style>
