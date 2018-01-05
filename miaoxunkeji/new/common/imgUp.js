// 图片压缩代码区域
  //    用于压缩图片的canvas

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');
    //    瓦片canvas
    var tCanvas = document.createElement("canvas");
    var tctx = tCanvas.getContext("2d");
    var maxsize = 100 * 1024;
     //    使用canvas对大图片进行压缩
    function compress(img) {
      console.log('大图片进行压缩')
        var initSize = img.src.length;
        var width = img.width;
        var height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        var ratio;
        if ((ratio = width * height / 4000000) > 1) {
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
        } else {
            ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
//        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        var count;
        if ((count = width * height / 1000000) > 1) {
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
//            计算每块瓦片的宽和高
            var nw = ~~(width / count);
            var nh = ~~(height / count);
            tCanvas.width = nw;
            tCanvas.height = nh;
            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count; j++) {
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                }
            }
        } else {
            ctx.drawImage(img, 0, 0, width, height);
        }
        //进行最小压缩
        var ndata = canvas.toDataURL('image/jpeg', 0.5);
        console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
    }    
    //    图片上传，将base64的图片转成二进制对象，塞进formdata上传
    function upload(basestr, type) {
      console.log("开始转换fordata")
        var text = window.atob(basestr.split(",")[1]);
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
            blob = new window.Blob([buffer], {type: type});
        }
        // tdate.unshift(blob)
        tdate.push(blob)
        console.log(tdate)
        vm.$store.state.tdate=tdate.length
        // var formdata = new FormData();
        // console.log(blob)
        // formdata2.append('imagefile', blob);
        // console.log(formdata2)
       console.log("转换完成！") 
    }
 /**
     * 获取blob对象的兼容性写法
     * @param buffer
     * @param format
     * @returns {*}
     */
    function getBlob(buffer, format) {
        try {
            return new Blob(buffer, {type: format});
        } catch (e) {
            var bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder);
            buffer.forEach(function(buf) {
                bb.append(buf);
            });
            return bb.getBlob(format);
        }
    }
    /**
     * 获取formdata
     */
    function getFormData() {
        var isNeedShim = ~navigator.userAgent.indexOf('Android')
            && ~navigator.vendor.indexOf('Google')
            && !~navigator.userAgent.indexOf('Chrome')
            && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534;
        return isNeedShim ? new FormDataShim() : new FormData()
    }
    /**
     * formdata 补丁, 给不支持formdata上传blob的android机打补丁
     * @constructor
     */
    function FormDataShim() {
        console.warn('using formdata shim');
        var o = this,
            parts = [],
            boundary = Array(21).join('-') + (+new Date() * (1e16 * Math.random())).toString(36),
            oldSend = XMLHttpRequest.prototype.send;
        this.append = function(name, value, filename) {
            parts.push('--' + boundary + '\r\nContent-Disposition: form-data; name="' + name + '"');
            if (value instanceof Blob) {
                parts.push('; filename="' + (filename || 'blob') + '"\r\nContent-Type: ' + value.type + '\r\n\r\n');
                parts.push(value);
            }
            else {
                parts.push('\r\n\r\n' + value);
            }
            parts.push('\r\n');
        };
        // Override XHR send()
        XMLHttpRequest.prototype.send = function(val) {
            var fr,
                data,
                oXHR = this;
            if (val === o) {
                // Append the final boundary string
                parts.push('--' + boundary + '--\r\n');
                // Create the blob
                data = getBlob(parts);
                // Set up and read the blob into an array to be sent
                fr = new FileReader();
                fr.onload = function() {
                    oldSend.call(oXHR, fr.result);
                };
                fr.onerror = function(err) {
                    throw err;
                };
                fr.readAsArrayBuffer(data);
                // Set the multipart content type and boudary
                this.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
                XMLHttpRequest.prototype.send = oldSend;
            }
            else {
                oldSend.call(this, val);
            }
        };
    }
// 图片压缩代码区域

var tdate=[]
$(function(){
	var delParent;
	var defaults = {
		fileType         : ["jpg","png","PNG","JPG","bmp","BMP","jpeg","JPEG"],   // 上传文件的类型
		fileSize         : 1024 * 1024 * 10                  // 上传文件的大小 10M
	};
		/*点击图片的文本框*/
	$(document).on('change','#file',function(){
   // alert('addss')
		var idFile = $(this).attr("id");
		var file = document.getElementById("file");
		var imgContainer = $(this).parents(".z_photo"); //存放图片的父亲元素
		var fileList = file.files; //获取的图片文件
		// console.log(fileList+"======filelist=====");
		var input = $(this).parent();//文本框的父亲元素
		var imgArr = [];
		//遍历得到的图片文件
		var numUp = imgContainer.find(".up-section").length;
		var totalNum = numUp + fileList.length;  //总的数量
        var bsImg = $('.uploadsimg').length


		if(fileList.length > 9 || totalNum > 9|| (totalNum+bsImg)>9){
			alert("上传图片数目不可以超过9个，请重新选择");  //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
		}
		else if(numUp <= 9){
      // console.log("开始处理上传文件")
			fileList = validateUp(fileList);
			// tdate = fileList
			fileList.forEach(function(file, i) {				 
            var reader = new FileReader();          
//          获取图片大小

          	console.log(fileList[i])
            reader.onload = function() {
               var result = this.result;
               // console.log(fileList[i])
                var img = new Image();
                img.src = result;
              
                //如果图片大小小于100kb，则直接上传
                if (result.length <= maxsize) {
                    img = null;
                    
                    upload(result,fileList[i].type);
                    return;
                }
//      图片加载完毕之后进行压缩，然后上传
                if (img.complete) {
                    callback();
                } else {
                    img.onload = callback;
                }
                function callback() {
                    var data = compress(img);
                    console.log(data)
                    upload(data, fileList[i].type);
                    img = null;
                }
            };
            reader.readAsDataURL(fileList[i]);
     
				// tdate.unshift(fileList[i])
			 var imgUrl = window.URL.createObjectURL(fileList[i]);
			     imgArr.push(imgUrl);
			 var $section = $("<section class='up-section fl loading'>");
			     imgContainer.append($section);//prepend
			 var $span = $("<span class='up-span'>");
			     $span.appendTo($section);
			
		     var $img0 = $("<img class='close-upimg'>").on("click",function(event){

				    event.preventDefault();
					event.stopPropagation();
					$(".works-mask").show();
					delParent = $(this).parent();
                    // 删除输入框的值 ，防止上传后删除图片后再次上传该图片的时候导致上传不了
                    $(".addsfile").val("")
				});   
				$img0.attr("src","../tu-mpz/load2.png").appendTo($section);
		     var $img = $("<img class='up-img up-opcity'>");
		         $img.attr("src",imgArr[i]);
		         $img.appendTo($section);
		     var $p = $("<p class='img-name-p'>");
		         $p.html(fileList[i].name).appendTo($section);
		     var $input = $("<input id='taglocation' name='taglocation' value='' type='hidden'>");
		         $input.appendTo($section);
		     var $input2 = $("<input id='tags' name='tags' value='' type='hidden'/>");
		         $input2.appendTo($section);	

		})
		setTimeout(function(){
             $(".up-section").removeClass("loading");
		 	 $(".up-img").removeClass("up-opcity");
		 	 	// 调整图片的大小
		  var thisImage=$('.up-img')
             // for (var j = 0; j < thisImage.length; j++) {
             //  if($(thisImage[j]).height()>$(thisImage[j]).width()){
             //     $(thisImage[j]).attr("width","100%")
             //  }else if($(thisImage[j]).height()==$(thisImage[j]).width()){
             //     $(thisImage[j]).attr("width","100%")
             //      $(thisImage[j]).attr("height","100%")
             //  }else{
             //    $(thisImage[j]).attr("height","100%")
             //  }
             
             // }
		  },450);
		 numUp = imgContainer.find(".up-section").length;
		if(numUp >= 9){//如果图片大于9张则隐藏上传框
			// $(this).parent().hide();
		}
		//input内容清空
		// $(this).val("");
    console.log('处理上传文件完成')
}

	});
	
	
   
    $(".z_photo").delegate(".close-upimg","click",function(){
     	  $(".works-mask").show();
     	  delParent = $(this).parent();
	});





// 点击 确定删除
$(document).on('click','.wsdel-ok',function(){
		console.log($(delParent).index())
		var delEle = parseInt($(delParent).index())-vm.$store.state.mtjxmm.mu_photo.length//获取当前删除图片的相对下标
        // var delEle = $(delParent).index()//获取当前删除图片的相对下标
		var forlen = tdate.length//获取formdate数组的长度
		var delArr =  delEle //获取需要删除的数组位置
		// 执行删除对应数组位置
		tdate.splice(delArr-1,1)
		console.log(tdate)
    vm.$store.state.tdate=tdate.length
		$(".works-mask").hide();
		var numUp = delParent.siblings().length;
		if(numUp < 10){
			delParent.parent().find(".z_file").show();
		}
		 delParent.remove();
		
	});
	
	$(document).on('click',".wsdel-no",function(){
		$(".works-mask").hide();
	});
   	
		function validateUp(files){
			var arrFiles = [];//替换的文件数组
			for(var i = 0, file; file = files[i]; i++){
				//获取文件上传的后缀名
				var newStr = file.name.split("").reverse().join("");
				if(newStr.split(".")[0] != null){
						var type = newStr.split(".")[0].split("").reverse().join("");
						console.log(type+"===type===");
						if(jQuery.inArray(type, defaults.fileType) > -1){
							// 类型符合，可以上传
							if (file.size >= defaults.fileSize) {
								alert(file.size);
								alert('您这个"'+ file.name +'"文件大小过大');	
							} else {
								// 在这里需要判断当前所有文件中
								arrFiles.push(file);	
							}
						}else{
							alert('您这个"'+ file.name +'"上传类型不符合');	
						}
					}else{
						alert('您这个"'+ file.name +'"没有类型, 无法识别');	
					}
			}
			console.log(arrFiles)
			return arrFiles;
		}	
	
})



//如果图片大于9张则隐藏上传框    270
//如果要限定上传的张数则在这里限制 185
//如果要设置压缩的比例，比例越大图片越清晰   49












