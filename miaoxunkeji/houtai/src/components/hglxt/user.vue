<template>
  <div>
    <div v-if="user" class="" style="padding-left:20px">
      <div class="lab">
        <span :class="{labzhong:type==0,biaoc:type!=0}" @click="change('0')">全部用户</span>
        <span :class="{labzhong:type==1,biaoc:type!=1}" @click="change('1')">待认证</span>
        <span :class="{labzhong:type==2,biaoc:type!=2}" @click="change('2')">认证通过</span>
        <span :class="{labzhong:type==3,biaoc:type!=3}" @click="change('3')">认证不通过</span>
        <span :class="{labzhong:type==4,biaoc:type!=4}" @click="change('4')">未认证</span>
      </div>
      <div>
        <div class="" style="padding:37px 10px;border-bottom:1px solid rgb(242,242,242);cursor:pointer;" v-for="n in user.length" @click="showxx(user[n-1])">
          <span style="color:rgb(153,152,153);">用户名称 · </span>
          <span style="width: 90px;display: inline-block;">{{user[n-1].nickname==''?'无':user[n-1].nickname.substring(0,5)}}{{user[n-1].nickname.length>5?"...":""}}</span>
          <span style="border-right: 1px dashed;display: inline-block;height: 17px;position: relative;top: 4px;margin-right: 25px;"></span>
          <span style="color:rgb(153,152,153);">注册手机 · </span>
          <span style="width:135px;display:inline-block;">{{user[n-1].mobilePhoneNumber.substring(0,3)+"-"+user[n-1].mobilePhoneNumber.substring(3,7)+"-"+user[n-1].mobilePhoneNumber.substring(7)}}</span>
          <span style="border-right: 1px dashed;display: inline-block;height: 17px;position: relative;top: 4px;margin-right: 25px;"></span>
          <div style="float:right;width:120px;margin-right: 30px;">
            <span>{{user[n-1].createdAt}}</span>
            <span :class="{rztg:user[n-1].status == '2',drz:user[n-1].status == '1',rzbtg:user[n-1].status == '-1'}" style="text-align: right;display: block;">
              {{user[n-1].status == '0'?'未认证':user[n-1].status == '1'?'待认证' :user[n-1].status == '2'?'认证通过':'认证不通过'}}
            </span>
          </div>
        </div>
      </div>
      <pages></pages>
    </div>
    <div>{{watch}}</div>
  </div>
</template>

<script>
import pages from '../common/page.vue';
export default {
  data(){
    return{
      type:'1',
      user:'',
      page:1,
      pagedan:7,
      pageb:7
    }
  },
  components:{
    'pages':pages
  },
  computed:{
    watch(){
        this.type = this.$route.params.type;
        this.getdata();
    }
  },
  methods:{
    // 审核记录
    shjl(kg){
      var token = sessionStorage.getItem("sessiontoken");
      var that = this;
      $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/user/review/log",{"userId":kg.objectId,"sessiontoken":token},function(data){
        console.log(data)
        that.$store.state.shjl = data.results;
      });
    },
      change(type){
      if(type==this.type){
        return;
      }
      this.gorush(type,"1");
    },
    showxx(data){
      this.shjl(data);
      this.$store.state.showxx = data;

    },
    gorush(type1,page1){
      var that = this;
      that.$router.push({name:'user',params:{type:type1,page:page1}});
    },
    nextpage(){
      var that = this;
      if(that.page < that.pageCount){
        this.gorush(that.$route.params.type,parseInt(that.page)+1);
      }
    },
    lastpage(){
      var that = this;
      if(that.page > 0){
        this.gorush(that.$route.params.type,parseInt(that.page)-1);
      }
    },
    go(e){
      var that = this;
      this.gorush(that.$route.params.type,parseInt(e.toElement.innerText, 10));
    },
    getdata(){
      var that = this;
      that.type = this.$route.params.type;
      that.page = this.$route.params.page;
      var token = sessionStorage.getItem("sessiontoken");
      var temp = '';
        switch(that.type){
          case '0':temp = "";break;
          case '1':temp = "&status=1";break;
          case '2':temp = "&status=2";break;
          case '3':temp = "&status=-1";break;
          case '4':temp = "&status=0";break;
        }

        $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/user?limit=6&page="+that.page+"&"+temp+"&sessiontoken="+sessionStorage.getItem("sessiontoken"),function(data){
          console.log(data);
          that.user = data.results.data;
          that.$store.state.htpageCount = data.results.page_count;
          console.log(that.user);
        });
    }
  },
  mounted:function(){
    this.getdata();
  }
}
</script>

<style lang="css" scoped>

  .lab {
    border-bottom: 1px solid rgb(242,242,242);
  }
  .lab > span{
    font-size:13px;
    display: inline-block;
    padding:24px 10px;
  }

  .biaoc{
    cursor: pointer;
  }

  .labzhong {
    color: rgb(38, 156, 136);
    border-bottom: 1px solid;
  }
/*待认证*/
  .drz {
    color:rgb(201,104,50);
  }

  /*认证通过*/
  .rztg{
    color:rgb(96,179,70);
  }

  /*认证不通过*/
  .rzbtg{
    color:rgb(191,64,64);
  }

</style>
                                                                                                                                                                                                                                                                      
