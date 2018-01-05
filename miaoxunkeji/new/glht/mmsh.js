const shenhe = {
    template: `
            <div >
               <ul class="overflow bai" style="position: fixed;z-index: 2000;height:45px;padding:20px 25px;padding-right:0;margin-left: 185px;width:790px;">
                   <li class="lf f16 center" style="border-top:4px solid #E36527;margin-right:20px;position:relative;height:45px;line-height:45px;">
                        <router-link to="/mmsh/fbmm/1">全部发布苗木</router-link>
                     
                   </li>
                   <li class="lf f16 center" style="margin-right:20px;position:relative;height:45px;line-height:45px;">
                        审核通过
                   </li>
                   <li class="lf f16 center" style="margin-right:20px;position:relative;height:45px;line-height:45px;">
                        待审核
                   </li>
                   <li class="lf f16 center" style="margin-right:20px;position:relative;height:45px;line-height:45px;">
                        审核不通过
                   </li>
           <li class="rf f16 center" style="position:relative;height:45px;line-height:45px;">
                        <span @click="sousuo($event)"  class="rf f15 green border cursor" style="width:50px;height:33px;line-height:35px">搜索</span>
            <input @keyup.enter="enters($event)" type="text" placeHolder="请输入苗木名称/发布者进行搜索" class="rf f14 border" style="width:320px;line-height:35px;height:35px;padding:10px;border-right:0;"> 
                
           </li>

               </ul>
        
            <router-view></router-view>
            <pages></pages>
          </div>
  `,
  data:function(){
    return {
     // searchkey:this.$store.state.searchkey v-model="searchkey"
    }
  },
    components: {
        "pages": pages
    },
    methods: {
    // 调用的方法
fangfa:function(e){
  var that=this

      $.get("http://ym-boss.leanapp.cn/boss/tree",{
                        //"sessiontoken":that.$store.state.sessiontoken,
                        "limit":that.$store.state.limit,
                        "page":that.$store.state.pages_fbmm,
            "searchkey":that.$store.state.searchkey
                        // "status":'-1',包括所有状态
                      },function(data){
                                console.log(data)
                                // 保存全部的总数pages_qbmm22  第几页到第几页
                                that.$store.state.pages_fbmm2=data.results.count
                                //alert(that.$store.state.pages_fbmm2)
                                if(data.status==0){
                                       return
                                }
                                if(data.results.data.length>0){
                                  that.$store.state.pages_fbmm0=(that.$store.state.pages_fbmm-1)*20+1
                                  that.$store.state.pages_fbmm1=(that.$store.state.pages_fbmm-1)*20+data.results.data.length
                                }
                                that.$store.state.data_shenhe_fbmm=data.results.data
                                console.log("pages_fbmm")
                      })
},
        //点击搜索按钮  
        sousuo: function(e) {
      var that=this
      that.$store.state.pages_fbmm=1
      that.$store.state.searchkey=$(e.currentTarget).next("input").val()
          this.fangfa()
        },
    enters:function(e){
      var that=this
      that.$store.state.pages_fbmm=1
      that.$store.state.searchkey=$(e.currentTarget).val()
         this.fangfa()
    }
    },
    mounted: function() {

    }
}









const fbmm = {
    template: `
<div  class=" c49494B bai rf" style="position:relative;width:793px;padding:29px 25px;padding-top:85px;">

       <ul  class="border bar you">

            
          
              <li v-for="(item,index) in data_shenhe_fbmm" style="height:216px;position:relative;padding:20px;" :class="item.objectId"  >
                <div style="height:236px;" class="bottom">
                 <img  src="../tubiao/shanchus.png" style="width:34px;right:-18px;display:none;" class="czjz cha">
                    <div  style="width:58%;height:212px;" class=" overflow lf cursor">
                       
                       <div style="width:155px;height:200px;border:1px dashed #dddddd;padding:5px;position:relative;" class="overflow lf">
                            <img  :src="(item.mu_photo[0]!=undefined?item.mu_photo[0].url+'?imageView2/1/w/155/h/200':'../tubiao/kuang.png')" class="jz">
                       </div>
                       <div style="margin-left:30px;width:53%;" class="lf">
                           <p class="f30 " style="margin-bottom:10px;">
                               {{item.mu_name.length>5?item.mu_name.substring(0,5):item.mu_name}}
                                <span v-if="item.mu_name.length>5">...</span>
                                 
                                 <span class="f20 white lv" style="padding:2px 2px;">{{item.mu_type!=undefined?item.mu_type.substring(0,1):''}}</span>
                           </p>
                           <p class="f15  diandiandian">米径{{item.mu_j_min}}<span v-if="(item.mu_j_min!=item.mu_j_max)">-{{item.mu_j_max}}</span>CM · 冠幅{{item.mu_gf_min}}<span v-if="(item.mu_gf_min!=item.mu_gf_max)">-{{item.mu_gf_max}}</span>CM · </p>
                           <p class="f15  diandiandian" style="line-height:200%;">高度{{item.mu_zg_min}}<span v-if="(item.mu_zg_min!=item.mu_zg_max)">-{{item.mu_zg_max}}</span>CM </p>
                           <p class="f15 diandiandian" style="color:#676768;">商    家：{{item.mu_company_name!=''?item.mu_company_name:item.user.company_name}}场</p>
                           <p class="f15 diandiandian" style="color:#676768;line-height:190%;">联 系 人：{{item.user.mobilePhoneNumber}}</p>
                           <p class="f15 diandiandian" style="color:#676768;">{{item.mu_address!=''?item.mu_address:item.user.address}}</p>
                           <p class="f15 beizhu diandiandian" style="color:#676768;margin-top:20px;">备注：{{item.review_remark}}</p>
                       </div>      
                      
                    </div>

                  


                    <div style="width:285px;height:130px;padding:20px;padding-top:20px;width:35%;" class="rf right ">
                        <p class="f15" style="margin-bottom: 20px;">发布者：{{item.user.mobilePhoneNumber}}</p>
                        <p class="f15">数量：{{item.mu_stock}}株</p>
                        <p class="f15" style="color:#676867;line-height: 200%;">满{{item.mu_discount_count}}株以上优惠{{item.mu_discount*100!=''?parseInt(item.mu_discount*100):''}}%</p>
                        <p class="f20 green bold" style="">￥{{item.mu_price}}</p>
                        <p class="f15 " style="margin-top:25px;">
                              <span :class="{hong:item.status=='-1',cheng:item.status=='1',green:item.status=='2'}" class="f15 ">{{(item.status=='1'?'待审核':(item.status=='2'?'审核通过':(item.status=='-1'?'审核不通过':'')))}}</span>
                              <span v-if="item.status=='1'" @click="pass($event)" class="f15  rad cursor lv white center" style="display:inline-block;width:93px;height:32px;line-height:32px;margin:0 5px;"> 审核通过</span>
                              <span v-if="item.status=='1'" @click="nopass($event)" class="f15  rad cursor hongs white center" style="display:inline-block;width:93px;height:32px;line-height:32px;"> 审核不通过</span>
                        </p>
                                            <!-- 确定删除此苗木？ -->
<div class="wai_kuang kuang"  style="">
 <div  class="nei_kuang bai rad center" style="width:520px;height:321px;">
        <p class="f23 center bottom" style="color:#666666;height:60px;line-height:60px;"><span class="bz">审核通过</span>  备注</p>
        <textArea class="f17 none" style="margin-top:20px;margin-bottom:25px;resize:none;padding:10px;width:479px;height:131px;background:#F6F6F6;" placeHolder="请填写备注内容...">

        </textArea>
        <span @click="qd($event,item.objectId)" style="margin-right:40px;display:inline-block;width:218px;height:50px;line-height:50px;" class="lv white center rad cursor">确定</span>
        <span @click="qx($event)"  style="display:inline-block;width:218px;height:50px;line-height:50px;background:#DADDDC;" class="c49494B center rad cursor">取消</span>
 </div>
 </div>
                    </div>
                    </div>


             </li>  
       </ul>

        <div style='display:none'>    {{watch}} </div>
  </div>


     `,
    data: function() {
        return {
            index: 0,
            data_shenhe_fbmm: this.$store.state.data_shenhe_fbmm,
            // reject_reason:'',//备注的理由
            review_flag: '' //审核是否通过  审核结果， 1=通过，0=不通过


        }
    },

    computed: {
        watch: function() {
            this.data_shenhe_fbmm = this.$store.state.data_shenhe_fbmm;
        }
    },
    methods: {
        // 调用调整图片大小的函数
        adjust: function(e) {
            vm.adjust(e)
        },
        pass: function(e) {
            // 审核通过按钮
            $(e.currentTarget).parent().next("div").find("textArea").val("")
            $(e.currentTarget).parent().next("div").css("display", "block")
            $(e.currentTarget).parent().next("div").find(".bz").html($(e.currentTarget).html())
            this.review_flag = 1
        },
        nopass: function(e) {
            // 审核通过按钮
            $(e.currentTarget).parent().next("div").find("textArea").val("")
            this.review_flag = 0
            $(e.currentTarget).parent().next("div").css("display", "block")
            $(e.currentTarget).parent().next("div").find(".bz").html($(e.currentTarget).html())
        },
        qd: function(e, objectId) {
            var that = this
            // 点击确定的时候请求成功让备注框消失
            // console.log(this.reject_reason)
            //alert(objectId)
            $(e.currentTarget).parent().parent().css("display", "none")
            $.post("http://ym-boss.leanapp.cn/boss/tree/review", {
                "review_flag": this.review_flag,
                "objectId": objectId,
                "review_remark": $(e.currentTarget).prev().val()
            }, function(data) {
                if (data.status == 1) {
                    // 重新挂数据
                    that.shenhes()
                    //让备注框消失
                    $(e.currentTarget).parent().parent().css("display", "none")
                    $(e.currentTarget).prev().val("")
                }

            })
        },
        qx: function(e) {
            // 点击取消让备注框消失
            $(e.currentTarget).parent().parent().css("display", "none")
            $(e.currentTarget).prev().val("")
        },
        // 审核的更新请求数据
        shenhes: function() {
            var that = this
            $.get("http://ym-boss.leanapp.cn/boss/tree", {
                //"sessiontoken":that.$store.state.sessiontoken,
                "limit": that.$store.state.limit,
                "page": that.$store.state.pages_fbmm,
        "searchkey":that.$store.state.searchkey
                // "status":'-1',
            }, function(data) {
                // 保存全部的总数pages_qbmm22  第几页到第几页
                //that.$store.state.pages_fbmm2=data.results.count
                //console.log(data)
                that.$store.state.data_shenhe_fbmm = data.results.data
                that.data_shenhe_fbmm = data.results.data
                // 保存全部的总数pages_qbmm22  第几页到第几页
                console.log(data)
                that.$store.state.pages_fbmm2 = data.results.count
                if (data.status!=1) {
                  return
                }
                if (data.results.data.length > 0) {
                    that.$store.state.pages_fbmm0 = (that.$store.state.pages_fbmm - 1) * 20 + 1
                    that.$store.state.pages_fbmm1 = (that.$store.state.pages_fbmm - 1) * 20 + data.results.data.length
                }


            })
        }
    },
    // 页面刷新的时候判断是哪个是浏览的最后记录  更改index 用于控制左边li的背景颜色 
    mounted: function() {
        //alert(2)
        var that = this
        // 拿地址栏的参数页数重新赋值给store的页数
        that.$store.state.pages_fbmm = parseInt(this.$route.path.split('/')[4])
        console.log(this.$route.path.split('/'))
        this.shenhes()
        // 左边标题的长度
        // setTimeout(function() {
        //     $("#zuobian").css("height", $(".you").height() + 180 + "px")

        // }, 1)

    }
}