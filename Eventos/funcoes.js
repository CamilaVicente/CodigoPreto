// DEFINIÇÃO DE FUNÇÃO

// uma fução é um bloco de codigos designado para realizar um tarefa.
function oProduto(n1, n2){
   return n1*n2;// retorna o produtode n1 com n2;
}
oProduto(2,5)//uma funcao é exe. quando é invocada por alguém.
console.log(oProduto(2,5)) // imprime no console e retorna 10

//FUNÇÕES COMO EXPRESSÃO

let nomeFuncao = function(){//podemos atibuir uma funçao anonima a uma variavel
   console.log("olá");
};
nomeFuncao();

//SCOPE

// O scope de uma variável é o contexto em que ela é visível.

function soma(){
   var numero = 4;
   return numero +numero;//neste exemplo, numero é uma variavel local
}
var numero = 4;
function soma(){
   return numero + numero;
}
//FUNÇOES ANINHADAS

//podemos ter uma funçao dentro da outra.
// a funcao aninhada será visivel apenas dentro da funcao pai.

function circunferencia (raio){
   function diametro(){}
}


