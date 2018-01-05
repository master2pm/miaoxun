

// 分页器
const pages = {
    template: `
<div  class=" c49494B bai overflow " style="margin-left: 50px;padding-left:20px;height:36px;margin-left: 185px;width:765px;">
     <span  style="color:#666666;height:34px;line-height:34px;" class="lf f13">第{{this.$store.state.pages_fbmm0}}-{{this.$store.state.pages_fbmm1}}条记录/共{{this.$store.state.pages_fbmm2}}条记录</span>

    <ul class="rf overflow border f11" style="height:34px;line-height:34px;">
           <li @click="shang($event)" class="lf center cursor" style="width:73px;height:34px;"><&nbsp;&nbsp;上一页&nbsp;</li>
           <li class="lf center cursor"  style="width:59px;height:34px;border-left:1px solid #dddddd;border-right:1px solid #dddddd;">
               <input  @keyup="zhong($event)" type="text"  class="none center" style="width:100%;height:100%;" v-model="pages_fbmm">
           </li>
           <li @click="xia($event)" class="lf center cursor" style="width:73px;height:34px;">下一页&nbsp;&nbsp;></li>
    </ul>  
    <div style='display:none'>    {{watch}} </div>  
  </div>


     `,

    data:function () {
        return{
            pages_fbmm:this.$store.state.pages_fbmm
        }
    },

    computed:{ 
        watch:function(){
           this.pages_fbmm=this.$store.state.pages_fbmm
        }
    },

    methods:{
      // 上一页的点击事件
      shang:function(e){
         var that=this
         document.body.scrollTop=0
         //var adc = this.$route.path.split('/')[1]
       // switch (adc) {
          // 1.qbmm2
           // case 'qbmm2':
                             this.$store.state.pages_fbmm-=1
                              // 限制最小是0
                             if(this.$store.state.pages_fbmm==0){
                                this.$store.state.pages_fbmm=1
                                this.$router.push('/htgl/mmsh/fbmm/1')
                              return
                             }
                                this.$router.push('/htgl/mmsh/fbmm/'+this.$store.state.pages_fbmm)
              //  break;      
        //}
        
        // 请求后台的页数
        this.page()
       
      },
      // 下一页的点击事件
      xia:function(e){
        var that=this
        document.body.scrollTop=0
        //var adc = this.$route.path.split('/')[1]
       // switch (adc) {
         //   case 'qbmm2':
                            this.$store.state.pages_fbmm=parseInt(this.$store.state.pages_fbmm)+1
                            // 最大不能加到总数/20
                             //alert(this.$store.state.pages_fbmm2)
                            if(this.$store.state.pages_fbmm> Math.ceil(this.$store.state.pages_fbmm2/20)){
                               this.$store.state.pages_fbmm-=1
                               this.$router.push('/htgl/mmsh/fbmm/'+this.$store.state.pages_fbmm)
                               console.log(1)
                              return
                           } console.log(11)
                               this.$router.push('/htgl/mmsh/fbmm/'+this.$store.state.pages_fbmm)
              //  break;  


          

        // 请求后台的页数
       this.page()
      },
      // 输入框的按下事件
      zhong:function(e){
         var that=this
         document.body.scrollTop=0
        // var adc = this.$route.path.split('/')[1]
       // switch (adc) {
//case 'qbmm2':
               // 最大不能加到总数/20
               // 1.输入的大于总页数
                if($(e.currentTarget).val()> Math.ceil(this.$store.state.pages_fbmm2/20)){
                  this.$store.state.pages_fbmm=Math.ceil(this.$store.state.pages_fbmm2/20)
                  this.pages_fbmm=Math.ceil(this.$store.state.pages_fbmm2/20)
                  this.$router.push('/htgl/mmsh/fbmm/'+this.$store.state.pages_fbmm)
                  return
               }else if($(e.currentTarget).val()==0||$(e.currentTarget).val()<0){
                 // 2.输入的小于0或者等于0
                        this.$store.state.pages_fbmm=1
                  }else{ 
                 // 3.输入的大于0并小于总页数
                this.$store.state.pages_fbmm=$(e.currentTarget).val()
               }
                this.$router.push('/htgl/mmsh/fbmm/'+this.$store.state.pages_fbmm)
                



       
       // 请求后台的页数 
       this.page()
      },
      // 调用的方法
      page:function(){
        // 重新请求当前的数据data
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
                                if(data.results.data.length>0){
                                  that.$store.state.pages_fbmm0=(that.$store.state.pages_fbmm-1)*20+1
                                  that.$store.state.pages_fbmm1=(that.$store.state.pages_fbmm-1)*20+data.results.data.length
                                }
                                that.$store.state.data_shenhe_fbmm=data.results.data
                                console.log("pages_fbmm")
                      })
    
          
            
      }
       
      
    },
    // 页面刷新的时候判断是哪个是浏览的最后记录  更改index 用于控制左边li的背景颜色 
    mounted:function () {
       
    }
}

