
 
// 没有 建立苗场的开始建立按钮所在页面

const begin1 = {
    template: `
         <div class="relative" style="height:593px;padding:20px;padding-top:0;background:url(../tu-mpz/1-86.png) no-repeat 0 0;background-size:100% 200px;">
		          <p class="f26 cFEFEFE" style="padding-top:55px;">让我们一起来建立属于自己的苗圃场吧</p>
				  <p class="f18 cFEFEFE">真的哦！您可以把整个苗圃场搬过来哦，</p>
				  <p class="f18 cFEFEFE">我们现在就开始。</p>

				  <p class="f18 c4C4C4F" style="margin-top:95px;">建立苗圃场</p>
				  <p class="f13 c999899">为您的苗圃场设定名称、联系方式、地址</p>
				  <p class="f13 c999899" style="margin-bottom:20px;">以及快捷定位。</p>

				  <router-link :to="{name:'concact2'}">
                <button @click="qingkongMPC" class="layui-btn layui-btn-primary" style="border:1px solid #269C88;color:#269C88;padding:0 9px;font-size:12px;width:83px;height:28px;line-height:28px;">开始建立</button>
				  </router-link>

				  <img src="../tu-mpz/1-13.png" style="display:none;position:absolute;right:20px;bottom:48px;" class="cursor">
          </div>


     `,
     data:function(){
      return {
        
      }
     },
    methods:{
    // 点击开始建立清空苗圃场缓存
    qingkongMPC:function(){
      this.$store.commit("qingkongMPC")
    }
    },
    // 
    mounted:function () {

    }
}

