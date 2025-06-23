function main(){
    var container = "";
    for (var i=1; i<71; i++){
    var num = Math.floor(Math.random()* 20);
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    container += `<div style = "background-color: rgb(${red}, ${green},${blue});" class="a w-20 h-20 rounded-full flex items-center justify-center text-3xl">${num}</div>`;
    };
    document.querySelector(".bubble").innerHTML = container;
};
main();
setInterval(main,1000);