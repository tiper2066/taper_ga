$(document).ready(function(){

    /*==========================================================*/
    /*                         공통                             */
    /*==========================================================*/

    //------------- select menu event handler ---------------
    var selectTarget = $('.selectbox select');
    selectTarget.on('blur', function() {
        $(this).parent().removeClass('focus');
    });
    selectTarget.change(function() {
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });

    //------------- hanburger menu event ---------------
    $('#hbg_menu').on('click', function() {
        $('#kms_logo_small').toggleClass('on');
        $('#main_menu').toggleClass('on');
        $('header').toggleClass('on');
        $("div[id^='content_']").toggleClass('on');    // 컨텐츠 페이지 블럭 너비 늘리고 줄이기
        $('footer').toggleClass('on');
    });
    $('#hbg_menu').hover(function() {
       $('#hbg_menu img').attr('src', '../img/icon_hamburger_ov.png'); 
    }, function() {
        $('#hbg_menu img').attr('src', '../img/icon_hamburger.png');
    });

    //------------- Alert open/close menu event ---------------
    function alertWin_orgStatus() {     // 모든 Alert 창을 닫고 원래 상태로 복귀시키는 함수
        $("#alert_normal").css({'transform':"translateY(100px)"});
        $("#alert_success").css({'transform':"translateY(100px)"});
        $("#alert_attention").css({'transform':"translateY(100px)"});
        $("#alert_warning").css({'transform':"translateY(100px)"});
        
        $("#alert_normal").css('opacity', 0);
        $("#alert_success").css('opacity', 0);
        $("#alert_attention").css('opacity', 0);
        $("#alert_warning").css('opacity', 0);
    }

    $("#btn_alert a").eq(0).on('click', function() {      // Alert 기본 창
        $("div[id^='pop']").fadeOut();      // 모든 팝업창 숨김
        alertWin_orgStatus();
        $("#alert_normal").css({'transform':"translateY(0)"});
        $("#alert_normal").css('opacity', '1');
    });
    $("#btn_alert a").eq(1).on('click', function() {      // Alert 성공 창
        $("div[id^='pop']").fadeOut();      // 모든 팝업창 숨김
        alertWin_orgStatus();
        $("#alert_success").css({'transform':"translateY(0)"});
        $("#alert_success").css('opacity', '1');
    });
    $("#btn_alert a").eq(2).on('click', function() {      // Alert 주의 창
        $("div[id^='pop']").fadeOut();      // 모든 팝업창 숨김
        alertWin_orgStatus();
        $("#alert_attention").css({'transform':"translateY(0)"});
        $("#alert_attention").css('opacity', '1');
    });    
    $("#btn_alert a").eq(3).on('click', function() {      // Alert 위험 창
        $("div[id^='pop']").fadeOut();      // 모든 팝업창 숨김
        alertWin_orgStatus();
        $("#alert_warning").css({'transform':"translateY(0)"});
        $("#alert_warning").css('opacity', '1');
    });     
    $(".close").on('click', function() {         // Alert 창 닫고 원래 상태로 (모든 창)
        alertWin_orgStatus();
    });    

    //------------- user menu event ---------------
    $('#btn_user').on('click', function() {
        $("div[id^='pop']").fadeOut();      // 모든 팝업창 숨김
        alertWin_orgStatus();        // 모든 alert 창 숨김
        $("#pop_admininfor").fadeToggle();
    });
    $('#btn_user').hover(function() {
        $('#btn_user img:first-child').attr('src', '../img/icon_user_ov.png'); 
    }, function() {
        $('#btn_user img:first-child').attr('src', '../img/icon_user.png');
    })

    //------------- clock menu event ---------------
    $("#btn_clock").on('click', function() {
        $("div[id^='pop']").fadeOut();    // 모든 팝업창 숨김
        alertWin_orgStatus();        // 모든 alert 창 숨김
        $("#pop_logouttime").fadeToggle();
    });
    $('#btn_clock').hover(function() {
        $('#btn_clock img').attr('src', '../img/icon_clock_ov.png'); 
        $('#btn_clock span').css('color', '#f1f8ff'); 
    }, function() {
        $('#btn_clock img').attr('src', '../img/icon_clock.png');
        $('#btn_clock span').css('color', '#8f96a1');  
    })
    $("#pop_logouttime input").on('click', function() {    // 확인, 취소 버튼 클릭
        $("#pop_logouttime").fadeOut();     // 창닫음
    });

    //------------- alarm menu event ---------------
    $("#btn_alarm").on('click', function() {
        $("div[id^='pop']").fadeOut();    // 모든 창 숨김
        $("#pop_alim").fadeToggle();
    });    
    $('#btn_alarm').hover(function() {
        $('#btn_alarm img').attr('src', '../img/icon_alarm_ov.png'); 
    }, function() {
        $('#btn_alarm img').attr('src', '../img/icon_alarm.png'); 
    })
    
    //------------- setup control menu event ---------------
    $('#btn_control').on('click', function() {
        $('#ui_setup').toggleClass('on');
    });
    $('#btn_control').hover(function() {
        $('#btn_control img').attr('src', '../img/icon_control_ov.png'); 
     }, function() {
         $('#btn_control img').attr('src', '../img/icon_control.png');
     });

    //------------- logout menu event ---------------
    $('#btn_logout').on('click', function() {
        window.location = 'login.html';
    });
    $('#btn_logout').hover(function() {
        $('#btn_logout img').attr('src', '../img/icon_logout_ov.png'); 
     }, function() {
         $('#btn_logout img').attr('src', '../img/icon_logout.png');
     });

    /*==========================================================*/
    /*                       로그인 페이지                      */
    /*==========================================================*/

    //--------------- login box slideup & fade in --------------
    $('#login_box').fadeIn(500).css('top','calc(45% - 250px)');

    /*==========================================================*/
    /*                       INDEX 페이지                      */
    /*==========================================================*/

    //----------------------- 변수 설정 ----------------------------
    var mm_num = 7;      // 메인 메뉴 갯수 
    var main_menu = $("#menu > ul > li > a");      // 메인 메뉴
    var sub_menu = $("#menu > ul ul li");       // 서브 메뉴
    var mi = 0;      // 현재 클릭한 메인 노드 인덱스 
    var smi = 0;     // 현재 선택된 서브 메뉴 노드 인덱스 
    var mImgArray = [     // 메인 메뉴 아이콘 normal 이미지 url
        '../img/mnicon_dashboard.png',        // 대시보드
        '../img/mnicon_securepolicy.png',     // 보안정책
        '../img/mnicon_keymng.png',           // 키관리
        '../img/mnicon_encryption.png',       // 암호화 관리
        '../img/mnicon_log.png',              // 로그
        '../img/mnicon_report.png',           // 보고서
        '../img/mnicon_env_setup.png'         // 환경설정
    ];     
    var mImgArray_ov = [     // 메인 메뉴 아이콘 over 이미지 url
        '../img/mnicon_dashboard_ov.png',
        '../img/mnicon_securepolicy_ov.png',
        '../img/mnicon_keymng_ov.png',
        '../img/mnicon_encryption_ov.png',
        '../img/mnicon_log_ov.png',
        '../img/mnicon_report_ov.png',
        '../img/mnicon_env_setup_ov.png'
    ];
    var slideArray = [1, 0, 0, 0, 0, 0, 0];    // 서브메뉴 열고닫음 상태, 최초 첫번째 메뉴 열림

    /*======================= Colors 설정 =================*/
    var color_white = "#ffffff";        /* white color */
    var color_basic_text = "#222528";       /* basic text color */
    var color_login_body = "#8f96a1";     /* login page background color */ 
    var color_gray = "#878e95";            /*  button color 회색   */
    var color_border = "#d1d1d1";         /* input box border color */
    var color_green = "#1ba593";          /*  main green color  */
    var color_main_blue = "#2789f2";       /*  main blue color  */
    var color_placeholder_text = "#8f96a1";      /* placeholder text color */
    var color_input_shadow = "rgba(39, 137, 242, 0.5)";  /* input field shadow color */
    var color_box_shadow = "rgba(0,0,0,0.2)";    /* blockbox shadow color */
    var color_main_gradient = "linear-gradient(to right, $color_main_blue, $color_green)";  /* main gradient color */
    var color_header_bg = "#192032";       /* header background color */
    var color_mainmenu_bg = "#283048";     /* left main menu background color */
    var color_content_wrap = "#f1f8ff";     /* content block backbround color */
    var color_split_line = "#2a344c";      /* menu split line color  */ 
    var color_warning = "#ec6873";        /*  warning color  */
    var color_1depth_bg_normal = "#20283d";    /* 1depth menu backgorund narmal color */
    var color_1depth_bg_over = "#0c101c";      /* 1depth menu backgorund over color */
    var color_table_header_bg = "#dbdee1";     /* table head(column) background color */
    var color_tr_border = "#cccccc";      /*  table tr bottom line color  */
    var color_tr_bg_2n = "#f9f9f9";      /* table tr 2nd 짝수 bg color  */
    var color_attention = "#ff9966";       /*  alim attention icon color  */
    var color_disabled = "#e9ecef";       /* disabled control background-color */

    //--------------- 페이지 열릴때 대시보드의 서브메뉴 및 시스템 상태 메뉴 선택하기 --------------
    $(main_menu).parent().parent().find("ul").stop().slideUp();   // 서브 메뉴 전체 닫기
    $(main_menu).parent().parent().eq(0).find("ul").stop().slideDown();    // 대시보드 서브메뉴 펼침
    $(main_menu).parent().parent().eq(0).find("img").eq(0).attr('src', '../img/mnicon_dashboard_ov.png');  // 대시보드 메뉴 이미지 선택 상태
    $(main_menu).parent().parent().eq(0).find("a").eq(0).css('color', '#2789f2');   // 대시보드 메뉴 텍스트 선택 상태 
    $(main_menu).parent().parent().eq(0).find("a").eq(0).css('background-color', '#0c101c');     // 대시보드 메뉴 배경 선택 상태 

    $(sub_menu).eq(0).find("a").css('color', color_white);    // 대시보드의 서브 첫번째 메뉴 색상 변경
    $(sub_menu).eq(0).find("a").css("background", "linear-gradient(to right, #2789f2, #1ba593)");    // 대시보드의 서브 첫번째 메뉴 배경 오버
    $(sub_menu).eq(0).find("a").addClass("on");       //  대시보드 서브 첫번째 메뉴 < 
    
    //--------------- 서브 메뉴 없는 메인메뉴 (보고서) ">"" 이미지 숨기기 --------------
    $(main_menu).parent().parent().eq(5).find("img").eq(1).css('display', 'none');  // 대시보드 메뉴 이미지 선택 상태

    //--------------- 최초 페이지 열릴때  --------------
    $("div[id^='content_']").hide();      // 모든 컨텐츠 숨김 (display none)
    $("#content_00").show();            // 대시보드 > 시스템 상태 컨텐츠 보이기
    $("#content_00").css('opacity',1);        // 대시보드 > 시스템 상태 컨텐츠 보이기
    $("#content_00 .box").css("transform","translateY(0)");   // 대시보드 > 시스템 상태 box 보이기
    $("div[id^='modal_']").hide();    // 모든 모달 창 숨기고
    $("div[id^='modal2_']").hide();    // 모든 모달 2 depth 창 숨기고

    //--------------- 전체 메뉴 접고 닫기  --------------
    var btn_fold = $('#menu_control').children().find('i');   // 접고펼침 버튼
    var fold = true;     // 접힘 여부 : 최초에 접힘설정
    $("#menu_control").on('click', function() {
        if (fold) {
            $(main_menu).parent().parent().find("ul").stop().slideDown();   // 서브 메뉴 전체 열기
            $(btn_fold).removeClass('fas fa-angle-double-down');
            $(btn_fold).addClass('fas fa-angle-double-up');
            $(main_menu).find(".menu_dot").attr('src', '../img/icon_menu_down.png');  // 메뉴 > 선택 상태
            for (var i = 0; i < slideArray.length; i++) {
                slideArray[i] = 1;      // 모두 열린상태로 변경  
            }
        } else {
            $(main_menu).parent().parent().find("ul").stop().slideUp();   // 서브 메뉴 전체 닫기
            $(btn_fold).removeClass('fas fa-angle-double-up');
            $(btn_fold).addClass('fas fa-angle-double-down');
            $(main_menu).find(".menu_dot").attr('src', '../img/icon_menu_up.png');  // 메뉴 > 선택 상태 
            for (var i = 0; i < slideArray.length; i++) {
                slideArray[i] = 0;      // 모두 닫힘상태로 변경  
            }
        }
        fold = !fold;
    });

    //--------------- 메인메뉴 클릭 시 서브메뉴 펼치고 닫기 --------------
    $(main_menu).on('click', function() {
        var cmi = $(this).parent().parent().index() - 1;      // 현재 선택 객체 index
        $(this).parent().parent().find("ul").stop().slideToggle();   // 서브 메뉴 펼침 토글

        if (slideArray[cmi] == 0) {    // 선택메뉴 상태가 닫힘이라면 
            $(main_menu).parent().parent().eq(cmi).find("a").eq(0).find("img").eq(1).attr('src', '../img/icon_menu_down.png');  // 메뉴 V 선택 상태  
            slideArray[cmi] = 1;      // 열린상태로 변경
        } else {
            $(main_menu).parent().parent().eq(cmi).find("a").eq(0).find("img").eq(1).attr('src', '../img/icon_menu_up.png');  // 메뉴 > 선택 상태  
            slideArray[cmi] = 0;
        }

        if (cmi == 5) {   // 보고서 메뉴 클릭이라면   
            mi = cmi;      

            // 메인 메뉴 및 서브메뉴 모두 비활성        
            for (var i = 0; i < mm_num; i++) {
                // 메인 메뉴 모두 비활성
                $(main_menu).parent().parent().eq(i).find("a").eq(0).find("img").eq(0).attr('src', mImgArray[i]);  // 메뉴 아이콘 노말 상태
                $(main_menu).parent().parent().eq(i).find("a").eq(0).css('color', '#8f96a1');   // 메뉴 텍스트 노말 상태 
                $(main_menu).parent().parent().eq(i).find("a").eq(0).css('background-color', '#20283d');     // 메뉴 배경 노말 상태    
                
                // 서브메뉴 모두 비활성
                $(sub_menu).find("a").css('color', '#8f96a1');     // 모든 서브 메뉴 색상 노말
                $(sub_menu).find("a").css("background", "#283048");     // 모든 서브 메뉴 배경 색상 노말
                $(sub_menu).find("a").removeClass("on");       //  모든 서브 메뉴 < 제거                
            }            
            $(main_menu).parent().parent().eq(cmi).find("a").eq(0).find("img").eq(0).attr('src', mImgArray_ov[cmi]);  // 메뉴 아이콘 선택 상태
            $(main_menu).parent().parent().eq(cmi).find("a").eq(0).find("img").eq(1).attr('src', '../img/icon_menu_down.png');  // 메뉴 V 선택 상태
            $(main_menu).parent().parent().eq(cmi).find("a").eq(0).css('color', '#2789f2');   // 메뉴 텍스트 오버 상태 
            $(main_menu).parent().parent().eq(cmi).find("a").eq(0).css('background-color', '#0c101c');     // 메뉴 배경 오버 상태               

            // 선택 시 해당 페이지 숨김/보임 여부
            var crtPage = '#content_' + mi + 0;       //  선택한 서브메뉴 id 값 가져오기
            $("div[id^='content_']").hide();      // 모든 컨텐츠 숨김 (display none)
            $("div[id^='content_']").css({'opacity':0, 'z-index':0});        // 모든 컨텐츠 숨기고 layer 를 최하위로
            $("div[id^='content_'] .box").css("transform","translateY(100px)");   // 모든 컨텐츠의 box 원위치로
            
            $(crtPage).show();         // 현재 선택 컨텐츠 보이기
            $(crtPage).css('opacity',1);        // 현재 선택한 전체 컨텐츠 보이고 layer 최상위로 올리기
            $(crtPage + " .box").css("transform","translateY(0)");   // 현재 선택한 컨텐츠의 box 순서대로 보이기

        }
    });

    //------------- 메인메뉴 마우스 오버 이벤트 ---------------
    $(main_menu).hover(function() {
        var cmi = $(this).parent().parent().index() - 1;      // 현재 선택 객체 index
        $(this).css({'background-color':'#0c101c','color':'#2789f2'});
        $(this).children().eq(0).attr('src', mImgArray_ov[cmi]);
     }, function() {
        var cmi = $(this).parent().parent().index() - 1;      // this index
        if (cmi != mi) {   // 마우스 오버한 메뉴(this) 와 현재 선택 중인 메인메뉴가 다르다면 노말상태로
            $(this).css({'background-color':'#20283d','color':'#8f96a1'});
            $(this).children().eq(0).attr('src', mImgArray[cmi]);    
        }
     });

    //--------------- 서브메뉴 클릭 시 메인메뉴 활성화하기 --------------
    $(sub_menu).on('click', function() {
        // 메인 메뉴 모두 비활성        
        for (var i = 0; i < mm_num; i++) {
            $(main_menu).parent().parent().eq(i).find("a").eq(0).find("img").eq(0).attr('src', mImgArray[i]);  // 메뉴 아이콘 노말 상태
            $(main_menu).parent().parent().eq(i).find("a").eq(0).css('color', '#8f96a1');   // 메뉴 텍스트 노말 상태 
            $(main_menu).parent().parent().eq(i).find("a").eq(0).css('background-color', '#20283d');     // 메뉴 배경 노말 상태          
        }

        // 선택 메인 메뉴 활성화 
        var cmi = $(this).parent().parent().parent().index() - 1;     // 현재 선택된 메인메뉴 index
        smi = $(this).index();     // 현재 선택된 서브메뉴 index
        mi = cmi    // 현재 노드의 인덱스 저장 (부모인 ul의 index)

        $(main_menu).parent().parent().eq(cmi).find("a").eq(0).find("img").eq(0).attr('src', mImgArray_ov[cmi]);  // 메뉴 아이콘 선택 상태
        $(main_menu).parent().parent().eq(cmi).find("a").eq(0).find("img").eq(1).attr('src', '../img/icon_menu_down.png');  // 메뉴 V 선택 상태
        $(main_menu).parent().parent().eq(cmi).find("a").eq(0).css('color', '#2789f2');   // 메뉴 텍스트 오버 상태 
        $(main_menu).parent().parent().eq(cmi).find("a").eq(0).css('background-color', '#0c101c');     // 메뉴 배경 오버 상태           

        // 서브메뉴 모두 비활성
        $(sub_menu).find("a").css('color', '#8f96a1');     // 모든 서브 메뉴 색상 노말
        $(sub_menu).find("a").css("background", "#283048");     // 모든 서브 메뉴 배경 색상 노말
        $(sub_menu).find("a").removeClass("on");       //  모든 서브 메뉴 < 제거

        // 선택 서브메뉴 활성화
        $(this).children().css('color', color_white);    // 현재 서브 메뉴 색상 오버
        $(this).children().css("background", "linear-gradient(to right, #2789f2, #1ba593)");    // 현재 선택 서브메뉴 배경 오버
        $(this).children().addClass("on");       //  대시보드 서브 첫번째 메뉴 < 

        // 선택 시 해당 페이지 숨김/보임 여부
        // var smname = $(this).text().substr(2);     // 서브 메뉴명 도출
        var crtPage = '#content_' + mi + smi;       //  선택한 서브메뉴 id 값 가져오기
        $("div[id^='content_']").hide();      // 모든 컨텐츠 숨김 (display none)
        $("div[id^='content_']").css({'opacity':0, 'z-index':0});        // 모든 컨텐츠 숨기고 layer 를 최하위로
        $("div[id^='content_'] .box").css("transform","translateY(100px)");   // 모든 컨텐츠의 box 원위치로
        
        $(crtPage).show();         // 현재 선택 컨텐츠 보이기
        $(crtPage).css('opacity',1);        // 현재 선택한 전체 컨텐츠 보이고 layer 최상위로 올리기
        $(crtPage + " .box").css("transform","translateY(0)");   // 현재 선택한 컨텐츠의 box 순서대로 보이기

    });
    //--------------- 서브메뉴 마우스 오버 이벤트 --------------
    $(sub_menu).hover(function() {      
        $(this).find("a").css('color', '#ffffff');    
    }, function() {
        var cmi = $(this).parent().parent().parent().index() - 1;     // 현재 선택된 메인메뉴 index
        var smi_crr = $(this).index();     // 현재 선택된 메인메뉴 index  

        if (smi_crr != smi) {
            $(this).find("a").css('color', '#8f96a1'); 
        } else if (cmi != mi) {
            $(this).find("a").css('color', '#8f96a1'); 
        } else {
            return;
        }
    });
    //--------------- 컨텐츠 블록 우측상단 [도움말 아이콘] 메뉴 마우스 오버 --------------
    var icon1 = $("#content_wrap .box.cbox1 .icons").find("img").eq(0);
    $(icon1).hover(function() {
        $(this).css('cursor', 'pointer');
        $(this).attr('src', '../img/icon_help_ov.png');
    }, function() {
        $(this).attr('src', '../img/icon_help.png');
    });
    //--------------- 컨텐츠 블록 우측상단 [새로고침 아이콘] 메뉴 마우스 오버 --------------
    var icon1 = $("#content_wrap .box.cbox1 .icons").find("img").eq(1);
    $(icon1).hover(function() {
        $(this).css('cursor', 'pointer');
        $(this).attr('src', '../img/icon_refresh_ov.png');
    }, function() {
        $(this).attr('src', '../img/icon_refresh.png');
    });
    //--------------- 컨텐츠 블록 우측상단 [확장 아이콘] 메뉴 마우스 오버 --------------
    var icon1 = $("#content_wrap .box.cbox1 .icons").find("img").eq(2);
    $(icon1).hover(function() {
        $(this).css('cursor', 'pointer');
        $(this).attr('src', '../img/icon_expend_ov.png');
    }, function() {
        $(this).attr('src', '../img/icon_expend.png');
    });    
    /*==========================================================*/
    /*                          테이블                          */
    /*==========================================================*/    
    //--------------- 테이블 tr 선택 시 반전하기 --------------
    $("table tbody tr").on('click', function() {
        $(this).parent().children().children().css({'background-color':'transparent', 'color':'#222528'});    // 모든 td 배경을 제거한다.  
        $(this).parent().children().children().find("#icon_mapping").attr('src','../img/icon_mapping.png');    // 모든 적용 아이콘 해제
        $(this).parent().children().children().find("#icon_check").attr('src','../img/icon_check_off.png');    // 모든 체크아이콘 해제
        $(this).parent().children().children().find("#icon_edit").attr('src','../img/icon_edit.png');    // 모든 수정아이콘 해제
        $(this).parent().children().children().find("#icon_del").attr('src','../img/icon_del.png');    // 모든 수정아이콘 해제
        
        $(this).children().find("#icon_mapping").attr('src','../img/icon_mapping_on.png');    // 선택한 라인 적용아이콘 on
        $(this).children().find("#icon_check").attr('src','../img/icon_check_on.png');    // 선택한 라인 체크아이콘 on
        $(this).children().find("#icon_edit").attr('src','../img/icon_edit_on.png');    // 선택한 라인 수정아이콘 on
        $(this).children().find("#icon_del").attr('src','../img/icon_del_on.png');    // 선택한 라인 삭제아이콘 on
        $(this).children().css({'background-color':'#283048', 'color':'#ffffff'});   // 현재 선택한 tr > td의 색상을 바꿔줌, tr hover 색상은 아래 적용 중

    });
    //--------------- 테이블 tr 마우스 오버  --------------
    $("table tbody tr").hover(function() {
        $(this).css('background-color','#f1f8ff');
    }, function() {
        var cur_tr = $(this).index();    // click tr num (tr > th 포함)
        if ((cur_tr%2) == 1) {      // 홀수 라인이면
            $(this).css('background-color','#f9f9f9');
        } else {      // 짝수 라인이면 
            $(this).css('background-color','#ffffff');
        }
    });
    /*==========================================================*/
    /*                          팝업창                          */
    /*==========================================================*/
    //--------------- 바탕클릭 시 팝업창 모두 닫음  --------------
    $("div[id^='content']").on('click', function() {
        $("div[id^='pop']").fadeOut();
    });
    //--------------- 팝업 리스트 마우스 오버  --------------
    $("#pop_admininfor").children().children("li").hover(function() {        
        $(this).css('background-color','#f1f8ff');
    }, function() {
        var cur_li = $(this).index();    // current li num
        console.log(cur_li);
        if ((cur_li%2) == 0) {      // 홀수 라인이면
            $(this).css('background-color','#ffffff');
        } else {      // 짝수 라인이면 
            $(this).css('background-color','#f9f9f9');
        }
    });   
    //------------- 비밀번호 변경주기 설정 팝업 ---------------
    //$("#content_61 .box.cbox1 #controls form .right input[type='button']").eq(0).on('click', function() {
    $("#pwch").on('click', function() {
        $("div[id^='pop']").fadeOut();    // 모든 팝업창 숨김
        alertWin_orgStatus();        // 모든 alert 창 숨김
        $("#pwchangecycle").fadeIn();
        //$("#pwchangecycle").css('display', 'block');
    });
    $("#pwchangecycle input").on('click', function() {    // 확인, 취소 버튼 클릭
        $("#pwchangecycle").fadeOut();     // 창닫음
    });
    
    /*==========================================================*/
    /*                          모달창                          */
    /*==========================================================*/    
    /*--------------- 서비스 추가 모달 창 열기  ---------------*/
    var btn_serviceadd = $("#content_10 .box.cbox2 #controls form .right input:first-child");   // 서비스 추가 버튼
    $(btn_serviceadd).on('click', function() {
        $("#modal_service_add").css("z-index",100);  // 서서히 나타나기
        $("#modal_service_add").show();    // 모달 창 보이고..
        $("#modal_service_add").css({"opacity":1,"transform":"translateY(0)"});  // 서서히 나타나기
        $("#overlay").show().css('z-index', 99);
        depth = '1';   // 1depth 모달 창 알림
    });
    /*--------------- 관리자 정보 추가 모달 창 열기  ---------------*/
    var btn_mnginfoadd = $("#content_61 .box.cbox1 #controls form .right input:first-child");   // 관리자 추가 버튼
    $(btn_mnginfoadd).on('click', function() {
        $("#modal_admininfo_add").css("z-index",100);  // 레이어 올리고
        $("#modal_admininfo_add").show();    // 모달 창 보이고..
        $("#modal_admininfo_add").css({"opacity":1,"transform":"translateY(0)"});  // 서서히 나타나기
        $("#overlay").show().css('z-index', 99);
        depth = '1';   // 1depth 모달 창 알림
    });
    /*--------------- 접근 허용 기간 설정 모달 2 창 열기  ---------------*/
    var btn_permit_time_setup = $("#modal_admininfo_add .btn_setup");   // 접근허용기간 설정 버튼
    $(btn_permit_time_setup).on('click', function() {
        $("#modal2_access_permit_time").css("z-index",100);  // 레이어 올리고
        $("#modal2_access_permit_time").show();    // 모달 창 보이고..
        $("#modal2_access_permit_time").css({"opacity":1,"transform":"translateY(0)"});  // 서서히 나타나기
        depth = '2';   // 2depth 모달 창 알림
    });
    /*--------------- 알림항목 설정 항목 추가 모달 창 열기  ---------------*/
    var btn_itemSetup = $("#content_64 .box.cbox1 #controls form .right input:first-child");   // 항목 설정 버튼
    $(btn_itemSetup).on('click', function() {
        $("#modal_alim_add").css("z-index",100);  // 레이어 올리고
        $("#modal_alim_add").show();    // 모달 창 보이고..
        $("#modal_alim_add").css({"opacity":1,"transform":"translateY(0)"});  // 서서히 나타나기
        $("#overlay").show().css('z-index', 99);
        depth = '1';   // 1depth 모달 창 알림
    });    
    /*--------------- 알림항목 세부 설정 모달 창 열기  ---------------*/
    var btn_itemDetail = $("#content_64 .box.cbox2 #controls form .right input:first-child");   // 항목 설정 버튼
    $(btn_itemDetail).on('click', function() {
        $("#modal_alim_detail").css("z-index",100);  // 레이어 올리고
        $("#modal_alim_detail").show();    // 모달 창 보이고..
        $("#modal_alim_detail").css({"opacity":1,"transform":"translateY(0)"});  // 서서히 나타나기
        $("#overlay").show().css('z-index', 99);
        depth = '1';   // 1depth 모달 창 알림
    });        

    /*-------------- 모달 창닫고 오버레이 숨기는 함수 ---------*/
    var depth = '';    // 모달 창 종류 1depth 창이냐 2depth 창이냐
    function closeModal() {
        if (depth == 2) {      // 2depth 모달창이면
            $("div[id^='modal2_']").css({"opacity":0,"transform":"translateY(100px)"});  // 모든 모달 창 투명하게 원래위치로 
            setTimeout(() => {
                $("div[id^='modal2_']").css("z-index",0);
                $("div[id^='modal2_']").hide();  // 모든 모달 창 숨기고..
            }, 200);     
            depth = '1';   // 이후 부터 1depth 모달 창 열리도록 설정 
        } else {            // 1depth 모달창이면
            $("div[id^='modal_']").css({"opacity":0,"transform":"translateY(100px)"});  // 모든 모달 창 투명하게 원래위치로    
            setTimeout(() => {
                $("div[id^='modal_']").css("z-index",0);
                $("div[id^='modal_']").hide();  // 모든 모달 창 숨기고..
                $("#overlay").hide();   // 오버레이 숨기고, 레이어 아래로 배치
                $("#overlay").css('z-index', 0);   // 오버레이 숨기고, 레이어 아래로 배치
            }, 200);
        }  
    } 
    /*--------------- 모달 창 닫기 "X" 버튼  ---------------*/
    $(".close").on('click', function() { closeModal(); });    // 창닫기 함수 호출
    /*--------------- 모달 창 확인/취소 버튼  ---------------*/
    $(".btn_ok").on('click', function() { closeModal(); });  // 창닫기 함수 호출
    $(".btn_cancel").on('click', function() { closeModal(); });  // 창닫기 함수 호출

    /*--------------- overlay 클릭시 모든 모달창과 overay 자체 사라짐  ---------------*/
    $("#overlay").on('click', function() {
        closeModal();     // 창닫기 함수 호출
    });
    /*==========================================================*/
    /*                   조회  창 이벤트                        */
    /*==========================================================*/  
    /*--------------- 조회 슬라이드 창 열기  ---------------*/
    var pop_search = $("#content_40 .pop_search");     // 조회 팝다운 창
    var btn_search = $("#content_40 .box.cbox1 #controls form .right input:nth-child(3)")   // 조회 버튼 
    $(btn_search).on('click', function() { $(pop_search).slideDown(); });   /* 조회 팝업창 열기 버튼 */
    
    /*--------------- 조회 슬라이드 창 닫기  ---------------*/    
    $("#content_40 .pop_search a.close").on('click', function() { $(pop_search).slideUp();  });     /* X 버튼  */
    $("#content_40 .pop_search ul li input[type='button']").on('click', function() { $(pop_search).slideUp(); });     /* 닫기 버튼  */

    /*--------------- 조회 UI 영역 열기  ---------------*/
    var searchBox = $("#content_40 .searchBox");     // 조회 팝다운 창
    var btn_searchBox = $("#content_40 .box.cbox1 #controls form .right input:nth-child(2)")   // 조회 2 버튼 
    $(btn_searchBox).on('click', function() { $(searchBox).slideDown(); });   // 조회 UI 영역 열기
    $("#content_40 .searchBox ul li input[type='button']").on('click', function() { $(searchBox).slideUp(); });     /* 조회 UI 영역  닫기 버튼  */

    /*==========================================================*/
    /*                    페이지 내비게이션                     */
    /*==========================================================*/      
    $(".pageNavi a").on('click', function() {    // 페이지 번호 클릭하면
        var cur_num = $(this).index();    // 현재 a 노드의 순서
        var p_num_length = $(this).parent().children().length;   // a태그의 전체 길이 , 0부터 시작
        //console.log(cur_num + ', ' + p_num_length);
        if ( cur_num == 0 || cur_num == 1 ) {     // 이전 5개, 이전 버튼 이면
            return;   // 클릭만 됨
        } else if ( cur_num == (p_num_length - 1) || cur_num == (p_num_length - 2) ) {  // 다음, 다음 5개 버튼이면
            return;   // 클릭만 됨
        } else {     // 기타 페이지 번호 버튼 이면..
            $(".pageNavi a").removeClass("on");
            $(this).addClass("on");     // 선택 상태로 반전됨
        }
    });

    /*==========================================================*/
    /*                        도넛 차트                         */
    /*==========================================================*/  
    google.charts.load("current", {packages:["corechart"]});
    
    /*----------------------- 디스크 영역 도넛 차트  start -----------------------*/
    google.charts.setOnLoadCallback(diskChart);
    function diskChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['여유 공간', 267],
          ['사용 공간', 24],
        ]);
  
        var options = {
          title: '전체 공간 : 291(단위 GB)',
          pieHole: 0.3,
          colors: [ '1ba593', '#2789f2' ]
        };
  
        var chart = new google.visualization.PieChart(document.getElementById('diskChart'));
        chart.draw(data, options);
      }    
    /*----------------------- 디스크 영역 도넛 차트  end -----------------------*/

    /*----------------------- 메모리 영역 도넛 차트 start -----------------------*/
    google.charts.setOnLoadCallback(memoryChart);
    function memoryChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['여유 공간', 84],
        ['사용 공간', 1472],
        ['캐시 공간', 454],
      ]);

      var options = {
        title: '전체 공간 : 2010 (단위 MB)',
        pieHole: 0.3,
        colors: [ '1ba593', '#2789f2', '#8f96a1' ]
      };

      var chart = new google.visualization.PieChart(document.getElementById('memoryChart'));
      chart.draw(data, options);
    }
    /*----------------------- 메모리 영역 도넛 차트 end -----------------------*/

    /*----------------------- 최근 1분 CPU 사용률 라인 차트 start -----------------------*/
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);
    
    function drawBasic() {
    
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Core1 \n사용률');

        data.addRows([
            [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
            [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
            [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
            [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
            [66, 70], [67, 72], [68, 75], [69, 80]
            ]);

        var options = {
            hAxis: {
                title: 'seconds',
                chartArea: {left:0, top:0, width:'50%', height:'75%'}
            },
            vAxis: {
                title: '%'
            },
            colors: [ '#2789f2' ]
        };

        var chart = new google.visualization.LineChart(document.getElementById('lineChart'));

        chart.draw(data, options);
    }
    /*----------------------- 최근 1분 CPU 사용률 라인 차트 end -----------------------*/

    /*----------------------- 윈도우 리사이징 시에 구글 선형 차트 리사이즈  -----------------------*/
    $(window).resize(function(){ drawBasic(); });

    //============= 백업설정 - 활성화 토글버튼 클릭  ================//
    var bt_backupSetupToggle = $("#content_60 .cbox1 #btn_toggle");
    var t1_on = false;   // on 준비, 즉 off 상태
    bt_backupSetupToggle.click(function() {
        $("#content_60 .cbox1 .toggle_txt").toggle();
        if (t1_on) {    // 활성화 
            $("#content_60 .cbox1 .toggle_txt").css({"color":"#2789f2", "font-weight":"500"});   // 텍스트 컬러를 파란색으로 
            $("#content_60 .setupArea1 .select_big select").attr("disabled",false);
            $("#content_60 .setupArea1 input[type='number']").attr("disabled",false);
        } else {      // 비활성화
            $("#content_60 .cbox1 .toggle_txt").css({"color":"#808080", "font-weight":"300"});   // 텍스트 컬러를 회색으로 
            $("#content_60 .setupArea1 .select_big select").attr("disabled",true);
            $("#content_60 .setupArea1 input[type='number']").attr("disabled",true);
        }
        t1_on = !t1_on;
    });

    //============= DR 동기화 설정 - 활성화 토글버튼 클릭  ================//
    var bt_drSyncSetupToggle = $("#content_60 .cbox2 #btn_toggle");
    var t2_on = false;   // on 준비, 즉 off 상태
    bt_drSyncSetupToggle.click(function() {
        $("#content_60 .cbox2 .toggle_txt").toggle();
        if (t2_on) {    // 활성화 
            $("#content_60 .cbox2 .toggle_txt").css({"color":"#2789f2", "font-weight":"500"});   // 텍스트 컬러를 파란색으로 
            $("#content_60 .setupArea2 .select_big select").attr("disabled",false);
            $("#content_60 .setupArea2 input[type='number']").attr("disabled",false);
            $("#content_60 .setupArea2 input[type='text']").attr("disabled",false);
        } else {      // 비활성화
            $("#content_60 .cbox2 .toggle_txt").css({"color":"#808080", "font-weight":"300"});   // 텍스트 컬러를 회색으로 
            $("#content_60 .setupArea2 .select_big select").attr("disabled",true);
            $("#content_60 .setupArea2 input[type='number']").attr("disabled",true);
            $("#content_60 .setupArea2 input[type='text']").attr("disabled",true);
        }
        t2_on = !t2_on;
    });

    //============= IP Address 콘트롤 유효성 체크  ================//
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', { translation: { 'Z': { pattern: /[0-9]/, optional: true } } });

    //============= 모든 기간 허용 활성화 토글 체크버튼 클릭  ================//
    var cb3 = false;    // 체크 준비
    $("#cb3").on('click', function() {
        if (cb3) {    // 활성화 상태면
            $("#modal2_access_permit_time ul li input[type='date']").attr("disabled",false);
        } else {    // 비활성화 상태면
            $("#modal2_access_permit_time ul li input[type='date']").attr("disabled",true);
        } 
        cb3 = !cb3;
    });
    //============= 모든 요일 허용 활성화 토글 체크버튼 클릭  ================//
    var cb4 = false;    // 체크 준비
    $("#cb4").on('click', function() {
        if (cb4) {    // 활성화 상태면
            $("#modal2_access_permit_time ul li").eq(6).children("input").attr("disabled",false);
            $("#modal2_access_permit_time ul li").eq(7).children("input[type='checkbox']").attr("disabled",false);
        } else {    // 비활성화 상태면
            $("#modal2_access_permit_time ul li").eq(6).children("input").attr("disabled",true);
            $("#modal2_access_permit_time ul li").eq(7).children("input[type='checkbox']").attr("checked",true);
        } 
        cb4 = !cb4;
    });    
    //============= 모든 시간 허용 활성화 토글 체크버튼 클릭  ================//
    var cb12 = false;    // 체크 준비
    $("#cb12").on('click', function() {
        if (cb12) {    // 활성화 상태면
            $("#modal2_access_permit_time ul li input[type='time']").attr("disabled",false);
        } else {    // 비활성화 상태면
            $("#modal2_access_permit_time ul li input[type='time']").attr("disabled",true);
        } 
        cb12 = !cb12;
    });     
    //============= 알림항목 설정 추가의 항목선택 활성화 토글 버튼 클릭  ================//
    var itemSelect = false;    // 체크 준비
    $("#btn_itemSelect").on('click', function() {
        if (itemSelect) {    // 활성화 상태면
            $("#modal_alim_add #btn_switch .toggle_txt").css({"color":"#2789f2", "font-weight":"500"});   // on/off 텍스트 컬러를 파란색으로 
            $("#modal_alim_add #btn_switch p").eq(0).css("display", "none");   // off 
            $("#modal_alim_add #btn_switch p").eq(1).css("display", "inline-block");   // on
            $("#modal_alim_add ul li").eq(6).children().children("input").attr("disabled",false);
        } else {    // 비활성화 상태면
            $("#modal_alim_add #btn_switch .toggle_txt").css({"color":"#808080", "font-weight":"300"});   // on/off 텍스트 컬러를 회색으로  
            $("#modal_alim_add #btn_switch p").eq(0).css("display", "inline-block");   // off 
            $("#modal_alim_add #btn_switch p").eq(1).css("display", "none");   // on
            $("#modal_alim_add ul li").eq(6).children().children("input[type='checkbox']").attr("disabled",true);
        } 
        itemSelect = !itemSelect;
    });        


});
