let words = [
    "программа","макака",
    "компьютер","клавиатура",
    "чепух", "ааааа"],
word = words[Math.floor(Math.random() * words.length)],
answerArray = [], 
remainingLetters = word.length,
limit = word.length + 3,
percent = limit,
hit = false, 
canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");

function headDraw(){
    ctx.moveTo(500,100); 
    ctx.lineTo(500,150);
    
    ctx.moveTo(450,100); 
    ctx.lineTo(500,100);

    ctx.moveTo(450,100); 
    ctx.lineTo(450,150);

    ctx.moveTo(450,150); 
    ctx.lineTo(500,150);


}

function bodyDraw(){
    ctx.moveTo(475,150); 
    ctx.lineTo(475,250);
}

function armDraw(){
    ctx.moveTo(475,160); 
    ctx.lineTo(500,230);
    
    ctx.moveTo(475,160); 
    ctx.lineTo(450,230);
}

function legDraw(){
    ctx.moveTo(475,250); 
    ctx.lineTo(500,325);

    ctx.moveTo(475,250); 
    ctx.lineTo(450,325);
}

function ropeDraw(){
    ctx.moveTo(475,100); 
    ctx.lineTo(475,50);
}

function standDraw(){
    ctx.moveTo(450,50); 
    ctx.lineTo(575,50); 
    
    ctx.moveTo(525,50); 
    ctx.lineTo(575,100); 

    ctx.moveTo(575,50); 
    ctx.lineTo(575,350);
    
    ctx.moveTo(575,350); 
    ctx.lineTo(400,350);

    ctx.moveTo(450,350); 
    ctx.lineTo(400,375);

    ctx.moveTo(525,350); 
    ctx.lineTo(575,375);
}
    
for(let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

while (remainingLetters > 0  && limit > 0) {
    ctx.beginPath(); 
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

    if (guess === null) {
    break;
    } 
    else if (guess.length !== 1) {
    alert("Пожалуйста, введите одичную букву.");
    } 
    else {
        guess = guess.toLocaleLowerCase();
        for (let j = 0; j < word.length; j++) {

            if (word[j] === guess) {
                hit = true;
                answerArray[j] = guess;
                remainingLetters--;
            }
        }

        if(!hit){
            limit--;
            alert("Осталось " + limit + " попыток");
            if(true){
                
                headDraw();
                ctx.stroke();
                
            }
            
            // else if(limit === 0){
            //     alert("Попытки закончились");
            // }
        }
    }

}


alert(answerArray.join(" "));
alert("Было загадано слово " + word);
    




