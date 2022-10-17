let canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");

function showSnowman(xs, ys){
    function circle(line, x, y, radius, fill, color){
        ctx.lineWidth = line;
        ctx.strokeStyle = color;
        ctx.beginPath();   
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.stroke();
        if(fill == true){
            ctx.fillStyle = color;
            ctx.fill()
        }
    }


    circle(4, xs, ys - 85, 5, true, "Orange")
    circle(4, xs - 20, ys - 95, 5, true, "Black")
    circle(4, xs + 20, ys - 95, 5, true, "Black")
    
    circle(4, xs, ys + 20, 5, true, "Black")
    circle(4, xs, ys, 5, true, "Black")
    circle(4, xs, ys - 20, 5, true, "Black")
    
    circle(4, xs, ys-90, 40, false, "Black")
    circle(4, xs, ys, 50, false, "Black")

}

// showSnowman(200, 200)

var point = [[50,50],[30,30], [40,50], [20,20], [100,200]],
x1, y1, x2, y2;
function draw(list){
    for(let i = 0; i < list.length; i++){
        let next = i + 1;
        x1 = list[i][0],
        y1 = list[i][1];
        ctx.beginPath();   
        ctx.arc(x1, y1, 2, 0, Math.PI * 2, false);
        if(next < list.length){
            x2 = list[next][0];
            y2 = list[next][1];
            ctx.lineTo(x2,y2);
            ctx.moveTo(x1,y1);
        }
        ctx.stroke();
    }
    
}

// draw(point)

let circledraw = function(x, y){
    ctx.lineWidth = 3;
    ctx.strokeStyle = "Black";
    ctx.beginPath();   
    ctx.arc(x, y+200, 3, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
}

$('#canvas').mousemove(function(e){
    circledraw(e.pageX, e.pageY)
})


