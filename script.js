const formulario = document.querySelector("form");
const email_campo = formulario.querySelector(".email");
const email_input = email_campo.querySelector("input");
const senha_campo = formulario.querySelector(".senha");
const senha_input = senha_campo.querySelector("input");

email_input.onkeyup = ()=> {
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email_input.value.match(pattern)){
        email_input.style.borderColor = "red";
        email_campo.querySelector(".erro").style.display = "block";
        email_campo.querySelector(".mensagem-erro").style.display = "block";
        email_campo.querySelector(".mensagem-erro").innerText = "Email inválido";
        email_campo.querySelector(".fa-envelope").style.color = "#C0BFC0";
    }else{
        email_input.style.borderColor = "#5271E9";
        email_campo.querySelector(".erro").style.display = "none";
        email_campo.querySelector(".mensagem-erro").style.display = "none";
        email_campo.querySelector(".fa-envelope").style.color = "#5271E9";
    }
    if(email_input.value == ""){
        email_campo.querySelector(".mensagem-erro").innerText = "O Email não pode estar vazio";
    }
}

senha_input.onkeyup = ()=> {
    if(senha_input.value != ""){
        senha_input.style.borderColor = "#5271E9";
        senha_campo.querySelector(".erro").style.display = "none";
        senha_campo.querySelector(".mensagem-erro").style.display = "none";
        senha_campo.querySelector(".fa-lock").style.color = "#5271E9";
    }else{
        senha_input.style.borderColor = "red";
        senha_campo.querySelector(".erro").style.display = "block";
        senha_campo.querySelector(".mensagem-erro").style.display = "block";
        senha_campo.querySelector(".fa-lock").style.color = "#C0BFC0";
    }
}

formulario.onsubmit = (e)=> {
    e.preventDefault();

    if(email_input.value == ""){
        email_input.style.borderColor = "red";
        email_campo.querySelector(".erro").style.display = "block";
        email_campo.querySelector(".mensagem-erro").style.display = "block";
    }else{
        let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email_input.value.match(pattern)){
            email_input.style.borderColor = "red";
            email_campo.querySelector(".erro").style.display = "block";
            email_campo.querySelector(".mensagem-erro").style.display = "block";
            email_campo.querySelector(".mensagem-erro").innerText = "Email inválido";
            email_campo.querySelector(".fa-envelope").style.color = "#C0BFC0";
        }
    }

    if(senha_input.value == ""){
        senha_input.style.borderColor = "red";
        senha_campo.querySelector(".erro").style.display = "block";
        senha_campo.querySelector(".mensagem-erro").style.display = "block";
    }

}