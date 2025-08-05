
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Versão 05 de agosto - 2.1 17:00 hs 

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
    if (vetorAmigos.length === 0) 
    {
       alert ('A lista de amigos está vazia, adicione amigos antes de sortear.')
    }
    else 
    {    
    let quantidadeDeAmigosNaLista = vetorAmigos.length
    let indiceEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let nomeSorteado = vetorAmigos[indiceEscolhido];
    
    //Exibir a mensagem com o resultado do amigo sorteado
    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é:${nomeSorteado}`;
    
    }
 }

 //Lógica para realizar a exibição dos nomes que foram escolhidos
 function atualizarLista() 
 {
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""

    for (let contador = 0; contador < vetorAmigos.length; contador++) 
    {
        const item = document.createElement('li'); 
        item.textContent = vetorAmigos[contador];
        lista.appendChild(item);
     }
 }
function reiniciarJogo()
{
   document.getElementById('listaAmigos').innerHTML = "";
   document.getElementById('resultado').innerHTML = "";
   
}