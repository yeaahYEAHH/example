let Car = function(x,y){
    this.x = x;
    this.y = y;
}

Car.prototype.draw = function (){
    var carHtml = '<img src="car.webp">';
    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        letf: this.x,
        top: this.y
    });

    $(".car").append(this.carElement);
};

Car.prototype.move = function(speed){
    this.x += speed;
    this.carElement.css({
        left: this.x,
    });
};

var tesla = new Car(20,10);
var autobot = new Car(20, 100);
tesla.draw();
autobot.draw();

setInterval(function(){tesla.move(Math.floor(Math.random() * 5))}, 30)
setInterval(function(){autobot.move(Math.floor(Math.random() * 5))}, 30)


