var audio = document.querySelector("audio");
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
play.addEventListener("click",function(){
    audio.play();
    pause.classList.remove("hidden");
    play.classList.add("hidden");
});
pause.addEventListener("click",function(){
    audio.pause();
    play.classList.remove("hidden");
    pause.classList.add("hidden");
});
previous.document.querySelector("click",function(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
});
next.document.querySelector("click",function(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
});