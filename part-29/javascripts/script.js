// http 통신
/*
    GET, POST, PUT, DELETE
    조회, 입력, 수정, 삭제
    crud
    rest api

    통신
    프론트 <-> 백

    http 통신 <- pure script
    ajax <- jQuery
    fetch <- pure script(es6+)
*/

//  110.10.189.209:45678
// aaa.com:45678

// xhr 방식
// XMLHttpRequest(); 구조복잡

// http 상태코드
/*
    1xx -> 요청을 받았으며 프로세스를 계속
    2xx -> 성공
    3xx -> 리다이렉션 (추가 작업 조치 필요) 304(수정되지 않음)
    4xx -> 클라이언트 오류 404
    5xx -> 서버 오류 502
*/

document.querySelector('.btn1').addEventListener('click',function(){
    var xhr = new XMLHttpRequest();
// instance를 생성한다.
    xhr.open('GET','http://110.10.189.209:45678');
    xhr.send();

    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState); // 순서
        // console.log(xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200 ) {
           
            var result = xhr.responseText;
            var data = JSON.parse(result); // json 방식으로 바꾸어라 // 다같이 쓰는 공통적인 언어
           
            console.log(xhr.responseText);
            console.log(data);
            var message = data.message;
            $('body').append(message);
        }
    }
});

// ajax -> jquery 메소드
// 로딩바 삽입 가능
/*
    통신을 할 때는 크로스 도메인이 굉장히 중요하다.
    서버 보안을 위해 허용을 하지 않으면 데이터를 가져갈 수 없다.
 */

$('.btn2').on('click',function(){
    $.ajax({
        url : 'http://110.10.189.209:45678',
        type : 'GET',
        dataType : 'JSON', 
        success : function(data){
            console.log(data);
        },
        error : function(err){
            console.log(err);
        } 
    });
});

//  es6 이후 fetch API 
/*
    Promise 이해
    비동기 구조로 인한 복잡도를 개선할 수 있다.

    fetch(호출)
        .then(성공)
        .catch(실패);

    fetch(호출)
        .then(성공)
        .then(성공)
        .then(성공)
        .then(성공)
        .then(성공)
        .then(성공)
*/
// then에서 then으로 넘어갈 때 return을 사용
$('.btn3').on('click',function(){

    fetch('http://110.10.189.209:45678')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json);
        })
        .catch(function(e){
            console.log(e);
        })
});

/*

    http 통신

    JSON 데이터 방식을 주로 많이 사용한다.

    GET, POST, PUT, DELETE
    
    GET -> POST 결과의 차이는 없다.
    기능의 차이가 아니라 프로토콜의 차이다.
    데이터에 관한 의도의 차이
    기준이 되는 것은 자원(resource)

    -> promise sinker
    -> filter, map
    -> 클래스, 인스턴스
    
*/