

//标题栏

var title = {
  template: `
  <div style="min-width:1024px;" class="">
  <div :class="{bg393C3D:bj=='hei',bgwhite:bj=='bai'}">
  <ul :class="{heitu:bj=='hei',baitu:bj=='bai'}" style="width:1024px;margin:0 auto;height:46px;line-height:46px;">
  <li @click="gorouter(index)" :class="{c60B346:indexs==index&&bj=='bai',cC96832:indexs==index&&bj=='hei',c676868:indexs!=index&&bj=='bai',cF6:indexs!=index&&bj=='hei'}" v-for="(item,index) in title" class="cursor center lf relative" style="width:140px;">{{item}}
  <img v-show="indexs==index&&bj=='bai'" src="../tu-collection/1-14.png" class="spjz" style="bottom:3px;">
  <img v-show="indexs==index&&bj=='hei'" src="../tu-collection/1-15.png" class="spjz" style="bottom:3px;">
  </li>
  </ul>
  </div>
  <router-view style="padding:30px 15px;width:994px;margin:0 auto;"></router-view>
  <div style="display:none;">{{watch}}</div>
</div>
  `,
  data:function(){
    return {
      indexs:this.$store.state.indexs,//第几个标签
      bj:this.$store.state.header,
      title:['收藏的苗木','收藏的苗圃','收藏的企业','收藏的团队','收藏的个人']
    }
  },
  computed:{
    watch:function(){
      this.indexs=this.$store.state.indexs//第几个标签
    }
  },
   // 浏览器后退按钮保存标签下标不变
  watch:{
         '$route':'dotitle'
  },
  methods:{
  // 浏览器后退按钮保存标签下标不变
  dotitle:function(){
     this.$store.state.indexs=this.$route.params.indexs
  },
gorouter:function(index){
  this.$store.state.indexs=index
  if(index==0){
    this.$router.push({name:'miaomu',params:{indexs:index}})
  }else if(index==1){
    this.$router.push({name:'miaopu',params:{indexs:index}})
  }else if(index==2){
    this.$router.push({name:'company',params:{indexs:index}})
  }else if(index==3){
    this.$router.push({name:'group',params:{indexs:index}})
  }else if(index==4){
    this.$router.push({name:'private',params:{indexs:index}})
  }
}

  },

  mounted:function () {
    this.$store.state.indexs=this.$route.params.indexs
  }
}