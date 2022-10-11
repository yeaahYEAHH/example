let words = [
"программа","макака",
"компьютер","клавиатура",
"чепух", "ааааа"],
word = words[Math.floor(Math.random() * words.length)],
answerArray = [], 
remainingLetters = word.length,
limit = word.length,
hit = false;

for(let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

while (remainingLetters > 0  && limit > 0) {
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
            if(limit === 0){
                alert("Попытки закончились");
            }
        }
    }
}
alert(answerArray.join(" "));
alert("Было загадано слово " + word);
