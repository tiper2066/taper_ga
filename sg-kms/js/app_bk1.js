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
        alertWin_orgStatus();
        $("#alert_normal").css({'transform':"translateY(0)"});
        $("#alert_normal").css('opacity', '1');
    });
    $("#btn_alert a").eq(1).on('click', function() {      // Alert 성공 창
        alertWin_orgStatus();
        $("#alert_success").css({'transform':"translateY(0)"});
        $("#alert_success").css('opacity', '1');
    });
    $("#btn_alert a").eq(2).on('click', function() {      // Alert 주의 창
        alertWin_orgStatus();
        $("#alert_attention").css({'transform':"translateY(0)"});
        $("#alert_attention").css('opacity', '1');
    });    
    $("#btn_alert a").eq(3).on('click', function() {      // Alert 위험 창
        alertWin_orgStatus();
        $("#alert_warning").css({'transform':"translateY(0)"});
        $("#alert_warning").css('opacity', '1');
    });     
    $(".close").on('click', function() {         // Alert 창 닫고 원래 상태로 (모든 창)
        alertWin_orgStatus();
    });    

    //------------- user menu event ---------------
    $('#btn_user').on('click', function() {
        $("div[id^='pop']").fadeOut();      // 모든 창 숨김
        $("#pop_admininfor").fadeToggle();
    });
    $('#btn_user').hover(function() {
        $('#btn_user img:first-child').attr('src', '../img/icon_user_ov.png'); 
    }, function() {
        $('#btn_user img:first-child').attr('src', '../img/icon_user.png');
    })

    //------------- clock menu event ---------------
    $("#btn_clock").on('click', function() {
        $("div[id^='pop']").fadeOut();    // 모든 창 숨김
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
        //
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

    //--------------- 페이지 열릴때 대시보드의 서브메뉴 및 시스템 상태 메뉴 선택하기 --------------
    $(main_menu).parent().parent().find("ul").stop().slideUp();   // 서브 메뉴 전체 닫기
    $(main_menu).parent().parent().eq(0).find("ul").stop().slideDown();    // 대시보드 서브메뉴 펼침
    $(main_menu).parent().parent().eq(0).find("img").eq(0).attr('src', '../img/mnicon_dashboard_ov.png');  // 대시보드 메뉴 이미지 선택 상태
    $(main_menu).parent().parent().eq(0).find("a").eq(0).css('color', '#2789f2');   // 대시보드 메뉴 텍스트 선택 상태 
    $(main_menu).parent().parent().eq(0).find("a").eq(0).css('background-color', '#0c101c');     // 대시보드 메뉴 배경 선택 상태 

    $(sub_menu).eq(0).find("a").css('color', '#ffffff');    // 대시보드의 서브 첫번째 메뉴 색상 변경
    $(sub_menu).eq(0).find("a").css("background", "linear-gradient(to right, #2789f2, #1ba593)");    // 대시보드의 서브 첫번째 메뉴 배경 오버
    $(sub_menu).eq(0).find("a").addClass("on");       //  대시보드 서브 첫번째 메뉴 < 
    
    //--------------- 서브 메뉴 없는 메인메뉴 (보고서) ">"" 이미지 숨기기 --------------
    $(main_menu).parent().parent().eq(5).find("img").eq(1).css('display', 'none');  // 대시보드 메뉴 이미지 선택 상태

    //--------------- 최초 페이지 열릴때 대시보드 컨텐츠 보이기 --------------
    $(".box").css({"opacity" : 1, "transform" : "translateY(0)"});    
    $("div[id^='content_']").hide();      // 모든 컨텐츠 숨기기
    $("#content_00").show();      // 대시보드 시스템 상태 컨텐츠만 보이기


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

            $("div[id^='content_']").hide();          // 모든 컨텐츠 숨김
            $("#content_50").show(500);                    // 보고서 컨텐츠 보임   
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
        $(this).children().css('color', '#ffffff');    // 현재 서브 메뉴 색상 오버
        $(this).children().css("background", "linear-gradient(to right, #2789f2, #1ba593)");    // 현재 선택 서브메뉴 배경 오버
        $(this).children().addClass("on");       //  대시보드 서브 첫번째 메뉴 < 

        // 선택 시 해당 페이지 숨김/보임 여부
        // var smname = $(this).text().substr(2);     // 서브 메뉴명 도출
        var crtPage = '#content_' + mi + smi;       //  선택한 서브메뉴 id 값 가져오기
        console.log(crtPage);
        $(".box").css({"opacity" : 1, "transform" : "translateY(0)"});    
        $("div[id^='content_']").hide();          // 모든 컨텐츠 숨김
        $(crtPage).show(500);                    // 현재 선택한 전체 컨텐츠 보임

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
    //$("div[id^='pop']").children().children("li").hover(function() {
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

    
});