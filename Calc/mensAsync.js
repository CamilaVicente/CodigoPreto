const saudacao = "Bem-vindo ao sistema";
const aviso = "voce esta no sistema";
const despedida ="até mais";

setTimeout(() =>  console.log(saudacao), 2000);

setTimeout(function(){
    console.log(aviso)
}, 4000)
setTimeout(function(){
    console.log(despedida)
}, 5000)