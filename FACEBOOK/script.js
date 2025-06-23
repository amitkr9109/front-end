var arr = [
    {
        name: "Amit",
        image: "https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGltYWdlfGVufDB8fDB8fHww",
        desc: "a man of age 20.",
        status: "strangers",
    },
    {
        name: "Vivek",
        image: "https://images.unsplash.com/photo-1664129673283-bc1f9430959a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "a man of age 19.",
        status: "strangers",
    },
    {
        name: "Nishant",
        image: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "a man of age 21",
        status: "strangers",
    },
];

function print(){
    var container = "";
    arr.forEach(function(value,index) {
    container += `<div class="card w-72 h-72 bg-zinc-400 p-4 rounded-xl text-black flex flex-col items-center">
    <div class="img w-20 h-20 rounded-full overflow-hidden">
        <img class="w-full h-full object-cover" src="${value.image}" alt="">
    </div>
    <h2 class="text-2xl mt-2">Name :- ${value.name}</h2>
    <p class="text-xl mt-2">Age :- ${value.desc}</p>
    <button id="${index}" class="btn px-3 py-2 mt-5 text-lg rounded-xl active:scale-95 ${value.status ==="strangers" ? "bg-blue-600" : (value.status === "request sent" ? "bg-yellow-500" : "bg-red-600")} ">${value.status === "strangers" ? "Add friend" : value.status === "request sent" ? "Request Sent" : "Remove friend"}</button>
</div>`
});
document.querySelector(".cards").innerHTML = container;
};

print();

var timer;
document.querySelector(".cards").addEventListener("click",function (e) {
    if(arr[e.target.id].status === "strangers"){
        arr[e.target.id].status = "request sent";
        print();

        let rnum = Math.floor(Math.random()*10);

        timer = setTimeout(function(){
            arr[e.target.id].status = "friends";
            print();
        },rnum*1000);
    }
    else{
        arr[e.target.id].status = "strangers";
        clearTimeout(timer);
    }   
    print();
});