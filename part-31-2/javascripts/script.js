// es6 클래스

var a = {
    num : 10,
    getNum(){
        console.log(this.num);
    }
}

// a.getNum();
/*
function Poly(){
    this.width = width;
    this.height = height;
}

Poly.prototype.getSum = function(){}
*/
class Polygon {

    constructor(width,height){
        // 초기 생성자
        // constructor 메소드는 한번만 사용해야만 한다.
        this.width = width;
        this.height = height;
    }

    sum(){
        return this.width * this.height;
    }

    get area(){
        return this.sum();
    }

    static plus(a,b){
        return a+b;
    }
    // 정적 메소드
    // instance를 통해서 접근이 불가 직접적으로 접근해야함 class Polygon으로 직접 접근해야한다.
}

const polygon = new Polygon(100,200); // polygon 이라는 객체가 변하지 않을 것이라는 가정하에 상수인 const를 사용
// console.log(polygon.area);
// console.log(Polygon.plus(50,70)); // 소문자 p를 쓰면 오류가 난다. 

//  상속

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(this.name + '은 소리를 냅니다.');
    }
}

class Dog extends Animal{ //상속

    speak(){
        super.speak(); // super는 상속받은 부모의 speak를 호출하게 한다.
        console.log(this.name + '은(는) 멍멍하고 소리를 냅니다.');
    }
}

const dog = new Dog('웰시코기');
dog.speak();
const animal = new Animal('웰시코기');
animal.speak();

//

function A1(number){
    this.number = number;
}
// 일반함수
class B1 extends A1{
    getNumber(){
        console.log(this.number);
    }
}
// es6 함수
// 두 함수의 방식이 달라도 똑같다
const a1 = new A1(100);
console.log(a1.number);

const b1 = new B1(200);
b1.getNumber();

// function C1(){

// }

const C1 = () => {

};
//es6 버전의 에로우 방식의 함수
//이전에는 함수와 class 방식의 역할이 합쳐져있지만
//es6에서는 에로우방식의 함수와 class의 역할이 분명하게 나뉘어져 있다. 그래서 오류가 발생한다.
var c1 = new C1();
// 함수언어