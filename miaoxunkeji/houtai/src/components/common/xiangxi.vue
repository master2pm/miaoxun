<template>
  <div class="">
    <div v-if="kg!=''" style=""style="position:fixed;top:0;width:100%;height:100%;z-index:5;">
      <div style="width:856px;margin: 30px auto 0px;z-index:9;">
        <div style="position:relative;z-index:5;">
          <img :src="srcc+'/static/xiangxi/1-01.png'"/>
          <div style="position:absolute;top:0;color:white;width:100%;padding-top: 48px;">
            <span style="font-size: 26px;display: inline-block;padding-left: 40px;letter-spacing:2px;">{{type=="user"?"用户实名认证":type=="qy"?"企业认证":kg.mu_ground.gg_name}}</span>
            <img v-if="type=='mm'" style="margin-left: 10px;position: relative;top: -8px;":src="kg.mu_ground.group.type=='private'?srcc+'/static/xiangxi/1-03.png':kg.mu_ground.group.type=='group'?srcc+'/static/xiangxi/1-05.png':srcc+'/static/xiangxi/1-04.png'"><br v-if="type=='mm'">
            <span v-if="type=='mm'" style="font-size: 26px;padding-left: 40px;">苗圃场</span>
            <span style="font-size:18px;float:right;padding-right:34px;padding-top:10px;">状态：{{type=='user'?(kg.status==0?"未认证":kg.status==1?"待审核":kg.status==2?"认证通过":"认证不通过"):type=='qy'
              ?(kg.g_status==0?"待审核":kg.g_status==1?"":"认证不通过"):(kg.status=="1"?"待审核":kg.status=="2"?"审核通过":kg.status=="0"?"未发布":"审核不通过")}}</span>
          </div>
        </div>

        <div v-if="type=='mm'" style="background-color: rgb(242, 242, 242);margin-left: 1px;margin-right: -1px;padding-top: 15px;overflow-x: hidden;height:643px;" :class="{ofys:gdt==1,ofyh:gdt==0}" @mouseleave="gdt=0" @mouseenter="gdt=1">
          <div style="background-color:white;height:327px;position:relative;">
            <div style="padding-top:40px;">
              <img v-for="(item,index) in kg.mu_photo" v-if="index<5":src="item.url" class="xxtu" @click="optu(item.url,index)">
            </div>
          </div>
          <div style="background-color:white;margin-top:15px;padding:40px;width: 775px;">
            <div style="border-bottom: 1px solid rgb(228,228,227);padding-bottom: 30px;margin-bottom: 20px;">
              <span style="font-size:26px;color:rgb(74,73,75);letter-spacing:2px;">{{kg.mu_name}}</span>
              <span style="background-color:rgb(53,173,74);color:white;font-size:20px;display:inline-block;padding:1px 2px;">{{kg.mu_type.substring(0,1)}}</span>
              <span style="display:inline-block;border-left:2px solid rgb(242,242,242);font-size:18px;padding-left:40px;margin-left:40px;letter-spacing:2px;">价格:</span>
              <span style="font-size:18px;color:rgb(96,179,70);">{{kg.mu_price!='-1'?"￥"+kg.mu_price+"/"+kg.unit:'面议'}}</span>
              <span style="font-size:18px;color:rgb(153,152,153);float:right;">{{kg.createdAt}}</span>
            </div>
            <div style="position:relative;">
              <div style="position:relative;">
                <div class="zcss" style="">
                  <div>
                    <p>种植情况</p>
                    <span style="padding-right: 38px;">{{kg.mu_type}}</span>
                  </div>
                </div>
                <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;bottom: 8px;"></span>
                <div class="zcss">
                  <div style="padding-left:40px;">
                    <p>{{kg.mu_type=="地苗"||kg.mu_type=="假植苗"?(kg.mu_mj_min!=''&&kg.mu_mj_max!=''?"米径":"地径"):kg.mu_type=="袋苗"?"几斤袋":"草坪长"}}</p>
                    <span>{{kg.mu_type=="地苗"||kg.mu_type=="假植苗"?(kg.mu_mj_min!=''&&kg.mu_mj_max!=''?kg.mu_mj_min+"cm-"+kg.mu_mj_max+"cm":kg.mu_dj_min+"cm-"+kg.mu_dj_max+"cm"):kg.mu_type=="袋苗"?kg.mu_package_weight+"斤袋":kg.lawn_length+"cm"}}</span>
                  </div>
                </div>
              </div>
              <div style="position:relative;margin-top:20px;">
                <div class="zcss" style="">
                  <div>
                    <p>{{kg.mu_type!="草坪"?"自然高":"草坪宽"}}</p>
                    <span style="padding-right: 38px;">{{kg.mu_type!="草坪"?(kg.mu_zg_min+"cm-"+kg.mu_zg_max+"cm"):(kg.lawn_width+"cm")}}</span>
                  </div>
                </div>
                <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;bottom: 8px;"></span>
                <div class="zcss">
                  <div style="padding-left:40px;">
                    <p>{{kg.mu_type=="地苗"||kg.mu_type=="假植苗"?"肉高":kg.mu_type=="袋苗"?"冠幅":"密度"}}</p>
                    <span>{{kg.mu_type=="地苗"||kg.mu_type=="假植苗"?(kg.mu_rg_min+"cm-"+kg.mu_rg_max+"cm"):kg.mu_type=="袋苗"?(kg.mu_gf_min+"cm-"+kg.mu_gf_max+"cm"):kg.lawn_density+"%"}}</span>
                  </div>
                </div>
              </div>
              <div style="position:relative;margin-top:20px;" v-if="kg.mu_type!='袋苗'">
                <div class="zcss" style="">
                  <div>
                    <p>{{kg.mu_type=="地苗"||kg.mu_type=="假植苗"?"主分支高":"每捆数量"}}</p>
                    <span style="padding-right: 38px;">{{kg.mu_type=="地苗"||kg.mu_type=="假植苗"?(kg.mu_zfjg_min+"cm-"+kg.mu_zfjg_max+"cm"):(kg.lawn_amount+"片")}}</span>
                  </div>
                </div>
                <span v-if="kg.mu_type=='地苗'" style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;bottom: 8px;"></span>
                <div class="zcss" v-if="kg.mu_type!='袋苗'&&kg.mu_type!='草坪'">
                  <div style="padding-left:40px;">
                    <p>冠幅</p>
                    <span>{{kg.mu_gf_min+"cm-"+kg.mu_gf_max+"cm"}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color:white;margin-top:15px;padding:40px;width: 775px;height:15%;">
            <div style="position:relative;margin-top:20px;border-bottom: 1.5px dashed rgb(228,228,227);height:100%;">
              <div class="zcss" style="border:none;height:100%;">
                <div>
                  <p>苗圃场联系人</p>
                  <span style="padding-right: 38px;position:absolute;right:0;bottom:0;">{{kg.user.nickname}}</span>
                </div>
              </div>
              <span style="border: 1px solid rgb(242, 242, 242);height: 100%;display: inline-block;position: absolute;bottom: 8px;"></span>
              <div class="zcss" style="border:none;height:100%;">
                <div style="padding-left:40px;">
                  <p>苗圃地址</p>
                  <span style="font-size: 18px;width: 350px;text-align: right;position:absolute;bottom:0;right:0;">{{kg.mu_ground.gg_address.province+kg.mu_ground.gg_address.city+kg.mu_ground.gg_address.detail_address.replace(kg.mu_ground.gg_address.province,"").replace(kg.mu_ground.gg_address.city,"")}}</span>
                </div>
              </div>
            </div>
          </div>
          <div style="background-color: white;padding-top: 42px;margin-top: 13px;position: relative; ">
            <div style="margin-left:36px;width:770px;display:inline-block;border-bottom: 1.5px dashed rgb(228,228,227);margin-bottom:40px;">
              <div style="position:relative;">
                <span style="border-left: 3px solid rgb(191, 64, 64);height: 22px;display: inline-block;position: absolute;"></span>
                <p style="color: rgb(153, 152, 153);padding-left: 6px;font-size: 18px;margin-bottom: 25px;border-bottom:1.5px dashed rgb(228, 228, 227);padding-bottom:11px;">审核历史</p>
                <p style="padding-right: 38px;font-size:18px;" v-for="(item,index) in shjl"><span style="color:rgb(153,152,153);">{{item.createdAt}}</span><span style="margin-left:26px;" :class="{shr:item.flag==-1,shg:item.flag!=-1}">{{item.text}}</span></p>
                <p v-if="shjl.length==0" style="padding-right: 38px;font-size:18px;">{{"暂无"}}</p>
              </div>
            </div>
          </div>

          <div style="background-color: white;padding-top: 42px;margin-top: 13px;position: relative; ">
            <div style="margin-left:36px;width:770px;display:inline-block;border-bottom: 1.5px dashed rgb(228,228,227);margin-bottom:40px;">
              <div style="position:relative;">
                <span style="border-left: 3px solid rgb(191, 64, 64);height: 22px;display: inline-block;position: absolute;"></span>
                <p style="color: rgb(153, 152, 153);padding-left: 6px;font-size: 18px;margin-bottom: 25px;border-bottom:1.5px dashed rgb(228, 228, 227);padding-bottom:11px;">备注</p>
                <textarea rows="3" cols="20" v-model="beizhu" placeholder="您需要为本次认证添加什么备注吗~"style="margin: 0px; width: 765px; height: 67px;resize:none;border:none"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div v-if="type=='mm'" style="background-color:white;height:90px;border-top:5px solid rgb(242,242,242);margin-left: 1px;margin-right: -1px;">
          <span style="color: rgb(153, 152, 153);font-size: 20px;display: inline-block;margin-left: 35px;margin-top: 33px;">请选择</span>
          <span style="color:white;background-color:rgb(201,104,50);" class="tbutton" @click="tijiao(0)">不通过</span>
          <span style="color:white;background-color:rgb(96,179,70);" class="tbutton" @click="tijiao(1)">通过</span>
        </div>


        <div v-if="type!='mm'" style="margin-left: 1px; margin-right: -1px;background-color:rgb(242,242,242);height:660px;position:relative;" :class="{ofys:gdt==1,ofyh:gdt==0}" @mouseleave="gdt=0" @mouseenter="gdt=1">
          <div style="background-color: white;padding-top: 42px;height: 128px;margin-top: 13px;position: relative; ">
            <div class="zcss" style="margin-left:36px;">
              <div>
                <p>{{type=="user"?"注册手机号":"申请者（手机号码）"}}</p>
                <span style="padding-right: 38px;">{{type=="user"?kg.mobilePhoneNumber.substring(0,3)+'-'+kg.mobilePhoneNumber.substring(3,7)+'-'+kg.mobilePhoneNumber.substring(7):kg.contact_number.substring(0,3)+'-'+kg.contact_number.substring(3,7)+'-'+kg.contact_number.substring(7)}}</span>
              </div>
            </div>
            <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;top: 28px;"></span>
            <div class="zcss">
              <div style="padding-left:40px;">
                <p>注册时间</p>
                <span>{{kg.createdAt}}</span>
              </div>
            </div>
          </div>
          <div v-if="type=='user'" style="background-color: white;padding-top: 42px;height: 311px;margin-top: 13px;position: relative; ">
            <div class="zcss" style="margin-left:36px;">
              <div>
                <p>用户名称</p>
                <span style="padding-right: 38px;">{{kg.nickname}}</span>
              </div>
            </div>
            <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;top: 28px;"></span>
            <div class="zcss">
              <div style="padding-left:40px;">
                <p>用户头像</p>
                <img :src="kg.avatar.url" class="timg" @click="optu(kg.avatar.url)"/>
              </div>
            </div>
            <div class="zcss" style="margin-left:36px;margin-top:20px;">
              <div>
                <p>真实姓名</p>
                <input type="text" value="" placeholder="请输入名字" v-model="realname" style="padding-right: 38px;border: none;font-size: 18px;float: right;text-align: right;padding-right:10px;">
              </div>
            </div>
            <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;top: 125px;"></span>
            <div class="zcss">
              <div style="padding-left:40px;">
                <p>身份证号</p>
                <input type="text" value="" placeholder="请输入身份证" v-model="id_number" style="border: none;font-size: 18px;float: right;text-align: right;padding-right:10px;">
              </div>
            </div>
            <div class="zcss" style="margin-left:36px;margin-top:20px;">
              <div>
                <p>身份证正面照片</p>
                <img :src="kg.identity.front" class="timg" @click="optu(kg.identity.front)" />
              </div>
            </div>
            <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;top: 220px;"></span>
            <div class="zcss">
              <div style="padding-left:40px;">
                <p>手持身份证正面照片</p>
                <img :src="kg.identity.handin" class="timg" @click="optu(kg.identity.handin)"/>
              </div>
            </div>
          </div>

          <div v-if="type=='qy'" style="background-color: white;padding-top: 42px;height: 290px;margin-top: 13px;position: relative; ">
            <div style="border-bottom:1px solid rgb(242, 242, 242);border-bottom: 1px solid rgb(242, 242, 242);margin: 0 48px 20px 37px;padding-bottom: 20px;">
              <span style="display:inline-block;font-size:26px;color:rgb(74,73,75);">{{kg.name}}</span><span style="font-size:18px;color:rgb(153,152,153);">/企业全称</span>
            </div>
            <div class="zcss" style="margin-left:36px;">
              <div>
                <p>企业联系人</p>
                <span style="padding-right: 38px;">{{kg.contacts}}</span>
              </div>
            </div>
            <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;top: 105px;"></span>
            <div class="zcss">
              <div style="padding-left:40px;">
                <p>提交认证时间</p>
                <span>{{kg.reviewAt}}</span>
              </div>
            </div>
            <div class="zcss" style="margin-left:36px;margin-top:20px;">
              <div>
                <p>企业联系电话</p>
                <span style="padding-right: 38px;">{{kg.contact_number.substring(0,3)+"-"+kg.contact_number.substring(3,7)+"-"+kg.contact_number.substring(7)}}</span>
              </div>
            </div>
            <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;top: 205px;"></span>
            <div class="zcss">
              <div style="padding-left:40px;">
                <p>企业营业执照正面照片</p>
                <!-- <img :src="" class="timg" @click="optu(kg.identity.front)" /> -->
              </div>
            </div>
          </div>

          <div v-if="type=='qy'" style="background-color: white;padding-top: 42px;height: 100px;margin-top: 13px;position: relative; ">

            <div class="zcss" style="margin-left:36px;">
              <div>
                <p>法定代表人名称</p>
                <span style="padding-right: 38px;">{{kg.contacts}}</span>
              </div>
            </div>
            <span style="border: 1px solid rgb(242, 242, 242);height: 79px;display: inline-block;position: absolute;top: 32px;"></span>
            <div class="zcss">
              <div style="padding-left:40px;">
                <p>法定代表人身份证正面照片</p>
                <!-- <img :src=""> -->
              </div>
            </div>
          </div>
          <!-- 团 用户 -->
          <div style="background-color: white;padding-top: 42px;margin-top: 13px;position: relative; ">
            <div style="margin-left:36px;width:770px;display:inline-block;border-bottom: 1.5px dashed rgb(228,228,227);margin-bottom:40px;">
              <div style="position:relative;">
                <span style="border-left: 3px solid rgb(191, 64, 64);height: 22px;display: inline-block;position: absolute;"></span>
                <p style="color: rgb(153, 152, 153);padding-left: 6px;font-size: 18px;margin-bottom: 25px;border-bottom:1.5px dashed rgb(228, 228, 227);padding-bottom:11px;">审核历史</p>
                <p style="padding-right: 38px;font-size:18px;" v-for="(item,index) in shjl"><span style="color:rgb(153,152,153);">{{item.createdAt}}</span><span style="margin-left:26px;" :class="{shr:item.flag==-1,shg:item.flag!=-1}">{{item.text}}</span></p>
                <p v-if="shjl.length==0" style="padding-right: 38px;font-size:18px;">{{"暂无"}}</p>
              </div>
            </div>
          </div>

          <div style="background-color: white;padding-top: 42px;margin-top: 13px;position: relative; ">
            <div style="margin-left:36px;width:770px;display:inline-block;border-bottom: 1.5px dashed rgb(228,228,227);margin-bottom:40px;">
              <div style="position:relative;">
                <span style="border-left: 3px solid rgb(191, 64, 64);height: 22px;display: inline-block;position: absolute;"></span>
                <p style="color: rgb(153, 152, 153);padding-left: 6px;font-size: 18px;margin-bottom: 25px;border-bottom:1.5px dashed rgb(228, 228, 227);padding-bottom:11px;">备注</p>
                <textarea rows="3" cols="20" v-model="beizhu" placeholder="您需要为本次认证添加什么备注吗~"style="margin: 0px; width: 765px; height: 67px;resize:none;border:none"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div style="" class="fangdat">
          <div style="background-color: black;position: absolute;top: 0px;height: 100%;width: 100%;z-index:-1;opacity:0.6;"></div>
          <img :src="fangimg" id="fangdatu" style="width: 50%;margin: 45px auto 0;display: block;z-index:5;height:560px;width:auto;max-width:750px;"/>
          <img :src="srcc+'/static/xiangxi/1-02.png'" style="position:absolute;top:15px;right:35px;cursor:pointer;" @click="optu('close')">
          <div style="position: absolute;top:300px;left: 0;width: 856px;" v-if="type=='mm'">
            <img :src="srcc+'/static/xiangxi/1-06.png'" style="padding-right:5px;float:right;cursor:pointer;" @click="xiaimg()" v-if="photonow<kg.mu_photo.length-1">
            <img :src="srcc+'/static/xiangxi/1-07.png'" style="padding-left:5px;cursor:pointer;" @click="shimg()" v-if="photonow>0">
            <button @click="rotate('left')">左90</button><button @click="rotate('right')" style="float:right;">右90</button>
          </div>
        </div>

        <div v-if="type!='mm'" style="background-color:white;height:90px;border-top:5px solid rgb(242,242,242);margin-left:1px;margin-right:-1px;">
          <span style="color: rgb(153, 152, 153);font-size: 20px;display: inline-block;margin-left: 35px;margin-top: 33px;">请选择</span>
          <span style="color:white;background-color:rgb(201,104,50);" class="tbutton" @click="tijiao(0)">不通过</span>
          <span style="color:white;background-color:rgb(96,179,70);" class="tbutton" @click="tijiao(1)">通过</span>
        </div>
      </div>
      <div @click="back()" style="background-color:black;opacity:0.5;position:absolute;width:100%;height:100%;z-index:-9;top:0;"></div>
    </div>
    <div style="display:none;">{{watch}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 存放详细的对象
      kg:'',
      // 打开关闭滚动条
      gdt: 0,
      // 备注信息
      beizhu:'',
      // 详细信息里面点击图片之后的放大图
      fangimg:'',
      // 图片路劲
      srcc:'',
      // 地址栏
      type:'',
      // 苗木图片当前
      photonow:'',
      //审核记录
      shjl:'',
      // 旋转
      xuanzhuang:0,
      //姓名
      realname:'',
      //身份证号
      id_number:''
    }
  },
  computed:{
    watch(){
      this.kg = this.$store.state.showxx;
      console.log(this.kg);
      this.srcc = this.$store.state.srcc;
      this.type = this.$store.state.mtype;
      this.beizhu = "";
      this.shjl = this.$store.state.shjl;
      this.realname = this.kg.realname;
      this.id_number = this.kg.id_number;
    }
  },
  methods:{
    rotate(fang){
      if(fang=="left"){
        this.xuanzhuang -=90;
      }else{
        this.xuanzhuang +=90;
      }
      $("#fangdatu").css("transform","rotate("+this.xuanzhuang+"deg)")
    },
    // 上一张图片
    shimg(){
      if(this.photonow>0){
        this.fangimg = this.kg.mu_photo[--this.photonow].url;
      }
    },
    // 下一张图片
    xiaimg(){
      if(this.photonow<this.kg.mu_photo.length){
        this.fangimg = this.kg.mu_photo[++this.photonow].url;
      }
    },
    // 退出详细，清空
    back(){
      this.$store.state.showxx='';
    },
    // 是否通过
    tijiao(num){
      var that = this;
      var token = sessionStorage.getItem("sessiontoken");
      if(num==0&&that.type=='user'){
        that.realname = '';
        that.id_number = '';
      }
      if(that.type=='user'){
        if(num!=0&&(that.realname==''||that.id_number==''||that.id_number<18)){
          alert("请输入姓名或身份证号")
          return;
        }
        $.post("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/user/"+that.kg.objectId+"/private",{realname:that.realname,id_number:that.id_number,"sessiontoken":token},function(data){
          console.log(data)
        })
        $.post("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/user/review",{"objectId":that.kg.objectId,"flag":num,"review_remark":that.beizhu,"sessiontoken":token},function(data){
          console.log(data);
          alert(data.results.message);
        })
      }else if(that.type=='qy'){
        $.post("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/group/review",{"objectId":that.kg.objectId,"flag":num==1?1:0,"reason":that.beizhu,"sessiontoken":token},function(data){
          console.log(data);
          alert(data.results.message);
        });
      }else{
        $.post("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/tree/review",{"objectId":that.kg.objectId,"review_flag":num==1?1:0,"review_remark":that.beizhu,"sessiontoken":token},function(data){
          console.log(data);
          alert(data.results.message);
        })
      }
      setTimeout(function(){
        location.reload();
      },500);
    },
    // 放大图片
    optu(photo,index){
      if(photo=="close"){
        $(".fangdat").animate({"opacity":"0"},function(){
            $(".fangdat").css("top","-660px");
            $(".fangdat").css("opacity","1");
          })
          return;
      }
      this.fangimg = photo;
      if(this.type=="mm"){
          $(".fangdat").animate({"top":"175.5px"});
          this.photonow = index;
      }else{
          $(".fangdat").animate({"top":"175.5px"});
      }

    }
  },
  mounted:function(){
    this.kg = this.$store.state.showxx;
    this.srcc = this.$store.state.srcc;
    this.shjl = this.$store.state.shjl;
  }
}
</script>

<style lang="css" scoped>
  .shr{
    color:rgb(191,64,64);
  }
  .shg{
    color:rgb(96,179,70);
  }
  .swiper-slide {
    text-align: center;
    width:100% !important;
    /*height:100%  !important;*/
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .zcss{
    display:inline-block;
    width:384px;
    border-bottom: 1.5px dashed rgb(228,228,227);
    height: 74.5px;
    position:relative;
  }

  .zcss > div {
  }

  .zcss > div > p {
    border-left: 3px solid rgb(191, 64, 64);
    color: rgb(153, 152, 153);
    padding-left: 6px;
    font-size: 18px;
    margin-bottom: 25px;
  }

  .zcss > div > span {
    display: inline-block;
    float: right;
    font-size: 18px;
    color: rgb(103,104,104);
  }

  .ofys{
    overflow-y: scroll;
  }

  .ofyh{
    overflow-y: hidden;
  }

  .tbutton{
    display: inline-block;
    width:128px;
    text-align: center;
    line-height: 51px;
    font-size:20px;
    border-radius: 5px;
    float:right;
    margin-top:23px;
    margin-right:30px;
    cursor:pointer;
  }

  .timg{
    position: absolute;
    width: 50px;
    height: 50px;
    right: 9px;
    top: 2px;
    cursor:pointer;
  }
  .fangdat{
    position: absolute;
    height: 660px;
    width: 858px;
    /*transition: 1s all;*/
    top: -660px;
    z-index:2;
  }
  .xxtu{
    width:139px;
    height:247px;
    margin-left:27px;
    cursor:pointer;
  }
</style>
