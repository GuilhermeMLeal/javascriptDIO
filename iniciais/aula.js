 /*const precoCombustivel = 5.79;
 const kmPorLitros =10;
 var km=100;

var valorGasto = km/kmPorLitros;
console.log(valorGasto)

var preco = precoCombustivel* valorGasto;
console.log(preco);
*/
/*
var numeroPar =2;

var Par = (numeroPar %2) ===0;

console.log(Par)

if (Par){
    console.log('Par')
} else if(!Par){
    console.log('Impar')
}
*/
/*var numero  = 10;

const numeroPar = (numero%2) ===0

if (numeroPar == true){
    console.log("é par")
} else {
    console.log('É ímpar')
}

var num = 1/0.3;
console.log(num.toFixed(2)); */

/*const prompt = require('prompt-sync')();
var nota1,nota2,nota3;
nota1 = parseFloat(prompt('Digite a primeira nota!'));
nota2 = parseFloat(prompt('Digite a segunda nota!'));
nota3 = parseFloat(prompt('Digite a terceira nota!'));

media();

function media(nota1,nota2,nota3){
    nota1= this.nota1;
    nota2 = this.nota2;
    nota3=this.nota3;

    let media =  (nota1+nota2+nota3)/3;

    if (media<5)
        console.log('Reprovado com '+media)
    else if (media>=5 && media<=7 )
        console.log('Recuperação com '+ media)
    else 
        console.log('Aprovado com '+media)
}
*/
/*var peso =65;
var altura =1.70;
let imc = peso / Math.pow(altura,2)

console.log(imc+'\n')

if (imc<18.5){
    console.log('Abaixo do peso')
}else if (imc>=18.5 && imc<25){
    console.log('Peso normal')
}else if (imc>=25 && imc<30){
    console.log('Acima do peso')
}else if(imc >=30 && imc<40){
    console.log('Obeso')
}else{
    console.log('Obesidade')
} */

/*function quadrado(valor){
    return valor*valor;
}
console.log(quadrado(10));
function main(){
    quadrado();
}
main();*/

function calcularImc(peso, altura){
    return peso / Math.pow(altura,2)
}

function classificarImc(imc){
    if (imc<18.5){
        return('Abaixo do peso')
    }else if (imc>=18.5 && imc<25){
        return('Peso normal')
    }else if (imc>=25 && imc<30){
        return('Acima do peso')
    }else if(imc >=30 && imc<40){
        return('Obeso')
    }else{
        return('Obesidade')
    } 
}
//main
(function (){
    var peso =65;
    var altura =1.70;
    let imc = calcularImc(peso,altura);
    console.log(imc)
    console.log(classificarImc(imc))

})() //função imediatamente invocável
