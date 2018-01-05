
 
// 没有 请手动设置苗圃场定位

const two = {
    template: `
         <div class="relative" style="height:593px;padding:20px;padding-top:55px;">
<div style="display:none;">{{watch}}</div>
         <div class="relative" style="height:468px;margin:45px 0 50px 0;">      
			           <div  id="map_canvas"  class=" relative" style="height:468px;">			          
			           </div>



                 <div class=" bai" style="opacity:0.8;position:absolute;top:0;left:0;width:985px;height:51px;line-height:51px;"> 
                      {{this.$store.state.modifyGg_province}}，{{this.$store.state.modifyGg_city}}，{{this.$store.state.modifyGg_address}}
                 </div>
                
          </div>
			
            <div class="center" style="margin-bottom:40px;">
			         <img @click="nexts($event)" src="../tu-mpz/1-46.png" style="" class="cursor">
             </div>
          </div>


     `,
     data:function(){
      return {
            gg_coordinate_lat:this.$store.state.modifyGg_coordinate_lat,
            gg_coordinate_lng:this.$store.state.modifyGg_coordinate_lng

      }
     },
     computed:{
  watch(){
      this.gg_coordinate_lat=this.$store.state.modifyGg_coordinate_lat//苗圃埸坐标纬度
      this.gg_coordinate_lng=this.$store.state.modifyGg_coordinate_lng//苗圃埸坐标经度
  }
},
     components:{"goback":goback},
    methods:{
      // 完成编辑
      nexts(){
        var that=this
      $.post(Boss+"group/"+groupId+"/ground",{
          "objectId":this.$store.state.modifyObjectId,//苗圃埸ID
          "gg_name":this.$store.state.modifyGg_name,//苗圃埸名称
          "gg_intro":this.$store.state.modifyGg_intro,//苗圃埸简介
          "gg_contact_number":this.$store.state.modifyGg_contact_number,//苗圃埸联系人电话
          "gg_contacts":this.$store.state.modifyGg_contacts,//苗圃埸联系人姓名
          "gg_address":this.$store.state.modifyGg_address,//苗圃埸详细地址
          "gg_city":this.$store.state.modifyGg_city,//苗圃埸所在城市
          "gg_province":this.$store.state.modifyGg_province,//苗圃埸所在省份
          "gg_coordinate_lat":this.$store.state.modifyGg_coordinate_lat,//苗圃埸坐标纬度
          "gg_coordinate_lng":this.$store.state.modifyGg_coordinate_lng,//苗圃埸坐标经度
          "sessiontoken":sessiontoken
      },function(data){
                        // window.sessionStorage.setItem('MPCName',that.$store.state.modifyGg_name)
                        
              // 返回全部苗木
              
              if(data.status==1){
                 that.$router.push({name:"qbmm",params:{name:data.results.gg_name,objectId:data.results.objectId,biaoti:2}})
              }
             
       
        
      })
      },
      // 跳到地图
      goditu(){
      this.$router.push({name:"ditu",params:{groundId:this.$route.params.groundId}})
    }

    },
    // 
    mounted:function () {
		var that=this
       // 根据苗圃场id请求苗圃场的信息
    // $.get(Boss+"ground/"+this.$route.params.groundId,{"sessiontoken":sessiontoken},function(data){
    //   console.log(data)
    //     that.$store.state.modifyGg_coordinate_lat=data.results.gg_address.point.latitude
    //     that.$store.state.modifyGg_coordinate_lng=data.results.gg_address.point.longitude  
    // })
    setTimeout(function(){
 var map = new BMap.Map("map_canvas");          // 创建地图实例

        var initLat = that.gg_coordinate_lat
        var initLng = that.gg_coordinate_lng
        if(initLat==''){
          initLat=116.404
        }
        if(initLng==''){
          initLng=39.915
        }
        console.log("缓存获取坐标")
        console.log(initLat,initLng)
        var point = new BMap.Point(initLng, initLat);  // 创建点坐标  
        map.centerAndZoom(point, common_centerAndZoom);                 // 初始化地图，设置中心点坐标和地图级别  
        map.enableScrollWheelZoom();
        map.addEventListener("click",function(){
          // alert(3)
           that.goditu()
        })
                                  // 启用滚轮放大缩小 

                 mk = new BMap.Marker(point);  
                var myIcon = new BMap.Icon("../tu-mpz/1-68.png", new BMap.Size(29,37));
               mk = new BMap.Marker(point,{icon:myIcon});

                 map.addOverlay(mk);//把点添加到地图上  

        
        
        
    },1000)
       
    }
}

