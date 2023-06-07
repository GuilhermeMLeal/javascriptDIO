const { gets, print } =require('./funcoes-auxiliares-ex3')

const valorSalarioBruto = gets()
const valorAdicionalDosBeneficios = gets()

function calcularPorcentagem(valor, percentual){
    return valor*(percentual/100);
}

function pegarAliquota (salario){
    if(salario>=0 && salario<=1100){
        return 5;

    }else if(salario >=1100.01 && salario <=2500){
        return 10;
    } else {
        return 15
    }
}
const aliquotas = pegarAliquota(valorSalarioBruto)
const valorImposto = calcularPorcentagem(valorSalarioBruto,aliquotas)
const valorTransferencia = valorSalarioBruto - valorImposto+valorAdicionalDosBeneficios

print(valorTransferencia)