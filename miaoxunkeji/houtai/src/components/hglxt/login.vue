<template lang="html">
  <div style="width:500px;text-align:left;margin:200px auto;height:100px;">
    <input class="uuu" type="text" placeholder="账号" v-model="user"><br>
    <input class="ppp" @change="login()" type="password" placeholder="密码" v-model="pwd"><br>
    <button @click="login()" style="text-align:center;">登录</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:'',
      pwd:''
    }
  },
  methods:{
    login(){
      var that = this;
      $.post("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/login",{mobile:that.user,password:that.pwd},function(data){
        console.log(data)
        that.$store.state.user = data.results;
        sessionStorage.setItem("sessiontoken", data.results.sessiontoken);
        sessionStorage.setItem("user_name",data.results.nickname);
        sessionStorage.setItem("user_img",data.results.avatar.url);
        that.$router.push({name:"hglxt"});
      }).error(function(){alert("ERR")})
    }
  },
  mounted:function(){
    var that = this;
    setTimeout(function(){
      var token = sessionStorage.getItem("sessiontoken");
      console.log(token)
      if(token!=null&&token!=''){
        that.$router.push({name:"hglxt"});
      }
    },100)

    $(".uuu").keydown(function(event){
      if(event.keyCode==13){
        $(".ppp").focus()
      }
    });

  }
}
</script>

<style lang="css">
</style>
