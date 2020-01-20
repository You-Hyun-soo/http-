// 객체지향 프로그래밍
// 클래스

/*

    객체란 하나의 개념
    핸드폰, 리모콘, 세탁기, 냉장고, TV
    클래스 -> 객체(인스턴스)


 */

 /*
    1. 추상화 -> 보이는 형태, 개발구조, 기능
    2. 캡슐화 -> 데이터,기능을 보호하기 위함
    3. 상속 -> 재활용을 기준으로 기능을 분리한다.
    4. 다형성 -> 한가지의 기능이 여러가지를 하게 되는
    5. 합성 -> 자바스크립트에서는 거의 의미가 없음
 */

 // 추상화

// TV

/*
    추상화
    메소드(기능), 프로퍼티(자원) 구분하기 위함
    method, property(멤버변수)

    변수 -> 지역변수, 전역변수, 매개변수(함수), 멤버변수(클래스)

    ----- 멤버 변수 -----
    제조사
    인치
    모델명
    패널

    ----- 메소드(내장함수) -----
    전원()
    채널()
    볼륨()

    ----- 특수기능 -----
    타임머신()
    APP()
    3D()
    인공지능() -> 머신, 딥러닝(자료분석)
*/

// 클래스 만드는 4가지 방법
/*
    1. 리터널 방식
    2. 함수 방식
    3. 프로토타입 방식
    4. ES6 버전 이후 클래스 사용방법
*/

// 1. 리터널 방식 -> 보이는 그대로 만든다.

var a = { num : 10 };
var b = new Object();
b.num = 20;

// 클래스를 만들때는 꼭 변수명을 대문자로 시작한다. => 약속
var MakeTV = {

    company : '삼성',
    inch : '55인치',
    model : 'UHD-55',

    power : function(){console.log('전원')},
    channel : function(){console.log('채널')},
    volume : function(){console.log('볼륨')}

}

var MakeAppTV = {
    
    company : '삼성',
    inch : '55인치',
    model : 'UHD-55',

    power : function(){console.log('전원')},
    channel : function(){console.log('채널')},
    volume : function(){console.log('볼륨')},

    app : function() { console.log('어플리케이션 기능')}
}

// 단점은 재활용이 불가능하다. (일회용이다.)
// 클래스 == 인스턴스
// console.log(MakeAppTV.company);
// MakeAppTV.power(); // click 이벤트

// 2. 함수 방식 클래스
// this

// console.log(this);

function a1(){
    console.log(this);
}

a1();  // window라는 객체를 바라보는 것

// 객체 안의 this는 그 객체를 바라본다.
var obj = {
    a : function(){
        console.log(this);
    }
}

// obj.a(); // obj라는 객체를 바라보는 것
var a2 = obj.a;
// a2(); // window라는 객체를 바라본다. 객체의 함수만을 바라보는 것

// this는 호출되는 시점에 따라 달라진다.

// 함수 클래스

var obj1 = {

    a : 10,
    b : function(){
        console.log(this.a);
    }
}

var a = 20;

function FuncClass(number){
    this.a = number;
    this.b = function(){
        console.log(this.a);
    }
    this.b();
}

// obj1.b();
// FuncClass();

var instance = new FuncClass(100);
var instance1 = new FuncClass(50); // 함수가 new를 반나면 변수에 객체가 생긴다.

//  함수는 new 생성자를 만나게 되면 객체로 리턴된다.
// instance.b();
// instance1.b();

function NormalTV(inch){
    this.company = '삼성';
    this.inch = inch;
    this.model = 'UHD-' + inch;

    this.power = function(){
        
    }
}

var TVUHD50 = new NormalTV(50);
var TVUHD70 = new NormalTV(70);

// console.log(TVUHD50.model);
// console.log(TVUHD70.model);

// 단점 상속이 불가능하다.

// 3. prototype (프로토 타입)
// 자바스크립트의 제일 낮은 개념 (태생)
// 초기모델

function TV(inch,model){
    // 초기화
    this.company = '삼성';
    this.inch = inch;
    this.model = model;
    
}
TV.prototype.number = 100;
TV.prototype.power = function(){
    console.log('전원');
}
// 기능에 대한 정의는 바깥에다가 따로 적는다.

var tv = new TV('55','UHD-55S');
console.log(tv.model);
tv.power();
function App(){
    
}

App.prototype = new TV('60','UHD-APP-60S'); // TV를 상속받는다.
App.prototype.application = function(){
    console.log('어플리케이션 화면 시작');
}

var app = new App();
// console.log(app.number);
app.application();

/*
    1. 추상화
    2. 클래스 만드는 방법
    
*/

// 캡슐화

// 알약 이랑 같은 개념
// public, private, protect
// 공용 , 보호(절대 바뀌면 안되는 것)

function CapClass(){
    // this._company = "삼성"; // 데이터를 보호해야 하는 순간이 생긴다
    // 자바스크립트는 _를 붙임으로 인해서 보호해야 한다 라는 약속을 만들어 준다.(암묵적인 sign)
    var _company = "삼성"; //캡슐화
    // 언더바를 붙이는 순간 멤버변수의 역할을 수행하지 못하기 때문에 undefined가 표시
    // 자바를 예를 들어보면
    /*
        public int a = 10 // 공용으로 쓸 수 있는 변수
        private int b = 100 // 어떤 조건에 의해서만 접근이 가능 // 수정을 하면 에러가 발생
    */
    this.setCompany = function(company){
        _company = company;
    }

    this.getCompany = function(){
        console.log(_company);
    }
}

var cap = new CapClass();
// cap.company = "LG"; // 그래서 수정이 불가능하다.
console.log(cap._company); // 직접 접근이 안된다.
cap.getCompany();
cap.setCompany('LG');
cap.getCompany();