const { gets, print } =require('./funcoes-auxiliares-ex2')

let n = gets()
let maiorNumeroPar =null;
let menorNumeroImpar=null;
for(let i; i<n;i++){
    const numero =gets()
    if(numero%2 ===0){
        if(maiorNumeroPar===null || numero>maiorNumeroPar){
            maiorNumeroPar=numero
        }
    }else{
        if(menorNumeroImpar ===0 || numero<menorNumeroImpar){
            menorNumeroImpar=numero
        }
    }
}

print(`Maior número par: ${maiorNumeroPar}`)
print(`Menor número impar: ${menorNumeroImpar}`)