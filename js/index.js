const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) =>{
event.preventDefault();

//verifica se o nome esta vazio
if(nameInput.value === ""){
    alert("Por favor, preencha o seu nome");
    return;
}

// Verifica se o e-mail esta preenchido e se é válido
if(emailInput.value === "" || !isEmailValid(emailInput.value) ){
    alert("Por favor, preencha o seu email");
    return;
}

//verifica a se a senha esta preenchida
if (!validatePassword(passwordInput.value, 8) ){
    alert("A senha precisa de no mínimo 8 dígitos")
    return;
}
    
//Verificvar se a situação foi selecionada
if(jobSelect.value === ""){
    alert("Por favor, selecione a sua situação")
    return;
}

//Verificvar se a mensagem foi preenchida
if(messageTextarea.value === ""){
    alert("Por favor, escreva uma mensagem")
    return;
}


// se todos os campos estiverem preenchidos
form.submit();
});

// função que válida email
function isEmailValid(email){
const emailRegex = new RegExp(
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
);

if(emailRegex.test(email)){
    return true;
}
return false
}

// função que valida a senha
function validatePassword (password, minDigits){
    if(password.length >= minDigits){
        return true
    }
    return false
}