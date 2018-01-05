const imgTailor = {
	template:`
	<!-- Cropping modal  -->
	<div  v-show="this.$store.state.photo==true" class="modal fade wai_kuangs" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-lg nei_kuang bai rad" style="width:900px;height:570px;">
	<div class="modal-content">
	<div class="avatar-form"  enctype="multipart/form-data" method="post">
<!-- 1.第一部分：变更头像+叉子 -->
	<div class="modal-header " style="padding:15px;border-bottom: 1px solid #e5e5e5;">
	<button class="close layui-btn layui-btn-primary rf " @click='close' data-dismiss="modal" type="button"  style="font-size:30px;height:17px;line-height:17px;padding:0 5px;border:none;">&times;</button>
	<h4 class="modal-title" id="avatar-modal-label" style="font-size:20px;">变更头像</h4>
	</div>
	<div class="modal-body">
	<div class="avatar-body" style="padding:0 25px;">

<!-- 2.第二部分：本地上传+选择文件 -->
	<div class="avatar-upload" style="padding:15px 0 0 0;">
	<input class="avatar-src" name="avatar_src" type="hidden">
	<input class="avatar-data" name="avatar_data" type="hidden">
	<label for="avatarInput" style="font-weight:bold;">本地上传</label>
	<input class="avatar-input" id="avatarInput" name="avatar_file" type="file">
	</div>
<!-- 3.第三部分：截图框 -->	
	<!-- Crop and preview     <div class='canvas' id='canvas'></div>-->
	<div class="row">
	<div class="col-md-9">
	<div class="avatar-wrapper" style="width:621px;height:364px;"></div>
	</div>
<!-- 4.第四部分：三个圆 -->	
	<div class="col-md-3 absolute" style="right:10px;top:82px;">
	<div class="avatar-preview preview-lg cursor" title="150px x 150px"  style="width:150px;height:150px;"></div>
	<div class="avatar-preview preview-md cursor" title="100px x 100px"  style="width:100px;height:100px;"></div>
	<div class="avatar-preview preview-sm cursor" title="50px x 50px"   style="width:50px;height:50px;"></div>
	</div>
	</div>
<!-- 5.第五部分：三个按钮 -->	
	<div class="row avatar-btns overflow">
	<div class="col-md-9">
	<div class="btn-group lf">
	<button class="layui-btn" data-method="rotate" data-option="-90" type="button"  style="transition:none;">向左旋转90°</button>
	</div>
	<div class="btn-group lf" style="margin-left:20px;">
	<button class="layui-btn" data-method="rotate" data-option="90" type="button" style="transition:none;">向右旋转90°</button>
	</div>
	</div>
	<div class="col-md-3 rf">
	<button class="layui-btn avatar-save" id="submitBtn"  style="transition:none;">保存</button>
	</div>
	</div>
	</div>
	</div>
	<!-- <div class="modal-footer">
	<button class="btn btn-default" data-dismiss="modal" type="button">Close</button>
	</div> -->
	</div>
	</div>
	</div>

	</div><!-- /.modal -->
	`,
	data:function () {
		return{
            // url:''//父元素传来的请求地址
		}
	},
	props:['geturl'],//父元素传来的请求地址
	methods:{
		close:function () {
			// 关闭的时候让一开始点击的上传按钮的图片路径设置为裁剪的图片
			// $('.avatar-view>img').attr('src',$('.avatar-wrapper>img').attr('src'))
			this.$store.state.photo=false
			// this.photo=false
		}
	},
	mounted:function(){
		var that=this
		
		"use strict"
    	function CropAvatar($element) {//剪裁构造函数
    		this.$container = $element;

    		this.$avatarView = this.$container.find('.avatar-view');
    		this.$avatar = this.$avatarView.find('img');
    		this.$avatarModal = this.$container.find('#avatar-modal');
    		this.$loading = this.$container.find('.loading');

    		this.$avatarForm = this.$avatarModal.find('.avatar-form');
    		this.$avatarUpload = this.$avatarForm.find('.avatar-upload');
    		this.$avatarSrc = this.$avatarForm.find('.avatar-src');
    		this.$avatarData = this.$avatarForm.find('.avatar-data');
    		this.$avatarInput = this.$avatarForm.find('.avatar-input');
    		this.$avatarSave = this.$avatarForm.find('.avatar-save');
    		this.$avatarBtns = this.$avatarForm.find('.avatar-btns');
            this.$submitBtn = this.$avatarForm.find('#submitBtn');
    		this.$avatarWrapper = this.$avatarModal.find('.avatar-wrapper');
    		this.$avatarPreview = this.$avatarModal.find('.avatar-preview');
    		this.init();
    	}
    	CropAvatar.prototype = {//原型
    		constructor: CropAvatar,

    		support: {
    			fileList: !!$('<input type="file">').prop('files'),
    			blobURLs: !!window.URL && URL.createObjectURL,
    			formData: !!window.FormData
    		},

    		init: function () {
    			this.support.datauri = this.support.fileList && this.support.blobURLs;

    			if (!this.support.formData) {
    				this.initIframe();
    			}

    			this.initTooltip();
    			this.initModal();
    			this.addListener();
    		},

    		addListener: function () {//添加监听事件
    			this.$avatarView.on('click', $.proxy(this.click, this));
    			this.$avatarInput.on('change', $.proxy(this.change, this));
    			this.$submitBtn.on('click', $.proxy(this.submit, this));
    			this.$avatarBtns.on('click', $.proxy(this.rotate, this));
    		},

    		initTooltip: function () {//移入input时，在下方显示标题
    			this.$avatarView.tooltip({
    				placement: 'bottom'
    			});
    		},

    		initModal: function () {//初始化弹窗状态->隐藏
    			this.$avatarModal.modal({
    				show: false
    			});
    		},

    		initPreview: function () {//初始化弹窗右侧3张小图
    			var url = this.$avatar.attr('src');
    			this.$avatarPreview.empty().html('<img src="../common/photo/18_32.png">');

    			// this.$avatarPreview.empty().html('<img src="' + url + '">');
    		},

    		initIframe: function () {
    			var target = 'upload-iframe-' + (new Date()).getTime(),
    			$iframe = $('<iframe>').attr({
    				name: target,
    				src: ''
    			}),
    			_this = this;

			      // Ready ifrmae
			      $iframe.one('load', function () {

			        // respond response
			        $iframe.on('load', function () {
			        	var data;

			        	try {
			        		data = $(this).contents().find('body').text();
			        	} catch (e) {
			        		console.log(e.message);
			        	}

			        	if (data) {
			        		try {
			        			data = $.parseJSON(data);
			        		} catch (e) {
			        			console.log(e.message);
			        		}

			        		_this.submitDone(data);
			        	} else {
			        		_this.submitFail('Image upload failed!');
			        	}

			        	_this.submitEnd();

			        });
			    });

		      this.$iframe = $iframe;
		      this.$avatarForm.attr('target', target).after($iframe.hide());
		  },

		  click: function () {//点击input时让模态框显示
		  	 //this.$avatarModal.modal('show');
		  	that.$store.state.photo=true
		  	this.initPreview();
		  },

		  change: function () {
		      //上传头像的input的图片变化事件
		      var files,
		      file;
// console.log(this.$avatarInput)
// return
// if (this.$avatarInput.files[0].size>= 1024 * 1024 * 5 ) {

// 								alert('上传的文件不能超过5M');	
// 								return
// 		} 
		      if (this.support.datauri) {
		      	files = this.$avatarInput.prop('files');
                         
		      	if (files.length > 0) {
		      		file = files[0];
		      		if (this.isImageFile(file)) {
		      			if (this.url) {
		              URL.revokeObjectURL(this.url); // Revoke the old one
		          }

		          this.url = URL.createObjectURL(file);
		          this.startCropper();
		      }
		  }
		} else {
			file = this.$avatarInput.val();

			if (this.isImageFile(file)) {
				this.syncUpload();
			}
		}
		},

		submit: function () {
		      //提交

		      if (!this.$avatarSrc.val() && !this.$avatarInput.val()) {
		      	return false;
		      }

		      if (this.support.formData) {
		      	this.ajaxUpload();
		      	return false;
		      }
		  },

		  rotate: function (e) {
		      //旋转
		      var data;

		      if (this.active) {
		      	 data = {
			      method: $(e.target)[0].getAttribute('data-method'),
			      target: $(e.target)[0].getAttribute('data-target'),
			      option: $(e.target)[0].getAttribute('data-option'),
			      secondOption: $(e.target)[0].getAttribute('data-second-option')
			    };

		      	if (data.method) {
		      		cropper[data.method](data.option, data.secondOption);
		      	}
		      }
		  },

		  isImageFile: function (file) {
		  	if (file.type) {
		  		return /^image\/\w+$/.test(file.type);
		  	} else {
		  		return /\.(jpg|jpeg|png|gif)$/.test(file);
		  	}
		  },

		  startCropper: function () {
		  	var _this = this;
		  	if (this.active) {
		  		cropper['replace'](this.url)
		  	} else {
		  		this.$img = $('<img src="' + this.url + '">');
		  		this.$avatarWrapper.empty().html(this.$img);
		  		var img  = document.querySelector('.avatar-wrapper>img')
		  	 cropper = new Cropper(this.$img[0], {
		          aspectRatio: 1,
		          Number:1,
		  			background:false,
		  			guides:false,
		  			viewMode: 1,
		  			autoCropArea:0.5,
		  			dragMode:'none',//不允许重新创建剪裁框
		  			preview: this.$avatarPreview.selector,
		  			strict: false,

		  			crop: function (data) {
		  				
		  				var json = [
		  				'{"x":' + data.x,
		  				'"y":' + data.y,
		  				'"height":' + data.height,
		  				'"width":' + data.width,
		  				'"rotate":' + data.rotate + '}'
		  				].join();

		  				_this.$avatarData.val(json);
		  			}
		        });
		  		this.active = true;
		  	}
		  },

		  stopCropper: function () {//
		  	if (this.active) {
		  		this.$img.cropper('destroy');
		  		this.$img.remove();
		  		this.active = false;
		  	}
		  },

		  ajaxUpload: function () {
		  	function getRoundedCanvas(sourceCanvas) {
		  		//获取裁剪部分的canvas图像
		        var canvas = document.createElement('canvas');
		        var context = canvas.getContext('2d');
		        var width = sourceCanvas.width;
		        var height = sourceCanvas.height;

		        canvas.width = width;
		        canvas.height = height;

		        context.imageSmoothingEnabled = true;
		        context.drawImage(sourceCanvas, 0, 0, width, height);
		        context.globalCompositeOperation = 'destination-in';
		        context.beginPath();
		        context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
		        context.fill();

		        return canvas;
		    }
		  	var croppedCanvas;
          	var roundedCanvas;
          	var roundedImage;

	        if (!this.active) {
	        	//裁剪对象创建完之前不执行以下
	            return;
	        }

          // 获取裁剪部分的canvas
          croppedCanvas = cropper.getCroppedCanvas();
          roundedCanvas = getRoundedCanvas(croppedCanvas);
          roundedImage = document.createElement('img');
          //获取base64路径
          roundedImage.src = roundedCanvas.toDataURL()
          //挂在页面上
          var result = document.getElementById('canvas');
          result.innerHTML = '';
          result.appendChild(roundedImage);
          //base64转换为blob对象
          var text = window.atob( roundedImage.src .split(",")[1]);
       
          var buffer = new ArrayBuffer(text.length);
          var ubuffer = new Uint8Array(buffer);
          var pecent = 0 , loop = null;

       	  for (var i = 0; i < text.length; i++) {
              ubuffer[i] = text.charCodeAt(i);
          }
	        var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder;
	        var blob;
	        if (Builder) {
	            var builder = new Builder();
	            builder.append(buffer);
	            blob = builder.getBlob(type);
	        } else {
	            blob = new window.Blob([buffer], {type : 'image/png'});
	        }
	        //获取blob对象后压入formdata
            var formdata = new FormData();
       		formdata.append('avatar', blob);
            formdata.append("sessiontoken",sessiontoken);
          	 var url =that.geturl
           // 保存图片的后台接口
	          $.ajax(url, {
			  		type: 'post',
			  		data: formdata,
			  	    dataType: 'json',
			  		processData: false,
			  		contentType: false,

			  		beforeSend: function () {//开始发送时执行的函数->出现loading
			  			//_this.submitStart();
			  		},

			  		success: function (data) {
			  			if(data.status==1){
		                     window.location.reload()
	                    }else if(data.status==0){
	                    	alert(data.results.message)
	                    	 // window.location.reload()
	                    }
			  			
			  		},

			  		error: function (XMLHttpRequest, textStatus, errorThrown) {
			  			//_this.submitFail(textStatus || errorThrown);
			  		},

			  		complete: function () {//发送完成时执行的函数->隐藏loading
			  			//_this.submitEnd();
			  		}
			  	});
		  },
		  syncUpload: function () {
		  	this.$avatarSave.click();
		  },

		  submitStart: function () {//上传开始时的loading，已去除
		  	//this.$loading.fadeIn();
		  },

		  submitDone: function (data) {//请求成功之后的事件
		  	console.log(data);

		  	if ($.isPlainObject(data) && data.state === 200) {
		  		if (data.result) {//请求成功后把外层图片替换
		  			this.url = data.result;

		  			if (this.support.datauri || this.uploaded) {
		  				this.uploaded = false;
		  				this.cropDone();
		  			} else {
		  				this.uploaded = true;
		  				this.$avatarSrc.val(this.url);
		  				this.startCropper();
		  			}

		  			this.$avatarInput.val('');
		  		} else if (data.message) {
		  			this.alert(data.message);
		  		}
		  	} else {
		  		this.alert('Failed to response');
		  	}
		  },

		  submitFail: function (msg) {
		  	this.alert(msg);
		  },

		  submitEnd: function () {//上传结束时隐藏loading，已去除
		  	//this.$loading.fadeOut();
		  },

		  cropDone: function () {
		  	this.$avatarForm.get(0).reset();
		  	this.$avatar.attr('src', this.url);
		  	this.stopCropper();
		  	// this.$avatarModal.modal('hide');
		  	that.$store.state.photo=false
		  },

		  alert: function (msg) {
		  	var $alert = [
		  	'<div class="alert alert-danger avater-alert">',
		  	'<button type="button" class="close" data-dismiss="alert">&times;</button>',
		  	msg,
		  	'</div>'
		  	].join('');

		  	this.$avatarUpload.after($alert);
		  }
		}
		//end prototype
		  $(function () {//创建裁剪对象
		    return new CropAvatar($('#crop-avatar'));
		  });
	}
}
