
var noDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<noDrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var innHTML = this.innerHTML;
        drums(innHTML);
        anim(innHTML);
    });

}
document.addEventListener("keydown",function(event){
    drums(event.key);
    anim(event.key);
})
function drums(btn){
    switch (btn) {
        case "w": var t1 = new Audio("./tom-1.mp3");
                  t1.play();
                  break;
        case "a": var t2 = new Audio("./tom-2.mp3");
                  t2.play();
                  break;
        case "s": var t3 = new Audio("./tom-3.mp3");
                  t3.play();
                  break;
        case "d": var sn = new Audio("./snare.mp3");
                  sn.play();
                  break;
        case "j": var cr = new Audio("./crash.mp3");
                  cr.play();
                  break;
        case "k": var t4 = new Audio("./tom-4.mp3");
                  t4.play();
                  break;
        case "l": var kb = new Audio("./kick-bass.mp3");
                  kb.play();
                  break;
        default:"Invalid";
                  break;
    }
}

function anim(anKey){
    var press = document.querySelector("."+ anKey);
    press.classList.add("pressed");
    press.classList.add(".drum:hover");
    setTimeout(function(){
        press.classList.remove("pressed");
    }, 100);
}
// var audio = new Audio("./tom-1.mp3");
// audio.play();