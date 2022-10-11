let words = [
    "программа",
    "макака",
    "компьютер",
    "клавиатура"],
word = words[Math.floor(Math.random() * words.length)],
answerArray = [], 
remainingLetters = word.length;;

word.split().forEach(function(item, i){
    answerArray[i] = '_';
})

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    guess = guess.toLocaleLowerCase;
    if (guess === null) {
    break;
    } 
    else if (guess.length !== 1) {
    alert("Пожалуйста, введите одичную букву.");
    } 
    else {
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }
        }
    }
}``
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);