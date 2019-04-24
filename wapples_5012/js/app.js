$(function() {

    var main_menu = $("#menu .wrap > ul > li > a");      // 메인 메뉴
    var sub_menu = $("#menu .wrap > ul ul li");       // 서브 메뉴
    var expand = [1, 1, 1, 1, 1, 1];     // 펼침여부 값을 배열로 든다.
    var i = "0";      // 현재 클릭한 메인 노드 인덱스 
    var si = "0";     // 현재 클릭한 서브 노드 인덱스
    var m_icon = "";    // 현재 선택 노드의 메뉴 아이콘 파일 url
    var mtg = true;     // 메뉴 슬라이딩 토글을 위한 변수
    var folding = true;    // 전체 메뉴열림 상태
    var panel = true;     // 설정패널 열림 상태
    var skin = "light";    // 처음에 light skin 으로 설정

    /* 상단 박스들 순차 애니메이션  */
    $("#top_group > div.det").css({"opacity" : 1, "transform" : "translateY(0)"});
    $("#top_group > div.thr").css({"opacity" : 1, "transform" : "translateY(0)"});
    $("#top_group > div.tps").css({"opacity" : 1, "transform" : "translateY(0)"});
    $("#top_group > div.cps").css({"opacity" : 1, "transform" : "translateY(0)"});

    /* 중단 박스 순차 애니메이션  */
    $("#cen_group > div.map").css({"opacity" : 1, "transform" : "translateY(0)"});

    /* 히단 박스 순차 애니메이션  */
    $("#bt_group > div.use").css({"opacity" : 1, "transform" : "translateY(0)"});
    $("#bt_group > div.check").css({"opacity" : 1, "transform" : "translateY(0)"});
    $("#bt_group > div.status").css({"opacity" : 1, "transform" : "translateY(0)"});

    /* 처음에 wapples logo 작은 것 숨김 */
    $("#main_nav .logo_sm").css({"display" : "none"});

    /* 시작하면 대시보드-요약 펼침 */
    $(main_menu).parent().parent().eq(0).find("ul").stop().slideToggle();   // 서브 메뉴 펼침 토글
    $(main_menu).parent().parent().eq(0).children().children("a").children("i").css({"transform" : "rotateZ(0)"});       // 화살표 방향 V 
    $(main_menu).parent().parent().eq(0).children().children("a").addClass("on");   // 대시보드 메뉴 활성화
    $(sub_menu).eq(0).children("a").addClass("on");      // 대시보드 > 요약 메뉴 활성화
    $(sub_menu).eq(0).addClass("on");      // 대시보드 > 요약 메뉴 삼각 돗 표시
    expand[0] = 0;    // 닫을 준비 상태로 변경


    /*  햄버거 메뉴 클릭 (메뉴 슬라이딩 토글)  */
    $("#main_header .ham_icon a").click(function() {
      if(mtg == true) {        
          $("#menu").css({"left" : -230});                       // 메뉴패널 Close
          $("#content").css({"margin" : "60px 30px 30px 0"});
          $("#content").css({"width" : "100%"}); 
          $(this).children().attr("class", "fas fa-arrow-right");    // icon arrow

          $("#main_nav .logo").css({"display" : "none"});   // 로고 큰거 숨김
          // $("#main_nav .logo_sm").css({"display" : "inline-block"});   // 로고 작은거 보임  
          // $("#main_nav .logo").fadeOut(10);     // 로고 큰거 숨김
          $("#main_nav .logo_sm").fadeIn(500);      // 로고 작은거 보임  
      } else {
          $("#menu").css({"left" : 0});                           // 메뉴패널 Open
          $("#content").css({"margin" : "60px 30px 30px 230px"});
          $("#content").css({"width" : "calc(100% - 230px)"}); 
          $(this).children().attr("class", "fas fa-bars");   // icon hamberger

          $("#main_nav .logo_sm").css({"display" : "none"});   // 로고 작은거 숨김 
          // $("#main_nav .logo").css({"display" : "inline-block"});   // 로고 큰거 보임
          $("#main_nav .logo").fadeIn(500);     // 로고 큰거 보임
          // $("#main_nav .logo_sm").fadeOut(10);      // 로고 작은거 숨김                      
      }
      mtg = !mtg;    // 토들 상태 변경
    });

    /* 메인메뉴 클릭 시 서브메뉴 펼치고 닫기  */
    $(main_menu).click(function() {

      i = $(this).parent().parent().index();    // 현재 노드의 인덱스 저장 (부모인 ul의 index)
      i = i - 2;    // 같은 레벨인 span, a 태그를 인텍스에서 제외
      
      $(this).parent().parent().find("ul").stop().slideToggle();   // 서브 메뉴 펼침 토글
      
      if (expand[i] == 1) {      // 현재 노드가 열림준비 상태면
          // $(this).css({"color" : "#4476f8", "background-color" : "#0c101c"});   // main menu active            
          $(this).children("i").css({"transform" : "rotateZ(0)"});       // 화살표 방향 V    
          expand[i] = 0;      // 닫힘준비 상태로 변경
      } else {            // 현재 노드가 닫힘준비 상태면 "0"
          $(this).css({"color" : "#8f96a1", "background-color" : "#192032"});   // main menu normal
          $(this).children("i").css({"transform" : "rotateZ(-90deg)"});       // 화살표 방향 >   
          expand[i] = 1      // 열림준비 상태로 변경
      }               

    });

    /* 메인메뉴 마우스 오버 시 활성화하기  */    
    $(main_menu).hover(
      function() { $(this).addClass("on"); },
      function() { $(this).removeClass("on"); }
    );

    /* 서브메뉴 클릭시 활성화 */
    $(sub_menu).click(function() {
      i = $(this).parent().parent().parent().index();   // 현재 노드가 포함된 메인메뉴 인덱스 저장
      i = i - 2;  // 같은 레벨인 span, a 태그를 인텍스에서 제외
      si = $(this).index();    // 현재 서브메뉴 노드의 인덱스 저장 

      /* 활성화 중인 서브메뉴 비활성화 */
      $(sub_menu).children().removeClass("on");
      $(sub_menu).removeClass("on");
      
      /* 클릭한 서브메뉴 활성화 */
      $(this).children("a").addClass("on");      // 서브 메뉴 활성화
      $(this).addClass("on");      // 대시보드 > 요약 메뉴 삼각 돗 표시

      /* 클릭한 서브의 메인메뉴 활성화 */
      var mm = $(main_menu).parent().parent("ul").eq(i).children().children("a");     // 클릭된 서브메뉴가 포함된 메인메뉴
      $(main_menu).parent().parent("ul").children().children("a").removeClass("on");   // main menu 모두 비활성화  
      $(mm).addClass("on")  // 선택된 서브의 main menu active    
  
    });

    /*=========== 보고서 목록 메뉴 클릭시 활성화 ============*/

    $("#btn_report").click(function() {
      // alert("보고서 목록 메뉴 클릭");
      $("#content").css({"display" : "none"});
      $("#content2").css({"display" : "block"});
      $("#content2 #cen_group4 > div").css({"opacity" : 1, "transform" : "translateY(0)"});
    });
    $("#btn_dash").click(function() {
      $("#content").fadeIn(1000);
      // $("#content2").fadeOut(1000);
      $("#content2 #cen_group4 > div").css({"opacity" : 1, "transform" : "translateY(0)"});
     
    });
    


    /*----------------  사용자 메뉴 팝업 띄우고 감추기  --------------*/
    $("#main_nav .topmenu .user a").hover(      // 마우스 올리면
      function() { 
        $("#alertPopUp").hide(300);     // 알림창 닫고

        /*------- 셋업 패널 열고 닫기 ------*/
        if(!panel) {    // 닫혀 있으면
          $("#setupPanel").animate({"right": "-200px"}, 300);     // 닫고 
          panel = !panel;      // 상태 변경  
        }
                
        $("#userMenuPopup").show(300);  // 열고
      }, 
      function() {  /* 닫지 않는다.  */  }
    );
    $("#userMenuPopup ul").hover(      // 사용자 메뉴 팝업 목록에 마우스 올리면
      function() { /* 이미 열린 상태 */  },
      function() { $("#userMenuPopup").hide(300);  }  // 닫는다
    );

    /*----------------  알림 팝업 띄우고 감추기  --------------*/
    $("#main_nav .topmenu .notice a").hover(    // 알림 아이콘
      function() {    // alert icon 메뉴에 마우스 오버
        $("#userMenuPopup").hide(300);    // 열려있는 사용자 메뉴 창 닫고

        /*------- 셋업 패널 열고 닫기 ------*/
        if(!panel) {    // 닫혀 있으면
          $("#setupPanel").animate({"right": "-200px"}, 300);     // 닫고 
          panel = !panel;      // 상태 변경  
        }

        $("#alertPopUp").show(300);   // 알림창 열고
      },  
      function() { /* 닫지 않는다. */ }
    );
    $("#alertPopUp #viewall").click(function() {     // 알림 모두 보기 클릭하면
      $("#alertPopUp").hide(300);
    });    
    $("#alertPopUp > ul").hover(     // 알림 팝업 창에서 마우스 내리면
      function() {   /* 하는일 없음 */    },
      function() { $("#alertPopUp").hide(300); }    // 팝업창 닫는다.
    );

    /*----------------  셋업 패널 열고 닫기  --------------*/
    $("#main_nav .topmenu .setup a").click(function() {     // ---------- 클릭 이벤트
      if(panel) {    // 닫혀 있으면
        $("#setupPanel").animate({"right": "0"}, 300);  // 열고
      } else {             // 열려 있으면
        $("#setupPanel").animate({"right": "-200px"}, 300);     // 닫고 
      }
      panel = !panel;      // 상태 변경
    });

    $("#main_nav .topmenu .setup a").hover(    // -------------- 마우스 오버 이벤트 
      function() {    // alert icon 메뉴에 마우스 오버
        $("#userMenuPopup").hide(300);    // 열려있는 사용자 메뉴 창 닫고
        $("#alertPopUp").hide(300);   // 알림창 닫고

        if(panel) {    // 닫혀 있으면
          $("#setupPanel").animate({"right": "0"}, 300);  // 열고
        } else {             // 열려 있으면
          $("#setupPanel").animate({"right": "-200px"}, 300);     // 닫고 
        }
        panel = !panel;      // 상태 변경        
      },  
      function() { /* 닫지 않는다. */ }
    );

    $("#setupPanel").hover(       // 설정패널에 마우스 이벤트 
      function() {           // mouse over
        //        아무짖도 하지 않느다.
      },
      function() {          // mouse out
        if(panel) {    // 닫혀 있으면
          $("#setupPanel").animate({"right": "0"}, 300);  // 열고
        } else {             // 열려 있으면
          $("#setupPanel").animate({"right": "-200px"}, 300);     // 닫고 
        }
        panel = !panel;      // 상태 변경    
      }
    );
 
    /*----------------  스킨 선택 메뉴 클릭 이벤트  --------------*/
    $("#setupPanel #light").click(function() {      // light 버전
      var cs = document.getElementById("change_skin");
      if (skin == "dark") { cs.href = ("./css/style_light.css"); skin = "light"; }
    });
    $("#setupPanel #dark").click(function() {       // dark 버전
      var cs = document.getElementById("change_skin");
      if (skin == "light") { cs.href = ("./css/style_dark.css"); skin = "dark"; }
    });    

    /*----------------  전체 펼치고 접는 메뉴 마우스 오버  --------------*/
    $("#menu .wrap > a").hover(
      function() { $(this).addClass("on"); },
      function() { $(this).removeClass("on"); }
    )
    /*----------------  전체 펼치고 접는 메뉴 클릭 토글  --------------*/
    $("#menu .wrap > a").click(function() {
      if(folding) {
        $(main_menu).parent().parent().find("ul").stop().slideDown();   // 서브 메뉴 전체 펼침
        $("#menu .wrap > a > i").attr({"class" : "fas fa-angle-double-up"});
        $(main_menu).parent().parent().children().children("a").children("i").css({"transform" : "rotateZ(0)"});       // 화살표 방향 V 
        expand = [0, 0, 0, 0, 0, 0];
      } else {
        $(main_menu).parent().parent().find("ul").stop().slideUp();   // 서브 메뉴 전체 접음
        $("#menu .wrap > a > i").attr({"class" : "fas fa-angle-double-down"});
        $(main_menu).parent().parent().children().children("a").children("i").css({"transform" : "rotateZ(-90deg)"});       // 화살표 방향 V 
        expand = [1, 1, 1, 1, 1, ];
      }
      folding = !folding;
    });



    /*----------------  스피너 애니메이션 아이콘 중앙에 띄우기  --------------*/
    // 중앙 위치 잡기
    jQuery.fn.center = function () {
      this.css("position","absolute");
      this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
      this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
      return this;
    }
    // 스피너 보이고 감추기
    var ss = true;     // 스피너 숨김 상태
    $("#refresh").click(function() {
      if (ss) { 
        $("#spinner").show(300);
        $("#spinner").center();          
      } else {
        $("#spinner").hide(300);  
      }
      ss = !ss;
    });


    /*----------------  구글 지도 차트 API  --------------*/
    google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var options = { 
      // region: '002', // 002 :Africa, 
      colorAxis: {colors: ['#f6c244', '#6dc2b6', '#4aa8ee']},
      backgroundColor: 'transparent'  // 배경 투명
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
    }

    /*----------------  WAPPLES 사용률 바 차트 API  --------------*/
    new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'horizontalBar',
        data: {
          labels: ["CPU", "RAM", "DISK"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#f6c244", "#6dc2b6","#97c05c"],
              data: [2478,5267,834],
              borderWidth: 1   //  바의 테두리 굵기
              /* borderColor: '#000' */   // 바의 테두리 컬러
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            // text: 'Predicted world population (millions) in 2050'
          },
          layout: { 
            padding: { left: 0, right: 0, top: 2, bottom: 2 }    // 그래프 전체 안쪽 여백
          },
          scales: {
            yAxes: [{     // 수평라인 축  
              barPercentage: 0.9,     // 동적크기조정, barThickness 중에서 하나만 설정한다.
              // barThickness: 10,
              gridLines: {
                offsetGridLines: true,
                zeroLineColor: 'rgba(136, 136, 136, 0.5)',   // 그리드라인 색상 (세로축 1번 라인)
                color: 'rgba(136, 136, 136, 0.5)',   // 그리드라인 색상 (세로축 및 2, 3번 라인)
              },
              ticks: {              
                fontColor: '#888',   // 바 타이틀 색상
                fontStyle: '500'      // 바 타이틀 굵기
              },
              // scaleLabel: {
              //   fontColor: '#f00'
              // }
            }],
            xAxes: [{     // 수직라인 축
              gridLines: {
                offsetGridLines: true,
                zeroLineColor: 'rgba(136, 136, 136, 0.5)',   // 그리드라인 색상 (가로축 1번 라인)
                color: 'rgba(136, 136, 136, 0.5)',   // 그리드라인 색상 (가로축 및 2, 3번 라인)
              }
            }]            
          }           
        }
    });


});