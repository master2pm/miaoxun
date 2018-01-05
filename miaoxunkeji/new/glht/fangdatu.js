


// 放大图和终极放大图的模板
const fangdatu1 = {
    template: `


           <!-- 放大图 -->
<div id="fangda_" class="fangda_" style="z-index: 2000;font-family: 微软雅黑;display:none;width:100%;position:absolute;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.7);">
 <div id="fangda_tu" class="fangda_tu" style="width:747px;height:690px;background:white;position: fixed;top:50%;left:50%;transform: translate(-50%,-50%);">
 </div>
 </div>
 


     `
    
};
const fangdatu2 = {
    template: `        
 <!-- 终极放大图-->
<div class="modal fade" id="welcome" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="z-index: 10000;background: rgba(0,0,0,0.3);">
  <div class="modal-dialog  " role="document" style="width: 100%;height: 100%;margin-top: 0">
    <div class="modal-content " style="font-size: 15px;width: 100%;height: 100%;background:transparent;box-shadow: none;webkit-box-shadow:none;border: none;z-index: 10000;overflow: hidden;">
      <div class="m-body" style="text-align: right;">
       <img src="../tubiao/×-04.png" style="cursor:pointer;width: 45px;position: absolute;top: 3%;right: 5%;margin-top: 2%;z-index: 100" class="final5">
             <img id='final_fd' src="" style="width: 27%;height:auto;position: absolute;top:500px;left:0px;transform: translate(-50%,-50%);"  >
      </div>
      <div class="m-footer" style="margin-top:30px;text-align: center;width:100%; ">
              <div style="width:100%;font-size:24px;color: #fff;margin:0 auto;position: absolute;bottom: 3%;left: 0;" class="final_tb" id='final_tb'>
                <b style="font-weight: normal;margin-right: 5px; "><span id='final_this'>1</span> / <span id='final_total'>3</span></b>
                <img src="../miao/YKMX-final-03.png" class="final1">
                <img src="../miao/YKMX-final-04.png" class="final2">
                <img src="../miao/YKMX-final-05.png" class="final3">
                <img src="../miao/YKMX-final-06.png" class="final4">
            </div>
      </div>
    </div>
  </div>
</div>


     `
    
};


var final_fd=$("#final_fd")
// 对应的js代码
var finalArr=[] //全局变量，用来保存终极放大图中，从放大图传入的图片路径
// 点击切换图片的路径
$(function(){
    $('#fangda_').on('slid.bs.carousel','#mymapa', function () {
        //更换右边放大图的图片路径

        var src=document.querySelector("#mymapa .active>img").src
         console.log(src)
        document.getElementById("eee").src=src

    });
});

// 图片放大
$(document).on("click",".fang",function(){

    $.ajaxSetup({  
    async : false  
});
    console.log(this)
    var h=$(document).height()
    console.log(h)
    $("#fangda_").css("height",h+"px")
    $("#fangda_").css("display","block")
    var people=this.getAttribute("data-people")
    if(people==""){
      people="未知"
    }
    var phone=this.getAttribute("data-phone")
    if(phone==""){
      phone="未知"
    }
    var company=this.getAttribute("data-company")
    //alert(company)
    if(company==""){
      company=this.$store.state.data_grzl.company_name
    }
    var zgMax=this.getAttribute("data-zg-max")
    if(zgMax==""){
      zgMax="未知"
    }
    var zgMin=this.getAttribute("data-zg-min")
    if(zgMin==""){
      zgMin="未知"
    }
    var sum=this.getAttribute("data-sum")
    if(sum==""){
      sum="未知"
    }
    var x=this.getAttribute("data-x")
    if(x==""){
      x="未知"
    }
    var y=this.getAttribute("data-y")
    if(y==""){
      y="未知"
    }
    var idd=this.getAttribute("data-idd")

    var djm=this.getAttribute("data-dj-max")
    if(djm==""){
      djm="未知"
    }
    var djx=this.getAttribute("data-dj-min")
    if(djx==""){
      djx="未知"
    }
    var type=this.getAttribute("data-type")
    if(type==""){
      type="未知"
    }
    var img1=this.getAttribute("data-img1")
    if(img1==""){
      img1="../tubiao/kuang.png"
    }
    var img=this.getAttribute("data-img")
    if(img==""){
      img="../tubiao/kuang.png"
    }
    var img2=this.getAttribute("data-img2")
    if(img2==""){
      img2="../tubiao/kuang.png"
    }
    var img3=this.getAttribute("data-img3")
    if(img3==""){
      img3="../tubiao/kuang.png"
    }
    // var img4='http://7xixv9.com1.z0.glb.clouddn.com/m_1482722947.jpg'
    // var img5='http://7xixv9.com1.z0.glb.clouddn.com/m_1483423118.jpg'
    // var img6='http://7xixv9.com1.z0.glb.clouddn.com/m_1483423163.jpg'
    // var img7='http://7xixv9.com1.z0.glb.clouddn.com/m_1483932236.jpg'
    // var area=this.getAttribute("data-area")
    var name=this.getAttribute("data-name")
    if(name==""){
      name="未知"
    }
    var price=this.getAttribute("data-price")
    if(price==""){
      price="未知"
    }
    var gf_m=this.getAttribute("data-gf-max")
    if(gf_m==""){
      gf_m="未知"
    }
    var gf_x=this.getAttribute("data-gf-min")
    if(gf_x==""){
      gf_x="未知"
    }
    var adress=this.getAttribute("data-adress")
    if(adress==""){
      adress="未知"
    }
    var gfs=this.getAttribute("data-gfs")
     var zgs=this.getAttribute("data-zgs")
      var mjs=this.getAttribute("data-mjs")
    var ihtml=''
    var imgNum=0
 var html_tu=''
      //   if(data.result==undefined){
    //   $.get('http://118.190.9.136:6688/api/v1/mmTree?query={"_id":"'+idd+'"}',function(data){
    //      $.ajaxSetup({  
    //      async : false  
    //     });
    //     console.log(data)
    //     if(data.status=="1"){
    //        var tu=data.result[0].mmPhoto 
    //                for (var f = 0; f < tu.length; f++) {
    //     // console.log(tu[f].mu_photo_original)
    //     html_tu+= '<div class="active item" style="min-width:327px;min-height:436px;">'
    //     +'<img src="'+tu[f].mu_photo_original+'" alt="" class=" map_img" style="max-width:327px;max-height:436px;float:left;"/></div>'
        
    //         ihtml+='<li><img src="'+tu[f].mu_photo_original+'" style="width:100%;height:auto;position:relative;top:50%;transform:translateY(-50%)"></li>'
    //         imgNum++
    //     if(f==0){
    //       img=tu[0].mu_photo_original
    //     }else if(f==1){
    //       img1=tu[1].mu_photo_original
    //     }else if(f==2){
    //       img2=tu[2].mu_photo_original
    //     }else if(f==3){
    //       img3=tu[3].mu_photo_original
    //     }
         
         
         
         
    // }
    //     }


         
    
    //   })
       // $.get('http://118.190.9.136:6688/api/v1/mmTree?query={"_id":"'+idd+'"}',function(data){
       //   $.ajaxSetup({  
       //   async : false  
       //  });console.log(data)
        
       
           var tu=vm.$store.state.mu_photo 
                   for (var f = 0; f < tu.length; f++) {
        // console.log(tu[f].mu_photo_original)
        html_tu+= '<div class="active item" style="min-width:327px;min-height:436px;">'
        +'<img src="'+tu[f].url+'" alt="" class=" map_img" style="max-width:327px;max-height:436px;float:left;"/></div>'
        
            ihtml+='<li><img src="'+tu[f].url+'" style="width:100%;height:auto;position:relative;top:50%;transform:translateY(-50%)"></li>'
            imgNum++
        if(f==0){
          img=tu[0].url
        }else if(f==1){
          img1=tu[1].url
        }else if(f==2){
          img2=tu[2].url
        }else if(f==3){
          img3=tu[3].url
        }
         
         
         
         
    }
        


         
    
      // })


    // for(var n=1;n<=3;n++){
    //     if(eval('img'+n)!=''){
    //         //console.log(eval('img'+n))
    //         //ihtml+='<li><img src="'+eval('img'+n)+'" style="width:100%;height:100%;"></li>'
    //         ihtml+='<li><img src="'+eval('img'+n)+'" style="width:100%;height:auto;position:relative;top:50%;transform:translateY(-50%)"></li>'
    //         imgNum++
    //     }
    // }
    var ulWidth=imgNum*85+'px'
    var show='none'
    // if(imgNum<5){
    //     show='none'
    // }else{
    //     show='block'
    // }
    document.getElementById("fangda_tu").innerHTML=
    // 上部分
          '<div style="display:inline-block;padding:0;border:none;width:327px;height:545px;>'
       // 上部分的左边
        +'<div class="thumbnail" id="wai" height="436px"style="padding:0;border:none;width:327px;margin-bottom:0;background:transparent;position:relative;">'+'<div id="mymapa"  class="carousel slide" data-interval="false">'
        +'<div style="display:inline-block;width:327px;height:436px;"class="zybian carousel-inner">'
+html_tu
        
            // +'<div class="active item" style="min-width:327px;min-height:436px;">'
            // +'<img src="'+img1+'" alt="" class=" map_img" style="max-width:327px;max-height:436px;float:left;"/></div>'
            
            // +'<div class="item" style="min-width:327px;min-height:436px;">'
            // +'<img src="'+img2+'" alt="" class=" map_img" style="max-width:327px;max-height:436px;float:left;"/>'
            // +'</div>'
            // +'<div class="item" style="min-width:327px;min-height:436px;">'
            // +'<img src="'+img3+'" alt="" class=" map_img" style="max-width:327px;max-height:436px;float:left;"/>'
            // +'</div>'
             +'<a style="display:none;margin-left:40px;margin-top:180px;background:url(../image/zuo.png) no-repeat;width:38px;height:71px;z-index:1000;line-height:71px;font-size:30px;" class="carousel-control  center1 left" href="#mymapa" data-slide="prev" ></a>'
             +'<a style="display:none;margin-right:40px;margin-top:180px;background:url(../image/you.png) no-repeat;width:38px;height:71px;z-index:1000;line-height:71px;font-size:30px;" class="carousel-control  center2 right" href="#mymapa" data-slide="next"></a>'
        +'</div>'
       
        
        +'<div id="mask" width="117px" height="156px" style="position:absolute;left:30px;top:0;width:119px;height:157px; background:url(../tubiao/YKMX-final-27.png) no-repeat 0 0;opacity:1;cursor:none;"></div>'
        +'</div>'
        // +'<div id="superMask_all">    '
       
           
        // +'</div>'
        +'<div id="superMask"  width="327" height="436" style="position:absolute;top:0;width:327px;left:0;height:436px;"></div>'
        +'<div style="height:98px;margin-top:10px;position:relative;overflow: hidden;">'
          +'<img id="houtui" src="../tubiao/YKMX-final-60.png" width="16" height="28" style="position:absolute;top:33px;left:10px;cursor:pointer;z-index:10;">'
          +'<img id="qianjin" src="../tubiao/YKMX-final-61.png" width="16" height="28" style="position:absolute;top:33px;right:10px;cursor:pointer;z-index:10;">'
          +'<ul id="fada" style=width:'+ulWidth+';>'+ihtml+'</ul>'
        +'</div>'
        +'</div>'

// 上部分的右边
        +'<div style="width:409px;height:545px;float:right;overflow:hidden;display:inline-block;position:relative;"><img  id="eee" style="float:left;position:absolute;left:0;top:0;" src="'+img+'"></div>'
        
// 下部分
        +'<div id="fangda_xia" style="padding:15px;height:142px;">'
        // 下部分的左边
      +'<div style="color:black;float:left;width:312px;">'
    +'<div style="height:30px;position:relative;"><span id="jrcg" style="display:none;font-size:20px;color:#231F20;position:absolute;top:-17px;right:0;">加入成功</span><h1 style="position:relative;font-weight:normal;float:left;color:#231F20;display: inline-block;font-size:24px;margin:0;">'
    +(name.length>8?name.substring(0,8)+'...':name)+
                              '<b style="position:absolute;top:5px;display:inline-block;width:20px;height:20px;line-height:20px;color:white;background:#35AD4A;text-align:center;margin-left:10px;font-size:15px;">'
    +type.slice(0,1)+'</b></h1>'
    +'<div style="margin-top:5px;float:right;font-size:19px;color:#35AD4A;">'
        +'￥'+price+''
       
    +'</div></div>'
    +'<div style="font-size:15px;line-height:22px;color:#231F20;">冠幅'+(gf_x=='未知'?(gfs==''?'未知':gfs):gf_x+'-'+gf_m)+'CM&nbsp;·&nbsp;米径'+(djm=='未知'?(mjs==''?'未知':mjs):djx+'-'+djm)+'CM&nbsp;·&nbsp;'
    +'<span style="color:#32AB4A;float:right;color:#35AD4A;">'+sum+'株</span></div>'
    +'<div style="font-size:15px;line-height:22px;color:#231F20;line-height:22px;">高度'+(zgMin=='未知'?(zgs==''?'未知':zgs):zgMin+'-'+zgMax)+'CM</div>'
    +'<div style="font-size:12px;color:#808184;line-height:22px;float:left;" class="diandiandian">'+adress+'</div>'
     +'<button style="display:none;font-size:15px;border:none;float:right;border-radius:5px;background:#31A331;width:111px;height:31px;text-align: center;color:white;" '


        +'data-img="'+img+'"'
                        +'data-img1="'+img1+'"' 
                        +'data-img2="'+img2+'"' 
                        +'data-img3="'+img3+'"' 
                        +'data-gf="'+gf_m+'"' 
                        +'data-dj-max="'+djm+'"' 
                        +'data-dj-min="'+djx+'"' 
                        +'data-gf-max="'+gf_m+'"' 
                        +'data-gf-min="'+gf_x+'"' 
                        +'data-zg-min="'+zgMin+'"' 
                        +'data-zg-max="'+zgMax+'"' 
                        +'data-adress="'+adress+'"' 
                        +'data-type="'+type+'"' 
                        +'data-name="'+name+'"' 
                        +'data-people="'+people+'"' 
                        +'data-sum="'+sum+'"' 
                        +'data-shangjia="'+company+'"' 
                        +'data-lxr="'+phone+'"' 
                        +'data-xj="'+djm+'"' 
                        +'data-id="'+idd+'"' 
                         +'idds="'+idd+'"' 
                        +'data-pointx="'+x+'"'
                        +'data-pointy="'+y+'"'
                        +'data-price="'+price
        +'">加入购物车</button>'
+'</div>'

   // 下部分的you边
    +'<div id="fangda_img" style="margin-left:10px;float:left;width:382px;height:111px;border:1px solid #EBEBEA;padding:5px;">'
        +'<img src="'+img+'" width="100" height="100" style="float:left;margin-right:10px;">'
        +'<h5 style="float:left;line-height: 22px;width:260px;margin:0;">'
        +'<p class="com diandiandian" style="cursor:pointer;font-size:19px;line-height:27px;color:#35AD4A;" data-phone="'+phone+'" data-gs="'+company+'" >'+company+'</p>'
        +'<p style="font-size:14px;line-height:21px;color:#49494B;">'+people+':'+phone+'</p>'
        +'<p style="font-size:12px;line-height:22px;color:#808184;">本场茶花山庄拥有茶花基地1500余亩；供应各种规格质优价廉的山茶花，欢迎各地客户来本...</p>'
        +'</div>'
+'</div>'
 fdj()
})
    // 点击小图片展开终极大图
    
    $(document).on('click','#fangda_tu #fada>li>img',function(){
        $("#fangda_").css('display','none')
        $('#welcome').modal('show')
        $("#final_fd").attr('src',this.src)
        var final_fd=document.getElementById('final_fd')
        final_fd.style.left=innerWidth/2+'px'
        final_fd.style.top=innerHeight/2+'px'   
         var len=$("#fada>li>img")
            finalArr=[]//先清空
            for(var n=0;n<len.length;n++){                 
                   finalArr.push($("#fada>li>img")[n].src)//保存小图片路径                
            }
            var num=finalArr.indexOf($("#final_fd").attr('src'))
                         $("#final_this").html(num+1)
            $("#final_total").html(finalArr.length)  
        
    })
    // 终极大图中的图标切换功能
    
        $(document).on('click',"#final_tb .final2",function(){            
           var len=$("#fada>li>img")
            
            var num=finalArr.indexOf($("#final_fd").attr('src'))
           
            if (num<finalArr.length-1) {
                $("#final_fd").attr('src',finalArr[++num])
                $("#final_this").html(num+1)
               
            }else{
                //alert(1)
                 $("#final_fd").attr('src',finalArr[0])
                 $("#final_this").html(1)
            
            }//注释可以限制
            //console.log(num+'and'+finalArr.length)
           
            
        })
       
        $(document).on('click',"#final_tb .final1",function(){
            var len=$("#fada>li>img")
           
            var num=finalArr.indexOf($("#final_fd").attr('src'))
           
           
           // if (0<num<finalArr.length-1) {
                $("#final_fd").attr('src',finalArr[--num])
                  
                 $("#final_this").html(num+1)
            //} 
            if(num=='-1'){//注释可以限制
                $("#final_fd").attr('src',finalArr[finalArr.length-1])
                $("#final_this").html(finalArr.length)
            }
            console.log(num+'and'+finalArr.length)   
        })
     $(document).on('click',"#welcome .final5",function(){
            $('#welcome').modal('hide')
            $("#final_fd").css({'width':'27%','height':'auto'})
            canlisten=false
            $("#fangda_").css('display','block')
     })
     $(document).on('click',"#final_tb .final4",function(){
            var width=parseFloat(getComputedStyle(document.querySelector("#final_fd")).width)
           var sx=width-width*0.06
           var height=parseFloat(getComputedStyle(document.querySelector("#final_fd")).height)
           var sx2=height-height*0.06
           console.log(width+'and'+sx)
           $("#final_fd").css({'width':sx+'px','height':sx2})
     })
     $(document).on('click',"#final_tb .final3",function(){
            var width=parseFloat(getComputedStyle(document.querySelector("#final_fd")).width)
           var sx=width+width*0.06
           var height=parseFloat(getComputedStyle(document.querySelector("#final_fd")).height)
           var sx2=height+height*0.06
           console.log(width+'and'+sx)
           $("#final_fd").css({'width':sx+'px','height':sx2})
     })
     
  //移动小图片切换上方的大图片
    $(document).on('mouseenter','#fangda_tu #fada>li>img',function(){
        
        console.log($('#mymapa .active img'))
        //$(this).css('border','1px solid #FFA500')
        $('#mymapa .active img').attr('src',this.src)
        document.getElementById("eee").src=this.src
        fdj()
    })
// 小图片的切换 后退按钮
    $(document).on('click','#fangda_tu #houtui',function(){
       if($("#fada>li").length==0){
        return
      }
        // 获取每次移动的距离
       var w = parseFloat(getComputedStyle(document.querySelector("#fada>li")).marginRight)
       +parseFloat(getComputedStyle(document.querySelector("#fada>li")).width)
       // 获取当前ul的left值
       var d=parseFloat(getComputedStyle(document.querySelector("#fada")).left)
        // 当前减去此次需要移动到的位置
        var moveS=d-w
        // 限制是否能够点击移动 获取li的数量,显示区域一定要有4张图片，既可移动的图片是 数量-4
        var linum=$('#fada>li').length
        var canMove=-(linum-4)*(w)//可移动的次数*移动距离=可移动距离---》left
        console.log(canMove+'ad'+d)
        if(d>canMove){
            console.log('canMove')
             $("#fada").animate({'left':moveS+'px'},500)
        }
      
    })
// 小图片的切换 前进按钮
    $(document).on('click','#fangda_tu #qianjin',function(){
      if($("#fada>li").length==0){
        return
      }
        // 获取每次移动的距离
       var w = parseFloat(getComputedStyle(document.querySelector("#fada>li")).marginRight)
       +parseFloat(getComputedStyle(document.querySelector("#fada>li")).width)
       // 获取当前ul的left值
       var d=parseFloat(getComputedStyle(document.querySelector("#fada")).left)
        // 当前减去此次需要移动到的位置
        var moveS=d+w
//animate({'right':'0'},1000)
       
         var linum=$('#fada>li').length
        var canMove=0//可移动的次数*移动距离=可移动距离---》left
        console.log(canMove+'ad'+d)//83 0
        if(d<canMove){
            console.log('canMove')
             $("#fada").animate({'left':moveS+'px'},500)
        }
    })


  function fdj()
    {
        var superMask=document.getElementById("wai")
    
        var mask=document.getElementById("mask")
        // 
        var HEIGHT1=$('#superMask').height()//左边容器高
        var HEIGHT2=$(mask).height()//右边容器高
            
        var width1=$('#superMask').width()//左边容器宽
        var width2=$(mask).width()//右边容器宽
        var hbili=HEIGHT1/HEIGHT2//高比率
        var wbili=width1/width2//宽比率
        //获取左边容器中图片宽高，按宽高比率放大右边图片
            //左右两边容器宽高并不一样，所以需要在放大比率中修正左右容器比率
        var xz_width=409/width1  
        var xz_height=545/HEIGHT1
       var zuog=parseInt($("#fangda_tu .item>img").css("height"))
        var zuok=parseInt($("#fangda_tu .item>img").css("width"))
        $("#fangda_tu #eee").css("height",hbili*zuog*xz_width)
        $("#fangda_tu #eee").css("width",wbili*zuok*xz_height)
var youg=parseInt($("#fangda_tu #eee").css("height"))
var youk=parseInt($("#fangda_tu #eee").css("width"))

var h=(HEIGHT1-zuog)/2
var w=(width1-zuok)/2//求左右空白


// var kuanbi=youk/zuok

// var gaobi=youg/zuog
        var MAX1=width1-width2
        var MAX=HEIGHT1-HEIGHT2
        $(document).on("mousemove","#fangda_ #superMask",function(e){
    
        var x=e.offsetX
        var y=e.offsetY
     //
           var TOP=y-HEIGHT2/2
        var LEFT=x-width2/2
 //console.log(LEFT)
        var TOP=(TOP<0?0:TOP>MAX?MAX:TOP)
        var LEFT=(LEFT<0?0:LEFT>MAX1?MAX1:LEFT)
        //console.log(MAX)
      // console.log(LEFT)
 
    //$(this).css({cursor:"url(../image/fdj1.png),auto"})
$(this).css({'cursor':"none"})

        document.getElementById("mask").style.top=TOP+"px"
        document.getElementById("mask").style.left=LEFT+"px"
        document.getElementById("eee").style.top=-hbili*TOP*xz_height+h*hbili*xz_height+"px"
        document.getElementById("eee").style.left=-wbili*LEFT*xz_width+w*xz_width*wbili+"px"
      
        })
       
    }


// 移入移出的时候鼠标抓手的形状
    $(document).on("mouseleave","#fangda_ #fangda_tu",function(e){  
        $("#fangda_").css({cursor:"url(../image/fdj2.png),auto"})
        $("#fangda_").on("mousedown",function(e){ 
             var target= e.target
        if (target.className=="fangda_") {

                document.getElementById("fangda_").style.display="none"
            }
        })
})


 $(document).on("mouseenter","#fangda_ #fangda_tu",function(e){  
        $("#fangda_tu").css("cursor","default")
        
})

// 点击商家跳到商家首页
// $(document).on("click",".com",function(){
//     var kwValue=$(this).attr("data-phone").replace(/\s/ig,'')
//     var kwnc=$(this).attr("data-gs").replace(/\s/ig,'')
//    window.open('../miaochang/miao.html?kwValue='+kwValue+kwnc)
// })
//图片放大里的加入购物车
$(document).on("click","#fangda_ button",function(){  
       
        //商品图片路径
        var data_img=this.getAttribute("data-img")
        var data_img1=this.getAttribute("data-img1")
        var data_img2=this.getAttribute("data-img2")
        var data_img3=this.getAttribute("data-img3")
        //总颗数
        var data_sum=this.getAttribute("data-sum")
        //商品图片路径
     
        //商品图片路径
        var data_gf_max=this.getAttribute("data-gf-max")
        //商品图片路径
        var data_gf_min=this.getAttribute("data-gf-min")
        var data_people=this.getAttribute("data-people")

        //id
        var idd=this.getAttribute("data-id")
         var idds=this.getAttribute("data-id")
        // 将此idd传入buyed函数中，设置缓存
          //buyed(idd,this)
        var data_zg_max=this.getAttribute("data-zg-max")
        var data_zg_min=this.getAttribute("data-zg-min")
        var type=this.getAttribute("data-type")
        var adress=this.getAttribute("data-adress")
        //商品点击次数

        //商品名
        // var pname=$(this).parent().prev().prev().text()
         var pname=this.getAttribute("data-name")
        //冠幅
        var gf=this.getAttribute("data-gf")
        //胸径
        var xj=this.getAttribute("data-xj")
        //高度  无

        //地径
        var data_dj_max=this.getAttribute("data-dj-max")
        var data_dj_min=this.getAttribute("data-dj-min")
        //商家
        var shangjia=this.getAttribute("data-shangjia")
        //联系人
        var lxr=this.getAttribute("data-lxr")
        //地址  唔

        //单价
        var price=this.getAttribute("data-price")
        //数量
        var num=1

        //y
        var y=this.getAttribute("data-pointy")
        //x
        var x=this.getAttribute("data-pointx")
        

        // 点击加入购物车的时候请求插入数据库的php，如果存在则更新数量加1，否则插入新的商品行
   $.post('../detail/sql/shoppinglist_add.php', {user_id:user_id,user_phone:user_phone,
    adress:adress,data_dj_max:data_dj_max,data_dj_min:data_dj_min,data_gf_max:data_gf_max,data_gf_min:data_gf_min,
    data_img:data_img,data_img1:data_img1,data_img2:data_img2,data_img3:data_img3,data_people:data_people,
    data_sum:data_sum,data_zg_max:data_zg_max,data_zg_min:data_zg_min,gf:gf,idd:idd,idds:idds,lxr:lxr,num:num,
    pname:pname,price:price,shangjia:shangjia,type:type,x:x,xj:xj,y:y},
    function(obj){
                // document.getElementById("jia").style.display="block"
                // // 发起查询请求 查出shoppinglist数据库的总条数赋值给jia
                // $.get('../detail/sql/shoppinglist_select.php',{user_id:user_id},function(obj){
                //     // var a=obj.replace(/"/g,"")
                //     var a=JSON.parse(obj)
                //     console.log(a.length)
                //      document.getElementById("jia").innerHTML=a.length
                //       document.getElementById("jia2").innerHTML=a.length
                // })
    });
                  $("#jrcg").fadeIn(1)
                  $("#jrcg").fadeOut(500)
                  // 如果点击的放大图是在初选的页面的时候就查找表格对应的id，让输入框的数字加1
                  var t=$("#tableA .shangpin_tr")
                  for(var u=0;u<t.length;u++){
                    var d=$(t[u]).attr("data-d")
                    if(d==idd){
                       var val=parseInt($(t[u]).find(".number").val())+1
                       $(t[u]).find(".number").val(val)
                    }
                  }

})
// 终极大图的可移动代码
$(document).ready(function(){
    //alert(1)
    init()
})
var drag = 0
var move = 0
var dragObj = 0
final_fd.onmouseout=function(){
    drag=0
}
final_fd.onmouseover=function(){
    drag=1
    dragObj=final_fd
}
function init() {
window.document.onmousemove = mouseMove
window.document.onmousedown = mouseDown
window.document.onmouseup = mouseUp
window.document.ondragstart = mouseStop
}
function mouseDown() {
if (drag) {
clickleft = window.event.x - parseInt(dragObj.style.left)
clicktop = window.event.y - parseInt(dragObj.style.top)

//dragObj.style.zIndex += 1
move = 1
}
}
function mouseStop() {
window.event.returnValue = false
}
function mouseMove() {
if (move) {
    console.log(window.event.x)
dragObj.style.left = window.event.x - clickleft
dragObj.style.top = window.event.y - clicktop
}
}
function mouseUp() {
move = 0
}
// 鼠标滚轮监听

$(document).on('#welcome mousewheel DOMMouseScroll', function (e) {
  if($("#welcome").css("display")=="block"){
          e.preventDefault();
                 //鼠标滚轮的滚动方向 >0 up;<0 down
                 
                 var _delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
                 if (_delta > 0) {
                   var width=parseFloat(getComputedStyle(document.querySelector("#final_fd")).width)
                   var sx=width+width*0.01
                   var height=parseFloat(getComputedStyle(document.querySelector("#final_fd")).height)
                   var sx2=height+height*0.01
                   $("#final_fd").css({'width':sx+'px','height':sx2})
                  
                 } else {
                   var width=parseFloat(getComputedStyle(document.querySelector("#final_fd")).width)
                   var sx=width-width*0.01
                   var height=parseFloat(getComputedStyle(document.querySelector("#final_fd")).height)
                   var sx2=height-height*0.01
                    $("#final_fd").css({'width':sx+'px','height':sx2})
                  
                 }

  }
      
           //
           
        }); 


   $(document).on('mouseenter',"#final_tb .final1",function(){
           $(this).attr("src","../miao/YKMX-final-033.png") 
        })
   $(document).on('mouseenter',"#final_tb .final2",function(){
           $(this).attr("src","../miao/YKMX-final-044.png") 
        })
    $(document).on('mouseenter',"#final_tb .final3",function(){
           $(this).attr("src","../miao/YKMX-final-055.png") 
        })
     $(document).on('mouseenter',"#final_tb .final4",function(){
           $(this).attr("src","../miao/YKMX-final-066.png") 
        })

   $(document).on('mouseleave',"#final_tb .final1",function(){
           $(this).attr("src","../miao/YKMX-final-03.png") 
        })
   $(document).on('mouseleave',"#final_tb .final2",function(){
           $(this).attr("src","../miao/YKMX-final-04.png") 
        })
    $(document).on('mouseleave',"#final_tb .final3",function(){
           $(this).attr("src","../miao/YKMX-final-05.png") 
        })
     $(document).on('mouseleave',"#final_tb .final4",function(){
           $(this).attr("src","../miao/YKMX-final-06.png") 
        })
