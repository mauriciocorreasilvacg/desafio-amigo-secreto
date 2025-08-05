
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let vetorAmigos = [];   //variavel array para a lista de amigos
let numeroLimite = 4;   //numero maximo de amigos 

//Função acionada quando usuário clica adicionar amigo 
function adicionarAmigo() 
{
    let nome = document.querySelector('input').value;

    if (nome == '')
    {
      alert('Por favor, insira um nome válido !');
    }
    else 
    {
      vetorAmigos.push(nome);                     //adiciona o nome no array
      document.querySelector('input').value = ''  //apenas limpa o campo
      atualizarLista()                            //imprime nomes na lista
 
    };   
}
  
function sortearAmigo()
 {
    let quantidadeDeAmigosNaLista = vetorAmigos.length
    let indiceEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let resultado = vetorAmigos[indiceEscolhido];
 
    //Exibir a mensagem com o resultado do amigo sorteado
    document.getElementById('resultado').innerHTML = `O Amigo sorteado foi:${resultado}`;
 }

 //Lógica para realizar a exibição dos nomes que foram escolhidos
 function atualizarLista() 
 {
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    for (let contador = 0; contador < vetorAmigos.length; contador++) {
        const item = document.createElement('li'); 
        item.textContent = vetorAmigos[contador];
        lista.appendChild(item);
     }
 }
