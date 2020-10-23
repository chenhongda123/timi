const load = (function () {

    // let loadHander = () => {
    //     // alert("header页面加载完了,我就被执行了")
    // }


    let loding = () => {
        //ajax  http

        $(".header").load("information.html", function (){

            // loadHander();
        })
        $(".footer").load("information.html", function (){
            // alert("footer页面加载完了,我就被执行了");
        })
    }
    const getList = async () => {
        let res = await $.ajax({
            
        });
   
            }
    const getList1 = () =>{
        let vm = new Vue({
            el: "#louceng",
            //数据
            data: {
                 list: {},
            },
            //加载 把vue挂载到#app后,去请求数据,如同 jq的入口函数
            mounted: async function () {
                 //这个 this 就是 data里的list
                 this.list = await $.ajax({
                      url: "/data/list.json"
                 })
                 console.log(this.list)
            },
            //用于定义方法
            methods: {
  
            }
       });
    }

    let lazy = () =>{
        $(function() {
            $("img.lazy").lazyload({effect: "fadeIn"});
        });
    }

    let run = () => {
        $(".lbt1 ul").append($(".lbt1 ul>li:eq(0)").clone(true));

        for (let i = 0; i < $(".lbt1 ul li").length - 1; i++) {
            $("ol").append(`<li></li>`);
        }
        $(".lbt1 ol li").eq(0).addClass("current");
        let index = 0;
        let dianIndex = 0;
        //自动轮播
        let autoPlay = () => {
            index++;
            dianIndex++
            if (index >= 6) {
                index = 1;
                $(".lbt1 ul").css("left", "0");
            }
            $(".lbt1 ul").animate({ left: index * - 760 })

            if (dianIndex >= 5) {
                dianIndex = 0;
            }
            $("ol>li").eq(dianIndex).addClass("current").siblings().removeClass("current");
        }
        var timer = setInterval(autoPlay, 2000);

        $(".lbt1").on("mouseover", function () {
            clearInterval(timer);
        });

        $(".lbt1").on("mouseout", function () {
            timer = setInterval(autoPlay, 2000);
        });
        
        $(".lbt1").on("click", "ol>li", function () {
            let $index = $(this).index();
            index = dianIndex = $index - 1;
            autoPlay();
            console.log(index)
        })
        $(".right").on("click",function () {
            index++;
            dianIndex++
            if (index >= 6) {
                index = 1;
                $(".lbt1 ul").css("left", "0");
            }
            $(".lbt1 ul").stop().animate({ left: index * - 760 })

            if (dianIndex > 4) {
                dianIndex = 0;
            }
            $("ol>li").eq(dianIndex).addClass("current").siblings().removeClass("current");
        })
        $(".left").on("click",function () {
            index--;
            dianIndex--;
            console.log(index)
            if (index <0) {
                index = 4;
                $(".lbt1 ul").css("left", "-3800px");
            }
            $(".lbt1 ul").stop().animate({ left: index *  -760 })

            if (dianIndex < 0) {
                dianIndex = 4;
            }
            $("ol>li").eq(dianIndex).addClass("current").siblings().removeClass("current");
        })
    }

    let tab = () =>{
        
            $(".tab").find(".tab-item").mouseenter(function () {
                $(this).addClass("a").siblings().removeClass("a");
                let $index = $(this).index()
                $(".tab_con div").eq($index).addClass("selected").siblings().removeClass("selected")
            })
            
            $(".bus_conTop").find("li").mouseenter(function(){
                $(this).addClass("xuanze1").siblings().removeClass("xuanze1");
                let $index2 = $(this).index()
                $(".bus_conBotX").eq($index2).addClass("xuanze").siblings().removeClass("xuanze")
            })
        
    }

    let lc = () =>{
        var oNav = $('#LoutiNav');//导航壳
		   var aNav = oNav.find('li');//导航
		   var aDiv = $('#louceng .lc');//楼层
			$(window).scroll(function(){
				 var winH = $(window).height();//可视窗口高度
				 var iTop = $(window).scrollTop();//鼠标滚动的距离
				 
				 if(iTop>=$('.toutou').height()&&iTop<=$('.zonggong').height()){
				 	oNav.fadeIn();
				 //鼠标滑动式改变	
				 aDiv.each(function(){
				 	if(winH+iTop - $(this).offset().top>winH*2/3){
				 		aNav.removeClass('active');
				 		aNav.eq($(this).index()).addClass('active');
				 	}
				 })
				 }else{
				 	oNav.fadeOut();
				 }
			})
			//点击回到当前楼层
			aNav.click(function(){
				var t = aDiv.eq($(this).index()).offset().top;
				$('body,html').stop().animate({"scrollTop":t},1000);
				$(this).addClass('active').siblings().removeClass('active');
			});
    }
    let gg = () =>{
        $(function(){
            $(".coupletbox").clonefn({
               cloneto:false,
               initial:"top", 
               closeBtn:".closeBtn",
               speed:800,
               easing:"easeInOutBack",
               zIndex:10000000000000 
          });
        });
    }
    return {
        loding,
        run,
        lazy,
        tab,
        getList,
        getList1,
        lc,
        gg
    }
})();


$(function () {
    load.loding();
    load.run();
    load.lazy();
    load.tab();
    load.getList();
    load.getList1();
    load.lc();
    load.gg();


})


