<template>
  <div style="position: absolute;bottom: 27px;right: 40px;">
    <div v-if="pageCount!=1">
      <span v-if="page>=10"  @click="go1('frist')" style="border-radius:4px;font-size: 13px;display: inline-block;width:60px;text-align: center;line-height: 30px;border:1px solid rgb(153,152,153);color: rgb(38,156,136);cursor:pointer;">首页</span>
      <span v-if="page>1"  @click="lastpage()" style="border-radius:4px;font-size: 13px;display: inline-block;width:60px;text-align: center;line-height: 30px;border:1px solid rgb(153,152,153);color: rgb(38,156,136);cursor:pointer;">上一页</span>
      <span v-if="page<10?pageCount>=index+1:pageCount>=parseInt(page)+index-4" v-for="(item,index) in 10" class="page" @click="go($event)":class="{fenm:page<10?page!=index+1:page!=parseInt(page)+index-4,fenz:page>=10?page==parseInt(page)+index-4:page==index+1}">
        {{page>=10?parseInt(page)+index-4:(index+1)}}
      </span>
      <span v-if="page<pageCount" @click="nextpage()" style="border-radius:4px;font-size: 13px;display: inline-block;width:60px;text-align: center;line-height: 30px;border:1px solid rgb(153,152,153);color: rgb(38,156,136);cursor:pointer;">下一页</span>
      <span v-if="page<pageCount" @click="go1('last')" style="border-radius:4px;font-size: 13px;display: inline-block;width:60px;text-align: center;line-height: 30px;border:1px solid rgb(153,152,153);color: rgb(38,156,136);cursor:pointer;" >尾页</span>
    </div>
    <div style="display:none">{{watch}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      pageCount:'',
      page:''
    }
  },
  computed:{
    watch(){
      this.pageCount = this.$store.state.htpageCount;
      this.page = this.$route.params.page;
    }
  },
  components:{

  },
  methods:{
    gorush(type1,page1){
      var that = this;
      that.$router.push({name:that.$store.state.mtype,params:{type:type1,page:page1}});
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
    go1(where){
      var that = this;
      if(where=='last'){
        this.gorush(that.$route.params.type,that.pageCount);
      }else if(where='first'){
        this.gorush(that.$route.params.type,1);
      }
    }
  },
  mounted:function(){
    var that = this;
    setTimeout(function(){
      that.page = that.$route.params.page;
      console.log(that.page)
      that.pageCount = that.$store.state.htpageCount;
    },200)

  }
}
</script>

<style lang="css" scoped>
  .fenm{
    border:1px solid rgb(153,152,153);
    color: rgb(38,156,136);
    border-radius:4px;
  }
  .fenz{
    color: rgb(103,104,104);
  }
  .page{
    display: inline-block;
    width:30px;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    cursor:pointer;
  }
</style>
