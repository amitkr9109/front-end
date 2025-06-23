var btn = document.querySelector("button");
var timer = document.querySelector("h2");
var growth = document.querySelector(".growth");

btn.addEventListener("click",function(){
    var grow = 0;
    var interval = setInterval(function(){
        grow++;
        timer.innerHTML = grow + "%";
        growth.style.width = grow + "%";
    },60);
    setTimeout(function(){
        clearInterval(interval);
        btn.innerHTML = "Downloaded";
        btn.style.opacity = 0.7;
    },6000);
});