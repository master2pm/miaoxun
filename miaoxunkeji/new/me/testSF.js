//买卖家我的 安全与隐私 验证身份

const testSF = {
    template: `
  <div class=" overflow" style="width:984px;">
       <div class="" style="width:463px;margin-right:40px;position:relative;">
                 <router-link :to="{name:'secret',params:{index:4}}"><p v-if="this.$store.state.anquan==false" class="C269C88 f16" style="padding:15px 0;">返回安全与隐私</p></router-link>
				<router-view></router-view>
              		  
				
		
		</div>

  </div>


  `,
    data: function() {
        return {
		
		

        }
    },

    methods: {
	
    },

    mounted: function() {
       
		
    }
}