// 卖家还是买家进入该页面
//var bg='sell'
//var bg='sell'
var background=locations("role")


// 建立企业的数组
var nogroup=JSON.parse(window.sessionStorage.getItem("nogroup"))
// 建立团队的数组
var noteam=JSON.parse(window.sessionStorage.getItem("noteam"))
if(nogroup==null){
	//alert("null")
	 nogroup={"sessiontoken":sessiontoken,
             "name":'',
			 "contacts":'',
			 "contact_number":'',
			 "legal_person":'',
			 "legal_person_identify":'',
			 "legal_src":'',
			 "business_licence":'',
			 "business_src":''}
              window.sessionStorage.setItem("nogroup",JSON.stringify(nogroup))
}else{
	//alert("nonull")
}



if(noteam==null){
	//alert("null")
	 noteam={"sessiontoken":sessiontoken,
             "name1":'',
			 "contacts1":'',
			 "contact_number1":''}
              window.sessionStorage.setItem("noteam",JSON.stringify(noteam))
}else{
	//alert("nonull")
}


$.ajax({
   async: false,
   type: "GET",
   url:Boss+"user/info",
   data:{"sessiontoken":sessiontoken},
   success : function(data) {
    // 个人资料
      common_user=data.results 
      // alert(0)
   }
});

const store = new Vuex.Store({
    state: {
      photo:false,//
         finalArrs:[],//这个是终极放大图团队和个人信息头像
        // Boss:Boss, //公共地址
        // sessiontoken: sd, //登录 授权码
        // user_phone: sp, //用户头像
        // common_user:common_user,//个人资料
        // default_group:'',//默认的id
        index: 0, //标题的当前序号
		header:background,
		// A.Group - 用户提交创建企业资料  没有个人项目
        name:nogroup.name,//企业名称
		contacts:nogroup.contacts,//企业联系人
		contact_number:nogroup.contact_number,//企业联系人电话号码
		legal_person:nogroup.legal_person,//企业法人代表名称
		legal_person_identify:nogroup.legal_person_identify,//法定代表人身份证
		legal_src:nogroup.legal_src,//法定代表人src
		business_licence:nogroup.business_licence,//企业营业执照
		business_src:nogroup.business_src,//企业营业执照src

        

		// B.team - 用户提交创建团队资料  没有个人项目
        name1:noteam.name1,//团队名称
		contacts1:noteam.contacts1,//团队联系人
		contact_number1:noteam.contact_number1//团队联系人电话号码

   
		
        
    },
    mutations: {
		// 清空企业的临时缓存
		kong:function(state){
			 //alert("kong")
			 var nogroups={
			 "sessiontoken":sessiontoken,
             "name":'',
			 "contacts":'',
			 "contact_number":'',
			 "legal_person":'',
			 "legal_person_identify":'',
			 "legal_src":'',
			 "business_licence":'',
			 "business_src":''}
              window.sessionStorage.setItem("nogroup",JSON.stringify(nogroups))
console.log(nogroups)
			 state.name=''
			 state.contacts=''
			 state.contact_number=''
			 state.legal_person=''
			 state.legal_person_identify=''
			 state.legal_src=''
			 state.business_licence=''
			 state.business_src=''

		},
				// 清空团队的临时缓存
		kongTeam:function(state){
			 //alert("kong")
			 var noteams={
			 "sessiontoken":sessiontoken,
             "name1":'',
			 "contacts1":'',
			 "contact_number1":''
			 }
              window.sessionStorage.setItem("noteam",JSON.stringify(noteams))
           console.log(noteams)
			 state.name1=''
			 state.contacts1=''
			 state.contact_number1=''
		},
		// 保存企业的临时缓存的
         nogroup:function(state){
			// alert("保存")
                var nogroups={
			 "sessiontoken":sessiontoken,
             "name":state.name,
			 "contacts":state.contacts,
			 "contact_number":state.contact_number,
			 "legal_person":state.legal_person,
			 "legal_person_identify":state.legal_person_identify,
			 "legal_src":state.legal_src,
			 "business_licence":state.business_licence,
			 "business_src":state.business_src}
              window.sessionStorage.setItem("nogroup",JSON.stringify(nogroups))
		 },
        // A.Group - 用户提交创建企业资料   
        Group: function(state) {
            //    请求
            var that = this
			if(state.name==''||state.contacts ==''||state.contact_number ==''||state.legal_person ==''||state.legal_person_identify ==''||state.business_licence ==''){
				alert("资料填写不完整")
				return
			}
            var formData = new FormData();
            formData.append("sessiontoken",sessiontoken);//1用户授权码
            // if (state.name != '') {
                formData.append("name", state.name);//2企业名称
            // }
            // if (state.contacts !='') {
                formData.append("contacts", state.contacts);//3企业联系人
           // }
			//if (state.contact_number !='') {
                formData.append("contact_number", state.contact_number);//4企业联系人电话号码
            //}
			//if (state.legal_person !='') {
                formData.append("legal_person", state.legal_person);//5企业法人代表名称
            //}
			// formData.append("legal_person_identify",state.legal_person_identify);//6.法定代表人身份证
			//   formData.append("business_licence",state.business_licence);//7.企业营业执照
            var files=[state.legal_src,state.business_src]
            var items=["legal_person_identify","business_licence"]
            commonFiles(files,formData,items)
  // for (var i = 0; i < files.length; i++) {
  //                      //base64转换为blob对象
  //                       var text = window.atob(files[i] .split(",")[1]);
  //                       var buffer = new ArrayBuffer(text.length);
  //                       var ubuffer = new Uint8Array(buffer);
  //                       var pecent = 0 , loop = null;

  //                       for (var n = 0; n < text.length; n++) {
  //                           ubuffer[n] = text.charCodeAt(n);
  //                       }
  //                       var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder;
  //                       var blob;
  //                       if (Builder) {
  //                           var builder = new Builder();
  //                           builder.append(buffer);
  //                           blob = builder.getBlob(type);
  //                       } else {
  //                           blob = new window.Blob([buffer], {type : 'image/png'});
  //                       }
  //                       if (i==0) {
  //                           formData.append("legal_person_identify",blob);//6.法定代表人身份证
  //                        }
		// 	            if (i==1) {
  //                           formData.append("business_licence",blob);//7.企业营业执照
  //                        }                        
                   
  //                   }			
            jQuery.ajax({
                    url:Boss + "company/create",
                    type: "POST",
                    processData: false,
                    contentType: false,
                    data: formData,
                })
                .done(function(data, textStatus, jqXHR) {
                    if (data.status == 1) {
                        console.log(data)
                    }

                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                   alert("HTTP Request Failed");
                   return
               })
        },
                // B0.团队升级为企业
        upcompany: function(state,objectId) {
            //    请求
            var that = this
			if(state.name==''||state.contacts ==''||state.contact_number ==''||state.legal_person ==''||state.legal_person_identify ==''||state.business_licence ==''){
				alert("资料填写不完整")
				return
			}
            var formData = new FormData();
            formData.append("sessiontoken",sessiontoken);//1用户授权码
            // if (state.name != '') {
                formData.append("name", state.name);//2企业名称
            // }
            // if (state.contacts !='') {
                formData.append("contacts", state.contacts);//3企业联系人
           // }
			//if (state.contact_number !='') {
                formData.append("contact_number", state.contact_number);//4企业联系人电话号码
            //}
			//if (state.legal_person !='') {
                formData.append("legal_person", state.legal_person);//5企业法人代表名称
            //}
			// formData.append("legal_person_identify",state.legal_person_identify);//6.法定代表人身份证
			//   formData.append("business_licence",state.business_licence);//7.企业营业执照
            var files=[state.legal_src,state.business_src]
            var items=["legal_person_identify","business_licence"]
            commonFiles(files,formData,items)
	
            jQuery.ajax({
                    url: Boss + "user/groups/"+objectId+"/upgrade",
                    type: "POST",
                    processData: false,
                    contentType: false,
                    data: formData,
                })
                .done(function(data, textStatus, jqXHR) {
                    if (data.status == 1) {
                        console.log(data)
                        
                    }

                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                   alert("HTTP Request Failed");
                   return
               })
        },
	 // B.Group - 用户提交创建团队资料
	   Team:function(state){
		   if(state.name1==''||state.contacts1==''||state.contact_number1 ==''){
				alert("资料填写不完整")
				return
			}
			$.post(Boss+"group/create",{
				"name":state.name1,//企业名称
				"contacts":state.contacts1,//企业联系人
				"contact_number":state.contact_number1,//企业联系人电话号码
				"sessiontoken":sessiontoken
			},function(data){
        if(data.status==0){
          alert("HTTP Request Failed");
          return
        }
				console.log(data)
			})
	   },
	   // 保存团队的临时缓存的
         noteam:function(state){
			// alert("保存")
			//alert(3)
                var noteams={
			 "sessiontoken":sessiontoken,
             "name1":state.name1,
			 "contacts1":state.contacts1,
			 "contact_number1":state.contact_number1
			}
              window.sessionStorage.setItem("noteam",JSON.stringify(noteams))
		 },
    }
})