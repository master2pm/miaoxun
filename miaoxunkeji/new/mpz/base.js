//当vue识别到当前路由路径为某项时，显示某项对应的组件
//当路由路径为foo时，显示Foo组件
const routes = [{
        path: '/nompc',
        component: nompc,
		redirect:'/nompc/begin1',
        children: [
			{
                path: '/nompc/begin1',//1.没有 建立苗场的开始建立按钮所在页面
                component: begin1,
				name:"begin1"
            },
			{
				path:'/nompc/concact2',//2.没有 您的苗圃场名称与联系方式是什么？
				component:concact2,
				name:'concact2'
			},
			{
				path:'/nompc/where3',//3.没有 您的苗圃场位于什么地方？
				component:where3,
				name:'where3'
			},
			{
				path:'/nompc/ditu4',//4.没有 请手动设置苗圃场定位
				component:ditu4,
				name:'ditu4'
			},
			{
				path:'/nompc/finish5',//5.没有 我们现在就开始。
				component:finish5,
				name:'finish5'
			}


        ]
    },
    {path: '/',redirect:'/nompc'},
    {path: '/hasmpc',redirect:'/hasmpc/:name/:objectId/tjxmm/1'},

	{
		path: '/hasmpc/:name/:objectId',
        component: hasmpc,
		name:'hasmpc',
		redirect:'/hasmpc/:name/:objectId/tjxmm/1',
        children: [
			{
                path: '/hasmpc/:name/:objectId/tjxmm/:biaoti',//1.有 添加新苗木
                component: tjxmm,
				name:"tjxmm",
                redirect:'/hasmpc/:name/:objectId/tjxmm/:biaoti/:status/adds',
                children:[
                   {
                         path: '/hasmpc/:name/:objectId/tjxmm/:biaoti/:status/adds',//01 您打算添加什么苗木到您的苗圃场？
                        component:adds,
                        name:"adds"
                        // redirect:'/hasmpc/:name/:objectId/tjxmm/:biaoti/infor1'
                    }
                 // {
                 //         path: '/hasmpc/:name/:objectId/tjxmm/:biaoti/transPage',//01 您打算添加什么苗木到您的苗圃场？
                 //        component:transPage,
                 //        name:"transPage"
                 //        // redirect:'/hasmpc/:name/:objectId/tjxmm/:biaoti/infor1'
                 //    },
                 //   {
                 //         path: '/hasmpc/:name/:objectId/tjxmm/:biaoti/infor1',//01 您打算添加什么苗木到您的苗圃场？
                 //        component: infor1,
                 //        name:"infor1"
                 //    },
                 //    {
                 //         path: '/hasmpc/:name/:objectId/tjxmm/:biaoti/size2s',//02 苗木是什么规格的？盆苗
                 //        component: size2s,
                 //        name:"size2s"
                 //    },
                 //    {
                 //         path: '/hasmpc/:name/:objectId/tjxmm/:biaoti/size2d',//02 苗木是什么规格的？其他三个苗
                 //        component: size2d,
                 //        name:"size2d"
                 //    },
                 //    {
                 //         path: '/hasmpc/:name/:objectId/tjxmm/:biaoti/load3',//03 请下载手机应用，并拍摄苗木照片
                 //        component: load3,
                 //        name:"load3"
                 //    },
                 //    {
                 //         path: '/hasmpc/:name/:objectId/tjxmm/:biaoti/price4/:lat/:log',//04 请填写苗木的价格与库存
                 //        component: price4,
                 //        name:"price4"
                 //    }
                   
                ]
            },
			{
				path:'/hasmpc/:name/:objectId/qbmm/:biaoti',//2.有 全部苗木
				component:qbmm,
				name:'qbmm'
			},      
                       {
                        path: '/hasmpc/:name/:objectId/:biaoti/infor1/:tjId/:status',//01 您打算添加什么苗木到您的苗圃场？
                        component: adds,
                        name:"adds1"
                    },
                    // {
                    //     path: '/hasmpc/:name/:objectId/:biaoti/infor1/:tjId',//01 您打算添加什么苗木到您的苗圃场？
                    //     component: infor1,
                    //     name:"infor11"
                    // },
                    // {
                    //      path: '/hasmpc/:name/:objectId/:biaoti/size2s/:tjId',//02 苗木是什么规格的？盆苗
                    //     component: size2s,
                    //     name:"size22"
                    // },
                    // {
                    //      path: '/hasmpc/:name/:objectId/:biaoti/size2d/:tjId',//02 苗木是什么规格的？其他三个苗
                    //     component: size2d,
                    //     name:"size23"
                    // },
                    // {
                    //      path: '/hasmpc/:name/:objectId/:biaoti/load3/:tjId',//03 请下载手机应用，并拍摄苗木照片
                    //     component: load3,
                    //     name:"load33"
                    // },
                    // {
                    //      path: '/hasmpc/:name/:objectId/:biaoti/price4/:tjId/:log/:lat',//04 请填写苗木的价格与库存
                    //     component: price4,
                    //     name:"price44"
                    // },


			{
				path:'/hasmpc/:name/:objectId/yfb/:biaoti',//3.有 已发布
				component:yfb,
				name:'yfb'
			},
			{
				path:'/hasmpc/:name/:objectId/wfb/:biaoti',//4.有 未发布
				component:wfb,
				name:'wfb'
			}
            // {
            //     path:'/hasmpc/:name/:objectId/infor1/:treeId/:biaoti',//4.有 未发布
            //     component:infor1,
            //     name:'wfbadd'
            // }


        ]
	},
// 添加苗圃场
    {
        path: '/addmpc/:groundId/:name',
        component: addmpc,
        name:'addmpc',
        redirect:'/addmpc/ones/:groundId/:name',
        children: [
            {
                path: '/addmpc/ones/:groundId/:name',//1.有 添加新苗木
                component: ones,
                name:"ones"                          
            },
            {
                path: '/addmpc/twos/:groundId/:name',//1.有 添加新苗木
                component: twos,
                name:"twos"                          
            }


        ]
    },
// 修改苗圃场
    {
        path: '/modifympc/:groundId/:name',
        component: modifympc,
        name:'modifympc',
        redirect:'/modifympc/:groundId/modify/:name',
        children:[
             
    {// 修改苗圃场
        path: '/modifympc/:groundId/modify/:name',
        component:modify,
        name:'modify'
        
    },
    {// 修改苗圃场跳到地图
        path: '/modifympc/:groundId/ditu/:name',
        component:ditu,
        name:'ditu'
    }

        ]
        
    },

]
//创建路由实例，保存在router中
const router = new VueRouter({
    routes: routes
})
// 改变导航栏的颜色
// router.beforeEach((to, from, next) => {
// 	var that=this
//       // 导航钩子，全局钩子
//        if(to.path.indexOf("hasmpc")!=-1){
		  
// 		   console.log('卖家端黑色导航栏')
// 		    store.state.header='hei'
// 		//    setTimeout(function(){
// 		// 	      $(".header_heishe").addClass("heibg")
// 		// 		   $(".header_heishe").addClass("heizt")
// 		// 		    $(".header_heishe").removeClass("bai")
// 		// 		   $(".header_heishe").removeClass("c49494B")
               
// 		//    },10)
				   
// 		}else{
// 			 store.state.header='bai'
// 			 console.log('买家端白色导航栏')
// 		// 	  setTimeout(function(){
// 		// 	     $(".header_heishe").removeClass("heibg")
// 		// 		   $(".header_heishe").removeClass("heizt")
// 		// 		   $(".header_heishe").addClass("c49494B")
// 		// 		   $(".header_heishe").addClass("bai")
				  
// 		//    },10)
				  
// 		}  
// 			   next()  
// })

//创建vue实例，组件的创建应该在vue创建之前
var vm = new Vue({
    el: '.containers',
    data: {

        // sessiontoken: ''
    },
    //在创建vue实例时，引入路由
    router: router,
    store: store,
    // 封装的模板标签
    components: {
        'nompc': nompc,//没有建立苗场的顶栏样式
        "message":message
    },
    methods: {
        // 保存方法
        saves: function(e) {
            var that = this

            if (this.states == false && this.dangqian == 'qbmm2' || this.states == false && this.dangqian == 'yfb3' || this.states == false && this.dangqian == 'wfb4' || this.dangqian == 'tjxmm') {
                var formData = new FormData();
                if (this.$store.state.mu_name != '') {
                    formData.append("mu_name", this.$store.state.mu_name);
                }

                if (this.$store.state.mu_type != '') {
                    formData.append("mu_type", this.$store.state.mu_type);
                }


                if (this.$store.state.mu_j_min != '') {
                    formData.append("mu_j_min", parseFloat(this.$store.state.mu_j_min));
                }
                if (this.$store.state.mu_j_max != '') {
                    formData.append("mu_j_max", parseFloat(this.$store.state.mu_j_max));
                }


                if (this.$store.state.mu_zg_min != '') {
                    formData.append("mu_zg_min", parseFloat(this.$store.state.mu_zg_min));
                }
                if (this.$store.state.mu_zg_max != '') {
                    formData.append("mu_zg_max", parseFloat(this.$store.state.mu_zg_max));
                }


                if (this.$store.state.mu_gf_min != '') {
                    formData.append("mu_gf_min", parseFloat(this.$store.state.mu_gf_min));
                }
                if (this.$store.state.mu_gf_max != '') {
                    formData.append("mu_gf_max", parseFloat(this.$store.state.mu_gf_max));
                }


                if (this.$store.state.mu_dj_min != '') {
                    formData.append("mu_dj_min", parseFloat(this.$store.state.mu_dj_min));
                }
                if (this.$store.state.mu_dj_max != '') {
                    formData.append("mu_dj_max", parseFloat(this.$store.state.mu_dj_max));
                }


                if (this.$store.state.mu_rg_min != '') {
                    formData.append("mu_rg_min", parseFloat(this.$store.state.mu_rg_min));
                }
                if (this.$store.state.mu_rg_max != '') {
                    formData.append("mu_rg_max", parseFloat(this.$store.state.mu_rg_max));
                }


                if (this.$store.state.mu_address != '') {
                    formData.append("mu_address", this.$store.state.mu_address);
                }

                if (this.$store.state.mu_city != '') {
                    formData.append("mu_city", this.$store.state.mu_city);
                }

                if (this.$store.state.mu_province != '') {
                    formData.append("mu_province", this.$store.state.mu_province);
                }

                if (this.$store.state.mu_country != '') {
                    formData.append("mu_country", this.$store.state.mu_country);
                }
                if (this.$store.state.mu_company != '') {
                    formData.append("mu_company_name", this.$store.state.mu_company);
                }

                if (this.$store.state.mu_price != '') {
                    formData.append("mu_price", this.$store.state.mu_price);
                }

                if (this.$store.state.mu_stock != '') {
                    formData.append("mu_stock", this.$store.state.mu_stock);
                }

                if (this.$store.state.mu_discount_count != '') {
                    formData.append("mu_discount_count", this.$store.state.mu_discount_count);
                }

                if (this.$store.state.mu_discount != '') {
                    formData.append("mu_discount", this.$store.state.mu_discount * 0.01);
                }

                if (this.$store.state.mu_coordinate_lat != '') {
                    console.log(this.$store.state.mu_coordinate_lat)
                    formData.append("mu_coordinate_lat", this.$store.state.mu_coordinate_lat);
                }

                if (this.$store.state.mu_coordinate_lng != '') {
                    console.log(this.$store.state.mu_coordinate_lng)
                    formData.append("mu_coordinate_lng", this.$store.state.mu_coordinate_lng);
                }

                if (sessiontoken != '') {
                    formData.append("sessiontoken",sessiontoken);
                }
                // 判断是添加新苗木还是其他三个页面
                if (that.dangqian == 'tjxmm') {
                    if (that.$store.state.objectIds != '') {
                        formData.append("objectId", that.$store.state.objectIds);
                    }
                } else {
                    formData.append("objectId", that.$store.state.objectId);
                }
                //alert(this.$store.state.mu_discount*0.1)
                console.log(formData)
                jQuery.ajax({
                        url: Boss+"tree",
                        type: "POST",
                        processData: false,
                        contentType: false,
                        data: formData,
                    })
                    .done(function(data, textStatus, jqXHR) {
                        console.log("HTTP Request Succeeded: " + jqXHR.status);
                        console.log(data);
                        // 添加新苗木的时候保存id
                        if (that.dangqian == 'tjxmm') {
                            that.$store.state.objectIds = data.results.objectId
                        }


                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        console.log("HTTP Request Failed");
                    })
                    .always(function() {});
            }

        },
        tck_yulans: function(e, states, objectId, index, ss) {
            scrollTop = document.body.scrollTop
            // alert(scrollTop)
            document.body.scrollTop = 0
            var that = this
            console.log(ss)
            that.$store.state.objectId = objectId
            if (ss == 'data_qbmm2') {
                var ss = that.$store.state.data_qbmm2[index]
                that.$store.state.qbmm2_show = false
            } else if (ss == 'data_yfb3') {
                var ss = that.$store.state.data_yfb3[index]
                that.$store.state.yfb3_show = false
            } else if (ss == 'data_wfb4') {
                var ss = that.$store.state.data_wfb4[index]
                that.$store.state.wfb4_show = false
            }
            console.log(ss)

            that.$store.state.mu_name = ss.mu_name //苗木名称
            that.$store.state.mu_type = ss.mu_type //苗木类型（种植情况）
            that.$store.state.mu_mjs = ss.mu_j_min //米径
            if (ss.mu_j_max != ss.mu_j_min) {
                that.$store.state.mu_mjs = ss.mu_j_min + '-' + ss.mu_j_max //米径
            }
            that.$store.state.mu_zgs = ss.mu_zg_min //自然高
            if (ss.mu_zg_max != ss.mu_zg_min) {
                // alert(ss.mu_zg_max,ss.mu_zg_min)
                // console.log(ss.mu_zg_max,ss.mu_zg_min)
                that.$store.state.mu_zgs = ss.mu_zg_min + '-' + ss.mu_zg_max //米径
            }
            that.$store.state.mu_gfs = ss.mu_gf_min //冠福
            if (ss.mu_gf_max != ss.mu_gf_min) {
                that.$store.state.mu_gfs = ss.mu_gf_min + '-' + ss.mu_gf_max //米径
            }
            that.$store.state.mu_djs = ss.mu_dj_min //地径
            if (ss.mu_dj_max != ss.mu_dj_min) {
                that.$store.state.mu_djs = ss.mu_dj_min + '-' + ss.mu_dj_max //米径
            }
            that.$store.state.mu_rgs = ss.mu_rg_min //肉径
            if (ss.mu_rg_max != ss.mu_rg_min) {
                that.$store.state.mu_rgs = ss.mu_rg_min + '-' + ss.mu_rg_max //米径
            }
            // 如果公司名字为空则取苗圃主的公司，否则取该苗木的公司
            if (ss.mu_company_name == '') {
                that.$store.state.mu_company = that.$store.state.data_grzl.company_name
            } else {
                that.$store.state.mu_company = ss.mu_company_name
            }

            that.$store.state.mu_country = ss.mu_country
            that.$store.state.mu_city = ss.mu_city
            that.$store.state.mu_province = ss.mu_province
            that.$store.state.mu_address = ss.mu_address
            // alert(that.$store.state.mu_address)
            //alert(that.$store.state.mu_address)
            that.$store.state.mu_photo = ss.mu_photo //照片
            that.$store.state.mu_price = ss.mu_price //价格
            that.$store.state.mu_stock = ss.mu_stock //库存
            that.$store.state.mu_discount_count = ss.mu_discount_count //折扣数量
            that.$store.state.mu_discount = ss.mu_discount //折扣百分比，如 1%= 0.01
            that.$store.state.mu_coordinate_lat = ss.mu_coordinate.latitude //经度
            that.$store.state.mu_coordinate_lng = ss.mu_coordinate.longitude //纬度





        },
        go: function(e) {
            this.$router.push(e)
            // this.idx
        },
        qiehuan1: function(n) {
            var that = this
            this.idx = n;
            // 切换的时候让弹出窗口进行关闭
            this.open = false
            console.log(this.dangqian)
            if (n == "0") {
                if (this.dangqian == "tjxmm") {
                    // 当前处于添加新苗木的时候再次点击添加新苗木的时候  不做处理
                } else {

                    that.$store.state.objectIds = ''
                    // 否则说明当前处于其他页面然后点击添加新苗木切换过来的  将内容清空以及拿到公司的基本资料赋值

                    that.$store.state.mu_name = "" //苗木名称
                    that.$store.state.mu_type = "" //苗木类型（种植情况）
                    that.$store.state.mu_mjs = "" //米径
                    that.$store.state.mu_zgs = "" //自然高
                    that.$store.state.mu_gfs = "" //冠福
                    that.$store.state.mu_djs = "" //地径
                    that.$store.state.mu_rgs = "" //肉径

                    that.$store.state.mu_company = that.$store.state.data_grzl.company_name
                    that.$store.state.mu_country = that.$store.state.data_grzl.country
                    that.$store.state.mu_city = that.$store.state.data_grzl.city
                    that.$store.state.mu_province = that.$store.state.data_grzl.province
                    that.$store.state.mu_address = that.$store.state.data_grzl.address
                    that.$store.state.mu_coordinate_lat = that.$store.state.data_grzl.point.latitude //经度
                    that.$store.state.mu_coordinate_lng = that.$store.state.data_grzl.point.longitude //纬度

                    that.$store.state.mu_price = "" //价格
                    that.$store.state.mu_stock = "" //库存
                    that.$store.state.mu_discount_count = "" //折扣数量
                    that.$store.state.mu_discount = "" //折扣百分比，如 1%= 0.01
                    document.body.scrollTop = 0
                }
                this.dangqian = 'tjxmm'
                this.states = false //当前为添加新苗木的时候页面可编辑为1

                that.$store.state.pages_qbmm2 = 1
                that.$store.state.pages_yfb3 = 1
                that.$store.state.pages_wfb4 = 1
            } else if (n == "1") {
                // this.dangqian='qbmm2'
                if (this.dangqian == 'qbmm2') {
                    return
                } else {
                    this.dangqian = 'qbmm2'
                    document.body.scrollTop = 0
                }

                //that.$store.state.pages_qbmm2=1
                //alert(1)
            } else if (n == "2") {
                // this.dangqian='yfb3'
                if (this.dangqian == 'yfb3') {
                    this.open = true
                    return
                } else {
                    this.dangqian = 'yfb3'
                    document.body.scrollTop = 0
                }

                //that.$store.state.pages_yfb3=1
            } else if (n == "3") {
                // this.dangqian='wfb4'
                if (this.dangqian == 'wfb4') {
                    return
                } else {
                    this.dangqian = 'wfb4'
                    document.body.scrollTop = 0
                }

                //that.$store.state.pages_wfb4=1
            } else if (n == "4") {
                document.body.scrollTop = 0
                this.dangqian = 'tpkj5'
                that.$store.state.pages_qbmm2 = 1
                that.$store.state.pages_yfb3 = 1
                that.$store.state.pages_wfb4 = 1
            }

            that.$store.state.qbmm2_show = true //控制显示和隐藏
            that.$store.state.yfb3_show = true //控制显示和隐藏
            that.$store.state.wfb4_show = true //控制显示和隐藏

            this.yulan = false

        },
        // 关闭已发布的阅览窗口
        close_yfb: function() {
            this.open = false;
            var that = this
            that.$store.state.qbmm2_show = true //控制显示和隐藏
            that.$store.state.yfb3_show = true //控制显示和隐藏
            that.$store.state.wfb4_show = true //控制显示和隐藏
        },
        // 3个预览弹出框左边标题栏的切换事件
        li: function(e, item) {
            this.ss = $(e.currentTarget).index()
            // alert($(e.currentTarget).index())
            // $(e.currentTarget).parent().find("li").removeClass("bg")
            // $(e.currentTarget).addClass("bg")
            if (item == "base") {
                this.zuobian = 1
            } else if (item == "adress") {
                this.zuobian = 2
            } else if (item == "picture") {
                this.zuobian = 3
            } else if (item == "price") {
                this.zuobian = 4
            } else if (item == "discount") {
                this.zuobian = 5
            }
        },
        // 3个预览弹出框的顶部返回按钮
        fanhui: function() {
            //scrollTop=document.body.scrollTop
            // alert(scrollTop)

            var that = this
            that.$store.state.qbmm2_show = true //控制显示和隐藏
            that.$store.state.yfb3_show = true //控制显示和隐藏
            that.$store.state.wfb4_show = true //控制显示和隐藏
            if (this.dangqian == 'qbmm2') {
                $.get("/user/tree", {
                    "sessiontoken":sessiontoken,
                    "limit": that.$store.state.limit,
                    "page": that.$store.state.pages_qbmm2
                    // "status":'-1',
                }, function(data) {
                    // 保存全部的总数pages_qbmm22  第几页到第几页
                    that.$store.state.pages_qbmm22 = data.results.count
                    // if(data.status==0){
                    //         return
                    // }
                    if (data.results.data.length > 0) {
                        that.$store.state.pages_qbmm20 = (that.$store.state.pages_qbmm2 - 1) * 20 + 1
                        that.$store.state.pages_qbmm21 = (that.$store.state.pages_qbmm2 - 1) * 20 + data.results.data.length
                    }
                    // that.data_qbmm2=data.results.data
                    that.$store.state.data_qbmm2 = data.results.data
                })
            } else if (this.dangqian == 'yfb3') {
                $.get(Boss+"user/tree", {
                    "sessiontoken":sessiontoken,
                    "limit": that.$store.state.limit,
                    "page": that.$store.state.pages_yfb3,
                    "ispublish": '1' //已发布
                }, function(data) {
                    // 保存全部的总数pages_yfb32  第几页到第几页
                    that.$store.state.pages_yfb32 = data.results.count
                    if (data.results.data.length > 0) {
                        that.$store.state.pages_yfb30 = (that.$store.state.pages_yfb3 - 1) * 20 + 1
                        that.$store.state.pages_yfb31 = (that.$store.state.pages_yfb3 - 1) * 20 + data.results.data.length
                    }
                    // that.data_yfb3=data.results.data
                    that.$store.state.data_yfb3 = data.results.data
                })
            } else if (this.dangqian == 'wfb4') {
                $.get(Boss+"user/tree", {
                    "sessiontoken":sessiontoken,
                    "limit": that.$store.state.limit,
                    "page": that.$store.state.pages_wfb4,
                    "ispublish": '0' //未发布
                }, function(data) {
                    // 保存全部的总数pages_wfb42  第几页到第几页
                    that.$store.state.pages_wfb42 = data.results.count
                    if (data.results.data.length > 0) {
                        that.$store.state.pages_wfb40 = (that.$store.state.pages_wfb4 - 1) * 20 + 1
                        that.$store.state.pages_wfb41 = (that.$store.state.pages_wfb4 - 1) * 20 + data.results.data.length
                    }
                    // that.data_wfb4=data.results.data
                    that.$store.state.data_wfb4 = data.results.data
                })
            }


            this.yulan = false
            setTimeout(function() {
                document.body.scrollTop = scrollTop
                //alert(document.body.scrollTop)
            }, 10)

        },
        // 3个预览弹出框的顶部预览苗按钮
        fangda() {

        },
        // 调整图片大小的方法
        // 调整图片大小的
        adjust: function(e) {
            //获取容器宽高
            var pwidth = $(e.currentTarget).parent().width()
            var pheight = $(e.currentTarget).parent().height()
            //获取图片实际宽高
            var width = $(e.currentTarget).width()
            var height = $(e.currentTarget).height()
            //获取实际宽高比例
            var kgb = width / height
            var gkb = height / width
            console.log(width, height, pwidth, pheight)
            //修正图片宽高 多加了==
            if (width < height || width == height) {
                $(e.currentTarget).css('width', pwidth + 'px')
                var xzg = pwidth / kgb
                $(e.currentTarget).css('height', xzg + 'px')
                console.log('取宽')
            } else {
                $(e.currentTarget).css('height', pheight + 'px')
                var xzk = pheight * kgb
                $(e.currentTarget).css('width', xzk + 'px')
                console.log('取高')
            }
        },
        // 更改苗木状态
        publish: function(e, objectId, status, dangqian) {
            // 让弹出框消失并且做对应的事件

            var that = this
            // 1.未发布的时候点击发布让他变审核中1
            if (status == "0") {
                status = "1"
                // status="2"
            } else if (status == "2") {
                // 2.已发布的时候点击取消发布让他变未发布0
                status = "0"
            } else if (status == "1") {
                // 3.审核中的时候点击取消审核让他变未发布0
                status = "0"
            }
            $.post(Boss+"tree/" + objectId + "/publish", {
                "status": status,
                "sessiontoken":sessiontoken
            }, function(data) {
                console.log(data)
                console.log(dangqian)
                console.log("dangqianshinage")
                // 重新请求当前的数据data
                if (dangqian == 'qbmm2') {
                    $.get(Boss + "user/tree", {
                        "sessiontoken":sessiontoken,
                        "limit": that.$store.state.limit,
                        "page": that.$store.state.pages_qbmm2,
                        // "status":'-1',包括所有状态
                    }, function(data) {
                        //console.log(qbmm2)
                        // 保存全部的总数pages_qbmm22  第几页到第几页
                        that.$store.state.pages_qbmm22 = data.results.count
                        if (data.results.data.length > 0) {
                            that.$store.state.pages_qbmm20 = (that.$store.state.pages_qbmm2 - 1) * 20 + 1
                            that.$store.state.pages_qbmm21 = (that.$store.state.pages_qbmm2 - 1) * 20 + data.results.data.length
                        }

                        that.$store.state.data_qbmm2 = data.results.data
                        console.log("qbmm2")
                    })
                } else if (dangqian == 'yfb3') {
                    $.get(Boss + "user/tree", {
                        "sessiontoken":sessiontoken,
                        "limit": that.$store.state.limit,
                        "page": that.$store.state.pages_yfb3,
                        "ispublish": "1" //已发布
                    }, function(data) {
                        console.log(data)
                        // 保存全部的总数pages_yfb32  第几页到第几页
                        that.$store.state.pages_yfb32 = data.results.count
                        if (data.results.data.length > 0) {
                            that.$store.state.pages_yfb30 = (that.$store.state.pages_yfb3 - 1) * 20 + 1
                            that.$store.state.pages_yfb31 = (that.$store.state.pages_yfb3 - 1) * 20 + data.results.data.length
                        }
                        //that.data_yfb3=data.results.data
                        that.$store.state.data_yfb3 = data.results.data
                        console.log("yfb3")
                    })
                } else if (dangqian == 'wfb4') {
                    $.get(Boss + "user/tree", {
                        "sessiontoken":sessiontoken,
                        "limit": that.$store.state.limit,
                        "page": that.$store.state.pages_wfb4,
                        "ispublish": "0" //未发布，审核中，审核不通过
                    }, function(data) {
                        console.log(data)
                        // 保存全部的总数pages_wfb42  第几页到第几页
                        that.$store.state.pages_wfb42 = data.results.count
                        if (data.results.data.length > 0) {
                            that.$store.state.pages_wfb40 = (that.$store.state.pages_wfb4 - 1) * 20 + 1
                            that.$store.state.pages_wfb41 = (that.$store.state.pages_wfb4 - 1) * 20 + data.results.data.length
                        }
                        //that.data_wfb4=data.results.data
                        that.$store.state.data_wfb4 = data.results.data
                        console.log("wfb4")
                    })
                }

            })
            $(e.currentTarget).parent().parent().css("display", "none")
        },
        // 鼠标放上已发布的苗圃中的商品列表的时候让mu_photo进行更新
        bian: function(data) {
            this.$store.state.mu_photo = data
        }
    },
    mounted: function() {
        // var user = window.localStorage
        // if (user.getItem('user_id') != null) {
        //     this.sessiontoken = user.getItem('user_id');

        // }
        var adc = this.$route.path.split('/')[1]
        switch (adc) {
            case 'tjxmm':
                this.idx = 0
                this.dangqian = 'tjxmm'
                break;
            case 'qbmm2':
                this.idx = 1
                this.dangqian = 'qbmm2'
                break;
            case 'yfb3':
                this.idx = 2
                this.dangqian = 'yfb3'
                break;
            case 'wfb4':
                this.idx = 3
                this.dangqian = 'wfb4'
                break;
            case 'tpkj':
                this.idx = 4
                break;
        }
    }

})