const account = (() => {

    axios.defaults.baseURL = "";

    const login = () => {

        $("form").on("submit", function () {


            let data=new URLSearchParams();
            data.append("name",$('[name=name]').val());
            data.append("pwd",$('[name=pwd]').val());
            axios({
                url:"/account/login",
                method:"post",
                data:data
            }).then(function (res) {
                if(res.data.code==200){
                    layer.msg(res.data.msg)
                 localStorage.setItem("token",res.data.token);
                 localStorage.setItem("user",JSON.stringify(res.data.data));
                 setTimeout(() => {
                    $(location).attr('href', 'index.html');
                }, 1000);
                }else if(res.data.code==-200){
                    layer.msg(res.data.msg)
                }
              
            })

            return false;

        })

    }


    return {
        login
    }

})()


$(function () {
    account.login();
})