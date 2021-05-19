const divPromise =  document.querySelector('#resultado-promise')

fetch('https://fakestoreapi.com/products/1')
    .then(resposta => resposta.json())
    .then( batata => console.log(batata))
    .catch(erro => console.log(erro));

async function pegarJSON(){
    const resultado = await fetch('https://fakestoreapi.com/products/1');
    return  await resultado.json();
    console.log(resultadoJson);
}

const resultado = pegarJSON();

setTimeout(() =>{
    divPromise.innerText = resultado;
}, 1000)
// divPromise.innerText = 'volte no console';
