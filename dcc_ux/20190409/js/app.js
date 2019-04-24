$(function() {
    var index = 0;   // 메인 메뉴 인덱스

    $("#menu li").eq(0).find("a").addClass("on");   // 첫번째 메뉴 활성화
    $("#case1").addClass("on");
    
    // 메인 메뉴 클릭 
    $("#menu li a").click(function() {
        $("#menu li a").removeClass("on");

        index = $(this).parent().index();    // 메뉴 인덱스
        if (index == 0) {
            $("#case6").removeClass("on"); $("#case5").removeClass("on"); $("#case4").removeClass("on"); 
            $("#case3").removeClass("on"); $("#case2").removeClass("on"); $("#case1").addClass("on");
            $(this).addClass("on");
        } else if (index == 1) {
            $("#case6").removeClass("on"); $("#case5").removeClass("on"); $("#case4").removeClass("on");
            $("#case3").removeClass("on"); $("#case1").removeClass("on"); $("#case2").addClass("on");
            $(this).addClass("on");
        } else if (index == 2) {
            $("#case6").removeClass("on"); $("#case5").removeClass("on"); $("#case4").removeClass("on");
            $("#case2").removeClass("on"); $("#case1").removeClass("on"); $("#case3").addClass("on");
            $(this).addClass("on");
        } else if (index == 3) {
            $("#case6").removeClass("on"); $("#case5").removeClass("on"); $("#case3").removeClass("on");
            $("#case2").removeClass("on"); $("#case1").removeClass("on"); $("#case4").addClass("on");
            $(this).addClass("on");
        } else if (index == 4) {
            $("#case6").removeClass("on"); $("#case4").removeClass("on"); $("#case3").removeClass("on");
            $("#case2").removeClass("on"); $("#case1").removeClass("on"); $("#case5").addClass("on");
            $(this).addClass("on");
        } else if (index == 5) {
            $("#case5").removeClass("on"); $("#case4").removeClass("on"); $("#case3").removeClass("on");
            $("#case2").removeClass("on"); $("#case1").removeClass("on"); $("#case6").addClass("on");
            $(this).addClass("on");
        }   
    });
    
    //====== 스킨에 따른 버튼 색상  =========//

    $("#ra_light").click(function() {      // light 스킨 버튼 클릭
        $("#case1 .section3").css({"display" : "none"})   // dark 숨기고 
        $("#case1 .section2").css({"display" : "block"})   // light 보이고
    });
    $("#ra_dark").click(function() {       // dark 스킨 버튼 클릭
        $("#case1 .section2").css({"display" : "none"})    // light 숨기고
        $("#case1 .section3").css({"display" : "block"})    // dark 보이고
    });

    // light 버튼 색상 표시 -- 확인
    $("#case1 .section2 .ui #btn_ok").hover(     // over
        function() {
            $("#color1").text("확인 : over - #2d333f");
        },
        function() {
            $("#color1").text("확인 : normal - #7e8ea8 / 취소 : normal - #6c727e");
        }
    );
    $("#case1 .section2 .ui #btn_ok").mousedown(function() {     /* down */
        $("#color1").text("확인 : down - #374256");
    });

    // light 버튼 색상 표시 -- 취소
    $("#case1 .section2 .ui #btn_cancel").hover(     // over
        function() {
            $("#color1").text("취소 : over - #2d333f");
        },
        function() {
            $("#color1").text("확인 : normal - #7e8ea8 / 취소 : normal - #6c727e");
        }
    );
    $("#case1 .section2 .ui #btn_cancel").mousedown(function() {     /* down */
        $("#color1").text("취소 : down - #374256");
    });

    // dark 버튼 색상 표시 -- 확인
    $("#case1 .section3 .ui #btn_ok").hover(     // over
        function() {
            $("#color2").text("확인 : over - #2d333f");
        },
        function() {
            $("#color2").text("확인 : normal - #7e8ea8 / 취소 : normal - #6c727e");
        }
    );
    $("#case1 .section3 .ui #btn_ok").mousedown(function() {     /* down */
        $("#color2").text("확인 : down - #374256");
    });   

    // dark 버튼 색상 표시 -- 취소
    $("#case1 .section3 .ui #btn_cancel").hover(     // over
        function() {
            $("#color2").text("취소 : over - #2d333f");
        },
        function() {
            $("#color2").text("확인 : normal - #7e8ea8 / 취소 : normal - #6c727e");
        }
    );
    $("#case1 .section3 .ui #btn_cancel").mousedown(function() {     /* down */
        $("#color2").text("취소 : down - #374256");
    });




    /*-------------------------------------*/


    // 확대 아이콘 클릭
    $("#icon_expand a").click(function() {
        $("#max_win").css({"display" : "block"});   // 확대 윈도우 보임
    });

    // 복원 아이콘 클릭
    $("#org_icon").click(function() {
        $("#max_win").css({"display" : "none"});
        $("#case5 .section2 .ui").css({"display" : "block"});
    });

    // 리스트 컬럼 클릭 (정렬)
    var array = ["up", "down", "up", "down"];    // 컬럼별 정렬방식 배열
    var num = "";      // 컬럼 인덱스
    $("#arrow li a").click(function() {      // a 태그 클릭하면
        num = $(this).parent().index();    // 현재 컬럼
        if (array[num] == "up") {
            $(this).html("<i class='fas fa-long-arrow-alt-down'>");
            array[num] = "down";
        } else if (array[num] == "down") {
            $(this).html("<i class='fas fa-long-arrow-alt-up'>");
            array[num] = "up";
        }
    });

    // ? 도움말 아이콘 마우스 오버 시 이미지 교체 및 풍선 메시지 보임
    $("#help").hover(
        function() {       // mouse over
            $(this).attr({"src" : "./img/icon_help_over.png"});
            $("#bubble").show();
        },
        function() {       // mouse leave
            $(this).attr({"src" : "./img/icon_help.png"});
        }
    );

    // 풍선 메시지 마우스 아웃 하면 풍선 메시지 숨김
    $("#bubble").hover(
        function() {       // mouse over
            $(this).attr({"src" : "./img/icon_help_over.png"});
        },
        function() {       // mouse leave
            $(this).attr({"src" : "./img/icon_help.png"});
            $(this).hide();
        }
    );    

    // 풍선 메시지 [자세히 보기] 클릭
    $("#bubble a").click(function() {
        $("#bubble").hide();
    });

    //====== list row 클릭 시 반전 =========//
    var trn;   // tr 의 index 번호
    var ch;    // checkbox 체크여부
    $("#tb tr").click(function() {
        trn = $(this).index();   // 클릭한 tr의 인덱스 번호 저장
        ch = $(this).children().eq(0).find("input").prop("checked");  // 체크박스는 prop 함수로 제어함

        if (ch) {    // 체크 상태면
            $(this).children().eq(0).find("input").prop({"checked" : ""});    // 체크 해제
            $(this).children().css({"color" : "#6c727e"});    // 글자 어둡게
            if (trn == 0 || trn == 2) {       // 짝수줄이면
                $(this).css({"background" : "#eceff4"});     // 배경 밝게 
            } else {          // 홀수줄이면
                $(this).css({"background" : "#fff"});     // 배경 흰색
            }
        } else {     // 체크 안된 상태면
            $(this).children().eq(0).find("input").prop({"checked" : "true"});    // 체크함 - 체크박스는 prop 함수로 제어함
            $(this).children().css({"color" : "#fff"});     // 글자 흰색
            $(this).css({"background" : "#6c727e"});     // 배경진하게 
        }
    });

    //====== 에러 메시지 표시  =========//
    // 라디오 버튼 클릭
    $("#ra_dr").click(function() {      // 직접 메시지 - 라디오버튼
        $("#case2 .section2 .popupwin").css({"display" : "none"});       // 팝업 창 UI 영역 숨김
        $("#case2 .section2").css({"background" : "url('./img/dcc_002_1.jpg') center center"});        
        $("#case2 .section2 .direct").css({"display" : "block"});       // ui 영역 보임
        $("#case2 .section2 .direct .msg_cont").removeClass("on");      // 메시지는 숨김
        $("#viewtxt1").css({"display" : "block"});      // 1번 화면 조작 설명 글 보임
        $("#viewtxt2").css({"display" : "none"});      // 2번 화면 조작 설명 글 숨김
        $("#case2 section:nth-child(3) #result2").css({"display" : "block"})    // 직접 표시 개선가이드 보임 
        $("#case2 section:nth-child(3) #result3").css({"display" : "none"})    // 팝업창 표시 개선가이드 숨김 
        $("#case2 .section2 .err_trigger").css({"display" : "none"});       // 에러 발생 안내 메시지 숨김
        $("#case2 .section2 #btn_error").css({"display" : "none"})      // 에러 발생 시킴 버튼 숨김
    });
    $("#ra_pop").click(function() {      // 팝업창으로 표시 - 라디오버튼
        $("#case2 .section2").css({"background" : "url('./img/dcc_002_2.jpg') center center"});   // 배경이미지 교체        
        $("#case2 .section2 .direct").css({"display" : "none"});       // 로그인 버튼과 메시지 숨김     
        $("#case2 .section2 .err_trigger").css({"display" : "block"});       // 에러 발생 안내 메시지 보임
        $("#viewtxt1").css({"display" : "none"});      // 1번 화면 조작 설명 글 숨김
        $("#viewtxt2").css({"display" : "block"});      // 2번 화면 조작 설명 글 보임
        $("#case2 section:nth-child(3) #result2").css({"display" : "none"})    // 직접 표시 개선가이드 숨김
        $("#case2 section:nth-child(3) #result3").css({"display" : "block"})    // 팝업창 표시 개선가이드 보임 
        $("#case2 .section2 #btn_error").css({"display" : "block"})      // 에러 발생 시킴 버튼 보임
    });
    $("#case2 .section2 #btn_error").click(function() {
        activePop();     // 팝업창 보이기
    });

    function activePop() {
        setTimeout(function() { 
            $("#case2 .section2 .popupwin").stop().fadeIn({"display" : "block"}),       // 팝업 창 UI 영역 보임
            $("#case2 .section2 .err_trigger").css({"display" : "none"});       // 에러 발생 안내 메시지 숨김
        }, 200);
    }

    // 직접표시
    $("#btn_login2").click(function() {     /* 로그인 버튼 */
        $("#case2 .section2 .direct .msg_cont").toggleClass("on");
    });
    $("#case2 .section2 .direct .msg_cont > div[class=txt] a").click(function() {   /* 자세히 보기 링크 */
        $("#case2 .section2 .direct .msg_cont").removeClass("on");
    });

    // 닫기 버튼 클릭
    $("#popup .bt_area #btn_cancel").click(function() {
        $("#case2 .section2 .popupwin").css({"display" : "none"});       // 팝업 창 UI 영역 숨김
    }) 





});