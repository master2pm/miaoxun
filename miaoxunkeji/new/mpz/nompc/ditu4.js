
 
// 没有 请手动设置苗圃场定位

const ditu4 = {
    template: `
         <div class="relative" style="height:593px;padding:20px;padding-top:55px;">
		    <p class="f26 c49494B">请手动设置苗圃场定位</p>
         

         <div class="relative">        
			   <div id="map_canvas"  class=" relative" style="height:468px;margin:45px 0 50px 0;">
			           <img src="../tu-mpz/1-08.png" style="position:absolute;top:0;left:0;">

			   </div>
			            <img v-show="sousuo==false" @click="sousuos()" src="../tu-mpz/1-09 (2).png" style="left:32px;top:50px;" class="absolute cursor czjz">
                  <input v-model="sousuoVal" v-show="sousuo==true" type="text" id="suggestId" style="width:412px;height:46px;padding:0 15px;padding-right: 120px;left:32px;top:50px;" placeHolder="请输入关键字搜索" class="absolute c999899 f16 border">   
                  <img v-show="sousuo==true" @click="sousuoVal=''" src="../tu-mpz/1-03 (2).png" style="left:340px;top:75px;" class="absolute cursor czjz">
                  <span v-show="sousuo==true" class="czjz cursor" @click="ss()" style="left:375px;top:75px;">|&nbsp;&nbsp;&nbsp;返回</span>
                  <div id="searchResultPanel" style="border:1px solid red;width:150px;height:auto; display:none;"></div>    
        </div>

                <div style="position:fixed;left:0;bottom:0;width:100%;height:73px;" class=" bai">
			     <div  style="width:1024px;height:73px;" class="spjz">
				      <goback></goback>
			         <img @click="nexts($event)" src="../tu-mpz/1-26.png" style="right:20px;" class="cursor czjz">
				 </div>
               </div>
          </div>


     `,
     data:function(){
      return {
          sousuoVal:'',//input绑定的值
            sousuo:false,//控制搜索条的
            gg_coordinate_lat:'',
            gg_coordinate_lng:''

      }
     },
     components:{"goback":goback},
    methods:{
            ss(){
        // 返回按钮
        this.sousuo=false
        this.sousuoVal=''
      },
      maps(){
      var that=this
           var map = new BMap.Map("map_canvas");          // 创建地图实例

        var initLat = this.$store.state.mpc.gg_coordinate_lat;
        var initLng = this.$store.state.mpc.gg_coordinate_lng;
// alert(this.$store.state.mpc.gg_coordinate_lat)
        if(initLat==''){
          initLat=39.915
        }
        if(initLng==''){
          initLng=116.404
        }
         that.gg_coordinate_lng=initLng
         that.gg_coordinate_lat=initLat
         
        console.log("缓存获取坐标1")
        console.log(initLat,initLng)
        var point = new BMap.Point(initLng, initLat);  // 创建点坐标  
        map.centerAndZoom(point, common_centerAndZoom);                 // 初始化地图，设置中心点坐标和地图级别  
        map.enableScrollWheelZoom();                            // 启用滚轮放大缩小 

                mk = new BMap.Marker(point);  
                var myIcon = new BMap.Icon("../tu-mpz/1-68.png", new BMap.Size(29,37));
              mk = new BMap.Marker(point,{icon:myIcon});
                // mk.addEventListener("dragend", showInfo);
                mk.enableDragging();    //可拖拽
                     mk.addEventListener('dragend',function(e){
                 console.log(e)
                  that.gg_coordinate_lng=e.point.lng
                  that.gg_coordinate_lat=e.point.lat
                })
                // getAddress(point);

                map.addOverlay(mk);//把点添加到地图上  
                // map.panTo(point); 

        
       
      },
      // 百度地图API功能
 baidu_trips(){
  var that=this
  function G(id) {
    return document.getElementById(id);
  }

  var map = new BMap.Map("map_canvas");
  var point = new BMap.Point(that.gg_coordinate_lng,that.gg_coordinate_lat);  // 创建点坐标  
  map.centerAndZoom(point, common_centerAndZoom);     
  map.enableScrollWheelZoom();              // 初始化地图，设置中心点坐标和地图级别                   // 初始化地图,设置城市和地图级别。
        var myIcon = new BMap.Icon("../tu-mpz/1-68.png", new BMap.Size(29,37));
        var mk = new BMap.Marker(point,{icon:myIcon});
        map.addOverlay(mk);//把点添加到地图上  
        // mk.enableDragging();    //可拖拽
                //绑定Marker的拖拽事件
        // function showInfo(e){
        //     var gc = new BMap.Geocoder();
        //     gc.getLocation(e.point, function(rs){
        //         var addComp = rs.addressComponents;
        //         var address = addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
        //         console.log("dong")
        //         console.log(rs)
        //         that.gg_coordinate_lng=rs.point.lng
        //         that.gg_coordinate_lat=rs.point.lat
        //      });
        // }

  var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
    {"input" : "suggestId"
    ,"location" : map
  });

  ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
  var str = "";
    var _value = e.fromitem.value;
    var value = "";
    if (e.fromitem.index > -1) {
      value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    }    
    str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
    
    value = "";
    if (e.toitem.index > -1) {
      _value = e.toitem.value;
      value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    }    
    str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    G("searchResultPanel").innerHTML = str;
  });

  var myValue;
  ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
  var _value = e.item.value;
    myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
    
    setPlace();
  });

  function setPlace(){
    map.clearOverlays();    //清除地图上所有覆盖物
    function myFun(){
      var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
      map.centerAndZoom(pp, common_centerAndZoom);
      map.enableScrollWheelZoom();  
      console.log(pp)
       that.sousuo=false
       that.sousuoVal=''
       that.gg_coordinate_lng=pp.lng
       that.gg_coordinate_lat=pp.lat
        var myIcon = new BMap.Icon("../tu-mpz/1-68.png", new BMap.Size(29,37));
        var mk = new BMap.Marker(pp,{icon:myIcon});
                map.addOverlay(mk);//把点添加到地图上  
               mk.enableDragging();    //可拖拽
                    mk.addEventListener('dragend',function(e){
                 console.log(e)
                  that.gg_coordinate_lng=e.point.lng
                  that.gg_coordinate_lat=e.point.lat
                })
                        //绑定Marker的拖拽事件
        // function showInfo(e){
        //     var gc = new BMap.Geocoder();
        //     gc.getLocation(e.point, function(rs){
        //         var addComp = rs.addressComponents;
        //         var address = addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
        //         console.log("dong")
        //         console.log(rs)
        //         that.gg_coordinate_lng=rs.point.lng
        //         that.gg_coordinate_lat=rs.point.lat
        //      });
        // }
    }
    var local = new BMap.LocalSearch(map, { //智能搜索
      onSearchComplete: myFun
    });
    local.search(myValue);
  }
 },
     // 点击搜索按钮调出搜索条
    sousuos(){
         this.sousuo=true
         this.baidu_trips()
    },
		// 完成的按钮
		nexts:function(e){
			var that=this
      // alert(this.gg_coordinate_lat,this.gg_coordinate_lng)
		    this.$store.commit("saveMPC",{"gg_coordinate_lat":this.gg_coordinate_lat,"gg_coordinate_lng":this.gg_coordinate_lng})
			// 最终提交数据
      var groupId=0//0代表个人项目
			$.post(Boss+"group/"+groupId+"/ground",{
		  "objectId":this.$store.state.mpc.objectId,//苗圃埸ID
          "gg_name":this.$store.state.mpc.gg_name,//苗圃埸名称
          "gg_intro":this.$store.state.mpc.gg_intro,//苗圃埸简介
          "gg_contact_number":this.$store.state.mpc.gg_contact_number,//苗圃埸联系人电话
          "gg_contacts":this.$store.state.mpc.gg_contacts,//苗圃埸联系人姓名
          "gg_address":this.$store.state.mpc.gg_address,//苗圃埸详细地址
          "gg_city":this.$store.state.mpc.gg_city,//苗圃埸所在城市
          "gg_province":this.$store.state.mpc.gg_province,//苗圃埸所在省份
          "gg_coordinate_lat":this.$store.state.mpc.gg_coordinate_lat,//苗圃埸坐标纬度
          "gg_coordinate_lng":this.$store.state.mpc.gg_coordinate_lng,//苗圃埸坐标经度
          "sessiontoken":sessiontoken
			},function(data){
				that.$router.push({name:'finish5'})
			})
			
		
	}
    },
    // 
    mounted:function () {
		var that=this
    this.maps()

        
    }
}

