// function randomNum() {
//     let range = [],
//     item = -5,
//     ranIndex = Math.floor(Math.random() * 10);
//     for(let i = 0; i <= 10; i++){
//         range[i] = item;
//         item++
//     }
//     return range[ranIndex]
// }

// function randomColor() {
//     let color = ["Red", "Orange", "Blue", "Yellow", "Green", "Purple"],
//     ranIndex = Math.floor(Math.random() * color.length);
//     return color[ranIndex]
// }

// class Ball {
//     constructor() {
//         this.x = Math.floor(Math.random() * width);
//         this.y = Math.floor(Math.random() * height);
//         this.xSpeed = randomNum();
//         this.ySpeed = randomNum();
//     }
//     draw() {
//         circle(this.x, this.y, 3, true);
//     }
//     move() {
//         this.x += this.xSpeed;
//         this.y += this.ySpeed;
//     }
//     checkCollision() {
//         if (this.x < 0 || this.x > width){
//             this.xSpeed = -this.xSpeed;
//         }
//         if (this.y < 0 || this.y > height){
//             this.ySpeed = -this.ySpeed
//         }
//     }
// }

// circle = function (x, y, radius, fill){
//     ctx.beginPath();   
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if(fill){
//         ctx.fillStyle = randomColor();
//         ctx.fill();
//     }else{
//         ctx.stroke();
//     }
// };

let canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),

circle = function (x, y, radius, fill){
    ctx.beginPath();   
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(fill){
        ctx.fill();
    }else{
        ctx.stroke();
    }
};

canvas.width = 500;
canvas.height = 300;

let width = canvas.width,
height = canvas.height;

// let newBall = function() {
//     this.x = width / 2;
//     this.y = height / 2;
//     this.speed = 2;
//     this.xSpeed = 1;
//     this.ySpeed = 0;
// };

// newBall.prototype.move = function() {
//     this.x += this.xSpeed * this.speed;
//     this.y += this.ySpeed * this.speed;
//     if (this.x < 0 || this.x > width){
//         this.xSpeed = -this.xSpeed;
//     }
//     if (this.y < 0 || this.y > height){
//         this.ySpeed = -this.ySpeed
//     }

// };

// newBall.prototype.draw = function(){
//     circle(this.x, this.y, 10, true)
// };

// newBall.prototype.setDirection = function(direct) {
//     if(direct === "up"){
//         this.xSpeed = 0;
//         this.ySpeed = -2;
//     }else if(direct === "down"){
//         this.xSpeed = 0;
//         this.ySpeed = 2;
//     }else if(direct === "left"){
//         this.xSpeed = -2;
//         this.ySpeed = 0
//     }else if(direct === "right"){
//         this.xSpeed = 2;
//         this.ySpeed = 0;
//     }else if(direct === "stop"){
//         this.xSpeed = 0;
//         this.ySpeed = 0;
//     }
// };

// newBall.prototype.setSpeed = function(set){
//     if(set !== undefined){
//         this.speed = set
//     }
// }

// let ballgame = new newBall(),

// keyActions = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// },

// keySpeed = {
//     49: 1,
//     50: 2,
//     51: 3,
//     52: 4,
//     53: 5,
//     54: 6,
//     55: 7,
//     56: 8,
//     57: 9
// };

// $("body").keydown(function(e){
//     ballgame.setDirection(keyActions[e.keyCode]);
//     ballgame.setSpeed(keySpeed[e.keyCode])
// })

// setInterval(function(){
//     ctx.clearRect(0, 0, width, height);
//     ballgame.draw();
//     ballgame.move();
//     ctx.strokeRect(0, 0, width, height)
// }, 30)


// setInterval(function(){
//     ctx.clearRect(0, 0, width, height);
//     for(let i = 0; i <= 10; i++){
//         ballgum = new Ball;
//         ballgum.draw();
//         ballgum.move();
//         ballgum.checkCollision();
//     }
//     ctx.strokeRect(0, 0, width, height)
// }, 30)

let Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 5;
    this.size = 10;
    this.xSpeed = 1;
    this.ySpeed = 0;
  };

Ball.prototype.move = function () {
    if(this.speed <= 0){
        this.speed = 1
    }
    this.x += this.xSpeed * this.speed;
    this.y += this.ySpeed * this.speed;

    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    } else if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

Ball.prototype.draw = function () {
    if(this.size <= 0){
        this.size = 1
    }
    circle(this.x, this.y, this.size, true);
};

Ball.prototype.doAction = function (action) {
    if (action === "вверх") {
        this.xSpeed = 0;
        this.ySpeed = -1;
    } else if (action === "вниз") {
        this.xSpeed = 0;
        this.ySpeed = 1;
    } else if (action === "влево") {
        this.xSpeed = -1;
        this.ySpeed = 0;
    } else if (action === "вправо") {
        this.xSpeed = 1;
        this.ySpeed = 0;
    } else if (action === "стоп") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (action === "быстрее") {
        this.speed++;
    } else if (action === "медленнее") {
        if (this.speed > 0) {
        this.speed--;
        }
    } else if (action === "меньше") {
        if (this.size > 0) {
        this.size--;
        }
    } else if (action === "больше") {
        this.size++;
    }
};

let ball = new Ball();

let keyActions = {
    32: "стоп",
    37: "влево",
    38: "вверх",
    39: "вправо",
    40: "вниз",
    88: "быстрее",
    90: "медленнее",
    67: "меньше",
    86: "больше"
};

$("body").keydown(function (event) {
    let action = keyActions[event.keyCode];
    ball.doAction(action);
});

setInterval(function () {
    ctx.clearRect(0, 0, width, height);

    ball.draw();
    ball.move();

    ctx.strokeRect(0, 0, width, height);
}, 30);


    
