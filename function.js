function add(num1, num2){
    return num1 + num2;
};

function multiply(num1, num2){
    return num1 * num2;
     
};
// console.log(add(multiply(36325, 9824), 777));

function areArraySame(list1, list2){
    list1.forEach(function(item, i){
        if(item !== list2[i] || list1.length !== list2.length){
            return false
        }
    })
    return true
}
// console.log(areArraySame([1, 2, 3], [1, 2, 3]))

let pickWord = function () {
    let words = [
      "программа",
      "макака",
      "прекрасный",
      "оладушек"
    ];
    return words[Math.floor(Math.random() * words.length)];
};

let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

let getGuess = function () {
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};

let updateGameState = function (guess, word, answerArray) {
    let appearances = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }
    return appearances;
};

let showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + word.join(""));
};

let word = pickWord(),
answerArray = setupAnswerArray(word),
remainingLetters = word.length;

// while (remainingLetters > 0) {
//     showPlayerProgress(answerArray);
//     let guess = getGuess();
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     } else {
//         let correctGuesses = updateGameState(guess, word, answerArray);
//         remainingLetters -= correctGuesses;
//     }
// };
// showAnswerAndCongratulatePlayer(answerArray);
