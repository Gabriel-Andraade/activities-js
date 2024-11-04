const button = document.querySelector("button");
if (localStorage.getItem("nome")) {
    alert ("olá "  + localStorage.getItem("nome")  + " bem vindo(a)");
}
button.addEventListener("click", trocarNome);
    function trocarNome() {
        
        const nome = prompt("Escreva seu nome");
        if (nome) {
            localStorage.setItem("nome", nome);

        button.textContent = `nome: ${nome}`;
            alert ("Olá " + nome + ", aqui vai um quis pra você");
                }
}

let valorDisplay = '';
    let operacao = null;
        let primeiroValor = null;

function adicionaValor(valor) {
    valorDisplay += valor;
    document.getElementById('display').value = valorDisplay;
}

var myName = ("Gabriel");
var myAge = ("19");