axios.defaults.baseURL = "";
    //请求拦截
    axios.interceptors.request.use(function (config) {
        config.headers.token=localStorage.getItem("token");
        return config;
    })
    function getUrlParam (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]); return null;
    }
    let a = getUrlParam('id')
    console.log(a)
    axios({
        url: "goods/goodsById?id=" + a
    }).then(function (res) {
        console.log(res)

        $("#smallImg .ximg").attr("src", "/" + res.data.img);
        $("#bigArea #bigImg").attr("src", "/" + res.data.img);
        $(".b_conBotL .xiaotu").attr("src", "/" + res.data.img);
        $(".danjia").text(res.data.price);
        $(".danjia1").text(res.data.price);
        $(".biaozhun .biaozhunjia1").text(res.data.biaozhunjia1);
        $(".biaozhun .biaozhunjia2").text(res.data.biaozhunjia2);
        //往加入购物的按钮上藏了一个对象 (就是当前产品相关信息)
        $("#addCart").data("info", res.data)
        
    })


    $(function () {
        $(".jianjian").on("click", function () {
            if ($(this).next().val() == 1) {
                return;
            }
            $(this).next().val($(this).next().val() - 1);
            totalROW(this)
        })
        $(".jiajia").on("click", function () {

            $(this).prev().val(Number($(this).prev().val()) + 1);
            totalROW(this)
        })
        function totalROW(obj) {
            let num = $("#num").val();
            let price = $(".danjia1").text();
            $(".hejijiage").text(parseInt(num * price));
            

        }
        

        $("#addCart").on("click", function () {

            // request.Info.u_id,
            //     request.body.pid,
            //     request.body.pname,
            //     request.body.pimg,
            //     request.body.pnumber,
            //     request.body.pprice,

            //购买人的id
            let uId = JSON.parse(localStorage.getItem("user") || '{}').u_id;
            //取当年存的值
            let pId = $("#addCart").data("info").id;
            console.log(pId)
            let pName = $("#addCart").data("info").pname;
            let img = $("#addCart").data("info").img;
            let pPrice = $("#addCart").data("info").price;
            let pNumber = $("#num").val();




            let data = new URLSearchParams();
            // data.append('u_id', uId);
            data.append('pid', pId);
            data.append('pname', pName);
            data.append('pimg', img);
            data.append('pnumber', pNumber);
            data.append('pprice', pPrice);

            axios({
                url: "/cart/addCart",
                method: "post",
                data: data
            }).then(function (res) {
                layer.msg(res.data.msg);
                if(res.data.code==-200){
                    setTimeout(() => {
                        $(location).attr('href', 'login.html');
                    }, 1000);
    
                }
            })


        })

    })