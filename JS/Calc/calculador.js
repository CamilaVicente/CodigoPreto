const somar = ( numero1,  numero2) =>  numero1 + numero2;
const subtrair = (numero1, numero2) => numero1 - numero2;
const divi = (numero1, numero2) => numero1 / numero2;
const mult  = (numero1, numero2) => numero1 * numero2;
/*function soma (numero1, numero2){
    return numero1 + numero2;
}

function subtrair (numero1, numero2){
    return numero1 - numero2;
}
function divi(numero1, numero2){
    return numero1 / numero2;
}
function mult(numero1, numero2){
    return numero1*numero2;
}
function calculadora(numero1 , numero2 , operacao){
    console.log("Bem-vindo a Calculadora do Quinto Andar")
    return operacao (numero1,numero2);
}*/
const calculadora = (operacao, numero1, numero2) => (operacao(numero1, numero2));

const calculAi = calculadora(somar,2000, 26);

 console.log(calculAi)

 