$(function() {

    /* 박스들 순차 애니메이션  */
    $("#content > div.manager").css({"opacity" : 1, "transform" : "translateY(0)"});
    $("#content > div.customer").css({"opacity" : 1, "transform" : "translateY(0)"});
    $("#content > div.partner").css({"opacity" : 1, "transform" : "translateY(0)"});

    /*--------------------------------------------------------
        상단 메뉴 마우스 오버 시 아이콘 및 글자 색상 변경
    ---------------------------------------------------------*/
    var n = 0;    // 메뉴 인덱스 변수
    $("#menu li").hover(
        function() {
            $(this).children("a").css({"color" : "#fff"});

            n = $(this).index();
            if( n == 0 ) {          // user 의 경우
                $(this).children().children("img").attr({"src" : "./img/user_on.svg"})
            } else {          // logout 의 경우
                $(this).children().children("img").attr({"src" : "./img/logout_on.svg"})
            }
        },
        function() {
            $(this).children("a").css({"color" : "#5aaaf7"});

            n = $(this).index();
            if( n == 0 ) {        // user 의 경우
                $(this).children().children("img").attr({"src" : "./img/user.svg"})
            } else {             // logout 의 경우
                $(this).children().children("img").attr({"src" : "./img/logout.svg"})
            }
        }
    )


});