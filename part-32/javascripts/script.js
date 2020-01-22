// 이미지정렬 -> 객체지향 (프로토타입방식을 사용)
// 모듈패턴(디자인 패턴) -> 제이쿼리

var doc = document;
var img = doc.getElementsByTagName('img'); // 배열로 잡힌다. 0~6
var count = img.length

/*

doc.getElementById('horizontal').addEventListener('click',function(){

    // 가로정렬 기능을 만들어 보자.
  
   for(var i = 0; i < count; i++){
       var move = i * 200;
       img[i].style.left = move + 'px'
       img[i].style.top = 0;
    }
    
});

doc.getElementById('vertical').addEventListener('click',function(){
    
    // 가로정렬 기능을 만들어 보자.
   
   for(var i = 0; i < count; i++){
        var move = i * 270;
        img[i].style.top = move + 'px'
        img[i].style.left = 0;
    }
    
});
*/

// 프로토타입

function Poster() {

    // 초기화 (멤버변수)
    this._selector = doc.getElementsByTagName('img');
    this._count = this._selector.length;
}

Poster.prototype.init = function(a,b,c,d){
    console.log(this);
    // doc.getElementById('horizontal').addEventListener('click',()=>{ // arrow 방식은 this에 영향을 주지 않는다.
    //     console.log(this);
    // });

    // doc.getElementById('horizontal').addEventListener('click',(function(){
    //     console.log(this);
    // }).bind(this));

    // var self = this;
    // doc.getElementById('horizontal').addEventListener('click' ,function(){
    //     self.horizontal(self);
    // });
    // console.log(a._count)
    doc.getElementById(a).addEventListener('click',this.horizontal.bind(this)); // 객체에 바인딩을 시켜주는 것
    doc.getElementById(b).addEventListener('click',this.vertical.bind(this));
    doc.getElementById(c).addEventListener('click',this.random.bind(this));
    doc.getElementById(d).addEventListener('click',this.grid.bind(this));
}
Poster.prototype.horizontal = function(){ // 가로정렬의 기능
    console.log(this._count);
    for(var i = 0; i < this._count; i++){
        this._selector[i].style.left = (i * 200) + 'px';
        this._selector[i].style.top = 0;
     }
}

Poster.prototype.vertical = function(){ // 가로정렬의 기능
    console.log(this._count);
    for(var i = 0; i < this._count; i++){
        this._selector[i].style.top = (i * 270) + 'px';
        this._selector[i].style.left = 0;
     }
}

Poster.prototype.random = function(){
    
    // Math객체  
    for (var i =0; i < this._count; i++) {
        var randomX = Math.random() * 200; // 0과 1사이의 난수 // 0 ~ 200
        var randomY = Math.random() * 270; // 0 ~ 270
    // console.log(random);
        this._selector[i].style.top = randomY + 'px';
        this._selector[i].style.left = randomX + 'px';
    } 
}

Poster.prototype.grid = function(){
    
    // 바둑판 배열
    // x -> 0,1,2,0,1,2,0,1,2
    // y -> 0,0,0,1,1,1,2,2,2

    var grid = 3; // 배열의 숫자를 바꾸는데 용이하다.

    for (var i = 0; i < this._count; i++ ){
        // 0,1,2,3,4,5,6,7,8
        // 0,1,2,0,1,2,0,1,2 -> 3으로 나눴을 때 나머지 %3
        // 0,0,0,1,1,1,2,2,2
        var x = (i % grid) * 200;
        var y = parseInt(i / grid) * 270;
        this._selector[i].style.left = x + 'px';
        this._selector[i].style.top = y + 'px';
    }
}

var poster = new Poster();

poster.init('horizontal','vertical','random','grid');