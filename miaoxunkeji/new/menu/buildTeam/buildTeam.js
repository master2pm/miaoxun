

//买卖家菜单栏 未建立企业  点击建立团队按钮的对应页面

const buildTeam = {
  template: `
  <div style="padding:0 20px;position:relative;margin-bottom:115px;" class="c4C4C4F f26 ">
  <div  style="background: url(../tu-menu/21_18.png) no-repeat;height:165px;line-height:165px;margin:50px 0;position: relative;padding-left:130px;">
  建立团队正在进行中
  </div> 
  <p class="f26 " style="margin-bottom:10px;">请填写您的团队名称与团队信息     </p>
  <p class="f16 c686A6C">给您的团队起一个响亮的名称，让团队成员与其他用户</p>
  <p class="f16 c686A6C">都能记住它。<span v-if="hasItem==false">团队建立后，团队名称将不可更改。</span></p>

  <p  class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">团队名称</p>
  <input @keyup="noteam('name')" :class="{hong:hong==false}" v-model="name" type="text" placeHolder="请输入您的团队名称，团队建立后，团队名称将不可更改。" name="" style="width:462px;height: 38px;padding:10px 20px;" class="inputborder none rad f15">
  
  <p  v-if="hong==false" class="f13 cBF4040" style="margin-top:10px;">团队名称不能含有公司字样。</p>

  <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">团队联系人</p>
  <input @keyup="noteam(0)" v-model="lxr" type="text" placeHolder="请输入您的团队联系人" name="" style="width:462px;height: 38px;padding:10px 20px;" class="inputborder none rad f15">

  <p class="f18 c696A6C" style="margin-bottom:20px;margin-top:35px;">团队联系电话</p>
  <input @keyup="noteam('phone')" @afterpaste="checkPhone()"  v-model="phone" maxlength=11 type="text" placeHolder="团队联系电话" name="" style="width:462px;height: 38px;padding:10px 20px;margin-bottom:115px;" class="inputborder none rad f15">
  
  <!--完成建立团队--无个人苗木数据-->
  <img class="cursor" v-if="hasItem==false" :src="name!=''&&lxr!=''&&phone.length==11&&hong==true?'../tu-menu/21_28.png':'../tu-menu/21_37.png'" alt="" style="position:absolute;bottom:0;right:20px;" @click='build1($event)'>
   <!--下一步--有个人苗木数据-->
  <img class="cursor" v-if="hasItem==true" :src="name!=''&&lxr!=''&&phone.length==11&&hong==true?'../tu-menu/21_14.png':'../tu-menu/21_20.png'" alt="" style="position:absolute;bottom:0;right:20px;" @click='build2($event)'>

  
<div style="display:none;">{{watch}}</div>
  </div>

  `,
  data:function(){
    return {
       hasItem:false,////1.有个人苗木项目private_ground_count>0个人项目的苗圃场数量   下一步   nexts1      2.private_ground_count==0个人项目的苗圃场数量 完成认证   nexts2  
       name:this.$store.state.name1,//团队名称
       lxr:this.$store.state.contacts1,//团队联系人
       phone:this.$store.state.contact_number1,//团队联系电话
       hong:true//红色边框线,true是默认不含公司名字是正确的

    }
  },
  computed:{
         watch:function(){
			 this.$store.state.name1=this.name//团队名称
             this.$store.state.contacts1=this.lxr//团队联系人
			 this.$store.state.contact_number1=this.phone//团队联系电话
		 }
  },
  methods:{
    // 检测手机号码
        checkPhone(){
          this.phone=this.phone.replace(/\D/g,'')
        },
    noteam:function(n){
			 if(n=='name'){
                this.search()
			 }else if(n=='phone'){
                 this.phone=this.phone.replace(/\D/g,'')
       }
         this.$store.commit("noteam")
	  },
     // 团队名称检测
search:function(){
  console.log(this.name,this.hong)
    if(this.name.indexOf('公司')==-1){
        this.hong=true
    }else{
       this.hong=false
    }
},
      // 点击完成建立按钮
      build1:function(e){
		  var that=this
        if(this.name!=''&&this.lxr!=''&&this.phone.length==11&&this.hong==true){
            this.$store.commit("Team")
//检测组名是否重复，没有重复就发请求
$.get(Boss+'duplicate/group_name',{'name':that.name,'sessiontoken':sessiontoken},function(data){
    if(data.status==1){
      // pass是否通过，1=没有重复，0=该组名已重复
      if(data.results.pass==1){
                                             common_users(function(data){
                                                     if(window.localStorage.getItem("default_group")!=null){
                                                                                   // 只要登录了就不可能是空
                                                                                   var user=window.localStorage.getItem('default_group')
                                                                                      var user1=JSON.parse(user)
                                                                                       for (var key in user1) {
                                                                                           // 1.如果有记录也有登录过
                                                                                           if(data.objectId==key){
                                                                                               user1[key]=data.default_group
                                                                                               window.localStorage.setItem('default_group',JSON.stringify(user1))
                                                                                           }
                                                                                       }
                                                             }
                                                                })
                                                                   setTimeout(function() {
                                                                 that.$router.push({name:"buildTeam3"})
                                                               }, 100);
      }else{
        alert('该团队名称已存在，请重新输入！')
      }
    }
}) 


         
			 
				
             
        }
        
      },
            // 点击下一步按钮
      build2:function(e){
        var that=this
        if(this.name!=''&&this.lxr!=''&&this.phone.length==11&&this.hong==true){
            //检测组名是否重复，没有重复就发请求
                      $.get(Boss+'duplicate/group_name',{'name':that.name,'sessiontoken':sessiontoken},function(data){
                          if(data.status==1){
                            // pass是否通过，1=没有重复，0=该组名已重复
                            if(data.results.pass==1){
                                  that.$router.push({name:"buildTeam2"})
                            }else{
                                   alert('该团队名称已存在，请重新输入！')
                                 }
                          }
                      }) 

                                  
        }
        
      }
    },

    mounted:function () {
      // alert(this.name)
    // 含有公司名字的时候出现红色框
    if(this.name.indexOf('公司')==-1){
        this.hong=true
    }else{
       this.hong=false
    }

    // 判断有没有个人苗木数据--判断个人是否有苗圃场private_group.ground_count
    if(common_user.private_ground_count>0){//私有项目的苗圃埸数
        //有个人苗木数据
        this.hasItem=true
    }else{
        //无个人苗木数据
        this.hasItem=false
    }
    }
  }