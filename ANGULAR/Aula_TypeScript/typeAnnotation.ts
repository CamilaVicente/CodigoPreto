//Strings
let nome2: string = 'Camila Vicente';
console.log(nome2)

//Array
let animais : string[] = ['elefante', 'cachorro','gato']
console.log(animais)

let carro: {
    nome: string;
    ano: number;
    preco: number;
};

carro = {nome: 'Corsa', ano: 2007 , preco: 15000}
console.log(carro);

function multi(num1: number, num2: number){
    return num1*num2;
}
console.log(multi(2,5));