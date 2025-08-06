
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Versão 06 de agosto - 3.0 14:00 horas

let vetorAmigos = [];   //variavel array para a lista de amigos
let numeroLimite = 10;   //aceitar até 9 amigos

//Função acionada quando usuário clica adicionar amigo 
function adicionarAmigo() 
{
    let nome = document.querySelector('input').value;

    if (nome == '')
    {
      alert('Por favor, insira um nome válido !');
    }
    else { 
        if (vetorAmigos.length < 9)
         {
           vetorAmigos.push(nome);                     //adiciona o nome no array
           document.querySelector('input').value = ''  //apenas limpa o campo
           atualizarLista()                            //imprime nomes na lista
         }
         else 
           {alert('Você pode inserir no máximo 9 amigos !');}
        }
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
    let indiceSorteado = Math.floor(Math.random() * numeroLimite + 1) ;
        
    while (indiceSorteado >= quantidadeDeAmigosNaLista) 
      {
        indiceSorteado = Math.floor(Math.random() * numeroLimite + 1) ;
      } 

    let nomeSorteado = vetorAmigos[indiceSorteado];
        
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
 function limpar()
 {
  
  const lista = document.getElementById('listaAmigos')
  lista.innerHTML = "";

  const resultado = document.getElementById('resultado')
  resultado.innerHTML = "";

  vetorAmigos = [];   //variavel array para a lista de amigos
  numeroLimite = 10;   //amigos de 1 até 9

  }