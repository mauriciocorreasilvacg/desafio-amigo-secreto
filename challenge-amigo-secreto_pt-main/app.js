//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
let numeroLimite = 4;

//Função acionada quando usuário clica adicionar amigo 
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    listaAmigos.push(nome);
    exibirTextoNaTela ('ul', listaAmigos);
}

function sortearAmigo() {
    let quantidadeDeAmigosNaLista = listaAmigos.length
    let indiceEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let resultado = listaAmigos[indiceEscolhido];
    exibirTextoNaTela ('ul', resultado );
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
}
