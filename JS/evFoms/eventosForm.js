const eventoSubmit =document.querySelector('form');

eventoSubmit.addEventListener('submit', (event) => {
    const nomeObjeto = document.getElementById('meu-nome').value;
    const meuNome = nomeObjeto.value;
    const nomeSemEspaco = meuNome.trim();
    const nomeESobrenome = nomeSemEspaco.split(' ').filter(nome => nome !== '' || nome!== ' ');

    const blocklist =[ 
        'puta' ,
        'caralho',
        'shit',
        'merda',
        'cu',
        'canalha',
        'test'
    ];

    const nomeImproprio = blocklist.map(palavra => nomeESobrenome.includes(palavra)).find(elemento => elemento === true);

    if (nomeImproprio){
        alert("Boca Suja")
        event.preventDefault();
        return;
    }
   
    if (!nomeSemEspaco){
        alert("Voce precisa preencher um nome no campo")
        event.preventDefault();
        return;
    }
    
    if (nomeESobrenome.length < 2){
        alert("Favor colocar nome e sobrenome")        
        event.preventDefault();
        return;
    }
    if (nomeESobrenome.length < 5  ){
        alert("Favor preencher com mais de 5 caracteres")
        event.preventDefault();
        return;
    }
    if (nomeESobrenome.length > 100  ){
        alert("Favor preencher com menos de 100 caracteres")
        event.preventDefault();
        return;
    }
    
    event.preventDefault();
    console.log(nomeObjeto.value)
    nomeObjeto.value = nomeSemEspaco.toUpperCase();
    console.log(nomeObjeto.value)
         
});

eventoSubmit.addEventListener('reset', (event) => {
    const temCerteza = confirm('VOCÊ TEM CERTEZA DISSO????');
  
    if (temCerteza) {
      const certezaAbsoluta  = confirm('Não quer mudar de ideia?')
      if (certezaAbsoluta) {
        const ultimaChance  = confirm('Ultima Chance')
        if (ultimaChance) {
          alert('May God have mercy our nation')
          event.preventDefault()
          return;
        }
        return;
      }
      return;
    }
    console.log('isso foi um delete sem where')
})

const inputNome = document.getElementById('meu-nome');

inputNome.addEventListener('keyup' , function(event){
    this.value =this.value.toUpperCase();

    inputNome.addEventListener('input', function(event){
        console.log('tecla ' , event.target.value, 'alterada para maiusculo')  
        
        inputNomme.addEventListener('change', function(event){
            event.target.style.backgourndColor = 'red'
        })
        
    })
})