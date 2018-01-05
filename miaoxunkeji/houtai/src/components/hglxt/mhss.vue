<template>
  <div>
    <div class="" style="padding-left:20px">
      <div style="overflow-y:hidden;">
        <div class="" style="padding:37px 10px;border-bottom:1px solid rgb(242,242,242);cursor:pointer;" v-for="n in user.length" @click="showxx(user[n-1],'user')" >
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
        <div class="" style="padding:40px 10px;border-bottom:1px solid rgb(242,242,242);cursor:pointer;" v-for="n in tree.length" @click="showxx(tree[n-1],'mm')">
          <span style="color:rgb(153,152,153);">苗木名称 · </span>
          <span style="width: 90px;display: inline-block;">{{tree[n-1].mu_name.length>5?tree[n-1].mu_name.substring(0,5)+"...":tree[n-1].mu_name}}</span>
          <span style="border-right: 1px dashed;display: inline-block;height: 17px;position: relative;top: 4px;margin-right: 25px;"></span>
          <span>苗圃场 · </span>
          <span style="width:135px;display:inline-block;">{{tree[n-1].mu_ground.gg_name.length>8?tree[n-1].mu_ground.gg_name.substring(0,8) + '...':tree[n-1].mu_ground.gg_name}}</span>
          <span style="border-right: 1px dashed;display: inline-block;height: 17px;position: relative;top: 4px;margin-right: 25px;"></span>
          <span>发布者 · </span>
          <span style="width:135px;display:inline-block;">{{tree[n-1].user.nickname}}</span>
          <span style="border-right: 1px dashed;display: inline-block;height: 17px;position: relative;top: 4px;margin-right: 25px;"></span>
          <div style="float:right;width:120px;margin-right: 30px;">
            <span>{{tree[n-1].createdAt}}</span>
            <span :class="{rztg:tree[n-1].status == '2',drz:tree[n-1].status == '1',rzbtg:tree[n-1].status == '-1'}" style="text-align: right;display: block;">{{tree[n-1].status == '0'?'未发布':tree[n-1].status == '1'?'待审核' :tree[n-1].status == '2'?'审核通过':'审核不通过'}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:'',
      tree:''
    }
  },
  methods:{
    // 审核记录
    shjl(kg,type){
      var token = sessionStorage.getItem("sessiontoken");
      var that = this;
      if(type=='user'){
        $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/user/review/log",{"userId":kg.objectId,"sessiontoken":token},function(data){
          console.log(data)
          that.$store.state.shjl = data.results;
        });
      }else{
        $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/tree/review/log",{"treeId":kg.objectId,"sessiontoken":token},function(data){
          console.log(data)
          that.$store.state.shjl = data.results;
        });
      }
    },
    showxx(data,type){
      this.shjl(data,type);
      this.$store.state.showxx = data;
      this.$store.state.mtype=type;
    }
  },
  mounted:function(){
    var that = this;
    $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/tree",{searchkey:this.$route.params.neir,limit:'5000'},function(data){
      console.log(data);
      that.tree = data.results.data;
    });
    $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/user",{searchkey:this.$route.params.neir,limit:'5000'},function(data){
      console.log(data);
      that.user = data.results.data;
    })
    $("#right").css("overflow-y","scroll");
  }
}
</script>

<style lang="css" scoped>
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
