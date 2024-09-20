
let slinderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizepassword.innerHTML = slinderElement.value; 

slider.oninput = function(){
    sizepassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < slinderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerpassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;

}

function copypassword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha);

}