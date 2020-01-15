// map과 filter

// map -> 배열을 다루는 방법
/*
    map과 filter 결과값을 배열로 리턴한다.

    배열 -> 새로운 배열을 만들어준다.

    map의 배열의 길이는 결과로 나오는 배열길이와 동일하다.
    filter의 배열의 길이는 결과와 다른 길이를 가질 수 있다.(이하로만 생성)
    5개의 배열 -> 5개 이하의 filter
*/

//  배열.map(function(){});

var number = [ 10, 20, 30, 40, 50 ];

var result = number.map((value,index)=>{
    return value * 2;
    // 리턴을 한 결과값으로 배열

});
//console.log(value); // 배열이 가지는 원소의 값
//console.log(index); // 배열의 index
console.log(result);

var result1 = number.filter((value,index)=>{
    return value > 20;
    //현재의 값을 필터링
    //값이 true 인것들만 return 시켜주는 방식

});

console.log(result1);

// promise (es6 ~)
// async await (es7 ~) <- promise 기반
// 목적은 동일
// 가독성을 높이기 위한 것

/*

    자바스크립트는 비동기 언어
    순서대로 진행하지 않는다. (시간)


 */

var a = 10;
var b = 20;
var c = 30;

function plus(cb){
   console.log(b) ;
   cb();
};
function be(cb){ // 실행 후 다음 실행될 함수를 받는다.
    setTimeout(function(){
        plus(cb);
    },1000);
};
function callback(){
    console.log(a);
};

function callback1(){
    console.log(c);
}

be(callback1);
// 시간에 따른 개념으로 비동기의 방식을 가진다.
// 비동기를 동기화 시키기 위해서 콜백함수를 사용

// 스케줄 만들기

function play(time,schedule,cb){
    
    var init = 0;

    setInterval(function(){
        init++;
        if( init == time) {
            cb(); // 콜백함수 // time 시간 경과후에 하고싶은 기능을 넣을 수 있다.
        }
    },1000);
}

$('.play').on('click',function(){
    var time = $('.time').val();
    var schedule = $('.move').val();
    play(time,schedule,finish);
});

function finish(){
    alert('시계로 알려주는 기능');
}
function finish1(){
    alert('푸시로 알려주는 기능');
}
function finish2(){
    alert('메일로 알려주는 기능');
}

// 비동기
// 콜백지옥
// 구조가 복잡해질 수록 가독성이 좋아지지 않고 수정의 기능에 있어 차질이 생긴다.
function a(){

    // a가 하고 싶을 기능을 다하고 그 다음 b를 실행

    function b(){
    // b가 하고 싶을 기능을 다하고 그 다음 c를 실행

        function c(){
    // c가 하고 싶을 기능을 다하고 그 다음 d를 실행

            function d(){
                //...
            }
        }
    }
}

// promise

function a1(){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('1');
            resolve('완료'); // 다음 promise 기능으로 넘긴다 성공일경우 resolve / 실패일경우 reject
        },5000);
    });
      
}
function b1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('2');
            resolve();
        },6000);
    });
}
function c1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('3');
            resolve();
        },7000);
    });
}

function d1(){
    console.log('카운트가 끝났습니다.')
}

// function startCount(){

//     b1(function(){
//         a1(function(){
//             c1(function(){
//                 d1();
//             });
//         });
//     });
//     b1()
//         .then(a1)
//         .then(c1).catch(function(){})
//         .then(d1);
// }
// then은 resolve를 만나면 실행하는 것
// catch는 reject를 만나면 실행하는 것

// async await

// async function startCount(){
//     const text = await a1();
//     await c1();
//     await b1();
//     d1();
//     console.log(text);
// }
// IE에서 지원을 하지 않는다.
// FRONEND에서 쓰기 힘듦
startCount();

// 동기, 비동기, 콜백함수, 객체지향(추상적), promise, async await



 