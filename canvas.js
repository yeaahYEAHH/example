function randomNum() {
    let range = [],
    item = -5,
    ranIndex = Math.floor(Math.random() * 10);
    for(let i = 0; i <= 10; i++){
        range[i] = item;
        item++
    }
    return range[ranIndex]
}

function randomColor() {
    let color = ["Red", "Orange", "Blue", "Yellow", "Green", "Purple"],
    ranIndex = Math.floor(Math.random() * color.length);
    return color[ranIndex]
}

class Ball {
    constructor() {
        this.x = Math.floor(Math.random() * width);
        this.y = Math.floor(Math.random() * height);
        this.xSpeed = randomNum();
        this.ySpeed = randomNum();
    }
    draw() {
        circle(this.x, this.y, 3, true);
    }
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    checkCollision() {
        if (this.x < 0 || this.x > width){
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < 0 || this.y > height){
            this.ySpeed = -this.ySpeed
        }
    }
}

let canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),

circle = function (x, y, radius, fill){
    ctx.beginPath();   
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(fill){
        ctx.fillStyle = randomColor();
        ctx.fill();
    }else{
        ctx.stroke();
    }
};

canvas.width = 500;
canvas.height = 300;

let width = canvas.width,
height = canvas.height;


setInterval(function(){
    ctx.clearRect(0, 0, width, height);
    for(let i = 0; i <= 10; i++){
        ballgum = new Ball;
        ballgum.draw();
        ballgum.move();
        ballgum.checkCollision();
    }
    ctx.strokeRect(0, 0, width, height)
}, 30)
