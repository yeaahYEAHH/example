$("#title").text(`Мои друзья`)

let list = ['1', '2', '3']
list.forEach(function(item){
    $("#ex1").append(`<p> ${item}</p>`)
})
$("p").append(` лучший`).hide(3000).fadeIn(3000)

for(let i = 0; i < 5; i++){
    $("#title-blind").fadeOut(200).fadeIn(200);
}

for(let i = 0; i < 5; i++){
    $("#title-blind2").fadeOut(1000 * i).fadeIn(1000 * i);
}

$("#ex3").fadeOut().delay(5000).fadeIn();

$("#ex4").fadeTo(2000, 0.5);
