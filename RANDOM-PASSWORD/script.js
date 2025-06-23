const PasswordBox = document.querySelector(".Password");
const lenght = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_|}{[]></-+=";

function CreatePassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    const AllCharacters = uppercase + lowercase + number + symbol;

    while(lenght > password.length){
        password += AllCharacters[Math.floor(Math.random() * AllCharacters.length)];
    }
    PasswordBox.value = password;
}

function CopyPassword(){
    PasswordBox.select();
    document.execCommand("copy");
}