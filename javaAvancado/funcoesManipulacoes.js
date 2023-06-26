
function Funcao(){
    console.log(this)
}

const funcao2 = ()=>{
    console.log(this)
}

const renan={
    nome:'renan',
    funcao2,
    Funcao
}
renan.Funcao()
renan.funcao2() //Não retorna valor, mas sim, só executa o que está dentro do escopo, sem this



const pessoa={
    nome: 'Guilherme',
    idade:18
}

function gritar(prefixo){
    console.log(prefixo,this.nome)
}

gritar.call(pessoa, 'Ola')
gritar.apply(pessoa,['Oláaaa'])

function calcular(x,operacao,y){
    console.log(operacao(x,y))
}

function adicao(x,y){
    return x+y
}

function subtracao(x,y){
    return x-y;
}

function divisao(x,y){
    return x/y;
}

function multiplicacao(x,y){
    return x*y;
}

calcular(10,adicao,0);
