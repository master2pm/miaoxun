//买卖家菜单栏 已经建立企业 并且管理的是团队  收款方式

const payment  = {
    template: `
  <div class="c686A6C overflow" style="margin-bottom:100px;position:relative;margin-top:50px;width:984px;padding:0 20px;">
     <div class="lf" style="width:463px;margin-right:40px;">
                 <p class=" c4C4C4F f26" style="background:url(../tu-menu/24_82.png) no-repeat center left;padding:15px 0;padding-left: 50px;">收款方式</p>
				 <p class="f18 c4C4C4F border0" style="margin:20px 0;padding-bottom:10px;">添加银行卡</p>
                 <p class="f16 c696A6C" style="margin:15px 0;">我们需要您提供银行账号，才能为您设置收款银行。</p>
				 

            
				  <input v-model="name" type="text" style="width:463px;height:50px;border:1px solid #E3E3E2;padding:10px 20px;" placeHolder="输入您的企业/个人名称" class="rad f16 none">
                  <input v-model="payment" type="text" style="margin:10px 0;width:463px;height:50px;border:1px solid #E3E3E2;padding:10px 20px;" placeHolder="输入您的收款账号" class="rad f16 none">
				  <input v-model="bank" type="text" style="margin-bottom:10px;width:463px;height:50px;border:1px solid #E3E3E2;padding:10px 20px;" placeHolder="输入您的开户行名称" class="rad f16 none">
				   <div class="right">
				          <img @click="adds($event)" src="../tu-menu/24_98.png" class="cursor">
		           </div>
		</div>






		<div  style="width:463px;" class=" rf">
                <p class="f18 c4C4C4F border0" style="margin-top: 85px;margin-bottom: 7px;padding-bottom:10px;">已有的银行卡</p>
		       
			   <p v-for="(item,index) in data" class="f15 c696A6C" style="padding:15px 0;position:relative;height:40px;border-bottom:1px solid #D1D5D5;">
				    <span class="" style="">{{item.company}}</span><br>
					<span class="" style="">{{item.number}}</span>
				    <span class="czjz  cE3E3E2" style="right:120px;">{{item.bank}}</span>
					<img @click="jiebangs($event,index)" src="../tu-menu/24_108.png" class="cursor czjz" style="right:0;">
				</p>
				
		
		</div>
		
       <div  v-if="jiebang==true" style="background:url(../tu-menu/33.png) repeat;height:72px;width:100%;position:fixed;bottom:0;left:0;">
        <div style="height:72px;width:1024px;margin:0 auto;" class="lf f13 c808082 center spjz2" >
		        <img @click="saves($event)" src="../tu-menu/24_93.png" style="right:20px;" class="czjz cursor"> 
				<img @click="qxs($event)" src="../tu-menu/24_137.png" style="right:163px;" class="czjz cursor">    
		</div>
       </div> 
  </div>

  `,
    data: function() {
        return {
          name:'',//输入您的企业/个人名称	<footers></footers>
		  payment:'',//输入您的收款账号
		  bank:'',//输入您的开户行名称
		  xuhao:'',//点击解绑的序号
		  jiebang:false,//解绑的控制变量
		  data:[
			  {"company":'1广东苗讯科技有限公司',"number":'62141 12155 15546 13616 ',"bank":'中国建设银行'},
			  {"company":'2广东苗讯科技有限公司',"number":'62141 12155 15546 13616 ',"bank":'中国建设银行'},
			  {"company":'3广东苗讯科技有限公司',"number":'62141 12155 15546 13616 ',"bank":'中国建设银行'}
		  ]//右边添加的数据
        }
    },
	 components:{"footers":footers},
    methods: {
//    解绑的点击按钮
jiebangs:function(e,xuhao){
	this.jiebang=true
	this.xuhao=xuhao
},
//解绑弹出框的取消按钮
qxs:function(e){
	this.jiebang=false
	this.xuhao=''
},
//解绑弹出框的保存按钮
saves:function(e){
	// 发请求
	this.jiebang=false
	this.data.splice(this.xuhao,1)
},
//添加账户
adds:function(e){
   var dd={"company":this.name,"number":this.payment,"bank":this.bank}
   this.data.push(dd)
   this.name=""
    this.payment=""
	 this.bank=""
}
          
    },

    mounted: function() {
       
    }
}