$(window).on("load", function () {

    let $smallImg = $("#smallImg");//小图
    let $smallArea = $("#smallArea");//小区域
    let $bigArea = $("#bigArea");//大区域
    let $bigImg = $("#bigImg");//大图

    $smallArea.css("height", ($smallImg.height() / $bigImg.height()) * $bigArea.height());
    $smallArea.css("width", ($smallImg.width() / $bigImg.width()) * $bigArea.width())


    $("#smallImg").on("mouseover", function () {
        $("#smallArea").show();
        $('#bigArea').show();

        $(document).on("mousemove", function (evt) {
            var mX = evt.pageX - $($smallImg).position().left;
            var mY = evt.pageY - $($smallImg).position().top;

            let mLeft = mX - $("#smallArea").width() / 2;
            let mTop = mY - $("#smallArea").height() / 2;
            if (mLeft <= 0) {
                mLeft = 0;
            }

            if (mLeft > $("#smallImg").width() - $smallArea.width()) {
                mLeft = $("#smallImg").width() - $smallArea.width();
            }
            if (mTop <= 0) {
                mTop = 0;
            }
            if (mTop > $("#smallImg").height() - $smallArea.height()) {
                mTop = $("#smallImg").height() - $smallArea.height();
            }

            $("#smallArea").css("left", mLeft);
            $("#smallArea").css("top", mTop);

            //计算出移动比例
            let score = $bigImg.height() / $smallImg.height();
           $bigImg.css("left",-score*mLeft) 
           $bigImg.css("top",-score*mTop)
        })


    }).on("mouseout", function () {
        $("#smallArea").hide();
        $('#bigArea').hide()
    })
})