const names = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack",
    "Kara", "Liam", "Mona", "Nate", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tina",
    "Uma", "Vince", "Wendy", "Xander", "Yara", "Zane", "Abby", "Ben", "Cara", "Dylan",
    "Ella", "Finn", "Gina", "Harry", "Iris", "Jon", "Kelly", "Leo", "Mia", "Noah",
    "Owen", "Piper", "Quincy", "Rita", "Sean", "Tara", "Uri", "Violet", "Wes", "Xena"
];
function print (usernames){
    var container = "";
    usernames.forEach(function (name){
    container += `<h3 class="text-lg px-3 py-2 tracking-tight">${name}</h3>`;
});
document.querySelector(".scrollercustom").innerHTML = container;
};
print (names);

var input = document.querySelector("input");
input.addEventListener("input",function(){
    var ans = names.filter(function(name){
        return name.toLowerCase().startsWith(input.value.toLowerCase());
    });
    print(ans);
});