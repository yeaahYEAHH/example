// $('html').click(function(e){
//     $('#title').offset({
//         left: e.pageX,
//         top: e.pageY
//     })
// })
let letft = 0,
topt = 0,
move = function(){
    $('#title-blind').offset({
        left: letft,
        top: topt,
    })

    if(letft < 200 && topt <= 0){
        letft++;
    }else if(letft >= 200 && topt < 200){
        topt++;
    }else if(letft > 0 && topt >= 200){
        letft--
    }else if(letft <= 0 && topt > 0){
        topt--;
    }

}
// let moveaq = setInterval(move, 1);
// $('#title-blind').click(function(){
//     clearInterval(moveaq);
// })
$('#title-blind').click(function(){
    setInterval(move, 0.2);
    count++;
    if(count > 10){
        alert("win");
    }
})
