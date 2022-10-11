let ranBodyParts = ['мозг', 'нос', 'глаза','мизинец ноги'],
ranAdjs =['душнила', 'вонючий', 'скучный', 'ленивый'],
ranWords = ['ленивца', 'муха', 'чепуха', 'спайдер-монке'],
ranIndex = Math.floor(Math.random() * 4),
ranBodyPartsAnimal = ['лапа', 'клык', 'хобот', 'хвост'],
list = [3, 2, 1],
result,
scores = {
    "Name1":{
        value: 0
    },
    "Name2":{
        value: 0
    },
    "Name3":{
        value: 0
    }
},
massive = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
},
resultlist = [],
animals = ['Кот', 'Рыба', 'Лемур', 'Комодский варан'],
alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
word = "", 
input="javasript is awesome", 
output = "";


function nurse1(ranBodyParts, ranAdjs, ranWords, ranIndex, result){
    result = `У тебя ${ranBodyParts[ranIndex]} словно ${ranAdjs[ranIndex]} ${ranWords[ranIndex]}!!!`;
    alert(result)
}

// nurse1(ranBodyParts, ranAdjs, ranWords, ranIndex, result)

function nurse2(ranBodyParts, ranAdjs, ranWords,ranBodyPartsAnimal, ranIndex, result){
    result = `У тебя ${ranBodyParts[ranIndex]} еще более ${ranAdjs[ranIndex]}, чем ${ranBodyPartsAnimal[ranIndex]} у ${ranWords[ranIndex]}!!!`;
    alert(result)
}

// nurse2(ranBodyParts, ranAdjs, ranWords,ranBodyPartsAnimal, ranIndex, result)

function nursePlus(ranBodyParts, ranAdjs, ranWords, ranIndex, result){
    result = 'У тебя ' + ranBodyParts[ranIndex] + ' словно ' + ranAdjs[ranIndex] + ' ' + ranWords[ranIndex] + '!!!';
    alert(result)
}

// nursePlus(ranBodyParts, ranAdjs, ranWords, ranIndex, result)

function nurseJoin(ranBodyParts, ranAdjs, ranWords, ranIndex, result){
    result = ['У тебя', ranBodyParts[ranIndex], 'словно', ranAdjs[ranIndex], ranWords[ranIndex], '!!!'].join(' ');
    alert(result)
}

// nurseJoin(ranBodyParts, ranAdjs, ranWords, ranIndex, result)

// alert(list.join(" больше, чем "))

function scoresPlus(scores){
    var i;
    do{
        let ans = prompt('Кто заработал новые очки', ' ');
        let name;
        switch(ans){   
            case "Name1":  
                name = scores["Name1"];
                name.value += 1;
                break;
            case "Name2":  
                name = scores["Name2"];
                name.value += 1;
                break;
            case "Name3":  
                name = scores["Name3"];
                name.value += 1;
                break;
        }
        i++
    }while(i < 3)
}

// scoresPlus(scores)

// alert(String(massive["some array"][2].number))

function removeList(listbegin,listend){
    listbegin.forEach(function(item){
        item += " - прекрасное животное\n";
        listend.push(item);
    }) 
    alert(listend.join(" "))
}

// removeList(animals, resultlist)

function randomString(alphabet, word){
    let i, symphol;
    for(i = 0; i < 6; i++){
        symphol = Math.floor(Math.random() * alphabet.length);
        word += alphabet[symphol];
    }
//     while(i < 6){
//        symphol = Math.floor(Math.random() * alphabet.length);
//        word += alphabet[symphol];
//        i++
//  }
    alert(word)
}

// randomString(alphabet, word)


function rePlace(input, output){
    let inputlist = input.split("");
    inputlist.forEach(function(item){
        switch(item){
            case "a":
                output += 4;
                break;
            case "e":
                output += 4;
                break;
            case "o":
                output += 4;
                break;
            default:
                output += item;
                break;
        }
    })
    alert(output);
}

// rePlace(input, output);