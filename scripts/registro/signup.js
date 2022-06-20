//CAPTURA DOS INPUTS
let nomeRegistro = document.getElementById("inputNome");
let sobrenomeRegistro = document.getElementById("inputSobrenome");
let emailRegistro = document.getElementById("inputEmail");
let senhaRegistro = document.getElementById("inputSenha");
let senhaRegistro2 = document.getElementById("inputSenha2");
let botaoRegistro = document.getElementById("botaoRegistrar");

let nomeValidado = false
let sobrenomeValidado = false
let emailValidado = false
let senhaValidada = false

botaoRegistrar.style.backgroundColor = "#979292A1";

/* Define um objeto para o usuário */
let objetoUsuarioRegistro = {
    nome: "",
    sobrenome: "",
    email: "",
    senha: ""
}

/* Adiciona o evento de click ao botão */
botaoRegistrar.addEventListener("click", function (evento) {

    //Verifica a validação
    if (validaRegistro(nomeRegistro.value, sobrenomeRegistro.value, emailRegistro.value,senhaRegistro.value, senhaRegistro2.value)) {

        evento.preventDefault();

        /* Normalização das informações*/
        nomeRegistro = normalizaTextoRetiraEspacos(nomeRegistro.value);
        sobrenomeRegistro = normalizaTextoRetiraEspacos(sobrenomeRegistro.value);
        emailRegistro = normalizaTextoRetiraEspacos(emailRegistro.value);
        senhaRegistro = normalizaTextoRetiraEspacos(senhaRegistro.value);
        senhaRegistro2 = normalizaTextoRetiraEspacos(senhaRegistro2.value);

        //Atribui as informações normalizadas ao objeto do usuário (em JS)
        objetoUsuarioRegistro.nome = nomeRegistro;
        objetoUsuarioRegistro.sobrenome = sobrenomeRegistro;
        objetoUsuarioRegistro.email = emailRegistro;
        objetoUsuarioRegistro.senha = senhaRegistro2;

        //Transforma o objeto JS em objeto JSON(textual)
        let objetoUsuarioEmJson = JSON.stringify(objetoUsuarioRegistro);

        console.log(objetoUsuarioEmJson);
    }

});

/* Verificando o input de nome */
nomeRegistro.addEventListener("keyup", () => {

    let validacaoNome = document.getElementById("validacaoNome");

    if (nomeRegistro.value) {
        validacaoNome.innerText = ""
        nomeRegistro.style.border = "2px solid transparent "
        nomeValidado = true
    } else {
        validacaoNome.innerText = "Campo obrigatório"

        nomeRegistro.style.border = "2px solid #E9554EBB"
        
    }
    //validaRegistro(nomeValidado, SobrenomeValidado, emailValidado, senhaValidada);
    
});

/* Verificando o input de sobrenome */
sobrenomeRegistro.addEventListener("keyup", () => {

    let validacaoSobrenome = document.getElementById("validacaoSobrenome");

    if (sobrenomeRegistro.value) {
        validacaoSobrenome.innerText = ""
        sobrenomeRegistro.style.border = "2px solid transparent "
        sobrenomeValidado = true
    } else {
        validacaoSobrenome.innerText = "Campo obrigatório"

        sobrenomeRegistro.style.border = "2px solid #E9554EBB"
        
    }
    //validaRegistro(nomeValidado, SobrenomeValidado, emailValidado, senhaValidada);
    
});

/* Verificando o input de senha */
emailRegistro.addEventListener("blur", () => {
    if (emailRegistro.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        validacaoEmail.innerText = ""
        emailRegistro.style.border = "2px solid transparent "
        emailValidado = true
    } else {
        validacaoEmail.innerText = "Email errado"

        emailRegistro.style.border = "2px solid #E9554EBB"
        
    }
    //validaRegistro(nomeValidado, sobrenomeValidado);
});

/* Verificando o input de senha */
senhaRegistro2.addEventListener("blur", () => {

    let validacaoSenha = document.getElementById("validacaoSenha");

    if (senhaRegistro2.value === senhaRegistro.value) {
        validacaoSenha.innerText = ""
        senhaRegistro2.style.border = "2px solid transparent"
        senhaRegistro.style.border = "2px solid transparent"
        senhaValidada = true
        
        
    } else {
        validacaoSenha.innerText = "As senhas devem ser iguais"
        senhaRegistro2.style.border = "2px solid #E9554EBB"
        senhaRegistro.style.border = "2px solid #E9554EBB"
        
        
    }
    
    validaRegistro(nomeValidado, sobrenomeValidado, emailValidado, senhaValidada);

});




/* Função que valida o acesso na página de login */
function validaRegistro(nome, sobrenome, email, senha) {

    if (nome && sobrenome && email && senha ) {
        //True
        botaoRegistrar.removeAttribute("disabled")
        botaoRegistrar.style.backgroundColor = "#7898FF";
        botaoRegistrar.innerText = "Acessar";
        return true;

    } else {
        //False
        botaoRegistrar.setAttribute("disabled", true)
        botaoRegistrar.style.backgroundColor = "#979292A1";
        botaoRegistrar.innerText = "Bloqueado";
        return false;
    }
}

