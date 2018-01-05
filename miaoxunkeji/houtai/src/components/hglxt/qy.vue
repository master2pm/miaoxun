<template>
  <div>
    <div v-if="qy" class="" style="padding-left:20px">
      <div class="lab">
        <span :class="{labzhong:type==0,biaoc:type!=0}" @click="change('0')">全部企业</span>
        <span :class="{labzhong:type==1,biaoc:type!=1}" @click="change('1')">待认证</span>
        <span :class="{labzhong:type==2,biaoc:type!=2}" @click="change('2')">认证通过</span>
        <span :class="{labzhong:type==3,biaoc:type!=3}" @click="change('3')">认证不通过</span>
      </div>
      <div>
        <div style="padding:40px 10px;border-bottom:1px solid rgb(242,242,242);cursor:pointer;" v-for="n in qy.length" @click="showxx(qy[n-1])">
          <span style="color:rgb(153,152,153);">企业全称 · </span>
          <span style="width: 90px;display: inline-block;">{{qy[n-1].name==''?'无':qy[n-1].name.substring(0,5)}}{{qy[n-1].name.length>5?"...":""}}</span>
          <span style="border-right: 1px dashed;display: inline-block;height: 17px;position: relative;top: 4px;margin-right: 25px;"></span>
          <span style="color:rgb(153,152,153);">申请者 · </span>
          <span style="width:135px;display:inline-block;">{{qy[n-1].contact_number.substring(0,3)+"-"+qy[n-1].contact_number.substring(3,7)+"-"+qy[n-1].contact_number.substring(7,11)}}</span>
          <span style="border-right: 1px dashed;display: inline-block;height: 17px;position: relative;top: 4px;margin-right: 25px;"></span>
          <div style="float: right; width: 120px; margin-right: 30px;">
            <span>{{qy[n-1].createdAt}}</span>
            <span :class="{rztg:qy[n-1].g_status == '1',drz:qy[n-1].g_status == '0',rzbtg:qy[n-1].g_status == '-1'}" style="text-align: right;display: block;">{{qy[n-1].g_status == '0'?'待认证':qy[n-1].g_status == '1'?'认证通过' :'认证不通过'}}</span>
          </div>
        </div>
      </div>
      <pages></pages>
    </div>
    <div>{{watch}}</div>
  </div>
</template>

<script>
import pages from '../common/page.vue'
export default {
  data(){
    return{
      type:'1',
      qy:'',
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
      $.get("http://"+that.$store.state.url1+"m1-ymboss.leanapp.cn/boss/group/review/log",{"groupId":kg.objectId,"sessiontoken":token},function(data){
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
      that.$router.push({name:'qy',params:{type:type1,page:page1}});
    },
    nextpage(){
      var that = this;
      if(that.page < that.pageCount){
        this.gorush(this.$route.params.type,parseInt(that.page)+1);
      }
    },
    lastpage(){
      var that = this;
      if(that.page > 0){
        this.gorush(this.$route.params.type,parseInt(that.page)-1);
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
      var temp = '';
        switch(that.type){
          case '0':temp = "";break;
          case '1':temp = "&g_status=0";break;
          case '2':temp = "&g_status=1";break;
          case '3':temp = "&g_status=-1";break;
        }
      $.get("http://"+this.$store.state.url1+"m1-ymboss.leanapp.cn/boss/group?limit=6&page="+that.page+"&"+temp+"&sessiontoken="+sessionStorage.getItem("sessiontoken"),function(data){
        console.log(data);
        that.qy = data.results.data;
        that.$store.state.htpageCount = data.results.page_count;
        console.log(that.qy);
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
