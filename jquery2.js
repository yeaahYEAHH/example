$('html').click(function(e){
    $('#title').offset({
        left: e.pageX,
        top: e.pageY
    })
})
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
setInterval(move, 1);