//Importação e exportação de arquivos de arquivos
const {gets, print} =require('./getsEprint');

/*const numeroSorteado = [];

for(let i=0;i<5;i++){
    const numeroSorteados = gets();
    numeroSorteado.push(numeroSorteados);
}
let maiorValor = 0;
for (let i= 0 ; i<numeroSorteado.length;i++){
    const numeroSorteados= numeroSorteado[i]
    if(numeroSorteados>maiorValor){
        maiorValor= numeroSorteados;
    }
}
print(maiorValor);*/

let maiorValorEncontrado =0;

for (let i =0; i<5 ; i++){
    const numeroSorteados= gets()
    if(numeroSorteados>maiorValorEncontrado){
        maiorValorEncontrado=numeroSorteados;
    }
   
}
print(maiorValorEncontrado)