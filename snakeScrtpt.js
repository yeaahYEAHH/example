let canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
width = canvas.width,
height = canvas.height,
blockSize = 10,
widthInBlock = width / blockSize,
heigthInBlock = height / blockSize,
score = 0,
directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

function drawBorder(){
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect( width - blockSize, 0, blockSize, height);
};

function drawScore(){
    ctx.font = "30px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Счет: ${score}`, blockSize, blockSize);
};

function gameOver(){
    play = false;
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`Конец игры`, width / 2, height / 2);
};

function circle(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

let Block = function(col, row){
    this.col = col;
    this.row = row
};

Block.prototype.drawSquare = function(color){
    let x = this.col * blockSize,
    y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize)
};

Block.prototype.drawCircle = function(color){
    let centerX = this.col * blockSize + blockSize / 2,
    centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
}

Block.prototype.equel = function(otherblock){
    return this.col === otherblock.col && this.row === otherblock.row
};

let Snake = function() { 
    this.segment = [new Block(7, 5), new Block(7, 6), new Block(7,7)];
    this.direction = "right";
    this.nextDirection = "right";
}

Snake.prototype.draw = function() {
    let isEvenSegment = false;
    for(let i = 0; i < this.segment.length; i++){
        if(isEvenSegment){
            this.segment[i].drawSquare("Yellow")
        }else{
            this.segment[i].drawSquare("Blue")         
        }
        isEvenSegment = !isEvenSegment;
    }
}

Snake.prototype.checkCollision = function (head) {
    let leftCollision = (head.col === 0),
    topCollision = (head.row === 0),
    rightCollision = (head.col === widthInBlock - 1),
    bottomCollision = (head.row === heigthInBlock - 1),

    wallCollision = leftCollision || topCollision || rightCollision || bottomCollision,
    selfCollision = false;

    for (var i = 0; i < this.segment.length; i++) {
      if (head.equel(this.segment[i])) {
        selfCollision = true;
      }
    }

    return wallCollision || selfCollision;
};

Snake.prototype.move = function () {
    let head = this.segment[0],
    newHead;

    this.direction = this.nextDirection;

    if (this.direction === "right") {
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down") {
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
        newHead = new Block(head.col, head.row - 1);
    }

    if (this.checkCollision(newHead)) {
        gameOver();
        return;
    }

    this.segment.unshift(newHead);

    if (newHead.equel(apple.position)) {
        animationTime -= 4;
        score++;
        apple.move(this.segment);
    } else {
        this.segment.pop();
    }
};


Snake.prototype.setDirection = function(newDirection){
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
       return;
    }

    this.nextDirection = newDirection;
};



let Apple = function() { 
    this.position = new Block(10, 10)
}

Apple.prototype.draw = function () {
    this.position.drawCircle("Red");
};

Apple.prototype.move = function (list) {
    let randomCol = Math.floor(Math.random() * (widthInBlock - 2)) + 1,
    randomRow = Math.floor(Math.random() * (heigthInBlock - 2)) + 1;
    this.position = new Block(randomCol, randomRow);

    var index = occupiedBlocks.length - 1;
    while ( index >= 0 ) {
      if (this.position.equal(occupiedBlocks[index])) {
        this.move(occupiedBlocks); // Вызываем метод move повторно
        return;
      }
      index--;
    }
};



let snake = new Snake,
apple = new Apple,
animationTime = 100,
play = true;


let gameLoop = function () {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.draw();
    snake.move();
    apple.draw();
    drawBorder();

    if (play) {
      setTimeout(gameLoop, animationTime);
    }
};

  // Начинаем игровой цикл
gameLoop();



$("body").keydown(function(e){
    let newDirection = directions[e.keyCode];
    if( newDirection !== undefined){
        snake.setDirection(newDirection);
    }
})

